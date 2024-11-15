/**
 * Codia React Native App
 * https://codia.ai
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView
        scrollEnabled={true}
        contentInsetAdjustmentBehavior="automatic">
        <View
          style={{
            width: 'auto',
            // height: 852,
            fontSize: 0,
            backgroundColor: '#ffffff',
          }}>
          <Text
            style={{
              height: 31,
              fontFamily: 'Krona One',
              fontSize: 24,
              fontWeight: '400',
              lineHeight: 30,
              position: 'relative',
              textAlign: 'left',
              zIndex: 7,
              marginTop: 65,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 113,
              color: 'black',
            }}
            numberOfLines={1}>
            GOTTA GO
          </Text>
          <Text
            style={{
              height: 22,
              fontFamily: 'Inter',
              fontSize: 15,
              fontWeight: '600',
              lineHeight: 18.153,
              color: '#a7a7a7',
              position: 'relative',
              textAlign: 'left',
              zIndex: 9,
              marginTop: 40,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 144,
            }}
            numberOfLines={1}>
            Message From
          </Text>
          <Text
            style={{
              height: 32,
              fontFamily: 'Lexend Deca',
              fontSize: 25,
              fontWeight: '500',
              lineHeight: 31.25,
              position: 'relative',
              textAlign: 'left',
              zIndex: 10,
              marginTop: 3,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 125,
            }}
            numberOfLines={1}>
            9856321470
          </Text>
          <Text
            style={{
              display: 'flex',
              width: 115,
              height: 22,
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              fontFamily: 'Inter',
              fontSize: 12,
              fontWeight: '600',
              lineHeight: 14.523,
              color: '#828282',
              position: 'relative',
              textAlign: 'left',
              zIndex: 12,
              marginTop: 11,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 26,
            }}>
            Insert Your Number
          </Text>
          <View
            style={{
              width: 353,
              height: 54,
              backgroundColor: '#ffffff',
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
              borderBottomLeftRadius: 10,
              borderWidth: 1,
              borderColor: '#e4f1ff',
              borderStyle: 'solid',
              position: 'relative',
              zIndex: 14,
              marginTop: 2,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 21,
            }}>
            <ImageBackground
              style={{
                width: '0.28%',
                height: '100%',
                position: 'absolute',
                top: '-1.85%',
                left: '24.65%',
                zIndex: 15,
              }}
              source={require('./assets/images/daea5331-c4c3-4fdc-a84f-e9ac7e11b499.png')}
            />
            <View
              style={{
                width: '7.65%',
                height: '50%',
                position: 'absolute',
                top: '24.07%',
                left: '2.55%',
                overflow: 'hidden',
                zIndex: 18,
              }}>
              <View
                style={{
                  width: 27,
                  height: 19.286,
                  position: 'relative',
                  zIndex: 19,
                  marginTop: 3.857,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 0,
                }}>
                <View
                  style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 20,
                  }}>
                  <ImageBackground
                    style={{
                      width: '100%',
                      height: '100%',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      zIndex: 21,
                    }}
                    source={require('./assets/images/77c299a8-e97b-4b75-86ce-d59d6e4a7868.png')}
                  />
                  <View
                    style={{
                      width: '100%',
                      height: '100%',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      zIndex: 22,
                    }}>
                    <View
                      style={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        zIndex: 23,
                      }}>
                      <ImageBackground
                        style={{
                          width: '100%',
                          height: '100%',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          zIndex: 24,
                        }}
                        source={require('./assets/images/7a60db2b-8b94-4680-9389-44c148f58177.png')}
                      />
                      <ImageBackground
                        style={{
                          width: '42.86%',
                          height: '46.67%',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          zIndex: 25,
                        }}
                        source={require('./assets/images/8d609371-6093-4be6-be8f-03925f8c2117.png')}
                      />
                      <View
                        style={{
                          width: '33.33%',
                          height: '33.33%',
                          position: 'absolute',
                          top: '6.67%',
                          left: '4.76%',
                          zIndex: 26,
                        }}>
                        <ImageBackground
                          style={{
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            zIndex: 27,
                          }}
                          source={require('./assets/images/ab4393ba-c550-470d-bbdf-1b1f3e8d7fcd.png')}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <ImageBackground
              style={{
                width: '6.23%',
                height: '40.74%',
                position: 'absolute',
                top: '27.78%',
                left: '17.85%',
                overflow: 'hidden',
                zIndex: 29,
              }}
              source={require('./assets/images/62686ac4-61ff-4241-8695-caedde98792d.png')}
            />
            <Text
              style={{
                display: 'flex',
                height: '16.67%',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'Inter',
                fontSize: 15,
                fontWeight: '400',
                lineHeight: 9,
                color: '#9c9c9c',
                position: 'absolute',
                top: '40.74%',
                left: '29.46%',
                textAlign: 'left',
                zIndex: 16,
              }}
              numberOfLines={1}>
              Phone Number
            </Text>
            <Text
              style={{
                display: 'flex',
                height: '16.67%',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'Inter',
                fontSize: 15,
                fontWeight: '400',
                lineHeight: 9,
                color: '#000000',
                position: 'absolute',
                top: '40.74%',
                left: '11.61%',
                textAlign: 'left',
                zIndex: 28,
              }}
              numberOfLines={1}>
              +1
            </Text>
          </View>
          <Text
            style={{
              display: 'flex',
              width: 186,
              height: 22,
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              fontFamily: 'Inter',
              fontSize: 12,
              fontWeight: '600',
              lineHeight: 14.523,
              color: '#828282',
              position: 'relative',
              textAlign: 'left',
              zIndex: 31,
              marginTop: 33,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 26,
            }}>
            Write the text you want to send
          </Text>
          <View
            style={{
              width: 353,
              height: 161,
              backgroundColor: '#ffffff',
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
              borderBottomLeftRadius: 10,
              borderWidth: 1,
              borderColor: '#e4f1ff',
              borderStyle: 'solid',
              position: 'relative',
              zIndex: 33,
              marginTop: 2,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 21,
            }}>
            <Text
              style={{
                display: 'flex',
                height: '5.59%',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'Inter',
                fontSize: 15,
                fontWeight: '400',
                lineHeight: 9,
                color: '#9c9c9c',
                position: 'absolute',
                top: '13.04%',
                left: '2.55%',
                textAlign: 'left',
                zIndex: 34,
              }}
              numberOfLines={1}>
              Write your Text (160 Characters Max.)
            </Text>
          </View>
          <Text
            style={{
              display: 'flex',
              width: 228,
              height: 22,
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              fontFamily: 'Inter',
              fontSize: 12,
              fontWeight: '600',
              lineHeight: 14.523,
              color: '#828282',
              position: 'relative',
              textAlign: 'left',
              zIndex: 36,
              marginTop: 33,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 26,
            }}>
            Select the Time you Want the Call
          </Text>
          <View
            style={{
              width: 353,
              height: 54,
              backgroundColor: '#ffffff',
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
              borderBottomLeftRadius: 10,
              borderWidth: 1,
              borderColor: '#e4f1ff',
              borderStyle: 'solid',
              position: 'relative',
              zIndex: 38,
              marginTop: 0,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 21,
            }}>
            <View
              style={{
                width: '27.76%',
                height: '100%',
                backgroundColor: '#94cdff',
                borderTopLeftRadius: 0,
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
                borderBottomLeftRadius: 0,
                position: 'absolute',
                top: '-1.85%',
                left: '71.95%',
                zIndex: 45,
              }}>
              <Text
                style={{
                  display: 'flex',
                  height: '29.63%',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  fontFamily: 'Inter',
                  fontSize: 15,
                  fontWeight: '600',
                  lineHeight: 16,
                  color: '#4b4b4b',
                  position: 'absolute',
                  top: '35.19%',
                  left: '14.29%',
                  textAlign: 'left',
                  zIndex: 47,
                }}
                numberOfLines={1}>
                Schedule
              </Text>
            </View>
            <ImageBackground
              style={{
                width: '0.28%',
                height: '65.48%',
                position: 'absolute',
                top: '14.81%',
                left: '13.31%',
                zIndex: 40,
              }}
              source={require('./assets/images/45e1bc9f-831e-4a11-aebb-dc06b5b8dfb1.png')}
            />
            <View
              style={{
                width: '6.8%',
                height: '44.44%',
                position: 'absolute',
                top: '23.55%',
                left: '2.55%',
                overflow: 'hidden',
                zIndex: 41,
              }}>
              <View
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  zIndex: 42,
                }}>
                <View
                  style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 43,
                  }}>
                  <ImageBackground
                    style={{
                      width: '100%',
                      height: '100%',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      zIndex: 44,
                    }}
                    source={require('./assets/images/93dcdc42-540f-4f99-9cde-6233d7a8d7dc.png')}
                  />
                </View>
              </View>
            </View>
            <Text
              style={{
                display: 'flex',
                height: '16.67%',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'Inter',
                fontSize: 15,
                fontWeight: '400',
                lineHeight: 9,
                color: '#9c9c9c',
                position: 'absolute',
                top: '37.04%',
                left: '17.28%',
                textAlign: 'left',
                zIndex: 39,
              }}
              numberOfLines={1}>
              Select Time
            </Text>
          </View>
          <ImageBackground
            style={{
              width: 353,
              height: 129,
              position: 'relative',
              zIndex: 49,
              marginTop: 84,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 20,
            }}
            source={require('./assets/images/a0528180-6ede-45f8-9d14-758b261d24cf.png')}
          />
          <View
            style={{
              width: 84,
              height: 42,
              backgroundColor: '#efebeb',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              borderBottomRightRadius: 20,
              borderBottomLeftRadius: 20,
              position: 'absolute',
              top: 13,
              left: 289,
              zIndex: 1,
            }}>
            <ImageBackground
              style={{
                width: 40,
                height: 40,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20,
                borderBottomLeftRadius: 20,
                position: 'absolute',
                top: 1,
                left: 43,
                zIndex: 3,
              }}
              source={require('./assets/images/c9434724-ada3-45ee-b27b-3e7d5f81ee19.png')}
              resizeMode="cover">
              <View
                style={{
                  width: 24,
                  height: 24,
                  position: 'relative',
                  overflow: 'hidden',
                  zIndex: 5,
                  marginTop: 8,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 8,
                }}>
                <ImageBackground
                  style={{
                    width: 22.138,
                    height: 20.843,
                    position: 'relative',
                    zIndex: 6,
                    marginTop: 1.579,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 0.93,
                  }}
                  source={require('./assets/images/e50d7e52-66a1-4a5a-a15c-71595ef03075.png')}
                />
              </View>
            </ImageBackground>
            <ImageBackground
              style={{
                width: 24,
                height: 24,
                position: 'absolute',
                top: 9,
                left: 9,
                overflow: 'hidden',
                zIndex: 4,
              }}
              source={require('./assets/images/98bc1633-bd67-4cd1-803e-72e41e6823a2.png')}
              resizeMode="cover"
            />
          </View>
          <ImageBackground
            style={{
              width: '10.18%',
              height: '4.69%',
              position: 'absolute',
              top: '1.64%',
              left: '5.09%',
              zIndex: 48,
            }}
            source={require('./assets/images/35bdbd10-1838-46c7-bb01-a222223942a9.png')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
