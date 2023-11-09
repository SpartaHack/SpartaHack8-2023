'use client'
import { CustomButton } from '@/helpers/custom-btn'
import YouLearnLogo from '@/icon/youlearn-logo'
import { useRouter } from 'next/navigation'
 
export default function Error({}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const router = useRouter()
 
  return (
    <div className='h-screen w-full flex flex-col justify-center items-center'>
      <span className='text-2xl mb-10'>An error occured.</span>
      <YouLearnLogo width={350} height={350}/>
      <CustomButton title="Go Back" btnType='button' btnStyling='mt-10 text-xl' popOverClickEvent={() => router.push('/')}/>
    </div>
  )
}