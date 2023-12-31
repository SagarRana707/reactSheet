import React ,{Fragment}from "react";
import './modal.css';
import  ReactDOM  from "react-dom";

const BackDrop = (props) => {
    return <div className="backdrop" onClick={props.onClose}></div>;
}
const ModalOverlay = (props) => {
  return <div className="modal">
<div className="content">{props.children}</div>
  </div>;
};
const Modal = (props) => {
 
 return (
   <Fragment>
     {ReactDOM.createPortal(
       <BackDrop onClose={props.onClose} />,
       document.getElementById("overlays")
     )}
     {ReactDOM.createPortal(
       <ModalOverlay onClose={props.onClose}>{props.children}</ModalOverlay>,
       document.getElementById("overlays")
     )}
   </Fragment>
 );
}
export default Modal;