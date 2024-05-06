import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import axios from "axios";

const Category = () => {
    const { id } = useParams();
    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const response = await axios.get(`https://api.netta.am/api/products/${id}`);
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching category:', error);
            }
        };

        fetchCategory();
    }, [id]);

    return (
        <div className='container'>
            <div className='grid-3 grid-md-2 grid-sm-1 grid-gap-5 mt50'>
                {products && products.map((item: any) => (
                    <ProductCard product={item} key={item.id} />
                ))}
            </div>
        </div>
    );
};

export default Category;
