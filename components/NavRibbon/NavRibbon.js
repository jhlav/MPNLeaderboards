import React, { PropTypes } from 'react';
import s from './styles.css';

class NavRibbon extends React.Component {

  static propTypes = {
    title: PropTypes.string,
  };

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
      </div>
    );
  }
}

export default NavRibbon;
