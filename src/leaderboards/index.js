import React from 'react';
import Layout from '../../components/Layout';
import NavRibbon from '../../components/NavRibbon';
import s from './styles.css';

class LeaderboardsPage extends React.Component {

  render() {
    return (
      <Layout className={s.content}>
        <NavRibbon title="Nintendo 64" />
        <NavRibbon title="Gamecube" />
        <NavRibbon title="Wii" />
      </Layout>
    );
  }
}

export default LeaderboardsPage;
