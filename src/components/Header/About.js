import './About.css'
import { about } from '../../data'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const About = () => {
    const { name, role, description, resume, social } = about
    return (
        <div className='about'>
                {name && (
                    <h1>
                        Hi, I am <span className='about__name'>{name}.</span>
                    </h1>
                )}
                {role && <h2 className='about__role'>A {role}.</h2>}
                <p className='about__desc'>{description && description}</p>
                <div className='about__contact'>
                    {resume && (
                        <a target="_blank" href={resume}>
                            <button className="button button1">resume</button>
                        </a>
                    )}
                    {social && (
                        <>
                            {social.github && (
                                <a
                                    target="_blank" 
                                    href={social.github}
                                    aria-label='github'
                                >
                                    <FaGithub className='icon' />
                                </a>
                            )}

                            {social.linkedin && (
                                <a
                                    target="_blank"
                                    href={social.linkedin}
                                    aria-label='linkedin'
                                    className='link-icon'
                                >
                                    <FaLinkedin className='icon' />
                                </a>
                            )}
                        </>
                    )}
                </div>
        </div>
    )
}
export default About