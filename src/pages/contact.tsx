import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import FullScreenContainer from 'App/components/Common/FullScreenContainer';
import ContactForm from 'App/components/ContactForm';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';

const ContactContainer = styled(props => (
  <div {...props} className={`container mx-auto ${props.className}`} />
))`
  padding-top: 1rem;
`;

const Box = styled.div`
  border-radius: 0.5rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  padding: 2rem;
`;

const VisuallyHiddenText = styled.span`
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
`;

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <FullScreenContainer>
      <ContactContainer>
        <Box>
          <h1 className="text-6xl">Let&rsquo;s get in touch</h1>
          <p className="leading-loose text-gray-600 mb-4">
            I would love to drink <FontAwesomeIcon icon="coffee" />{' '}
            <VisuallyHiddenText>coffee</VisuallyHiddenText> with you and turn
            your great ideas into reality.
          </p>
          <ContactForm />
        </Box>
      </ContactContainer>
    </FullScreenContainer>
  </Layout>
);

export default Contact;
