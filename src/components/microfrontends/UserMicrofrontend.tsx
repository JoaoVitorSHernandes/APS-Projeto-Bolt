import React, { useState } from 'react';
import UserProfile from '../user/UserProfile';
import UserSettings from '../user/UserSettings';
import AvatarUploader from '../user/AvatarUploader';
import PasswordChanger from '../user/PasswordChanger';
import NotificationSettings from '../user/NotificationSettings';

const UserMicrofrontend: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'Perfil', component: UserProfile },
    { id: 'settings', label: 'Configurações', component: UserSettings },
    { id: 'avatar', label: 'Avatar', component: AvatarUploader },
    { id: 'password', label: 'Senha', component: PasswordChanger },
    { id: 'notifications', label: 'Notificações', component: NotificationSettings },
  ];

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || UserProfile;

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">MF-User</h1>
        <p className="text-gray-600">Gerenciamento de perfil e configurações do usuário</p>
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
                    ? 'border-red-500 text-red-600'
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

export default UserMicrofrontend;