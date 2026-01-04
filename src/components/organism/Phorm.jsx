import {useState} from 'react';
import PhormRules from '../atoms/PhormRules.jsx';
import InputField from '../atoms/InputField.jsx';

const Phorm = () => {
    const formFields = [
  { label: "Name", name: "name", type: "text" },
  { label: "Email", name: "email", type: "email" },
  { label: "Password", name: "password", type: "password" },
];
    const initialState = formFields.reduce((acc, field) => {
        acc[field.name] = "";
        return acc;
        }, {});
    const [phormData, setPhormData] = useState({initialState});
    const [errors, setErrors] = useState({});
    const [formMessage, setFormMessage] = useState('');
    const handleChange = (event) => {
        const {name, value} = event.target;
        setPhormData({
            ...phormData,
            [name]: value
        });
        setFormMessage('');
    };
    const handleBlur = (e) => {
        const { name, value } = e.target;
        validateField(name, value);
     };

    const validateField = (name, value) => {
        const rule = PhormRules[name];
        let errorMsg = '';
        if (rule && !rule.pattern.test(value)) {
            errorMsg = rule.errorMsg;
        }
        setErrors(prev => ({ ...prev, [name]: errorMsg }));
    };   
    const handleSubmit = (event) => {
        event.preventDefault();
        formFields.forEach(field => validateField(
            field.name, phormData[field.name]));
        const hasErrors = Object.values(errors).some(msg => msg !== "");
        if (!hasErrors) {
            setFormMessage('');
            console.log("Datos a validar:", phormData);
        } 
        if (hasErrors) {
            setFormMessage('Error. Please review the fields');
        }
    }
    return (
        <form onSubmit={handleSubmit} className="px-18 py-5">
            {formFields.map((field) => (
                <InputField
                    key={field.name}
                    label={field.label}
                    name={field.name}
                    type={field.type}
                    value={phormData[field.name]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors[field.name]}
                />
            )) }
            {formMessage && (
                <p className="text-acent-text"> {formMessage}</p>)}
            <button type="submit" className="bg-button-bck py-3 rounded-md w-full mt-6 mb-6">Join Now</button>
        </form>
    )
};
    export default Phorm;
