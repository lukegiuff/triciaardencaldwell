import Container from '@/components/Container';
import Image from 'next/image';
import { about } from '@/data/tricia';
import { asset } from '@/utils/asset';

export const dynamic = 'error';

export default function AboutPage() {
  return (
    <main className="pt-24">
      <Container>
        <div className="py-16 lg:py-24">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              About <span className="text-gradient font-semibold">Tricia</span>
            </h1>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto"></div>
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-5 gap-16 lg:gap-20 items-start max-w-6xl mx-auto">
            {/* Portrait */}
            <div className="lg:col-span-2">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-elegant-lg">
                <Image 
                  src={asset(about.image)} 
                  alt="Tricia Arden Caldwell portrait" 
                  fill 
                  className="object-cover" 
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>

            {/* Biography */}
            <div className="lg:col-span-3">
              <div className="prose prose-lg max-w-none">
                <div 
                  className="text-gray-700 leading-relaxed space-y-6" 
                  dangerouslySetInnerHTML={{ __html: about.html }} 
                />
              </div>
              
              {/* Coming Soon Notice */}
              <div className="mt-12 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Full Biography</h3>
                <p className="text-gray-600">
                  A comprehensive biography with career highlights, achievements, and personal insights coming soon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
