import Link from 'next/link';

const EventCard = ({ name, description, image, date, time, id }) => {
  return (
    <div
      style={{ height: '800px', width: '480px' }}
      className='m-2 my-4 p-4 font-body rounded-lg border-2 border-black flex flex-col justify-between'
    >
      <img src={image} alt='eventImage' className='rounded-md h-1/2 w-full' />
      <div className='flex flex-col justify-between -mt-8'>
        <div>
          <p className='font-heading text-3xl py-4'>{name}</p>
          <p className='text-lg'>{description}</p>
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
            {date}
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
            {time}
          </div>
        </div>
      </div>
      <Link href={{ pathname: `/events/${id}`, query: { id: `${id}` } }}>
        <button className='w-full bg-app-green-200 rounded-md p-3 font-medium text-lg flex items-center justify-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 mr-2'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
          Learn more
        </button>
      </Link>
    </div>
  );
};

export default EventCard;
