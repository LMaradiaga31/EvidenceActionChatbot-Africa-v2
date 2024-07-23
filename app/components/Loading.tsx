// app/components/Loading.tsx
import React from 'react';
import './Loading.css'; // Ensure to create this CSS file

const Loading = () => {
  return (
    <div className="spinner-container">
      <div className="loading-spinner"></div>
    </div>
  );
};

export default Loading;
