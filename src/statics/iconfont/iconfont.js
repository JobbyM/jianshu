import { injectGlobal } from 'styled-components'

injectGlobal`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1538268533967'); /* IE9*/
    src: url('./iconfont.eot?t=1538268533967#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
    url('./iconfont.ttf?t=1538268533967') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1538268533967#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
