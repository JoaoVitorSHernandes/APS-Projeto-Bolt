import React, { useState } from 'react';
import { Edit, Trash2, Eye, MoreVertical, Play, Pause } from 'lucide-react';

const VideoManager: React.FC = () => {
  const [selectedVideos, setSelectedVideos] = useState<string[]>([]);

  const videos = [
    {
      id: '1',
      title: 'Como criar microfrontends com React',
      thumbnail: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=200&h=120&fit=crop',
      status: 'published',
      views: '12.5K',
      likes: '1.2K',
      comments: '89',
      duration: '15:42',
      publishedAt: '2024-01-15',
      visibility: 'public'
    },
    {
      id: '2',
      title: 'TypeScript Avançado - Parte 3',
      thumbnail: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=200&h=120&fit=crop',
      status: 'published',
      views: '8.9K',
      likes: '945',
      comments: '67',
      duration: '22:15',
      publishedAt: '2024-01-12',
      visibility: 'public'
    },
    {
      id: '3',
      title: 'Design Systems na Prática',
      thumbnail: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=200&h=120&fit=crop',
      status: 'draft',
      views: '0',
      likes: '0',
      comments: '0',
      duration: '18:33',
      publishedAt: '',
      visibility: 'private'
    }
  ];

  const toggleVideoSelection = (videoId: string) => {
    setSelectedVideos(prev => 
      prev.includes(videoId) 
        ? prev.filter(id => id !== videoId)
        : [...prev, videoId]
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-800';
      case 'draft': return 'bg-yellow-100 text-yellow-800';
      case 'processing': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'published': return 'Publicado';
      case 'draft': return 'Rascunho';
      case 'processing': return 'Processando';
      default: return status;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Gerenciar Vídeos</h3>
        
        <div className="flex items-center space-x-3">
          {selectedVideos.length > 0 && (
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">{selectedVideos.length} selecionados</span>
              <button className="px-3 py-1 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors duration-200 text-sm">
                Excluir
              </button>
            </div>
          )}
          
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200">
            Novo Vídeo
          </button>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-4 font-medium text-gray-900">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-red-600 rounded focus:ring-red-500"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedVideos(videos.map(v => v.id));
                      } else {
                        setSelectedVideos([]);
                      }
                    }}
                  />
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Vídeo</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Estatísticas</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Data</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {videos.map((video) => (
                <tr key={video.id} className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="py-4 px-4">
                    <input
                      type="checkbox"
                      checked={selectedVideos.includes(video.id)}
                      onChange={() => toggleVideoSelection(video.id)}
                      className="w-4 h-4 text-red-600 rounded focus:ring-red-500"
                    />
                  </td>
                  
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-16 h-10 object-cover rounded"
                        />
                        <div className="absolute bottom-0 right-0 bg-black bg-opacity-75 text-white text-xs px-1 rounded-tl">
                          {video.duration}
                        </div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-gray-900 truncate">{video.title}</p>
                        <p className="text-sm text-gray-600">{video.visibility}</p>
                      </div>
                    </div>
                  </td>
                  
                  <td className="py-4 px-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(video.status)}`}>
                      {getStatusLabel(video.status)}
                    </span>
                  </td>
                  
                  <td className="py-4 px-4">
                    <div className="text-sm text-gray-900">
                      <div>{video.views} visualizações</div>
                      <div className="text-gray-600">{video.likes} curtidas • {video.comments} comentários</div>
                    </div>
                  </td>
                  
                  <td className="py-4 px-4 text-sm text-gray-600">
                    {video.publishedAt || 'Não publicado'}
                  </td>
                  
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200">
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-all duration-200">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h4 className="font-semibold text-gray-900 mb-4">Ações em Lote</h4>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <button className="flex items-center justify-center space-x-2 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
            <Play className="w-4 h-4 text-green-600" />
            <span className="text-sm">Publicar</span>
          </button>
          <button className="flex items-center justify-center space-x-2 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
            <Pause className="w-4 h-4 text-yellow-600" />
            <span className="text-sm">Despublicar</span>
          </button>
          <button className="flex items-center justify-center space-x-2 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
            <Edit className="w-4 h-4 text-blue-600" />
            <span className="text-sm">Editar Tags</span>
          </button>
          <button className="flex items-center justify-center space-x-2 p-3 border border-red-300 text-red-700 rounded-lg hover:bg-red-50 transition-colors duration-200">
            <Trash2 className="w-4 h-4" />
            <span className="text-sm">Excluir</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoManager;