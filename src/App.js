import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Customers from "./pages/customers/Customers";
import Enquiries from "./pages/enquiries/Enquiries";
import Invoices from "./pages/invoices/Invoices";
import Logout from "./pages/logout/Logout";
import Mechanics from "./pages/mechanics/Mechanics";
import Notifications from "./pages/notifications/Notifications";
import Parts from "./pages/parts/Parts";
import Services from "./pages/services/Services";
import Settings from "./pages/settings/Settings";
import Tasks from "./pages/tasks/Tasks";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='customers' element={<Customers />} />
            <Route path='enquiries' element={<Enquiries />} />
            <Route path='invoices' element={<Invoices />} />
            <Route path='logout' element={<Logout />} />
            <Route path='mechanics' element={<Mechanics />} />
            <Route path='notifications' element={<Notifications />} />
            <Route path='parts' element={<Parts />} />
            <Route path='services' element={<Services />} />
            <Route path='settings' element={<Settings />} />
            <Route path='tasks' element={<Tasks />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
