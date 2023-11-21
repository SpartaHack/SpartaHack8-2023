import { TabContentProps } from "../../../types";

export const TabContent = ({ price }: TabContentProps) => (
<>
    <h1 className='lg:text-md text-sm mt-5 lg:mt-7 font-semibold font-sans'>
    Pro
    </h1>
    <h1 className='text-3xl my-2 font-bold font-sans'>
    <>
        {price}
        <span className='font-light lg:text-[18px] text-[15px]'> / month</span>
    </>
    </h1>
    <h2 className='text-[15px] mb-5 lg:mb-8'>Everything in free plan, plus unlimited features.</h2>
</>
);