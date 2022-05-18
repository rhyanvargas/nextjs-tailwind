export const STATUS = {
  ONBOARD_TEXT: "Click here to install MetaMask!",
  CONNECT_TEXT: "Connect",
  CONNECTED_TEXT: "Connected",
  REJECT_TEXT: "User rejected request",
  INSTALL_METAMASK_TEXT: (
    <span>
      <p>
        {" "}
        🦊{" "}
        <a target="_blank" href="https://metamask.io/download.html">
          You must install Metamask, a virtual Ethereum wallet, in your browser.
        </a>
      </p>
    </span>
  ),
  DISCONNECT_WALLET_INFO: (
    <a
      className="underline"
      target="_blank"
      href="https://metamask.zendesk.com/hc/en-us/articles/360059535551-Disconnect-wallet-from-a-dapp"
    >
      CAUTION: Please Follow these instructions to disconnect your metamask
      wallet.
    </a>
  ),
  METAMASK_PROCESSING:
    "Please click on your metamask extension for pending action - or login metamask again.",
};

export const addEllipsis = (str) => {
  if (str) {
    const first = str.substring(0, 4);
    const ellipsis = "...";
    // Displays  the last 4 characters
    const last = str.substring(str.length - 4);

    return first + ellipsis + last;
  }
};

export const copyToClipboard = async (str) => {
  if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
    try {
      return await navigator.clipboard.writeText(str);
    } catch (error) {
      console.log("The Clipboard API is not available: ", error);
    }
  }
};
