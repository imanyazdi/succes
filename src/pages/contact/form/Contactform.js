import React from 'react'
import "./Contactform.css"
export default function Contactform() {
    return (
        <div className='contact-form'>
            <form action="#">
                <div className='row'>
                    <input className='input col-lg-6 ' type="text" name='name' placeholder='Your Name' />
                    <input className='input col-lg-6 ' type="email" name='email' placeholder='Your Imail' />
                </div>
                <div>
                    <input className='cluom' type="text" name='subject' placeholder='Subject' />
                </div>
                <textarea name="message" rows="5" placeholder='Message'></textarea>
                    <button type='submit'> Send Messsage</button>
            </form>
        </div>
    )
}
