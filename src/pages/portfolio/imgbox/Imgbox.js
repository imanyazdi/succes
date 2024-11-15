import React, { useState } from 'react';
import { motion } from 'framer-motion';
import "./Imgbox.css";
export default function Imgbox({ img, filter }) {
  const [select,setSelect]=useState(null)

  let hello = img.filter((param) => !filter || param.state === filter);
  const handel = (id) => {
    if (select===id) {
      setSelect(null)
    }else{
      setSelect(id)
    }
  }
  return (
    <div className='imgboxs'>
      {hello.map((aaa) => (
        <motion.div
          key={aaa.id}
          className={`imgbox col-lg-4 col-md-6 ` }
          onClick={() => handel(aaa.id)}
          animate={{ opacity: 1, x: 0, y: 0 ,scale: select===aaa.id ? 1.15 :1}}
          transition={{ duration: 0.3, ease: "easeInOut", }}
        >
          <img src={aaa.src} alt="aaa" className={`${select=== aaa.id ? 'expanded' : ''}`} />
        </motion.div>
      ))}
    </div>
  );
}
