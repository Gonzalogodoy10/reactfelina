import { useForm } from "../../hooks/useForm";

import '../Form/Form.css';

const initialForm = {
name: "",
email: "",
emailRepeat: "",
phone: ""
}

const validationsForm =(form) =>{
let errors = {};
let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
let regexPhone = /^.{10}$/

if(!form.name.trim()){
    errors.name = "*Este campo es requerido"
}else if(!regexName.test(form.name.trim())){
    errors.name = '*El campo solo acepta letras y espacios en blanco'
}

if(!form.email.trim()){
    errors.email = "*Este campo es requerido"
}else if(!regexEmail.test(form.email.trim())){
    errors.email = '*El campo Email es incorrecto'
}

if(!form.emailRepeat.trim()){
    errors.emailRepeat = "*Este campo es requerido"
}else if(form.emailRepeat !== form.email){
    errors.emailRepeat = '*El mail ingresado es incorrecto'
}

if(!form.phone.trim()){
    errors.phone = "*Este campo es requerido"
}else if(!regexPhone.test(form.phone.trim())){
    errors.phone = '*Numero invalido'
}


return errors


}

const Form = ()=>{

const {
    form,
    errors,
    handleChange,
    handleBlur,
    handleSubmit
} = useForm(initialForm, validationsForm)

return(
    <div>
        <form onSubmit={handleSubmit} className="form">

            <div className="form-container-input">
                <input className="form-input input-name"
                type='text'
                name='name'
                placeholder='Escribe tu nombre'
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.name}
                required
                />
                {errors.name && <p className="form-errors">{errors.name}</p>}
            </div>

            <div className="form-container-input">
                <input className="form-input input-name"
                type='email'
                name='email'
                placeholder='Escribe tu email'
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.email}
                required
                />
                {errors.email && <p className="form-errors">{errors.email}</p>}
            </div>

            <div className="form-container-input">
                <input className="form-input input-name"
                type='email'
                name='emailRepeat'
                placeholder='Repite tu email'
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.emailRepeat}
                required
                />
                {errors.emailRepeat && <p className="form-errors">{errors.emailRepeat}</p>}
            </div>

            <div className="form-container-input">
                <input className="form-input input-name"
                type='number'
                name='phone'
                placeholder='Escribe tu numero de telefono'
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.phone}
                required
                />
                {errors.phone && <p className="form-errors">{errors.phone}</p>}
            </div>

            <input className="form-input-submit"
            type='submit'
            value='COMPRAR'
            />

        </form>
    </div>
)
}

export default Form