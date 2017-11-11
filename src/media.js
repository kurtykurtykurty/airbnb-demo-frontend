import { css } from "styled-components";

const sizes = {
  xs: { min: 0 },
  sm: { min: 576 },
  md: { min: 768 },
  lg: { min: 991 },
  xl: { min: 1200 }
};

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, sizeName) => {
  const minWIdthQuery = sizes[sizeName].min / 16;
  acc[sizeName] = (...args) => css`
    @media (min-width: ${minWIdthQuery}em) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
