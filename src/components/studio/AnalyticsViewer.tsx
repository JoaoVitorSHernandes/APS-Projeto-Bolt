import React, { useState } from 'react';
import { BarChart3, TrendingUp, Users, Eye, Calendar } from 'lucide-react';

const AnalyticsViewer: React.FC = () => {
  const [timeframe, setTimeframe] = useState('30d');

  const timeframes = [
    { value: '7d', label: '7 dias' },
    { value: '30d', label: '30 dias' },
    { value: '90d', label: '90 dias' },
    { value: '1y', label: '1 ano' }
  ];

  const chartData = [
    { label: 'Seg', views: 15000, subscribers: 120 },
    { label: 'Ter', views: 18000, subscribers: 95 },
    { label: 'Qua', views: 22000, subscribers: 180 },
    { label: 'Qui', views: 19000, subscribers: 140 },
    { label: 'Sex', views: 25000, subscribers: 220 },
    { label: 'Sáb', views: 28000, subscribers: 190 },
    { label: 'Dom', views: 24000, subscribers: 160 }
  ];

  const maxViews = Math.max(...chartData.map(d => d.views));
  const maxSubscribers = Math.max(...chartData.map(d => d.subscribers));

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <BarChart3 className="w-5 h-5 text-purple-600" />
          <h3 className="text-lg font-semibold text-gray-900">Analytics Detalhados</h3>
        </div>
        
        <select
          value={timeframe}
          onChange={(e) => setTimeframe(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        >
          {timeframes.map((tf) => (
            <option key={tf.value} value={tf.value}>{tf.label}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
            <Eye className="w-4 h-4 mr-2 text-blue-600" />
            Visualizações por Dia
          </h4>
          <div className="space-y-2">
            {chartData.map((data, index) => (
              <div key={index} className="flex items-center space-x-3">
                <span className="w-8 text-xs text-gray-600">{data.label}</span>
                <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div 
                    className="h-full bg-blue-600 rounded-full transition-all duration-500"
                    style={{ width: `${(data.views / maxViews) * 100}%` }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-900 w-16 text-right">
                  {(data.views / 1000).toFixed(1)}K
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
            <Users className="w-4 h-4 mr-2 text-green-600" />
            Novos Inscritos por Dia
          </h4>
          <div className="space-y-2">
            {chartData.map((data, index) => (
              <div key={index} className="flex items-center space-x-3">
                <span className="w-8 text-xs text-gray-600">{data.label}</span>
                <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div 
                    className="h-full bg-green-600 rounded-full transition-all duration-500"
                    style={{ width: `${(data.subscribers / maxSubscribers) * 100}%` }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-900 w-12 text-right">
                  {data.subscribers}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Top Países</h4>
          <div className="space-y-3">
            {[
              { country: 'Brasil', percentage: 45, flag: '🇧🇷' },
              { country: 'Portugal', percentage: 18, flag: '🇵🇹' },
              { country: 'Estados Unidos', percentage: 12, flag: '🇺🇸' },
              { country: 'Argentina', percentage: 8, flag: '🇦🇷' },
              { country: 'Outros', percentage: 17, flag: '🌍' }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span>{item.flag}</span>
                  <span className="text-sm text-gray-700">{item.country}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-16 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-900 w-8">{item.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Faixa Etária</h4>
          <div className="space-y-3">
            {[
              { age: '18-24', percentage: 28 },
              { age: '25-34', percentage: 35 },
              { age: '35-44', percentage: 22 },
              { age: '45-54', percentage: 10 },
              { age: '55+', percentage: 5 }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-gray-700">{item.age} anos</span>
                <div className="flex items-center space-x-2">
                  <div className="w-16 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-purple-600 h-2 rounded-full"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-900 w-8">{item.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Dispositivos</h4>
          <div className="space-y-3">
            {[
              { device: 'Mobile', percentage: 52 },
              { device: 'Desktop', percentage: 35 },
              { device: 'Tablet', percentage: 8 },
              { device: 'TV', percentage: 5 }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-gray-700">{item.device}</span>
                <div className="flex items-center space-x-2">
                  <div className="w-16 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-600 h-2 rounded-full"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-900 w-8">{item.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-6">
        <div className="flex items-center space-x-2 mb-4">
          <TrendingUp className="w-5 h-5 text-purple-600" />
          <h4 className="font-semibold text-gray-900">Insights e Recomendações</h4>
        </div>
        <div className="space-y-3">
          <div className="flex items-start space-x-3 p-3 bg-white rounded-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <p className="text-sm font-medium text-gray-900">Performance Excelente</p>
              <p className="text-xs text-gray-600">Seus vídeos sobre TypeScript têm 40% mais engajamento que a média do canal.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3 p-3 bg-white rounded-lg">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <p className="text-sm font-medium text-gray-900">Horário Ideal</p>
              <p className="text-xs text-gray-600">Seus vídeos performam melhor quando publicados às terças-feiras às 19h.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsViewer;