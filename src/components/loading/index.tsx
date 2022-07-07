import React, { Component } from 'react'
import { Alert, Spin } from 'antd';
export default class index extends Component {
  render() {
    return (
      <Spin tip="加载中...">
        <Alert
          message="页面正在加载中，请稍后"
          description="如果等待时间过长，请退出插件重新打开"
          type="info"
        />
      </Spin>
    )
  }
}
