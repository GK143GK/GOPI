import React from 'react';
import reactDom from 'react-dom';
import { Display } from './Dhana';
import { Pet } from './Gopi';

// render("what to show and where to show")
reactDom.render(
<>
  
  <Pet/>
  <Display/>
</>
,document.getElementById("root")
)