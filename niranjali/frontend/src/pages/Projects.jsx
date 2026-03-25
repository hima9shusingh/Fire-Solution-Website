import React from 'react';
import { SEO } from '../components/layout/SEO';
import { ProjectsHero } from '../components/sections/ProjectsPage/ProjectsHero';
import { ProjectStats } from '../components/sections/ProjectsPage/ProjectStats';
import { FeaturedProject } from '../components/sections/ProjectsPage/FeaturedProject';
import { ProjectArchive } from '../components/sections/ProjectsPage/ProjectArchive';
import { ExecutionMethodology } from '../components/sections/ProjectsPage/ExecutionMethodology';
import { TechnicalCapabilities } from '../components/sections/ProjectsPage/TechnicalCapabilities';
import { ProjectsCTA } from '../components/sections/ProjectsPage/ProjectsCTA';

const Projects = () => {
    return (
        <>
            <SEO
                title="Projects | Niranjali Firesolutions Limited"
                description="Our portfolio of executed fire protection projects across industrial sectors. Case studies of manufacturing plants, warehouses, and corporate facilities."
            />
            <ProjectsHero />
            <ProjectStats />
            <FeaturedProject />
            <ProjectArchive />
            <ExecutionMethodology />
            <TechnicalCapabilities />
            <ProjectsCTA />
        </>
    );
};

export default Projects;
