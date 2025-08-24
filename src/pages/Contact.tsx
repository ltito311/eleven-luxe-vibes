import Navigation from '@/components/Navigation';
import UniversalSections from '@/components/UniversalSections';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, Instagram, MapPin, Clock } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Contact = () => {
  const { ref: contactRef, isVisible: contactVisible } = useScrollAnimation();
  const { ref: mapRef, isVisible: mapVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  const handleReservation = () => {
    window.open('https://form.typeform.com/to/B36XKi0i', '_self');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-dark relative">
        <div className="absolute inset-0">
          <img
            src="/lovable-uploads/011ba197-5594-445d-b0cd-c0daf25fb9d9.png"
            alt="Eleven Restaurant exterior at night with beautiful lighting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-overlay"></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Get in touch for reservations, events, or any inquiries
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-background">
        <div ref={contactRef} className={`container mx-auto px-6 transition-all duration-500 ease-out ${contactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Contact Form */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">Name</Label>
                  <Input 
                    id="name" 
                    placeholder="Your full name" 
                    className="bg-input border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your.email@example.com" 
                    className="bg-input border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your inquiry, event, or special requests..." 
                    rows={6}
                    className="bg-input border-border resize-none"
                  />
                </div>
                <Button variant="luxury" size="lg" className="w-full">
                  Send Message
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  This is a placeholder form. For actual reservations, please use our booking system below.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Get in Touch</h3>
                  <div className="flex gap-4 mb-6">
                    <Button 
                      variant="luxury" 
                      size="lg"
                      onClick={handleReservation}
                      className="flex-1"
                    >
                      Book Now
                    </Button>
                    <Button 
                      variant="luxury" 
                      size="lg"
                      onClick={() => window.open('tel:+18762239926')}
                      className="flex-1"
                    >
                      Give Us a Call
                    </Button>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="text-primary flex-shrink-0" size={20} />
                      <div>
                        <p className="text-foreground font-medium">Phone</p>
                        <p className="text-muted-foreground">+1 (876) 223-9926</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="text-primary flex-shrink-0" size={20} />
                      <div>
                        <p className="text-foreground font-medium">Email</p>
                        <p className="text-muted-foreground">elevenreservations@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Instagram className="text-primary flex-shrink-0" size={20} />
                      <div>
                        <p className="text-foreground font-medium">Instagram</p>
                        <a 
                          href="https://www.instagram.com/elevenwess?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors duration-300"
                        >
                          @elevenwess
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="text-primary flex-shrink-0" size={20} />
                      <div>
                        <p className="text-foreground font-medium">Address</p>
                        <p className="text-muted-foreground">1 Beckford Street<br />Savanna-la-Mar, Jamaica</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="text-primary" size={20} />
                    <h3 className="text-xl font-semibold text-foreground">Operating Hours</h3>
                  </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Saturday</span>
                        <span className="text-foreground">11:00 AM - 11:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Sunday</span>
                        <span className="text-foreground">4:00 PM - 11:00 PM</span>
                      </div>
                    </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-secondary">
        <div ref={mapRef} className={`container mx-auto px-6 transition-all duration-500 ease-out delay-100 ${mapVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Visit Us
            </h2>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin size={20} />
              <span>1 Beckford Street, Savanna-la-Mar, Jamaica</span>
            </div>
          </div>
          <div className="max-w-4xl mx-auto h-96 bg-muted rounded-lg overflow-hidden shadow-luxury">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.8647384982567!2d-78.12345678901234!3d18.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDA3JzI0LjQiTiA3OMKwMDcnMjQuNCJX!5e0!3m2!1sen!2s!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Eleven Restaurant & Lounge Location - Savanna-la-Mar, Jamaica"
            />
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="py-20 bg-gradient-dark text-center">
        <div ref={ctaRef} className={`container mx-auto px-6 transition-all duration-500 ease-out delay-150 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Dine with Us?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Secure your table for an unforgettable culinary experience at Eleven Restaurant & Lounge.
          </p>
          <Button 
            variant="luxury" 
            size="xl"
            onClick={handleReservation}
            className="shadow-luxury"
          >
            Reserve Now
          </Button>
        </div>
      </section>

      <UniversalSections />
      <Footer />
    </div>
  );
};

export default Contact;