import { useEffect, useState } from 'react';
import { servicesService } from '../services/api';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await servicesService.getAll();
        setServices(response.data || response || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="section-title">Our Services</h1>
        <p className="section-subtitle">Professional photography packages built for every occasion.</p>
      </div>

      {loading ? (
        <LoadingSpinner />
      ) : services.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.service_id} className="card p-6">
              <h2 className="text-2xl font-semibold mb-2">{service.name}</h2>
              <p className="text-gray-600 mb-4">{service.description || 'A premium photography package.'}</p>
              <p className="text-lg font-semibold text-primary mb-4">RWF {service.price?.toFixed(0) || 'Contact'}</p>
              <Link to={`/services/${service.service_id}`} className="btn-outline">View details</Link>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-600">No service packages are available yet.</div>
      )}
    </section>
  );
};

export default Services;
