import React, { PropTypes } from 'react';
import cx from 'classnames';
import Header from './Header';
import Drawer from './Drawer';
import Footer from '../Footer';
import s from './Layout.css';

class Layout extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  };

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  render() {
    return (
      <div className="mdl-layout mdl-js-layout" ref={node => (this.root = node)}>
        <div className={`mdl-layout__inner-container ${s.fixDrawerColor}`}>
          <Header />
          <Drawer title="MPN" />
          <main className="mdl-layout__content">
            <div {...this.props} className={cx(s.content, this.props.className)} />
            <Footer />
          </main>
        </div>
      </div>
    );
  }
}

export default Layout;
