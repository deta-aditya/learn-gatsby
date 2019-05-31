import React from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import { container, navbar, navbarItem } from './container.module.css'

export default props => {
	const data = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
					}
				}
			}
		`
	)
	return (
		<div className={container}>
			<h3>{data.site.siteMetadata.title}</h3>
			<nav className={navbar}>
				<Link className={navbarItem} to="/">Home</Link>
				<Link className={navbarItem} to="/about/">About</Link>
			</nav>
			{props.children}
		</div>
	)
}
