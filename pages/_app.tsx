'use strict';
import '../styles/globals.css'
import { ThemeProvider } from 'styled-components'
import type { AppProps } from 'next/app'

const theme = {
  colors: {
    yt_general_background_solid: "#212121",
    yt_general_white: "#fff",
    yt_general_white_10percent: "rgba(255, 255, 255, .1)",
    yt_general_white_20percent: "rgba(255, 255, 255, .2)",
    yt_general_background_a: "#181818",
    yt_general_background_b: "#0f0f0f",
    yt_general_background_c: "#030303",

    yt_text_primary: "#fff",
    yt_text_primary_inverse: "#030303",
    yt_text_secondary: "#aaa",
    yt_text_disabled: "#717171",
    yt_text_call_to_action: "#3ea6ff",
    yt_icon_active_other: "#fff",
    yt_icon_inactive: "#909090",
  },
}


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
