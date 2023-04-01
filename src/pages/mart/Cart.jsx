import React from 'react'
import Nav from '../../components/Nav'
import MainCmp from '../../components/MainCmp'
import img1 from '../../db/img/16-20 ammonium phosphate.webp'
import BasicRating from '../../components/mart/mui_components/BasicRating'
import ContainedButtons from '../../components/mart/ContainedButtons'

export default function Cart() {
  return (
    <>
    <MainCmp
    comp={
        <>
             <div className='text-center'>Cart</div>
             <div className='w-full border-[2px] border-black rounded-md'>
                <div className='grid grid-cols-2 gap-2 p-2'>
                    <img className='w-[250px] h-[250px]' src={img1} alt=""/>
                    <div className='text-center flex justify-center items-center'>hello</div>
                </div>
                <div className='p-2'>
                    <BasicRating/>
                    <ContainedButtons/>

                </div>
             </div>
        </>
    }
    />
    </>
  )
}
