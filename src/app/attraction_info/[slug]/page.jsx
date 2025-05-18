'use client';
import { useParams } from 'next/navigation';
import Reviews from '../../components/Reviews';
import RewievForm from '../../components/ReviewForm';
import Header from '../../components/Header/Header';

export default function AttractionPage() {
  const { slug } = useParams();

  return (
    <>
      <Header />
      <main>
        <h1>{slug.replace(/-/g, ' ')}</h1>
        <Reviews placeId={slug} />
        <RewievForm placeId={slug} />
      </main>
    </>
  );
}
