export const STATUS = {
    ONBOARD_TEXT: 'Click here to install MetaMask!',
    CONNECT_TEXT: 'Connect',
    CONNECTED_TEXT: 'Connected',
    REJECT_TEXT: 'User rejected request',
    MISSING_METAMASK_TEXT: `
        < span >
        <p>
            {" "}
            🦊{" "}
            <a target="_blank" href="https://metamask.io/download.html">
                You must install Metamask, a virtual Ethereum wallet, in your
                browser.
            </a>
        </p>
        </span >
     `,
}

export const addEllipsis = (str) => {
    const first = str.substring(0, 4)
    const ellipsis = '...'
    // Displays  the last 4 characters
    const last = str.substring(str.length - 4)

    return first + ellipsis + last;
}

export const copyToClipboard = async (str) => {
    try {
        if ('clipboard' in navigator) {
            return await navigator.clipboard.writeText(str);
        }
    } catch (error) {
        console.log(error);
    }
}

