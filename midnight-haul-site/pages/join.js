import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Join() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    discord: '',
    truckersmpId: '',
    steamProfile: '',
    experience: '',
    reason: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-6 text-center">
        <h2 className="text-3xl font-bold">Thanks for Applying!</h2>
        <p className="mt-4">We’ll review your application and reach out via Discord.</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-900 text-white p-6 font-sans">
      <div className="max-w-2xl mx-auto py-12">
        <h1 className="text-3xl font-bold mb-6 text-center">Join Midnight Haul Co.</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="discord" placeholder="Discord Username (e.g. user#1234)" required onChange={handleChange} className="w-full p-3 bg-gray-800 rounded" />
          <input type="text" name="truckersmpId" placeholder="TruckersMP ID" required onChange={handleChange} className="w-full p-3 bg-gray-800 rounded" />
          <input type="text" name="steamProfile" placeholder="Steam Profile Link" required onChange={handleChange} className="w-full p-3 bg-gray-800 rounded" />
          <input type="text" name="experience" placeholder="ETS2/ATS Hours Played" required onChange={handleChange} className="w-full p-3 bg-gray-800 rounded" />
          <textarea name="reason" placeholder="Why do you want to join Midnight Haul Co.?" required onChange={handleChange} className="w-full p-3 bg-gray-800 rounded h-32" />
          <Button type="submit" className="w-full py-3 bg-gray-700 hover:bg-gray-600">Submit Application</Button>
        </form>
      </div>
    </main>
  );
}