"use client";
import FAQ from "@/components/upgrade/faq";
import Upgrade from "@/components/upgrade/upgrade";
import Footer from "@/ui/footer/footer";
import Header from "@/ui/header/header";

const UpgradePage = () => {
  return (
    <div>
      <Header />
      <div className="z-10 mt-[60px] relative h-full pb-6">
        <Upgrade />
        <FAQ />
      </div>
      <Footer />
    </div>
  );
};

export default UpgradePage;
