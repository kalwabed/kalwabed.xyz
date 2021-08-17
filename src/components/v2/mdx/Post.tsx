import tw from 'twin.macro'
import type { ReactNode } from 'react'

interface PostImageProps {
  image?: string
  children?: ReactNode
  label?: string
}

const PostImageWrapper = tw.figure`
flex flex-col
mx-auto
justify-center
items-center
space-y-1
my-8
`

const ImgLink = tw.a`
w-full
overflow-hidden
outline-none
hover:ring-2
transition
shadow
rounded
before:hidden
`

export const PostImage = (props: PostImageProps) => {
  const { image, label } = props

  return (
    <PostImageWrapper>
      <ImgLink href={image} rel="noopener noreferrer" target="_blank">
        <img
          decoding="async"
          src={image}
          alt={label || 'image'}
          width={100}
          height={100}
          tw="rounded w-full bg-slate"
        />
      </ImgLink>
      <figcaption tw="text-sm">{label}</figcaption>
    </PostImageWrapper>
  )
}