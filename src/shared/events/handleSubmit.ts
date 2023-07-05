export const handleSubmit = (event: MouseEvent, title: string) => {
  event.preventDefault();

  if (!(event.target instanceof HTMLButtonElement)) {
    return;
  }

  const formElements = event.target.form ? Array.from(event.target.form.elements) : [];
  const result = formElements.reduce<Record <string, string>>((acc, cur) => {
    if (cur instanceof HTMLInputElement) {
      acc[cur.name] = cur.value;
    }
    return acc;
  }, {});

  console.log(title, result);
};
