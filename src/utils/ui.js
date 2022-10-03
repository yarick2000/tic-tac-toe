const getDimensions = (ref) => {
  if (ref.current) {
    const { current } = ref;
    const boundingRect = current.getBoundingClientRect();
    const { width, height } = boundingRect;
    return { width, height };
  }
  return { width: 0, height: 0 };
};

export { getDimensions };