import React from 'react';
import { Link, graphql  } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

// Import components
import CodeHighlighter from '../components/CodeHighlighter';
import CodeHighlighterItem from '../components/CodeHighlighterItem';
import Layout from '../components/Layout';
import TableOfContents from '../components/TableOfContents';
import SidebarComponent from '../components/SidebarComponent';
import Seo from '../components/SearchEngineOptimalization';

// Images
import ArrowLeft from '../images/icons/arrow-left.svg';
import ArrowRight from '../images/icons/arrow-right.svg';

export const query = graphql`
  query ($slug: String!) {
    mdx(slug: {eq: $slug}) {
      frontmatter {
        title
        lead
        codeScss
        codeTitle
        codeExternalURL
        codeHTML
      }
      body,
      headings {
        depth
        value
      }
    }
  }
`;

export default function Post({ data: { mdx: post }, pageContext }) {
  const {next, prev} = pageContext;

  const { title } = post.frontmatter;
  const { body } = post;

  return (
    <Layout>
      <Seo title={title} />
      <main id="content" className="l-component">
        <div className="container">
          <div className="l-component__header">
            <h1 className="l-component__title">{title}</h1>
            <p className="lead">{post.frontmatter.lead}</p>
          </div>
          <CodeHighlighter
            title={post.frontmatter.codeTitle}
            externalUrl={post.frontmatter.codeExternalURL}
          >
            {post.frontmatter.codeExternalURL && <CodeHighlighterItem title="Preview" id="preview"><iframe src={post.frontmatter.codeExternalURL} frameborder="0" title={post.frontmatter.codeTitle} style={{height: "34rem"}}></iframe></CodeHighlighterItem>}
            {post.frontmatter.codeScss && <CodeHighlighterItem title="SCSS" id="scss" code={post.frontmatter.codeScss}></CodeHighlighterItem>}
            {post.frontmatter.codeHTML && <CodeHighlighterItem title="HTML" id="html" code={post.frontmatter.codeHTML}></CodeHighlighterItem>}
          </CodeHighlighter>
          <article className="l-component__inner">
            <SidebarComponent />
            <div className="l-component__content post-content">
              <MDXRenderer>{body}</MDXRenderer>
            </div>
            {post.headings.length !== 0 &&
            <div className="l-component__table-of-content">
              <section className="toc" aria-labelledby="toc-title">
                <h3 className="toc__title" id="toc-title">On this page</h3>
                <nav className="toc__navigation">
                  <TableOfContents headings={post.headings} />
                </nav>
              </section>
            </div>}
          </article>
          <div className="post-navigation">
            {prev &&
              <Link className="post-navigation-item post-navigation-item--prev" to={`/${prev.slug}`}>
                <span className="post-navigation-item__icon">
                  <ArrowLeft />
                </span>
                <span className="post-navigation-item__caption">
                  Previous
                  <span className="post-navigation-item__title">{prev.frontmatter.title}</span>
                </span>
              </Link>
            }
            {next &&
              <Link className="post-navigation-item post-navigation-item--next" to={`/${next.slug}`}>
                <span className="post-navigation-item__caption">
                  Next
                  <span className="post-navigation-item__title">{next.frontmatter.title}</span>
                </span>
                <span className="post-navigation-item__icon">
                  <ArrowRight />
                </span>
              </Link>
            }
          </div>
        </div>
      </main>
    </Layout>
  );
}
