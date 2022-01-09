import Navbar from "../components/navbar";
const Layout = ({ children }) => (
  < >
    <Navbar />
    <main className="container-fluid py-4 container-bg" >
      <div className="container">
      {children}
      </div>
      </main>

   

  </>
);
export default Layout;
