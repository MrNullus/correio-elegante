const handleSearchOrder = (searchTerm, orders, setOrders) => {
  // 1. Check for empty search term:
  if (!searchTerm) {
    setOrders(orders); 
  }

  // 2. Perform case-insensitive filtering:
  let filteredOrders = orders.filter(( order ) =>
    order.uid.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 3. Return the filtered orders:
  setOrders(filteredOrders);
};

export { handleSearchOrder };