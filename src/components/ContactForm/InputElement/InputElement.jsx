
const InputElement = ({ item, styles }) => {
    return (
        <div className={styles}>
            <label htmlFor={item.id}>
                {item.label}
            </label>
            <input
                id={item.id}
                value={item.state}
                onChange={(e) => item.set(e.target.value)}
                type={item.inputType}
                placeholder={item.placeholder}
                required
            />
        </div>
    )
}
export default InputElement