import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { blogService } from '../services/api';
import LoadingSpinner from '../components/LoadingSpinner';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await blogService.getPosts();
        setPosts(response.data || response || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="section-title">Blog</h1>
        <p className="section-subtitle">Latest news, photography tips, and studio stories.</p>
      </div>

      {loading ? (
        <LoadingSpinner />
      ) : posts.length > 0 ? (
        <div className="grid gap-6 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.post_id} className="card p-6">
              <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt || post.description || 'Read more about studio updates and photography tips.'}</p>
              <Link to={`/blog/${post.slug}`} className="btn-outline">Read post</Link>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-600">No blog posts are published yet.</div>
      )}
    </section>
  );
};

export default Blog;
