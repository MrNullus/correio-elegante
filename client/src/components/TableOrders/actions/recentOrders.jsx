async function actionRecentOrders() {
  const newOrders = await [
    {
      uid    : "13M20B1",
      type   : "Cartinha Comun"
    },
    {
      uid    : "1A30P5",
      type   : "Cartinha com Biz"
    },
    {
      uid    : "2A20F1",
      type   : "Cartinha com Anuncio"
    }
  ];
  
  setOrders([...orders, ...newOrders]);
}

export { actionRecentOrders };