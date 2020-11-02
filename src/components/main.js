import React from 'react';
import BlogCards from './blogCards';
import Featured from './featured';

function Main() {
  return (
    <main className="main mb-5">
      <Featured />
      <BlogCards />
    </main>
  );
}

export default Main;
