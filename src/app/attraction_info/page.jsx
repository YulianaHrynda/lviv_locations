import Header from '../components/Header/Header';
import Description from './components/Description';
import Reviews from './components/Reviews/Reviews';
import ReviewForm from './components/Reviews/ReviewForm';

const PLACE_ID = "arsenal-museum";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Description />
        <Reviews placeId={PLACE_ID} />
        <ReviewForm placeId={PLACE_ID} />
      </main>
    </>
  );
}
