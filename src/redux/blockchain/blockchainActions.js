// constants
import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { config, abi, SWAP_REWARD_CHEF_ABI, SWAP_REWARD_CHEF_ADDRESS, MASTER_CHEF_ABI, MASTER_CHEF_ADDRESS, BUNNY_TOKEN_ABI, BUNNY_TOKEN_ADDRESS, BUNNY_VAULT_ABI, BUNNY_VAULT_ADDRESS } from "../../config.js"

// log
import { fetchData, fetchDataSuccess } from "../data/dataActions";
let web3Modal = "";
let provider = "";
const init = () => {
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        rpc: {
          1: `https://mainnet.infura.io/v3/f64084d938db45b4b54b604b6593bf71`,
          20: 'https://api.elastos.io/eth',
          128: 'https://http-mainnet.hecochain.com',
        },
        bridge: 'https://walletconnect.elastos.net/v2',
      }
    }
  };
  web3Modal = new Web3Modal({
    cacheProvider: false,
    providerOptions,
  });
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


//  Create WalletConnect Provider

export const connect = () => {
  init()
  return async (dispatch) => {
    dispatch(connectRequest());
    try {
      provider = await web3Modal.connect();
      console.log(provider)
      let web3 = new Web3(provider);
      try {
        const accounts = await web3.eth.getAccounts();
        const networkId = await web3.eth.getChainId()
        // if (networkId == config.NETWORK.ID) {
        if (true) {
          const SmartContractObj = new web3.eth.Contract(
            abi,
            config.CONTRACT_ADDRESS
          );
          const SRCSmartContractObj = new web3.eth.Contract(
            SWAP_REWARD_CHEF_ABI,
            SWAP_REWARD_CHEF_ADDRESS
          );
          const MCSmartContractObj = new web3.eth.Contract(
            MASTER_CHEF_ABI,
            MASTER_CHEF_ADDRESS
          );
          const BTSmartContractObj = new web3.eth.Contract(
            BUNNY_TOKEN_ABI,
            BUNNY_TOKEN_ADDRESS
          );
          const BVSmartContractObj = new web3.eth.Contract(
            BUNNY_VAULT_ABI,
            BUNNY_VAULT_ADDRESS
          );
          dispatch(
            connectSuccess({
              account: accounts[0],
              smartContract: SmartContractObj,
              SRCSmartContractObj,
              MCSmartContractObj,
              BTSmartContractObj,
              BVSmartContractObj,
              web3: web3
            })
          );
          provider.on("accountsChanged", (accounts) => {
            dispatch(updateAccount(accounts[0]));
          });
        } else {
          try {
            await provider.request({
              method: 'wallet_switchEthereumChain',
              params: [
                {
                  chainId: '0x14'
                }
              ]
            })
            dispatch(connect());
          }
          catch {
            dispatch(connectFailed(`Change network to ${config.NETWORK.NAME}.`));
          }
        }
      } catch (err) {
        console.log(err)
        dispatch(connectFailed(err.message));
      }

    } catch (e) {
      dispatch(connectFailed(e.message));
      return;
    }
  };
};

export const setEnableVisibility = (status) => {
  return (dispatch) => {
    dispatch({
      type: "SET_ENABLE_VISIBILITY",
      payload: status
    });
  }
}

export const disconnect = () => {
  return async (dispatch) => {
    if (provider.close) {
      await provider.close();
      await web3Modal.clearCachedProvider();
      provider = null
    }
    dispatch(
      connectSuccess({
        account: null,
        smartContract: null,
        SRCSmartContractObj: null,
        MCSmartContractObj: null,
        BTSmartContractObj: null,
        BVSmartContractObj: null,
        web3: null,
        loading: false
      }),
      );
    dispatch(connectFailed(""))
    dispatch(fetchDataSuccess(0,0))
  }
}
export const updateAccount = (account) => {
  return async (dispatch) => {
    dispatch(updateAccountRequest({ account: account }));
    dispatch(fetchData(account));
  };
};
