import Navigation from '@/components/Navigation';
import UniversalSections from '@/components/UniversalSections';
import Footer from '@/components/Footer';
import { Clock, MapPin } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const About = () => {
  const { ref: storyRef, isVisible: storyVisible } = useScrollAnimation();
  const { ref: hoursRef, isVisible: hoursVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-dark relative">
        <div className="absolute inset-0">
          <img
            src="/lovable-uploads/22ec8063-0870-4529-b074-b1736f81aa32.png"
            alt="Eleven Restaurant exterior at night"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-overlay"></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About Eleven
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            A culinary destination where Jamaican tradition meets modern sophistication
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-background">
        <div ref={storyRef} className={`container mx-auto px-6 transition-all duration-1000 ${storyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/lovable-uploads/0156515c-8ba6-4499-9fd1-445df9cf8a8c.png"
                alt="Eleven Restaurant exterior at night in Savanna-la-Mar"
                className="w-full h-auto rounded-lg shadow-luxury"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Why We Exist: Simple: Savanna-la-Mar needed a place where quality meets convenience. No more compromising on your dining experience just because you live in a smaller town.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Hours Section */}
      <section className="py-20 bg-secondary">
        <div ref={hoursRef} className={`container mx-auto px-6 transition-all duration-1000 delay-200 ${hoursVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-foreground mb-12">
              Operating Hours
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card rounded-lg p-8 border border-border">
                <div className="flex items-center mb-4">
                  <Clock className="text-primary mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-foreground">Dinner Service</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="text-foreground font-medium">11:00 AM - 11:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="text-foreground font-medium">4:00 PM - 11:00 PM</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-lg p-8 border border-border">
                <div className="flex items-center mb-4">
                  <Clock className="text-primary mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-foreground">Additional Hours</h3>
                </div>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Operating hours may vary during holidays and special events. Please call ahead to confirm availability.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <div className="flex items-center justify-center mb-4">
                <MapPin className="text-primary mr-2" size={20} />
                <span className="text-muted-foreground">1 Beckford Street, Savanna-la-Mar, Jamaica</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Reservations recommended • Walk-ins welcome based on availability
              </p>
            </div>
          </div>
        </div>
      </section>

      <UniversalSections />
      <Footer />
    </div>
  );
};

export default About;