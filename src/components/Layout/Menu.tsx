import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import React from "react";
import Localization from "../Localization/Localization";

type TDynamicRoute = {
    id: string | number,
    slug?: string,
    title_en?: string,
    title_ru?: string,
    title_hy?: string,
}

const Menu = ({ dynamicRoutes }: { dynamicRoutes: TDynamicRoute[] }) => {
    const { t, i18n } = useTranslation(); // Destructuring i18n from useTranslation()

    return (
        <>
            <NavLink to="/"> {t('Home')} </NavLink>
            {dynamicRoutes.map((item) => {
               return (
                <NavLink to={`/categories/${item.slug || item.id}`} key={item.id}>
                    {(item as any)[`title_${i18n.language}`]}
                </NavLink>
            )
            })}
            <NavLink to='/about'> {t('About')} </NavLink>
            <NavLink to='/contact'> {t('Contact')} </NavLink>

            <div>
                <Localization/>
            </div>
        </>
    );
}

export default Menu;
