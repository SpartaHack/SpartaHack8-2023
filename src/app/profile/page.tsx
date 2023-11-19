import UserInformation from '@/components/profile/user-information'
import Header from '@/ui/header/header'
import React from 'react'

const Profile = () => {
  return (
    <div className='h-screen'>
      <Header/>
      <UserInformation/>
    </div>
  )
}

export default Profile