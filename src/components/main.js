import React from 'react';
import PostsCard from './postsCard';
import Featured from './featured';
import Pagination from './pagination';

function Main() {
  return (
    <main className="main mb-5">
      <Featured />
      <PostsCard />
      <Pagination />
    </main>
  );
}

export default Main;
