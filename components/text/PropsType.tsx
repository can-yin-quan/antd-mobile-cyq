
interface TextProps {
  size?: 'large' | 'medium' | 'small' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | number;
  color?: string;
  style?: Object | Array<Object>;

  /** rn only */
  onPress?: (x?: any) => void;
  onLongPress?: (x?: any) => void;
  numberOfLines?: number

}

export default TextProps;