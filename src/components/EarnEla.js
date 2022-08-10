import React, { useState } from 'react';
import DP from "..//assets/bunny.jpeg";

const EarnEla = (props) => {

  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  return (
    <div style={{width: 350, marginBottom: 50}}>
      <div style={{backgroundColor: "rgb(23, 53, 96)", borderTopRightRadius: 24, borderTopLeftRadius: 24, display: "flex", justifyContent: "space-between", padding: 24}}>
        <div>
          <span style={{fontSize: 24, fontWeight: 600, color: "rgb(242, 92, 35)"}}>Earn ELA</span><br/>
          <span style={{fontSize: 18, color: "rgb(173, 182, 210)"}}>Stake BUNNY</span>
        </div>
        <img style={{width: 50, height: 50, borderRadius: "100%"}} src={DP} />
      </div>
      <div style={{padding: 24, backgroundColor: "rgb(14, 23, 48)", borderBottomRightRadius: 24, borderBottomLeftRadius: 24}}>
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <span style={{color: "rgb(244, 238, 255)", fontSize: 20, fontWeight: 400}}>APR:</span>
          <div style={{display: "flex", alignItems: "center"}}>
            <span style={{color: "rgb(244, 238, 255)", fontSize: 20, fontWeight: 400, marginRight: 3}}>97.58%</span>
            <svg viewBox="0 0 24 24" color="textSubtle" width="18px" xmlns="http://www.w3.org/2000/svg" style={{alignSelf: "center", cursor: "pointer", fill: "rgb(173, 182, 210)", flexShrink: 0}} class="sc-bdvvtL iwpLfS">
              <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z"></path><path d="M11.25 7.72H6.25V9.22H11.25V7.72Z"></path><path d="M18 15.75H13V17.25H18V15.75Z"></path><path d="M18 13.25H13V14.75H18V13.25Z"></path><path d="M8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18Z"></path><path d="M14.09 10.95L15.5 9.54L16.91 10.95L17.97 9.89L16.56 8.47L17.97 7.06L16.91 6L15.5 7.41L14.09 6L13.03 7.06L14.44 8.47L13.03 9.89L14.09 10.95Z"></path>
            </svg>
          </div>
        </div>
        <div style={{display: "flex", margin: "24px 0px", justifyContent: "space-between"}}>
          <div>
            <span style={{fontSize: 15, fontWeight: 600}}><span style={{color: "rgb(242, 92, 35)"}}>ELA</span> <span style={{color: "rgb(173, 182, 210)"}}>EARNED</span></span><br/>
            <span style={{color: "rgb(96, 100, 113)", fontSize: 20, fontWeight: 600}}>{props.rewardDebt}</span><br/>
            {/* <span style={{color: "rgb(96, 100, 113)", fontSize: 16, fontWeight: 600}}>0 USD</span> */}
          </div>
          <button disabled={parseFloat(props.rewardAmount)===0} onClick={props.onClickCollect} style={{height: 48, display: "flex", justifyContent: "center", alignItems: "center", borderRadius: 16, padding: "0px 24px", backgroundColor: parseFloat(props.rewardAmount)===0 ? "rgb(36, 44, 66)" : "rgb(242, 92, 35)", cursor: "pointer", outline: "none", border: "none"}}>
            <span style={{fontSize: 20, color: "rgb(96, 100, 113)"}}>Collect</span>
          </button>
        </div>
        <div style={{display: "flex", margin: "24px 0px", justifyContent: "space-between"}}>
          <div>
            <span style={{fontSize: 15, fontWeight: 600}}><span style={{color: "rgb(242, 92, 35)"}}>BUNNY</span> <span style={{color: "rgb(173, 182, 210)"}}>Staked</span></span><br/>
            <span style={{color: "rgb(96, 100, 113)", fontSize: 20, fontWeight: 600}}>{props.rewardAmount}</span><br/>
            {/* <span style={{color: "rgb(96, 100, 113)", fontSize: 16, fontWeight: 600}}>0 USD</span> */}
          </div>
          {/* <button onClick={props.onClickCollect} style={{height: 48, display: "flex", justifyContent: "center", alignItems: "center", borderRadius: 16, padding: "0px 24px", backgroundColor: "rgb(36, 44, 66)", cursor: "pointer", outline: "none", border: "none"}}>
            <span style={{fontSize: 20, color: "rgb(96, 100, 113)"}}>Collect</span>
          </button> */}
        </div>
        {
          true
            ?
              <div style={{display: "flex", justifyContent: "space-between"}}>
                <div onClick={props.onClickDeposit} style={{height: 28, cursor: "pointer", display: "flex", alignItems: "center", padding: "0px 8px", borderRadius: 16, border: "2px solid rgb(242, 92, 35)"}}>
                  <span style={{fontSize: 15, color: "rgb(242, 92, 35)", fontWeight: 400}}>Deposit</span>
                </div>
                <input style={{borderRadius: 30, width: 130, textAlign: "center", outline: "none", borderWidth: 0}} value={props.tokenAmount} onChange={(e)=>props.setTokenAmount(e.target.value)} />
                <div onClick={props.onClickWithdraw} style={{height: 28, cursor: "pointer", display: "flex", alignItems: "center", padding: "0px 8px", borderRadius: 16, border: "2px solid rgb(242, 92, 35)"}}>
                  <span style={{fontSize: 15, color: "rgb(242, 92, 35)", fontWeight: 400}}>Withdraw</span>
                </div>
              </div>
            :
              <div>
                <span style={{fontSize: 15, fontWeight: 600}}>
                  <span style={{color: "rgb(173, 182, 210)"}}>STAKE</span> <span style={{color: "rgb(242, 92, 35)"}}>GLIDE</span>
                </span>
                <button disabled={props.isEnabling} onClick={()=>props.onClickEnable("ELA")} style={{height: 48, marginTop: 5, display: "flex", justifyContent: "center", alignItems: "center", width: "100%", borderRadius: 16, padding: "0px 24px", backgroundColor: "rgb(242, 92, 35)", cursor: "pointer", outline: "none", border: "none"}}>
                  <span style={{fontSize: 20, fontWeight: 400, color: "white"}}>{props.isEnabling==="ELA" ? "Loading..." : "Enable"}</span>
                </button>
              </div>
        }
        <div style={{display: "flex", alignItems: "center", margin: "40px 0px 10px 0px", justifyContent: "space-between"}}>
          <div style={{height: 28, display: "flex", alignItems: "center", padding: "0px 8px", borderRadius: 16, border: "2px solid rgb(242, 92, 35)"}}>
            <svg viewBox="0 0 24 24" width="18px" color="secondary" xmlns="http://www.w3.org/2000/svg" style={{alignSelf: "center", cursor: "pointer", fill: "rgb(242, 92, 35)", flexShrink: 0, marginRight: 2}}>
              <path d="M17.65 6.35C16.02 4.72 13.71 3.78 11.17 4.04C7.50002 4.41 4.48002 7.39 4.07002 11.06C3.52002 15.91 7.27002 20 12 20C15.19 20 17.93 18.13 19.21 15.44C19.53 14.77 19.05 14 18.31 14C17.94 14 17.59 14.2 17.43 14.53C16.3 16.96 13.59 18.5 10.63 17.84C8.41002 17.35 6.62002 15.54 6.15002 13.32C5.31002 9.44 8.26002 6 12 6C13.66 6 15.14 6.69 16.22 7.78L14.71 9.29C14.08 9.92 14.52 11 15.41 11H19C19.55 11 20 10.55 20 10V6.41C20 5.52 18.92 5.07 18.29 5.7L17.65 6.35Z"></path>
            </svg>
            <span style={{fontSize: 15, color: "rgb(242, 92, 35)", fontWeight: 400}}>Manual</span>
          </div>
          <div onClick={()=>setIsDetailsVisible(!isDetailsVisible)} style={{display: "flex", alignItems: "center", cursor: "pointer"}}>
            <span style={{fontSize: 17, color: "rgb(242, 92, 35)", fontWeight: 600}}>{isDetailsVisible ? "Hide" : "Details"}</span>
            {
              isDetailsVisible
                ?
                  <svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" style={{alignSelf: "center", fill: "rgb(242, 92, 35)", flexShrink: 0, marginLeft: 6}}>
                    <path d="M8.11997 14.7101L12 10.8301L15.88 14.7101C16.27 15.1001 16.9 15.1001 17.29 14.7101C17.68 14.3201 17.68 13.6901 17.29 13.3001L12.7 8.7101C12.31 8.3201 11.68 8.3201 11.29 8.7101L6.69997 13.3001C6.30997 13.6901 6.30997 14.3201 6.69997 14.7101C7.08997 15.0901 7.72997 15.1001 8.11997 14.7101Z"></path>
                  </svg>
                :
                  <svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" style={{alignSelf: "center", fill: "rgb(242, 92, 35)", flexShrink: 0, marginLeft: 6}}>
                    <path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"></path>
                  </svg>

            }
          </div>
        </div>
        {
          isDetailsVisible
            &&
              <div style={{display: "flex", padding: "10px 0px", justifyContent: "space-between"}}>
                <span style={{color: "white", fontSize: 16, fontWeight: 400}}>Total stacked:</span>
                <div style={{display: "flex", flexDirection: "column", alignItems: "flex-end"}}>
                  <span style={{color: "white", fontSize: 16, fontWeight: 400}}>{props.depositAmount} BUNNY</span>
                  <a target={"_blank"} href="https://google.com" style={{display: "flex", cursor: "pointer", alignItems: "center", textDecorationColor: "rgb(242, 92, 35)"}}>
                    <span style={{fontSize: 16, margin: "4px 0px", cursor: "pointer", color: "rgb(242, 92, 35)", fontWeight: 400}}>View Project Site</span>
                    <svg viewBox="0 0 28 28" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" style={{alignSelf: "center", fill: "rgb(242, 92, 35)", flexShrink: 0, marginLeft: 3}}>
                      <path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"></path>
                    </svg>
                  </a>
                  <a target={"_blank"} href="https://google.com" style={{display: "flex", cursor: "pointer", alignItems: "center", textDecorationColor: "rgb(242, 92, 35)"}}>
                    <span style={{fontSize: 16, cursor: "pointer", color: "rgb(242, 92, 35)", fontWeight: 400}}>View Contract</span>
                    <svg viewBox="0 0 28 28" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" style={{alignSelf: "center", fill: "rgb(242, 92, 35)", flexShrink: 0, marginLeft: 3}}>
                      <path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"></path>
                    </svg>
                  </a>
                </div>
              </div>
        }
      </div>
    </div>
  )
}

export default EarnEla;