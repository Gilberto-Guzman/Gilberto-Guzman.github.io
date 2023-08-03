import React from 'react';
import { Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

import Testimage from '../../../public/images/home/test2.jpg';

const images = [
    {
        image: Testimage,
        caption: 'Image 1',
    },
    {
        image: 'https://via.placeholder.com/500x300',
        caption: 'Image 2',
    },
    {
        image: 'https://via.placeholder.com/500x300',
        caption: 'Image 3',
    },
];

const App: React.FC = () => {

    return (
        <Box sx={{ margin: 5 }} >
            <Carousel animation='slide' >
                {images.map((item, index) => (
                    <Box key={index}>
                        <img src={item.image} alt={`Image ${index + 1}`} style={{ height: '720px', width: '1270px' }} />
                    </Box>
                ))}
            </Carousel>
        </Box >
    );
};



export default App;
