import { BrowserRouter, Route, Routes } from 'react-router';
import RootLayout from './layout/RootLayout';
import HomePage from './page/HomePage';
import LoginPage from './page/LoginPage';
import NotFound from './page/NotFound';
import RegisterPage from './page/RegisterPage';

const App = () => {
  return (
    <main>
      <BrowserRouter>
        <RootLayout>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </RootLayout>
      </BrowserRouter>
    </main>
  );
};

export default App;
