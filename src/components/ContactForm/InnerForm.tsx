import * as React from 'react';
import Recaptcha from 'react-recaptcha';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Form, FormikProps } from 'formik';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import FormError from '../FormComponents/FormError';
import FormGroup from '../FormComponents/FormGroup';
import { IContactFormState } from './index';

declare global {
  // tslint:disable-next-line: interface-name
  interface Window {
    grecaptcha: {
      ready: () => void;
      execute: (siteKey: string, { action }: { action: string }) => void;
    };
  }
}

const SubmitButton = styled.button`
  background: var(--primaryColor);
  color: white;
  font-weight: bold;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  transition: 250ms ease-in-out all;

  &:hover {
    background: var(--secondaryColor);
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
    background: #718096;

    &:hover {
      background: #718096;
    }
  }
`;

const InnerForm: React.FunctionComponent<
  FormikProps<IContactFormState>
> = props => {
  const [recaptchaLoaded, setRecaptchaLoaded] = React.useState<boolean>(false);

  const { site } = useStaticQuery(
    graphql`
      query RecaptchaSiteKeyQuery {
        site {
          siteMetadata {
            recaptchaSiteKey
          }
        }
      }
    `,
  );

  // Set recaptcha loaded flag to true to enable inputs
  function handleRecaptchaOnLoad(): void {
    setRecaptchaLoaded(true);
  }

  // Set recaptcha response to true to enable submit button
  function handleVerify(response: string): void {
    props.setFieldValue('recaptcha', response);
  }

  // Reset recaptcha response when expired
  function handleRecaptchaExpired(): void {
    props.setFieldValue('recaptcha', null);
  }

  return (
    <Form>
      <FormGroup
        label="Name"
        type="text"
        name="name"
        placeholder="Name"
        disabled={!recaptchaLoaded && props.isSubmitting}
      />
      <FormGroup
        label="Email"
        type="email"
        name="email"
        placeholder="Email"
        disabled={!recaptchaLoaded && props.isSubmitting}
      />
      <FormGroup
        label="Company"
        type="text"
        name="company"
        placeholder="Company"
        disabled={!recaptchaLoaded && props.isSubmitting}
      />
      <FormGroup
        label="Message"
        name="message"
        rows={5}
        placeholder="Type it out..."
        disabled={!recaptchaLoaded && props.isSubmitting}
      />
      <Recaptcha
        sitekey={site.siteMetadata.recaptchaSiteKey}
        render="explicit"
        onloadCallback={handleRecaptchaOnLoad}
        verifyCallback={handleVerify}
        expiredCallback={handleRecaptchaExpired}
      />
      {props.errors.recaptcha && props.touched.recaptcha && (
        <FormError>{props.errors.recaptcha}</FormError>
      )}
      <SubmitButton
        type="submit"
        disabled={
          !recaptchaLoaded || !props.values.recaptcha || props.isSubmitting
        }>
        <FontAwesomeIcon
          icon={props.isSubmitting ? 'circle-notch' : 'paper-plane'}
          fixedWidth={true}
          spin={props.isSubmitting}
          className="mr-2"
        />
        Send
      </SubmitButton>
    </Form>
  );
};

export default InnerForm;
