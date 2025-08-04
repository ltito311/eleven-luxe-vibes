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
                src="/lovable-uploads/46dc8132-34b1-4396-96bf-4335d52f05cb.png"
                alt="Eleven Restaurant branded beverages and takeout bags"
                className="w-full h-auto rounded-lg shadow-luxury"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Where Luxury Meets Authenticity
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Born from necessity, built with passion. Eleven exists because Savanna-la-Mar deserved better. We're not just serving food – we're serving the experience this town has been missing.
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