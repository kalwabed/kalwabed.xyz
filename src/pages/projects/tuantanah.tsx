import { Content, ContentWithImage } from '@/components/Projects/Contents'
import ProjectBySlugRenderer from '@/components/Projects/ProjectBySlugRenderer'
import { ProjectMeta } from '@/types'

const tuantanah: ProjectMeta = {
  title: 'TuanTanah',
  banner: '/static/projects/tuantanah/banner.png',
  liveUrl: 'https://tuantanah.kawari.space',
  githubRepo: 'https://github.com/kalwabed/tuantanah-website-v2',
  techs: ['Bootstrap 4', 'Next.js', 'Express.js', 'Mongo DB'],
  description:
    "TuanTanah is our final school assignment before graduating to measure the extent to which students' ability to master the material. Here I am as a developer; which takes care of things on the web, from the design stage to the now accessible website. Assisted by my colleagues who helped organize documents and site surveys. TuanTanah allows property providers to advertise their properties here."
}

const TuantanahProject = () => {
  return (
    <ProjectBySlugRenderer {...tuantanah}>
      <Content heading="Project purpose and goal">
        <p>
          Starting from my anxiety where I often find properties that are sold but not easily accessible to many people.
        </p>
        <p>
          So we tried to build this website with the hope that property providers can advertise their properties easily
          and property seekers can easily find their ideal property.
        </p>
      </Content>
      <ContentWithImage heading="Tech stack and explanation" image="/static/projects/tuantanah/tuantanah stack.png">
        <p>
          Creating a user interface using Bootstrap, then we use React and Nextjs for matters related to Javascript, I
          think that's enough. Nextjs is especially helpful for data-driven websites like this. Then we leave the
          display affairs to old-school Bootstrap, to speed up the processing process.
        </p>

        <p>
          In the data processing and API, we rely on Expressjs. In addition, we also use it to create an admin page
          where our admin will work later.
        </p>
      </ContentWithImage>
    </ProjectBySlugRenderer>
  )
}

export default TuantanahProject
