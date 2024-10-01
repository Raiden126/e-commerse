import { Button, IconButton } from "@mui/material";
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import React from "react";

const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/x/f/6/xxl-new-white-nofilter-original-imaghzggudfezpr8.jpeg?q=70"
            alt=""
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">Men Slim Mid Risse Black Jeans</p>
          <p className="opacity-70">Size: L, White</p>
          <p className="opacity-70 mt-2">Seller: Zudio Fashion</p>
          <div className="flex space-x-5 items-center pt-6">
            <p className="font-semibold">Rs199</p>
            <p className="opacity-50 line-through">Rs211</p>
            <p className="text-green-500 ">5%OFF</p>
          </div>
        </div>
        
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
            <div className="flex items-center space-x-2">
                <IconButton className="">
                    <DoDisturbOnIcon />
                </IconButton>
                <span className="py-1 px-7 border rounded-sm">
                <IconButton sx={{color: "RGB(145 85 253)"}}>
                    <AddCircleIcon />
                </IconButton>
                </span>
            </div>
            <div>
                <Button sx={{color: "RGB(145 85 253)"}}>Remove</Button>
            </div>
        </div>
    </div>
  );
};

export default CartItem;
