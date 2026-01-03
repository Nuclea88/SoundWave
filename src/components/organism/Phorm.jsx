import {useState} from 'react';
import PhormRules from '../atoms/PhormRules';
import InputField from '../atoms/InputField';

const Phorm = () => {
    const formFields = [
  { label: "Name", name: "name", type: "text" },
  { label: "Email", name: "email", type: "email" },
  { label: "Password", name: "password", type: "password" },
];
    const [phormData, setPhormData] = useState({
        name:'',
        email:'',
        password:''
    });
    const [errors, setErrors] = useState({});
    const handleChange = (event) => {
        const {name, value} = event.target;
        setPhormData({
            ...phormData,
            [name]: value
        });
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
        console.log("Datos a validar:", phormData);
    }
    return (
        <form onSubmit={handleSubmit}>
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
            ))}
            <button type="submit">Join Now</button>
        </form>
    )
};
    export default Phorm;
