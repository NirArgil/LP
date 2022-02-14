import React, { useState } from 'react'
// import axios from 'axios';

//Language Switcher
import './i18next';
import { useTranslation } from "react-i18next";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = `https://www.google.com/maps/embed/v1/place?q=place_id:ChIJn_CDNwS3AhURt_DYDLUBEiA&key=${API_KEY}&language=en`;

const ContactForm = () => {
    const { t } = useTranslation();

    const [data, setData] = useState({ name: '', email: '', phoneNum: '', message: '', sent: false, buttonText: 'שליחה', err: '' })

    const handleChange = (e) => {
        const { name, value } = e.target
        setData({
            ...data,
            [name]: value
        })
    }

    const mails = [
        // process.env.REACT_APP_USER_NAME,
        // 'ben.elm@gmail.com',
        'nissim168@gmail.com',
        // 'vital23@netvision.net.il',
        'hotelrehovot@gmail.com'
    ];

    const formSubmit = (e) => {
        e.preventDefault();

        var x = document.forms["Contactform"]["name"].value;
        var y = document.forms["Contactform"]["email"].value;
        var z = document.forms["Contactform"]["message"].value;
        var p = document.forms["Contactform"]["phoneNum"].value;

        if (x === "" || x == null || y === "" || y == null || z === "" || z == null || p === "" || p == null) {
            setData({
                ...data,
                buttonText: 'חסרים נתונים,נא למלא את כל השדות',
                sent: false,
                err: 'fail'
            })
            setTimeout(() => {
                resetForm()
            }, 3000)
        } else {
            setData({
                ...data,
                buttonText: 'שולח'
            })
            // eslint-disable-next-line
            Email.send({
                Host: "smtp.gmail.com",
                Username: process.env.REACT_APP_USER_NAME,
                Password: process.env.REACT_APP_PASSWORD,

                To: mails,
                From: "casavital@mailer.com",
                Subject: "הודעה חדשה מהאתר החדש הבית של ויטל | קאסה ויטל",
                Body: `
            Email from: ${data.name}. <br />
            Email Address: ${data.email}. <br />
            Phone Number: ${data.phoneNum}. <br />
            Message: ${data.message}.
            `
            }).then(
                setData({
                    ...data,
                    sent: true,
                    buttonText: 'ההודעה נשלחה בהצלחה',
                })
            ).then(setTimeout(() => {
                resetForm()
            }, 5000)
            );
        }
    }

    const resetForm = () => {
        setData({
            name: '',
            email: '',
            phoneNum: '',
            message: '',
            sent: false,
            buttonText: 'שליחה',
            err: ''
        });
    }

    return (
        <div className="contactwrap">
            <div className="contactin">
                <h1>{t("ContactFormInfo")}</h1>

                <span class="iContact">
                    <i class="fa fa-phone-alt" aria-hidden="true"></i>
                </span>
                <h2>{t("ContactFormInfoPhone")}</h2>
                <p>050-5318406</p>
                <p>050-5272382</p>
                <p>052-7026632</p>

                <span class="iContact">
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                </span>
                <h2>{t("ContactFormInfoEmail")}</h2>
                <p><a href="mailto:hotelrehovot@gmail.com">hotelrehovot@gmail.com</a></p>   
                <p><a href="mailto:nissim168@gmail.com">nissim168@gmail.com</a></p>

                <span class="iContact">
                    <i class="fas fa-map-pin" aria-hidden="true"></i>
                </span>
                <h2>{t("ContactFormInfoAddress")}</h2>

                <p>{t("ContactFormInfoAddressP1")}<br />
                    {t("ContactFormInfoAddressP2")}<br />
                    {t("ContactFormInfoAddressP3")}
                </p>
            </div>

            <div className="contactin">
                <h1>{t("SendMessage1")}</h1>
                <h1>{t("SendMessage2")}</h1>
                <form name="Contactform">
                    <input required type="text" class="contactin-input" placeholder="Full Name / שם מלא" name="name" value={data.name} onChange={handleChange} />
                    <input required type="text" class="contactin-input" placeholder="Phone Number / מס' טלפון" name="phoneNum" value={data.phoneNum} onChange={handleChange} />
                    <input required type="text" class="contactin-input" placeholder="Email / דואר אלקטרוני" name="email" value={data.email} onChange={handleChange} />
                    <textarea class="contactin-textarea" name="message" placeholder="Message / הודעה" value={data.message} onChange={handleChange}></textarea>
                    <button type="submit" value="Submit" class="contactin-btn" onClick={formSubmit}>{data.buttonText}</button>
                </form>
            </div>


            <div className="contactin">
                <iframe title="Gmaps" frameborder="0" loading="lazy" allowfullscreen width="100%" height="auto"
                    src={API_URL} ></iframe>
            </div>




        </div>
    );
};

export default ContactForm;