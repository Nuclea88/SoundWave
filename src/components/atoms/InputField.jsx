const InputField = ({label, name, type = 'text', value, onChange, onBlur, error}) => {
    return(
            <div className="py-5">
                <label htmlFor={name} className="font-semibold">{label}:</label>
                <input type={type} name={name} value={value} 
                    onChange={onChange} onBlur={onBlur} required className="border-2 border-border-input py-2 rounded-md w-full mt-2"></input>
                     {error && <span className="text-acent-text">{error}</span>}
            </div>
    )
};
export default InputField;