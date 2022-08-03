import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './imports';
import './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img alt="" src={google} />
    </div>
    <div>
      <img alt="" src={slack} />
    </div>
    <div>
      <img alt="" src={atlassian} />
    </div>
    <div>
      <img alt="" src={dropbox} />
    </div>
    <div>
      <img alt="" src={shopify} />
    </div>
  </div>
);

export default Brand;
