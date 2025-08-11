import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface DynamicComponentProps {
  component: {
    id: string;
    type: string;
    content: any;
    styles: any;
  };
}

const DynamicComponent: React.FC<DynamicComponentProps> = ({ component }) => {
  const { type, content, styles } = component;

  // Apply dynamic styles
  const componentStyle: React.CSSProperties = {
    fontSize: styles.fontSize || undefined,
    color: styles.color || undefined,
    textAlign: styles.textAlign || undefined,
    fontWeight: styles.fontWeight || undefined,
    margin: styles.margin || undefined,
    padding: styles.padding || undefined,
    ...styles.customCSS || {},
  };

  const renderComponent = () => {
    switch (type) {
      case 'text':
        return (
          <div style={componentStyle} className={styles.className}>
            {content.tag === 'h1' && <h1>{content.text}</h1>}
            {content.tag === 'h2' && <h2>{content.text}</h2>}
            {content.tag === 'h3' && <h3>{content.text}</h3>}
            {content.tag === 'p' && <p>{content.text}</p>}
            {!content.tag && <p>{content.text}</p>}
          </div>
        );

      case 'image':
        return (
          <div style={componentStyle} className={styles.className}>
            <img
              src={content.src}
              alt={content.alt || ''}
              style={{
                width: content.width || '100%',
                height: content.height || 'auto',
                objectFit: content.objectFit || 'cover',
              }}
              className="rounded-lg"
            />
          </div>
        );

      case 'button':
        return (
          <div style={componentStyle} className={styles.className}>
            <Button
              variant={content.variant || 'default'}
              size={content.size || 'default'}
              onClick={() => {
                if (content.href) {
                  window.open(content.href, content.target || '_self');
                }
              }}
            >
              {content.text}
            </Button>
          </div>
        );

      case 'card':
        return (
          <Card style={componentStyle} className={styles.className}>
            <CardContent className="p-6">
              {content.title && <h3 className="text-lg font-semibold mb-2">{content.title}</h3>}
              {content.description && <p className="text-muted-foreground">{content.description}</p>}
              {content.image && (
                <img 
                  src={content.image} 
                  alt={content.alt || content.title || ''} 
                  className="w-full h-48 object-cover rounded-lg mt-4"
                />
              )}
            </CardContent>
          </Card>
        );

      case 'grid':
        return (
        <div 
          className={`grid gap-6 ${styles.className}`}
          style={{
            ...componentStyle,
            gridTemplateColumns: content.columns || 'repeat(auto-fit, minmax(300px, 1fr))',
          }}
        >
            {content.items?.map((item: any, index: number) => (
              <DynamicComponent 
                key={index} 
                component={{ 
                  id: `${component.id}-${index}`, 
                  type: item.type || 'card',
                  content: item,
                  styles: item.styles || {}
                }} 
              />
            ))}
          </div>
        );

      default:
        return (
          <div style={componentStyle} className={styles.className}>
            <p>Unknown component type: {type}</p>
          </div>
        );
    }
  };

  return renderComponent();
};

export default DynamicComponent;