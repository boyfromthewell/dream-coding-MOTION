import * as React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
function Layout() {
  return (
    <div style={{ backgroundColor: "white", height: "100vh" }}>
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
  border-radius: 7px;
  color: #4b89dc;
  font-size: 40px;
  font-weight: 600;
`;

export default Layout;
