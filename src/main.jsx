import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App'
import { ApolloProvider } from '@apollo/client';
import { client } from './apolloClient.jsx';
import { AuthProvider } from './components/Contextapi/AuthContext.jsx';
import './index.css'




createRoot(document.getElementById('root')).render(
  <StrictMode>
<BrowserRouter>
<ApolloProvider client={client}>
<AuthProvider>
    <App />
    </AuthProvider>
  </ApolloProvider>
          </BrowserRouter>    
  </StrictMode>,
)
