import 'twin.macro'

import Divider from '../shared/divider'
import TextLink from '../shared/text-link'

const Bio = () => {
  return (
    <div tw="text-lowContrast w-full md:w-11/12 lg:w-10/12 tracking-wide">
      <div tw="space-y-7 mb-10">
        <p>
          Hello world! My name is Kalwabed Rizki. You can call me Albed. I live in Indonesia, precisely in the
          easternmost regency on the island of Java, namely Banyuwangi. You will usually pass through this regency if
          you want to go to Bali Island from Java.
        </p>
        <p>
          I started programming since I was in vocational high school. I got a lot of knowledge from there. The
          technologies I was familiar with at that time were: PHP, MySQL, Bootstrap, and CodeIgniter. I think I was
          quite successful with that technology by making an application for warehouse management, which of course still
          has many shortcomings. Switching from PHP, now I'm confident enough to position myself as a Javascript
          Developer 😁
        </p>
        <p>
          The technology that I usually use to build a web on the frontend is of course React.js, and Next.js. In terms
          of styling, I usually use Tailwindcss, Chakra UI, and previously also used Bootstrap. Sometimes for styling I
          use CSS-in-JS solutions like Emotion, but I'm not that familiar with it and would like to learn more. For
          backend/API I usually use Express.js, and headless CMS like Strapi. I use Typescript more in every project
          because why not. I'm also interested in learning Golang, and maybe it will be my next programming language.
        </p>
      </div>
      <div tw="space-y-8">
        <Divider isCenter />
        <p>
          Day-to-day I work full time at{' '}
          <TextLink isExternal href="https://kolabo.id">
            Kolabo
          </TextLink>{' '}
          as a Frontend Engineer. Build an application to help remote workers in Indonesia. In addition, I am also an
          undergraduate student of Informatics at Amikom University, Yogyakarta. Outside of my job, I like to make
          things out of the ideas that pop into my head. I'll probably put it later on the{' '}
          <TextLink href="/projects">projects</TextLink> page on this website.
        </p>
      </div>
    </div>
  )
}

export default Bio