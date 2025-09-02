import React from 'react';
import { User, History, PlaySquare, X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  activeMF: string;
  onNavigate: (mf: 'user' | 'history' | 'studio') => void;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, activeMF, onNavigate, onClose }) => {
  const menuItems = [
    {
      id: 'user',
      label: 'MF-User',
      description: 'Perfil e Configurações',
      icon: User,
      color: 'text-blue-600'
    },
    {
      id: 'history',
      label: 'MF-History',
      description: 'Histórico de Vídeos',
      icon: History,
      color: 'text-green-600'
    },
    {
      id: 'studio',
      label: 'MF-Studio',
      description: 'Painel do Criador',
      icon: PlaySquare,
      color: 'text-purple-600'
    }
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`fixed left-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0`}>
        <div className="flex items-center justify-between p-4 border-b border-gray-200 lg:hidden">
          <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <nav className="p-4 mt-16 lg:mt-4">
          <div className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeMF === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id as 'user' | 'history' | 'studio');
                    onClose();
                  }}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    isActive 
                      ? 'bg-red-50 border-l-4 border-red-500 text-red-700' 
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-red-600' : item.color}`} />
                  <div className="text-left">
                    <div className="font-medium">{item.label}</div>
                    <div className="text-xs text-gray-500">{item.description}</div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="text-xs text-gray-500 px-4 mb-2">MICROFRONTENDS</div>
            <div className="text-xs text-gray-400 px-4 leading-relaxed">
              Sistema modular com arquitetura de microfrontends para escalabilidade e manutenção independente.
            </div>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;