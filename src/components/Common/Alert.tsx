import styled from 'styled-components';

import { errorColor } from '../FormComponents/styles';

const Alert = styled.div`
  background-color: ${errorColor};
  color: #fff;
  padding: 0.5rem 1rem;
`;

export default Alert;
