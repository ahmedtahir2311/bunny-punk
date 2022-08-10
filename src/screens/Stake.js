import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setEnableVisibility
} from "../redux/blockchain/blockchainActions";
import * as s from "../styles/globalStyles";
import { BUNNY_TOKEN_ADDRESS, BUNNY_VAULT_ADDRESS, config, MASTER_CHEF_ADDRESS, SWAP_REWARD_CHEF_ADDRESS } from "../config.js";
import styled from "styled-components";
import EarnEla from "../components/EarnEla";
import ManualBunny from "../components/ManualBunny";
import Card1 from "../components/Card1";
import CollectPortal from "../components/CollectPortal";
import { Link } from "react-router-dom";
import { fetchData } from "../redux/data/dataActions";

export const StyledButton = styled.button`
  padding: 10px;
  border-radius: 50px;
  border: none;
  background-color: var(--secondary);
  padding: 10px;
  font-weight: bold;
  color: var(--secondary-text);
  width: fit-content;
  cursor: pointer;
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const StyledRoundButton = styled.button`
  padding: 10px;
  border-radius: 100%;
  border: none;
  background-color: var(--secondary);
  padding: 10px;
  font-weight: bold;
  font-size: 15px;
  color: var(--primary-text);
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const ResponsiveWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: stretched;
  align-items: stretched;
  width: 100%;
  @media (min-width: 767px) {
    flex-direction: row;
  }
`;

export const StyledLogo = styled.img`
  width: 200px;
  @media (min-width: 767px) {
    width: 300px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
`;

export const StyledImg = styled.img`
  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);
  background-color: var(--accent);
  border-radius: 100%;
  width: 200px;
  @media (min-width: 900px) {
    width: 250px;
  }
  @media (min-width: 1000px) {
    width: 300px;
  }
  transition: width 0.5s;
`;

export const StyledLink = styled.a`
  color: var(--secondary);
  text-decoration: none;
`;

const Stake = (props) => {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const [CONFIG] = useState(config);
  const [isEnabling, setIsEnabling] = useState(false);
  const [tokenAmountEla, setTokenAmountEla] = useState("");
  const [tokenAmountManual, setTokenAmountManual] = useState("");
  const [isCollectPortalBunnyVisible, setIsCollectPortalBunnyVisible] = useState(false);
  const [isCollectPortalElaVisible, setIsCollectPortalElaVisible] = useState(false);
  const [rewardAmount, setRewardAmount] = useState("");
  const [rewardDebt, setRewardDebt] = useState("");
  const [depositAmount, setDepositAmount] = useState("");
  const [rewardAmountManual, setRewardAmountManual] = useState("");
  const [rewardDebtManual, setRewardDebtManual] = useState("");
  const [depositAmountManual, setDepositAmountManual] = useState("");

  const bunnyTokenBalanceOf = async (type) => {
    setIsEnabling(type);
    let tx = {
      to: BUNNY_TOKEN_ADDRESS,
      from: blockchain.account
    }
    const bunnyAmount = await blockchain.BTSmartContractObj.methods.balanceOf(blockchain.account).call();
    blockchain.BTSmartContractObj.methods
      .approve(type==="ELA" ? SWAP_REWARD_CHEF_ADDRESS : MASTER_CHEF_ADDRESS, bunnyAmount)
      .send(tx)
      .then((receipt) => {
        console.log(receipt);
        setIsEnabling(false);
        dispatch(fetchData(blockchain.account));
        dispatch(setEnableVisibility(false));
      }).catch(err => {
        setIsEnabling(false);
        console.log(err);
      });
  }

  const stakeBunnyForEla = async () => {
    let tx = {
      to: SWAP_REWARD_CHEF_ADDRESS,
      from: blockchain.account
    }
    const amount = await blockchain.web3.utils.toWei(tokenAmountEla ? tokenAmountEla : 0, "ether");

    console.log({blockchain})
    if (blockchain.web3.currentProvider.accounts && blockchain.web3.currentProvider.accounts.length) {
      try {
        let gas = await blockchain.smartContract.methods
          .deposit(amount).estimateGas(tx)
        tx.gas = blockchain.web3.utils.toHex(gas)
      } catch (err) {
        return
      }
    }
    console.log("tx", tx)
    blockchain.SRCSmartContractObj.methods
      .deposit(amount)
      .send(tx)
      .then((receipt) => {
        console.log(receipt);
        dispatch(fetchData(blockchain.account));
      }).catch(err => {
        console.log(err);
      });
  };

  const unStakeBunnyForEla = async () => {
    let tx = {
      to: SWAP_REWARD_CHEF_ADDRESS,
      from: blockchain.account
    }
    const amount = await blockchain.web3.utils.toWei(tokenAmountEla ? tokenAmountEla : 0, "ether");

    console.log({blockchain})
    if (blockchain.web3.currentProvider.accounts && blockchain.web3.currentProvider.accounts.length) {
      try {
        let gas = await blockchain.smartContract.methods
          .withdraw(amount).estimateGas(tx)
        tx.gas = blockchain.web3.utils.toHex(gas)
      } catch (err) {
        return
      }
    }
    console.log("tx", tx)
    blockchain.SRCSmartContractObj.methods
      .withdraw(amount)
      .send(tx)
      .then((receipt) => {
        console.log(receipt);
        dispatch(fetchData(blockchain.account));
      }).catch(err => {
        console.log(err);
      });
  };

  const stakeBunnyForManual = async () => {
    let tx = {
      to: SWAP_REWARD_CHEF_ADDRESS,
      from: blockchain.account
    }
    const amount = await blockchain.web3.utils.toWei(tokenAmountManual ? tokenAmountManual : 0, "ether");

    console.log({blockchain})
    if (blockchain.web3.currentProvider.accounts && blockchain.web3.currentProvider.accounts.length) {
      try {
        let gas = await blockchain.smartContract.methods
          .enterStaking(amount).estimateGas(tx)
        tx.gas = blockchain.web3.utils.toHex(gas)
      } catch (err) {
        return
      }
    }
    console.log("tx", tx)
    blockchain.MCSmartContractObj.methods
      .enterStaking(amount)
      .send(tx)
      .then((receipt) => {
        console.log(receipt);
        dispatch(fetchData(blockchain.account));
      }).catch(err => {
        console.log(err);
      });
  };

  const unStakeBunnyForManual = async () => {
    let tx = {
      to: SWAP_REWARD_CHEF_ADDRESS,
      from: blockchain.account
    }
    const amount = await blockchain.web3.utils.toWei(tokenAmountManual ? tokenAmountManual : 0, "ether");

    console.log({blockchain})
    if (blockchain.web3.currentProvider.accounts && blockchain.web3.currentProvider.accounts.length) {
      try {
        let gas = await blockchain.smartContract.methods
          .leaveStaking(amount).estimateGas(tx)
        tx.gas = blockchain.web3.utils.toHex(gas)
      } catch (err) {
        return
      }
    }
    console.log("tx", tx)
    blockchain.MCSmartContractObj.methods
      .leaveStaking(amount)
      .send(tx)
      .then((receipt) => {
        console.log(receipt);
        dispatch(fetchData(blockchain.account));
      }).catch(err => {
        console.log(err);
      });
  };

  const rewardBalance = async () => {
    const resp = await blockchain.SRCSmartContractObj.methods.userInfo(blockchain.account).call();
    const resp2 = await blockchain.SRCSmartContractObj.methods.poolInfo(0).call();
    console.log({resp2});
    const amount = await blockchain.web3.utils.fromWei(resp.amount, "ether");
    const depAmount = await blockchain.web3.utils.fromWei(resp2.currentDepositAmount, "ether");
    const reward = await blockchain.web3.utils.fromWei(resp.rewardDebt, "ether");
    setRewardAmount(amount);
    setRewardDebt(reward);
    setDepositAmount(depAmount);
    dispatch(fetchData(blockchain.account));
  }

  const rewardBalanceManual = async () => {
    const resp = await blockchain.MCSmartContractObj.methods.userInfo(0, blockchain.account).call();
    const resp2 = await blockchain.MCSmartContractObj.methods.poolInfo(0).call();
    const amount = await blockchain.web3.utils.fromWei(resp.amount, "ether");
    const depAmount = await blockchain.web3.utils.fromWei(resp2.lpSupply, "ether");
    const reward = await blockchain.web3.utils.fromWei(resp.rewardDebt, "ether");
    setRewardAmountManual(amount);
    setRewardDebtManual(reward);
    setDepositAmountManual(depAmount);
    dispatch(fetchData(blockchain.account));
  }

  const compoundingManual = async () => {
    let tx = {
      to: SWAP_REWARD_CHEF_ADDRESS,
      from: blockchain.account
    }
    const compoundingAmount = await blockchain.MCSmartContractObj.methods.userInfo(0, blockchain.account).call();
    const amount = await blockchain.web3.utils.toWei(compoundingAmount.rewardDebt, "ether");

    console.log({blockchain})
    if (blockchain.web3.currentProvider.accounts && blockchain.web3.currentProvider.accounts.length) {
      try {
        let gas = await blockchain.smartContract.methods
          .enterStaking(amount).estimateGas(tx)
        tx.gas = blockchain.web3.utils.toHex(gas)
      } catch (err) {
        return
      }
    }
    console.log("tx", tx)
    blockchain.MCSmartContractObj.methods
      .enterStaking(amount)
      .send(tx)
      .then((receipt) => {
        console.log(receipt);
        dispatch(fetchData(blockchain.account));
      }).catch(err => {
        console.log(err);
      });
  };

  const harvesting = async () => {
    let tx = {
      to: BUNNY_VAULT_ADDRESS,
      from: blockchain.account
    }
    if (blockchain.web3.currentProvider.accounts && blockchain.web3.currentProvider.accounts.length) {
      try {
        let gas = await blockchain.smartContract.methods
          .enterStaking(amount).estimateGas(tx)
        tx.gas = blockchain.web3.utils.toHex(gas)
      } catch (err) {
        return
      }
    }
    console.log("tx", tx)
    blockchain.BVSmartContractObj.methods
      .harvest()
      .send(tx)
      .then((receipt) => {
        console.log(receipt);
        dispatch(fetchData(blockchain.account));
      }).catch(err => {
        console.log(err);
      });
  };

  useEffect(()=>{
    if(blockchain.account) {
      rewardBalance();
      rewardBalanceManual();
    }
  }, [blockchain.account]);

  return (
    <>
      <s.Screen>
        {isCollectPortalBunnyVisible && <CollectPortal rewardDebt={rewardDebtManual} onClickConfirmForCompound={compoundingManual} onClickConfirmForHarvest={harvesting} onClose={()=>setIsCollectPortalBunnyVisible(false)} />}
        {isCollectPortalElaVisible && <CollectPortal onClose={()=>setIsCollectPortalElaVisible(false)} />}
        <s.Container
          flex={1}
          ai={"center"}
          style={{ padding: 24, backgroundColor: "var(--primary)" }}
          image={CONFIG.SHOW_BACKGROUND ? "/config/images/bg.png" : null}
        >
          <StyledLogo alt={"logo"} src={"/config/images/logo.png"} />
          <Link style={{textDecoration: "none", color: "white", cursor: "pointer", fontSize: 20, fontWeight: 600}} to="/">Home</Link>
          <s.SpacerSmall />
          <ResponsiveWrapper flex={1} style={{ padding: 24 }} test>
            <s.Container flex={1} jc={"center"} ai={"center"}>
              <StyledImg alt={"example"} src={"/config/images/example.gif"} />
            </s.Container>
            <s.SpacerLarge />
            <s.Container
              flex={4}
              jc={"center"}
              ai={"center"}
              style={{
                backgroundColor: "var(--accent)",
                padding: 24,
                display: "flex",
                flexWrap: "wrap",
                borderRadius: 24,
                boxShadow: "0px 5px 11px 2px rgba(0,0,0,0.7)"
              }}
            >
              <EarnEla
                isEnabling={isEnabling}
                rewardAmount={rewardAmount}
                depositAmount={depositAmount}
                rewardDebt={rewardDebt}
                tokenAmount={tokenAmountEla}
                setTokenAmount={setTokenAmountEla}
                onClickDeposit={stakeBunnyForEla}
                onClickWithdraw={unStakeBunnyForEla}
                onClickEnable={bunnyTokenBalanceOf}
                isEnableVisible={blockchain.isEnableVisible}
                // onClickCollect={()=>setIsCollectPortalBunnyVisible(true)}
              />
              <ManualBunny
                isEnabling={isEnabling}
                rewardAmount={rewardAmountManual}
                depositAmount={depositAmountManual}
                rewardDebt={rewardDebtManual}
                tokenAmount={tokenAmountManual}
                setTokenAmount={setTokenAmountManual}
                onClickDeposit={stakeBunnyForManual}
                onClickWithdraw={unStakeBunnyForManual}
                onClickEnable={bunnyTokenBalanceOf}
                isEnableVisible={blockchain.isEnableVisible}
                onClickCollect={()=>setIsCollectPortalBunnyVisible(true)}
              />
              <Card1 />
            </s.Container>
            <s.SpacerLarge />
            <s.Container flex={1} jc={"center"} ai={"center"}>
              <StyledImg
                alt={"example"}
                src={"/config/images/example.gif"}
                style={{ transform: "scaleX(-1)" }}
              />
            </s.Container>
          </ResponsiveWrapper>
          <s.SpacerMedium />
          <s.Container jc={"center"} ai={"center"} style={{ width: "70%" }}>
            <s.TextDescription
              style={{
                textAlign: "center",
                color: "var(--primary-text)"
              }}
            >
              Please make sure you are connected to the right network (
              {CONFIG.NETWORK.NAME} Mainnet) and the correct address. Please note:
              Once you make the purchase, you cannot undo this action.
            </s.TextDescription>
            <s.SpacerSmall />
            <s.TextDescription
              style={{
                textAlign: "center",
                color: "var(--primary-text)"
              }}
            >
            
            </s.TextDescription>
          </s.Container>
        </s.Container>
      </s.Screen>
    </>
  );
}

export default Stake;