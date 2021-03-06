import React from 'react';
import { View, } from 'react-native';
import BadgeStyle from './style/index';
import BadgeProps from './PropsType';
import Text from '../text';

export default class Badge extends React.Component<BadgeProps, any> {
  static defaultProps = {
    size: 'small',
    overflowCount: 99,
    dot: false,
    corner: false,
    styles: BadgeStyle,
  };

  render() {
    let {
      styles, style,
      children, text, size, overflowCount, dot, corner, hot, ...restProps // todo: hot
    } = this.props;

    text = typeof text === 'number' && text > (overflowCount as number) ? `${overflowCount}+` : text;

    // dot mode don't need text
    if (dot) {
      text = '';
    }

    const badgeCls = corner ? 'textCorner' : 'textDom';
    const contentDom = !dot ? (
      <View {...restProps} style={[styles[badgeCls], styles[`${badgeCls}${size}`], hot && styles.hot]}>
        <Text style={[styles.text]}>{text}</Text>
      </View>
    ) : <View {...restProps} style={[styles.dot, styles[`dotSize${size}`], hot && styles.hot]} />;

    return (
      <View style={[ styles.wrap, style ]}>
        <View style={[styles[`${badgeCls}Wrap`]]}>
          {children}
          {(text || dot) ? contentDom : null}
        </View>
      </View>
    );
  }
}
