import {useTranslation} from "react-i18next";
import "./Localization.css"

const Localization = () => {
    const {i18n, t} = useTranslation()
    const changeLanguage = (e: string) => {
        i18n.changeLanguage(e);
        localStorage.setItem('language', e);
    }
    return (
        <>
            <div className='locals flex'>
                <img src="/assets/flag/armenia1.png" alt="Locals" className={i18n.language === 'hy' ? 'selected' : ''} onClick={() => changeLanguage('hy') }/>
                <img src="/assets/flag/russia1.png" alt="Locals" className={i18n.language === 'ru' ? 'selected' : ''} onClick={() => changeLanguage('ru')}/>
                <img src="/assets/flag/united-states1.png" alt="Locals" className={i18n.language === 'en' ? 'selected' : ''} onClick={() => changeLanguage('en')}/>
            </div>
        </>
    )
}

export default Localization;