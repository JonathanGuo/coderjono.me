import React, { useState } from 'react';

import { connect, Field, FieldProps, getIn } from 'formik';
import styled from 'styled-components';

import FormError from './FormError';
import StyledInput from './StyledInput';
import StyledLabel from './StyledLabel';
import StyledTextarea from './StyledTextarea';
import { IFormikProps } from './types';

const FormGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
`;

interface IFormGroupProps {
  label: React.ReactNode;
  name: string;
  type?: string;
  placeholder?: string;
  rows?: number;
}

const FormGroup: React.FunctionComponent<IFormGroupProps & IFormikProps> = ({
  label,
  name,
  formik,
  ...restProps
}) => {
  const [focused, setFocused] = useState<boolean>(false);
  function handleOnFocus() {
    setFocused(true);
  }

  function handleOnBlur() {
    setFocused(false);
  }

  const touched = getIn(formik.touched, name);
  const error = touched ? getIn(formik.errors, name) : null;
  const InputComponent = restProps.rows ? StyledTextarea : StyledInput;

  return (
    <FormGroupWrapper>
      <StyledLabel error={error} focused={focused}>
        {label}
      </StyledLabel>
      <Field
        {...restProps}
        name={name}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        error={error}
        render={({ field }: FieldProps) => <InputComponent {...field} />}
      />
      {error && <FormError>{error}</FormError>}
    </FormGroupWrapper>
  );
};

// tslint:disable-next-line: export-name
export default connect<IFormGroupProps>(FormGroup);
