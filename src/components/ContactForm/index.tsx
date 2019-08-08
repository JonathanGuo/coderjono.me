import * as React from 'react';

import { Formik, FormikActions } from 'formik';
import * as Yup from 'yup';

import InnerForm from './InnerForm';

export interface IContactFormState {
  company: string;
  email: string;
  message: string;
  name: string;
}

const initialValues: IContactFormState = {
  company: '',
  email: '',
  message: '',
  name: '',
};

const contactFormSchema = Yup.object().shape({
  company: Yup.string(),
  email: Yup.string()
    .email('Invalid Email')
    .required('Please enter your email'),
  message: Yup.string()
    .max(1024)
    .required(),
  name: Yup.string()
    .max(255)
    .required('Please let me know your name'),
});

const ContactForm: React.FunctionComponent<{}> = () => {
  async function handleSubmit(
    values: IContactFormState,
    actions: FormikActions<IContactFormState>,
  ) {
    console.log('submit', values);
  }

  return (
    <Formik<IContactFormState>
      initialValues={initialValues}
      validateOnBlur={true}
      validateOnChange={true}
      validationSchema={contactFormSchema}
      onSubmit={handleSubmit}
      component={InnerForm}
    />
  );
};

// tslint:disable-next-line: export-name
export default ContactForm;
