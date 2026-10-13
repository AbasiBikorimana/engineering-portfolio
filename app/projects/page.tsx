import { PageHeading } from '@/components/ui';
import { ProjectFilter } from '@/components/project-filter';
export const metadata={title:'Projects',description:'Engineering case studies in lunar rover systems, GLSL shaders, Unity GPU programming, Unreal C++, and robotics.'};
export default function Projects(){return <div className="page-container"><PageHeading label="01 / PROJECT INDEX" title="Ideas, implemented." text="A growing collection of engineering projects and experiments. Explore the objective, my contribution, and the current state of each."/><ProjectFilter/><p className="index-note">Project artwork is conceptual. Actual screenshots, source links, and measured results are included only where available.</p></div>}
