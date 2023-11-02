import React from 'react';
import AddFolder from './folder';

const Dashboard = () => {
  return (
    <div className='flex flex-col h-screen'>
      <div className='flex flex-row w-full justify-center'>
        <div className='text-center mt-4'>
          <AddFolder/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;