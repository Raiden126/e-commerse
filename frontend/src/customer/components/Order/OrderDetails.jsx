import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetails = () => {
  return (
    <div className='lg:px-20 px-5'>
        <div>
            <h1 className='font-bold text-xl py-7'>Delivery Address</h1>
        <AddressCard />
        </div>
        <div className='py-20'>
            <OrderTracker activeStep={3} />
        </div>
        <Grid className= "space-y-5" container>
            {[1,1,1,1,1,1,1].map((item) => <Grid className= "shadow-xl rounded-md p-5 border" sx={{alignItems: "center",justifyContent: "space-between"}} item container>
                <Grid item xs={6}>
                <div className='flex items-center space-x-4'>
                    <img className='object-cover object-top h-[5rem] w-[5rem]' src='https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/x/f/6/xxl-new-white-nofilter-original-imaghzggudfezpr8.jpeg?q=70' alt='' />
                    <div className='ml-5 space-y-2'>
                        <p className='font-semibold'>Men slim mid rice black jeans</p>
                        <p className='space-x-5 opacity-50 text-xs font-semibold'><spa>Color: Black</spa><span>Size: M</span></p>
                        <p className=''>Seller: linaria</p>
                        <p>Rs 1211</p>
                    </div>
                </div>
                </Grid>
                <Grid item>
                    <Box sx={{color: deepPurple[500]}}>
                        <StarBorderIcon sx={{fontSize: "2rem"}} className='px-2' />
                        <span>Rate & Review Product</span>
                    </Box>
                </Grid>
            </Grid>)}
        </Grid>
    </div>
  )
}

export default OrderDetails