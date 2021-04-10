import styled from 'styled-components';
import { P } from '../../style/typography';
import { colors } from '../../style/colors';

const TextLabel = styled(P)`
  color: ${colors.BROWN};
  display: block;
  margin: 0;
`;

const TextInput = styled(P).attrs({
  as: 'input',
})`
  display: block;
  border: none;
  border-bottom: 1px solid ${colors.BROWN};
  width: clamp(16em, 60vw, 26em);

  &:focus {
    outline: none;
  }
`;

export { TextLabel, TextInput };
