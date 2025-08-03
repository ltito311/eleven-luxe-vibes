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
      subtitle: 'Luxury meets authenticity.',
      ctaText: 'Reserve your place today',
      buttonText: 'Reserve'
    },
    {
      image: '/lovable-uploads/40a3c542-300b-4b7a-8a16-b13de1e21e98.png',
      alt: 'Signature cocktails at Eleven Restaurant',
      title: 'SIGNATURE COCKTAILS',
      subtitle: 'Luxury meets authenticity.',
      ctaText: 'Learn More',
      buttonText: 'Explore'
    },
    {
      image: '/lovable-uploads/8d494d39-a79a-4e5d-8ef3-03c96ce43fd0.png',
      alt: 'Elegant dining setup at Eleven Restaurant',
      title: 'FINE DINING',
      subtitle: 'Luxury meets authenticity.',
      ctaText: 'Learn More',
      buttonText: 'Explore'
    },
    {
      image: '/lovable-uploads/ca3b7cea-4f05-4b60-8bf0-0048e0335bec.png',
      alt: 'Food and drinks at Eleven Restaurant',
      title: 'CULINARY EXCELLENCE',
      subtitle: 'Luxury meets authenticity.',
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
      <div className="absolute bottom-8 left-8 z-10 max-w-md">
        <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 text-left">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-3 font-poppins tracking-tight">
            {slides[currentSlide].title}
          </h1>
          <p className="text-sm md:text-base text-white/90 mb-6 font-light leading-relaxed">
            {slides[currentSlide].subtitle}
          </p>
          <Button 
            variant="luxury" 
            size="lg"
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