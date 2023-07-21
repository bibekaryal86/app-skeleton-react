import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider as ReduxProvider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './app/components/App'
import store from './app/store/redux'

ReactDOM.createRoot(document.getElementById('app')).render(
  <ReduxProvider store={store}>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </ReduxProvider>,
)
