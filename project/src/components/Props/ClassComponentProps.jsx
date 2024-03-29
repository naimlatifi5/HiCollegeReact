import React, { Component } from 'react'
import PropTypes from 'prop-types'

// in a class component props are received by default and can be access with this.props in the component instance
class ClassComponentWithProps extends Component {
  render() {
    const { name } = this.props
    const bodyComponentProps = this.props.children
    return (
      <p>
        {name} {bodyComponentProps}
      </p>
    )
  }
}

/* Default value for props */
// Proptypes is set to string
ClassComponentWithProps.propTypes = {
  name: PropTypes.string,
}
// There are other types you can use as well
// PropTypes.array
// PropTypes.bool
// PropTypes.number
// PropTypes.object

// default props for a class Component
ClassComponentWithProps.defaultProps = {
  name: 'Prop name not set-Default name',
}
export default ClassComponentWithProps
