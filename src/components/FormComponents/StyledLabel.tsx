import styled from 'styled-components';
import { errorColor } from './styles';
import { IHasError } from './types';

export interface IStyledLabelProps extends IHasError {
  focused: boolean;
}

const StyledLabel = styled.label<IStyledLabelProps>`
  font-size: 1rem;
  color: ${({ error, focused }) =>
    error ? errorColor : focused ? '#2d3748' : '#718096'};
  font-weight: ${({ error, focused }) =>
    error || focused ? 'bold' : 'normal'};
  padding-left: 0.5rem;
  transition-property: all;
  transition-duration: 250ms;
  transition-timing-function: ease-in-out;
`;

export default StyledLabel;
