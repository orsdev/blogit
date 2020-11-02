import React from 'react';
import BlogCards from './blogCards';
import Featured from './featured';
import Pagination from './pagination';

function Main() {
  return (
    <main className="main mb-5">
      <Featured />
      <BlogCards />
      <Pagination />
    </main>
  );
}

export default Main;
