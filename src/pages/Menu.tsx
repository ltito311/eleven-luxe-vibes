import Navigation from '@/components/Navigation';
import UniversalSections from '@/components/UniversalSections';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Menu = () => {
  const handlePrivateEventMenu = () => {
    window.open('https://form.typeform.com/to/B36XKi0i', '_self');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-dark relative">
        <div className="absolute inset-0">
          <img
            src="/lovable-uploads/99f3d3ec-aaaf-489c-afa3-75cbb4fd7414.png"
            alt="Delicious pasta dish at Eleven Restaurant"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-overlay"></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Menu
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Authentic Jamaican flavors meet international sophistication
          </p>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <Tabs defaultValue="food" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-12 bg-secondary">
              <TabsTrigger value="food" className="text-lg py-3">Food Menu</TabsTrigger>
              <TabsTrigger value="cocktails" className="text-lg py-3">Cocktails</TabsTrigger>
              <TabsTrigger value="bottles" className="text-lg py-3">Bottle Service</TabsTrigger>
            </TabsList>

            <TabsContent value="food" className="space-y-12">
              {/* Soups & Salads */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Soups & Salads</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-foreground">Soup of the Day</h4>
                      <p className="text-sm text-muted-foreground">Chef's Housemade Jamaican soup</p>
                    </div>
                    
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-foreground">Chef Salad</h4>
                      <p className="text-sm text-muted-foreground">Chef's blend of Lettuce, Tomato and Veggies topped with Ranch Dressing</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-foreground">Mediterranean Salad</h4>
                      <p className="text-sm text-muted-foreground">Diced cucumber | Cherry tomato | Red onions | Feta | Basil | Lemon oil vinaigrette | Olives</p>
                    </div>
                    
                  </div>
                </CardContent>
              </Card>

              {/* Appetizers */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Appetizers</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-foreground">Mozzarella Sticks</h4>
                      <p className="text-sm text-muted-foreground">Stretchy, cheesy, melty mozzarella that's battered and fried</p>
                    </div>
                    
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-foreground">Crispy Chicken Wings</h4>
                      <p className="text-sm text-muted-foreground">Deep fried chicken wings, drenched in BBQ, Jerk or Buffalo Sauce</p>
                    </div>
                    
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-foreground">Coconut Shrimp</h4>
                      <p className="text-sm text-muted-foreground">Seasoned and Breaded Shrimps, Coconut Flakes, served with spicy Dipping Sauce</p>
                    </div>
                    
                  </div>
                </CardContent>
              </Card>

              {/* Entrees */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Entrees</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-6">
                  <div>
                    <h5 className="text-lg font-semibold text-foreground mb-3">Seafood</h5>
                    <div className="space-y-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-foreground">Snapper Fish Fillet</h4>
                          <p className="text-sm text-muted-foreground">Brown Stew, Pimento Escovitch, Pan Seared | Served with one side | Onions | Garlic | Scotch Bonnet</p>
                        </div>
                      </div>
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-foreground">Coconut Curry Shrimp</h4>
                          <p className="text-sm text-muted-foreground">Served with choice of 2 | Jamaican Curry | Spices</p>
                        </div>
                      </div>
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-foreground">Garlic Butter Lobster</h4>
                          <p className="text-sm text-muted-foreground">Covered in Housemade Garlic Butter sauce, broiled in the oven, and finished with fresh squeezed lemon juice</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-lg font-semibold text-foreground mb-3">Chicken & Meat</h5>
                    <div className="space-y-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-foreground">Authentic Jamaican Oxtail</h4>
                          <p className="text-sm text-muted-foreground">Tender Meat Braised in a Rich and Flavorful Gravy, Broad Beans, Butter Beans, Served with a side</p>
                        </div>
                        
                      </div>
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-foreground">Traditional Jamaican Curried Goat</h4>
                          <p className="text-sm text-muted-foreground">Goat Meat Infused with the Flavours of Curry Powder and an array of spices</p>
                        </div>
                        
                      </div>
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-foreground">Honey Garlic Pork Chops</h4>
                          <p className="text-sm text-muted-foreground">Honey Garlic Glaze | Pan Seared Pork Chops</p>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="cocktails" className="space-y-8">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Signature Cocktails</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-foreground">Eleven Again</h4>
                      <p className="text-sm text-muted-foreground">Gold Rum, Fresh Pineapple, Orange Juice, Grenadine</p>
                    </div>
                    
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-foreground">Couples at Eleven</h4>
                      <p className="text-sm text-muted-foreground">Dark Rum, Amaretto, Pineapple Juice, Orange Juice</p>
                    </div>
                    
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-foreground">Classic Cosmo</h4>
                      <p className="text-sm text-muted-foreground">Vodka, Triple Sec, Cranberry Juice, Lime Juice</p>
                    </div>
                    
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-foreground">Purple Rain</h4>
                      <p className="text-sm text-muted-foreground">Vodka, Blue Curaçao, Pineapple Juice, Lime Juice, Grenadine</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-foreground">Long Island</h4>
                      <p className="text-sm text-muted-foreground">White Rum, Vodka, Gin, Triple Sec, Tequila, Lime Juice, Coke</p>
                    </div>
                    
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Frozen Drinks</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-foreground">Pina Colada</h4>
                    </div>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-foreground">Strawberry Daiquiri</h4>
                    </div>
                    
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-foreground">Frozen Bob Marley</h4>
                    </div>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-foreground">Miami Vice</h4>
                    </div>
                    
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="bottles" className="space-y-8">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Premium Spirits</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-6">
                  <div>
                    <h5 className="text-lg font-semibold text-foreground mb-3">Cognac</h5>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-foreground">Hennessy VSOP (750ml)</span>
                        
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-foreground">Remy Martin 1738</span>
                        
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-foreground">Dusse</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-lg font-semibold text-foreground mb-3">Tequila</h5>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-foreground">Don Julio 1942</span>
                        
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-foreground">Clase Azul Rep</span>
                        
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-foreground">Casamigos Blanco</span>
                        
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-lg font-semibold text-foreground mb-3">Champagne</h5>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-foreground">Ace of Spades Gold</span>
                        
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-foreground">Dom Pérignon</span>
                        
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-foreground">Moët & Chandon Rosé Imperial</span>
                        
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground mb-6">
              Menu is subject to availability. All prices are subjected to a 5% service charge.
            </p>
            <Button 
              variant="luxury" 
              size="lg"
              onClick={handlePrivateEventMenu}
            >
              Request Private Event Menu
            </Button>
          </div>
        </div>
      </section>

      <UniversalSections />
      <Footer />
    </div>
  );
};

export default Menu;