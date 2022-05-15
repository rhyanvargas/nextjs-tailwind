import { Menu, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import {
  DocumentDuplicateIcon,
  LogoutIcon,
  MenuIcon,
} from "@heroicons/react/solid";
import { MetamaskIcon } from "../utils/icons";
import { addEllipsis, copyToClipboard } from "../utils/utils";

const ACTIVE_COLOR = "bg-black text-white";

interface Props {
  address: string,
  walletConnectors: Array<Function>
}
const MenuDropdownButtons = ({ address, walletConnectors }: Props) => {

  const handleOnCopyButton = async () => {
    if (address.length > 0) {
      try {
        await copyToClipboard(address);
      } catch (error) { }
    }
  };

  return (
    <div className="w-56 text-right ">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button
            className={` flex h-10 overflow-hidden whitespace-nowrap rounded-md border-2 border-black px-4  py-2 font-mono text-sm capitalize tracking-wide hover:border-transparent hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 `}
          >
            {address ? buttonText(address) : "Connect Wallet"}
            {address && <MenuIcon className="ml-2 h-5 w-5" />}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            className={`absolute right-0 ${address ? "top-[calc(-100%-60px)]" : "top-[calc(-100%-20px)]"
              } mt-2 w-56 origin-bottom  divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none md:top-[100%] md:origin-top-right`}
          >
            {address
              ? showUserOptions(handleOnDisconnectButton, handleOnCopyButton)
              : showConnectOptions(handleOnConnectButton)}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

// CONDITIONAL COMPONENTS
const buttonText = (_address) => {
  let ellipsis = addEllipsis(_address);
  return `🦊 ${ellipsis} `;
};

const showConnectOptions = (handleOnConnectButton) => {
  return (
    <div className="px-1 py-1 ">
      <Menu.Item onClick={handleOnConnectButton}>
        {({ active }) => (
          <button
            className={`${active ? ACTIVE_COLOR : "text-gray-900"
              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
          >
            <MetamaskIcon className={`mr-2 h-5 w-5`} />
            Metamask
          </button>
        )}
      </Menu.Item>
    </div>
  );
};

const showUserOptions = (handleOnDisconnectButton, handleOnCopyButton) => {
  return (
    <div className="px-1 py-1">
      <Menu.Item onClick={handleOnCopyButton}>
        {({ active }) => (
          <button
            className={`${active ? ACTIVE_COLOR : "text-gray-900"
              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
          >
            <DocumentDuplicateIcon className={`mr-2 h-5 w-5`} />
            Copy address
          </button>
        )}
      </Menu.Item>
      <Menu.Item onClick={handleOnDisconnectButton}>
        {({ active }) => (
          <button
            className={`${active ? ACTIVE_COLOR : "text-gray-900"
              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
          >
            <LogoutIcon className="mr-2 h-5 w-5" aria-hidden="true" />
            Disconnect Wallet
          </button>
        )}
      </Menu.Item>
    </div>
  );
};

export default MenuDropdownButtons;