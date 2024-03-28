import {useTypedSelector} from "../../store/store";
import "./About.css"
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";

const About = ({ short = false, page } : { short?: boolean, page?: string } ) => {
    const {t} = useTranslation();
    const {about} = useTypedSelector((state) => state.about)
    return (
        <div className={`container ${page === 'home' ? 'home-page' : 'about-page'}`}>
            {!short && <h1 className='text-primary mt50'> {t('About Us')} </h1>}
                <div className='about-section mt50 mb50'>
                    <div className='about-img'>
                        <img src={about.img} alt="about-img"/>
                    </div>
                    <div className='about-description'>
                        <h2>{about.title}</h2>
                        <div dangerouslySetInnerHTML={{__html:  short ? about.description?.slice(0, 800) + ". . ." : about.description ?? '' }}></div>
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
    )
}
export default About;