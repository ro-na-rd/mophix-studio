const AdminDashboard = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <h1 className="section-title">Admin Dashboard</h1>
      <p className="section-subtitle">Quick access to studio metrics and management actions.</p>
      <div className="grid gap-6 md:grid-cols-2 mt-10">
        <div className="card p-8">
          <h2 className="text-xl font-semibold mb-3">Bookings</h2>
          <p className="text-gray-600">Review and manage pending customer bookings from the control panel.</p>
        </div>
        <div className="card p-8">
          <h2 className="text-xl font-semibold mb-3">Galleries</h2>
          <p className="text-gray-600">Upload photos, publish portfolios, and keep the studio gallery fresh.</p>
        </div>
        <div className="card p-8">
          <h2 className="text-xl font-semibold mb-3">Testimonials</h2>
          <p className="text-gray-600">Approve or reject client reviews and feature top testimonials.</p>
        </div>
        <div className="card p-8">
          <h2 className="text-xl font-semibold mb-3">Blog</h2>
          <p className="text-gray-600">Create new story posts and manage existing studio content.</p>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
