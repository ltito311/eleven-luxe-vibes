import React from 'react';
import DynamicComponent from './DynamicComponent';

interface DynamicSectionProps {
  section: {
    id: string;
    name: string;
    background_color?: string;
    background_image?: string;
    padding_top?: number;
    padding_bottom?: number;
    components?: any[];
  };
}

const DynamicSection: React.FC<DynamicSectionProps> = ({ section }) => {
  const sectionStyle: React.CSSProperties = {
    backgroundColor: section.background_color || undefined,
    backgroundImage: section.background_image 
      ? `url(${section.background_image})` 
      : undefined,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    paddingTop: section.padding_top ? `${section.padding_top}px` : undefined,
    paddingBottom: section.padding_bottom ? `${section.padding_bottom}px` : undefined,
  };

  return (
    <section style={sectionStyle} className="relative">
      {section.background_image && (
        <div className="absolute inset-0 bg-black/20" />
      )}
      
      <div className="relative z-10 container mx-auto px-6">
        {section.components
          ?.sort((a: any, b: any) => a.position - b.position)
          .map((component: any) => (
            <DynamicComponent key={component.id} component={component} />
          ))}
      </div>
    </section>
  );
};

export default DynamicSection;