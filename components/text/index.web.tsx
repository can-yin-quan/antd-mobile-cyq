import React from 'react';
import assign from 'object-assign';

const SIZE = {
  xxl: 20,
  xl: 18,
  lg: 16,
  md: 14,
  sm: 10,
}

export default class Text extends React.Component<any, any> {
  static defaultProps = {
    Component: 'div',
    size: 'md',
    color: '#333333',
    style: {},
  };
  render() {
    const props = assign({}, this.props);
    const { Component, size, color, style, children, ...restProps } = props;
    const textStyle = {
      fontSize: typeof size === 'string' ?  `${SIZE[size] * 2}px` : `${size * 2}px`, // size 类型是string获取对应数值
      color,
    };
    const textStyles = [
      textStyle,
      style,
    ];
    props.style = textStyles;
    if (Array.isArray(props.style)) {
      const style = {};
      props.style.forEach(s => {
        assign(style, s);
      });
      props.style = style;
    }
    return (
      <Component style={props.style} {...restProps}>
        {children}
      </Component>
    )
  }
}
