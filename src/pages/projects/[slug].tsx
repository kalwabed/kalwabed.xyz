import type { GetStaticPaths, GetStaticProps } from 'next'

import { ProjectWithMdx } from '~types'
import { getDataBySlug, getSlugs } from '~lib/mdx'
import SEO from '~components/SEO'
import ProjectHeader from '~components/projects/project/header'
import ProjectContent from '~components/projects/project/content'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs('_projects')

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params.slug as string
  const project = await getDataBySlug('_projects', slug)

  return { props: { project } }
}

const ProjectBySlugPage = ({ project }: { project: ProjectWithMdx }) => {
  return (
    <div className="space-y-12 mb-10">
      <SEO title={project.title} description={project.description} />
      <ProjectHeader project={project} />
      <ProjectContent mdxSource={project.mdxSource} />
    </div>
  )
}

export default ProjectBySlugPage
