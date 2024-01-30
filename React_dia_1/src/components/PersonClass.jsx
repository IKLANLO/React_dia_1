import React from "react"

class PersonClass extends React.Component {
  render() {
    return (
      <div>
      <span>Name: {this.props.name}, </span>
      <span>Surname: {this.props.surname}, </span>
      <span>Age: {this.props.age}</span>
    </div>
    )
  }
}

export default PersonClass