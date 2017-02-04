import React from 'react';
import Navigation from './Navigation';

class Drawer extends React.Component {
  render() {
    return (
      <div className="mdl-layout__drawer">
        <span className="mdl-layout-title">{this.props.title}</span>
        <Navigation />
      </div>
    );
  }
}

export default Drawer;
