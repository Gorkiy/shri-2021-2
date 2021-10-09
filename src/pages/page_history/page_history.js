import React, { useState, useEffect } from 'react';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { ButtonLink } from '../../components/buttonLink/buttonLink';
import { Input } from '../../components/input/input';
import { Button } from '../../components/button/button';
import { Modal } from '../../components/modal/modal';
import { Commit } from '../../components/commit/commit';
import './page_history.scss';
import { ReactComponent as IconSettings } from '../../assets/images/icon-settings.svg';
import { ReactComponent as IconPlay } from '../../assets/images/icon-play.svg';
import { commitsMock } from '../../mock/commits';

const COMMITS_PER_SLICE = 3;
const DELAY = 2000;

export const History = props => {
  const { settings } = props;
  const [commitsLoaded, setCommitsLoaded] = useState(COMMITS_PER_SLICE);
  const [isBuildModalShown, showBuildModalShown] = useState(false);
  const [hash, setHashValue] = useState('');
  const [isLoading, toggleLoading] = useState(false);

  const onLoadMore = () => {
    setCommitsLoaded(prevLoaded => prevLoaded + COMMITS_PER_SLICE);
  }

  const onFormSubmit = e => {
    e.preventDefault();
    toggleLoading(true);
    setTimeout(() => toggleLoading(false), DELAY);
    console.log('submit');
  }

  return (
    <div className="page-history main">
      <Header page="history" title={settings.repository}>
        <Button
          title="Run build"
          icon={IconPlay}
          size="sm"
          style="alt"
          onClick={() => showBuildModalShown(true)}
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
          <div className="history">
            <ul className="commits">
              {commitsMock.map((commit, i) => {
                if (i < commitsLoaded) {
                  return <Commit key={commit.id} commit={commit} />
                }
              }
              )}
            </ul>
          </div>
          {commitsLoaded < commitsMock.length &&
            <Button
              title="Show more"
              size="sm"
              style="alt"
              elementClass="show-more-button"
              onClick={onLoadMore}
            />
          }
        </div>
      </main>
      <Footer />
      <Modal isShown={isBuildModalShown} onClose={() => showBuildModalShown(false)} title="Run Build">
        <p className="modal__description text">
          Enter the commit hash which you want to build.
        </p>
        <form name="settings" className="history__form form" onSubmit={onFormSubmit}>
          <div className="form__group">
            <div className="form__input-wrapper">
              <Input
                elementClass="form__input"
                type="text"
                value={hash}
                name="hash"
                placeholder="Commit hash"
                required={true}
                onChange={setHashValue}
              />
            </div>
          </div>
          <div className="form__buttons">
            <Button
              title="Save"
              type="submit"
              elementClass="form__button"
              disabled={isLoading}
            />
            <Button
              title="Cancel"
              type="button"
              style="alt"
              onClick={() => showBuildModalShown(false)}
              elementClass="form__button"
              disabled={isLoading}
            />
          </div>
        </form>
      </Modal>
    </div>
  )
}