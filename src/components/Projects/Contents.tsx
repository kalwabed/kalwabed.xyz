import tw from 'twin.macro'
import Image from 'next/image'
import { ReactNode } from 'react'

interface ContentProps {
  heading: string
  children: ReactNode
}

export const Content = (props: ContentProps) => {
  const { heading, children } = props

  return (
    <section tw="w-full md:w-3/4 lg:w-3/5 space-y-3">
      <h1 tw="text-4xl font-bold">{heading}</h1>
      <div tw="leading-relaxed tracking-wider text-gray-500 space-y-3">{children}</div>
    </section>
  )
}

const WithImageWrapper = tw.section`
flex flex-col
justify-center
lg:flex-row
items-center
my-24
space-y-2
`

interface ContentWithImageProps extends ContentProps {
  image: string
}

export const ContentWithImage = (props: ContentWithImageProps) => {
  const { children, heading, image } = props

  return (
    <WithImageWrapper>
      <div tw="w-full lg:w-1/2 overflow-hidden">
        <Image src={image} alt={heading} width={500} height={412} quality={90} tw="rounded bg-slate w-full" />
      </div>
      <div tw="w-full lg:w-1/2 space-y-3">
        <h1 tw="text-4xl font-bold">{heading}</h1>
        <div tw="leading-relaxed tracking-wider text-gray-500 space-y-3">{children}</div>
      </div>
    </WithImageWrapper>
  )
}
