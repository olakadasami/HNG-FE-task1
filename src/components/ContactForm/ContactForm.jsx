import InputElement from './InputElement/InputElement'

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
        <div>
            {inputElements.map((item, index) => (
                <InputElement item={item} key={index} />
            ))}

            <div>
                <label htmlFor="message">
                    Message
                </label>
                <textarea
                    id="message"
                    placeholder="Send me a message and I'll reply you as soon as possible..."
                />
            </div>

            <div>
                <input type="checkbox" id="confirm" />
                <label htmlFor="confirm">
                    You agree to providing your data to {name} who may contact you.
                </label>
            </div>

            <button type='submit' id='btn__submit'>
                Send message
            </button>
        </div>
    )
}

export default ContactForm