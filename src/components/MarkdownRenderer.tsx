import ReactMarkdown from 'react-markdown';

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose prose-lg max-w-none">
      <ReactMarkdown
        components={{
          h1: ({ children }) => (
            <div className="bg-gradient-to-r from-sky-500 to-blue-600 rounded-lg shadow-lg p-8 mb-8 text-white">
              <h1 className="text-4xl md:text-5xl font-bold m-0">{children}</h1>
            </div>
          ),
          h2: ({ children }) => (
            <h2 className="text-3xl font-bold mb-4 mt-10 text-sky-900 border-l-4 border-sky-500 pl-4">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-2xl font-semibold mb-3 mt-8 text-sky-700">{children}</h3>
          ),
          p: ({ children }) => (
            <p className="mb-6 text-gray-700 leading-relaxed text-lg">{children}</p>
          ),
          ul: ({ children }) => (
            <ul className="mb-6 space-y-3 bg-white rounded-lg shadow p-6 border-l-4 border-sky-300 list-none">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="mb-6 space-y-3 bg-white rounded-lg shadow p-6 border-l-4 border-sky-300 list-none">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="text-gray-700 flex items-start">
              <span className="text-sky-500 mr-3 mt-1 text-xl">•</span>
              <span className="flex-1">{children}</span>
            </li>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              className="text-sky-600 hover:text-sky-800 underline font-medium transition-colors"
            >
              {children}
            </a>
          ),
          strong: ({ children }) => (
            <strong className="font-bold text-sky-900">{children}</strong>
          ),
          hr: () => (
            <hr className="my-12 border-t-2 border-sky-200" />
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-sky-500 bg-sky-50 rounded-r-lg p-6 my-6 italic text-gray-700">
              {children}
            </blockquote>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
