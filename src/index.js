import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import  BlogPostList from './BlogPostList'

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render(
  <BlogPostList />,
  document.getElementById('posts')
)