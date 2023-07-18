import { createBrowserRouter } from "react-router-dom";
import LandingPage from '../pages/LandingPages';
import FindJobs from '../pages/FindJobs';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />
  },
  {
    path: '/find-jobs',
    element: <FindJobs />
  }
])

export default router;