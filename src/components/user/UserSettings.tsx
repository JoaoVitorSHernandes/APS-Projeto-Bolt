import React, { useState } from 'react';
import { Save, Globe, Moon, Bell, Shield } from 'lucide-react';

const UserSettings: React.FC = () => {
  const [settings, setSettings] = useState({
    language: 'pt-BR',
    theme: 'light',
    autoplay: true,
    notifications: true,
    privacy: 'public',
    quality: 'auto'
  });

  const handleSave = () => {
    console.log('Configurações salvas:', settings);
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Globe className="w-5 h-5 mr-2 text-blue-600" />
              Preferências Gerais
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Idioma
                </label>
                <select
                  value={settings.language}
                  onChange={(e) => setSettings({...settings, language: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value="pt-BR">Português (Brasil)</option>
                  <option value="en-US">English (US)</option>
                  <option value="es-ES">Español</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Qualidade de Vídeo Padrão
                </label>
                <select
                  value={settings.quality}
                  onChange={(e) => setSettings({...settings, quality: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value="auto">Automática</option>
                  <option value="1080p">1080p</option>
                  <option value="720p">720p</option>
                  <option value="480p">480p</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Moon className="w-5 h-5 mr-2 text-indigo-600" />
              Aparência
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tema
                </label>
                <div className="flex space-x-4">
                  {['light', 'dark', 'auto'].map((theme) => (
                    <label key={theme} className="flex items-center">
                      <input
                        type="radio"
                        value={theme}
                        checked={settings.theme === theme}
                        onChange={(e) => setSettings({...settings, theme: e.target.value})}
                        className="mr-2 text-red-600 focus:ring-red-500"
                      />
                      <span className="capitalize">{theme === 'auto' ? 'Automático' : theme === 'light' ? 'Claro' : 'Escuro'}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Bell className="w-5 h-5 mr-2 text-yellow-600" />
              Reprodução
            </h3>
            
            <div className="space-y-4">
              <label className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <span className="font-medium text-gray-900">Reprodução Automática</span>
                  <p className="text-sm text-gray-600">Iniciar vídeos automaticamente</p>
                </div>
                <input
                  type="checkbox"
                  checked={settings.autoplay}
                  onChange={(e) => setSettings({...settings, autoplay: e.target.checked})}
                  className="w-5 h-5 text-red-600 rounded focus:ring-red-500"
                />
              </label>

              <label className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <span className="font-medium text-gray-900">Notificações</span>
                  <p className="text-sm text-gray-600">Receber notificações push</p>
                </div>
                <input
                  type="checkbox"
                  checked={settings.notifications}
                  onChange={(e) => setSettings({...settings, notifications: e.target.checked})}
                  className="w-5 h-5 text-red-600 rounded focus:ring-red-500"
                />
              </label>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-green-600" />
              Privacidade
            </h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Visibilidade do Perfil
              </label>
              <select
                value={settings.privacy}
                onChange={(e) => setSettings({...settings, privacy: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
                <option value="public">Público</option>
                <option value="private">Privado</option>
                <option value="friends">Apenas Amigos</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end pt-6">
        <button
          onClick={handleSave}
          className="flex items-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors duration-200"
        >
          <Save className="w-4 h-4" />
          <span>Salvar Configurações</span>
        </button>
      </div>
    </div>
  );
};

export default UserSettings;