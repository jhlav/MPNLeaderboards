import React, { PropTypes } from 'react';
import s from './styles.css';

class NavRibbon extends React.Component {
  static propTypes = {
    title: PropTypes.string,
  }

  render() {
    return (
      <div className={s.ribbon}>
        <span className={s.title}>{this.props.title}</span>
      </div>
    );
  }
}

export default NavRibbon;
