import { getFirestore, collection } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { app } from '../../firebase/clientApp';
import NavWrapper from '../../components/NavWrapper';
import EventCard from '../../components/events/EventCard';

const Events = () => {
  const [value, loading, error] = useCollection(
    collection(getFirestore(app), 'events'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  if (value) {
    console.log(value.docs[0]);
  }

  return (
    <div>
      <NavWrapper>
        <div className='container mx-auto mb-32 mt-8 flex flex-wrap justify-center'>
          {value &&
            value.docs.map((doc) => {
              let event = doc.data();
              return (
                <EventCard
                  id={doc.id}
                  key={event.name}
                  name={event.name}
                  description={event.description}
                  date={event.date}
                  time={event.time}
                  image={event.image}
                />
              );
            })}
        </div>
      </NavWrapper>
    </div>
  );
};

export default Events;
