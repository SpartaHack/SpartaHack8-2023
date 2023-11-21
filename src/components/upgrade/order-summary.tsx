import React from 'react'

type OrderSummaryProps = {
    price: number
}

const OrderSummary = ({price}: OrderSummaryProps) => {
  return (
    <div className="flex flex-col mt-6">
    <h1 className="font-bold text-lg">Order Summary</h1>
    <div className="flex-row font-bold justify-between flex mt-8">
        <span>YouLearn Pro</span>
        <span>${price * 12}</span>
    </div>
    <div className="text-neutral-400 flex-col flex space-y-[2px] text-sm mt-2">
        <span>${price} / month x 1 member</span>
        <span>Billed monthly</span>
    </div>
    <div className="border-t-[0.5px] my-3 text-primary"/>
    <div className="text-neutral-400 flex-col flex space-y-2 text-sm">
        <div className="flex-row flex justify-between">
            <span>Subtotal</span>
            <span className="dark:text-white font-bold text-black">${price * 12}</span>
        </div>
        <div className="flex-row flex justify-between">
            <span>Tax (if applicable)</span>
            <span className="dark:text-white font-bold text-black">-----</span>
        </div>
    </div>
    <div className="flex-row flex font-extrabold text-lg mt-5 justify-between">
        <span>Total for today</span>
        <span className="dark:text-white font-bold text-black">${price * 12}</span>
    </div>
  </div>
  )
}

export default OrderSummary