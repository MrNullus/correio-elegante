import { useLabelActions } from "../../../../../hooks/useLabelActions";

const handleSubmitForm = (event, formValues, setLabelActions) => {
  event.preventDefault();

  useLabelActions(
    [ 
      {
      name: 'title',
      rules: { empty: false }
      }, 
      {
        name: 'description',
        rules: { empty: false }
      }
    ],
    setLabelActions,
    formValues
  );
  
  alert(formValues.title);
};

export { handleSubmitForm };