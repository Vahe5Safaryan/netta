import Card from "../Card/Card";
import { TProduct } from "../../store/slices/productSlice";
import "./ProductCard.css"
import { useEffect, useState } from "react";
import axios from "axios";

const ProductCard = ({ id }: { id: string | number }) => {
    const [product, setProduct] = useState<TProduct | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get<TProduct>(`https://api.netta.am/api/products/${id}`);
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();
    }, [id]);

    if (!product) {
        return null;
    }

    return (
        <Card>
            <div className='product-card'>
                <img src={product.img} alt="img"/>
                <h4 className='product-title'>{product.title}</h4>
                <div>
                    {product.attributes ? product.attributes.map((attribute, index) => (
                        <p key={index}>{attribute.name}։ <b>{attribute.value}լ</b></p>
                    )) : null}
                </div>
                <p className='product-description'>{product.description}</p>
            </div>
        </Card>
    )
}

export default ProductCard;





















// import Card from "../Card/Card";
// import {TProduct} from "../../store/slices/productSlice";
// import "./ProductCard.css"
//
// const ProductCard = (product: TProduct) => {
//     return (
//         <Card>
//             <div className='product-card'>
//                 <img src={product.img} alt="img"/>
//                 <h4 className='product-title'>{product.title}</h4>
//                 <div>
//                     {product.attributes.map( (attribute)=> (<p key={attribute.name}>{attribute.name}։ <b>{attribute.value}լ</b></p>))}
//                 </div>
//                 <p className='product-description'>{product.description}</p>
//             </div>
//         </Card>
//     )
// }
//
// export default ProductCard;
