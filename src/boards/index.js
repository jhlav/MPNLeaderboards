/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import changeView from '../../actions/index';
import Layout from '../../components/Layout';
import NavRibbon from '../../components/NavRibbon';
import NavBackRibbon from '../../components/NavBackRibbon';
import s from './styles.css';

class LeaderboardsPage extends React.Component {
  static propTypes = {
    changeView: PropTypes.func,
    view: PropTypes.string,
  }

  render() {
    return (
      <Layout className={s.content}>
        {this.props.view === 'platform' &&
          <div>
            <NavBackRibbon onClick={() => { this.props.changeView('root'); }} to="/boards" />
            <NavRibbon title="N64" to="/boards/platform/n64" />
            <NavRibbon title="Gamecube" to="/boards/platform/gc" />
            <NavRibbon title="Wii" to="/boards/platform/wii" />
          </div>
        }
        {this.props.view === 'gamemode' &&
          <div>
            <NavBackRibbon onClick={() => { this.props.changeView('root'); }} to="/boards" />
            <NavRibbon title="Battle Royale" to="/boards/gamemode/br" />
            <NavRibbon title="Mini-Games" to="/boards/gamemode/mini" />
            <NavRibbon title="Duel" to="/boards/gamemode/duel" />
            <NavRibbon title="Team Battle" to="/boards/gamemode/tb" />
          </div>
        }
        {this.props.view === 'game' &&
          <div>
            <NavBackRibbon onClick={() => { this.props.changeView('root'); }} to="/boards" />
            <NavRibbon title="Mario Party 1" to="/boards/game/mp1" />
            <NavRibbon title="Mario Party 2" to="/boards/game/mp2" />
            <NavRibbon title="Mario Party 3" to="/boards/game/mp3" />
            <NavRibbon title="Mario Party 4" to="/boards/game/mp4" />
            <NavRibbon title="Mario Party 5" to="/boards/game/mp5" />
            <NavRibbon title="Mario Party 6" to="/boards/game/mp6" />
            <NavRibbon title="Mario Party 7" to="/boards/game/mp7" />
            <NavRibbon title="Mario Party 8" to="/boards/game/mp8" />
            <NavRibbon title="Mario Party 9" to="/boards/game/mp9" />
          </div>
        }
        {this.props.view === 'root' &&
          <div>
            <NavRibbon title="Platform" onClick={() => { this.props.changeView('platform'); }} to="/boards/platform" />
            <NavRibbon title="Game" onClick={() => { this.props.changeView('game'); }} to="/boards/game" />
            <NavRibbon title="Gamemode" onClick={() => { this.props.changeView('gamemode'); }} to="/boards/gamemode" />
          </div>
        }
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    view: state.view,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeView: (view) => { dispatch(changeView(view)); },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LeaderboardsPage);
