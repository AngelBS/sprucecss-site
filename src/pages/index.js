import React from 'react';
import { Link } from 'gatsby';

// Import components
import Layout from '../components/Layout';
import Notification from '../components/Notification';

// Images
import HeroImage from '../images/hero.svg';
import CopyIcon from '../images/copy.svg';

function IndexPage() {
  return (
    <Layout>
      <main className="hero">
        <div className="hero__container">
          <div className="hero__inner">
            <div className="hero__caption">
              <Notification status="new" message="The first realase (v0.1.) of Spruce is out"/>
              <h1 className="hero__title">Spruce CSS Framework</h1>
              <p className="hero__description">An open-source, lightweight and modernish CSS base framework for creating in a system. Give your project the right foundation.</p>
              <div className="hero__btns">
                <Link to="/docs" className="btn btn--primary">Get Started</Link>
                <button className="btn install-btn">
                  <CopyIcon className="btn__icon" />
                  npm install sprucecss
                </button>
              </div>
            </div>
            <HeroImage className="hero__image" />
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default IndexPage;
