import React, { useState } from 'react'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button"
import FormControl from "@material-ui/core/FormControl"
import Grid from "@material-ui/core/Grid"
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = `https://www.google.com/maps/embed/v1/place?q=place_id:ChIJn_CDNwS3AhURt_DYDLUBEiA&key=${API_KEY}&language=en`;

const ContactForm = () => {
    const [data, setData] = useState({name: '', email: '', phone: '', message: '', sent: false, buttonText: 'Submit', err: ''})


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
            buttonText: 'is sending...'
        })

        axios.post('/api/sendmail', data)
        .then(res => {
            if(res.data.result !=='success') {
                setData({
                    ...data,
                    buttonText: 'Failed to send',
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
                    buttonText: 'Message just sent',
                    err: 'success'
                })
                setTimeout(() => {
                    resetForm();
                }, 6000)
            }
        }).catch( (err) => {
            //console.log(err.response.status)
            setData({
                ...data,
                buttonText: 'Failed to send',
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
            <h1>Contact Info</h1>

            <span class="iContact">
            <i class="fa fa-phone-alt" aria-hidden="true"></i>
            </span>
            <h2>Phone</h2>
            <p>08-1234567</p>
            
            <span class="iContact">
            <i class="fa fa-envelope" aria-hidden="true"></i>
            </span>
            <h2>Email</h2>
            <p>casavital@gmail.com</p>
            
            <span class="iContact">
             <i class="fa fa-map-pin" aria-hidden="true"></i>
            </span>
            <h2>Address</h2>

            <p>Herzel St. 168, <br />
             Rehovot, <br />
             Israel.</p>
        </div>

        <div className="contactin">
            <h1>Send a Message</h1>
            <form>
                <input required type="text" class="contactin-input" placeholder="Full Name" name="name" value={data.name} onChange={handleChange} />
                <input required type="text" class="contactin-input" placeholder="Phone Number" name="phone" value={data.phone} onChange={handleChange} />
                <input required type="text" class="contactin-input" placeholder="Email" name="email" value={data.email} onChange={handleChange} />
                <textarea placeholder="Message" class="contactin-textarea" name="message" value={data.message} onChange={handleChange}></textarea>
                <button type="submit" value="Submit" class="contactin-btn" onClick={formSubmit}>{data.buttonText}</button>
            </form>
        </div>
                

    <div className="contactin">
       {/* <iframe title="Gmaps"  frameborder="0" loading="lazy" allowfullscreen width="100%" height="auto"
        src={API_URL} ></iframe>             */}
    </div>
            
            
            
                 
    </div>
    );
};


/* <div className="form"> 
<FormControl fullWidth={true}>
<TextField class="contactin-input" required label="Full name" variant="outlined" id="full-name" name="name" className="form-field" value={data.name} onChange={handleChange} />
</FormControl>

<FormControl fullWidth={true}>
<TextField class="contactin-input" label="Phone" id="phone" name="phone" variant="outlined" className="form-field" value={data.phone} onChange={handleChange} />
</FormControl>

<FormControl fullWidth={true}>
<TextField class="contactin-input" required label="Email" id="email" name="email" variant="outlined" className="form-field" value={data.email} onChange={handleChange} />
</FormControl>

<FormControl fullWidth={true}>
<TextField className="contactin-textarea" required label="Message" variant="outlined" name="message" multiline={true} rows="7" value={data.message} onChange={handleChange} />
</FormControl>

<FormControl>
<div id="submit" style={{padding: 20}}>
<Grid container spacing={2}>
        <div className="form-submit">
            <Button size="large" variant="contained" color="primary" onClick={formSubmit}>{data.buttonText}</Button>
        </div>
    </Grid>
</div>
</FormControl>
</div> */

export default ContactForm;