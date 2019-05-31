import React from "react"
import { Link, graphql } from 'gatsby'
import Container from '../components/container'

export default ({ data }) => (
	<Container>
		<div>
			<h4>{data.allMarkdownRemark.totalCount} Posts</h4>
			{data.allMarkdownRemark.edges.map(({ node }) => (
				<div key={node.id}>
					<Link to={node.fields.slug}>
						<h3>
							{node.frontmatter.title}{' '}
							<small> - {node.frontmatter.date}</small>
						</h3>
						<p>{node.excerpt}</p>
					</Link>
				</div>
			))}
		</div>
	</Container>
)

export const query = graphql`
	query {
		allMarkdownRemark {
			totalCount
			edges {
				node {
					id
					frontmatter {
						title
						date(formatString: "DD MMMM, YYYY")
					}
					fields {
						slug
					}
					excerpt
				}
			}
		}
	}
`
