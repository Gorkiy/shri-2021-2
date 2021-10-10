import React, { useState, useEffect, useContext, useRef } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import { Button } from '../../components/button/button';
import { Header } from '../../components/header/header';
import { Input } from '../../components/input/input';
import { Footer } from '../../components/footer/footer';
import './page_settings.scss';

export const Settings = props => {
  const { settings, onChange } = props;
  const [repository, setRepositoryValue] = useState('');
  const [build, setBuildValue] = useState('npm ci && npm run build');
  const [branch, setBranch] = useState('');
  const [syncDuration, setSyncDuration] = useState('10');
  const [isSubmitted, setSubmitted] = useState(false);
  const formRef = useRef(null);
  const history = useHistory();

  useEffect(() => {
    if (settings) {
      setRepositoryValue(settings.repository);
      setBuildValue(settings.build);
      setBranch(settings.branch);
      setSyncDuration(settings.syncDuration);
    }
  }, [])

  const onFormSubmit = e => {
    e.preventDefault();

    onChange({
      repository,
      build,
      branch,
      syncDuration
    });

    setSubmitted(true);
  }

  if (isSubmitted) {
    return <Redirect to={`/history/`} />
  }

  return (
    <div className="page-settings main">
      <Header page="settings" />
      <main className="content wrapper">
        <div className="content__container container">
          <div className="content__settings settings">
            <div className="settings__head">
              <h3 className="settings__heading heading">Settings</h3>
              <p className="settings__description description">Configure repository connection and synchronization settings.</p>
            </div>
            <form name="settings" className="settings__form form" ref={formRef} onSubmit={onFormSubmit} method="post" action="#">
              <div className="form__group">
                <span className="form__header">
                  GitHub repository <sup className="form__sup">*</sup>
                </span>
                <div className="form__input-wrapper">
                  <Input
                    elementClass="form__input"
                    type="text"
                    value={repository}
                    name="repository"
                    placeholder="user-name/repo-name"
                    autoComplete="off"
                    required={true}
                    onChange={setRepositoryValue}
                  />
                </div>
              </div>
              <div className="form__group">
                <span className="form__header">
                  Build command <sup className="form__sup">*</sup>
                </span>
                <div className="form__input-wrapper">
                  <Input
                    elementClass="form__input"
                    type="text"
                    value={build}
                    name="build"
                    required={true}
                    autoComplete="off"
                    placeholder="npm ci && npm run build"
                    onChange={setBuildValue}
                  />
                </div>
              </div>
              <div className="form__group">
                <span className="form__header">
                  Main branch
                </span>
                <div className="form__input-wrapper">
                  <Input
                    elementClass="form__input"
                    type="text"
                    value={branch}
                    name="branch"
                    autoComplete="off"
                    placeholder="master"
                    onChange={setBranch}
                  />
                </div>
              </div>
              <div className="form__group form__group_inline">
                <span className="form__header">
                  Synchronize every
                </span>
                <Input
                  elementClass="form__input"
                  type="number"
                  name="syncDuration"
                  value={syncDuration}
                  placeholder="10"
                  min={0}
                  max={60}
                  onChange={setSyncDuration}
                />
                <span className="form__unit">
                  minutes
                </span>
              </div>
              <div className="form__buttons">
                <Button
                  title="Save"
                  type="submit"
                  elementClass="form__button"
                />
                <Button
                  title="Cancel"
                  type="button"
                  style="alt"
                  onClick={() => history.goBack()}
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