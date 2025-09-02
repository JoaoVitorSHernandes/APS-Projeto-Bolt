import React, { useState } from 'react';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import UserMicrofrontend from './components/microfrontends/UserMicrofrontend';
import HistoryMicrofrontend from './components/microfrontends/HistoryMicrofrontend';
import StudioMicrofrontend from './components/microfrontends/StudioMicrofrontend';

type ActiveMicrofrontend = 'user' | 'history' | 'studio';

function App() {
  const [activeMF, setActiveMF] = useState<ActiveMicrofrontend>('user');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderMicrofrontend = () => {
    switch (activeMF) {
      case 'user':
        return <UserMicrofrontend />;
      case 'history':
        return <HistoryMicrofrontend />;
      case 'studio':
        return <StudioMicrofrontend />;
      default:
        return <UserMicrofrontend />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        onMenuClick={() => setSidebarOpen(!sidebarOpen)}
        activeMF={activeMF}
      />
      
      <div className="flex">
        <Sidebar 
          isOpen={sidebarOpen}
          activeMF={activeMF}
          onNavigate={setActiveMF}
          onClose={() => setSidebarOpen(false)}
        />
        
        <main className={`flex-1 transition-all duration-300 ${
          sidebarOpen ? 'lg:ml-64' : 'ml-0'
        }`}>
          <div className="p-6">
            {renderMicrofrontend()}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;