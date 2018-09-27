# react全家桶简书

## 使用immutable.js来管理store中的数据
1.使用`npm i immutable` 进行安装
2.immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象

## 使用redux-immutable统一数据格式
1.使用`npm i redux-immutable` 进行安装
2.使得mapStateToProps 中的state 也成为immutable对象
```js
// 之前
state.header.getIn('focuse')
// 之后
state.getIn(['header', 'focuse'])
```
3.修改`src/store/reducer.js` 文件，将`combineReducers` 的引入进行修改
```js
// 之前
import { combineReducers } from 'redux'
// 之后
import { combineReducers } from 'redux-immutable'
```
