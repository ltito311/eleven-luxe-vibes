import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Quote, Star, MapPin, Instagram } from 'lucide-react';
import InstagramFeed from './InstagramFeed';

const UniversalSections = () => {
  const handleReservation = () => {
    window.open('https://form.typeform.com/to/B36XKi0i', '_self');
  };

  const featureCards = [
    {
      image: '/lovable-uploads/17941b00-ca86-4e4c-8639-4115a95ae8a7.png',
      title: 'What You Came For:',
      description: 'Island approved chef certified.'
    },
    {
      image: '/lovable-uploads/748e6f00-ba22-4159-8b64-c8ad15cb16b2.png',
      title: 'OUR SIGNATURE COCKTAILS:',
      description: 'The perfect complement to every conversation. Strong enough for business talk, smooth enough for celebration, creative enough to keep things interesting.'
    },
    {
      image: '/lovable-uploads/4e50d1e1-d5c0-4aac-afda-f32c6831604c.png',
      title: 'BAR AND LOUNGE:',
      description: 'Where comfort meets sophistication. An environment that works for your 3pm meeting and your 9pm celebration. Quality space for quality people.'
    },
    {
      image: '/lovable-uploads/df2e13fe-7905-4aa9-8a2a-a1909af42216.png',
      title: 'Karaoke on Sunday Night',
      description: 'Join us for a relaxed Sunday evening filled with great music and good company. Sing your heart out!'
    },
  ];

  const testimonials = [
    "The ambiance was incredible, and the service was top-notch. A truly memorable evening!",
    "Outstanding food quality and exceptional cocktails. Worth every visit.",
    "Perfect atmosphere for special occasions. The staff exceeded all expectations."
  ];

  return (
    <>
      {/* Feature Cards Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">
            Experience at Eleven
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featureCards.map((card, index) => (
              <Card key={index} className="bg-card border-border overflow-hidden group hover:shadow-luxury transition-all duration-500">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Preview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Follow Us
            </h2>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Instagram size={24} />
              <span className="text-lg">@elevenwess</span>
            </div>
          </div>
          <InstagramFeed />
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">
            What Our Guests Say
          </h2>
          <div className="max-w-4xl mx-auto">
            <script src="https://static.elfsight.com/platform/platform.js" async></script>
            <div className="elfsight-app-a7ef7f22-e0ff-4648-80b1-4a8c2a369055" data-elfsight-app-lazy></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-dark text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready for an Unforgettable Experience?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join us for an evening of exceptional dining, craft cocktails, and sophisticated ambiance.
          </p>
          <Button 
            variant="luxury" 
            size="xl"
            onClick={handleReservation}
            className="shadow-luxury"
          >
            Book Your Experience
          </Button>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Find Us
            </h2>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin size={20} />
              <span>1 Beckford Street, Savanna-la-Mar, Jamaica</span>
            </div>
          </div>
          <div className="max-w-4xl mx-auto h-96 bg-muted rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3202.4210798482045!2d-78.1325803!3d18.227660399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ed96fb25e195171%3A0x3db6dcad7cdeb3e8!2sEleven%20Restaurant%20and%20Lounge!5e1!3m2!1sen!2sjm!4v1754214087527!5m2!1sen!2sjm" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Eleven Restaurant & Lounge Location"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default UniversalSections;