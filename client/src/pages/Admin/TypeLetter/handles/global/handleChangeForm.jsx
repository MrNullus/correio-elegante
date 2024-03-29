const handleChangeForm = (event, setFormValues) => {
    const { name, value } = event.target;

    setFormValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
};

export { handleChangeForm };