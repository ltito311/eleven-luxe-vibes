-- Create the cms schema
CREATE SCHEMA IF NOT EXISTS cms;

-- Create pages table
CREATE TABLE cms.pages (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    slug TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    meta_title TEXT,
    meta_description TEXT,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create sections table
CREATE TABLE cms.sections (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    page_id UUID NOT NULL REFERENCES cms.pages(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    position INTEGER NOT NULL DEFAULT 0,
    background_color TEXT,
    background_image TEXT,
    padding_top INTEGER DEFAULT 0,
    padding_bottom INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create components table
CREATE TABLE cms.components (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    section_id UUID NOT NULL REFERENCES cms.sections(id) ON DELETE CASCADE,
    type TEXT NOT NULL, -- 'text', 'image', 'button', 'menu_item', 'form'
    content JSONB NOT NULL DEFAULT '{}',
    styles JSONB NOT NULL DEFAULT '{}',
    position INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create assets table
CREATE TABLE cms.assets (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    file_url TEXT NOT NULL,
    alt_text TEXT,
    type TEXT NOT NULL, -- 'image', 'video'
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create menu_categories table
CREATE TABLE cms.menu_categories (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    position INTEGER NOT NULL DEFAULT 0
);

-- Create menu_items table
CREATE TABLE cms.menu_items (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    category_id UUID NOT NULL REFERENCES cms.menu_categories(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    description TEXT,
    price NUMERIC(10,2),
    image_url TEXT,
    position INTEGER NOT NULL DEFAULT 0
);

-- Create events table
CREATE TABLE cms.events (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    date DATE NOT NULL,
    start_time TIME,
    end_time TIME,
    location TEXT,
    image_url TEXT
);

-- Create testimonials table
CREATE TABLE cms.testimonials (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    quote TEXT NOT NULL,
    position INTEGER NOT NULL DEFAULT 0
);

-- Create site_settings table
CREATE TABLE cms.site_settings (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    site_name TEXT,
    primary_color TEXT,
    secondary_color TEXT,
    font_family TEXT,
    logo_url TEXT,
    favicon_url TEXT,
    custom_css TEXT,
    custom_js TEXT
);

-- Create indexes for better performance
CREATE INDEX idx_pages_slug ON cms.pages(slug);
CREATE INDEX idx_sections_page_id_position ON cms.sections(page_id, position);
CREATE INDEX idx_components_section_id_position ON cms.components(section_id, position);
CREATE INDEX idx_menu_categories_position ON cms.menu_categories(position);
CREATE INDEX idx_menu_items_category_id_position ON cms.menu_items(category_id, position);
CREATE INDEX idx_testimonials_position ON cms.testimonials(position);

-- Create update timestamp triggers
CREATE OR REPLACE FUNCTION cms.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_pages_updated_at
    BEFORE UPDATE ON cms.pages
    FOR EACH ROW
    EXECUTE FUNCTION cms.update_updated_at_column();

CREATE TRIGGER update_sections_updated_at
    BEFORE UPDATE ON cms.sections
    FOR EACH ROW
    EXECUTE FUNCTION cms.update_updated_at_column();

CREATE TRIGGER update_components_updated_at
    BEFORE UPDATE ON cms.components
    FOR EACH ROW
    EXECUTE FUNCTION cms.update_updated_at_column();

-- Enable Row Level Security (RLS) for public read access
ALTER TABLE cms.pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE cms.sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE cms.components ENABLE ROW LEVEL SECURITY;
ALTER TABLE cms.assets ENABLE ROW LEVEL SECURITY;
ALTER TABLE cms.menu_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE cms.menu_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE cms.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE cms.testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE cms.site_settings ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Public read access" ON cms.pages FOR SELECT USING (true);
CREATE POLICY "Public read access" ON cms.sections FOR SELECT USING (true);
CREATE POLICY "Public read access" ON cms.components FOR SELECT USING (true);
CREATE POLICY "Public read access" ON cms.assets FOR SELECT USING (true);
CREATE POLICY "Public read access" ON cms.menu_categories FOR SELECT USING (true);
CREATE POLICY "Public read access" ON cms.menu_items FOR SELECT USING (true);
CREATE POLICY "Public read access" ON cms.events FOR SELECT USING (true);
CREATE POLICY "Public read access" ON cms.testimonials FOR SELECT USING (true);
CREATE POLICY "Public read access" ON cms.site_settings FOR SELECT USING (true);

-- Enable realtime for instant updates
ALTER PUBLICATION supabase_realtime ADD TABLE cms.pages;
ALTER PUBLICATION supabase_realtime ADD TABLE cms.sections;
ALTER PUBLICATION supabase_realtime ADD TABLE cms.components;
ALTER PUBLICATION supabase_realtime ADD TABLE cms.assets;
ALTER PUBLICATION supabase_realtime ADD TABLE cms.menu_categories;
ALTER PUBLICATION supabase_realtime ADD TABLE cms.menu_items;
ALTER PUBLICATION supabase_realtime ADD TABLE cms.events;
ALTER PUBLICATION supabase_realtime ADD TABLE cms.testimonials;
ALTER PUBLICATION supabase_realtime ADD TABLE cms.site_settings;