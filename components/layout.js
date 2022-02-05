import Head from 'next/head'
import Navigation from './navigation'
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>NextWind</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <main className='container mx-auto'>
        {/* use <section> tags in page level to seperate content */}
        {children}
        <section>
          <p>
            This example adds a property <code>getLayout</code> to your page,
            allowing you to return a React component for the layout. This allows you
            to define the layout on a per-page basis. Since we're returning a
            function, we can have complex nested layouts if desired.
          </p>
          <p>
            When navigating between pages, we want to persist page state (input
            values, scroll position, etc) for a Single-Page Application (SPA)
            experience.
          </p>
          <p>
            This layout pattern will allow for state persistence because the React
            component tree is persisted between page transitions. To preserve state,
            we need to prevent the React component tree from being discarded between
            page transitions.
          </p>
        </section>
      </main>
    </>
  )
};

Layout.propTypes = {
  children: PropTypes.any
};

export default Layout;

