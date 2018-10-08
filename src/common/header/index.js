import React, { Component } from 'react'
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
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList,
  Addition,
  Button
} from './style'
import { Link } from 'react-router-dom'
import { actionCreators as loginActionCreators } from '../../pages/login/store'

class Header extends Component {

  getListArea() {
    const { mouseIn, focused, list, page, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props
    const newList = list.toJS()
    const pageList = []

    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10 && i < newList.length ; i ++) {
        pageList.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>)
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={() => handleChangePage(page, totalPage, this.spinIcon)}
            >
              <i
                ref={(icon) => {this.spinIcon = icon}}
                className="iconfont spin"
              >&#xe851;</i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {
              pageList.length === 0 ? '' : pageList
            }
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null;
    }
  }

  render() {
    const { focused, logout, handleInputFocus, handleInputBlur, list, login } = this.props
    return (
      <HeaderWrapper>
        <Link to='/'>
          <Logo />
        </Link>
        <Nav>
          <Link to='/'>
            <NavItem className="left active">首页</NavItem>
          </Link>
          <NavItem className="left">下载App</NavItem>
          {
            login ?
            <NavItem onClick={logout} className="right">退出</NavItem> :
            <Link to='/login'><NavItem className="right">登录</NavItem></Link>
          }

          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={focused ? 'focused': ''}
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i
              className={focused ? 'iconfont focused zoom': 'iconfont zoom'}
            >
              &#xe61d;
            </i>
            {this.getListArea()}
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
}

const mapStateToProps = (state) => ({
  focused: state.getIn(['header', 'focused']),
  list: state.getIn(['header', 'list']),
  page: state.getIn(['header', 'page']),
  totalPage: state.getIn(['header', 'totalPage']),
  mouseIn: state.getIn(['header', 'mouseIn']),
  login: state.getIn(['login', 'login'])
})

const mapDispatchToProps = (dispatch) => ({
  handleInputFocus(list) {
    (list.size === 0) && dispatch(actionCreators.getList())
    dispatch(actionCreators.searchFocus())
  },
  handleInputBlur() {
    dispatch(actionCreators.searchBlur())
  },
  handleMouseEnter() {
    dispatch(actionCreators.mouseEnter())
  },
  handleMouseLeave() {
    dispatch(actionCreators.mouseLeave())
  },
  handleChangePage(page, totalPage, spin) {
    let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
    if (originAngle) {
      originAngle = parseInt(originAngle, 10)
    } else {
      originAngle = 0
    }
    spin.style.transform = `rotate(${originAngle + 360}deg)`

    if (page < totalPage) {
      dispatch(actionCreators.changePage(page + 1))
    } else {
      dispatch(actionCreators.changePage(1))
    }
  },
  logout() {
    dispatch(loginActionCreators.logout())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
