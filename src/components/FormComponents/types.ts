import { FormikContext } from 'formik';

export interface IHasError {
  error?: string;
}

export interface IFormikProps {
  formik: FormikContext<any>;
}
