import React from 'react';
import { TrendingUp, Users, Eye, ThumbsUp, DollarSign, Clock } from 'lucide-react';

const ChannelDashboard: React.FC = () => {
  const stats = [
    {
      label: 'Visualizações (30 dias)',
      value: '1.2M',
      change: '+12.5%',
      icon: Eye,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      label: 'Inscritos',
      value: '45.2K',
      change: '+8.2%',
      icon: Users,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      label: 'Tempo de Exibição',
      value: '8.4K horas',
      change: '+15.3%',
      icon: Clock,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      label: 'Curtidas',
      value: '89.1K',
      change: '+22.1%',
      icon: ThumbsUp,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50'
    },
    {
      label: 'Receita Estimada',
      value: 'R$ 2.450',
      change: '+5.7%',
      icon: DollarSign,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      label: 'Engajamento',
      value: '7.2%',
      change: '+1.1%',
      icon: TrendingUp,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    }
  ];

  const recentVideos = [
    {
      title: 'Como criar microfrontends com React',
      views: '12.5K',
      likes: '1.2K',
      comments: '89',
      publishedAt: '2 dias atrás',
      performance: 'good'
    },
    {
      title: 'TypeScript Avançado - Parte 3',
      views: '8.9K',
      likes: '945',
      comments: '67',
      publishedAt: '5 dias atrás',
      performance: 'excellent'
    },
    {
      title: 'Design Systems na Prática',
      views: '15.2K',
      likes: '1.8K',
      comments: '124',
      publishedAt: '1 semana atrás',
      performance: 'excellent'
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Resumo do Canal</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${stat.color}`} />
                  </div>
                  <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                    {stat.change}
                  </span>
                </div>
                <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">Vídeos Recentes</h4>
          <div className="space-y-4">
            {recentVideos.map((video, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow duration-200">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h5 className="font-medium text-gray-900 mb-2">{video.title}</h5>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span>{video.views} visualizações</span>
                      <span>{video.likes} curtidas</span>
                      <span>{video.comments} comentários</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">{video.publishedAt}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    video.performance === 'excellent' 
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {video.performance === 'excellent' ? 'Excelente' : 'Bom'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-4">Análise Rápida</h4>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Taxa de Retenção</span>
                  <span className="font-medium text-gray-900">68%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '68%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Taxa de Cliques</span>
                  <span className="font-medium text-gray-900">4.2%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '42%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Engajamento</span>
                  <span className="font-medium text-gray-900">7.8%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '78%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChannelDashboard;