import Link from 'next/link';
import Image from 'next/image';
import { Diagram } from './diagram';
import type { Project } from '@/content/projects';
export function Arrow({ diagonal = false }: { diagonal?: boolean }) { return <span aria-hidden="true">{diagonal ? '↗' : '→'}</span>; }
export function SectionHeading({ number, title, text }: { number: string; title: string; text?: string }) { return <div className="section-heading"><span className="eyebrow">{number} /</span><div><h2>{title}</h2>{text&&<p>{text}</p>}</div></div>; }
export function PageHeading({ label, title, text }: { label: string; title: string; text: string }) { return <header className="page-heading"><p className="eyebrow">{(label.split(' / ').slice(1).join(' / ')||label).toLowerCase()}</p><h1>{title}</h1><p className="lead">{text}</p></header>; }
export function ProjectCard({ project: p, large = false }: { project: Project; large?: boolean }) { return <article className={`project-card ${large?'large-card':''}`}>
 <Link href={`/projects/${p.slug}/`} className="project-visual" tabIndex={-1} aria-hidden="true"><>{p.images[0]?<Image src={p.images[0].src} alt={p.images[0].alt} width={p.images[0].width} height={p.images[0].height} sizes="(max-width: 760px) 100vw, 50vw"/>:<><Diagram kind={p.slug}/><span className="visual-caption">Concept illustration</span></>}</></Link>
 <div className="project-copy"><div className="project-meta"><span>{p.category}</span><span className={`status ${p.status==='Program completed'?'completed':''}`}><i/>{p.status}</span></div><h3><Link href={`/projects/${p.slug}/`}>{p.shortTitle}<Arrow diagonal/></Link></h3><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div><p>{p.summary}</p></div>
 </article>; }
