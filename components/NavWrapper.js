import React from 'react';
import Image from 'next/image';
import Footer from './landing/Footer';

const NavWrapper = ({ children }) => {
  return (
    <div>
      <div className='container mx-auto py-4 flex justify-between items-center font-body'>
        <div></div>
        <div className='w-1/3 flex items-center justify-between font-medium text-lg'>
          <p>Events</p>
          <p>Coupons</p>
          <p>Users</p>
          <div className='flex items-center bg-app-yellow p-1 pl-3 pr-6 rounded-md'>
            <Image
              src={'/coin.png'}
              alt='coin'
              height={'40px'}
              width={'40px'}
            />
            <p>20</p>
          </div>
        </div>
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default NavWrapper;
