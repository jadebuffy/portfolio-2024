import { BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import { useEffect } from 'react';
import Home from "./pages/Home";
import NotFound from './components/NotFound/NotFound';
import ProjectDetail from './pages/ProjectPage/ProjectDetail';
import Mention from './pages/mention';
import { AnimatePresence } from "framer-motion";



function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    scroll.scrollToTop({
      duration: 0,
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
      <Router>
        <ScrollToTop />
        <AnimatePresence mode='wait' initial={false}>
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/project/:id" element={<ProjectDetail/>} />
              <Route path="/mentionslegales" element={<Mention />} />
              <Route path="/*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </Router>
  );
}
export default App;

