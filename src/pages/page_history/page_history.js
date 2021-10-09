import React, { useState, useEffect } from 'react';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { ButtonLink } from '../../components/buttonLink/buttonLink';
import { Button } from '../../components/button/button';
import { Commit } from '../../components/commit/commit';
import './page_history.scss';
import { ReactComponent as IconSettings } from '../../assets/images/icon-settings.svg';
import { ReactComponent as IconPlay } from '../../assets/images/icon-play.svg';
import { commitsMock } from '../../mock/commits';

export const History = props => {
  const { settings } = props;

  return (
    <div className="page-history main">
      <Header page="history" title={settings.repository}>
        <Button
          title="Run build"
          icon={IconPlay}
          size="sm"
          style="alt"
          to='/settings'
        />
        <ButtonLink
          icon={IconSettings}
          size="sm"
          style="alt"
          to='/settings'
        />
      </Header>
      <main className="content wrapper">
        <div className="content__container container">
          <ul className="commits">
            {commitsMock.map(commit =>
              <Commit key={commit.id} commit={commit} />
            )}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  )
}