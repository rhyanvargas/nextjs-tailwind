const STATUS = {
    CONNECT: "Connect Your Wallet",
    CONNECTED: "Wallet Connected",
    ERROR: "⚠️ ",
    INSTALL: (
        <span>
            <p>
                {" "}
                🦊{" "}
                <a target="_blank" href={`https://metamask.io/download.html`}>
                    You must install Metamask, a virtual Ethereum wallet, in your
                    browser.
                </a>
            </p>
        </span>
    ),
}

export const connectWallet = async () => {
    if (window.etherum) {
        try {
            const accounts = await etherum.request({ method: 'eth_requestAccounts' });
            const accntObj = {
                status: STATUS.CONNECTED,
                address: accounts[0]
            }
            console.log(accntObj);
            return accntObj;
        } catch (err) { // cant connect to account
            return {
                status: STATUS.ERROR + err,
                address: ""
            }
        }
    } else { // Metamask not installed
        return {
            address: "",
            status: STATUS.INSTALL,
        }
    }
}