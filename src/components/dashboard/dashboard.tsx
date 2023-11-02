import React from 'react';
import Folder from './folder';

const Dashboard = () => {
  return (
    <div className='flex flex-col h-screen'>
      <div className='flex flex-row w-full justify-center'>
        <div className='text-center mt-3'>
          <Folder/>
        </div>
      </div>
      <div className='mt-3 mb-3 border-b border-neutral-300'/>

    </div>
  );
};

export default Dashboard;