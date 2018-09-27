import React from 'react'
import { connect } from 'react-redux'
import { actionCreators }  from './store'
import { CSSTransition } from 'react-transition-group'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  Addition,
  Button
} from './style'

const Header = (props) => {
  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className="left active">首页</NavItem>
        <NavItem className="left">下载App</NavItem>
        <NavItem className="right">登录</NavItem>
        <NavItem className="right">
          <i className="iconfont">&#xe636;</i>
        </NavItem>
        <SearchWrapper>
          <CSSTransition
            in={props.focused}
            timeout={200}
            classNames="slide"
          >
            <NavSearch
              className={props.focused ? 'focused': ''}
              onFocus={props.handleInputFocus}
              onBlur={props.handleInputBlur}
            ></NavSearch>
          </CSSTransition>
          <i
            className={props.focused ? 'iconfont focused': 'iconfont'}
          >
            &#xe61d;
          </i>
        </SearchWrapper>
      </Nav>
      <Addition>
        <Button className="writing">
          <i className="iconfont">&#xe728;</i>
          写文章
        </Button>
        <Button className="reg">注册</Button>
      </Addition>
    </HeaderWrapper>
  )
}

const mapStateToProps = (state) => ({
  focused: state.getIn(['header', 'focused'])
})

const mapDispatchToProps = (dispatch) => ({
  handleInputFocus() {
    dispatch(actionCreators.searchFocus())
  },
  handleInputBlur() {
    dispatch(actionCreators.searchBlur())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
