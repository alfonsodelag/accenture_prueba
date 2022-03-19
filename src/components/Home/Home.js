import React, { useState } from 'react';
import { Typography, Button } from '@mui/material';

const Home = (props) => {

    return (
        <div className="flex justify-center items-center h-screen">
            <div>
                <div className="w-full">
                    <h1 className="text-center font-semibold text-4xl" style={{ color: '#020202' }}>Welcome!</h1>
                    <p className="text-center" style={{ color: '#777A7A' }}>The last time you accessed was</p>
                </div>
                <div className="flex justify-center w-full">
                    <Button className="w-full" type="submit" style={{ backgroundColor: '#3071E6' }} >
                        <Typography className="uppercase text-white font-semibold">Logout</Typography>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Home;