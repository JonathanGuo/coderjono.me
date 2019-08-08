import { css } from 'styled-components';
import { IHasError } from './types';

export const errorColor = '#b83280';

export const InputStyles = css<IHasError>`
  appearance: none;
  background: transparent;
  border-bottom-width: 2px;
  border-bottom-color: ${({ error }) => (error ? errorColor : '#a0aec0')};
  width: 100%;
  color: #4a5568;
  margin-top: 0.5rem;
  margin-right: 0.75rem;
  padding: 0.5rem;

  transition-property: border;
  transition-timing-function: ease-in-out;
  transition-duration: 250ms;

  :focus {
    outline: none;
    border-bottom-color: #4a5568;
  }
`;

export const ErrorStyles = css`
  color: ${errorColor};
`;
