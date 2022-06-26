import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from './landing/Footer';
import cryptolearn from '../eth/cryptolearn';

const NavWrapper = ({ children }) => {
  const [coins, setCoins] = useState(20);

  useEffect(() => {
    const getTokens = async () => {
      const { ethereum } = window;

      if (!ethereum) {
        alert(
          'Metamask not detected. Please try again from a Metamask enabled browser.'
        );
        return;
      }

      const accounts = await ethereum.request({ method: 'eth_accounts' });

      if (accounts[0]) {
        try {
          const tokens = await cryptolearn.methods.getTotalTokens().call({
            from: accounts[0],
          });

          if (tokens) {
            setCoins(tokens);
          }
        } catch (error) {
          console.log(error);
        }
      }
    };

    getTokens();
  }, []);

  return (
    <div>
      <div className='container mx-auto py-4 flex justify-between items-center font-body'>
        <div></div>
        <div className='w-1/4 flex items-center justify-between font-medium text-lg'>
          <Link href='/events'>
            <p className='cursor-pointer'>Events</p>
          </Link>
          <Link href='/coupons'>
            <p className='cursor-pointer'>Coupons</p>
          </Link>
          <div className='flex items-center bg-app-yellow p-1 pl-3 pr-6 rounded-md'>
            <Image
              src={'/coin.png'}
              alt='coin'
              height={'40px'}
              width={'40px'}
            />
            <p>{coins}</p>
          </div>
        </div>
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default NavWrapper;
