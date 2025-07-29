import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/lovable-uploads/1276fe18-4ab1-4034-8294-c26116f74d27.png',
      alt: 'LADEN Event at Eleven Restaurant & Lounge',
      title: 'CELEBRATE WITH US',
      subtitle: "You're invited to celebrate with us as we mark our second year in action! Join us, install, and secure your exclusive spot on our VIP deck for an unforgettable experience. Don't miss out.",
      ctaText: 'Reserve your place today',
      buttonText: 'Reserve'
    },
    {
      image: '/lovable-uploads/6dc3e49e-dfa8-4eac-bb66-dba581445057.png',
      alt: 'Signature drinks with Eleven branded bags',
      title: 'SIGNATURE COCKTAILS',
      subtitle: 'Discover our unique offerings and experience the Eleven difference.',
      ctaText: 'Learn More',
      buttonText: 'Explore'
    },
    {
      image: '/lovable-uploads/ee776c1a-210f-4fc1-b8c1-6958a29adaca.png',
      alt: 'Elegant dining setup at Eleven Restaurant',
      title: 'FINE DINING',
      subtitle: 'Discover our unique offerings and experience the Eleven difference.',
      ctaText: 'Learn More',
      buttonText: 'Explore'
    },
    {
      image: '/lovable-uploads/4f1acefa-a25a-453d-8979-e2163fc0a5dc.png',
      alt: 'Luxury interior with green wall at Eleven Lounge',
      title: 'LUXURY LOUNGE',
      subtitle: 'Discover our unique offerings and experience the Eleven difference.',
      ctaText: 'Learn More',
      buttonText: 'Explore'
    },
    {
      image: '/lovable-uploads/d4bc3f93-63d2-44d7-844c-398cae6561ca.png',
      alt: 'Cocktail toast at Eleven bar in Savanna-la-Mar',
      title: 'UNFORGETTABLE MOMENTS',
      subtitle: 'Discover our unique offerings and experience the Eleven difference.',
      ctaText: 'Learn More',
      buttonText: 'Explore'
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

  const handleSlideAction = (slide: typeof slides[0]) => {
    if (slide.buttonText === 'Reserve') {
      window.open('https://form.typeform.com/to/B36XKi0i', '_self');
    } else {
      // For other slides, you can add specific actions here
      console.log('Explore action for', slide.title);
    }
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
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
            {slides[currentSlide].subtitle}
          </p>
          <Button 
            variant="luxury" 
            size="xl"
            onClick={() => handleSlideAction(slides[currentSlide])}
            className="shadow-luxury"
          >
            {slides[currentSlide].buttonText}
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