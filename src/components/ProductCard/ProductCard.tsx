import Card from "../Card/Card";
import {TProduct} from "../../store/slices/productSlice";
import "./ProductCard.css"

const ProductCard = (product: TProduct) => {
    return (
        <Card>
            <div className='product-card'>
                <img src={product.img} alt="img"/>
                <h4 className='product-title'>{product.title}</h4>
                <div>
                    {product.attributes.map( (attribute)=> (<p key={attribute.name}>{attribute.name}։ <b>{attribute.value}լ</b></p>))}
                </div>
                <p className='product-description'>{product.description}</p>
            </div>
        </Card>
    )
}

export default ProductCard;