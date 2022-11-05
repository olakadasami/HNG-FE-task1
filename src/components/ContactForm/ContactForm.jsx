import InputElement from './InputElement/InputElement'
import Styles from './ContactForm.module.css'

const ContactForm = () => {

    const inputElements = [
        {
            id: "first_name",
            inputType: 'text',
            placeholder: 'Enter your first name',
            label: "First name"
        },
        {
            id: "last_name",
            inputType: 'text',
            placeholder: 'Enter your last name',
            label: "Last name"
        },
        {
            id: "email",
            inputType: 'email',
            placeholder: 'yourname@email.com',
            label: "Email"
        },

    ]

    return (
        <form className={Styles.form}>
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
                    id="message"
                    placeholder="Send me a message and I'll reply you as soon as possible..."
                />
            </div>

            <div className={Styles.check}>
                <input type="checkbox" id="confirm" />
                <label htmlFor="confirm">
                    You agree to providing your data to Olakada Samuel who may contact you.
                </label>
            </div>

            <button className={Styles.button} type='submit' id='btn__submit'>
                Send message
            </button>
        </form>
    )
}

export default ContactForm