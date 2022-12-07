import { Suspense, useEffect } from 'react';
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { PageLoader } from 'widgets/PageLoader';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInitialized, userActions } from 'entities/User';

function App() {
  const dispath = useDispatch();
  const initialized = useSelector(getUserInitialized);

  useEffect(() => {
    dispath(userActions.initAuthData());
  }, [dispath]);

  return (
    <div className={classNames('app')}>
      <Suspense fallback={<PageLoader />}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          {initialized && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
}

export default App;
