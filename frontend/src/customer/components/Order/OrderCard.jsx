import { Grid } from '@mui/material'
import AdjustIcon from '@mui/icons-material/Adjust';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
    const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/account/order/${5}`)} className='p-5 shadow-md shadow-black hover:shadow-2xl border'>
        <Grid container spacing={2} sx={{justifyContent: "space-between"}}>
            <Grid item xs= {6}>
                <div className='flex cursor-pointer'>
                    <img className='object-cover object-top h-[5rem] w-[5rem]' src='https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/x/f/6/xxl-new-white-nofilter-original-imaghzggudfezpr8.jpeg?q=70' alt='' />
                    <div className='ml-5 space-y-2'>
                        <p className=''>Men slim mid rice black jeans</p>
                        <p className='opacity-50 text-sm font-semibold'>Size: M</p>
                        <p className='opacity-50 text-sm font-semibold'>Color: Black</p>
                    </div>
                </div>
            </Grid>
            <Grid item sx={2}>
                <p>Rs 1099</p>
            </Grid>
            <Grid item sx={4}>
                {true && <div>
                    <p>
                    <AdjustIcon sx={{width: "15px", height: "15px"}} className='text-green-600 mr-2'/>
                    <span>
                        Delivered on March 03
                    </span>
                </p>
                <p className='text-xs'>
                    Your Item Has Been Delivered
                </p>
                </div> }
                {false && <p>
                    <span>
                        Expected Delivery On Mar 03
                    </span>
                </p>}
            </Grid>
        </Grid>
    </div>
  )
}

export default OrderCard