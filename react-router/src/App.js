import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Contact from "./Contact";
import Faq from "./Faq";
import Git from "./gitData/Git";
import HelpLayout from "./helpLayout";
import Home from "./Home";
import Nomatch from "./Nomatch";
import RootLayout from "./rootLayout";
import Gitlogin, { GitLoader } from "./gitData/Gitlogin";
import JsonLink from "./jsonData/jsonLink";
import LoadData, { loadUser } from "./jsonData/LoadData";
import Id, { fetchJsonId } from "./path/id";
import DataDetailed, {
  DateDetailedLoader,
} from "./jsonData/DataDetailedloader";
//loaders:it is used to load data before the component render
//ex:to fetch data before it gets render by which we can avoid useEffect in the component

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="home" element={<Home />}></Route>

      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />}></Route>
        <Route path="contact" element={<Contact />}></Route>
      </Route>

      <Route path="git" element={<Git />}>
        <Route path="login" element={<Gitlogin />} loader={GitLoader}></Route>
      </Route>

      <Route path="jsonlink" element={<JsonLink />}>
        <Route path="loadData" element={<LoadData />} loader={loadUser}>
          <Route
            path=":id"
            element={<DataDetailed />}
            loader={DateDetailedLoader}
          ></Route>
        </Route>
      </Route>
      <Route path=":id" element={<Id />} loader={fetchJsonId}></Route>
      <Route path="*" element={<Nomatch />}></Route>
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
