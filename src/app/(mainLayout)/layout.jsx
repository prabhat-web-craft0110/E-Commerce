import Navbar from "../components/mainLayout/navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default MainLayout;