import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import theme from "./theme.js"
import CodeContextProvider from './CodeContext/CodeContextProvider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <CodeContextProvider>
    <App />
    </CodeContextProvider>
    </ChakraProvider>
  </StrictMode>,
)
