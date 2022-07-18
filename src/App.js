import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllMeetUpsPage from './pages/AllMeetUp';
import FavoritesPage from './pages/Favorites';
import NewMeetUpPage from './pages/NewMeetUp';
import Navigations from './components/layouts/nav';

function App() {
  return (
    <div>
      <Navigations />
      <Routes>
        <Route path='/' element={<AllMeetUpsPage />} />
        <Route path='/new-meetsup' element={<NewMeetUpPage />} />
        <Route path='/favorties' element={<FavoritesPage />} />
      </Routes>

    </div>

  );
}

export default App;
