import React, { useState } from 'react'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button"
import FormControl from "@material-ui/core/FormControl"
import Grid from "@material-ui/core/Grid"
import axios from 'axios';

const ContactForm = () => {
    const [data, setData] = useState({name: '', email: '', message: '', sent: false, buttonText: 'Submit', err: ''})

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
            message: '',
            sent: false,
            buttonText: 'Submit',
            err: ''
        });
    }

    return (
       <div> 
            <div class="contact__form"> 
                <form name="form" action="POST" method="POST" data-netlify="true">
                 <input type='hidden' name='form-name' value='contact' />
                    <div class="form__input">
                        <input type="text" id="name" name="name" placeholder="Name" required=""/>
                    </div>
                    <div class="form__input">
                        <input type="email" id="email" name="email" placeholder="Email" required=""/>
                    </div>
                    <div class="form__input">
                        <textarea id="message" name="message" placeholder="Message" style="height:200px"></textarea>
                    </div>
                    <div class="form__input">
                        <input type="submit" id="submit" placeholder="SUBMIT"/>
                    </div>
                </form> 
            </div>
        </div>
    );
};















// //     class Contact extends React.Component {

// //         constructor(props) {
// //             super(props);
// //             this.state = {
// //               name: '',
// //               email: '',
// //               subject:'',
// //               message: ''
// //             }
// //         }


// //     return (
// //         <div className="section">
// //             <div className="container">
// //                 <div className="row">
// //                     <div className="col-md-12">
// //                         <div className="section-title">
// //                             <h2 className="title">Contact Us</h2>
// //                             <p>Let us know what you think! In order to provide better service,
// //                                  please do not hesitate to give us your feedback. Thank you.</p><hr/>
// //                             <form id="contact-form" onSubmit={this.submitEmail.bind(this)} 
// //                                 method="POST">
// //                             <div className="form-group">
// //                             <div className="row">
// //                             <div className="col-md-6">
// //                                 <input placeholder = "Name"  id="name" type="text" 
// //                                    className="form-control" required value={this.state.name} 
// //                                    onChange={this.onNameChange.bind(this)}/>
// //                             </div>
// //                             <div className="col-md-6">
// //                                 <input placeholder = "Email"  id="email" type="email"
// //                                   className="form-control" aria-describedby="emailHelp"
// //                                   required value={this.state.email} onChange=
// //                                   {this.onEmailChange.bind(this)}/>
// //                             </div>
// //                             </div>
// //                             </div>
// //                             <div className="form-group">
// //                                 <input placeholder = "Subject"  id="subject" type="text"
// //                                   className="form-control" required value={this.state.subject}
// //                                   onChange={this.onSubjectChange.bind(this)}/>
// //                             </div>
// //                             <div className="form-group">
// //                                 <textarea placeholder = "Message"  id="message" 
// //                                    className="form-control" rows="1" 
// //                                    required value={this.state.message}
// //                                    onChange= {this.onMsgChange.bind(this)}/>
// //                             </div>
// //                             <button type="submit" className="primary-btn submit">Submit</button>
// //                             </form>
// //                         </div>
// //                     </div>
    
// //                 </div>
    
// //             </div>
// //         </div>
// //     );
// // }



// const ContactForm = () => {
//   const [status, setStatus] = useState("Submit");
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("Sending...");
//     const { name, email, message } = e.target.elements;
//     let details = {
//       name: name.value,
//       email: email.value,
//       message: message.value,
//     };
//     let response = await fetch("/contact", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         'Accept': 'application/json'
//       },
//       body: JSON.stringify(details),
//     });
//     setStatus("Submit");
//     let result = await response.json();
//     alert(result.status);
//   };
//     return (
        
//     );
// };

export default ContactForm;