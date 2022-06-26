import { getFirestore, collection } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import app from '../../firebase/clientApp';
import NavWrapper from '../../components/NavWrapper';
import Coupon from '../../components/coupons/Coupon';

const Coupons = () => {
  const [value, loading, error] = useCollection(
    collection(getFirestore(app), 'coupons'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  return (
    <div>
      <NavWrapper>
        <div className='container mx-auto mb-32'>
          <h2 className='text-3xl font-body font-medium'>Coupons</h2>
          <div className='mt-7 flex flex-wrap justify-center'>
            {value &&
              value.docs.map((doc) => {
                let coupon = doc.data();
                return (
                  <Coupon
                    key={coupon.name}
                    image={coupon.image}
                    description={coupon.description}
                    barcode={coupon.barcode}
                    code={coupon.code}
                    value={coupon.value}
                    bgColor={coupon.bgColor}
                    bgImage={coupon.bgImage}
                    bg={coupon.bg}
                  />
                );
              })}
          </div>
        </div>
      </NavWrapper>
    </div>
  );
};

export default Coupons;
