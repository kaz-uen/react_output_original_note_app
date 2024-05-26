import React from 'react';
import './Main.css';

const Main = () => {
  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input
          type="text"
          // value={activeNote.title}
          // onChange={(e) => onEditNote("title", e.target.value)}
          id="title"
        />
        <textarea
          placeholder="ノート内容を記入"
          // value={activeNote.content}
          // onChange={(e) => onEditNote("content", e.target.value)}
          id="content"
        ></textarea>
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">
          {/* {activeNote.title} */}
        </h1>
        <p className="markdown-preview">
          {/* {activeNote.content} */}
        </p>
      </div>
    </div>
  )
}

export default Main;
