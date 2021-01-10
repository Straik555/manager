import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import {StateProvider} from "./context/providerContext";
import App from "./App";

ReactDOM.render(
    <Router>
        <StateProvider>
            <Suspense fallback={<div>loading...</div>}>
                    <App />
            </Suspense>
        </StateProvider>
    </Router>,
  document.getElementById('root')
);

