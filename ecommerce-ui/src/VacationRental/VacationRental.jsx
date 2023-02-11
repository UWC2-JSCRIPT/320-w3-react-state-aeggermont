import React from 'react';
import PropTypes from 'prop-types';
import './vacation-rental.css';
import Box from '@mui/material/Box';

function VacationRental(props) {
    return (

        <div> 
            <Box 
                bgcolor={props.color} 
                width={{xs: 550, sm: 240, md: 280, lg: 300 }} 
                height={{xs: 150, sm: 160, md: 200, lg: 200 }}>
                    <div>
                        <span className='label'> Hello World</span>
                    </div>
            </Box>
        </div>
    )
}

export default VacationRental;

        {/*
            <div className='vacation-rental-container'>
                <span> { props.property }</span>
            </div>
        */}