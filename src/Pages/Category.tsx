import {useParams} from "react-router-dom";
import {useTypedSelector} from "../store/store";
import {useEffect, useState} from "react";
import {TCategory} from "../store/slices/categorySlice";
import ProductCard from "../components/ProductCard/ProductCard";
import axios from "axios";

const Category = () => {
    const {id} = useParams()
    const { categories } = useTypedSelector(state => state.category)
    const { products } = useTypedSelector(state => state.product)
    const [category, setCategory] = useState<TCategory>()

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const response = await axios.get(`https://api.netta.am/api/init`);
                setCategory(response.data);
            } catch (error) {
                console.error('Error fetching category:', error);
            }
        };

        fetchCategory();
    }, [categories, id]);

    return (
        <div className='container'>
            <div>
                <h1 className='mt50 text-primary'>{category?.title}</h1>
            </div>
            <div className='grid-3 grid-md-2 grid-sm-1 grid-gap-5 mt50'>
                {products.map((item) => (<ProductCard {...item} key={item.id} />))}
            </div>
        </div>
    )
}
export default Category;







// import {useParams} from "react-router-dom";
// import {useTypedSelector} from "../store/store";
// import {useEffect, useState} from "react";
// import {TCategory} from "../store/slices/categorySlice";
// import ProductCard from "../components/ProductCard/ProductCard";
//
// const Category = () => {
//     const {id} = useParams()
//     const { categories } = useTypedSelector(state => state.category)
//     const { products } = useTypedSelector(state => state.product)
//     const [category, setCategory] = useState<TCategory>()
//     useEffect(() => {
//         // TODO: instead of finding necessary category from store it's would be better to do fetch('/categries/:categoryId')
//         setCategory(categories.find((item) => {
//             return item.id === Number(id) || id === item.slug
//         }))
//         // TODO: instead of using mock data you will need to do fetch by category id and set fetched products to "$store"
//     }, [categories, id])
//
//     return (
//         <div className='container'>
//             <div>
//                 <h1 className='mt50 text-primary'>{category?.title}</h1>
//             </div>
//             <div className='grid-3 grid-md-2 grid-sm-1 grid-gap-5 mt50'>
//                 {products.map((item) => (<ProductCard {...item} key={item.id} />))}
//             </div>
//         </div>
//     )
// }
// export default Category;