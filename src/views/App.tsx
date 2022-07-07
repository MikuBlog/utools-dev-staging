import { Button } from 'antd';
import { Suspense } from 'react';
import { useRoutes } from 'react-router';
import routes from '@/router';
import Loading from '@/components/loading';
import './App.css';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
          {
            useRoutes(routes)
          }
        </Suspense>
      <Button>测试一下</Button>
    </div>
  );
}

export default App;
