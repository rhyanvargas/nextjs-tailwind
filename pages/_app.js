import Layout from "../components/layout";
import "../styles/globals.css";
import { ethers } from "ethers";
import React, { useEffect, useState } from "react";

const api = process.env.NEXT_PUBLIC_ALCHEMY_API;
const rpc = `https://eth-rinkeby.alchemyapi.io/v2/${api}`;

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
