import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: '自然科普',
      imgUrl: 'https://upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    },
    {
      id: 2,
      title: '@IT·互联网',
      imgUrl: 'https://upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    },
    {
      id: 3,
      title: '旅行·在路上',
      imgUrl: 'https://upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    }
  ],
  articleList: [
    {
      id: 1,
      title: 'Python调用高德地图API实现经纬度换算、地图可视化',
      imgUrl: 'https://upload-images.jianshu.io/upload_images/12649257-5fa6a3c9d0665f83?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
      desc: '目前地图可视化的工具和函数比较多，但是在不知道相关地点经纬度的情况下，通过python调用高德地图API实现经纬度换算，并且直接在高德地图新推出...'
    },
    {
      id: 2,
      title: '她出道14年没能大火，演过邓超母亲',
      imgUrl: 'https://upload-images.jianshu.io/upload_images/12115128-86fa9a9d75b2164b.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
      desc: '《延禧攻略》最近大热，剧情已经进行到了魏璎珞准备开始复仇了，磨刀霍霍向娴妃、纯妃和尔晴，说起来虽然这三位都从里到外的黑化了，但是每个人也都有...'
    },
    {
      id: 3,
      title: '第一批95后已经被辞退了',
      imgUrl: 'https://upload-images.jianshu.io/upload_images/2521398-657f5b785dbc3ca7.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
      desc: '领英的最新职场报告指出，95后在职7个月就会选择离职。其实，不只是95后，所有的职场新人在半年内的离职率都是挺高的。跟年龄段没太大关系。 95后...'
    }
  ]
})

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
