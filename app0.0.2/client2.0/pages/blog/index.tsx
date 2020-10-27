import { GetStaticProps } from "next"
import Link from "next/link"
import Title from "../../components/elements/Title"
import { Page } from "../../components/styled/wrappers"
import { parsedMarkDownHandler, readDir } from "../../lib/api"
import styled from "styled-components"
import { above, below, handleFlex } from "../../src/utils/helpers"

interface BlogPageProps {
  frontmatter: FrontMatter[]
}

const BlogPageStyles = styled(Page)`
  flex-direction: column;
`

const PostList = styled.ul`
  border: 2px solid red;
  width: 100%;
  font-size: 1rem;
  padding: 0;
  ${handleFlex("column", "center", "center")};
  li {
    padding: 0.3em;
    background: ${({ theme }) => theme.colors.illustrations.main};
    width: 22em;
    margin: 0.8em 0;
    border-radius: 4px;
    text-align: center;
    transition: 300ms ease-in-out all;
    ${below.small`
      width: 100%;
    `}
    ${above.small`
      width: 90%;
    `}
    ${above.medium`
      width: 70%;
    `}
    ${above.large`
      width: 55em;
    `}
    &:hover {
      transform: scale(1.06);
    }
  }
  a {
    color: ${({ theme }) => theme.colors.illustrations.stroke};
    font-size: 2em;
    transition: 300ms ease-in-out all;
    position: relative;
    display: inline-block;
    &:after {
      content: "";
      transition: 300ms ease-in-out all;
      position: relative;
      position: absolute;
      background: ${({ theme }) => theme.colors.illustrations.highlight};
      bottom: 0;
      left: 0;
      width: 0;
      height: 3%;
    }
    &:hover {
      color: ${({ theme }) => theme.colors.illustrations.highlight};
      text-shadow: 1px 1px 2px
        ${(props) => props.theme.colors.shadow.highlightShadow};
      &:after {
        content: "";
        position: relative;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3%;
      }
    }
  }
`

const BlogPage = ({ frontmatter }: BlogPageProps) => {
  return (
    <BlogPageStyles>
      <Title
        className="Blog-page-title"
        title="Sick tastes Blog"
        subTitle="content with a small twist"
      />
      <PostList>
        {frontmatter.map(({ slug, date, title, author: { name } }) => (
          <li key={slug}>
            <p>Written by {name}</p>
            <Link href={`/blog${slug}`}>
              <a> {title} </a>
            </Link>
          </li>
        ))}
      </PostList>
    </BlogPageStyles>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const posts = readDir("posts").map((post) => post.replace(".md", ""))

  const postFrontMatter = posts.map((p) => {
    const parsed = p.replace(".md", "")
    const { data } = parsedMarkDownHandler(parsed)
    return data
  })

  return {
    props: {
      frontmatter: postFrontMatter,
    },
  }
}

export default BlogPage
