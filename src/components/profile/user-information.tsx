'use client'
import CustomAutocomplete from '@/helpers/custom-autocomplete';
import { ImageUpload } from '@/helpers/image-upload';
import React, { useState } from 'react'
import { educationOptions } from '../../../utils/constants';
import { CustomButton } from '@/helpers/custom-btn';

const UserInformation = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [educationLevel, setEducationLevel] = useState("");
  
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
        <h1 className='text-3xl'>
            Profile
        </h1>
        <div className='horizontal-line mt-3 mb-10'/>
        <div className='flex flex-row justify-between'>
            <div className='flex flex-row'>
                <ImageUpload src={selectedImage || ''} onChange={handleImageChange}/>
                <h1 className='text-xl mt-2 ml-4'>Name</h1>
                <div className='flex flex-col ml-10 lg:ml-[120px] md:ml-20'>
                    <h1 className='mt-2.5'>achyut.benz@gmail.com</h1>
                    <CustomAutocomplete
                        style='mt-2 mb-5 lg:mb-0'
                        size='sm'
                        datas={educationOptions}
                        isInvalid={ educationLevel === '' } 
                        label='Select education Level' 
                        onValueChange={setEducationLevel}
                    />
                </div>
            </div>
            <CustomButton title='Save Changes' btnType='button' btnStyling='hidden md:block mt-2'/>
        </div>
        <CustomButton title='Save Changes' btnType='button' btnStyling='mt-5 mb-5 w-full md:hidden'/>

    </div>
  )
}

export default UserInformation