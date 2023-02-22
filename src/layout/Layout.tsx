import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "@/components/Header/Header";

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
