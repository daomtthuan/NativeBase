function baseStyle() {
  return {
    _light: {
      bg: 'muted.300',
    },
    _dark: {
      bg: 'muted.600',
    },
  };
}

export default {
  baseStyle,
  defaultProps: {
    orientation: 'horizontal',
    thickness: '1',
  },
};
