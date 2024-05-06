export type TProduct = {
    id: number | string,
    title_en: string,
    title_ru: string,
    title_hy: string,
    description_en?: string,
    description_ru?: string,
    description_hy?: string,
    size_en?: string,
    size_ru?: string,
    size_hy?: string,
    categoryId: string | number,
    img?: string,
}
export default TProduct