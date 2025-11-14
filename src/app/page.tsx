import { readFileSync } from 'fs';
import { join } from 'path';
import Image from 'next/image';
import MarkdownRenderer from '@/components/MarkdownRenderer';

export default function Home() {
  const content = readFileSync(join(process.cwd(), 'content', 'home.md'), 'utf-8');

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* School Logos Section */}
      <div className="mb-12 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
        <div className="flex flex-col items-center">
          <div className="relative w-48 h-48 mb-4">
            <Image
              src="/images/nps.png"
              alt="Nativity Parish School"
              fill
              className="object-contain"
            />
          </div>
          <h2 className="text-xl font-bold text-sky-900">Nativity Parish School</h2>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative w-48 h-48 mb-4">
            <Image
              src="/images/sma.png"
              alt="St. Michael the Archangel"
              fill
              className="object-contain"
            />
          </div>
          <h2 className="text-xl font-bold text-sky-900">St. Michael the Archangel</h2>
        </div>
      </div>

      <MarkdownRenderer content={content} />
    </div>
  );
}
