import React, { useState } from 'react';
import { Bell, Mail, Smartphone, Monitor } from 'lucide-react';

const NotificationSettings: React.FC = () => {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    desktopNotifications: false,
    newVideos: true,
    comments: true,
    likes: false,
    subscriptions: true,
    liveStreams: true,
    recommendations: false
  });

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings({...settings, [key]: !settings[key]});
  };

  const notificationTypes = [
    {
      icon: Mail,
      title: 'Email',
      key: 'emailNotifications' as keyof typeof settings,
      description: 'Receber notificações por email'
    },
    {
      icon: Smartphone,
      title: 'Push',
      key: 'pushNotifications' as keyof typeof settings,
      description: 'Notificações no dispositivo móvel'
    },
    {
      icon: Monitor,
      title: 'Desktop',
      key: 'desktopNotifications' as keyof typeof settings,
      description: 'Notificações no navegador'
    }
  ];

  const contentTypes = [
    {
      title: 'Novos vídeos',
      key: 'newVideos' as keyof typeof settings,
      description: 'Quando canais inscritos publicam novos vídeos'
    },
    {
      title: 'Comentários',
      key: 'comments' as keyof typeof settings,
      description: 'Respostas aos seus comentários'
    },
    {
      title: 'Curtidas',
      key: 'likes' as keyof typeof settings,
      description: 'Quando alguém curte seu comentário'
    },
    {
      title: 'Inscrições',
      key: 'subscriptions' as keyof typeof settings,
      description: 'Novos inscritos no seu canal'
    },
    {
      title: 'Lives',
      key: 'liveStreams' as keyof typeof settings,
      description: 'Quando canais fazem transmissões ao vivo'
    },
    {
      title: 'Recomendações',
      key: 'recommendations' as keyof typeof settings,
      description: 'Vídeos recomendados para você'
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
          <Bell className="w-5 h-5 mr-2 text-yellow-600" />
          Configurações de Notificação
        </h3>
        <p className="text-gray-600">Escolha como e quando você quer ser notificado.</p>
      </div>

      <div>
        <h4 className="font-medium text-gray-900 mb-4">Tipos de Notificação</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {notificationTypes.map((type) => {
            const Icon = type.icon;
            return (
              <label key={type.key} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors duration-200">
                <div className="flex items-center space-x-3">
                  <Icon className="w-5 h-5 text-gray-600" />
                  <div>
                    <span className="font-medium text-gray-900">{type.title}</span>
                    <p className="text-xs text-gray-600">{type.description}</p>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={settings[type.key]}
                  onChange={() => toggleSetting(type.key)}
                  className="w-5 h-5 text-red-600 rounded focus:ring-red-500"
                />
              </label>
            );
          })}
        </div>
      </div>

      <div>
        <h4 className="font-medium text-gray-900 mb-4">Conteúdo</h4>
        <div className="space-y-3">
          {contentTypes.map((content) => (
            <label key={content.key} className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors duration-200">
              <div>
                <span className="font-medium text-gray-900">{content.title}</span>
                <p className="text-sm text-gray-600">{content.description}</p>
              </div>
              <input
                type="checkbox"
                checked={settings[content.key]}
                onChange={() => toggleSetting(content.key)}
                className="w-5 h-5 text-red-600 rounded focus:ring-red-500"
              />
            </label>
          ))}
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
        <h4 className="font-medium text-blue-900 mb-2">Dica</h4>
        <p className="text-sm text-blue-800">
          Você pode ajustar essas configurações a qualquer momento. Recomendamos manter as notificações de segurança sempre ativas.
        </p>
      </div>

      <div className="flex justify-end">
        <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors duration-200">
          Salvar Preferências
        </button>
      </div>
    </div>
  );
};

export default NotificationSettings;