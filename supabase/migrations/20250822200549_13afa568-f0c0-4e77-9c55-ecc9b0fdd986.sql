-- Enable Row Level Security on image_gallery table
ALTER TABLE public.image_gallery ENABLE ROW LEVEL SECURITY;

-- Allow public read access to view gallery images
CREATE POLICY "Public can view gallery images" 
ON public.image_gallery 
FOR SELECT 
USING (true);

-- Allow authenticated users to manage gallery images
CREATE POLICY "Authenticated users can insert gallery images" 
ON public.image_gallery 
FOR INSERT 
TO authenticated
WITH CHECK (true);

CREATE POLICY "Authenticated users can update gallery images" 
ON public.image_gallery 
FOR UPDATE 
TO authenticated
USING (true)
WITH CHECK (true);

CREATE POLICY "Authenticated users can delete gallery images" 
ON public.image_gallery 
FOR DELETE 
TO authenticated
USING (true);