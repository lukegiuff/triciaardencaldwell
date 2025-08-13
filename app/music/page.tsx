import Container from '@/components/Container';
import AudioCard from '@/components/AudioCard';
import { miscMusic } from '@/data/tricia';
import { Music, Clock, Volume2 } from 'lucide-react';

export const dynamic = 'error';

export default function MusicPage() {
  const samples = miscMusic.samples;
  return (
    <main className="pt-24">
      <Container>
        <div className="py-16 lg:py-24">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              {miscMusic.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              {miscMusic.blurb}
            </p>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto"></div>
          </div>

          {/* Coming Soon Content */}
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-16 max-w-4xl mx-auto">
              {/* Music Categories Preview */}
              <div className="text-center p-12 bg-gray-50 rounded-3xl border border-gray-100 shadow-sm">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <Music className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Children&apos;s Songs</h3>
                <p className="text-gray-600 text-base">Delightful compositions crafted for young audiences</p>
              </div>

              <div className="text-center p-12 bg-gray-50 rounded-3xl border border-gray-100 shadow-sm">
                <div className="w-24 h-24 bg-gradient-to-br from-red-100 to-red-200 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <Volume2 className="w-12 h-12 text-red-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Christmas Collection</h3>
                <p className="text-gray-600 text-base">Seasonal music bringing warmth and joy</p>
              </div>
            </div>

            {/* Coming Soon Notice */}
            <div className="text-center p-12 bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-100 shadow-elegant">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-amber-200 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Music className="w-10 h-10 text-amber-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Audio Samples Coming Soon</h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                We&apos;re preparing high-quality audio samples from Tricia&apos;s diverse musical portfolio. 
                Check back soon to experience the range and creativity of her compositions.
              </p>
              <div className="inline-flex items-center gap-2 text-sm font-medium text-amber-700 bg-amber-50 px-4 py-2 rounded-full">
                <Clock className="w-4 h-4" />
                Updates coming this month
              </div>
            </div>

            {/* Placeholder Audio Cards */}
            {samples.length > 0 && (
              <div className="mt-16">
                <h3 className="text-xl font-semibold text-gray-900 mb-8 text-center">Preview Categories</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {samples.map((s) => (
                    <AudioCard key={s.title} title={s.title} src={s.src} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </main>
  );
}
