import React, { useState, useEffect } from 'react';
import './page_start.scss';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { ButtonLink } from '../../components/buttonLink/buttonLink';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as IconSettings } from '../../assets/icon-settings.svg';

export const Start = () => {
  return (
    <div className="page-start main">
      <Header page="start">
        <ButtonLink
          title="Settings"
          icon={IconSettings}
          size="sm"
          style="alt"
          to='/settings'
        />
      </Header>
      <main className="content wrapper">
        <div className="content__container container container_middle">
          <div className="content__intro intro">
            <div className="intro__logo">
              <Logo />
            </div>
            <p className="intro__text">
              Configure repository connection<br /> and synchronization settings
              Typography
            </p>
            <div className="intro__button">
              <ButtonLink title="Open settings" to='/settings' />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}