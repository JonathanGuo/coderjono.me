import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Form, FormikProps } from 'formik';

import FormGroup from '../FormComponents/FormGroup';
import { IContactFormState } from './index';

const InnerForm: React.FunctionComponent<
  FormikProps<IContactFormState>
> = props => {
  return (
    <Form>
      <FormGroup label="Name" type="text" name="name" placeholder="Name" />
      <FormGroup label="Email" type="email" name="email" placeholder="Email" />
      <FormGroup
        label="Company"
        type="text"
        name="company"
        placeholder="Company"
      />
      <FormGroup
        label="Message"
        name="message"
        rows={5}
        placeholder="Type it out..."
      />
      <button
        type="submit"
        className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded transition-250 transition-ease-in-out transition-all focus:outline-none mt-4">
        <FontAwesomeIcon
          icon="paper-plane"
          fixedWidth={true}
          className="mr-2"
        />
        Send
      </button>
    </Form>
  );
};

export default InnerForm;
