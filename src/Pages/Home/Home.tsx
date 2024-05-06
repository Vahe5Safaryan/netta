import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About from "../About/About";
import axios from "axios";
import { useTranslation } from "react-i18next";
import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";
import '../../components/Slider/Slider.css';
import '../../components/CategoryCard/CategoryCard.css';

const Arrow = ({ className, style, onClick }: any) => (
  <div
    className={className}
    style={{ ...style, display: "block" }}
    onClick={onClick}
  />
);

const Home = () => {
  const { t, i18n } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [sliderData, setSliderData] = useState<any>([]); 
  const [categoryData, setCategoryData] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.netta.am/api/home');
        setSliderData(response.data.slider);
        setCategoryData(response.data.categories);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current: number) => setCurrentSlide(current),
  };

  return (
    <div className="">
      <div>
        <div className="slider-container">
          <Slider {...settings}>
            {sliderData.map((item: any, index: number) => (
              <div key={item.id} className="slider-item">
                {item.img && (
                  <img
                    src={`https://api.netta.am/storage/img/slider/${item.img}`}
                    alt="Photo"
                  />
                )}
                <div
                  className={`slider-item-text ${
                    currentSlide === index ? "animate" : ""
                  }`}
                >
                  <h1>{item[`title_${i18n.language}`]}</h1>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="container">
        <div className="grid-3 grid-md-2 grid-sm-1 grid-gap-5 category-section mt50">
          {categoryData.map((category: any) => (
            <div className='full-width'>
            <Card>
                <Link to={`/categories/${category.slug || category.id}`} className='category-card'>
                    <img className='category-image' src={`https://api.netta.am/storage/img/category/${category.img}`} alt={category.title_hy}/>
                    <h4 className='title'>{category[`title_${i18n.language}` as keyof typeof category]}</h4>
                </Link>
            </Card>
        </div>
          ))}
        </div>
      </div>

      <div className="mt100">
        <About short page="home" />
      </div>
    </div>
  );
};

export default Home;
