import * as React from 'react';

import { Formik, FormikActions } from 'formik';
import { graphql, useStaticQuery } from 'gatsby';
import * as Yup from 'yup';

import api from 'App/api/Api';
import Alert from 'App/components/Common/Alert';
import { getFirstError } from 'App/helpers/FormHelper';
import InnerForm from './InnerForm';

export interface IContactFormState {
  company: string;
  email: string;
  message: string;
  name: string;
  recaptcha: string;
}

const initialValues: IContactFormState = {
  company: '',
  email: '',
  message: '',
  name: '',
  recaptcha: '',
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
  recaptcha: Yup.string().required('Please verify you are not a robot.'),
});

const ContactForm: React.FunctionComponent<{}> = () => {
  const { site } = useStaticQuery(
    graphql`
      query ApiBaseUri {
        site {
          siteMetadata {
            apiBaseUri
          }
        }
      }
    `,
  );

  const [alert, setAlert] = React.useState<string | null>(null);

  async function handleSubmit(
    values: IContactFormState,
    actions: FormikActions<IContactFormState>,
  ) {
    setAlert(null);
    try {
      const { data } = await api.post(
        `${site.siteMetadata.apiBaseUri}/contact`,
        values,
      );
    } catch (error) {
      setAlert(getFirstError(error));
    }
  }

  return (
    <div>
      {alert && <Alert>{alert} </Alert>}
      <Formik<IContactFormState>
        initialValues={initialValues}
        validateOnBlur={true}
        validateOnChange={true}
        validationSchema={contactFormSchema}
        onSubmit={handleSubmit}
        component={InnerForm}
      />
    </div>
  );
};

// tslint:disable-next-line: export-name
export default ContactForm;
