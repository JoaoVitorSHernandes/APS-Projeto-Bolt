import React, { useState } from 'react';
import { Trash2, AlertTriangle } from 'lucide-react';

const ClearHistoryButton: React.FC = () => {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleClearHistory = () => {
    console.log('Histórico limpo');
    setShowConfirm(false);
  };

  if (showConfirm) {
    return (
      <div className="bg-white border border-red-200 rounded-lg p-4 shadow-lg">
        <div className="flex items-start space-x-3">
          <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <h4 className="font-medium text-gray-900 mb-2">Confirmar Limpeza</h4>
            <p className="text-sm text-gray-600 mb-4">
              Esta ação removerá todo o seu histórico de vídeos e não pode ser desfeita.
            </p>
            <div className="flex space-x-3">
              <button
                onClick={handleClearHistory}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200 text-sm"
              >
                Confirmar
              </button>
              <button
                onClick={() => setShowConfirm(false)}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-sm"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <button
      onClick={() => setShowConfirm(true)}
      className="flex items-center space-x-2 px-4 py-2 border border-red-300 text-red-700 rounded-lg hover:bg-red-50 transition-colors duration-200"
    >
      <Trash2 className="w-4 h-4" />
      <span>Limpar Histórico</span>
    </button>
  );
};

export default ClearHistoryButton;