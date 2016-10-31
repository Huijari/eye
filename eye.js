const Eye = _ => {
  const eye = data => emit(data);
  let emit = _ => eye;
  eye.observe = observer => {
    const previous = emit;
    emit = data => {
      previous(data);
      observer(data);
      return eye;
    };
    return eye;
  };
  return eye;
};
