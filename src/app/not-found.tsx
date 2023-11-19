import YouLearnLogo from '@/icon/youlearn-logo'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex flex-col h-screen text-center justify-center'>
      <div className='items-center justify-center'>
        <YouLearnLogo size='lg' width={200} height={200}/>
        <h1 className='text-[50px]'>
          Return
        </h1>
      </div>
    </div>
  )
}