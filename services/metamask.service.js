import MetaMaskOnboarding from '@metamask/onboarding';
import React from 'react';

// export const ONBOARD_TEXT = 'Click here to install MetaMask!';
// export const CONNECT_TEXT = 'Connect';
// export const CONNECTED_TEXT = 'Connected';


const Metamask = () => {
    //     const [buttonText, setButtonText] = React.useState(ONBOARD_TEXT);
    //     const [isDisabled, setDisabled] = React.useState(false);
    //     const [accounts, setAccounts] = React.useState([]);
    //     const [chainId, setChainId] = React.useState(null);
    //     const [message, setMessage] = React.useState('');
    //     const [networkName, setNetworkName] = React.useState('');
    //     const onboarding = React.useRef();
    // 
    //     React.useEffect(() => { // Initial Load
    //         if (!onboarding.current) {
    //             onboarding.current = new MetaMaskOnboarding();
    //         }
    //         if (MetaMaskOnboarding.isMetaMaskInstalled()) {
    //             window.ethereum.on('accountsChanged', handleNewAccounts);
    //             window.ethereum.on('chainChanged', handleNewChain);
    //         }
    //         return () => {
    //             window.ethereum.removeListener('accountsChanged', handleNewAccounts);
    //             window.ethereum.removeListener('chainChanged', handleNewChain);
    //         };
    //     }, []);
    // 
    //     React.useEffect(() => { // When accounts change
    //         if (MetaMaskOnboarding.isMetaMaskInstalled()) {
    //             if (accounts.length > 0) {
    //                 setButtonText(CONNECTED_TEXT);
    //                 setDisabled(true);
    //                 onboarding.current.stopOnboarding();
    //             } else {
    //                 setChainId('')
    //                 setNetworkName('')
    //                 setButtonText(CONNECT_TEXT);
    //                 setDisabled(false);
    //             }
    //         }
    //     }, [accounts]);
    // 
    //     React.useEffect(() => { // when chain ID changes
    //         if (MetaMaskOnboarding.isMetaMaskInstalled()) {
    //             if (chainId) {
    //                 switch (chainId) {
    //                     case "0x1":
    //                         setNetworkName('Ethereum Main Network (Mainnet)')
    //                         break;
    //                     case "0x3":
    //                         setNetworkName('Ropsten Test Network');
    //                         break;
    //                     case "0x4":
    //                         setNetworkName('Rinkeby Test Network');
    //                         break;
    //                     case "0x5":
    //                         setNetworkName('Goerli Test Network');
    //                         break;
    //                     case "0x2a":
    //                         setNetworkName('Kovan Test Network');
    //                         break;
    //                     case "0x89":
    //                         setNetworkName('Polygon Mainnet');
    //                         break;
    //                     case "0x13881":
    //                         setNetworkName('Mumbai Test Network (Polygon)');
    //                         break;
    //                     default:
    //                         break;
    //                 }
    //             }
    //         }
    //     }, [chainId]);


    // const handleNewAccounts = (newAccounts) => {
    //     return newAccounts;
    //     // setAccounts(newAccounts);
    // }
    // const handleNewChain = (newChainId) => {
    //     return newChainId
    //     // setChainId(newChainId);
    //     // window.location.reload()
    // }
    // const notify = (msg) => {
    //     if (msg.code === 4001) {
    //         return "User rejected request"
    //     } else return msg;
    // };

    const handleConnectClick = () => {
        if (MetaMaskOnboarding.isMetaMaskInstalled()) {
            window.ethereum
                .request({ method: 'eth_requestAccounts' })
                .then(handleNewAccounts)
                .catch((error) => {
                    if (error.code === 4001) {
                        // EIP-1193 userRejectedRequest error
                        // setMessage('Please connect to MetaMask.');
                        console.log('Please connect to MetaMask:', notify(error));
                    } else {
                        return notify(error);
                    }
                });
            window.ethereum
                .request({ method: 'eth_chainId' })
                .then(handleNewChain);

        } else {
            onboarding.current.startOnboarding();
        }
    };
    //     return (
    //         <div>
    //             <p>Account: {accounts[0]}</p>
    //             <p>ChainId: {chainId}</p>
    //             <p>Network: {networkName}</p>
    //             <p>Message: {message}</p>
    //             <button disabled={isDisabled} onClick={handleConnectClick}>
    //                 {buttonText}
    //             </button>
    //         </div>
    // 
    //     );
}

export default Metamask