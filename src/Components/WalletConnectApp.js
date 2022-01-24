import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import "./WalletConnectApp.css";
const injected = new InjectedConnector({
  supportedChainIds: [20]
});

const walletconnect = new WalletConnectConnector({
  rpc: { 20: "https://api.elastos.io/eth" },
  network: "cronos",
  qrcode: true,
  pollingInterval: 12000
});

export default function WalletConnectApp() {
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

  return (
    <div className="WalletConnectApp">
      <div>ChainId: {chainId ? chainId : null} </div>
      <div>Active: {active ? "true" : "false"}</div>
      <div>Account: {account ? account : null}</div>
      <button onClick={connectInjected}>Injected</button>
      <button onClick={connectWalletConnect}>Wallet Connect</button>
      <button onClick={disconnect}>Disconnect</button>
    </div>
  );
}
