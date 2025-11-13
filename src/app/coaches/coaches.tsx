import Image from 'next/image';
import { Coach } from "@/api/coaches";

interface PropTypes {
    coaches: Coach[];
    title: string;
}

export function Coaches({coaches, title}: PropTypes) {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8">{title}</h1>
          
          <div className="space-y-12">
            {coaches.map((coach: Coach) => (
              <div key={coach.id} className="border-b pb-8 last:border-b-0">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Coach Photo */}
                  <div className="flex-shrink-0">
                    <div className="relative w-48 h-48 rounded-lg overflow-hidden bg-gray-200">
                      <Image
                        src={coach.photo}
                        alt={coach.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
    
                  {/* Coach Info */}
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-1">
                      {coach.title} - {coach.name}
                    </h2>
                    
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      <strong>Parish:</strong> {coach.parish}
                    </p>
                    
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {coach.bio}
                    </p>
    
                    {coach.experience.length > 0 && (
                      <div className="mb-4">
                        <p className="font-semibold mb-2">Experience:</p>
                        <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                          {coach.experience.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
    
                    {coach.kids && coach.kids.length > 0 && (
                      <div className="mb-4">
                        <p className="font-semibold mb-2">Kids:</p>
                        <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                          {coach.kids.map((kid, index) => (
                            <li key={index}>{kid.name} - {kid.grade} Grade</li>
                          ))}
                        </ul>
                      </div>
                    )}
    
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <strong>Contact:</strong> {coach.email}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}
