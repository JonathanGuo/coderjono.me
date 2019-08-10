import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Form, FormikProps } from 'formik';
import { graphql, useStaticQuery } from 'gatsby';
import Recaptcha from 'react-recaptcha';

import FormGroup from '../FormComponents/FormGroup';
import { IContactFormState } from './index';
import styled from 'styled-components';

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
  const [recaptchaVerified, setRecaptchaVerified] = React.useState<boolean>(
    false,
  );
  const [recaptchaError, setRecaptchError] = React.useState<string | null>(
    null,
  );

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

  // Set verified flag to true to enable submit button
  function handleVerify(): void {
    setRecaptchaVerified(true);
  }

  return (
    <Form>
      <FormGroup
        label="Name"
        type="text"
        name="name"
        placeholder="Name"
        disabled={!recaptchaLoaded}
      />
      <FormGroup
        label="Email"
        type="email"
        name="email"
        placeholder="Email"
        disabled={!recaptchaLoaded}
      />
      <FormGroup
        label="Company"
        type="text"
        name="company"
        placeholder="Company"
        disabled={!recaptchaLoaded}
      />
      <FormGroup
        label="Message"
        name="message"
        rows={5}
        placeholder="Type it out..."
        disabled={!recaptchaLoaded}
      />
      <Recaptcha
        sitekey={site.siteMetadata.recaptchaSiteKey}
        render="explicit"
        onloadCallback={handleRecaptchaOnLoad}
        verifyCallback={handleVerify}
      />
      <SubmitButton
        type="submit"
        disabled={!recaptchaLoaded || !recaptchaVerified}>
        <FontAwesomeIcon
          icon="paper-plane"
          fixedWidth={true}
          className="mr-2"
        />
        Send
      </SubmitButton>
    </Form>
  );
};

export default InnerForm;
