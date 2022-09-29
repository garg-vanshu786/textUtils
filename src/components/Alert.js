import React from 'react'

export default function Alert(props) {

  const capitalize = (word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
    
    
   ( props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
   {/* <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Info:"><use xlink:href="#info-fill"/></svg> */}
    <strong> {(props.alert.type)}</strong>:  {props.alert.msg}
   
  {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
  </div>)
  

  )
}
