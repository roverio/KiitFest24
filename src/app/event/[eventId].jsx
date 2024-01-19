// pages/event/[eventId].js
import { useRouter } from 'next/router';

const EventDetailsPage = () => {
  const router = useRouter();
  const { eventId } = router.query;

  // Replace this with your actual data fetching logic
  const eventData = {
    id: eventId,
    name: `Event ${eventId}`,
    description: `Description for Event ${eventId}`,
    image: `image-link-${eventId}`,
  };

  if (!eventData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{eventData.name}</h1>
      <p>{eventData.description}</p>
      <img src={eventData.image} alt={eventData.name} />
    </div>
  );
};

export default EventDetailsPage;
