import "./Contact.css";
import axios from "axios";
import { useTypedSelector } from "../../store/store";
import { FormEventHandler, MouseEventHandler, useEffect, useState } from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import Card from "../../components/Card/Card";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

const Contact = () => {
    const { t } = useTranslation();
    const [contacts, setContactData] = useState<any>([]); // Initialize categoryData as empty array
    const [name, setName] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionMessage, setSubmissionMessage] = useState('');

    useEffect(() => {
        // Выполняем запрос при монтировании компонента
        axios.get('https://api.netta.am/api/contact')
            .then(response => {
                setContactData(response.data);
            })
            .catch((error) => {
                console.error("Failed to fetch contact info:", error);
            });
    }, []);

    const { email, phone, address } = useTypedSelector(state => state.contact);

    const handleChange: FormEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
        const handlers: { [key: string]: any } = {
            name: setName,
            email: setCustomerEmail,
            message: setMessage
        };
        handlers[e.currentTarget.name](e.currentTarget.value);
    };

    const handleSubmit: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        axios.post('https://api.netta.am/api/contact', {
            name,
            customerEmail,
            email,
            message
        }).then((res) => {
            console.log(res);
            setSubmissionMessage('Your application has been SUBMITTED.');
        }).catch(() => {
            setSubmissionMessage('FAILED to submit your application.');
        }).finally(() => {
            setTimeout(() => {
                setIsSubmitting(false);
                setSubmissionMessage('');
            }, 3000);
        });

        setName('');
        setMessage('');
        setCustomerEmail('');
    };

    return (
        <div className='container'>
            <h1 className='text-primary mt50 mb50'> {t('Our contact')} </h1>
            <div className="grid-2 grid-md-1 grid-gap-5">
                <div className="map-container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d8528.110484528494!2d44.44038822483457!3d40.162310852383364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDA5JzQ1LjMiTiA0NMKwMjYnMTQuNCJF!5e0!3m2!1sru!2sam!4v1711545056644!5m2!1sru!2sam" width="100%" height="450" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className='contact-section mt50'>
                    <input type="text" name='name' placeholder='Name' onInput={handleChange} value={name} required />
                    <input type="email" name='email' placeholder='Email'  onInput={handleChange} value={customerEmail} required />
                    <textarea name="message" onInput={handleChange} value={message} required></textarea>
                    <button className='btn-primary' onClick={handleSubmit}> {t('Send Massage')}</button>
                </div>
            </div>

            <div className='contact-info grid-3 grid-gap-5 grid-sm-1 grid-md-2'>
                <Card bordered>
                    <div className='contact-info-box'>
                        <div>
                            <FaPhoneVolume size={30}/>
                        </div>
                        <h4>{contacts.phone}</h4>
                    </div>
                </Card>
                <Card bordered>
                    <div className='contact-info-box'>
                        <div>
                            <MdMarkEmailRead size={35}/>
                        </div>
                        <h4>{contacts.email}</h4>
                    </div>
                </Card>
                <Card bordered>
                    <div className='contact-info-box'>
                        <div>
                            <FaMapMarkerAlt size={35}/>
                        </div>
                        <h4>{contacts[`address_${i18n.language}`]}</h4>
                    </div>
                </Card>
            </div>

            {isSubmitting && (
                <div className="submission-overlay">
                    <div className="submission-popup">
                        <p>{submissionMessage}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Contact;