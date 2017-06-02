// export { Text as default } from 'react-native';

import React from 'react';
import { Text as RNText } from 'react-native';
import tsProps from './PropsType';

const SIZE = {
  large: 16,  // for legcy code
  medium: 14, // for legcy code
  small: 10, // for legcy code
  xxl: 20,
  xl: 18,
  lg: 16,
  md: 14,
  sm: 10,
}

export default class Text extends React.Component<tsProps, any> {
  static defaultProps = {
    size: 'medium',
    color: '#333333',
    style: {},
  }
  constructor(props) {
    super(props);
  }

  render() {
    const { size, color, style, children, ...restProps } = this.props;
    
    const textStyle = {
      fontSize: typeof size === 'string' ?  SIZE[size] : size, // size 类型是string获取对应数值
      color,
    };
    const textStyles = [
      textStyle,
      style,
    ];
    return(
      <RNText style={textStyles} { ...restProps }>
        {children}
      </RNText>
    );
  }
}