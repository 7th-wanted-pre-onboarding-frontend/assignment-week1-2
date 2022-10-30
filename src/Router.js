import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import IssueDetailPage from './pages/IssueDetailPage';
import IssuesPage from './pages/IssuesPage';
import NotFoundPage from './pages/NotFoundPage';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/issues' replace />} />
        <Route path='/issues' element={<IssuesPage />} />
        <Route path='/issue/:issueId' element={<IssueDetailPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
