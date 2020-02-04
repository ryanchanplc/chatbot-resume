import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithubSquare,
  faMedium
} from '@fortawesome/free-brands-svg-icons'
const Links = () => (
    <div className="links">
      <FontAwesomeIcon icon={faGithubSquare} size="2x" />{' '}
      <a href="http://www.github.com/ryanchanplc" target="_blank">
        www.github.com/ryanchanplc
      </a>
      <br />
      <FontAwesomeIcon icon={faMedium} size="2x" />{' '}
      <a href="http://www.medium.com/@ryanchanplc" target="_blank">
        www.medium.com/@ryanchanplc
      </a>
      <br />
      <FontAwesomeIcon icon={faLinkedin} size="2x" />{' '}
      <a href="https://hk.linkedin.com/in/ryanchanplc" target="_blank">
        hk.linkedin.com/in/ryanchanplc
      </a>
      <style jsx global>
        {`
          ul {
            list-style-type: none;
          }
  
          a {
            color: #f5f6f6;
          }
          a:visited {
            color: #f5f6f6;
          }
          .links {
            font-family: 'Helvetica Neue';
            font-size: 14px;
          }
        `}
      </style>
    </div>
  )
  export default Links