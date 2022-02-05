import Link from "next/link";
// import PropTypes from 'prop-types';

const Navigation = () => {
  return (
    <nav >
      <input placeholder="Search..." />
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  );
};

// Navigation.propTypes = {
//   props = PropTypes.props
// };

export default Navigation;
