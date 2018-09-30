import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
`

export const HomeLeft = styled.div`
  float: left;
  padding-top: 30px;
  padding-left: 15px;
  width: 625px;
  .banner-img {
    width: 625px;
    height: 270px;
    margin-bottom: 35px;
  }
`

export const HomeRight = styled.div`
  float: right;
  padding: 30px 0 0;
  margin-left: 40px;
  width: 280px;
`

export const TopicWrapper = styled.div`
  overflow: hidden;
  margin-left: -18px;
  margin-bottom: 20px;
  border-bottom: 1px solid #f0f0f0;
`

export const TopicItem = styled.div`
  float: left;
  margin-left: 18px;
  margin-bottom: 18px;
  padding-right: 10px;
  height: 32px;
  line-height: 32px;
  background: #f7f7f7;
  font-size: 14px;
  color: #333;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .topic-pic {
    display: block;
    float: left;
    margin-right: 10px;
    width: 32px;
    height: 32px;
  }
`

export const ListItem = styled.div`
  margin-bottom: 15px;
  padding: 15px 2px 20px 0;
  border-bottom: 1px solid #f0f0f0;
  .list-pic {
    float: right;
    width: 125px;
    height: 100px;
    border-radius: 4px;
  }
`

export const ListInfo = styled.div`
  padding-right: 140px;
  .title {
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
    margin-bottom: 2px;
  }
  .desc {
    margin-bottom: 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
`

export const LoadMore = styled.div`
  box-sizing: border-box;
  height: 40px;
  margin: 30px auto 60px;
  padding: 10px 15px;
  font-size: 15px;
  color: #fff;
  text-align: center;
  border-radius: 20px;
  background-color: #a5a5a5;
  cursor: pointer;
`

export const RecommendWrapper = styled.div`
  overflow: hidden;
  margin: 30px 0;
`

export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  margin-bottom: 6px;
  background: url(${props => props.imgUrl});
  background-size: contain;
`

export const WriterWrapper = styled.div`
  overflow: hidden;
  margin: 30px 0;
`

export const WriterInfo = styled.div`
  font-size: 14px;
  color: #969696;
`

export const WriterList = styled.div`

`

export const WriterItem = styled.div`
  margin: 15px 0 12px;
  line-height: 20px;
  .writer-pic {
    float: left;
    width: 48px;
    height: 48px;
    margin-right: 10px;
    border-radius: 50%;
    border: 1px solid #ddd;
  }
  .title {
    padding-top: 5px;
    margin-right: 60px;
    font-size: 14px;
  }
  .desc {
    margin-top: 2px;
    font-size: 12px;
    color: #969696;
  }
`

export const WriterFollow = styled.div`
  float: right;
  margin-top: 5px;
  font-size: 13px;
  color: #42c02e;
`

export const Qrcode = styled.div`
  overflow: hidden;
  margin-bottom: 30px;
  padding: 10px 22px;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  background: #fff;
  .qrcode-pic {
    float: left;
    width: 60px;
    height: 60px;
  }
  .title {
    margin-top: 12px;
    padding-left: 70px;
    font-size: 15px;
    color: #333;
  }
  .desc {
    padding-left: 70px;
    margin-top: 4px;
    font-size: 13px;
    color: #999;
  }
`
