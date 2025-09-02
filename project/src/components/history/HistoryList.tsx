import React from 'react';
import VideoHistoryCard from './VideoHistoryCard';

interface HistoryListProps {
  searchTerm: string;
  dateFilter: string;
  categoryFilter: string;
}

const HistoryList: React.FC<HistoryListProps> = ({ searchTerm, dateFilter, categoryFilter }) => {
  const mockHistory = [
    {
      id: '1',
      title: 'Como criar microfrontends com React',
      channel: 'Tech Academy',
      thumbnail: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      duration: '15:42',
      watchedAt: '2 horas atrás',
      category: 'Tecnologia',
      progress: 85
    },
    {
      id: '2',
      title: 'Design Systems: Guia Completo',
      channel: 'UX Masters',
      thumbnail: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      duration: '22:15',
      watchedAt: '5 horas atrás',
      category: 'Design',
      progress: 100
    },
    {
      id: '3',
      title: 'Arquitetura de Software Moderna',
      channel: 'Dev Pro',
      thumbnail: 'https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      duration: '18:33',
      watchedAt: '1 dia atrás',
      category: 'Tecnologia',
      progress: 45
    },
    {
      id: '4',
      title: 'TypeScript Avançado',
      channel: 'Code Masters',
      thumbnail: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      duration: '31:20',
      watchedAt: '2 dias atrás',
      category: 'Programação',
      progress: 92
    },
    {
      id: '5',
      title: 'CI/CD com GitHub Actions',
      channel: 'DevOps Guide',
      thumbnail: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      duration: '25:18',
      watchedAt: '3 dias atrás',
      category: 'DevOps',
      progress: 67
    }
  ];

  const filteredHistory = mockHistory.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         video.channel.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || video.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">
          {filteredHistory.length} vídeos encontrados
        </h3>
        <select className="text-sm border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-500 focus:border-transparent">
          <option value="recent">Mais recentes</option>
          <option value="oldest">Mais antigos</option>
          <option value="duration">Duração</option>
          <option value="channel">Canal</option>
        </select>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {filteredHistory.map((video) => (
          <VideoHistoryCard key={video.id} video={video} />
        ))}
      </div>

      {filteredHistory.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <History className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum vídeo encontrado</h3>
          <p className="text-gray-600">Tente ajustar os filtros ou termos de busca.</p>
        </div>
      )}
    </div>
  );
};

export default HistoryList;