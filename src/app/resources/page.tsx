import { readFileSync } from 'fs';
import { join } from 'path';
import MarkdownRenderer from '@/components/MarkdownRenderer';

export default function Resources() {
  const content = readFileSync(join(process.cwd(), 'data', 'resources.md'), 'utf-8');

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <MarkdownRenderer content={content} />
    </div>
  );
}
