import React, {Component} from 'react'
import PropTypes from 'prop-types';

class ClassComponentWithProps extends Component {
    render () {
      const { name } = this.props; 
      const bodyComponentProps = this.props.children 
      return <p> { name } { bodyComponentProps } </p>
    }
  }

/* Default value for props */
// Proptypes is set to string 
ClassComponentWithProps.propTypes  = {
    name: PropTypes.string
  }
  // default props for a class Component
  ClassComponentWithProps.defaultProps = {
    name: "Prop name not set-Default name"
  }
  export default ClassComponentWithProps