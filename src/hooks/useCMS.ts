import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

// Hook to fetch page data with sections and components
export const usePage = (slug: string) => {
  return useQuery({
    queryKey: ['page', slug],
    queryFn: async () => {
      const { data: page, error: pageError } = await supabase.rpc('get_page_with_content', { 
        page_slug: slug 
      } as any);

      if (pageError) throw pageError;
      return page;
    },
  });
};

// Hook to fetch menu data
export const useMenu = () => {
  return useQuery({
    queryKey: ['menu'],
    queryFn: async () => {
      const { data, error } = await supabase.rpc('get_menu_with_items' as any);

      if (error) throw error;
      return data;
    },
  });
};

// Hook to fetch events
export const useEvents = () => {
  return useQuery({
    queryKey: ['events'],
    queryFn: async () => {
      const { data, error } = await supabase.rpc('get_upcoming_events' as any);

      if (error) throw error;
      return data;
    },
  });
};

// Hook to fetch testimonials
export const useTestimonials = () => {
  return useQuery({
    queryKey: ['testimonials'],
    queryFn: async () => {
      const { data, error } = await supabase.rpc('get_testimonials' as any);

      if (error) throw error;
      return data;
    },
  });
};

// Hook to fetch site settings
export const useSiteSettings = () => {
  return useQuery({
    queryKey: ['site-settings'],
    queryFn: async () => {
      const { data, error } = await supabase.rpc('get_site_settings' as any);

      if (error) throw error;
      return data;
    },
  });
};