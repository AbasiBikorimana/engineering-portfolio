export type Discipline = 'Graphics' | 'Aerospace' | 'Simulation' | 'Robotics';
export type Media = { src: string; alt: string; caption: string; width: number; height: number };
export type Project = {
 slug: string; number: string; title: string; shortTitle: string; category: Discipline; status: string;
 summary: string; tags: string[]; overview: string; contributions: string[]; challenges: string[];
 architecture: string[]; outcome: string; next: string[]; source: string;
 repository?: string; images: Media[]; video?: { embedUrl: string; title: string; transcript: string };
};
export const projects: Project[] = [
 {
 slug:'lunar-rover',number:'01',title:'Lunar Rover Systems Engineering',shortTitle:'Lunar rover systems',category:'Aerospace',status:'Program completed',
 summary:'A command and data handling concept for a 14-day mission to the lunar south pole.',
 tags:['Siemens NX','CDH','SpaceWire','CAN'],
 overview:'Within NASA L’SPACE Mission Concept Academy, I contributed to a team’s lunar rover mission concept targeting permanently shadowed regions near the lunar south pole. My focus was the Command & Data Handling subsystem: how onboard computing, data storage, and communication interfaces support a 14-day mission.',
 contributions:['Developed the Command & Data Handling subsystem concept.', 'Performed trade studies covering onboard computing, data storage, internal communications, telemetry, and relay communications.', 'Selected a GR740-based computing architecture.', 'Developed subsystem requirements, interface documentation, and hardware layouts for integration into the team’s Preliminary Design Review.'],
 challenges:['Evaluate computing and communication options against the needs of the mission concept.', 'Keep subsystem requirements, interfaces, and physical layouts consistent with the team’s overall design.'],
 architecture:['GR740-based onboard computing formed the proposed computing architecture.', 'SpaceWire and CAN were part of the internal communication architecture work.', 'Subsystem requirements, documentation, and CAD layouts supported integration into the team’s Preliminary Design Review.'],
 outcome:'The educational program ran from May through August 2026. The documented outcome is a subsystem concept and supporting PDR material. This was a mission design study; no flight hardware or mission execution is claimed.',
 next:['Add approved PDR excerpts and the final interface diagram.', 'Add Siemens NX screenshots with annotations identifying my contributions.', 'Document the final trade-study criteria and personal lessons learned.'],
 source:'Resume: Abasi_Bikorimana_Resume_LSPACE.pdf; project brief supplied by Abasi.',images:[]
 },
 {
 slug:'bloxshade',number:'02',title:'BloxShade — Minecraft Graphics Shader',shortTitle:'BloxShade',category:'Graphics',status:'In development',
 summary:'Exploring procedural clouds, atmospheric fog, and the details of a real-time GLSL pipeline.',
 tags:['GLSL','Iris / Sodium','Procedural rendering'],
 overview:'BloxShade is a custom Minecraft shader project focused on procedural cloud generation, fog, and atmospheric rendering. It is a space to explore how shader code and graphics pipeline configuration combine to produce a real-time image.',
 contributions:['Custom GLSL shader development.', 'Procedural cloud generation and atmospheric fog rendering.', 'Graphics pipeline debugging and optimization work.'],
 challenges:['Make cloud and fog effects work coherently within the Minecraft shader pipeline.', 'Debug pipeline behavior while keeping rendering performance in view.'],
 architecture:['Custom GLSL stages implement the visual effects.', 'The project targets a Minecraft setup using Iris and Sodium.', 'Repository-level pass order and buffer diagrams are pending source review.'],
 outcome:'The supplied brief describes ongoing shader work. Screenshots, benchmarks, release status, and specific optimization outcomes have not been supplied, so no performance gains are claimed.',
 next:['Add the shader repository and version requirements.', 'Capture matching before-and-after screenshots.', 'Record GPU, resolution, settings, and frame times for any performance comparison.'],
 source:'Project brief supplied by Abasi; source code and visual outputs pending.',images:[]
 },
 {
 slug:'unity-compute',number:'03',title:'Unity GPU & Compute Shader Development',shortTitle:'GPU computing in Unity',category:'Graphics',status:'Learning / experiments',
 summary:'GPU instancing and parallel image processing through C#, HLSL, and compute shaders.',
 tags:['Unity','C#','HLSL','Compute shaders'],
 overview:'A collection of Unity graphics programming experiments covering GPU instancing, compute shader development, parallel image processing, and performance analysis.',
 contributions:['Explored GPU instancing in Unity.', 'Developed compute shader experiments for parallel image processing.', 'Worked with C# and HLSL across CPU-side setup and GPU-side execution.'],
 challenges:['Reason about the division of work between CPU-side code and GPU execution.', 'Evaluate image-processing behavior alongside performance.'],
 architecture:['Unity and C# provide the application and host-side setup.', 'HLSL compute shaders express parallel GPU work.', 'Exact buffers, dispatch sizes, and measured results will be documented with the project source.'],
 outcome:'This is learning and experimentation work. The supplied description establishes the topics explored, but does not establish a completed product or measured speedup.',
 next:['Link source files and credit tutorial foundations where applicable.', 'Add output images and documented dispatch / buffer layouts.', 'Add profiler captures and a written comparison of approaches.'],
 source:'Project brief supplied by Abasi; source code and profiler captures pending.',images:[]
 },
 {
 slug:'unreal-cpp',number:'04',title:'Unreal Engine C++ Development',shortTitle:'C++ simulation experiments',category:'Simulation',status:'Learning / experiments',
 summary:'Hands-on exploration of C++ engine programming and real-time simulation in Unreal Engine.',
 tags:['Unreal Engine','C++','Simulation'],
 overview:'An Unreal Engine development project exploring C++ game engine programming, engine architecture, and real-time simulation experiments.',
 contributions:['C++ game engine programming experiments.', 'Exploration of Unreal Engine architecture.', 'Real-time simulation experimentation.'],
 challenges:['Understand where custom C++ behavior fits within the engine lifecycle.', 'Define repeatable simulation experiments with observable outputs.'],
 architecture:['Unreal Engine provides the engine framework.', 'C++ is the primary programming language for the experiments.', 'Specific systems and class relationships are pending repository review.'],
 outcome:'The project is presented as ongoing exploration. A completed simulation, shipped game, or custom engine is not claimed.',
 next:['Add the repository and Unreal Engine version.', 'Document one experiment with its objective, implementation, and observations.', 'Add a short demonstration video and personal lessons learned.'],
 source:'Project brief supplied by Abasi; implementation evidence pending.',images:[]
 },
 {
 slug:'component-placement',number:'05',title:'Automated Electronic Component Placement System',shortTitle:'Automated component placement',category:'Robotics',status:'Prototyping',
 summary:'Repurposing an Ender-3 motion platform for coordinate-based placement with a vacuum pickup.',
 tags:['Ender-3','Motion control','Vacuum pickup','Embedded hardware'],
 overview:'A robotics project based on a modified Ender-3, intended to place electronic components using a coordinate-based workflow and a vacuum pickup mechanism. Initial work targets breadboard prototyping, with PCB expansion as a possible later phase.',
 contributions:['Project focus: coordinate-based component placement using an existing motion platform.', 'Vacuum pickup mechanism and embedded hardware / motion control exploration.', 'Individual ownership of mechanical, electrical, and software tasks is still to be documented.'],
 challenges:['Relate placement coordinates to physical breadboard positions.', 'Develop a reliable pickup and release process for the intended components.', 'Integrate the pickup mechanism with the motion platform.'],
 architecture:['The modified Ender-3 supplies the coordinate-controlled motion platform.', 'A vacuum pickup is the selected handling approach.', 'The initial target is breadboard assembly; PCB placement remains potential future scope.'],
 outcome:'The system is in prototyping. Placement accuracy, repeatability, supported components, and successful automated assembly have not yet been documented.',
 next:['Confirm my specific responsibilities and the current hardware configuration.', 'Add photos, wiring diagrams, and a pickup / placement video.', 'Measure repeatability and document failure cases before making accuracy claims.'],
 source:'Project brief supplied by Abasi; prototype documentation pending.',images:[]
 }
];
