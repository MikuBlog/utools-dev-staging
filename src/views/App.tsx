import { Suspense } from 'react';
import { useRoutes } from 'react-router';
import routes from '@/router';
import Loading from '@/components/loading';
import './App.less';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        {
          useRoutes(routes)
        }
      </Suspense>
    </div>
  );
}

export default App;
