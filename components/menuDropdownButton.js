import { Menu, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import {
  ChevronDownIcon,
  DocumentDuplicateIcon,
  LogoutIcon,
  LoginIcon,
} from "@heroicons/react/solid";
import { MetamaskIcon } from "../utils/icons";
import { copyToClipboard, notify } from "../utils/utils";

const ACTIVE_COLOR = "bg-black text-white";

export default function MenuDropdownButton({
  accounts,
  handleOnConnect,
  handleOnDisconnect,
}) {
  const [isConnected, setConnected] = useState();

  const handleOnConnectButton = async () => {
    setConnected(true);
    await handleOnConnect();
  };
  const handleOnDisconnectButton = () => {
    setConnected(false);
    handleOnDisconnect();
  };

  const handleOnCopyButton = async () => {
    if (accounts) {
      await copyToClipboard(accounts.address);
      notify("Address copied to clipboard!");
    }
  };

  return (
    <div className="w-56 text-right ">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button
            className={`overflow-hidden whitespace-nowrap rounded-md border-2 border-black px-4  py-2 font-mono text-sm capitalize tracking-wide hover:border-transparent hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 `}
          >
            {accounts ? "🦊 " + accounts.ellipAddress : "Connect Wallet"}
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
          <Menu.Items className=" right-0 mt-2 w-56 origin-top divide-y divide-gray-100 rounded-md bg-white shadow-lg  ring-1 ring-black  ring-opacity-5 focus:outline-none md:absolute  md:origin-top-right">
            {accounts
              ? showUserOptions(handleOnDisconnectButton, handleOnCopyButton)
              : showConnectOptions(handleOnConnectButton)}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

const showConnectOptions = (handleOnConnectButton) => {
  return (
    <div className="px-1 py-1 ">
      <Menu.Item onClick={handleOnConnectButton}>
        {({ active }) => (
          <button
            className={`${
              active ? ACTIVE_COLOR : "text-gray-900"
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
            className={`${
              active ? ACTIVE_COLOR : "text-gray-900"
            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
          >
            <DocumentDuplicateIcon className={`mr-2 h-5 w-5`} />
            Copy Address
          </button>
        )}
      </Menu.Item>
      <Menu.Item onClick={handleOnDisconnectButton}>
        {({ active }) => (
          <button
            className={`${
              active ? ACTIVE_COLOR : "text-gray-900"
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
