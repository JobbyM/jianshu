import React, { Component } from 'react'

import {
  Qrcode
} from '../style'

class Download extends Component {
  render() {
    return (
      <Qrcode>
        <img
          className='qrcode-pic'
          alt=''
          url='https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png'/>
        <h3 className='title'>下载简书手机App</h3>
        <p className='desc'>随时随地发现和创作内容</p>
      </Qrcode>
    )
  }
}

export default Download
