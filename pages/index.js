import React from 'react';
import web3 from '../eth/web3';
import { getFirestore, collection } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import app from '../firebase/clientApp';

export default function Home() {
  const [value, loading, error] = useCollection(
    collection(getFirestore(app), 'coupons'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  if (value) {
    console.log(JSON.stringify(value.docs[0].data()));
  }

  return <h1 className='text-3xl font-bold underline'>Hello world!</h1>;
}
