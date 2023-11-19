import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'stripe-pricing-table': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

export function PricingPage() {
  return (
    <>
        <h1 className='py-12 font-bold text-3xl text-center'>Find a plan to enhance your learning</h1>
        <stripe-pricing-table
            pricing-table-id="prctbl_1OEHVAK8Jk6Q3TjGkrlbmayX"
            publishable-key="pk_test_51Nygt1K8Jk6Q3TjGjWxO2gZ97Mk15KSBdONDs7LAmCC9DUCX9X404GhJ1Y0j1zaJd2wl4OY6bg9XlbkLOxCjw72i00V4FGBM8E"
        />
    </>
  );
}

export default PricingPage;