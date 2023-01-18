import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import CircleFrame from './circular';
import projectsinfo from './data/projectsdata';


function Slider() {
    const responsive = {
        0: {
            items: 1,
        },
        600: {
            items: 3,
        },
        1000: {
            items: 3,
        },
        1400: {
            items: 3,
        },
    };
    return (<div className="Slider">
        <OwlCarousel className="owl-theme" responsive={responsive} stagePadding={50} autoplay loop margin={10} dots={false} >
            {projectsinfo.map(element => (
                <div className="item">
                    <CircleFrame content={element.name} bg={element.bg} href={element.link}/>

                </div>
                ))}

        </OwlCarousel>;
    </div>);
}


export default Slider;
