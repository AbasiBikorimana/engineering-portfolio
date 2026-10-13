import Link from 'next/link';
import { Diagram } from './diagram';
import type { Project } from '@/content/projects';
export function Arrow({ diagonal = false }: { diagonal?: boolean }) { return <span aria-hidden="true">{diagonal ? '↗' : '→'}</span>; }
export function SectionHeading({ number, title, text }: { number: string; title: string; text?: string }) { return <div className="section-heading"><span className="eyebrow">{number} /</span><div><h2>{title}</h2>{text&&<p>{text}</p>}</div></div>; }
export function PageHeading({ label, title, text }: { label: string; title: string; text: string }) { return <header className="page-heading"><p className="eyebrow">{label}</p><h1>{title}</h1><p className="lead">{text}</p></header>; }
export function ProjectCard({ project: p, large = false }: { project: Project; large?: boolean }) { return <article className={`project-card ${large?'large-card':''}`}>
 <Link href={`/projects/${p.slug}/`} className="project-visual" tabIndex={-1} aria-hidden="true"><span className="visual-index">{p.number} / {p.category.toUpperCase()}</span><Diagram kind={p.slug}/><span className="visual-caption">CONCEPT ILLUSTRATION</span></Link>
 <div className="project-copy"><div className="project-meta"><span>{p.category}</span><span className={`status ${p.status==='Program completed'?'completed':''}`}><i/>{p.status}</span></div><h3><Link href={`/projects/${p.slug}/`}>{p.shortTitle}<Arrow diagonal/></Link></h3><p>{p.summary}</p><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div></div>
 </article>; }
