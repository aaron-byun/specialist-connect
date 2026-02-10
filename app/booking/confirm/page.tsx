'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function BookingConfirm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [processing, setProcessing] = useState(false);

  const doctorId = searchParams.get('doctor');
  const date = searchParams.get('date');
  const time = searchParams.get('time');

  const handlePayment = async () => {
    setProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setProcessing(false);
      router.push('/booking/success');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Confirm Booking</h1>

        {/* Booking Summary */}
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <h2 className="font-semibold mb-4">Booking Details</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Doctor ID:</span>
              <span className="font-medium">#{doctorId}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Date:</span>
              <span className="font-medium">{date}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Time:</span>
              <span className="font-medium">{time}</span>
            </div>
          </div>
        </div>

        {/* Payment Summary */}
        <div className="border-t border-b py-4 mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600">Consultation Fee:</span>
            <span className="font-medium">₹500</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600">Platform Fee:</span>
            <span className="font-medium">₹0</span>
          </div>
          <div className="flex justify-between items-center text-lg font-bold pt-2 border-t">
            <span>Total:</span>
            <span className="text-indigo-600">₹500</span>
          </div>
        </div>

        {/* Payment Method */}
        <div className="mb-6">
          <h3 className="font-semibold mb-3">Payment Method</h3>
          <div className="space-y-2">
            <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
              <input type="radio" name="payment" defaultChecked className="mr-3" />
              <div className="flex items-center gap-2">
                <span>💳</span>
                <span>UPI / Debit / Credit Card</span>
              </div>
            </label>
            <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
              <input type="radio" name="payment" className="mr-3" />
              <div className="flex items-center gap-2">
                <span>🏦</span>
                <span>Net Banking</span>
              </div>
            </label>
            <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
              <input type="radio" name="payment" className="mr-3" />
              <div className="flex items-center gap-2">
                <span>📱</span>
                <span>Paytm / PhonePe / Google Pay</span>
              </div>
            </label>
          </div>
        </div>

        {/* Pay Button */}
        <button
          onClick={handlePayment}
          disabled={processing}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition disabled:bg-gray-400"
        >
          {processing ? 'Processing...' : 'Pay ₹500'}
        </button>

        <p className="text-xs text-gray-500 text-center mt-4">
          🔒 Secure payment powered by Razorpay
        </p>
      </div>
    </div>
  );
}
