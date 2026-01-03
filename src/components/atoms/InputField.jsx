const InputField = ({label, name, type = 'text', value, onChange, onBlur, error}) => {
    return(
            <div>
                <label htmlFor={name}>{label}:</label>
                <input type={type} name={name} value={value} 
                    onChange={onChange} onBlur={onBlur} required></input>
                     {error && <span>{error}</span>}
            </div>
    )
};
export default InputField;