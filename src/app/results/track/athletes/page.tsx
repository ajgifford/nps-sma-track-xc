'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';

interface Athlete {
  firstName: string;
  lastName: string;
  athleteName: string;
  gender: string;
  grade: string;
  school: string;
}

export default function AthletesPage() {
  const [athletes, setAthletes] = useState<Athlete[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [genderFilter, setGenderFilter] = useState<string>('all');
  const [gradeFilter, setGradeFilter] = useState<string>('all');

  useEffect(() => {
    const fetchAthletes = async () => {
      try {
        const response = await fetch('/data/track/2025/athlete_manifest.json');
        const data = await response.json();
        setAthletes(data);
      } catch (error) {
        console.error('Failed to load athletes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAthletes();
  }, []);

  // Filter and search athletes
  const filteredAthletes = useMemo(() => {
    return athletes.filter((athlete) => {
      // Search filter
      const matchesSearch =
        searchQuery === '' ||
        athlete.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        athlete.lastName.toLowerCase().includes(searchQuery.toLowerCase());

      // Gender filter
      const matchesGender =
        genderFilter === 'all' || athlete.gender === genderFilter;

      // Grade filter
      const matchesGrade =
        gradeFilter === 'all' || athlete.grade === gradeFilter;

      return matchesSearch && matchesGender && matchesGrade;
    });
  }, [athletes, searchQuery, genderFilter, gradeFilter]);

  // Get unique grades for filter
  const grades = useMemo(() => {
    const uniqueGrades = new Set(athletes.map((a) => a.grade));
    return Array.from(uniqueGrades).sort();
  }, [athletes]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/3 mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-24 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Back button */}
      <div className="mb-6">
        <Link
          href="/results/track"
          className="text-sky-600 hover:text-sky-800 flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Back to Track Results
        </Link>
      </div>

      {/* Page header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 text-gray-900">
          Athlete Profiles
        </h1>
        <p className="text-gray-600">
          Browse {athletes.length} athletes and view their performance history
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search */}
          <div className="md:col-span-1">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
              Search Athletes
            </label>
            <div className="relative">
              <input
                type="text"
                id="search"
                placeholder="Search by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <svg
                className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          {/* Gender Filter */}
          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-2">
              Gender
            </label>
            <select
              id="gender"
              value={genderFilter}
              onChange={(e) => setGenderFilter(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="all">All</option>
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
          </div>

          {/* Grade Filter */}
          <div>
            <label htmlFor="grade" className="block text-sm font-medium text-gray-700 mb-2">
              Grade
            </label>
            <select
              id="grade"
              value={gradeFilter}
              onChange={(e) => setGradeFilter(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="all">All</option>
              {grades.map((grade) => (
                <option key={grade} value={grade}>
                  {grade}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results count */}
        <div className="mt-4 text-sm text-gray-600">
          Showing {filteredAthletes.length} of {athletes.length} athletes
        </div>
      </div>

      {/* Athletes Grid */}
      {filteredAthletes.length === 0 ? (
        <div className="bg-white rounded-lg shadow p-12 text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            No Athletes Found
          </h2>
          <p className="text-gray-600">
            Try adjusting your search or filters
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredAthletes.map((athlete) => (
            <Link
              key={athlete.athleteName}
              href={`/results/track/athletes/${athlete.athleteName}`}
              className="bg-white rounded-lg shadow border border-gray-200 p-6 hover:shadow-lg hover:border-sky-300 transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {athlete.firstName} {athlete.lastName}
                  </h3>
                  <p className="text-sm text-gray-600">{athlete.grade}</p>
                </div>
                <div className="text-2xl">
                  {athlete.gender === 'M' ? '👦' : '👧'}
                </div>
              </div>
              <div className="text-sm text-gray-500">
                {athlete.school}
              </div>
              <div className="mt-4 flex items-center text-sky-600 text-sm font-medium">
                View Profile
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
