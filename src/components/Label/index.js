/*
This code defines a React component named Label that represents a styled label with different color variants. The component uses the Material-UI library (@mui/material/styles) for styling and PropTypes for prop type validation.

Overall, this code creates a reusable Label component that can be used to display labels with different color variants, making it easy to style and categorize content based on their purposes or statuses. The color variants are specified in the LabelWrapper styled component, and the parent component using Label can choose the color by passing the appropriate color prop value.
*/

//Import statements: The component imports PropTypes from the 'prop-types' library and the styled utility from Material-UI.
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';


/*LabelWrapper styling: A styled component named LabelWrapper is created using the styled utility from Material-UI. This component defines various styles for the label based on different color variants. The styles include background color, padding, font size, border-radius, display (flex), and alignment. The colors for different variants are specified using the theme object provided by Material-UI.*/
const LabelWrapper = styled('span')(
  ({ theme }) => `
      background-color: ${theme.colors.alpha.black[5]};
      padding: ${theme.spacing(0.5, 1)};
      font-size: ${theme.typography.pxToRem(13)};
      border-radius: ${theme.general.borderRadius};
      display: inline-flex;
      align-items: center;
      justify-content: center;
      max-height: ${theme.spacing(3)};
      
      &.MuiLabel {
        &-primary {
          background-color: ${theme.colors.primary.lighter};
          color: ${theme.palette.primary.main}
        }

        &-black {
          background-color: ${theme.colors.alpha.black[100]};
          color: ${theme.colors.alpha.white[100]};
        }
        
        &-secondary {
          background-color: ${theme.colors.secondary.lighter};
          color: ${theme.palette.secondary.main}
        }
        
        &-success {
          background-color: ${theme.colors.success.lighter};
          color: ${theme.palette.success.main}
        }
        
        &-warning {
          background-color: ${theme.colors.warning.lighter};
          color: ${theme.palette.warning.main}
        }
              
        &-error {
          background-color: ${theme.colors.error.lighter};
          color: ${theme.palette.error.main}
        }
        
        &-info {
          background-color: ${theme.colors.info.lighter};
          color: ${theme.palette.info.main}
        }
      }
`
);

const Label = ({ className, color = 'secondary', children, ...rest }) => {
  return (
    <LabelWrapper className={'MuiLabel-' + color} {...rest}>
      {children}
    </LabelWrapper>
  );
};

Label.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf([
    'primary',
    'black',
    'secondary',
    'error',
    'warning',
    'success',
    'info'
  ])
};

export default Label;
