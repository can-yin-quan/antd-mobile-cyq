/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import { View, Image, } from 'react-native';
import RNAccordion from 'react-native-collapsible/Accordion';
import AccordionProps from './PropsType';
import AccordionStyle from './style/index';
import Icon from '../icon';
import Text from '../text';

export interface AccordionPanelProps {
  key?: string;
  header?: any;
  renderHeader?: (section: any, isActive: boolean, arrEnum: any) => any;
}

class AccordionPanel extends React.Component<AccordionPanelProps, any> {
  render() {
    return null;
  }
}

const arrEnum = {
  horizontal: <Image source={require('../style/images/arrow.png')} style={AccordionStyle.Arrow} />,
  down: <Image source={require('../style/images/arrow-down.png')} style={AccordionStyle.ArrowV} />,
  up: <Image source={require('../style/images/arrow-up.png')} style={AccordionStyle.ArrowV} />,
  horizontalYellow: <Image source={require('../style/images/arrow-y.png')} style={AccordionStyle.Arrow} />,
  downYellow: <Image source={require('../style/images/arrow-down-y.png')} style={AccordionStyle.ArrowV} />,
  upYellow: <Image source={require('../style/images/arrow-up-y.png')} style={AccordionStyle.ArrowV} />,
};

class Accordion extends React.Component<AccordionProps, any> {
  static defaultProps = {
    styles: AccordionStyle,
  };

  static Panel: any;

  _renderHeader = (section, _, isActive) => {
    // Leo: 支持自定义 header
    if (section.renderHeader) {
      return section.renderHeader(section, isActive, arrEnum);
    }

    let arrow = arrEnum.downYellow;;
    if (isActive) {
      arrow = arrEnum.upYellow;
    }

    const styles = this.props.styles;
    return (
      <View style={styles.header}>
        {
          React.isValidElement(section.title) ? section.title : (
            <View style={styles.headerWrap}>
              <Text style={styles.headerText}>{section.title}</Text>
            </View>
          )
        }
        { arrow }
      </View>
    );
  }

  _renderContent = (section) => {
    const styles = this.props.styles;
    return React.isValidElement(section.content) ? section.content : (
      <View style={styles.content}>
        <Text style={styles.contentText}>{section.content}</Text>
      </View>
    );
  }

  onChange = (idx) => {
    const { onChange, children } = this.props;
    let key;
    React.Children.map(children, (child: any, index) => {
      if (idx === index) {
        key = child.key || `${index}`;
      }
    });
    if (onChange) {
      onChange(key);
    }
  }

  render() {
    const { children, styles, defaultActiveKey, activeKey } = this.props;
    let defaultActiveSection;
    let activeSection;
    const headers = React.Children.map(children, (child: any, index) => {
      const key = child.key || `${index}`;
      if (key === defaultActiveKey) {
        defaultActiveSection = index;
      }
      if (key === activeKey) {
        activeSection = index;
      }
      return {
        title: child.props.header,
        renderHeader: child.props.renderHeader,
        content: child.props.children,
      };
    });

    return (
      <View style={styles.container}>
        <RNAccordion
          initiallyActiveSection={defaultActiveSection}
          activeSection={activeSection}
          underlayColor="transparent"
          sections={headers}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
          duration={0}
          onChange={this.onChange}
        />
      </View>
    );
  }
}

Accordion.Panel = AccordionPanel;

export default Accordion;
