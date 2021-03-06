import variables from '../../style/themes/default';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  defaultHighlight: {
    backgroundColor: variables.fill_tap,
    borderColor: variables.border_color_base,
  },
  primaryHighlight: {
    backgroundColor: variables.primary_button_fill_tap,
    borderColor: variables.primary_button_fill,
  },
  ghostHighlight: {
    backgroundColor: variables.ghost_button_fill_tap,
    borderColor: variables.ghost_button_color,
  },
  warningHighlight: {
    backgroundColor: variables.brand_warning,
    borderColor: variables.brand_warning,
  },
  disabledHighlight: {
    backgroundColor: variables.fill_body,
    borderColor: variables.fill_body,
  },
  wrapperStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: variables.radius_md,
    borderWidth: 1,
  },
  largeRaw: {
    height: variables.button_height,
    paddingLeft: variables.h_spacing_lg,
    paddingRight: variables.h_spacing_lg,
  },
  smallRaw: {
    height: variables.button_height_sm,
    paddingLeft: variables.h_spacing_sm,
    paddingRight: variables.h_spacing_sm,
  },
  defaultRaw: {
    backgroundColor: variables.fill_base,
    // borderColor: variables.border_color_base,
    borderColor: variables.brand_default, // cyq
  },
  primaryRaw: {
    backgroundColor: variables.primary_button_fill,
    borderColor: variables.primary_button_fill,
  },
  ghostRaw: {
    // backgroundColor: 'transparent',
    backgroundColor: variables.fill_base, // cyq
    borderColor: variables.ghost_button_color,
  },
  warningRaw: {
    backgroundColor: variables.fill_base,
    borderColor: variables.brand_warning,
  },
  disabledRaw: {
    backgroundColor: variables.fill_base,
    borderColor: variables.fill_disabled,
  },
  defaultHighlightText: {
    color: variables.color_text_base,
  },
  primaryHighlightText: {
    color: variables.color_text_base,
  },
  ghostHighlightText: {
    color: variables.color_text_base,
  },
  warningHighlightText: {
    color: variables.color_text_base_inverse,
  },
  disabledHighlightText: {
    color: variables.color_text_base_inverse,
  },
  largeRawText: {
    fontSize: variables.button_font_size,
  },
  smallRawText: {
    fontSize: variables.button_font_size_sm,
  },
  defaultRawText: {
    // color: variables.color_text_base,
    color: variables.color_text_secondary, // cyq
  },
  primaryRawText: {
    color: variables.color_text_base,
  },
  ghostRawText: {
    color: variables.ghost_button_color,
  },
  warningRawText: {
    color: variables.brand_warning,
  },
  disabledRawText: {
    color: variables.color_text_disabled,
  },
  indicator: {
    marginRight: variables.h_spacing_md,
  },
});
