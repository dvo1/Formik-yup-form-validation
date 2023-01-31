import * as yup from "yup";

// const passwordRules = /^(?=.*\d)(?=.*[a-z](?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
    email: yup.string()
    .email()
    .required('please enter a valid email'),
    age: yup.number()
    .positive()
    .integer()
    .required('required'),
    password: yup.string()
    .min(5)
    .required('minimum of five characters'),
    confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
})