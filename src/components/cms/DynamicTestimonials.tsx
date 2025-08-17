import React from 'react';
import { useTestimonials } from '@/hooks/useCMS';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const DynamicTestimonials: React.FC = () => {
  const { data: testimonials, isLoading, error } = useTestimonials();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error || !testimonials || !Array.isArray(testimonials) || testimonials.length === 0) {
    return null; // Hide section if no testimonials
  }

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">What Our Guests Say</h2>
          <p className="text-lg text-muted-foreground">Hear from those who've experienced Eleven</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                <footer className="text-sm font-semibold text-foreground">
                  — {testimonial.name}
                </footer>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DynamicTestimonials;