import React, { useEffect, useState } from 'react';
import styles from './animation.module.css'; // Import your CSS file

const Animation = () => {
  

  return (
    <div classname={`${styles.animation_container}`}>
      <div className={`${styles.gif}`}></div>
      <div className={`${styles.customText} ${"text-8xl"} ${"text-center"} ${"text-gray-300"} ${styles.fade_in}` } style={{ fontWeight: 'bold'}}>
        Simon Wu
      </div>
    </div>
  )
 
  
};

export default Animation;
