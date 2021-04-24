import React, { useState } from 'react'
import axios from 'axios';
import { Text } from './containers/Language';



const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = `https://www.google.com/maps/embed/v1/place?q=place_id:ChIJn_CDNwS3AhURt_DYDLUBEiA&key=${API_KEY}&language=en`;

const ContactForm = () => {
    const [data, setData] = useState({name: '', email: '', phone: '', message: '', sent: false, buttonText: <Text tid="buttonTextSendMsgFirst" />, err: ''})


    const handleChange = (e) => {
        const {name, value} = e.target
            setData({
                ...data,
                [name]: value
        })
    }

    const formSubmit = (e) => {
        e.preventDefault();

        setData({
            ...data,
            buttonText: <Text tid="buttonTextIsSending" />
        })

        axios.post('/api/sendmail', data)
        .then(res => {
            if(res.data.result !=='success') {
                setData({
                    ...data,
                    buttonText: <Text tid="buttonTextFailed" />,
                    sent: false,
                    err: 'fail'
                })
                setTimeout(() => {
                    resetForm()
                }, 6000)
            } else {
                setData({
                    ...data,
                    sent: true,
                    buttonText:<Text tid="buttonTextMsgSent" />,
                    err: 'success'
                })
                setTimeout(() => {
                    resetForm();
                }, 6000)
            }
        }).catch( (err) => {
            
            setData({
                ...data,
                buttonText: <Text tid="buttonTextFailed" />,
                err: 'fail'
            })
        })
    }

    const resetForm = () => {
        setData({
            name: '',
            email: '',
            phone: '',
            message: '',
            sent: false,
            buttonText: 'Send Message',
            err: ''
        });
    }

    

    return (
     <div className="contactwrap"> 
        <div className="contactin">
            <h1><Text tid="ContactFormInfo" /> </h1>

            <span class="iContact">
            <i class="fa fa-phone-alt" aria-hidden="true"></i>
            </span>
            <h2><Text tid="ContactFormInfoPhone" /></h2>
            <p>050-5314806</p>
            <p>052-7026632</p>
            
            <span class="iContact">
            <i class="fa fa-envelope" aria-hidden="true"></i>
            </span>
            <h2><Text tid="ContactFormInfoEmail" /></h2>
            <p>casavital@gmail.com</p>
            
            <span class="iContact">
             <i class="fas fa-map-pin" aria-hidden="true"></i>
            </span>
            <h2><Text tid="ContactFormInfoAddress" /></h2>

            <p>Herzel St. 168, <br />
             Rehovot, <br />
             Israel.</p>
        </div>

        <div className="contactin">
            <h1><Text tid="Send a Message" /></h1>
            <form>
                <input required type="text" class="contactin-input" placeholder="Full Name / שם מלא" name="name" value={data.name} onChange={handleChange} />
                <input required type="text" class="contactin-input" placeholder="Phone Number / מס' טלפון" name="phone" value={data.phone} onChange={handleChange} />
                <input required type="text" class="contactin-input" placeholder="Email / דואר אלקטרוני" name="email" value={data.email} onChange={handleChange} />
                <textarea class="contactin-textarea" name="message" placeholder="Message / הודעה" value={data.message} onChange={handleChange}></textarea>
                <button type="submit" value="Submit" class="contactin-btn" onClick={formSubmit}>{data.buttonText}</button>
            </form>
        </div>
                

    <div className="contactin">
       <iframe title="Gmaps"  frameborder="0" loading="lazy" allowfullscreen width="100%" height="auto"
        src={API_URL} ></iframe>            
    </div>
            
            
            
                 
    </div>
    );
};

export default ContactForm;