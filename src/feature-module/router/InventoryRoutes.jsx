import React from "react";
import { Route, Routes } from "react-router-dom";
// import InventoryOrderList from "../Inventory/InventoryOrderList";
import InventoryIndex from "../Inventory/InventoryIndex";
import InventoryDashboard from "../Inventory/InventoryDashboard";
import InventoryOrderList from "../Inventory/InventoryOrderList";


const InventoryRoutes = () => {
  // alert("inventory routes")
  return (
    <Routes>
      {/* Parent Route for Inventory */}
      <Route path="/inventory/*" element={<InventoryDashboard />}>
        {/* Child Routes Rendered in the Outlet */}
        <Route index element={<InventoryIndex />} /> {/* This will render by default */}
        <Route path="orderlist" element={<InventoryOrderList />} />
      </Route>
    </Routes>
  );
};

export default InventoryRoutes;
