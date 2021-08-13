import React from 'react'

import './Contact.css'

const Contact =()=>{
    return(
       <div className="contact">
            <h1>Contact Me</h1>
                <div className="contact__container">
                    <form>
                        <h5>Name</h5>
                        <input type="text"  />
                        <h5>Email</h5> 
                        <input type="text"  />
                        <h5>Questions/ Comments</h5>
                        <textarea  rows="5" />
                        <button type="submit">Send Message</button>

                    </form>
                    <p>Feel free to reach out via email directly</p>
                    <p>grlara9@gmail.com</p>
                      <p>Or give me a call: (442)456-6887</p>
                </div>
            </div>
        )
    }
export default Contact