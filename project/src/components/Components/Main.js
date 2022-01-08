import React from 'react'
import MyClassComponent from './ClassComponents'
import { FunctionComponent } from './FunctionComponent'
import BookListTightlyCoupled from './ContainerPresentationalComponents/BookListTightlyCoupled'
import BookListContainer from './ContainerPresentationalComponents/BookListContainer'

const Components = () => {
  return (
    <React.Fragment>
      <h2>Class component</h2>
      <MyClassComponent />
      <h2>Function component</h2>
      <FunctionComponent />
      <h2>Container & presentational components</h2>
      <hr />
      <h3>Example 1</h3>
      <BookListTightlyCoupled></BookListTightlyCoupled>
      <hr />
      <h3>Example 2</h3>
      <BookListContainer></BookListContainer>
    </React.Fragment>
  )
}

export default Components
