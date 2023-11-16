'use client'
import { ImageUpload } from '@/helpers/image-upload';
import React, { useState } from 'react'
import { getPortalUrl } from '@/functions/get-portal-url';
import { useRouter } from 'next/navigation';
import { Link } from '@nextui-org/react';
import EditAccordion from '@/components/profile/edit-accordion';

const UserInformation = () => {
  const router = useRouter()
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleEditPlan = async () => {
    const portalUrl = await getPortalUrl();
    console.log(portalUrl)
    router.push(portalUrl)
  }
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        if(e.target?.result){
          setSelectedImage(e.target.result as string);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  return (
    <div className='md:ml-10 md:mt-6 md:mr-10 lg:ml-20 lg:mt-12 lg:mr-20 ml-5 mr-5 mt-5'>
      <div className='flex flex-col lg:flex-row'>
        <div className='flex flex-col justify-between border rounded-[10px] px-3 pt-5 pb-1 lg:w-[40%]'>
          <div className='flex flex-row ml-2 mr-2'>
            <ImageUpload onChange={handleImageChange} src={selectedImage || ''}/>
            <div className='flex flex-col ml-4'>
              <h1 className='text-xl'>Achyut</h1>
              <h2 className='text-sm mt-2'>Joined December 31, 2023</h2>
            </div>
          </div>
          <EditAccordion title={<h1 className='text-center text-[15px] p-2 rounded-[10px] bg-white dark:bg-black'>Edit Profile</h1>}/>
        </div>
        <div className='flex flex-col justify-between border rounded-[10px] p-5 w-full h-[200px] mt-5 lg:mt-0 lg:ml-5'>
          hi
        </div>
      </div>
      <Link onClick={handleEditPlan} size='sm' className='cursor-pointer mt-4 ml-1' underline="always">Manage Subscriptions</Link>
    </div>
  )
}

export default UserInformation