import { Routes, Route } from "react-router";
import LoginPage from "./pages/LogInPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import TripCreationForm from "./pages/TripCreationFormPage.jsx";
import TripRegistrationForm from "./pages/TripRegistrationPage.jsx";
import NotFound from "./pages/NotFound.jsx";
import NavLinks from "./components/NavLinks.jsx";
import Footer from "./components/Footer.jsx";
import ItemsPage from "./pages/ItemsPage.jsx";
import MyTripsPage from "./pages/MyTripsPage.jsx";
import RegistrationApproval from "./pages/RegistrationApproval.jsx";
import TripRegistrationPage from "./pages/TripRegistrationPage.jsx";


function App() {
  return (
    <>
      <div  className="justify-between h-screen w-screen box-border">
        <NavLinks />
        <div className="flex-1 w-full pt-[3rem]">
          <Routes>
            <Route path="/" element={<ItemsPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/trip-registration-form"
              element={<TripRegistrationForm />}/>
            <Route path="/trip-creation-form" element={<TripCreationForm />} />
            <Route path="/my-trips" element={<MyTripsPage />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/registration-approval" element={<RegistrationApproval/>} />
            <Route path="/trips/:id" element={<TripRegistrationPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
