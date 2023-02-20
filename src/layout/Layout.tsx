import { Outlet } from "react-router-dom";
import Header from "@/components/Header/Header";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 2rem;
`;

const Layout = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <Outlet />
      </Wrapper>
    </>
  );
};

export default Layout;
