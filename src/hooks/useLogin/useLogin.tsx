import {contactFormApi, ContactFormValue} from "../../api/contactFormApi";
import {useFormik} from "formik";
import {toast} from "react-toastify";


const initialValues: ContactFormValue = {
    name: '',
    email: '',
    message: ''
}

export const useLogin = () => {
    const formik = useFormik({
        initialValues,
        validate: (values) => {
            const errors: ContactFormValue = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.name) {
                errors.name = 'Required';
            } else if (values.name.length < 2) {
                errors.name = 'Please add more symbols';
            }
            if (!values.message) {
                errors.message = 'Required';
            }

            return errors
        },
        onSubmit:
            async (values, {resetForm }) => {
                try {
                    await contactFormApi.sendFormData(values)
                        .then(() => {
                            toast.success("Thank you for your letter!")
                        });
                    resetForm()
                } catch (error) {
                    toast.error("Sorry, there's been an error");
                }
            }
    })
    return {formik}
}