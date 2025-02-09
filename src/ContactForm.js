import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import "./i18next";

import { useTranslation } from "react-i18next";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = `https://www.google.com/maps/embed/v1/place?q=place_id:ChIJn_CDNwS3AhURt_DYDLUBEiA&key=${API_KEY}&language=en`;

const ContactForm = () => {
    const { t } = useTranslation();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phoneNum: "",
        message: "",
        sent: false,
        buttonText: "שליחה",
        err: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message || !formData.phoneNum) {
            setFormData(
                {
                    ...formData,
                    buttonText: "חסרים נתונים, נא למלא את כל השדות",
                }
            );

            setTimeout(() => {
                resetForm();
            }, 5000)

            return;
        }

        emailjs
            .sendForm('service_z2okscm', 'template_lgwsjqe', form.current, {
                publicKey: '4MV2xmtYwVMqp8OA_',
            })
            .then(
                () => {
                    setFormData({
                        ...formData,
                        sent: true,
                        buttonText: "הודעתך נשלחה בהצלחה",
                    })
                },
                (error) => {
                    setFormData({
                        ...formData,
                        sent: false,
                        buttonText: "שגיאה, לשלוח שוב!",
                    })
                },
                setTimeout(() => {
                    resetForm();
                }, 5000)
            );
    };

    const resetForm = () => {
        setFormData({
            name: "",
            email: "",
            phoneNum: "",
            message: "",
            sent: false,
            buttonText: "שליחה",
            err: "",
        });
    };

    return (
        <div className="contactwrap">
            <div className="contactin">
                <h1>{t("ContactFormInfo")}</h1>

                <span className="iContact">
                    <i className="fa fa-phone-alt" aria-hidden="true"></i>
                </span>
                <h2>{t("ContactFormInfoPhone")}</h2>
                <p>050-5318406</p>
                <p>050-5272382</p>
                <p>052-7026632</p>

                <span className="iContact">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                </span>
                <h2>{t("ContactFormInfoEmail")}</h2>
                <p>
                    <a href="mailto:hotelrehovot@gmail.com">hotelrehovot@gmail.com</a>
                </p>
                <p>
                    <a href="mailto:nissim168@gmail.com">nissim168@gmail.com</a>
                </p>

                <span className="iContact">
                    <i className="fas fa-map-pin" aria-hidden="true"></i>
                </span>
                <h2>{t("ContactFormInfoAddress")}</h2>

                <p>{t("ContactFormInfoAddressP1")}</p>
                <p>{t("ContactFormInfoAddressP2")}</p>
                <p>{t("ContactFormInfoAddressP3")}</p>
            </div>

            <div className="contactin">
                <h1>{t("SendMessage1")}</h1>
                <h1>{t("SendMessage2")}</h1>
                <form name="Contactform" ref={form} onSubmit={handleSubmit}>
                    <input
                        required
                        type="text"
                        className="contactin-input"
                        placeholder="Full Name / שם מלא"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <input
                        required
                        type="text"
                        className="contactin-input"
                        placeholder="Phone Number / מס' טלפון"
                        name="phoneNum"
                        value={formData.phoneNum}
                        onChange={handleChange}
                    />
                    <input
                        required
                        type="text"
                        className="contactin-input"
                        placeholder="Email / דואר אלקטרוני"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <textarea
                        className="contactin-textarea"
                        name="message"
                        placeholder="Message / הודעה"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                    <button type="submit" value="Submit" className="contactin-btn">
                        {formData.buttonText}
                    </button>
                </form>
            </div>

            <div className="contactin">
                <iframe
                    title="Gmaps"
                    frameBorder="0"
                    loading="lazy"
                    allowFullScreen
                    width="100%"
                    height="auto"
                    src={API_URL}
                ></iframe>
            </div>
        </div>
    );
};

export default ContactForm;