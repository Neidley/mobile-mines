import React from "react";

class Mine extends React.Component {
  handleClick = e => {
    e.preventDefault();
    this.props.onClick({ id: this.props.id, clicked: this.props.clicked });
  };

  render() {
    return (
      <img
        className="mine App-logo"
        id={this.props.id}
        onClick={this.handleClick}
        src={this.props.src}
        alt={"mine"}
      />
    );
  }
}

export default Mine
