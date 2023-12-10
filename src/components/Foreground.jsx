// import React from 'react'
import { useRef } from "react";
import Card from "./Card"

const Foreground = () => {
    const ref = useRef(null);
    const data = [
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            fileSize: ".9mb",
            close: false,
            tag: {
                isOpen: false,
                tagTitle: "Download Now",
                tagColor: "green"
            },
        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            fileSize: ".9mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "green"
            },
        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            fileSize: ".9mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "blue"
            },
        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            fileSize: ".9mb",
            close: false,
            tag: {
                isOpen: false,
                tagTitle: "Download Now",
                tagColor: "green"
            },
        },
    ];
  return (
    <div ref={ref} className='fixed z-[3] top-0 left-0 w-full h-full flex gap-5 flex-wrap p-10'>
        {/* <Card /> */}
        {data.map((item, index)=>(
            <Card data={item} reference={ref}/>
        ))}


      </div>
  )
}

export default Foreground