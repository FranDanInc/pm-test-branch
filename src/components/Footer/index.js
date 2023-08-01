//This code appears to be a React component that represents a Footer section for a website or web application. The component uses the Material-UI library (@mui/material) to style its elements.
//Overall, this code creates a responsive Footer section with a copyright notice and a link to the website "bfactor.org," both styled using Material-UI components.

//Import statements: The component imports various Material-UI components and styles.
import { Box, Container, Link, Typography, styled } from '@mui/material';

/*FooterWrapper styling: A styled Container component is created using the styled utility from Material-UI. The FooterWrapper component adds a margin-top equal to theme.spacing(4), which is likely to create spacing between the Footer and other content on the page.*/
const FooterWrapper = styled(Container)(
  ({ theme }) => `
        margin-top: ${theme.spacing(4)};
`
);

//Footer component: The main functional component named Footer is defined.
function Footer() {
  return (
    /*JSX code: The Footer component returns JSX code representing the Footer section. The content is wrapped inside the FooterWrapper component to apply the custom styling created earlier.*/
    <FooterWrapper className="footer-wrapper">
      <Box
        pb={4}
        display={{ xs: 'block', md: 'flex' }}
        alignItems="center"
        textAlign={{ xs: 'center', md: 'left' }}
        justifyContent="space-between"
      >
        <Box>
          <Typography variant="subtitle1">
            &copy; 2023 - Bfactor
          </Typography>
        </Box>
        <Typography
          sx={{
            pt: { xs: 2, md: 0 }
          }}
          variant="subtitle1"
        >
          Crafted by{' '}
          <Link
            href="http://bfactor.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            bfactor.org
          </Link>
        </Typography>
      </Box>
    </FooterWrapper>
  );
}

export default Footer;
