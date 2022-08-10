import React from 'react';

const data = [
  ["1d", 0.27, 0.78],
  ["1d", 0.27, 0.78],
  ["1d", 0.27, 0.78],
  ["1d", 0.27, 0.78],
  ["1d", 0.27, 0.78],
]

const ROIPortal = (props) => {
  return (
    <div style={{position: "absolute", top: 0, bottom: 0, left: 0, right: 0, display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(0, 0, 0, 0.3)"}}>
      <div style={{width: 400, backgroundColor: "rgb(14, 23, 48)", borderRadius: 24, padding: 24}}>
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
          <span style={{color: "white", fontSize: 18, fontWeight: 600}}>ROI</span>
          <svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" style={{alignSelf: "center", cursor: "pointer", fill: "rgb(242, 92, 35)", flexShrink: 0}}>
            <path d="M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z"></path>
          </svg>
        </div>
        <div style={{padding: "30px 0px"}}>
          <div style={{display: "flex"}}>
            <div style={{flexGrow: 1}}><span style={{color: "rgb(173, 182, 210)", fontSeize: 16}}>TIMEFRAME</span></div>
            <div style={{flexGrow: 1}}><span style={{color: "rgb(173, 182, 210)", fontSeize: 16}}>ROI</span></div>
            <div><span style={{color: "rgb(173, 182, 210)", fontSeize: 16}}>ELA PER $1,000</span></div>
          </div>
          <div style={{padding: "15px 0px"}}>
            {
              data.map((d)=>(
                <div style={{display: "flex", padding: "3px 0px"}}>
                  <div style={{flexGrow: 1}}><span style={{color: "white", fontSeize: 16, fontWeight: 600}}>{d[0]}</span></div>
                  <div style={{flexGrow: 1}}><span style={{color: "white", fontSeize: 16, fontWeight: 600}}>{d[1]}%</span></div>
                  <div><span style={{color: "white", fontSeize: 16, fontWeight: 600}}>{d[2]}</span></div>
                </div>
              ))
            }
          </div>
          <div style={{padding: "0px 30px"}}>
            <ul style={{listStyleType: "disc"}}>
              <li style={{color: "rgb(173, 182, 210)", fontSeize: 16, marginBottom: 4}}>Calculated based on current rates.</li>
              <li style={{color: "rgb(173, 182, 210)", fontSeize: 16, marginBottom: 4}}>Compounding 1x daily.</li>
              <li style={{color: "rgb(173, 182, 210)", fontSeize: 16}}>All figures are estimates provided for your convenience only, and by no means represent guaranteed returns.</li>
            </ul>
          </div>
        </div>
        <div style={{display: "flex", justifyContent: "center"}}>
          <a target={"_blank"} href="https://google.com" style={{display: "flex", cursor: "pointer", alignItems: "center", textDecorationColor: "rgb(242, 92, 35)"}}>
            <span style={{fontSize: 17, cursor: "pointer", color: "rgb(242, 92, 35)", fontWeight: 600}}>Get BUNNY</span>
            <svg viewBox="0 0 27 27" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" style={{alignSelf: "center", fill: "rgb(242, 92, 35)", flexShrink: 0, marginLeft: 3}}>
              <path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ROIPortal;