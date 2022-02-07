import Link from "next/link";
import Image from 'next/image'
import logoImg from '../public/nextwind-logo-text-dark.png'
// import PropTypes from 'prop-types';


const NAV_ITEMS = [
  {
    "name": "home",
    "url": "/"
  },
  {
    "name": "team",
    "url": "/team"
  },
  // {
  //   "name": "roadmap",
  //   "url": "/roadmap"
  // },
  // {
  //   "name": "gallery",
  //   "url": "/gallery"
  // },


]

export const navItem = (text = "Nav Item", url = "#") => {
  return (
    <Link href={url}>
      <a>{text}</a>
    </Link>
  )
}

const logo = (
  <Image
    src={logoImg}
    alt="logo"
  // width={500} automatically provided
  // height={500} automatically provided
  // blurDataURL="data:..." automatically provided
  // placeholder="blur" // Optional blur-up while loading
  />
)


const Navigation = () => {
  return (
    <nav className={`container mx-auto items-center fixed bottom-0 sm:relative w-full border-gray border-t-[1px] flex justify-between`}>
      <div className=" flex flex-initial w-44  h-auto">
        {logo}
      </div>
      <ul className="flex flex-1 justify-end">
        {NAV_ITEMS.map((item, index) => {
          let name = item.name;
          let url = item.url;
          return (
            <li className={`px-4`} key={`${item}.toString + ${index}`}>
              {navItem(name, url)}
            </li>
          )
        })}
        {/* <input placeholder="Search..." /> */}
      </ul>
    </nav>
  );
};

// Navigation.propTypes = {
//   props = PropTypes.props
// };

export default Navigation;
