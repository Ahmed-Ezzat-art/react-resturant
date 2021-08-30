import React from 'react'
import { useField, ErrorMessage } from 'formik'


const TextField = ({ label, ...props }) => {
    const [field, meta] = useField(props)
    return (
        <div>
            <label htmlFor={field.name}>{label}</label>
            <input
                id={field.name}
                {...field}
                {...props}
                autoComplete="off"
                className={`form-control 
                shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
            />

            <ErrorMessage name={field.name}
                component="div" className="error" />
        </div>
    )
}

export default TextField
