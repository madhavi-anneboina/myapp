import React from 'react';
import "./myStyles.css";


const StyleSheet = ({primary}) => {
    let className = primary ? "primary" : ""
  return (
    <div className={className}>
       <h1>StyleSheet</h1>
        </div>
  )
}

export default StyleSheet