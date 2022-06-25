import NavWrapper from '../../components/NavWrapper';
import { getFirestore, doc } from 'firebase/firestore';
import { useDocument } from 'react-firebase-hooks/firestore';
import { app } from '../../firebase/clientApp';
import { useRouter } from 'next/router';

const Event = () => {
  const router = useRouter();

  const [value, loading, error] = useDocument(
    doc(getFirestore(app), 'events', router.query.id),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  if (value) {
    console.log(value.data());
  }

  return (
    <div>
      <NavWrapper />
      <div className='container mx-auto mt-8 mb-14'>
        {value && (
          <>
            <div className='flex'>
              <img
                src={value.data().image}
                alt='mainImg'
                className='rounded-md w-1/2'
              />

              <div className='ml-8 flex flex-col justify-between'>
                <div>
                  <h1 className='font-heading text-5xl py-8'>
                    {value.data().name}
                  </h1>
                  <p className='text-xl mb-8'>{value.data().description}</p>
                </div>
                <div className='pb-3'>
                  <div className='text-xl flex items-center py-4'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-8 w-8 mr-4'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                      />
                    </svg>{' '}
                    {value.data().date}
                  </div>
                  <div className='text-xl flex items-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-8 w-8 mr-4'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                    {value.data().time}
                  </div>
                  <div className='text-xl flex items-center mt-4'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-8 w-8 mr-4'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                      />
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                      />
                    </svg>
                    {value.data().address}
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-20 font-body'>
              <h2 className='text-3xl font-medium'>Details</h2>
              <p className='mt-9 text-lg'>{value.data().details}</p>
            </div>
            <div className='mt-20 font-body'>
              <h2 className='text-3xl font-medium'>Code</h2>
              <div className='w-3/5 mx-auto mt-20 flex justify-around items-center'>
                <input
                  style={{ boxShadow: '10px 10px #000000' }}
                  className='border-2 border-black rounded h-28 w-24 text-7xl text-center'
                />
                <input
                  style={{ boxShadow: '10px 10px #000000' }}
                  className='border-2 border-black rounded h-28 w-24 text-7xl text-center'
                />
                <input
                  style={{ boxShadow: '10px 10px #000000' }}
                  className='border-2 border-black rounded h-28 w-24 text-7xl text-center'
                />
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-12 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M20 12H4'
                  />
                </svg>
                <input
                  style={{ boxShadow: '10px 10px #000000' }}
                  className='border-2 border-black rounded h-28 w-24 text-7xl text-center'
                />
                <input
                  style={{ boxShadow: '10px 10px #000000' }}
                  className='border-2 border-black rounded h-28 w-24 text-7xl text-center'
                />
                <input
                  style={{ boxShadow: '10px 10px #000000' }}
                  className='border-2 border-black rounded h-28 w-24 text-7xl text-center'
                />
              </div>
              <div className='w-3/5 mx-auto mt-14 flex flex-row-reverse'>
                <button className='w-1/5 bg-app-yellow rounded-md p-3 font-medium text-lg flex items-center justify-center'>
                  Submit
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Event;
