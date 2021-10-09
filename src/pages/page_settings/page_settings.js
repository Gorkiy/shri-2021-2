import React, { useState, useEffect, useContext } from 'react';
import { ButtonLink } from '../../components/buttonLink/buttonLink';
import { Button } from '../../components/button/button';
import { Header } from '../../components/header/header';
import { Input } from '../../components/input/input';
import { Footer } from '../../components/footer/footer';
import './page_settings.scss';

export const Settings = props => {
  const [repository, setRepositoryValue] = useState('');
  const [build, setBuildValue] = useState('');
  const [branch, setBranch] = useState('');
  const [syncDuration, setSyncDuration] = useState('');
  // const isInited = useContext(InitedContext);
  // useEffect(() => console.log('isInited', isInited));

  const onFormSubmit = e => {
    e.preventDefault();
    console.log('submit');

    // {
    //   repository:
    // }

    // ...
    props.onChange(true);
  }

  return (
    <div className="page-start main">
      <Header page="settings" />
      <main className="content wrapper">
        <div className="content__container container">
          <div className="content__settings settings">
            <div className="settings__head">
              <h3 className="settings__heading heading">Settings</h3>
              <p className="settings__description description">Configure repository connection and synchronization settings.</p>
            </div>
            <form className="settings__form form" onSubmit={onFormSubmit}>
              <div className="form__group">
                <span className="form__header">
                  GitHub repository <sup className="form__sup">*</sup>
                </span>
                <Input
                  elementClass="form__input"
                  type="text"
                  value={repository}
                  placeholder="user-name/repo-name"
                  onChange={setRepositoryValue}
                />
              </div>
              <div className="form__group">
                <span className="form__header">
                  Build command <sup className="form__sup">*</sup>
                </span>
                <Input
                  elementClass="form__input"
                  type="text"
                  value={build}
                  placeholder="npm ci && npm run build"
                  onChange={setBuildValue}
                />
              </div>
              <div className="form__group">
                <span className="form__header">
                  Main branch
                </span>
                <Input
                  elementClass="form__input"
                  type="text"
                  value={branch}
                  placeholder="master"
                  onChange={setBranch}
                />
              </div>
              <div className="form__buttons">
                <Button
                  title="Save"
                  type="submit"
                  elementClass="form__button"
                />
                <Button
                  title="Cancel"
                  type="submit"
                  style="alt"
                  elementClass="form__button"
                />
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}