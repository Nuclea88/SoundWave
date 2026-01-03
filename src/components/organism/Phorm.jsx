import {useState} from 'react';
import PhormRules from '../atoms/PhormRules';

const Phorm = () => {
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
            <div>
                <label htmlFor='name'>Name:</label>
                <input type='text' name='name' value={phormData.name} 
                    onChange={handleChange} onBlur={handleBlur} required></input>
                     {errors.name && <span>{errors.name}</span>}
            </div>

            <div>
                <label htmlFor='email'>Email:</label>
                <input type='email' name='email' value={phormData.email} 
                    onChange={handleChange} onBlur={handleBlur}required></input>
                    {errors.email && <span>{errors.email}</span>}
            </div>

            <div>
                <label htmlFor='password'>Password:</label>
                <input type='password' name='password' value={phormData.password} 
                    onChange={handleChange} onBlur={handleBlur}required></input>
                    {errors.password && <span>{errors.password}</span>}
            </div>
            <div>
                <button type='submit'>Join Now</button>
            </div>
        </form>
    )
};
    export default Phorm;
