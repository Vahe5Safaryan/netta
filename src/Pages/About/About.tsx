import { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import {NavLink} from "react-router-dom";

const About = ({ short = false, page }: { short?: boolean; page?: string }) => {
    const { t } = useTranslation();
    const [text, setText] = useState('');

    useEffect(() => {
        axios.get('https://api.netta.am/api/about-us')
            .then(response => {
                const newText = response.data.description || '';
                setText(newText);
                console.log(response.data)
            })
            .catch(error => {
                console.error('Ошибка при выполнении запроса:', error);
            });
    }, []);

    return (
        <div className={`container ${page === 'home' ? 'home-page' : 'about-page'}`}>
            {!short && <h1 className='text-primary mt50'>{t('About Us')}</h1>}
            <div className='about-section mt50 mb50'>
                <div className='about-description'>
                    <div dangerouslySetInnerHTML={{ __html: short ? text.slice(0, 800) + ". . ." : text }}></div>
                    <div className='about-btn'>
                        {page === 'home' && (
                            <NavLink to='/about' className='btn-primary mt25'>
                                {t("Learn more")}
                            </NavLink>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;




// import {useTypedSelector} from "../../store/store";
// import "./About.css"
// import {NavLink} from "react-router-dom";
// import {useTranslation} from "react-i18next";
//
// const About = ({ short = false, page } : { short?: boolean, page?: string } ) => {
//     const {t} = useTranslation();
//     const {about} = useTypedSelector((state) => state.about)
//     return (
//         <div className={`container ${page === 'home' ? 'home-page' : 'about-page'}`}>
//             {!short && <h1 className='text-primary mt50'> {t('About Us')} </h1>}
//                 <div className='about-section mt50 mb50'>
//                     <div className='about-img'>
//                         <img src={about.img} alt="about-img"/>
//                     </div>
//                     <div className='about-description'>
//                         <h2>{about.title}</h2>
//                         <div dangerouslySetInnerHTML={{__html:  short ? about.description?.slice(0, 800) + ". . ." : about.description ?? '' }}></div>
//                         <div className='about-btn'>
//                             {page === 'home' && (
//                                 <NavLink to='/about' className='btn-primary mt25'>
//                                     {t("Learn more")}
//                                 </NavLink>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//     )
// }
// export default About;
