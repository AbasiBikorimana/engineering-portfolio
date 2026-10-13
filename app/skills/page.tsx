import { PageHeading } from '@/components/ui';
import { skills } from '@/content/profile';
import Link from 'next/link';
export const metadata={title:'Skills',description:'Programming, graphics, simulation, CAD, embedded systems, and developer tools used or explored in Abasi’s work.'};
export default function Skills(){return <div className="page-container"><PageHeading label="03 / TECHNICAL TOOLKIT" title="Tools behind the ideas." text="Languages, tools, and technical areas used or explored in my projects. The case studies provide context for the work behind each."/><div className="skills-grid">{skills.map((s,i)=><section key={s.title} className="skill-group"><p className="eyebrow">{String(i+1).padStart(2,'0')} /</p><h2>{s.title}</h2><ul>{s.items.map(item=><li key={item}>{item}</li>)}</ul></section>)}</div><div className="inline-cta"><p>See how these tools fit into the actual work.</p><Link href="/projects/" className="button">Explore projects →</Link></div></div>}
