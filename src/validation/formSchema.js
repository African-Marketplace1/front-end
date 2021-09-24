import * as yup from 'yup'

export default yup.object().shape({
    username: yup.string()
        .required('username is required')
        .min(3, 'username must be 3 chars or longer'),
    email: yup.string()
        .email('Must be a valid email')
        .required('Email is required'),
    password:yup.string()
        .min(6, "Passwords must be at least 6 characters long.")
        .required("Password is required")

})