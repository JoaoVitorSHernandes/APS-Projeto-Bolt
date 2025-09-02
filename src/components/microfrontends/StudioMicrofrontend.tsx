import React, { useState } from 'react';
import ChannelDashboard from '../studio/ChannelDashboard';
import AnalyticsViewer from '../studio/AnalyticsViewer';
import VideoManager from '../studio/VideoManager';
import UploadManager from '../studio/UploadManager';

const StudioMicrofrontend: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', component: ChannelDashboard },
    { id: 'analytics', label: 'Analytics', component: AnalyticsViewer },
    { id: 'videos', label: 'Vídeos', component: VideoManager },
    { id: 'upload', label: 'Upload', component: UploadManager },
  ];

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || ChannelDashboard;

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">MF-Studio</h1>
        <p className="text-gray-600">Painel do criador - estatísticas, configurações e upload</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'border-purple-500 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          <ActiveComponent />
        </div>
      </div>
    </div>
  );
};

export default StudioMicrofrontend;