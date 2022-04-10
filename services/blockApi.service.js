import detectEthereumProvider from "@metamask/detect-provider";
import { STATUS, addEllipsis } from "../utils/utils";
// import { ethers } from "ethers";

export const disconnectWallet = () => {
  localStorage.clear();
};

export const connectWallet = async () => {
  const provider = await detectEthereumProvider();
  let obj = {};
  if (provider) {
    try {
      let accounts = await ethereum.request({ method: "eth_requestAccounts" });
      let address = accounts && accounts[0];
      let obj = {
        provider: provider,
        address,
        message: STATUS.CONNECTED_TEXT,
      };
      localStorage.setItem("connected", "true");
      return obj;
    } catch (error) {
      obj.message = error.message;
      if (error.code == "4001") {
        obj.message = STATUS.REJECT_TEXT;
      }
      return obj;
    }
  } else {
    console.log("Please install MetaMask!");
  }
};

export const getChainAndNetwork = async (provider) => {
  try {
    let chainId = await provider?.request({ method: "eth_chainId" });
    let network = getNetworkNameFromChainId(chainId);
    return {
      chainId,
      network,
      status: "",
    };
  } catch (error) {
    console.log(error);
    return {
      chainId: "",
      network: "",
      status: "ERROR: Getting chain Id",
    };
  }
};

export const getUserAccounts = async (provider) => {
  try {
    let accounts = await provider?.request({ method: "eth_accounts" }); // returns array with first address in account
    let chainInfo = await getChainAndNetwork(provider);

    if (accounts > 0) {
      let accountsObj = {
        address: accounts[0],
        ellipAddress: addEllipsis(accounts[0]),
        chainId: chainInfo.chainId,
        network: chainInfo.network,
        status: STATUS.CONNECTED_TEXT,
      };
      console.log("getUserAccounts - return obj:", accountsObj);
      return accountsObj;
    }
  } catch (error) {
    console.log(error);
    return {
      address: accounts,
      chainId: "",
      network: "",
      status: `Error Message: ` + err.message,
    };
  }
};

const getNetworkNameFromChainId = (chainId) => {
  if (chainId) {
    switch (chainId) {
      case "0x1":
        return "Ethereum Main Network (Mainnet)";
      case "0x3":
        return "Ropsten Test Network";
      case "0x4":
        return "Rinkeby Test Network";
      case "0x5":
        return "Goerli Test Network";
      case "0x2a":
        return "Kovan Test Network";
      case "0x89":
        return "Polygon Mainnet";
      case "0x13881":
        return "Mumbai Test Network (Polygon)";
      default:
        return "Chain Network Name not Recognized from chain ID: " + chainId;
    }
  } else return "No Chain detected";
};
