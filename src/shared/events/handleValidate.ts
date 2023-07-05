export const handleValidate = (event: FocusEvent) => {
  if (!(event.target instanceof HTMLInputElement)) {
    return;
  }

  const {
    value, pattern, title, nextElementSibling, style,
  } = event.target;

  if (nextElementSibling) {
    if (value === '' || new RegExp(pattern, 'u').test(value)) {
      style.borderBottom = '0.063rem solid var(--greyColor)';
      nextElementSibling.textContent = null;
    } else {
      style.borderBottom = '0.063rem solid var(--pinkColor)';
      nextElementSibling.textContent = title;
    }
  }
};
