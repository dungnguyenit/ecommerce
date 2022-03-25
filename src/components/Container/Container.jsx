import "./Container.scss"
import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import image1 from '../image/Image1.png';
import image2 from '../image/Image2.png';
import image3 from '../image/Image3.png';
import image4 from '../image/Image4.png';
import image5 from '../image/Image5.png';
import image6 from '../image/Image5.png';
import image7 from '../image/Image6.png';
// import { TempleHinduSharp } from "@mui/icons-material";

const item = [
    {
        img: image1,
        price:"2,6000",
        name:"COOMBES",
    },
    {
        img: image2,
        price:"590",
        name :"Keeve Set",

    },
    {
        img: image3,
        price:"950",
        name:"Nillè",
    },
    {
        img: image4,
        price:"90",
        name:"Blanko",
    },
    {
        img: image5,
        price:"890",
        name:"Momo"
    },
    {
        img: image6,
        price:"120",
        name:"Penemillè"
    },
    {
        img: image7,
        price:"420",
        name:"Kappu"
    }
]


const Container = () => {
    const [value, setValue] = React.useState([0, 100]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className="Container">
            <div className="Container_git">
                <div className="list_produc  ">
                    
                    <p>FILTER</p>
                    <select className="listProduc">
                        <option value="">Collection</option>
                        <option value="">kjjskfsjk</option>
                    </select>
                    <select className="listProduc">
                        <option value="">Color</option>
                        <option value="">kjjskfsjk</option>
                        <option value="">hsahhsad</option>
                    </select>
                    <select className="listProduc">
                        <option value="">Category</option>
                        <option value="">kjjskfsjk</option>
                        <option value="">hsahhsad</option>
                    </select>
                    <h3 className="listText">Price      Range</h3>
                    <Box sx={{ width: 275 }}>
                        <Slider
                            getAriaLabel={() => 'Temperature range'}
                            value={value}
                            onChange={handleChange}
                            valueLabelDisplay="auto"

                        />
                    </Box>
                </div>
                {
                    item.map((items) => (
                        <div className="list_produc">
                            <div class="card">
                                <img src={items.img} alt="" class="avata" />
                                <div class="card-left">
                                    <p>{items.name}</p>
                                    <p>Lounge</p>
                                    <span>
                                        <Stack spacing={1}>
                                            <Rating name="half-rating"
                                                defaultValue={2.5}
                                                precision={0.5} />
                                        </Stack>
                                    </span>
                                </div>
                                <div class="card-right">
                                    <p>${items.price}</p>
                                    <img src={require('../image/Add to Cart Button.png')}
                                        alt="logo"
                                        className="logo" />
                                </div>
                            </div>


                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Container