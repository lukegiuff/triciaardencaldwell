import { ReactNode } from 'react';

export default function Section({
  id,
  title,
  eyebrow,
  description,
  children,
  className = '',
}: {
  id?: string;
  title?: string;
  eyebrow?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-16 ${className}`}>
      {(eyebrow || title || description) && (
        <div className="mb-8">
          {eyebrow && <p className="text-xs uppercase tracking-wider text-gray-500">{eyebrow}</p>}
          {title && <h2 className="text-3xl font-semibold tracking-tight mt-1">{title}</h2>}
          {description && <p className="mt-2 text-gray-700 max-w-2xl">{description}</p>}
        </div>
      )}
      {children}
    </section>
  );
}
