'use client'
import FAQ from '@/components/upgrade/faq'
import PricingPage from '@/components/upgrade/pricing-table'
import Footer from "@/ui/footer/footer"
import SecondaryHeader from '@/ui/header/secondary-header'

const UpgradePage = () => {
  return (
    <main>
      <SecondaryHeader/>
        <div className="z-10 mt-[60px] relative h-full pb-6">
          <PricingPage/>
          <FAQ/>
        </div>
        <Footer/>
    </main>
  )
}

UpgradePage.theme = 'light'

export default UpgradePage