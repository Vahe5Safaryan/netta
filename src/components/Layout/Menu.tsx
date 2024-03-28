import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";
import React from "react";
import Localization from "../Localization/Localization";

type TDynamicRoute = {
    id: string | number,
    slug?: string,
    title: string
}
const Menu = ({dynamicRoutes}:{dynamicRoutes: TDynamicRoute[]}) => {
    const {t} = useTranslation();

    return <>
        <NavLink to="/"> {t('Home')} </NavLink>
        {dynamicRoutes.map((item) => {
            return (
                <NavLink to={`/categories/${item.slug || item.id}`}
                         key={item.id}> {item.title}
                </NavLink>
            )
        })}
        <NavLink to='/about'> {t('About')} </NavLink>
        <NavLink to='/contact'> {t('Contact')} </NavLink>

        <div>
            <Localization/>
        </div>
    </>
}

export default Menu