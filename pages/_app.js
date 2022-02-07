import PropTypes from 'prop-types';
import Layout from '../components/layout';
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  // Use the layout defined at the page level, if available. Otherwise, wrap page with Layout Component
  // If multiple layouts neede, see here - https://github.com/vercel/next.js/tree/canary/examples/layout-component
  const getLayout = Component.getLayout || ((page) => (<Layout>{page}</Layout>))

  return getLayout(<Component {...pageProps} />)
};

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any
};

export default MyApp;