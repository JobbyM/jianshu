import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  WriterWrapper,
  WriterInfo,
  WriterList,
  WriterItem,
  WriterFollow
} from '../style'

class Writer extends Component {
  render() {
    const { list } = this.props

    return (
      <WriterWrapper>
        <WriterInfo>
          推荐作者
        </WriterInfo>
        <WriterList>
          {
            list.map((item) => (
              <WriterItem key={item.get('id')}>
                <img alt='' className='writer-pic' src={item.get('imgUrl')}/>
                <WriterFollow>
                  <i className="iconfont">&#xe659;</i>
                  关注
                </WriterFollow>
                <h4 className='title'>{item.get('title')}</h4>
                <p className='desc'>{item.get('desc')}</p>
              </WriterItem>
            ))
          }
        </WriterList>
      </WriterWrapper>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'writerList'])
})

export default connect(mapState, null)(Writer)
