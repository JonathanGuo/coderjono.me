import React, { useState } from 'react';

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

const Contact = () => {
  const [isSent, setIsSent] = useState(false);

  function handleIsSent() {
    setIsSent(true);
  }

  return (
    <Layout>
      <SEO title="Contact" />
      <FullScreenContainer>
        <ContactContainer>
          <Box>
            <h1 className="text-6xl">
              {!isSent && <span>Let&rsquo;s get in touch</span>}
              {isSent && <span>Thank you for contacing me</span>}
            </h1>
            <p className="leading-loose text-gray-600 mb-4">
              {!isSent && (
                <span>
                  I would love to drink <FontAwesomeIcon icon="coffee" />{' '}
                  <VisuallyHiddenText>coffee</VisuallyHiddenText> with you and
                  turn your great ideas into reality.
                </span>
              )}
              {isSent && (
                <>
                  <p>I will get in touch with you as soon as possible.</p>
                  <p>
                    Let&rsquo; meet with a cup of{' '}
                    <FontAwesomeIcon icon="coffee" />{' '}
                    <VisuallyHiddenText>coffee</VisuallyHiddenText>.
                  </p>
                </>
              )}
            </p>
            {!isSent && <ContactForm onSent={handleIsSent} />}
          </Box>
        </ContactContainer>
      </FullScreenContainer>
    </Layout>
  );
};

export default Contact;
