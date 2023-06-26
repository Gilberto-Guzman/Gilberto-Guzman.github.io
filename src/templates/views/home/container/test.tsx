import React from 'react';
import { Box } from '@mui/material';
import Carousel from "react-material-ui-carousel";

const images = [
    {
        image: 'https://via.placeholder.com/500x300',
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
            <Carousel animation="slide" >
                {images.map((item, index) => (
                    <Box key={index}>
                        <img src={item.image} alt={`Image ${index + 1}`} style={{ width: '100%' }} />
                    </Box>
                ))}
            </Carousel>
        </Box >
    );
};



export default App;
