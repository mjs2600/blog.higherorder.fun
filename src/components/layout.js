import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMastodon, faTwitter } from "@fortawesome/free-brands-svg-icons"

const Layout = ({ location, title, children }) => {
  const data = useStaticQuery(graphql`
    query SocialQuery {
      site {
        siteMetadata {
          author {
            name
          }
          social {
            twitter
            mastodon {
              server
              handle
            }
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const social = data.site.siteMetadata?.social
  const author = data.site.siteMetadata?.author

  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()} {author.name} -{` `}
        Follow me: {` `}
        <a href={`https://twitter.com/${social?.twitter || ``}`}>
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          rel="me"
          href={`https://${social.mastodon.server}/${social.mastodon.handle}`}
        >
          <FontAwesomeIcon icon={faMastodon} />
        </a>
      </footer>
    </div>
  )
}

export default Layout
