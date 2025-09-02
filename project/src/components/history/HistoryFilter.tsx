import React from 'react';
import { Search, Filter, Calendar } from 'lucide-react';

interface HistoryFilterProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  dateFilter: string;
  onDateFilterChange: (filter: string) => void;
  categoryFilter: string;
  onCategoryFilterChange: (filter: string) => void;
}

const HistoryFilter: React.FC<HistoryFilterProps> = ({
  searchTerm,
  onSearchChange,
  dateFilter,
  onDateFilterChange,
  categoryFilter,
  onCategoryFilterChange
}) => {
  const categories = [
    { value: 'all', label: 'Todas as categorias' },
    { value: 'Tecnologia', label: 'Tecnologia' },
    { value: 'Design', label: 'Design' },
    { value: 'Programação', label: 'Programação' },
    { value: 'DevOps', label: 'DevOps' },
    { value: 'Tutorial', label: 'Tutorial' }
  ];

  const dateFilters = [
    { value: 'all', label: 'Todos os períodos' },
    { value: 'today', label: 'Hoje' },
    { value: 'week', label: 'Esta semana' },
    { value: 'month', label: 'Este mês' },
    { value: 'year', label: 'Este ano' }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2 mb-4">
        <Filter className="w-5 h-5 text-gray-600" />
        <h3 className="font-semibold text-gray-900">Filtros e Busca</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Buscar vídeos ou canais..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
          />
        </div>

        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <select
            value={dateFilter}
            onChange={(e) => onDateFilterChange(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent appearance-none bg-white"
          >
            {dateFilters.map((filter) => (
              <option key={filter.value} value={filter.value}>
                {filter.label}
              </option>
            ))}
          </select>
        </div>

        <select
          value={categoryFilter}
          onChange={(e) => onCategoryFilterChange(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent appearance-none bg-white"
        >
          {categories.map((category) => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap gap-2">
        {searchTerm && (
          <span className="inline-flex items-center px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full">
            Busca: "{searchTerm}"
            <button
              onClick={() => onSearchChange('')}
              className="ml-2 text-red-600 hover:text-red-800"
            >
              ×
            </button>
          </span>
        )}
        
        {dateFilter !== 'all' && (
          <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
            Período: {dateFilters.find(d => d.value === dateFilter)?.label}
            <button
              onClick={() => onDateFilterChange('all')}
              className="ml-2 text-blue-600 hover:text-blue-800"
            >
              ×
            </button>
          </span>
        )}
        
        {categoryFilter !== 'all' && (
          <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
            Categoria: {categories.find(c => c.value === categoryFilter)?.label}
            <button
              onClick={() => onCategoryFilterChange('all')}
              className="ml-2 text-green-600 hover:text-green-800"
            >
              ×
            </button>
          </span>
        )}
      </div>
    </div>
  );
};

export default HistoryFilter;