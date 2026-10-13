'use client';
import { useState } from 'react';
import { projects } from '@/content/projects';
import { ProjectCard } from './ui';
const filters=['All projects','Graphics','Aerospace','Simulation','Robotics'];
export function ProjectFilter(){const [selected,setSelected]=useState('All projects');const items=projects.filter(p=>selected==='All projects'||p.category===selected);return <><div className="filter-bar" role="group" aria-label="Filter projects by discipline">{filters.map(f=><button key={f} onClick={()=>setSelected(f)} aria-pressed={f===selected}>{f}{f==='All projects'&&<span>{String(projects.length).padStart(2,'0')}</span>}</button>)}</div><p className="sr-only" aria-live="polite">Showing {items.length} {items.length===1?'project':'projects'}</p><div className="project-grid">{items.map(p=><ProjectCard key={p.slug} project={p}/>)}</div></>}
