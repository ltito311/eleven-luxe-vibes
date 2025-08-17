import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

// Type definitions for CMS data
interface CMSPage {
  id: string;
  title: string;
  slug: string;
  sections?: CMSSection[];
}

interface CMSSection {
  id: string;
  name: string;
  position: number;
  background_color?: string;
  background_image?: string;
  padding_top?: number;
  padding_bottom?: number;
  components?: CMSComponent[];
}

interface CMSComponent {
  id: string;
  type: string;
  content: any;
  styles: any;
  position: number;
}

interface MenuCategory {
  id: string;
  name: string;
  description?: string;
  menu_items?: MenuItem[];
}

interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price?: number;
  image_url?: string;
  position: number;
}

interface Event {
  id: string;
  title: string;
  description?: string;
  date: string;
  start_time?: string;
  end_time?: string;
  location?: string;
  image_url?: string;
}

interface Testimonial {
  id: string;
  name: string;
  quote: string;
}

interface SiteSettings {
  id: string;
  key: string;
  value: any;
}

// Hook to fetch page data with sections and components
export const usePage = (slug: string) => {
  return useQuery<CMSPage | null>({
    queryKey: ['page', slug],
    queryFn: async () => {
      const { data, error } = await (supabase as any).rpc('get_page_with_content', { 
        page_slug: slug 
      });

      if (error) throw error;
      return data as CMSPage | null;
    },
  });
};

// Hook to fetch menu data
export const useMenu = () => {
  return useQuery<MenuCategory[]>({
    queryKey: ['menu'],
    queryFn: async () => {
      const { data, error } = await (supabase as any).rpc('get_menu_with_items');

      if (error) throw error;
      return (data || []) as MenuCategory[];
    },
  });
};

// Hook to fetch events
export const useEvents = () => {
  return useQuery<Event[]>({
    queryKey: ['events'],
    queryFn: async () => {
      const { data, error } = await (supabase as any).rpc('get_upcoming_events');

      if (error) throw error;
      return (data || []) as Event[];
    },
  });
};

// Hook to fetch testimonials
export const useTestimonials = () => {
  return useQuery<Testimonial[]>({
    queryKey: ['testimonials'],
    queryFn: async () => {
      const { data, error } = await (supabase as any).rpc('get_testimonials');

      if (error) throw error;
      return (data || []) as Testimonial[];
    },
  });
};

// Hook to fetch site settings
export const useSiteSettings = () => {
  return useQuery<SiteSettings[]>({
    queryKey: ['site-settings'],
    queryFn: async () => {
      const { data, error } = await (supabase as any).rpc('get_site_settings');

      if (error) throw error;
      return (data || []) as SiteSettings[];
    },
  });
};