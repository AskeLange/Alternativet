

// Imports
import React from 'react';
import ReactDOM from 'react-dom';

import Instance from './instance';
import { store } from './store';
import './styling/base.scss';

// Main render
let root = document.getElementById ('root');
ReactDOM.render (<Instance store={store} />, root);