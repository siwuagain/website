import React, { useEffect, useState } from 'react';
import styles from './animation.module.css'; // Import your CSS file
import '../../assets/fonts.css'
const Animation = () => {

  return (
    <div classname={`${styles.animation_container}`} id="SW">
      <div className={`${styles.gif}`}></div>
      <div className={`${styles.customText} ${"text-8xl"} ${"text-center"} ${"text-gray-300"} ${styles.fade_in}` } style={{ fontFamily: 'pixel', fontWeight: 'bold'}}>
        Simon Wu
        <div className='text-4xl'>
          Computer Science at McGill University
        </div>
      </div>
    </div>
  )
};

export default Animation;
