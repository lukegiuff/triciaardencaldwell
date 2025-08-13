import Container from '@/components/Container';
import Image from 'next/image';
import { about } from '@/data/tricia';
import { asset } from '@/utils/asset';

export const dynamic = 'error';

export default function AboutPage() {
  return (
    <main className="pt-24">
      <Container>
        <div className="pt-16 lg:pt-24 pb-8 lg:pb-12">
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
              <div className="prose prose-lg max-w-none [&>div]:mb-0">
                <div 
                  className="biography-content" 
                  dangerouslySetInnerHTML={{ __html: about.html }} 
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
