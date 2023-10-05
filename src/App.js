import React, { useState } from 'react';
import './App.css';

function App() {
  function likeBtn() {
    return Btn(like + 1);
  }

  let [blogTit, writtenTit] = useState([
    '가을 안부',
    '가을 안부2',
    '가을 안부3',
  ]);
  let [like, Btn] = useState(0);

  return (
    <div className="container">
      <nav className="menu">
        <p>개발 BLOG</p>
      </nav>
      <button>버튼</button>
      <div className="blog-list">
        <h2>
          {blogTit[0]} <button onClick={likeBtn}>❤️</button> {like}
        </h2>
        <p>2023. 10. 05 작성</p>
        <hr />
      </div>
      <div className="blog-list">
        <h2>{blogTit[1]}</h2>
        <p>2023. 10. 04 작성</p>
        <hr />
      </div>
      <div className="blog-list">
        <h2>{blogTit[2]}</h2>
        <p>2023. 10. 04 작성</p>
        <hr />
      </div>
    </div>
  );
}
export default App;
