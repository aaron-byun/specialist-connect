import Link from 'next/link';

const specialists = [
  {
    id: 1,
    name: 'Dr. Rajesh Kumar',
    specialty: 'Cardiology',
    experience: '15 years',
    rating: 4.8,
    price: 500,
    available: true,
    image: '/doctors/rajesh.jpg',
    languages: ['Hindi', 'English'],
    location: 'Tier 2 Cities'
  },
  {
    id: 2,
    name: 'Dr. Priya Sharma',
    specialty: 'Dermatology',
    experience: '10 years',
    rating: 4.9,
    price: 500,
    available: true,
    image: '/doctors/priya.jpg',
    languages: ['Hindi', 'English', 'Tamil'],
    location: 'Tier 2/3 Cities'
  },
  {
    id: 3,
    name: 'Dr. Amit Patel',
    specialty: 'Pediatrics',
    experience: '12 years',
    rating: 4.7,
    price: 500,
    available: false,
    image: '/doctors/amit.jpg',
    languages: ['Hindi', 'English', 'Gujarati'],
    location: 'Tier 3 Cities'
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-indigo-600">
              🏥 SpecialistConnect
            </h1>
            <div className="flex gap-4">
              <button className="text-gray-600 hover:text-gray-900">
                For Doctors
              </button>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="bg-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Connect with Top Specialists from Anywhere in India
          </h2>
          <p className="text-xl mb-8">
            Access expert medical care in Tier 2 & 3 cities. ₹500 per consultation.
          </p>
          <div className="flex gap-4 justify-center">
            <input
              type="text"
              placeholder="Search by specialty or symptom..."
              className="px-4 py-3 rounded-lg w-96 text-gray-900"
            />
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Specialists Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold mb-8">Available Specialists</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialists.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
            >
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center text-3xl">
                  👨‍⚕️
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg">{doctor.name}</h4>
                  <p className="text-gray-600">{doctor.specialty}</p>
                  <p className="text-sm text-gray-500">{doctor.experience}</p>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-500">⭐</span>
                  <span className="font-semibold">{doctor.rating}</span>
                  <span className="text-gray-500">(200+ reviews)</span>
                </div>
                <div className="text-sm text-gray-600">
                  🗣️ {doctor.languages.join(', ')}
                </div>
                <div className="text-sm text-gray-600">
                  📍 {doctor.location}
                </div>
              </div>

              <div className="mt-4 pt-4 border-t flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-indigo-600">₹{doctor.price}</p>
                  <p className="text-xs text-gray-500">per consultation</p>
                </div>
                <Link
                  href={`/specialist/${doctor.id}`}
                  className={`px-6 py-2 rounded-lg font-semibold ${
                    doctor.available
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'bg-gray-300 text-gray-600 cursor-not-allowed'
                  }`}
                >
                  {doctor.available ? 'Book Now' : 'Unavailable'}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center mb-12">Why Choose SpecialistConnect?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🏆</div>
              <h4 className="font-bold text-xl mb-2">Top Specialists</h4>
              <p className="text-gray-600">
                Access highly qualified doctors from premier medical institutions
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💰</div>
              <h4 className="font-bold text-xl mb-2">Affordable</h4>
              <p className="text-gray-600">
                Fixed ₹500 per consultation. No hidden fees.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📱</div>
              <h4 className="font-bold text-xl mb-2">Remote Care</h4>
              <p className="text-gray-600">
                Connect from anywhere via video consultation
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2026 SpecialistConnect. Making healthcare accessible.</p>
        </div>
      </footer>
    </div>
  );
}
