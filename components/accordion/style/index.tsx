import variables from '../../style/themes/default';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: variables.border_color_base,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: variables.h_spacing_lg,
    paddingRight: 2 * variables.h_spacing_lg,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: variables.border_color_base,
  },
  headerWrap: {
    flex: 1,
    height: variables.list_item_height,
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerText: {
    color: variables.color_text_base,
    fontSize: variables.font_size_heading,
  },
  content: {
    paddingVertical: variables.v_spacing_md,
    paddingHorizontal: variables.h_spacing_md,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: variables.border_color_base,
  },
  contentText: {
    fontSize: variables.font_size_subhead,
    color: variables.color_text_paragraph,
  },
  Arrow: {
    width: 8,
    height: 13,
    marginLeft: variables.h_spacing_md,
    marginTop: variables.v_spacing_xs,
  },
  ArrowV: {
    width: 13,
    height: 8,
    marginLeft: variables.h_spacing_md,
  },
});
