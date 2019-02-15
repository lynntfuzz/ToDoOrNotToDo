import React from 'react';

export default class AdComponent extends React.Component {
  componentDidMount () {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }


  render () {
    return (
      <div className='Ad'>
        <ins className='adsbygoogle'
          style={{ display: 'block' }}
          data-ad-client='ca-pub-8526877968895519'
          data-ad-slot='1234567890'
          data-ad-format='auto' />
      </div>
    );
  }
}