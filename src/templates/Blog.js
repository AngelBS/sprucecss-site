import React from 'react';
import { graphql  } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

// Import components
import Layout from '../components/Layout';
import Seo from '../components/SearchEngineOptimalization';

export default function Post({ data: { mdx: post } }) {
  const { title } = post.frontmatter;
  const { body } = post;
  return (
    <Layout>
      <Seo title={title} />
      <main id="content">
        <div class="post-heading">
          <div class="container--narrow">
            <div class="post-heading__inner">
              <h1 class="post-heading__title">{title}</h1>
              <ul class="breadcrumb-list">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <span aria-current="page">{title}</span>
                </li>
              </ul>
              <div class="post-heading__meta">
                <a class="post-author" href="#">
                  <img class="post-author__avatar" src="https://secure.gravatar.com/avatar/fd9479a898c593601efd2fe758a86dba?s=96&amp;d=mm&amp;r=g" alt="" aria-hidden="true" width="38" height="38" />
                  <span class="post-author__name">by Adam Laki</span>
                </a>
                <span>Posted in <a href="#">Business</a>, <a href="#">Notes</a>
                </span>
                <span>
                  <span class="sr-only">Posted on</span>
                  <time datetime="2022-03-17T11:47:25+01:00">Mar 17, 2022</time>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="container--wide">
          <div class="post-content">
            <MDXRenderer>{body}</MDXRenderer>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query ($slug: String!) {
    mdx(slug: {eq: $slug}) {
      frontmatter {
        title
      }
      body
    }
  }
`;
