import "./Decrypt.css";
import React,{useState} from "react";

const Decrypt = () => {
  const[decrpt,setDecrpt]= useState('');

  function changeHandler(event){
      setDecrpt(event.target.value);
  }
  function clickHandler(){

    let arr= decrpt.split(" ");
    for(let i=0;i<arr.length;i++){
      if(arr[i].length>3){
        arr[i]=arr[i][arr[i].length-4]+arr[i].slice(0,arr[i].length-4);
      }
      else{
        arr[i]=arr[i][0];
      }
    }
    arr=arr.join(" ");
    console.log(arr);
    let ele= document.querySelector('.cr');
    ele.classList.add("created");
    ele.textContent=`${arr}`;


  }
  function submitHandler(event){
    event.preventDefault();
    setDecrpt('');
  }
  return (
    <>
      <div className="Decrypt">
        <div className="clr1"></div>
        <div className="clr2"></div>
        <div className="contd">
          <div className="logod">
            <img src="logo.png" alt="logo" />
          </div>
          <div className="containerd">
            <div className="topd">
              Welcome to <span>SecureCrypt</span>,
            </div>
            <div className="bottomd">
              Protect your text messages with our advanced encryption and
              decryption solutions.
            </div>
          </div>
        </div>
        <form onSubmit={submitHandler} className="btnsd">
          <textarea value={decrpt} onChange={changeHandler} className="encd" placeholder="Write the text you want to Decrypt."></textarea>
          <button onClick={clickHandler} className="decd">Decrypt</button>
          <div className="cr"></div>
        </form>
      </div>
    </>
  );
};

export default Decrypt;
