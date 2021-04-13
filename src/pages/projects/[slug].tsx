import tw from 'twin.macro'
import Image from 'next/image'

import PageWrapper from '@/components/layout/PageWrapper'
import { TechBadge } from '@/components/Projects/module'
import Button from '@/components/ui/Button'
import { LiveIcon, GithubIcon } from '@/components/ui/Icons'

const Card = tw.div`
border
border-gray-300
bg-white
rounded-md
relative
p-6
bottom-20
w-9/12
md:w-1/3
shadow-lg
`

const LiveButton = tw(Button)`
bg-secondary-600
hocus:bg-secondary-500
space-x-1
p-4
focus:(ring-offset-secondary-300 ring-secondary-200)
`

const GithubButton = tw(Button)`
bg-gray-600
hocus:bg-gray-500
space-x-1
p-4
focus:(ring-offset-gray-300 ring-gray-200)
`

const ProjectPage = () => {
  return (
    <PageWrapper pageTitle="Tuantanah" isFluid>
      <div tw="flex flex-col justify-center items-center">
        <div tw="w-full h-full md:h-52 lg:h-80 overflow-hidden">
          <Image
            tw="opacity-80 hover:opacity-100 transition"
            alt="tuantanah"
            src="/static/tuantanah.png"
            height={640}
            width={1368}
          />
        </div>
        <Card>
          <div tw="flex flex-col justify-center items-center space-y-4">
            <h1 tw="text-3xl font-bold">Tuan Tanah</h1>
            <div tw="inline-flex space-x-2">
              {[1, 2, 3].map(key => (
                <TechBadge key={key} text="React" />
              ))}
            </div>
            <div tw="inline-flex space-x-4">
              <LiveButton>
                <LiveIcon /> <span>Live</span>
              </LiveButton>
              <GithubButton>
                <GithubIcon /> <span>Github</span>
              </GithubButton>
            </div>
          </div>
        </Card>
      </div>
    </PageWrapper>
  )
}

export default ProjectPage
