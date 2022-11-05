import InputElement from './InputElement/InputElement'
import Styles from './ContactForm.module.css'
import { useState } from 'react'
import { useEffect } from 'react'

const ContactForm = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [checked, setChecked] = useState(false)
    const [messageError, setMessageError] = useState(false)

    const inputElements = [
        {
            id: "first_name",
            inputType: 'text',
            placeholder: 'Enter your first name',
            label: "First name",
            state: firstName,
            set: setFirstName
        },
        {
            id: "last_name",
            inputType: 'text',
            placeholder: 'Enter your last name',
            label: "Last name",
            state: lastName,
            set: setLastName
        },
        {
            id: "email",
            inputType: 'email',
            placeholder: 'yourname@email.com',
            label: "Email",
            state: email,
            set: setEmail
        },

    ]



    const handleSubmit = (e) => {
        e.preventDefault()
        if (!message) {
            setMessageError(true)
        } else {
            setMessageError(false)
            const mail = {
                firstName, lastName,
                message
            }

            console.log(mail)
        }
    }

    useEffect(() => {
        if (message) {
            setMessageError(false)
        }
    }, [message])

    return (
        <form onSubmit={handleSubmit} className={Styles.form}>
            <div className={Styles.heading}>
                <h2>
                    Contact Me
                </h2>
                <p className="pages">
                    Hi there, contact me to ask me about anything you have in mind.
                </p>
            </div>

            <div className={Styles.inputTextGroup}>
                {inputElements.map((item, index) => (
                    <InputElement styles={Styles.inputElement} item={item} key={index} />
                ))}

            </div>
            <div className={Styles.inputElement}>
                <label htmlFor="message">
                    Message
                </label>
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    id="message"

                    placeholder="Send me a message and I'll reply you as soon as possible..."
                />
                <p className={messageError ? Styles.errorText : Styles.hidden}>
                    Please enter a message
                </p>
            </div>

            <div className={Styles.check}>
                <input
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                    type="checkbox"
                    id="confirm"
                />
                <label htmlFor="confirm">
                    You agree to providing your data to Olakada Samuel who may contact you.
                </label>
            </div>

            <button
                disabled={!checked}
                className={Styles.button}
                type='submit'
                id='btn__submit'>
                Send message
            </button>
        </form>
    )
}

export default ContactForm