import React from 'react'
import { PROMONTHLYPRICE, PROYEARLYPRICE } from '../../../utils/constants'

type OrderSummaryProps = {
    type: string
}

const OrderSummary = ({type}: OrderSummaryProps) => {
  const price = type === "monthly" ? PROMONTHLYPRICE : PROYEARLYPRICE
  return (
    <div className="flex flex-col mt-2 md:ml-5 md:w-3/5">
    <h1 className="font-semibold text-lg font-sans">Order Summary</h1>
    <div className="flex-row font-semibold justify-between flex mt-6">
        <span className='font-sans'>YouLearn Pro</span>
        <span>${type === 'monthly' ? price : price*12}</span>
    </div>
    <div className="text-neutral-400 flex-col flex space-y-1 text-sm mt-2">
        <span>{`$${price} / month x 1 member`}</span>
        <span>{`Billed ${type === 'yearly' ? 'annually' : type}`}</span>
    </div>  
    <div className="border-t-[0.5px] my-2 text-primary"/>
    <div className="text-neutral-400 flex-col flex space-y-1 text-sm">
        <div className="flex-row flex justify-between">
            <span>Subtotal</span>
            <span className="dark:text-white font-bold text-black">${type === 'monthly' ? price : price*12}</span>
        </div>
        <div className="flex-row flex justify-between">
            <span>Tax (if applicable)</span>
            <span className="dark:text-white font-bold text-black">- -</span>
        </div>
    </div>
    <div className="flex-row flex font-semibold text-lg mt-5 justify-between">
        <span className='font-sans'>Total for today</span>
        <span className="dark:text-white font-semibold text-black">${type === 'monthly' ? price : price*12}</span>
    </div>
  </div>
  )
}

export default OrderSummary