import '@emotion/react';
import { COLOR } from './COLOR';

const PRIMARY_COLOR = COLOR.Blue;
const SECONDARY_COLOR = COLOR.Red;

const theme = {
  color: {
    primary50: PRIMARY_COLOR[50],
    primary100: PRIMARY_COLOR[100],
    primary200: PRIMARY_COLOR[200],
    primary300: PRIMARY_COLOR[300],
    primary400: PRIMARY_COLOR[400],
    primary500: PRIMARY_COLOR[500],
    primary600: PRIMARY_COLOR[600],
    primary700: PRIMARY_COLOR[700],
    primary800: PRIMARY_COLOR[800],
    primary900: PRIMARY_COLOR[900],

    secondary50: SECONDARY_COLOR[50],
    secondary100: SECONDARY_COLOR[100],
    secondary200: SECONDARY_COLOR[200],
    secondary300: SECONDARY_COLOR[300],
    secondary400: SECONDARY_COLOR[400],
    secondary500: SECONDARY_COLOR[500],
    secondary600: SECONDARY_COLOR[600],
    secondary700: SECONDARY_COLOR[700],
    secondary800: SECONDARY_COLOR[800],
    secondary900: SECONDARY_COLOR[900],
  },
};

export { theme };
export default theme;
