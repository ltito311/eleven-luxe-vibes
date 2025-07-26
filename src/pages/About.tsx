import Navigation from '@/components/Navigation';
import UniversalSections from '@/components/UniversalSections';
import Footer from '@/components/Footer';
import { Clock, MapPin } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-dark">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            About Eleven
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A culinary destination where Jamaican tradition meets modern sophistication
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/lovable-uploads/2bbfff28-4ccd-4c6c-9af3-90df9be53630.png"
                alt="Eleven Restaurant exterior at night in Savanna-la-Mar"
                className="w-full h-auto rounded-lg shadow-luxury"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Born from a passion for authentic Jamaican cuisine and contemporary dining experiences, 
                Eleven Restaurant & Lounge has become Westmoreland's premier destination for discerning food lovers.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Located in the vibrant heart of Savanna-la-Mar, we draw inspiration from Jamaica's rich culinary 
                heritage while embracing international influences. Our upscale concept celebrates local ingredients, 
                traditional techniques, and innovative presentation.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every dish tells a story, every cocktail is crafted with precision, and every evening 
                promises an unforgettable journey through taste, culture, and hospitality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Hours Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
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
                    <span className="text-muted-foreground">Wednesday - Saturday</span>
                    <span className="text-foreground font-medium">5:00 PM - 2:00 AM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Monday - Tuesday</span>
                    <span className="text-foreground font-medium">Closed</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-lg p-8 border border-border">
                <div className="flex items-center mb-4">
                  <Clock className="text-primary mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-foreground">Sunday Brunch</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="text-foreground font-medium">11:00 AM - 4:00 PM</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Enjoy our special brunch menu featuring Jamaican classics and international favorites
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