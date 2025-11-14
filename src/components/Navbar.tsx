'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold">
            Nativity & St. Michael's CYO XC & Track
          </Link>
          
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-blue-200">Home</Link>
            
            <div className="relative group flex items-center">
              <button className="hover:text-blue-200">Coaches</button>
              <div className="absolute hidden group-hover:block bg-blue-700 py-2 w-48 rounded shadow-lg top-full left-0 mt-0">
                <Link href="/coaches/crosscountry" className="block px-4 py-2 hover:bg-blue-800">Cross Country</Link>
                <Link href="/coaches/track" className="block px-4 py-2 hover:bg-blue-800">Track & Field</Link>
              </div>
            </div>

            <div className="relative group flex items-center">
              <button className="hover:text-blue-200">Schedule</button>
              <div className="absolute hidden group-hover:block bg-blue-700 py-2 w-48 rounded shadow-lg top-full left-0 mt-0">
                <Link href="/schedule/crosscountry" className="block px-4 py-2 hover:bg-blue-800">Cross Country</Link>
                <Link href="/schedule/track" className="block px-4 py-2 hover:bg-blue-800">Track & Field</Link>
              </div>
            </div>

            <div className="relative group flex items-center">
              <button className="hover:text-blue-200">Results</button>
              <div className="absolute hidden group-hover:block bg-blue-700 py-2 w-56 rounded shadow-lg top-full left-0 mt-0">
                <Link href="/results/crosscountry" className="block px-4 py-2 hover:bg-blue-800">XC - All Meets</Link>
                <Link href="/results/crosscountry/rankings" className="block px-4 py-2 hover:bg-blue-800">XC - Rankings</Link>
                <Link href="/results/crosscountry/team" className="block px-4 py-2 hover:bg-blue-800">XC - Team Season</Link>
                <div className="border-t border-blue-600 my-1"></div>
                <Link href="/results/track" className="block px-4 py-2 hover:bg-blue-800">Track - All Meets</Link>
                <Link href="/results/track/rankings" className="block px-4 py-2 hover:bg-blue-800">Track - Rankings</Link>
                <Link href="/results/track/athletes" className="block px-4 py-2 hover:bg-blue-800">Track - Athletes</Link>
              </div>
            </div>

            <div className="relative group flex items-center">
              <button className="hover:text-blue-200">Records</button>
              <div className="absolute hidden group-hover:block bg-blue-700 py-2 w-48 rounded shadow-lg top-full left-0 mt-0">
                <Link href="/records/nativity" className="block px-4 py-2 hover:bg-blue-800">Nativity</Link>
                <Link href="/records/stmichaels" className="block px-4 py-2 hover:bg-blue-800">St. Michael's</Link>
              </div>
            </div>

            <Link href="/training" className="hover:text-blue-200">Training</Link>
            <Link href="/resources" className="hover:text-blue-200">Resources</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
