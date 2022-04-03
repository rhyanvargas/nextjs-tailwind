import detectEthereumProvider from "@metamask/detect-provider";
import { STATUS, addEllipsis } from "../utils/utils";

export const disconnectWallet = (provider) => {
  if (provider) {
    return {
      status: STATUS.DISCONNECT_WALLET_INFO,
      address: null,
      chainId: "",
      networkName: "",
    };
  }
};

export const connectWallet = async (provider) => {
  let obj = {};
  if (provider) {
    try {
      // Not connected...
      if (!provider.isConnected()) {
        obj.address = await provider.request({
          method: "eth_requestAccounts",
        })[0];
      }
      // already connected, do this...
      let userAccounts = await getUserAccounts(provider);
      let chainInfo = await getChainAndNetwork(provider);
      obj.address = userAccounts.address;
      obj.ellipAddress = userAccounts.ellipAddress;
      obj.chainId = chainInfo.chainId;
      obj.networkName = chainInfo.networkName;
      obj.status = STATUS.CONNECTED_TEXT;
      console.log("CONNECT WALLET: ", obj);
      return obj;
    } catch (err) {
      return (obj.status = "ERROR: " + err);
    }
  }
};

export const getChainAndNetwork = async (provider) => {
  try {
    let chainId = await provider?.request({ method: "eth_chainId" });
    let networkName = getNetworkNameFromChainId(chainId);
    return {
      chainId,
      networkName,
      status: "",
    };
  } catch (error) {
    return {
      chainId: "",
      networkName: "",
      status: "ERROR: Getting chain Id",
    };
  }
};

export const getUserAccounts = async (provider) => {
  try {
    let accounts = await provider?.request({ method: "eth_accounts" }); // returns array with first address in account
    let chainInfo = await getChainAndNetwork(provider);

    if (accounts > 0) {
      console.log("getUserAccounts:", accounts[0]);
      let accountsObj = {
        address: accounts[0],
        ellipAddress: addEllipsis(accounts[0]),
        chainId: chainInfo.chainId,
        networkName: chainInfo.networkName,
        status: STATUS.CONNECTED_TEXT,
      };
      console.log("getUserAccounts - return obj:", accountsObj);
      return accountsObj;
    }
  } catch (error) {
    return {
      address: accounts,
      chainId: "",
      networkName: "",
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
