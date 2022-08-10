import React, {useState} from 'react';

const CollectPortal = (props) => {

  const [tab, setTab] = useState("compound");

  const handleOnClickConfirm = () => {
    if(tab==="compound") {
      props.onClickConfirmForCompound();
    } else {
      props.onClickConfirmForHarvest();
    }
  }

  return (
    <div style={{position: "absolute", top: 0, bottom: 0, left: 0, right: 0, display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(0, 0, 0, 0.3)"}}>
      <div style={{width: 400, backgroundColor: "rgb(14, 23, 48)", borderRadius: 24, padding: 24}}>
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
          <span style={{color: "white", fontSize: 18, fontWeight: 600}}>BUNNY Collect</span>
          <svg onClick={props.onClose} viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" style={{alignSelf: "center", cursor: "pointer", fill: "rgb(242, 92, 35)", flexShrink: 0}}>
            <path d="M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z"></path>
          </svg>
        </div>
        <div style={{padding: "30px 0px"}}>
          <div style={{display: "flex", justifyContent: "center"}}>
            <div onClick={()=>setTab("compound")} style={{borderTopLeftRadius: "20px", cursor: "pointer", borderBottomLeftRadius: "20px", backgroundColor: tab==="compound" ? "white" : "gray",  padding: "10px 15px"}}>
              <span style={{fontSize: 18, fontWeight: 600, color: tab==="compound" ? "gray" : "white"}}>Compound</span>
            </div>
            <div onClick={()=>setTab("harvest")} style={{borderTopRightRadius: "20px", cursor: "pointer", borderBottomRightRadius: "20px", backgroundColor: tab==="harvest" ? "white" : "gray",  padding: "10px 15px"}}>
              <span style={{fontSize: 18, fontWeight: 600, color: tab==="harvest" ? "gray" : "white"}}>Harvest</span>
            </div>
          </div>
          <div style={{display: "flex", justifyContent: "space-between", margin: "30px 0px", alignItems: "center"}}>
            <span style={{color: "white", fontSeize: 16, fontWeight: 600}}>{tab==="compound" ? "Compounding" : "Harvesting"}:</span>
            <div>
              <span style={{color: "white", fontSize: 19, fontWeight: 600}}>{props.rewardDebt} BUNNY</span><br />
              <span style={{color: "rgb(173, 182, 210)", fontSeize: 16}}>-0.00 USD</span>
            </div>
          </div>
          <button onClick={handleOnClickConfirm} style={{height: 48, marginTop: 5, display: "flex", justifyContent: "center", alignItems: "center", width: "100%", borderRadius: 16, padding: "0px 24px", backgroundColor: "rgb(241, 163, 91)", cursor: "pointer", outline: "none", border: "none"}}>
            <span style={{fontSize: 20, fontWeight: 400, color: "white"}}>Confirm</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CollectPortal;