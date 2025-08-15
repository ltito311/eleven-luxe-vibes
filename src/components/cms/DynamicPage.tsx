import React from 'react';
import { usePage } from '@/hooks/useCMS';
import DynamicSection from './DynamicSection';

interface DynamicPageProps {
  slug: string;
}

const DynamicPage: React.FC<DynamicPageProps> = ({ slug }) => {
  const { data: page, isLoading, error } = usePage(slug);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error || !page) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Page Not Found</h1>
          <p className="text-muted-foreground">The page you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {page?.sections
        ?.sort((a: any, b: any) => a.position - b.position)
        .map((section: any) => (
          <DynamicSection key={section.id} section={section} />
        ))}
    </div>
  );
};

export default DynamicPage;