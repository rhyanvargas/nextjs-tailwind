import Link from "next/link";
import Image from "next/image";
import logoImg from "../public/nextwind-logo-text-dark.png";
// import PropTypes from 'prop-types';

const NAV_ITEMS = [
  {
    name: "home",
    url: "/",
  },
  {
    name: "team",
    url: "/team",
  },
];

export const navItem = (text = "Nav Item", url = "#") => {
  return (
    <Link href={url}>
      <a>{text}</a>
    </Link>
  );
};

const logo = (
  <Image
    src={logoImg}
    alt="logo"
  // width={500} automatically provided
  // height={500} automatically provided
  // blurDataURL="data:..." automatically provided
  // placeholder="blur" // Optional blur-up while loading
  />
);

const handleOnConnect = async () => {
  // TODO
}

const onClickHandler = () => {
  // handleOnConnect();
  alert("CONNECT CLICK!");
};

const Navigation = () => {
  // const [wallet, setWallet] = useState({
  //   provider: null,
  //   signer: null
  // })

  return (
    <nav
      className={`border-gray container fixed bottom-0 mx-auto flex w-full items-center justify-between border-t-[1px] sm:relative`}
    >
      <div className=" flex h-auto w-44  flex-initial">{logo}</div>
      <ul className="flex flex-1 justify-end">
        {NAV_ITEMS.map((item, index) => {
          let name = item.name;
          let url = item.url;
          return (
            <li className={`px-4`} key={`${item}.toString + ${index}`}>
              {navItem(name, url)}
            </li>
          );
        })}
      </ul>
      <div>
        <button
          className={`rounded-md border-2 border-black px-4 py-2 font-mono text-sm  uppercase tracking-wide hover:border-transparent hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2`}
          onClick={onClickHandler}
        >
          Connect
        </button>
      </div>
    </nav>
  );
};

// Navigation.propTypes = {
//   props = PropTypes.props
// };

export default Navigation;
