import React from 'react';

export default function Banner() {
  return (
    <a
      href='https://www.wanted.co.kr/'
      target='blank'
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '60px',
        gap: '10px',
        textDecoration: 'none',
        backgroundColor: '#D6A2E820',
        marginTop: '10px'
      }}
    >
      <img
        src='https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100'
        alt='ad'
      />
      <h6>원티드 Wanted - 취업, 이직, 커리어 콘텐츠</h6>
    </a>
  );
}
