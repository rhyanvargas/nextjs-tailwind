import Link from "next/link";
import Image from "next/image";
import logoImg from "../public/nextwind-logo-text-dark.png";
import { useState, useEffect } from "react";
import { addEllipsis, copyToClipboard } from "../utils/utils";
import { DocumentDuplicateIcon } from '@heroicons/react/solid'
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
  {
    name: "mint",
    url: "/mint",
  },
];
const navItem = (text = "Nav Item", url = "#") => {
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

const Navigation = ({ handleConnect, accounts }) => {
  const account = accounts && accounts[0]
  const accountEllipString = account && addEllipsis(account)
  const [isCopied, setIsCopied] = useState(false);

  const handleOnConnect = () => {
    if (account) {
      handleCopyClick();
    };

    handleConnect();
  }

  const handleCopyClick = () => {
    // Asynchronously call copyTextToClipboard
    copyToClipboard(account)
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true);
        alert(`Copied to clipboard`);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  }

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
      <div >
        <button
          className={`rounded-md border-2 border-black px-4 py-2 font-mono text-sm  uppercase tracking-wide hover:border-transparent hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 overflow-hidden whitespace-nowrap`}
          onClick={handleOnConnect}
        >
          {account ? '🦊 ' + accountEllipString : 'Connect'}
          {account && <span><DocumentDuplicateIcon className="h-5 w-5 inline ml-1" /></span>}

        </button>
      </div>
    </nav>
  );
};

// Navigation.propTypes = {
//   props = PropTypes.props
// };

export default Navigation;
