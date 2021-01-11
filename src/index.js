import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './Services/redux/store'
import App from './components/Pages/app'
import Firebase, { FirebaseContext } from './Services/firebase/index'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <FirebaseContext.Provider value={new Firebase()}>
        <App />
      </FirebaseContext.Provider>{' '}
    </Provider>{' '}
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorkerRegistration.register()
reportWebVitals()
