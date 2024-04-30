import React, { useState, useEffect } from "react";
import '../../components/Slider/Slider.css'
import './Home.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTypedSelector } from "../../store/store";
import "../../components/CategoryCard/CategoryCard";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import About from "../About/About";
import {useTranslation} from "react-i18next";
import axios from "axios";


interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const Arrow: React.FC<ArrowProps> = ({ className, style, onClick }) => (
    <div
        className={className}
        style={{ ...style, display: "block", }}
        onClick={onClick}
    />
);

const Home = () => {
    const {t} = useTranslation();
    const { sliders } = useTypedSelector(state => state.home)
    const { categories } = useTypedSelector(state => state.category)
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [photoData, setPhotoData] = useState<any>(null);

    useEffect(() => {
        const fetchPhotoData = async () => {
            try {
                const response = await axios.get('https://api.netta.am/api/home');
                console.log(response.data);
                setPhotoData(response.data.url);
            } catch (error) {
                console.error('Error fetching photo data:', error);
            }
        };

        fetchPhotoData();
    }, []);


    const settings = {
        dots: true,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        afterChange: (current: number) => setCurrentSlide(current)
    };

    return (
        <div className=''>
            <div>
                <div className="slider-container">
                    <Slider {...settings}>
                        {sliders.map((item, index) => (
                            <div key={item.id} className='slider-item'>
                                <img src={photoData} alt="Photo" />
                                <div className={`slider-item-text ${currentSlide === index ? 'animate' : ''}`}>
                                    <h1>{item.title}</h1>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            <div className='container'>
                <div className="grid-3 grid-md-2 grid-sm-1 grid-gap-5 category-section mt50">
                    {categories.map(category =>
                        (<CategoryCard {...category} key={category.id}/>)
                    )}
                </div>
            </div>

            <div className=' mt100'>
                <About short page="home"/>
            </div>
        </div>
    )
}

export default Home;







// import React, { useState, useEffect } from "react";
// import '../../components/Slider/Slider.css'
// import './Home.css'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { useTypedSelector } from "../../store/store";
// import "../../components/CategoryCard/CategoryCard";
// import CategoryCard from "../../components/CategoryCard/CategoryCard";
// import About from "../About/About";
// import {useTranslation} from "react-i18next";
//
//
// interface ArrowProps {
//     className?: string;
//     style?: React.CSSProperties;
//     onClick?: React.MouseEventHandler<HTMLDivElement>;
// }
//
// const Arrow: React.FC<ArrowProps> = ({ className, style, onClick }) => (
//     <div
//         className={className}
//         style={{ ...style, display: "block", }}
//         onClick={onClick}
//     />
// );
//
// const Home = () => {
//     const {t} = useTranslation();
//     const { sliders } = useTypedSelector(state => state.home)
//     const { categories } = useTypedSelector(state => state.category)
//     const [currentSlide, setCurrentSlide] = useState<number>(0);
//
//     useEffect(() => {
//         setCurrentSlide(0);
//     }, []);
//
//     const settings = {
//         dots: true,
//         arrows: true,
//         infinite: false,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         nextArrow: <Arrow />,
//         prevArrow: <Arrow />,
//         afterChange: (current: number) => setCurrentSlide(current)
//     };
//
//     return (
//         <div className=''>
//             <div>
//                 <div className="slider-container">
//                     <Slider {...settings}>
//                         {sliders.map((item, index) => (
//                             <div key={item.id} className='slider-item'>
//                                 <img src={item.img} alt={item.title}/>
//                                 <div className={`slider-item-text ${currentSlide === index ? 'animate' : ''}`}>
//                                     <h1>{item.title}</h1>
//                                 </div>
//                             </div>
//                         ))}
//                     </Slider>
//                 </div>
//             </div>
//
//             <div className='container'>
//                 <div className="grid-3 grid-md-2 grid-sm-1 grid-gap-5 category-section mt50">
//                     {categories.map(category =>
//                         (<CategoryCard {...category} key={category.id}/>)
//                     )}
//                 </div>
//             </div>
//
//             <div className=' mt100'>
//                 <About short page="home"/>
//             </div>
//         </div>
//     )
// }
//
// export default Home;
