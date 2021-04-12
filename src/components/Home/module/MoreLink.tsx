import NextLink from '@/components/ui/NextLink'
import 'twin.macro'

interface MoreLinkProps {
  type: 'projects' | 'bookmarks' | 'posts'
}

const MoreLink = (props: MoreLinkProps) => {
  const { type } = props
  switch (type) {
    case 'posts':
      return (
        <div tw="flex justify-center items-center mx-auto">
          <NextLink title="More posts" href="/posts">
            More posts
          </NextLink>
        </div>
      )

    case 'projects':
      return (
        <div tw="flex justify-center items-center mx-auto">
          <NextLink title="More projects" href="/projects">
            More projects
          </NextLink>
        </div>
      )

    case 'bookmarks':
      return (
        <div tw="flex justify-center items-center mx-auto">
          <NextLink title="More bookmarks" href="/bookmarks">
            More bookmarks
          </NextLink>
        </div>
      )

    default:
      return <div></div>
  }
}

export default MoreLink
