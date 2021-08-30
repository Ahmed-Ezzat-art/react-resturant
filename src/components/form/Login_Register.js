import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup'
import TextField from './TextField';
import './style.css';
import { useHistory } from 'react-router';

const Login_Register = () => {
    let history = useHistory()
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    const validate = Yup.object({
        firstName: Yup.string().max(11, 'must be 11 or less').required("required"),
        lastName: Yup.string().max(20, 'must be 20 or less').required("required"),
        email: Yup.string().email("Invalid Email").required("Email is required"),
        password: Yup.string().min(8, "password must be 8 character at least").required("required"),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'password must match').required("required")

    })

    const onSubmit = (values) => {
        history.push("/");
    }



    return (
        <section className="register">
            <Formik
                initialValues={initialValues}
                validationSchema={validate}
                onSubmit={onSubmit}
            >
                {
                    (formik) => {
                        
                        return (
                            <Form className="form">
                                <div className="row">
                                    <div className="col-md-6 col-sm-12">
                                        <TextField
                                            label="First name"
                                            name="firstName"
                                            type="text"
                                        />
                                    </div>

                                    <div className="col-md-6 col-sm-12">
                                        <TextField
                                            label="Last name"
                                            name="lastName"
                                            type="text"
                                        />
                                    </div>

                                    <div className="col-sm-12">
                                        <TextField
                                            label="Email"
                                            name="email"
                                            type="email"
                                        />
                                    </div>

                                    <div className="col-sm-12">
                                        <TextField
                                            label="Password"
                                            name="password"
                                            type="password"
                                        />
                                    </div>

                                    <div className="col-sm-12">
                                        <TextField
                                            label="Confirm password"
                                            name="confirmPassword"
                                            type="password"
                                        />
                                    </div>
                                </div>

                                <button type="submit" className="subBtn">Submit</button>
                            </Form>
                        )
                    }
                }
            </Formik>
            <div className="scrollbtn">
                <i className="fas fa-arrow-up"></i>
            </div>
        </section>
    )
}


export default Login_Register;