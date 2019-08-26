import AWSLambda from 'aws-lambda';
import axios from 'axios';
import * as Yup from 'yup';
import { IResponse } from './types/types';

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
  return axios.post('https://www.google.com/recaptcha/api/siteverify', {
    response: recaptchaResponse,
    secret: process.env.CoderJonoRecaptchaSiteSecret,
  });
  // return rp({
  //   url: 'https://www.google.com/recaptcha/api/siteverify',
  //   method: 'POST',
  //   formData: {
  //     response: recaptchaResponse,
  //     secret: functions.config().recaptcha.secret,
  //   },
  //   json: true,
  // });
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

    await contactFormSchema.validateSync(body);

    const { data: recaptchaRes } = await verifyRecaptcha(recaptcha);

    if (!recaptchaRes.success) {
      throw new Error('Please verify you are not a robot.');
    }

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
