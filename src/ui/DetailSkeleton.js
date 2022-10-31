import React from 'react';

export default function DetailSkeleton() {
  return (
    <article
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <header>
        <section
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
        >
          <div className='skeleton' style={{ width: '4rem', height: '4rem' }} />
          <div className='skeleton' style={{ flex: 1, height: '4rem' }} />
        </section>
        <div
          className='skeleton'
          style={{
            width: '100%',
            height: '30px',
            marginTop: '10px'
          }}
        />

        <div
          className='skeleton'
          style={{
            width: '100%',
            height: '1px',
            marginTop: '10px',
            marginBottom: '30px'
          }}
        />
      </header>
      <main style={{ flex: 1 }} />
    </article>
  );
}
