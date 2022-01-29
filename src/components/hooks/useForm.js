import { useState } from 'react';


export const useForm = () => {
    
    const [values, setValues] = useState({});

    const reset = () => {
        setValues(values);
    }


    const handleInputChange = ({target}) => {
        let {name, value} = target;

        setValues({
            ...values,
            [name]: value
        });
    };

    return [values, handleInputChange, reset];

}