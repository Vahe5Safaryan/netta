import Card from "../Card/Card";
import "./ProductCard.css"
import i18n from "../../i18n";
import { t } from "i18next";

const ProductCard = ({ product }: { product: any }) => {
    return (
        <Card>
            <div className='product-card'>
                <img src={`https://api.netta.am/storage/img/products/${product['img']}`} alt="img"/>
                <h4 className='product-title'>{product[`title_${i18n.language}` as keyof typeof product]}</h4>
                <div>
                    <p>{t('size')}։ <b>{product[`size_${i18n.language}` as keyof typeof product]}</b></p>
                </div>
                <p className='product-description'>{product[`description_${i18n.language}` as keyof typeof product]}</p>
            </div>
        </Card>
    )
}

export default ProductCard;
