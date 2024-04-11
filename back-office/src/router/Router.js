import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "../pages/user/views/UserList";
import ViewUser from "../pages/user/views/ViewUser";
import AddUser from "../pages/user/views/AddUser";
import Dashboard from "../pages/dashboard/Dashboard";
import Main from "../apps/Main";
import Auth from "../apps/Auth";
import Login from "../pages/auth/Login";
import ForgetPassword from "../pages/auth/ForgetPassword";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Dashboard />} />
          <Route path="users">
            <Route index element={<UserList />} />
            <Route path="view" element={<ViewUser />} />
            <Route path="add" element={<AddUser />} />
          </Route>
        </Route>
        :
        <Route path="/" element={<Auth />}>
          <Route index element={<Login />} />
          <Route path="forget-password" element={<ForgetPassword />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
