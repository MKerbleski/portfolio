import React from 'react';
import {Route, Link} from 'react-router-dom';

const AllContactTabs = () => {
  return (
    <div className="all-contact-tabs">
      <div className="logo" href="https://angel.co/kerbleski"><i class="fab fa-angellist"></i></div>
      <div className="logo" href="https://twitter.com/kerbleski"><i class="fab fa-twitter"></i></div>
      <div className="logo" href="https://github.com/kerbleski"><i class="fab fa-github"></i></div>
      --
      <div className="logo">&#9728;</div>
      <div className="logo">&#9790;</div>
    </div>
  )
}

export default AllContactTabs;
