import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";
import React, {useEffect} from "react";
import Localization from "../Localization/Localization";
import axios from "axios";

type TDynamicRoute = {
    id: string | number,
    slug?: string,
    title: string
}
const Menu = ({dynamicRoutes}:{dynamicRoutes: TDynamicRoute[]}) => {
    const {t} = useTranslation();

    // useEffect(() => {
    //     axios.get('https://api.netta.am/api/about-us')
    //         .then(response => {
    //             const newText = response.data.description || '';
    //             setText(newText);
    //         })
    //         .catch(error => {
    //             console.error('Ошибка при выполнении запроса:', error);
    //         });
    // }, []);

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