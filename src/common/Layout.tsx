import * as React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
function Layout() {
  return (
    <div
      style={{
        backgroundColor: "white",
        height: "auto",
        minHeight: "100vh",
        paddingBottom: "10px",
      }}
    >
      <Header>MOTION</Header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  border: 2px solid lightgray;
  color: #4b89dc;
  font-size: 40px;
  font-weight: 600;
`;

export default Layout;
