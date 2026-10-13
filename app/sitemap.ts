import type { MetadataRoute } from 'next';
import { projects } from '@/content/projects';
export const dynamic='force-static';
export default function sitemap():MetadataRoute.Sitemap{const base=process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/,'');if(!base)return [];return ['','projects','experience','skills','about','contact',...projects.map(p=>`projects/${p.slug}`)].map(path=>({url:`${base}/${path}${path?'/':''}`}));}
