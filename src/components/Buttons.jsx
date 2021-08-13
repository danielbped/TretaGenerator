import React, { Component } from 'react';
class Buttons extends Component {
  constructor() {
    super();

    this.state = {
      active: false,
    }
  this.toggleClass = this.toggleClass.bind(this);
  }

  toggleClass(e) {
    const { onClick } = this.props;
    const { active } = this.state;
    if (!active) {
      this.setState({ active: true })
      e.target.className = e.target.className + "border border-indigo-500";
      onClick(e);
    }
  }

  render() {
    const options = ["Açaí", "Sushi", "Sopa"];
    return(
        <div>
          {options.map((option) => <button
            key= { option }
            name="food"
            value={ option.toLowerCase() }
            type="button"
            onClick={ (e) => this.toggleClass(e) }
            className={
            `bg-indigo-300
            block
            mx-auto
            container
            rounded-2xl
            transition hover:bg-indigo-200
            p-4
            my-4
            border-transparent
          `}
          >
            {option}
          </button>
        )}
        </div>
    )
  }
}

export default Buttons;