'use client'
import CustomAutocomplete from '@/helpers/custom-autocomplete';
import { ImageUpload } from '@/helpers/image-upload';
import React, { useState } from 'react'
import { educationOptions } from '../../../utils/constants';

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
    <div className='lg:ml-20 lg:mt-12 lg:mr-20 ml-5 mr-5 mt-5'>
        <h1 className='text-3xl'>
            Profile
        </h1>
        <div className='horizontal-line mt-3 mb-10'/>
        <div className='flex flex-row'>
            <ImageUpload onChange={handleImageChange} src={selectedImage || ''}/>
            <h1 className='mt-2.5 ml-10'>
                Achyut
            </h1>
            <div className='mt-2.5 ml-10 flex flex-col'>
                <h1 className='text-sm mt-1'>achyut.benz@gmail.com</h1>
                <div className='mt-2 mr-1'>
                    <CustomAutocomplete
                        size='sm'
                        datas={educationOptions}
                        isInvalid={ educationLevel === '' } 
                        label='Select education Level' 
                        onValueChange={setEducationLevel}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserInformation
