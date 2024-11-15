import React, { useEffect, useState } from 'react'
import "./Child.css";
export default function Child({ data }) {
    const [numbers, setnumbers] = useState(data.map(() => 1));
    useEffect(() => {
       const interval=data.map((item,index)=>
        setInterval(() => {
            setnumbers(prev=>{
                const update=[...prev]
                if (update[index]<item.number) {
                    update[index]++
                }
                return update;
            })
        }, 7)
    )
    return()=>interval.forEach(clearInterval);
    }, [data])
    return (
        data.map((num, index) => (
            <div key={index} className='childbox col-lg-2 col-md-5'>
                <i className={`${num.icon}`}></i>
                <h2>{numbers[index]}</h2>
                <p>{num.exprient}</p>
            </div>
        ))
    )
}
