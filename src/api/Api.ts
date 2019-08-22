import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import get from 'lodash/get';

/**
 * Create axios instance
 *
 * @export
 * @returns {AxiosInstance}
 */
export function createAxios(config?: AxiosRequestConfig): AxiosInstance {
  // Create default axios instance with basic headers
  const defaultAxios = axios.create({
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
    },
    ...config,
  });

  defaultAxios.interceptors.response.use(
    res => res,
    res => {
      switch (res.response.status) {
        case 403:
          return Promise.reject(new Error(res.response.data.message));
        case 419:
          return Promise.reject(
            new Error(
              'Authentication Timeout. Please refresh your page and try again.',
            ),
          );
        case 422:
          const errors = get(res, 'response.data.errors');
          if (errors) {
            return Promise.reject(errors);
          }

          return Promise.reject(
            new Error(get(res, 'response.data.message', res)),
          );
        case 500:
          return Promise.reject(
            new Error('Server error. Please try again later.'),
          );
        default:
          return Promise.reject(res);
      }
    },
  );

  return defaultAxios;
}

const Api = createAxios();

export default Api;
