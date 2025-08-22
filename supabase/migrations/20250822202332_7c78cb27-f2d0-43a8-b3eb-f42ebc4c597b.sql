-- Enable Row Level Security on pages table
-- This fixes the critical security issue where policies exist but RLS is disabled
ALTER TABLE public.pages ENABLE ROW LEVEL SECURITY;