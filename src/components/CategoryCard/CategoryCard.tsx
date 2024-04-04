
import Card from "../Card/Card";
import {TCategory} from "../../store/slices/categorySlice";
import {Link} from "react-router-dom";
import './CategoryCard.css'

const CategoryCard = (category: TCategory) => {
    return (
        <div className='full-width'>
            <Card>
                <Link to={`/categories/${category.slug || category.id}`} className='category-card'>
                    <img className='category-image' src={category.img} alt={category.title}/>
                    <h4 className='title'>{category.title}</h4>
                </Link>
            </Card>
        </div>
    )
}

export  default CategoryCard;