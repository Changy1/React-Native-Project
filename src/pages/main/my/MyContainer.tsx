/* import React, { Component } from 'react'
import { View, WebView } from 'react-native'

class MyContainer extends Component {
    render () {
        return (
            <View style = {{ flex: 1 }}>
                <WebView
                    style = {{ flex: 1 }}
                    source = {{ uri: 'https://www.baidu.com'}}
                >    
                </WebView>
            </View>
        )    
    }
}

export default MyContainer */

import React from 'react';
import { Text, View, TouchableOpacity, Button, Image } from 'react-native';
import { Camera, Permissions } from 'expo';

interface Props {

}
interface State {
    hasCameraPermission: boolean,
    type: any,
    isShow: boolean,
    url: string
}

export default class MyContainer extends React.Component<Props,State> {
    camera: any
    constructor(props: any) {
        super(props)
        this.state = {
            hasCameraPermission: null,
            type: Camera.Constants.Type.back,
            isShow: false,
            url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544031792517&di=c51ad67b2a574424803111eb3592bd17&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201608%2F16%2F20160816210110_KXSJm.jpeg'
        }
    }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />; 
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Button
            title = '拍照'
            onPress = {() => {
              this.setState({ isShow: !this.state.isShow})
            }}
          >
          </Button>
          { 
            !this.state.isShow && (
              <Image style = {{height: 400, width: 300, marginLeft: 30, marginTop: 50}} source = {{uri: this.state.url}}/>
            ) 
          }
          {
            this.state.isShow && (
              <Camera
              ref={(ref: any) => { this.camera = ref; }}
              style={{ flex: 1 }} type={this.state.type}>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: 'transparent',
                    flexDirection: 'row',
                  }}>
                  {/* 前置后置切换 */}
                  <TouchableOpacity
                    style={{
                      flex: 0.1,
                      alignSelf: 'flex-end',
                      alignItems: 'center',
                    }}
                    onPress={() => {
                      this.setState({
                        type: this.state.type === Camera.Constants.Type.back
                          ? Camera.Constants.Type.front
                          : Camera.Constants.Type.back,
                      });
                    }}>
                    <Text
                      style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                      {' '}Flip{' '}
                    </Text>
                  </TouchableOpacity>
                  {/* 取消拍照 */}
                  <TouchableOpacity
                    style={{
                      flex: 0.1,
                      alignSelf: 'flex-end',
                      alignItems: 'center',
                    }}
                    onPress={() => {
                      this.setState({
                        isShow: !this.state.isShow
                      });
                    }}>
                    <Text
                      style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                        取消拍照
                    </Text>
                  </TouchableOpacity>
                  {/* 拍照 */}
                  <TouchableOpacity
                    style={{
                      flex: 0.1,
                      alignSelf: 'flex-end',
                      alignItems: 'center',
                    }}
                    onPress={async() => {
                      let data = await this.camera.takePictureAsync()
                      this.setState({
                        url: data.uri,
                        isShow: !this.state.isShow
                      })
                    }}>
                    <Text
                      style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                        拍照
                    </Text>
                  </TouchableOpacity>
                </View>
              </Camera>
            )
          }
        </View>
      );
    }
  }
}