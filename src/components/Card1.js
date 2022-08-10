import React from 'react';

const data = [
  ["My Boost Level", "0 (0.00%)"],
  ["My Boost Level", "0 (0.00%)"],
  ["My Boost Level", "0 (0.00%)"]
]

const Card = (props) => {
  return (
    <div style={{width: 350}}>
      <div style={{backgroundColor: "rgb(23, 53, 96)", borderTopRightRadius: 24, borderTopLeftRadius: 24, padding: 24}}>
        <div>
          <span style={{fontSize: 24, fontWeight: 600, color: "rgb(242, 92, 35)"}}>Boost Staking</span><br/>
          <span style={{fontSize: 18, color: "rgb(173, 182, 210)"}}>Stake BUNNY</span>
        </div>
      </div>
      <div style={{padding: "24px 0px", backgroundColor: "rgb(14, 23, 48)", borderBottomRightRadius: 24, borderBottomLeftRadius: 24}}>
        <div style={{display: "flex", justifyContent: "center"}}>
          <span style={{color: "rgb(244, 238, 255)", fontSize: 20, fontWeight: 600}}>My Bunnyz (0 of 0)</span>
        </div>
        <div style={{display: "flex", justifyContent: "center", margin: "10px 0px"}}>
          <span style={{color: "rgb(244, 238, 255)", fontSize: 25, fontWeight: 600}}>Coming soon...</span>
        </div>
        {/* <div style={{display: "flex", padding: "30px 18px", alignItems: "center", justifyContent: "space-between"}}>
          <img style={{borderRadius: 10, height: 60, width: 60}} src={"https://ipfs0.trinity-feeds.app/ipfs/QmR7RxxTjETkD7QhfJpt1XMukR7uaRLV49PppwSEGqrJmr"} />
          <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
            <span style={{color: "white", fontSize: 16, fontWeight: 400}}>No Phantz?</span>
            <a target={"_blank"} href="https://google.com" style={{display: "flex", cursor: "pointer", alignItems: "center", textDecorationColor: "rgb(242, 92, 35)"}}>
              <span style={{fontSize: 16, margin: "4px 0px", cursor: "pointer", color: "rgb(242, 92, 35)", fontWeight: 400}}>Feeds Marketplace</span>
              <svg viewBox="0 0 28 28" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" style={{alignSelf: "center", fill: "rgb(242, 92, 35)", flexShrink: 0, marginLeft: 3}}>
                <path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"></path>
              </svg>
            </a>
            <a target={"_blank"} href="https://google.com" style={{display: "flex", cursor: "pointer", alignItems: "center", textDecorationColor: "rgb(242, 92, 35)"}}>
              <span style={{fontSize: 16, cursor: "pointer", color: "rgb(242, 92, 35)", fontWeight: 400}}>phantzclub.com</span>
              <svg viewBox="0 0 28 28" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" style={{alignSelf: "center", fill: "rgb(242, 92, 35)", flexShrink: 0, marginLeft: 3}}>
                <path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"></path>
              </svg>
            </a>
          </div>
          <img style={{borderRadius: 10, height: 60, width: 60}} src={"https://ipfs0.trinity-feeds.app/ipfs/QmR7RxxTjETkD7QhfJpt1XMukR7uaRLV49PppwSEGqrJmr"} />
        </div> */}
        <div style={{padding: "0px 24px"}}>
          {
            data.map((d)=>(
              <div style={{display: "flex", marginBottom: 5, justifyContent: "space-between"}}>
                <span style={{color: "rgb(244, 238, 255)", textDecoration: "underline dotted rgb(173, 182, 210)", fontSize: 18, fontWeight: 600}}>{d[0]}</span>
                <span style={{color: "rgb(244, 238, 255)", fontSize: 18, fontWeight: 600}}>{d[1]}</span>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Card;