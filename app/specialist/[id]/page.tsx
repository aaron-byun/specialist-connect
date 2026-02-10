'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

const specialists = {
  '1': {
    id: 1,
    name: 'Dr. Rajesh Kumar',
    specialty: 'Cardiology',
    experience: '15 years',
    rating: 4.8,
    price: 500,
    available: true,
    languages: ['Hindi', 'English'],
    location: 'Tier 2 Cities',
    education: 'MBBS, MD (Cardiology) - AIIMS Delhi',
    about: 'Dr. Rajesh Kumar is a renowned cardiologist with 15 years of experience treating patients across India. He specializes in preventive cardiology and management of chronic heart conditions.',
    reviews: 245,
  },
  '2': {
    id: 2,
    name: 'Dr. Priya Sharma',
    specialty: 'Dermatology',
    experience: '10 years',
    rating: 4.9,
    price: 500,
    available: true,
    languages: ['Hindi', 'English', 'Tamil'],
    location: 'Tier 2/3 Cities',
    education: 'MBBS, MD (Dermatology) - CMC Vellore',
    about: 'Dr. Priya Sharma specializes in skin conditions and cosmetic dermatology. She has helped thousands of patients achieve healthy skin.',
    reviews: 312,
  },
  '3': {
    id: 3,
    name: 'Dr. Amit Patel',
    specialty: 'Pediatrics',
    experience: '12 years',
    rating: 4.7,
    price: 500,
    available: false,
    languages: ['Hindi', 'English', 'Gujarati'],
    location: 'Tier 3 Cities',
    education: 'MBBS, MD (Pediatrics) - Grant Medical College',
    about: 'Dr. Amit Patel is dedicated to child healthcare and has extensive experience in pediatric emergencies.',
    reviews: 198,
  },
};

export default function SpecialistProfile() {
  const params = useParams();
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  
  const doctor = specialists[params.id as keyof typeof specialists];

  if (!doctor) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Specialist not found</h2>
          <Link href="/" className="text-indigo-600 hover:underline">
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  const handleBooking = () => {
    if (!selectedDate || !selectedTime) {
      alert('Please select both date and time');
      return;
    }
    // In real app, this would redirect to payment page
    router.push(`/booking/confirm?doctor=${doctor.id}&date=${selectedDate}&time=${selectedTime}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <Link href="/" className="text-indigo-600 hover:underline">
            ← Back to specialists
          </Link>
        </div>
      </header>

      {/* Profile Content */}
      <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Doctor Info */}
          <div className="flex items-start gap-6 mb-8">
            <div className="w-32 h-32 bg-indigo-100 rounded-full flex items-center justify-center text-5xl">
              👨‍⚕️
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2">{doctor.name}</h1>
              <p className="text-xl text-gray-600 mb-2">{doctor.specialty}</p>
              <p className="text-gray-500 mb-4">{doctor.education}</p>
              
              <div className="flex gap-6 text-sm">
                <div className="flex items-center gap-1">
                  <span className="text-yellow-500">⭐</span>
                  <span className="font-semibold">{doctor.rating}</span>
                  <span className="text-gray-500">({doctor.reviews} reviews)</span>
                </div>
                <div className="text-gray-600">
                  📅 {doctor.experience}
                </div>
                <div className="text-gray-600">
                  📍 {doctor.location}
                </div>
              </div>

              <div className="mt-4 flex gap-2">
                {doctor.languages.map((lang) => (
                  <span
                    key={lang}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-right">
              <p className="text-3xl font-bold text-indigo-600">₹{doctor.price}</p>
              <p className="text-sm text-gray-500">per consultation</p>
            </div>
          </div>

          {/* About */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">About</h2>
            <p className="text-gray-700 leading-relaxed">{doctor.about}</p>
          </div>

          {/* Booking Section */}
          {doctor.available ? (
            <div className="border-t pt-8">
              <h2 className="text-xl font-bold mb-6">Book a Consultation</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Select Date
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Select Time
                  </label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">Choose a time slot</option>
                    <option value="09:00">09:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="14:00">02:00 PM</option>
                    <option value="15:00">03:00 PM</option>
                    <option value="16:00">04:00 PM</option>
                    <option value="17:00">05:00 PM</option>
                  </select>
                </div>
              </div>

              <button
                onClick={handleBooking}
                className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
              >
                Proceed to Payment (₹500)
              </button>

              <p className="text-sm text-gray-500 text-center mt-4">
                Video consultation link will be sent after payment
              </p>
            </div>
          ) : (
            <div className="border-t pt-8 text-center">
              <p className="text-gray-600 text-lg">This specialist is currently unavailable</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
