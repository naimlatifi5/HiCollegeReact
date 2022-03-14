import React, { Component } from 'react'
import Courses from './Courses.js'
const onlineCourses = [
  { id: 1, name: 'JavaScript' },
  { id: 2, name: 'HTML' },
  { id: 3, name: 'Vue.js' },
  { id: 4, name: 'React.js' },
  { id: 5, name: 'CSS' },
]
class Challenge2 extends Component {
  constructor() {
    super()

    this.state = {
      onlineCourses,
    }
  }
  render() {
    let renderCourses
    if (this.state && this.state.onlineCourses.length > 0) {
      renderCourses = (
        <ul>
          {this.state.onlineCourses.map((item) => (
            <Courses name={item.name} />
          ))}
        </ul>
      )
    } else {
      renderCourses = <p>OBS! No online courses found</p>
    }
    return (
      <>
        <h1>Online courses</h1>
        {renderCourses}
      </>
    )
  }
}
export default Challenge2
