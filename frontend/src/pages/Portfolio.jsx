import { useEffect, useState } from 'react';
import { galleriesService } from '../services/api';
import LoadingSpinner from '../components/LoadingSpinner';

const Portfolio = () => {
  const [galleries, setGalleries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGalleries = async () => {
      try {
        const response = await galleriesService.getAll();
        setGalleries(response.data || response || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchGalleries();
  }, []);

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="section-title">Portfolio</h1>
        <p className="section-subtitle">Discover featured photo collections from recent sessions and events.</p>
      </div>

      {loading ? (
        <LoadingSpinner />
      ) : galleries.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-3">
          {galleries.map((gallery) => (
            <article key={gallery.gallery_id} className="card overflow-hidden">
              <div className="h-64 bg-gray-200" style={{ backgroundImage: `url(${gallery.cover_image_path || 'https://via.placeholder.com/600x400'})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{gallery.title}</h2>
                <p className="text-gray-600">{gallery.description || 'A handcrafted photography story.'}</p>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-600">No galleries are available right now.</div>
      )}
    </section>
  );
};

export default Portfolio;
