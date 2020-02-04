import React from 'react'
import Head from 'next/head'
import ChatBot from 'react-simple-chatbot'
import { ThemeProvider } from 'styled-components'
import { withResizeDetector } from 'react-resize-detector'
import { createGlobalStyle } from 'styled-components'
import { config, dom } from '@fortawesome/fontawesome-svg-core'

config.autoAddCss = false
const GlobalStyles = createGlobalStyle`
    ${dom.css()}
`
import { theme, steps } from '../const/const'

const Home = ({ width, height }) => {
  let size = isNaN(height) ? 0 : height - 20 - 20

  return (
    <>
      <GlobalStyles />
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <ThemeProvider theme={theme}>
          <ChatBot
            className="chatbotContainer"
            steps={steps}
            hideHeader={true}
            hideSubmitButton={true}
            hideInput={true}
            inputStyle={{ display: 'none' }}
            footerStyle={{ display: 'none' }}
            width={'90%'}
            height={size}
            botAvatar={
              'https://avatars1.githubusercontent.com/u/22313101?s=400&u=e760d84f6591662a3feeb89c277e846ffaa65cf8&v=4'
            }
            hideUserAvatar={true}
            contentStyle={{ height: size, padding: '25px' }}
            bubbleOptionStyle={{
              fontFamily: 'Helvetica Neue',
              background: '#424969',
              color: '#F5F6F6',
              width: '100%'
            }}
            bubbleStyle={{ lineHeight: '1.5' }}
          />
        </ThemeProvider>
      </div>
      <style jsx global>{` 
        html, 
        body {
          height: 95%;
        }
        
        #__next{
          height:100%;
        }
        
        .container{
          height:95%
        }

        .chatbotContainer{
          padding: 10px 10px 0px 0px;
          display: flex;
          justify-content: center;
          align-items: 'center;
        }
        
        body{
          background:#638ADF;
        }

        .rsc-os-option{
          display:list-item !important;
        }

        .rsc-os-options{
          list-style-type: none !important;
        }
  `}</style>
    </>
  )
}

export default withResizeDetector(Home)
