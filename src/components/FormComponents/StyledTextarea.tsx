import styled from 'styled-components';
import { InputStyles } from './styles';
import { IHasError } from './types';

const StyledTextarea = styled.textarea<IHasError>`
  ${InputStyles}
  resize: none;
`;

export default StyledTextarea;
