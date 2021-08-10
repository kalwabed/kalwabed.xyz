import 'twin.macro'

import NextLink from '@components/v2/shared/NextLink'
import { Container } from '@components/v2/shared/Container'
import { MoreLink, SectionTitle } from './modules'
import { Post } from '@/types'
import dateFormatter from '@/utils/dateFormatter'

const RecentPosts = ({ posts }: { posts: Post[] }) => {
  const threeRecentPosts = posts.slice(0, 3)

  return (
    <section css={[Container]} tw="bg-red-500">
      <SectionTitle title="Recent posts" />
      {threeRecentPosts?.map(post => (
        <div tw="flex flex-col space-y-1 lg:pr-12" key={post.slug}>
          <time dateTime={dateFormatter(post.publishedAt).ISO}>{dateFormatter(post.publishedAt).formatted}</time>
          <NextLink
            type="text"
            href={'/posts/' + post.slug}
            className={`umami--click--recentPost-${post.slug}`}
            title={post.title}
          >
            {post.title}
          </NextLink>
          <p tw="text-sm">{post.summary}</p>
        </div>
      ))}

      <MoreLink type="posts" />
    </section>
  )
}

export default RecentPosts
