// constants
import Web3EthContract from "web3-eth-contract";
import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";

// log
import { fetchData } from "../data/dataActions";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import "../../Components/WalletConnectApp.css";
const injected = new InjectedConnector({
  supportedChainIds: [25]
});

const walletconnect = new WalletConnectConnector({
  rpc: { 25: "https://evm-cronos.crypto.org" },
  network: "cronos",
  qrcode: true,
  pollingInterval: 12000
});

function WalletConnectApp() {
  const {
    active,
    account,
    chainId,
    library,
    connector,
    activate,
    deactivate
  } = useWeb3React();

  const connectInjected = async () => {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  };

  const connectWalletConnect = async () => {
    try {
      await activate(walletconnect);
    } catch (ex) {
      console.log(ex);
    }
  };

  async function disconnect() {
    try {
      deactivate();
    } catch (ex) {
      console.log(ex);
    }
  }
}

const connectRequest = () => {
  return {
    type: "CONNECTION_REQUEST"
  };
};

const connectSuccess = (payload) => {
  return {
    type: "CONNECTION_SUCCESS",
    payload: payload
  };
};

const connectFailed = (payload) => {
  return {
    type: "CONNECTION_FAILED",
    payload: payload
  };
};

const updateAccountRequest = (payload) => {
  return {
    type: "UPDATE_ACCOUNT",
    payload: payload
  };
};

//function getLibrary(provider) {
// const library = new Web3Provider(provider);
//library.pollingInterval = 12000;
//return library;
//}

//  Create WalletConnect Provider

export const connect = () => {
  return async (dispatch) => {
    dispatch(connectRequest());
    const abiResponse = await fetch("/config/abi.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });
    const abi = await abiResponse.json();
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });
    const CONFIG = await configResponse.json();
    const { ethereum } = window;
    const metamaskIsInstalled = ethereum && ethereum.isMetaMask;
    if (metamaskIsInstalled) {
      Web3EthContract.setProvider(ethereum);
      let web3 = new Web3(ethereum);
      try {
        const accounts = await ethereum.request({
          method: "eth_requestAccounts"
        });
        const networkId = await ethereum.request({
          method: "net_version"
        });
        if (networkId == CONFIG.NETWORK.ID) {
          const SmartContractObj = new Web3EthContract(
            abi,
            CONFIG.CONTRACT_ADDRESS
          );
          dispatch(
            connectSuccess({
              account: accounts[0],
              smartContract: SmartContractObj,
              web3: web3
            })
          );
          // Add listeners start
          ethereum.on("accountsChanged", (accounts) => {
            dispatch(updateAccount(accounts[0]));
          });
          ethereum.on("chainChanged", () => {
            window.location.reload();
          });
          // Add listeners end
        } else {
          dispatch(connectFailed(`Change network to ${CONFIG.NETWORK.NAME}.`));
        }
      } catch (err) {
        dispatch(connectFailed("Something went wrong."));
      }
    } else {
      dispatch(connectFailed("Install Metamask."));
    }
  };
};

export const walletconnect_connect = () => {
  return async (dispatch) => {
    dispatch(connectRequest());
    const abiResponse = await fetch("/config/abi.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });
    const abi = await abiResponse.json();
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });
    const CONFIG = await configResponse.json();

    const { ethereum } = window;

    Web3EthContract.setProvider(ethereum);

    const provider = new WalletConnectProvider({
      rpc: {
        25: "https://evm-cronos.crypto.org"
      }
    });

    //  Enable session (triggers QR Code modal)
    await provider.enable();

    //  Create Web3
    const web3 = new Web3(provider);
    console.log("web3", web3);

    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts"
      });
      const networkId = await ethereum.request({
        method: "net_version"
      });
      if (networkId == CONFIG.NETWORK.ID) {
        const SmartContractObj = new Web3EthContract(
          abi,
          CONFIG.CONTRACT_ADDRESS
        );
        dispatch(
          connectSuccess({
            account: accounts[0],
            smartContract: SmartContractObj,
            web3: web3
          })
        );
        // Add listeners start
        ethereum.on("accountsChanged", (accounts) => {
          dispatch(updateAccount(accounts[0]));
        });
        ethereum.on("chainChanged", () => {
          window.location.reload();
        });
        // Add listeners end
      } else {
        dispatch(connectFailed(`Change network to ${CONFIG.NETWORK.NAME}.`));
      }
    } catch (err) {
      dispatch(connectFailed("Something went wrong."));
    }
  };
};

export const updateAccount = (account) => {
  return async (dispatch) => {
    dispatch(updateAccountRequest({ account: account }));
    dispatch(fetchData(account));
  };
};
