import React, { useState } from 'react'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button"
import FormControl from "@material-ui/core/FormControl"
import Grid from "@material-ui/core/Grid"
import Icon from '@material-ui/core/Icon';

import axios from 'axios';


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
            buttonText: 'Sending...'
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
                    buttonText: 'Sent',
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
            buttonText: 'Submit',
            err: ''
        });
    }

    return (
       <div> 
            <FormControl fullWidth={true}>
                <TextField required label="Full name" variant="outlined" id="full-name" name="name" className="form-field" value={data.name} onChange={handleChange} />
            </FormControl>

            <FormControl fullWidth={true}>
                <TextField label="Phone" id="phone" name="phone" variant="outlined" className="form-field" value={data.phone} onChange={handleChange} />
            </FormControl>

            <FormControl fullWidth={true}>
                <TextField required label="Email" id="email" name="email" variant="outlined" className="form-field" value={data.email} onChange={handleChange} />
            </FormControl>

            <FormControl fullWidth={true}>
                <TextField required label="Message" variant="outlined" name="message" multiline={true} rows="10" value={data.message} onChange={handleChange} />
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
        </div>
    );
};

export default ContactForm;