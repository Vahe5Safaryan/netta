import { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { NavLink } from "react-router-dom";
import './About.css';

const About = ({ short = false, page = '' }: { short?: boolean; page?: string }) => {
    const { t, i18n } = useTranslation();
    const [newText, setText] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get('https://api.netta.am/api/about-us')
            .then(response => {
                const langKey = `description_${i18n.language}`;
                const newText = response.data[langKey] || '';
                const image = response.data.img || '';
                setText(newText);
                setImageUrl(image);
            })
            .catch(error => {
                setError('Error fetching data. Please try again later.');
                console.error('Error fetching data:', error);
            });
    }, [i18n.language]);

    return (
        <div className={`container ${page === 'home' ? 'home-page' : 'about-page'}`}>
            {!short && <h1 className='text-primary mt50'>{t('About Us')}</h1>}
            <div className='about-section mt50 mb50'>
                <div className='about-img'>
                    {imageUrl && <img src={`https://api.netta.am/storage/img/about/${imageUrl}`} alt="About Image" />}
                </div>
                <div className='about-description'>
                    {error ? (
                        <p>{error}</p>
                    ) : (
                        <>
                            <div dangerouslySetInnerHTML={{ __html: short ? newText.slice(0, 800) + ". . ." : newText }}></div>
                            <div className='about-btn'>
                                {page === 'home' && (
                                    <NavLink to='/about' className='btn-primary mt25'>
                                        {t("Learn more")}
                                    </NavLink>
                                )}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default About;
