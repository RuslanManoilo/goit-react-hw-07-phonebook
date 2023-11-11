import { useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/operations";
import { selectContacts } from "redux/selectors";

import { Formik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { ErrorNotification, FormBtn, FormInput, FormLabel, FormWrapper } from "components/ContactForm/ContactForm.styled"; 


export const ContactForm = () => {

    const contacts = useSelector(selectContacts);
    
    const dispatch = useDispatch();

    return (
        <Formik
            initialValues={{
                name: '',
                phone: '',
            }}

            validationSchema={formSchema}

            onSubmit={(values, actions) => {
                contacts.some(contact => contact.name.toLowerCase() === values.name.toLowerCase()) ?
                    toast.error(`${values.name} is already in contacts.`)
                    :
                    dispatch(addContact(values));
                
                actions.resetForm();
            }}
        >
            <FormWrapper>
                <FormLabel htmlFor="contactFormikInput">Name</FormLabel>
                <FormInput
                    name="name"
                    id="contactFormikInput"
                    type="text"
                    
                />
                <ErrorNotification name="name" component="div" />

                <FormLabel htmlFor="contactFormikPhone">Phone</FormLabel>
                <FormInput
                    name="phone"
                    id="contactFormikPhone"
                    type="tel"
                />
                <ErrorNotification name="phone" component="div" />

                <FormBtn type="submit">Add contact</FormBtn>
            </FormWrapper>
        </Formik>
    );
};

const formSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .required('This field is required!'),
    phone: Yup.string()
        .min(4, 'Too Short!')
        .required('This field is required!'),
});