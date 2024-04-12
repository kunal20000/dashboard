import { Toaster } from "sonner";
import { AppProvidersWrapper, BackToTop } from "./components";
// import AllRoutes from "./routes/Routes";
// import { configureFakeBackend } from "@/common";
import AdminWallet from "./app/admin/wallet/page";

// styles
import "@/assets/css/style.css";
import { AdminLayout } from "./layouts";


// configureFakeBackend();

const App = () => {
  return (
    <AppProvidersWrapper>

      <BackToTop/>
      <AdminLayout >
      <AdminWallet />
      </AdminLayout>
     
      
    </AppProvidersWrapper>
  );
};

export default App;
