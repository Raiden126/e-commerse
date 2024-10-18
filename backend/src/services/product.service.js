const Category = require("../models/category.model");
const Product = require("../models/product.model");

async function createProduct (reqData) {
    try {
        let topLevel = await Category.findOne({name: reqData.topLevelCategory});
    
        if(!topLevel){
            topLevel = new Category ({
                name: reqData.topLevelCategory,
                level: 1
            })
    
            await topLevel.save();
        }
    
        let secondLevel = await Category.findOne({
            name: reqData.secondLevelCategroy,
            parentCategory: topLevel._id,
        })
    
        if(!secondLevel) {
            secondLevel = new Category({
                name: reqData.secondLevelCategroy,
                parentCategory: topLevel._id,
                level: 2
            })
            await secondLevel.save();
        }
    
        let thridLevel = await Category.findOne({
            name: reqData.thridLevelCategroy,
            parentCategory: secondLevel._id,
        })
    
        if(!thridLevel) {
            thridLevel = new Category({
                name: reqData.thridLevelCategroy,
                parentCategory: secondLevel._id,
                level: 3
            })
            await thridLevel.save();
        }
    
        const product = new Product({
            title : reqData.title,
            color: reqData.color,
            description : reqData.description,
            discountedPrice: reqData.discountedPrice,
            discountedPersent: reqData.discountedPersent,
            imageUrl: reqData.imageUrl,
            brand: reqData.brand,
            price: reqData.price,
            size: reqData.size,
            quantity: reqData.quantity,
            category: thridLevel._id,
        })
    
        return await product.save();
    
    } catch (error) {
        console.log('error creating the product in the create product service', error.message)
    }
}

async function deleteProduct (productId) {
    const product = await findProductById(productId);

    await Product.findByIdAndDelete(product);
    return "Product deleted successfully"
}

async function updateProduct (productId, reqData) {
    return await Product.findByIdAndUpdate(productId, reqData);
}

async function findProductById(id) {
    const product = await Product.findById(id).populate("category").exec();

    if(!product) {
        throw new Error ("Product is not found with id", id);
    }

    return product;
}

async function getAllProducts(reqQuery) {
    try {
        let {
            category, color, size, minPrice, maxPrice,
            minDiscount, sort, stock, pageNumber, pageSize
        } = reqQuery;

        pageSize = pageSize || 10;
        pageNumber = pageNumber || 1;
        
        let query = Product.find().populate("category");

        if (category) {
            const existCategory = await Category.findOne({ name: category });
            if (existCategory) {
                query = query.where("category").equals(existCategory._id);
            } else {
                console.log('category is not found')
                return { content: [], currentPage: 1, totalPages: 0 };
            }
        }

        if (color) {
            const colorSet = new Set(color.split(",").map(c => c.trim().toLowerCase()));
            const colorRegex = colorSet.size > 0 ? new RegExp([...colorSet].join("|"), "i") : null;
            if (colorRegex) {
                query = query.where("color").regex(colorRegex);
            }
        }

        if (size) {
            const sizeSet = new Set(size.split(",").map(s => s.trim()));
            if (sizeSet.size > 0) {
                query = query.where("size.name").in([...sizeSet]);
            }
        }

        if (minPrice || maxPrice) {
            query = query.where('discountedPrice');
            if (minPrice) query = query.gte(minPrice);
            if (maxPrice) query = query.lte(maxPrice);
        }

        if (minDiscount) {
            query = query.where('discountedPersent').gt(minDiscount);
        }

        if (stock) {
            if (stock === "in_stock") {
                query = query.where("quantity").gt(0);
            } else if (stock === "out_of_stock") {
                query = query.where("quantity").eq(0);
            }
        }

        if (sort) {
            const sortDirection = sort === "price_high" ? -1 : 1;
            query = query.sort({ discountedPrice: sortDirection });
        }

        const totalProducts = await Product.countDocuments(query);
        const skip = (pageNumber - 1) * pageSize;

        query = query.skip(skip).limit(pageSize);

        const products = await query.exec();
        const totalPages = Math.ceil(totalProducts / pageSize);

        console.log('products', products)

        return { content: products, currentPage: pageNumber, totalPages };

    } catch (error) {
        console.log('getting product data error', error);
        throw error; // Ensure error propagates to the controller
    }
}

async function createMultipleProduct(products) {
    try {
        for(let product of products) {
            await createProduct(product);
        }
    } catch (error) {
        console.log('error creating product', error.message)
    }
}

module.exports = {
    createProduct,
    deleteProduct,
    updateProduct,
    getAllProducts,
    findProductById,
    createMultipleProduct
}