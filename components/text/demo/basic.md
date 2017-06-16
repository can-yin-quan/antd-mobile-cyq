---
order: 0
title:
  zh-CN: '文本'
  en-US: 'Text'
---

文本

````jsx
import { Text, WingBlank } from 'antd-mobile';

/* eslint global-require: 0 */
const ButtonExample = () => (
  <WingBlank>
    <Text size={'lg'}>
      hello world!!!
    </Text>
    <Text size={'xxl'} color={'red'}>
      hello world!!!
    </Text>
  </WingBlank>
);
ReactDOM.render(<ButtonExample />, mountNode);
````
