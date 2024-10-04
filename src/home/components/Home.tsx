import React from 'react'
import { Link } from 'react-router-dom'

import { DisplayCardWrapperBody, DisplayCardWrapperRow } from '../../styles'

const Home = (): React.ReactElement => {
  const homePageText = () => (
    <>
      <DisplayCardWrapperBody>
        <h5>Find something to display in Summary</h5>
      </DisplayCardWrapperBody>
      <DisplayCardWrapperBody>
        <DisplayCardWrapperRow borderBtm>
          <h6>
            Go to some page, <Link to="/some_page">click here</Link>
          </h6>
        </DisplayCardWrapperRow>
        <DisplayCardWrapperRow>
          <h6>
            Go to another page, <Link to="/another_page">click here</Link>
          </h6>
        </DisplayCardWrapperRow>
      </DisplayCardWrapperBody>
    </>
  )

  return <>{homePageText()}</>
}

export default Home
