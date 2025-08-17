import React from 'react';
import { useMenu } from '@/hooks/useCMS';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const DynamicMenu: React.FC = () => {
  const { data: menuCategories, isLoading, error } = useMenu();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error || !menuCategories || !Array.isArray(menuCategories) || menuCategories.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-muted-foreground">Menu not available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Menu</h2>
          <p className="text-lg text-muted-foreground">Discover our culinary offerings</p>
        </div>

        <Tabs defaultValue={menuCategories[0]?.id} className="w-full">
          <TabsList className="grid w-full mb-8" style={{ gridTemplateColumns: `repeat(${menuCategories.length}, minmax(0, 1fr))` }}>
            {menuCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {menuCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-foreground mb-2">{category.name}</h3>
                {category.description && (
                  <p className="text-muted-foreground">{category.description}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.menu_items
                  ?.sort((a, b) => a.position - b.position)
                  .map((item) => (
                    <Card key={item.id}>
                      {item.image_url && (
                        <div className="aspect-video overflow-hidden rounded-t-lg">
                          <img
                            src={item.image_url}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg">{item.name}</CardTitle>
                          {item.price && (
                            <span className="text-xl font-bold text-primary">
                              ${item.price}
                            </span>
                          )}
                        </div>
                      </CardHeader>
                      {item.description && (
                        <CardContent>
                          <p className="text-muted-foreground">{item.description}</p>
                        </CardContent>
                      )}
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default DynamicMenu;