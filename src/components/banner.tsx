'use client'
import React from 'react';
import pekoface from "../../public/img/pekoface.png";

import Image from 'next/image';

export default function banner() {
    return (
        <div className='h-[80px] bg-white fixed flex flex-row justify-between space-x-4 w-full z-[99] items-center p-5'>
                <div>
                <Image src={pekoface} alt="peko" width={50} height={50} />
                </div>
                <div className="flex space-x-4">
                    <span>x</span>
                <span>y</span>
                <span>z</span>
                <span>a</span>
                <span>b</span>
                </div> 
        </div>
    );
}
