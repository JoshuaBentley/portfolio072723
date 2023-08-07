import Loader from 'react-loaders'
import { useEffect, useState } from 'react'
import { useRef } from 'react'
import AnimatedLetters from '../AnimateLetters'
import './index.scss'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

    useEffect(() => {
        return setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, [])

      const sendEmail = (e) => {
        e.preventDefault()
        
        emailjs
        .sendForm(
            'service_19iusqx',
            'contactfromtemplate1213',
            e.target,
            'i1U1ne2WyBL1PDUi5'
            )
            .then (
                () => {
                    alert('Message successfully sent!')
                },
                () => {
                    alert('Failed to send the message, please try again.')
                }
            )
      }
    
    return  (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                    idx={15}
                    />
                </h1>
                <p>
                I am interested in Full time positions where I can get a chance to use my newly aquired skill in the world of software development. 
                </p>
                <div className='contact-form'>
                    <form red={form} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required />
                            </li>
                            <li className='half'>
                                <input type='email' name='email' placeholder='Email' required />
                            </li>
                            <li>
                                <input  type='text' name='subject' placeholder='Subject' required />
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required />
                            </li>
                            <li>
                               <input type="submit" className="flat-button" value="SEND" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default Contact