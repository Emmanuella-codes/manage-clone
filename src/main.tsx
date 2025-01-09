import React from 'react'
import ReactDOM from 'react-dom/client'
// import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import { RouterProvider } from "react-router-dom";
import router from "./routes/index";
import { ChakraProvider } from '@chakra-ui/react';

// import { fonts, components } from './theme';

// import './index.css'
// import "@fontsource-variable/inter";


// const theme = extendTheme({ fonts, components })

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <ChakraProvider theme={theme}> */}
    <ChakraProvider >
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
