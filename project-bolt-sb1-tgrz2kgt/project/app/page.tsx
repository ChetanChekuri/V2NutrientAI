import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Heart, Salad } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">Your Personal AI Nutrition Guide</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Get personalized nutrition advice powered by advanced AI technology to help you make better dietary choices.
        </p>
        <Link href="/chat">
          <Button size="lg" className="font-semibold">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </section>

      {/* Feature Image */}
      <div className="relative h-[400px] rounded-xl overflow-hidden mb-20">
        <Image
          src="https://images.unsplash.com/photo-1490818387583-1baba5e638af"
          alt="Healthy food composition"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Features Section */}
      <section className="py-16 grid md:grid-cols-3 gap-8">
        <div className="text-center p-6">
          <Brain className="h-12 w-12 mx-auto mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-3">AI-Powered Insights</h3>
          <p className="text-gray-600">Get instant, accurate nutrition advice based on cutting-edge AI technology.</p>
        </div>
        <div className="text-center p-6">
          <Heart className="h-12 w-12 mx-auto mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-3">Personalized Guidance</h3>
          <p className="text-gray-600">Receive tailored recommendations that match your unique dietary needs.</p>
        </div>
        <div className="text-center p-6">
          <Salad className="h-12 w-12 mx-auto mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-3">Evidence-Based Advice</h3>
          <p className="text-gray-600">Trust in recommendations backed by scientific research and expert sources.</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center bg-gray-50 rounded-xl mb-20">
        <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Nutrition?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join our growing community of users who have already improved their dietary habits with Nutrient AI.
        </p>
      </section>
    </div>
  );
}