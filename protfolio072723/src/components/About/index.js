import './index.scss'
import AnimatedLetters from '../AnimateLetters'
import {useEffect, useState} from 'react'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faJsSquare, faReact, faNodeJs, faGithub  } from '@fortawesome/free-brands-svg-icons'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        return setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, [])
    
    return (    
       <>
         <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                    idx = {15}
                    />
                </h1>
                <p> 
                I'm a beging full stack developer, very hard working and self motivatiing. I am looking forward to working with you.
                </p>
                <p>
                I am a self starter, I am very hard working and love a challange, I like to grow and learn knew things, and I always got the job done.     
                </p>
                <p>
                If I had to define myself in one sentence that would be a family person, weight lifting enthusiast, and always looking for the next challange. 
                </p>
                <p>
                  Please take a look at my <a className='resume' href='https://docs.google.com/document/d/1n5m1sOnXbNRTZdPheDjIMhOi6-TWGgU7xMY3Tgfqv7c/edit' target='_blank'>work</a> history.
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                    <FontAwesomeIcon icon={faHtml5} color='#DD0031' />
                    </div>
                    <div className='face2'>
                    <FontAwesomeIcon icon={faCss3} color='#DD0031' />
                    </div>
                    <div className='face3'>
                    <FontAwesomeIcon icon={faReact} color='#DD0031' />
                    </div>
                    <div className='face4'>
                    <FontAwesomeIcon icon={faJsSquare} color='#DD0031' />
                    </div>
                    <div className='face5'>
                    <FontAwesomeIcon icon={faNodeJs} color='#DD0031' />
                    </div>
                    <div className='face6'>
                    <FontAwesomeIcon icon={faGithub} color='#DD0031' />
                    </div>
                </div>                
            </div>
         </div>
         <Loader type="pacman" />
       </>
    )
}

export default About