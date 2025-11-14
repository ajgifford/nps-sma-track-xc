'use client';

import { useState, useEffect } from 'react';

interface NavSection {
  id: string;
  label: string;
  icon?: string;
}

interface PageJumpNavProps {
  sections: NavSection[];
  position?: 'left' | 'right';
}

export default function PageJumpNav({ sections, position = 'right' }: PageJumpNavProps) {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show nav after scrolling a bit
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);

      // Update active section based on scroll position
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id),
      }));

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i].element;
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sectionElements[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Offset for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const positionClasses = position === 'left'
    ? 'left-4 md:left-8'
    : 'right-4 md:right-8';

  return (
    <nav
      className={`fixed ${positionClasses} top-1/2 -translate-y-1/2 z-40 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-2 max-w-[200px]">
        <div className="text-xs font-semibold text-gray-500 uppercase px-3 py-2 mb-1">
          Jump to
        </div>
        <ul className="space-y-1">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left px-3 py-2 text-sm rounded transition-colors duration-150 flex items-center gap-2 ${
                  activeSection === section.id
                    ? 'bg-blue-100 text-blue-700 font-semibold'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {section.icon && <span>{section.icon}</span>}
                <span className="truncate">{section.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
