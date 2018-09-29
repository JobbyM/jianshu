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
