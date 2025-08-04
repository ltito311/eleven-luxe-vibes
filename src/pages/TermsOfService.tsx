import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-dark">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Terms and conditions for using our services
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-lg p-8 border border-border">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">1. Use of Website</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    You may use this website for personal, non-commercial purposes such as browsing, 
                    making reservations, or contacting us. You agree not to use this site for any 
                    unlawful or harmful purposes.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">2. Reservations</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    All reservations are subject to availability and confirmation. We reserve the right 
                    to cancel or modify reservations at our discretion.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">3. Content Ownership</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    All text, images, logos, and content on this site are the property of Eleven 
                    Restaurant & Lounge. You may not reproduce or distribute them without permission.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">4. Limitation of Liability</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We strive to provide accurate and up-to-date information, but we do not guarantee 
                    its completeness. We are not liable for any direct or indirect losses resulting 
                    from your use of this site.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">5. Changes to Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may revise these Terms at any time. Continued use of the site means you accept 
                    any changes.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">6. Contact</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    For any questions regarding these Terms, contact us at (876) 223-9926.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Last updated: January 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfService;