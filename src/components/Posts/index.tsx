import { useState } from 'react'

import type { Post, PostWithMdx } from '@/types'
import { Container } from '@/utils/styles'
import ContentWrapper from '../ContentWrapper'
import PageWrapper from '../layout/PageWrapper'
import SEO, { ogImgExtract } from '../SEO'
import Article from './Article'
import PostHeader from './PostHeader'
import PostList from './PostList'
import PostsHeader from './PostsHeader'
import PostFooter from './PostFooter'
import dateFormatter from '@/utils/dateFormatter'
import app from '@/config/app'

export const PostsPageRenderer = ({ posts }: { posts: Post[] }) => {
  const [searchValue, setSearchValue] = useState('')

  return (
    <section css={[Container]}>
      <SEO title="Posts" />
      <PostsHeader searchValue={searchValue} setSearchValue={setSearchValue} />
      <PostList posts={posts} searchValue={searchValue} />
    </section>
  )
}

export const PostBySlugRenderer = ({ post }: { post: PostWithMdx }) => {
  const { publishedAt, updatedAt, title, mdxSource, githubRepository, summary } = post

  return (
    <PageWrapper withSEO={false}>
      <SEO
        isPost
        title={title}
        description={summary}
        openGraph={{
          title: title.concat(' @kalwabed'),
          description: summary,
          images: [{ url: ogImgExtract(title), alt: title.concat(' Og image') }],
          type: 'article',
          article: {
            authors: [app.socials.Twitter],
            publishedTime: dateFormatter(publishedAt).ISO,
            modifiedTime: dateFormatter(updatedAt).ISO,
            section: 'Tech',
            tags: ['Tech', 'Blog', 'News', 'Story', 'Javascript']
          }
        }}
      />
      <ContentWrapper>
        <PostHeader publishedAt={publishedAt} title={title} />
        <Article content={mdxSource} />
        <PostFooter githubRepository={githubRepository} updatedAt={updatedAt} />
      </ContentWrapper>
    </PageWrapper>
  )
}