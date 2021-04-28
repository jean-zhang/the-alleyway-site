import styled from 'styled-components';
import { min } from '../lib/responsive';
import { colors } from './colors';

const fonts = {
  swearDisplay: 'swear-display, serif',
  poppins: 'poppins, sans-serif',
};

const fontSizes = {
  h3: 'clamp(1.5em, 6vw, 2em)',
};

const fontStyles = {
  italic: 'italic',
};

const fontWeights = {
  normal: 400,
  medium: 600,
  bold: 650,
};

const H1 = styled.h1`
  font-family: ${fonts.swearDisplay};
  font-weight: ${fontWeights.medium};
  color: ${colors.BURNTORANGE};
  font-size: 6em;
  @media ${min.tablet} {
    font-size: 10.5em;
  }
  @media ${min.desktop} {
    font-size: 10em;
  }
`;

const H2 = styled.h2`
  font-size: ${fontSizes.h2};
  font-family: ${fonts.swearDisplay};
  font-weight: ${fontWeights.medium};
  color: ${colors.BURNTORANGE};
  font-size: 2em;
  @media ${min.tablet} {
    font-size: 2.6em;
  }
`;

const H3 = styled.h3`
  font-size: ${fontSizes.h3};
  font-family: ${fonts.swearDisplay};
  font-style: ${fontStyles.italic};
  font-weight: ${fontWeights.medium};
`;

const H4 = styled.h3`
font-size: ${fontSizes.h3};
font-family: ${fonts.poppins};
font-weight: ${fontWeights.medium};
color: ${colors.BROWN};
letter-spacing: .1em;
font-size: 1em;
`;

const P = styled.p`
  font-family: ${fonts.poppins};
  font-weight: ${fontWeights.normal};
  font-size: 1em;
  line-height: 1.8em;
`;



export { H1, H2, H3, H4, P, fontWeights, fonts };
