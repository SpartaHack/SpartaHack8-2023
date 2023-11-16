'use client'
import { CustomButton } from '@/helpers/custom-btn';
import React from 'react';
import { useRouter } from 'next/navigation';
import { getPortalUrl } from '@/functions/get-portal-url';

const UserBilling = () => {
  const router = useRouter();

  const handleEditPlan = async () => {
    const portalUrl = await getPortalUrl();
    console.log(portalUrl)
    router.push(portalUrl)
  }

  return (
    <div className='md:ml-10 md:mt-6 md:mr-10 lg:ml-20 lg:mt-12 lg:mr-20 ml-5 mr-5 mt-5'>
      <h1 className='text-3xl'>
          Billing & Payments
      </h1>
      <div className='horizontal-line mt-3 mb-10'/>
      <div className='flex flex-col'>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-row'>
            <h1 className='text-xl mt-2 ml-4'>Subscription Plan</h1>
            <div className='flex flex-col ml-10 lg:ml-[70px] md:ml-20'>
              <h2 className='mt-2.5'>Pro Plan - $10 a month</h2>
              <h2 className='mt-2.5 text-sm'>Plan ends December 10, 2023</h2>
            </div>
          </div>
          <CustomButton title='Edit Plan' btnType='button' btnStyling='hidden md:block mt-2' clickEvent={handleEditPlan}/>
        </div>
        <div className='flex mt-8 flex-row justify-between'>
          <div className='flex flex-row'>
            <h1 className='text-xl mt-2 ml-4'>Payment & Billing</h1>
            <div className='flex flex-col lg:flex-row'>
              <div className='flex flex-col ml-10 lg:ml-[70px] md:ml-20'>
                <h2 className='mt-2.5'>Payment Information</h2>
                <h2 className='mt-2.5 text-sm'>42424242424242</h2>
              </div>
              <div className='flex flex-col mt-3 lg:mt-0 ml-10 lg:ml-[70px] md:ml-20'>
                <h2 className='mt-2.5'>Billing Information</h2>
                <h2 className='mt-2.5 text-sm'>123 Street<br/>Seoul, Bangalore</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CustomButton title='Edit Plan' btnType='button' btnStyling='w-full w-full md:hidden mt-6' clickEvent={handleEditPlan}/>
    </div>
  )
}

export default UserBilling