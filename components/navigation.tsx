import Link from "next/link";
import Image from "next/image";
import logoImg from "../public/nextwind-logo-text-dark.png";
import { useState, useEffect, useContext } from "react";
import MenuDropDownButtons from "./menuDropdownButton";
import Web3WalletContext from "../context/Web3WalletContext";

interface Props { }
const Navigation = (props: Props) => {

  const { walletConnectors, walletDisconnect, connectedWallet } = useContext(Web3WalletContext)

  return (
    <nav
      className={`border-gray container fixed bottom-0 mx-auto  flex w-full items-center justify-between border-t-[1px] py-2 sm:relative `}
    >
      <div className=" flex h-auto  w-44 flex-initial ">{logo}</div>
      <ul className="flex flex-1 justify-end">
        {NAV_ITEMS.map((item, index) => {
          let name = item.name;
          let url = item.url;
          return (
            <li className={`flex px-4`} key={`${item}.toString + ${index}`}>
              {navItem(name, url)}
            </li>
          );
        })}
      </ul>
      <MenuDropDownButtons
        walletDisconnect={walletDisconnect}
        walletConnectors={walletConnectors}
        address={connectedWallet.address}
      />
    </nav>
  );
};

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
export default Navigation;
