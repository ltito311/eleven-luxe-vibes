import Navigation from '@/components/Navigation';
import HeroSlideshow from '@/components/HeroSlideshow';
import UniversalSections from '@/components/UniversalSections';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSlideshow />
      
      {/* Interior Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/lovable-uploads/a012c195-668c-4615-9a74-3811184aab0b.png"
                alt="Karaoke performance at Eleven Restaurant and Lounge"
                className="w-full h-auto rounded-lg shadow-luxury"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Where Luxury Meets Authenticity
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Step into an atmosphere where premium ambiance perfectly complements our curated music selection. 
                Our commitment to standout service ensures every moment at Eleven is exceptional.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From intimate dinners to celebratory gatherings, our sophisticated space provides 
                the perfect backdrop for life's most memorable moments.
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

export default Home;