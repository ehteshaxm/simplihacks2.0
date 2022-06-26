import { db } from '../../firebase/clientApp';
import cryptolearn from '../../eth/cryptolearn';
import { doc, updateDoc } from 'firebase/firestore';

const Coupon = ({
  name,
  description,
  image,
  barcode,
  code,
  value,
  bgColor,
  bgImage,
  bg,
  isBought,
  id,
}) => {
  const onClickHandler = async () => {
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
        const response = await cryptolearn.methods.transact(value).send({
          from: accounts[0],
        });

        if (response) {
          const coupon = doc(db, 'coupons', id);

          // Set the "capital" field of the city 'DC'
          await updateDoc(coupon, {
            isBought: true,
          });

          window.location.reload();
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div
      style={{ width: '500px' }}
      className='flex bg-slate-600 h-52 relative m-8'
    >
      <div
        style={{ top: '35%' }}
        className='absolute w-full flex justify-between items-center'
      >
        <div className='w-12 h-12 rounded-full bg-white -ml-6'></div>
        <div className='w-12 h-12 rounded-full bg-white -mr-6'></div>
      </div>
      <div
        style={{
          backgroundColor: bgColor,
          backgroundImage: bgImage,
        }}
        className='w-20'
      >
        <p
          style={{ letterSpacing: '10px' }}
          className='-rotate-90 ml-4 mt-32 pl-2 text-xl font-heading font-semibold text-white'
        >
          COUPON
        </p>
      </div>
      <div
        style={{
          backgroundColor: '#b8c6db',
          backgroundImage: 'linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%)',
        }}
        className='bg-app-green-100 w-full flex flex-col justify-between'
      >
        <div className='flex items-center justify-between px-4 mt-8'>
          {value && (
            <img src={image} style={{ width: '22%' }} className='mr-12 pl-4' />
          )}

          <div
            style={{ color: '#09203F' }}
            className='font-body font-semibold px-3'
          >
            {description}
          </div>
        </div>
        <div className='flex items-end justify-between px-4 mb-2'>
          {value && <img src={barcode} className={`w-2/4 mr-12 -ml-8 pl-4`} />}
          {value && !isBought && (
            <div
              style={{ color: '#09203F', width: '200px' }}
              className='font-body font-bold px-3 flex items-end justify-between'
            >
              <p className='mr-4'>{value} C</p>
              <p
                onClick={onClickHandler}
                className='hover:text-blue-800 cursor-pointer'
              >
                REDEEM
              </p>
            </div>
          )}
          {value && isBought && (
            <div className='bg-white border-2 border-dashed border-black px-3 py-1 mr-7 mb-5 font-body font-semibold text-lg'>
              {code}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Coupon;
