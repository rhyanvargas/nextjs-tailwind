import PropTypes from 'prop-types';
import Layout from '../components/layout';
import '../styles/globals.css';
import { ethers } from "ethers";
import React, { useEffect, useState } from 'react';


const api = process.env.NEXT_PUBLIC_ALCHEMY_API
const rpc = `https://eth-rinkeby.alchemyapi.io/v2/${api}`

const MyApp = ({ Component, pageProps }) => {

  const [accounts, setAccounts] = useState(null);
  const [isConnected, setConnected] = useState(false);


  // Handlers
  const handleOnDisconnect = async () => {
    try {
      console.log('DISCONNECT CLICKED!');
    } catch (error) {
      console.log(error);
    }
  }
  const handleOnConnect = async () => {
    try {
      console.log('CONNECT CLICKED!');
    } catch (error) {
      console.log(error);
    }
  }
  const handleAccountChange = (accounts) => {
    setAccounts((acs) => acs = accounts);
    console.log("ACCOUNT CHANGED: " + accounts);
  }

  //  RENDER
  const connectButton = (
    <button onClick={handleOnConnect}>Connect</button>
  )
  const disconnectButton = (
    <button onClick={handleOnDisconnect}>Disconnect</button>
  )

  // Use the layout defined at the page level, if available. Otherwise, wrap page with Layout Component
  // If multiple layouts neede, see here - https://github.com/vercel/next.js/tree/canary/examples/layout-component
  const getLayout = Component.getLayout || ((page) => (<Layout>{page}</Layout>))
  return getLayout(
    <>
      <div>
        {isConnected ? connectButton : disconnectButton}
      </div>
      <Component {...pageProps} />
    </>
  )

};

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any
};

export default MyApp;