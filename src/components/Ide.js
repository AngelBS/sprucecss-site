import Heading from '../components/Heading';
import React, { useState } from 'react';
import IconFolder from '../images/icons/folder.svg';
import IconSass from '../images/icons/sass.svg';
import IdeSource from './IdeSource';

function Button({ activeTab, title, handleClick }) {
  return (
    <button onClick={() => handleClick(title)} className={`${title === activeTab ? 'active' : null}`}>
      <IconSass /> {title}
    </button>
  );
}

export default function Cta() {
  const [activeTab, setActiveTab] = useState('_config.scss');

  function handleButtonClick(title) {
    setActiveTab(title);
  }

  return (
    <div className="ide-wrapper">
      <div className="container">
        <Heading
          type="center"
          title="How to use Spruce CSS"
          description="Import the Spruce CSS library into your project."
        />
        <div className="ide">
          <div className="ide__header">
            <div className="ide__controls">
              <div className="ide__control" style={{ backgroundColor: '#ff5f56' }}></div>
              <div className="ide__control" style={{ backgroundColor: '#ffbd2e' }}></div>
              <div className="ide__control" style={{ backgroundColor: '#27c93f' }}></div>
            </div>
            <div className="ide__title">
              {activeTab}
            </div>
          </div>
          <div className="ide__inner">
            <aside className="ide__sidebar">
                <div className="ide-section">
                  <h3 className="ide-section__title">
                    <IconFolder />
                    components
                  </h3>
                  <ul className="ide-section__list ide-section__list--border">
                    <li>
                      <Button
                        title="_index.scss"
                        activeTab={activeTab}
                        handleClick={handleButtonClick}
                      />
                    </li>
                    <li>
                      <Button
                        title="_site-footer.scss"
                        activeTab={activeTab}
                        handleClick={handleButtonClick}
                      />
                    </li>
                    <li>
                      <Button
                        title="_site-header.scss"
                        activeTab={activeTab}
                        handleClick={handleButtonClick}
                      />
                    </li>
                  </ul>
                </div>
                <div className="ide-section">
                  <h3 className="ide-section__title">
                    <IconFolder />
                    config
                  </h3>
                  <ul className="ide-section__list ide-section__list--border">
                    <li>
                      <Button
                        title="_config.scss"
                        activeTab={activeTab}
                        handleClick={handleButtonClick}
                      />
                    </li>
                    <li>
                      <Button
                        title="_dark-colors.scss"
                        activeTab={activeTab}
                        handleClick={handleButtonClick}
                      />
                    </li>
                    <li>
                      <Button
                        title="_dark-mode.scss"
                        activeTab={activeTab}
                        handleClick={handleButtonClick}
                      />
                    </li>
                    <li>
                      <Button
                        title="_fonts.scss"
                        activeTab={activeTab}
                        handleClick={handleButtonClick}
                      />
                    </li>
                    <li>
                      <Button
                        title="_index.scss"
                        activeTab={activeTab}
                        handleClick={handleButtonClick}
                      />
                    </li>
                    <li>
                      <Button
                        title="_styles.scss"
                        activeTab={activeTab}
                        handleClick={handleButtonClick}
                      />
                    </li>
                  </ul>
                </div>
                <div className="ide-section">
                  <ul className="ide-section__list">
                    <li>
                        <Button
                          title="main.scss"
                          activeTab={activeTab}
                          handleClick={handleButtonClick}
                        />
                      </li>
                  </ul>
                </div>
            </aside>
            <div className="ide__body">
              <div className="ide__editor">
                <IdeSource type={activeTab} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
