import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Card from "../Card/Card";
import { TCategory } from "../../store/slices/categorySlice";
import './CategoryCard.css';

const CategoryCard: React.FC<{ category: TCategory }> = ({ category }) => {
    const { t, i18n } = useTranslation();

    return (
        <div className='full-width'>
            <Card>
                <Link to={`/categories/${category.slug || category.id}`} className='category-card'>
                    <img className='category-image' src={`https://api.netta.am/storage/img/category/${category.img}`} alt={category.title_hy}/>
                      <h4 className='title'>{category[`title_${i18n.language}` as keyof typeof category]}</h4>
                </Link>
            </Card>
        </div>
    );
};

export default CategoryCard;
