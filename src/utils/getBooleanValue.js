const getBooleanValue = (value) => {
  if (
    ["false", "undefined", "nan", "0", "off"].includes(
      value?.trim().toLowerCase()
    )
  ) {
    return false;
  }

  return !!value;
};

export default getBooleanValue;
