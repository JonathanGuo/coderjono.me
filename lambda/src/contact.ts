import AWSLambda from 'aws-lambda';
import axios from 'axios';
import * as Yup from 'yup';
import { IResponse } from './types/types';

import * as Dotenv from 'dotenv';

Dotenv.config();

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

const headers = {
  'Access-Control-Allow-Headers':
    'Origin, X-Requested-With, Content-Type, Accept',
  'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
};

function verifyRecaptcha(recaptchaResponse: string) {
  return axios({
    method: 'POST',
    params: {
      response: recaptchaResponse,
      secret: process.env.RECAPTCHA_SITE_SECRET,
    },
    url: 'https://www.google.com/recaptcha/api/siteverify',
  });
}

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */
exports.handler = async (
  event: AWSLambda.APIGatewayEvent,
  context: AWSLambda.Context,
): Promise<object> => {
  let response: IResponse;

  try {
    if (!event.body) {
      throw new Error('Invalid request.');
    }
    const body = JSON.parse(event.body);

    const { recaptcha, email, name, message, company } = body;

    // Validate input
    await contactFormSchema.validateSync(body);

    // Verify recaptcha
    const { data: recaptchaRes } = await verifyRecaptcha(recaptcha);
    if (!recaptchaRes.success) {
      throw new Error('Please verify you are not a robot.');
    }

    // Compose email

    // const ret = await axios(url);
    response = {
      body: JSON.stringify({
        message: 'hello world',
        // location: ret.data.trim()
      }),
      headers: {
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      statusCode: 200,
    };
  } catch (err) {
    response = {
      body: JSON.stringify({
        message: err.message,
      }),
      headers,
      statusCode: 422,
    };
  }

  return response;
};
