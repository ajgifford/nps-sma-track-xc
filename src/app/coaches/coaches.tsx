import Image from 'next/image';
import { Coach } from "@/api/coaches";

interface PropTypes {
    coaches: Coach[];
    title: string;
}

export function Coaches({coaches, title}: PropTypes) {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Page Header */}
          <div className="bg-gradient-to-r from-sky-500 to-blue-600 rounded-lg shadow-lg p-8 mb-10 text-white">
            <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
            <p className="mt-2 text-sky-100">Meet the dedicated coaches who guide our athletes</p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {coaches.map((coach: Coach) => (
              <div
                key={coach.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Coach Photo */}
                  <div className="flex-shrink-0 md:w-64 h-64 md:h-auto bg-gradient-to-br from-sky-100 to-blue-200">
                    <div className="relative w-full h-full">
                      <Image
                        src={coach.photo}
                        alt={coach.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Coach Info */}
                  <div className="flex-1 p-6">
                    <div className="border-b border-sky-200 pb-4 mb-4">
                      <h2 className="text-2xl font-bold text-sky-900 mb-1">
                        {coach.title} - {coach.name}
                      </h2>

                      <p className="text-sm text-gray-600 flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-sky-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <strong>Parish:</strong> {coach.parish}
                      </p>
                    </div>

                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {coach.bio}
                    </p>

                    {coach.experience.length > 0 && (
                      <div className="mb-4 bg-sky-50 rounded-lg p-4">
                        <p className="font-semibold text-sky-900 mb-2 flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                            <path
                              fillRule="evenodd"
                              d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Experience
                        </p>
                        <ul className="space-y-1 text-gray-700">
                          {coach.experience.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-sky-500 mr-2 mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {coach.kids && coach.kids.length > 0 && (
                      <div className="mb-4 bg-sky-50 rounded-lg p-4">
                        <p className="font-semibold text-sky-900 mb-2 flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                          </svg>
                          Kids
                        </p>
                        <ul className="space-y-1 text-gray-700">
                          {coach.kids.map((kid, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-sky-500 mr-2 mt-1">•</span>
                              <span>{kid.name} - {kid.grade} Grade</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <p className="text-sm text-gray-600 flex items-center gap-2 mt-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-sky-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <strong>Contact:</strong>{' '}
                      <a href={`mailto:${coach.email}`} className="text-sky-600 hover:text-sky-800 underline">
                        {coach.email}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}
