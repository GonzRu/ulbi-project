import { Suspense, useEffect } from 'react';
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { PageLoader } from 'widgets/PageLoader';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';

function App() {
  const dispath = useDispatch();

  useEffect(() => {
    dispath(userActions.initAuthData());
  }, [dispath]);

  return (
    <div className={classNames('app')}>
      <Suspense fallback={<PageLoader />}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
