import React from 'react';

export default function IssueListError({ onGetIssues }) {
  return (
    <article
      style={{
        flex: 1
      }}
    >
      <section>
        <h1
          style={{
            fontSize: '1.6rem',
            lineHeight: '2rem',
            color: '#ee2554',
            textAlign: 'center',
            padding: '10% 0'
          }}
        >
          <div
            style={{
              color: '#1c1c1c'
            }}
          >
            죄송합니다.
          </div>
          <div
            style={{
              color: '#ee2554'
            }}
          >
            정보를 가져오는데 실패하였습니다.
          </div>
          <p
            style={{
              fontSize: '1rem',
              color: '#999',
              textAlign: 'center'
            }}
          >
            다시 시도하시거나, 새로고침을 해주시기 바랍니다.
          </p>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              marginTop: '10px'
            }}
          >
            <button
              type='button'
              style={{
                border: '1px solid #ee2554',
                height: '52px',
                width: '160px',
                color: '#fff',
                backgroundColor: '#ee2554',
                cursor: 'pointer'
              }}
              onClick={onGetIssues}
            >
              다시시도
            </button>
            <button
              type='button'
              style={{
                border: '1px solid #ee2554',
                height: '52px',
                width: '160px',
                color: '#fff',
                backgroundColor: '#ee2554',
                cursor: 'pointer'
              }}
              onClick={() => window.location.reload()}
            >
              새로고침
            </button>
          </div>
        </h1>
      </section>
    </article>
  );
}
