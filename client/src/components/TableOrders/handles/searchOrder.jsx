import { actionRecentOrders } from "../actions/recentOrders";
import { useLabelActions } from "../../../hooks/useLabelActions";

const handleSearchOrder = (
  searchTerm, orders, setOrders, 
  labelActions, setLabelActions
) => {
  // 1. Check for empty search term:
  if (searchTerm.length <= 2) {
    actionRecentOrders(orders, setOrders); 
    return;
  }

  // 2. Perform case-insensitive filtering:
  let filteredOrders = orders.filter(( order ) =>
    order.uid.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 3. Return the filtered orders:
  // if (Object.entries(filteredOrders).length === 0) {
  //   alert("Correio não encontrado!");
  // }
  
  setOrders(filteredOrders);
};

export { handleSearchOrder };