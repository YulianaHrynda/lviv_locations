import Header from '../components/Header/Header';
import Description from './components/Description';
import Reviews from './components/Reviews';
import RewievForm from './components/RewievForm';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Description />
        <Reviews />
        <RewievForm />
      </main>
    </>
  );
}
