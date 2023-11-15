import UserBilling from '@/components/profile/user-billing'
import UserInformation from '@/components/profile/user-information'
import Header from '@/ui/header/header'
import React from 'react'

const Profile = () => {
  return (
    <>
        <Header/>
        <UserInformation/>
        {/* <UserBilling/> */}
    </>
  )
}

export default Profile