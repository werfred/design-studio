import {createGlobalStyle, css} from 'styled-components'
import {normalize} from 'styled-normalize'


export const ScrollBar = css`
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #C4C4C4;
    border-left: 2px solid var(--color-light-bg);
    border-right: 2px solid var(--color-light-bg);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color-text);
    border-radius: 34px;
  }
`

export const GlobalStyles = createGlobalStyle`
  ${normalize}
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;

    --color-text: #b2b2b2;
    --color-primary: #5F47CA;
    --color-light-bg: #F4F5FA;
    --color-dark-bg: #141416;
    --color-grey-bg: #18181a;
    --color-primary-gradient: linear-gradient(270deg, #5332AF 0%, #6E60EA 100%);
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  img {
    max-width: 100%;
    display: block;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-size: inherit;
    font-weight: inherit;
  }

  body {
    overflow-x: hidden;
    position: relative;
    color: #fff;
    font-family: 'Nunito', sans-serif;
    font-size: 16px;
    line-height: 1.2;

    -webkit-tap-highlight-color: transparent;
  }

  ::-moz-selection {
    background-color: #6542ee;
    color: #fff;
  }

  ::selection {
    background-color: #6542ee;
    color: #fff;
  }
`
