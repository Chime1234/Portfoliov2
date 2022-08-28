import { contact } from '../../data'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='contact' id='contact'>
      <h2 className='section__title'>CONTACT</h2>
      <a target="_blank" href={`mailto:${contact.email}`}>
        <button className="button button1">email me</button>
      </a>
    </section>
  )
}

export default Contact
