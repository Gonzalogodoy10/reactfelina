import { useState } from "react";
import { useCartContext } from "../context/CartContext";

export const useForm = (initialForm, validateForm)=>{
    const[form,setForm] = useState(initialForm)
    const [errors,setErrors] = useState({})

    const {generateOrder} = useCartContext()

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    const handleBlur = (e) => {
        handleChange(e)
        setErrors(validateForm(form))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors(validateForm(form))
        if(Object.keys(errors).length === 0){
            generateOrder(form)
            setForm(initialForm)
        }else{
            alert('Revisar datos')
        }
    }

    return{
        form,
        errors,
        handleChange,
        handleBlur,
        handleSubmit
    }
}