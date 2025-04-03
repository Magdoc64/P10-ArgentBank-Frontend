import { createRoot } from 'react-dom/client'
import store from './app/store.js'
import { Provider } from 'react-redux'
import '../src/styles/index.css'
import App from './app/App.jsx'



createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App/>
  </Provider>,
)
