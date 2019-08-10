import styled from 'styled-components';

import { InputStyles } from './styles';
import { IHasError } from './types';

const StyledInput = styled.input<IHasError>`
  ${InputStyles}

  &:disabled {
    cursor: not-allowed;
  }
`;

export default StyledInput;
