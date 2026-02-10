import Link from 'next/link';

export default function BookingSuccess() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="text-6xl mb-6">✅</div>
        <h1 className="text-3xl font-bold mb-4">Booking Confirmed!</h1>
        <p className="text-gray-600 mb-8">
          Your consultation has been successfully booked. 
          You will receive a video call link via SMS and email shortly.
        </p>

        <div className="bg-indigo-50 rounded-lg p-6 mb-6">
          <h2 className="font-semibold mb-2">What's Next?</h2>
          <ul className="text-sm text-left space-y-2">
            <li>✉️ Check your email for confirmation</li>
            <li>📱 Video link will be sent 15 mins before consultation</li>
            <li>📋 Keep your medical history ready</li>
            <li>💊 Prescription will be sent digitally after consultation</li>
          </ul>
        </div>

        <Link
          href="/"
          className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
