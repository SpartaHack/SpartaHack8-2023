import { CustomButton } from "@/helpers/custom-btn";
import {Tabs, Tab } from "@nextui-org/react";

const upgradeModal = (
    <div className="pb-6">
        <Tabs variant="light" color="primary" fullWidth className="rounded-xl dark:border-neutral-700 bg-absolute_white dark:bg-black">
            <Tab key="monthly" title="Monthly">
                <>
                    <h1 className='lg:text-md text-sm mt-5 lg:mt-7 font-semibold font-sans'>
                        Pro
                    </h1>
                    <h1 className='text-3xl my-2 font-bold font-sans'>
                    <>
                        $8
                        <span className='font-light lg:text-[18px] text-[15px]'> / month</span>
                    </>
                    </h1>
                    <h2 className='text-[15px] mb-5 lg:mb-8'>Everything in free plan, plus unlimited features.</h2>
                </>
            </Tab>
            <Tab key="yearly" title="Yearly 20% off">
                <>
                    <h1 className='lg:text-md text-sm mt-5 lg:mt-7 font-semibold font-sans'>
                        Pro
                    </h1>
                    <h1 className='text-3xl my-2 font-bold font-sans'>
                    <>
                        $10
                        <span className='font-light lg:text-[18px] text-[15px]'> / month</span>
                    </>
                    </h1>
                    <h2 className='text-[15px] mb-5 lg:mb-8'>Everything in free plan, plus unlimited features.</h2>
                </>   
            </Tab>
        </Tabs>
        <CustomButton title='Continue' btnStyling="bg-black dark:bg-white mt-5 lg:mb-0 mb-7 text-white dark:text-black dark:white font-semibold font-sans flex items-center justify-center rounded-xl w-full" btnType='button'/>
        <div className="border-t-[0.5px] text-primary"/>
    </div>
)

export default upgradeModal