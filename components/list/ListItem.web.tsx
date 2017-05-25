/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import classNames from 'classnames';
import Touchable from 'rc-touchable';
import { ListItemProps, BriefProps } from './PropsType';

export class Brief extends React.Component<BriefProps, any> {
  render() {
    return (
      <div className="am-list-brief" style={this.props.style}>{this.props.children}</div>
    );
  }
}

class ListItem extends React.Component<ListItemProps, any> {
  static defaultProps = {
    prefixCls: 'am-list',
    align: 'middle',
    error: false,
    multipleLine: false,
    wrap: false,
    platform: 'cross',
  };

  static Brief = Brief;
  debounceTimeout: any;

  constructor(props) {
    super(props);
    this.state = {
      coverRipleStyle: {},
      RipleClicked: false,
    };
  }

  componentWillUnmount() {
    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout);
      this.debounceTimeout = null;
    }
  }

  onClick = (ev) => {
    const { onClick, platform } = this.props;
    const isAndroid = platform === 'android' || (platform === 'cross' && !!navigator.userAgent.match(/Android/i));
    if (!!onClick && isAndroid) {
      if (this.debounceTimeout) {
        clearTimeout(this.debounceTimeout);
        this.debounceTimeout = null;
      }
      let Item = ev.currentTarget;
      let RipleWidth = Math.max(Item.offsetHeight, Item.offsetWidth);
      const ClientRect = ev.currentTarget.getBoundingClientRect();
      let pointX = ev.clientX - ClientRect.left - Item.offsetWidth / 2;
      let pointY = ev.clientY - ClientRect.top - Item.offsetWidth / 2;
      const coverRipleStyle = {
        width: `${RipleWidth}px`,
        height: `${RipleWidth}px`,
        left: `${pointX}px`,
        top: `${pointY}px`,
      };
      this.setState({
        coverRipleStyle,
        RipleClicked: true,
      }, () => {
        this.debounceTimeout = setTimeout(() => {
          this.setState({
            coverRipleStyle: {},
            RipleClicked: false,
          });
        }, 1000);
      });
    }

    if (onClick) {
      onClick(ev);
    }
  }

  render() {

    const {
      prefixCls, className, activeStyle, error, align, wrap, disabled,
      children, multipleLine, thumb, extra, arrow, onClick, platform, ...restProps} = this.props;

    const { coverRipleStyle, RipleClicked } = this.state;
    const wrapCls = {
      [className as string]: className,
      [`${prefixCls}-item`]: true,
      [`${prefixCls}-item-disabled`]: disabled,
      [`${prefixCls}-item-error`]: error,
      [`${prefixCls}-item-top`]: align === 'top',
      [`${prefixCls}-item-middle`]: align === 'middle',
      [`${prefixCls}-item-bottom`]: align === 'bottom',
    };

    const ripleCls = classNames({
      [`${prefixCls}-riple`]: true,
      [`${prefixCls}-riple-animate`]: RipleClicked,
    });

    const lineCls = classNames({
      [`${prefixCls}-line`]: true,
      [`${prefixCls}-line-multiple`]: multipleLine,
      [`${prefixCls}-line-wrap`]: wrap,
    });

    const arrowCls = classNames({
      [`${prefixCls}-arrow`]: true,
      [`${prefixCls}-arrow-horizontal`]: arrow && arrow.indexOf('horizontal') > -1,
      [`${prefixCls}-arrow-vertical`]: (arrow && arrow.indexOf('down') > -1) || (arrow && arrow.indexOf('up') > -1) ,
      [`${prefixCls}-arrow-vertical-up`]: arrow && arrow.indexOf('up') > -1,
      [`${prefixCls}-arrow-yellow`]: arrow && arrow.indexOf('yellow') > -1,
    });

    const isAndroid = platform === 'android' || (platform === 'cross' && !!navigator.userAgent.match(/Android/i));
    const content = <div
      {...restProps}
      onClick={(ev) => {
        this.onClick(ev);
      }}
      className={classNames(wrapCls)}
    >
      {thumb ? <div className={`${prefixCls}-thumb`}>
        {typeof thumb === 'string' ? <img src={thumb} /> : thumb}
      </div> : null}
      <div className={lineCls}>
        {children !== undefined && <div className={`${prefixCls}-content`}>{children}</div>}
        {extra !== undefined && <div className={`${prefixCls}-extra`}>{extra}</div>}
        {arrow && <div className={arrowCls} />}
      </div>
      {isAndroid && <div style={coverRipleStyle} className={ripleCls} />}
    </div>;

    return (
      <Touchable
        disabled={disabled || !onClick}
        activeStyle={activeStyle}
        activeClassName={`${prefixCls}-item-active`}
      >
        {content}
      </Touchable>
    );
  }
}

export default ListItem;
