const InputElement = ({ item, styles }) => {
    return (
        <div className={styles}>
            <label htmlFor={item.id}>
                {item.label}
            </label>
            <input
                id={item.id}
                type={item.inputType}
                placeholder={item.placeholder}
            />
        </div>
    )
}
export default InputElement