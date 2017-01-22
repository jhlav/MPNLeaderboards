/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../components/Layout';
import NavRibbon from '../../components/NavRibbon';
import s from './styles.css';

class LeaderboardsPage extends React.Component {

  componentDidMount() {
    /* document.title = title; */
  }

  render() {
    return (
      <Layout className={s.content}>
        <NavRibbon title="Platform" />
        <NavRibbon title="Game" />
        <NavRibbon title="Gamemode" />
      </Layout>
    );
  }

}

export default LeaderboardsPage;
