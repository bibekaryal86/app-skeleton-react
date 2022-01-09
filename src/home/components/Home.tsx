import React from 'react'
import { Link } from 'react-router-dom'
import { DisplayCardRow, DisplayCardWrapperBody } from '../../styles'

const Home = (): React.ReactElement => {
  const homePageText = () => (
    <>
      <DisplayCardWrapperBody>
        <h5>Find something to display in Summary</h5>
      </DisplayCardWrapperBody>
      <DisplayCardWrapperBody>
        <DisplayCardRow borderBtm>
          <h6>
            Go to some page, <Link to="/some_page">click here</Link>
          </h6>
        </DisplayCardRow>
        <DisplayCardRow>
          <h6>
            Go to another page, <Link to="/another_page">click here</Link>
          </h6>
        </DisplayCardRow>
      </DisplayCardWrapperBody>
    </>
  )

  return <>{homePageText()}</>
}

export default Home
