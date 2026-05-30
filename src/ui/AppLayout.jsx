// import { Outlet } from "react-router-dom";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import styled from "styled-components";

// const StyledAppLayout = styled.div`
//   display: grid;
//   grid-template-columns: 26rem 1fr;
//   grid-template-rows: auto 1fr;
//   height: 100vh;
//   overflow: hidden;
// `;

// const Main = styled.main`
//   background-color: var(--color-grey-50);
//   padding: 4rem 4.8rem 6.4rem;
//   overflow-y: auto;
//   overflow-x: hidden;
//   width: 100%;
//   box-sizing: border-box;

//   &::-webkit-scrollbar {
//     width: 8px;
//   }

//   &::-webkit-scrollbar-track {
//     background: var(--color-grey-100);
//     border-radius: 4px;
//   }

//   &::-webkit-scrollbar-thumb {
//     background: var(--color-grey-500);
//     border-radius: 4px;
//   }

//   &::-webkit-scrollbar-thumb:hover {
//     background: var(--color-grey-600);
//   }

//   scrollbar-width: thin;
//   scrollbar-color: var(--color-grey-500) var(--color-grey-100);
// `;

// const Container = styled.div`
//   max-width: 120rem;
//   margin: 0 auto;
//   display: flex;
//   flex-direction: column;
//   gap: 3.2rem;
//   width: 100%;
//   box-sizing: border-box;
// `;

// function AppLayout() {
//   return (
//     <StyledAppLayout>
//       <Header />
//       <Sidebar />
//       <Main>
//         <Container>
//           <Outlet />
//         </Container>
//       </Main>
//     </StyledAppLayout>
//   );
// }

// export default AppLayout;

 import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import styled from "styled-components";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
  overflow: hidden;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: var(--color-grey-100);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-grey-500);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--color-grey-600);
  }

  scrollbar-width: thin;
  scrollbar-color: var(--color-grey-500) var(--color-grey-100);

  @media (max-width: 1024px) {
    padding: 3rem 3rem 5rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 2rem 3rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 1.5rem 2rem;
  }
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    gap: 2.4rem;
  }

  @media (max-width: 480px) {
    gap: 1.6rem;
  }
`;

function AppLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <StyledAppLayout>
      <Header onMenuClick={() => setIsMobileMenuOpen(true)} />
      <Sidebar />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;