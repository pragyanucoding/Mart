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
             <div className='p-2 flex justify-center items-center'></div>

                <div className='grid grid-cols-4 gap-1'>
                <div></div>
                <div className='w-[300px] border-[2px] border-black rounded-md p-2'>
                        <img className='w-[250px] h-[250px]' src={img1} alt=""/>
                        <div className='mt-3' >
                          <ContainedButtons/>
                        </div>
                      </div>
                    <div className='p-2 border-[2px] border-slate-950 rounded-lg'>
                        <BasicRating/>
                    </div>
             </div>

             
        </>
    }
    />
    </>
  )
}
