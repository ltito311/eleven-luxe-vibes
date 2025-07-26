import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/lovable-uploads/d8a6c806-e606-47bd-9798-9ea24a5edaa5.png',
      alt: 'LADEN Event at Eleven Restaurant & Lounge'
    },
    {
      image: '/lovable-uploads/e70d8a70-08b5-4fef-91b9-6adf37ad29aa.png',
      alt: 'Signature drinks with Eleven branded bags'
    },
    {
      image: '/lovable-uploads/ee776c1a-210f-4fc1-b8c1-6958a29adaca.png',
      alt: 'Elegant dining setup at Eleven Restaurant'
    },
    {
      image: '/lovable-uploads/8c3cd4f8-9dcc-4cc3-80a4-6681e72b489e.png',
      alt: 'Luxury interior with green wall at Eleven Lounge'
    },
    {
      image: '/lovable-uploads/d4bc3f93-63d2-44d7-844c-398cae6561ca.png',
      alt: 'Cocktail toast at Eleven bar in Savanna-la-Mar'
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const handleReservation = () => {
    window.open('https://form.typeform.com/to/B36XKi0i', '_self');
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slideshow Background */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-overlay"></div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-primary transition-colors duration-300 z-10"
      >
        <ChevronLeft size={40} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-primary transition-colors duration-300 z-10"
      >
        <ChevronRight size={40} />
      </button>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-poppins tracking-tight">
            MEET ME AT ELEVEN
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
            Cocktails, Culture, and Culinary Fire.
          </p>
          <Button 
            variant="luxury" 
            size="xl"
            onClick={handleReservation}
            className="shadow-luxury"
          >
            BOOK NOW
          </Button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-primary scale-125' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlideshow;