import {NavLink, Outlet} from "react-router-dom";
import React, {useEffect, useState} from "react";
import "./Layout.css";
import {useTypedSelector} from "../../store/store";
import Menu from "./Menu";
import {FaBars, FaPhoneVolume} from "react-icons/fa6";
import {useOutsideClick} from "../../hooks/useOuterClick";
import {MdMarkEmailRead} from "react-icons/md";
import { ImFacebook2 } from "react-icons/im";
import { ImInstagram } from "react-icons/im";
import {useTranslation} from "react-i18next";


const Layout = () => {
    const {t} = useTranslation();
    const {categories} = useTypedSelector(state => state.category)
    const {phone, email} = useTypedSelector(state => state.contact)
    const [isMobile, setIsMobile] = useState(false)
    const [menuOpened, setMenuOpened] = useState(false)

    const menuRef = useOutsideClick(() => {
        setMenuOpened(false)
    })
    useEffect(() => {
        const listener = () => {
            setIsMobile(window.innerWidth < 1024)
        }
        listener()

        window.addEventListener('resize', listener)

        return () => {
            window.removeEventListener('resize', listener)
        }
    }, [])
    
    return (
        <>
            <div className="header-top">
                <div className="container">
                    <div className="flex justify-end grid-gap-5 pa-3">
                        <div className='top-header-item'>
                            <FaPhoneVolume size={13} color='#eee'/><a href={`tell:${phone}`}>{phone}</a>
                        </div>
                        <div className='top-header-item'>
                            <MdMarkEmailRead size={15} color='#eee'/><a href={`mailto:${email}`}>{email}</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='content'>
                <div className='container'>
                    <div className='header-logo'>
                        <NavLink to="/" className="logo">
                            <img src='/assets/logo/logo.jpg' alt="Logo"/>
                        </NavLink>
                    </div>
                    <div>
                        <header>
                            {!isMobile ? <Menu dynamicRoutes={categories}/> : <div className="menu-toggler" onClick={() => setMenuOpened(value => !value)}>
                                <FaBars size={30}/>
                            </div>}
                        </header>
                    </div>
                </div>
            </div>

            {isMobile && <div ref={menuRef} className={['mobile-menu', (menuOpened ? 'opened' : '')].join(' ')}>
                <Menu dynamicRoutes={categories}/>
            </div>}
            
            <Outlet/>

            <footer>
                <div className="container">
                    <div className="container-section grid-3">
                        <div className='footer-left-section'>
                            <NavLink to="/" className="logo">
                                <img src='/assets/logo/logo.jpg' alt="Logo"/>
                            </NavLink>

                            <div className='footer-left-section-social'>
                                <NavLink to='https://www.facebook.com/mayroptics/posts/720976207919000/?locale=hy_AM' target="_blank">
                                    <ImFacebook2 size={20}/>
                                </NavLink>
                                <NavLink to='https://www.instagram.com/' target="_blank">
                                    <ImInstagram size={20}/>
                                </NavLink>
                            </div>

                            <div className='text-small'>
                                {t("All copyrights are reserved")}. @ 2024
                            </div>
                        </div>
                        <div></div>
                        <div>
                            <p className='footer-section-title'> {t('Sitemap')}</p>
                            <div className="footer-section">
                                <NavLink to="/"> {t('Home')} </NavLink>
                                <NavLink to='/about'> {t('About')} </NavLink>
                                <NavLink to='/contact'> {t('Contact')} </NavLink>
                                {categories.map((item) => {
                                    return (
                                    <NavLink to={`/categories/${item.slug || item.id}`}
                                             key={item.id}> {item.title}
                                    </NavLink>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Layout;