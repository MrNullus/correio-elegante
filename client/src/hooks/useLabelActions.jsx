

function useLabelActions(
  labels, 
  setLabelActions, 
  formValues
) {
    // Data Inicial
    let newLabelActions = {};
    let listLabelActions = labels;

    // Core of Procedure Check Rules
    listLabelActions.forEach(( label ) => {
      let labelContent = {};
  
      // #> Rule: Not Empty
      if (label.rules.empty === false) {
        if (formValues[label.name] === "") {
          labelContent = {
            text: "Campo de preenchimento obrigatorio.",
            action: "label-error"
          };
        } else {
          labelContent = {};
        }
      }
      
      // TODO: Criar a function CheckRulesLabelActions(label, formValues); ela vai retornar o label content de acordo com as rules da label. Colocar a function sentro de utils0
      newLabelActions[label.name] = labelContent;
    });

    // Set changes
    setLabelActions(previewValues => ({
      ...previewValues,
      ...newLabelActions
    }));
}

export { useLabelActions };