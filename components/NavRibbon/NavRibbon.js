import React, { PropTypes } from 'react';
import s from './styles.css';
import Link from '../Link';

class NavRibbon extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    to: PropTypes.string.isRequired,
  }

  render() {
    return (
      <Link onClick={this.props.onClick} to={this.props.to} className={s.link}>
        <div className={s.ribbon}>
          <span className={s.title}>{this.props.title}</span>
        </div>
      </Link>
    );
  }
}

export default NavRibbon;
