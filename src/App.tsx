import { useEffect, useState } from 'react';
import './App.css'
import Loader from './component/Loader';
import Card from './component/Card';
import ThemeSwitcher from './component/ThemeSwitcher';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [])
  return (
    <>
      <Loader loading={isLoading} />
      <ThemeSwitcher />
      <div className='main flex flex-col md:flex-row'>
        <aside className='border border-1 border-black'>
          <Card />
        </aside>
        <main className='border border-1 border-black'>
          content
        </main>
      </div>
    </>
  )
}

export default App
