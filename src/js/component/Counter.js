import React from 'react'

const Counter = () => {
 
  return (
    <div className="bg-dark d-flex flex-row justify-content-around align-items-center p-5 ms-5 me-5 mt-5"style={{minHeight:"300px"}}>

      <div className="clock d-flex justify-content-center align-items-center flex-fill fs-1 fw-bold m-2" 
      style={{color:"white", minHeight:"280px", minWidth:"100px", backgroundColor:"#474747",borderRadius:"5%"}}>
      <i className="far fa-clock"></i>
      </div>
      <div className="four d-flex justify-content-center align-items-center flex-fill fs-1 fw-bold m-2" 
      style={{color:"white",minWidth:"100px", minHeight: "280px", backgroundColor:"#474747", borderRadius:"5%"}}> Four</div>
      <div className="three d-flex justify-content-center align-items-center flex-fill fs-1 fw-bold m-2" 
      style={{color:"white",minWidth:"100px", minHeight: "280px", backgroundColor:"#474747",borderRadius:"5%"}}> Three </div>
      <div className="two d-flex justify-content-center align-items-center flex-fill fs-1 fw-bold m-2" 
      style={{color:"white", minWidth:"100px", minHeight: "280px", backgroundColor:"#474747",borderRadius:"5%"}}> Two</div>
      <div className="one d-flex justify-content-center align-items-center flex-fill fs-1 fw-bold m-2" 
      style={{color:"white",minWidth:"100px", minHeight: "280px", backgroundColor:"#474747",borderRadius:"5%"}}>One</div>

    </div>
  );
}

export default Counter