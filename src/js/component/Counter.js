import propTypes from 'prop-types';
import React from 'react'

const Counter = (props) => {
 
  return (
    <div className="bg-dark d-flex flex-row justify-content-around align-items-center p-5 ms-5 me-5 mt-5"style={{minHeight:"300px"}}>

      <div className="clock d-flex justify-content-center align-items-center flex-fill fs-1 fw-bold m-2" 
      style={{color:"white", minHeight:"280px", minWidth:"100px", backgroundColor:"#474747",borderRadius:"5%"}}>
      <i className="far fa-clock"></i>
      </div>
      <div className="six d-flex justify-content-center align-items-center flex-fill fs-1 fw-bold m-2" 
      style={{color:"white",minWidth:"80px", minHeight: "280px", backgroundColor:"#474747", borderRadius:"5%"}}>{props.digitSix % 10}</div>
      <div className="five d-flex justify-content-center align-items-center flex-fill fs-1 fw-bold m-2" 
      style={{color:"white",minWidth:"80px", minHeight: "280px", backgroundColor:"#474747", borderRadius:"5%"}}> {props.digitFive % 10}</div>
      <div className="four d-flex justify-content-center align-items-center flex-fill fs-1 fw-bold m-2" 
      style={{color:"white",minWidth:"80px", minHeight: "280px", backgroundColor:"#474747", borderRadius:"5%"}}>{props.digitFour % 10}</div>
      <div className="three d-flex justify-content-center align-items-center flex-fill fs-1 fw-bold m-2" 
      style={{color:"white",minWidth:"80px", minHeight: "280px", backgroundColor:"#474747",borderRadius:"5%"}}>{props.digitThree % 10} </div>
      <div className="two d-flex justify-content-center align-items-center flex-fill fs-1 fw-bold m-2" 
      style={{color:"white", minWidth:"80px", minHeight: "280px", backgroundColor:"#474747",borderRadius:"5%"}}>{props.digitTwo % 10}</div>
      <div className="one d-flex justify-content-center align-items-center flex-fill fs-1 fw-bold m-2" 
      style={{color:"white",minWidth:"80px", minHeight: "280px", backgroundColor:"#474747",borderRadius:"5%"}}>{props.digitOne % 10}</div>

    </div>
  );}
  
  Counter.propTypes ={
    digitSix: propTypes.number,
    digitFive:propTypes.number,
    digitFour:propTypes.number,
    digitThree:propTypes.number,
    digitTwo:propTypes.number,
    digitOne:propTypes.number

  };


export default Counter