import React, { useState } from 'react';
import HistoryList from '../history/HistoryList';
import HistoryFilter from '../history/HistoryFilter';
import ClearHistoryButton from '../history/ClearHistoryButton';

const HistoryMicrofrontend: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFilter, setDateFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">MF-History</h1>
            <p className="text-gray-600">Histórico de vídeos assistidos</p>
          </div>
          <ClearHistoryButton />
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <HistoryFilter
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            dateFilter={dateFilter}
            onDateFilterChange={setDateFilter}
            categoryFilter={categoryFilter}
            onCategoryFilterChange={setCategoryFilter}
          />
        </div>

        <div className="p-6">
          <HistoryList
            searchTerm={searchTerm}
            dateFilter={dateFilter}
            categoryFilter={categoryFilter}
          />
        </div>
      </div>
    </div>
  );
};

export default HistoryMicrofrontend;