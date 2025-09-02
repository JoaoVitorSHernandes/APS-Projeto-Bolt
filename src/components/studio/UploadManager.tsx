import React, { useState } from 'react';
import { Upload, Film, Settings, Globe, Eye, Lock } from 'lucide-react';

const UploadManager: React.FC = () => {
  const [uploadStep, setUploadStep] = useState(1);
  const [videoData, setVideoData] = useState({
    title: '',
    description: '',
    visibility: 'public',
    category: '',
    tags: '',
    thumbnail: null as File | null
  });

  const [isDragging, setIsDragging] = useState(false);

  const categories = [
    'Tecnologia',
    'Educação',
    'Entretenimento',
    'Música',
    'Esportes',
    'Gaming',
    'Ciência',
    'Tutorial'
  ];

  const visibilityOptions = [
    { value: 'public', label: 'Público', icon: Globe, description: 'Todos podem encontrar e assistir' },
    { value: 'unlisted', label: 'Não listado', icon: Eye, description: 'Apenas com o link' },
    { value: 'private', label: 'Privado', icon: Lock, description: 'Apenas você pode ver' }
  ];

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('video/')) {
      console.log('Arquivo de vídeo selecionado:', file.name);
      setUploadStep(2);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('video/')) {
      console.log('Arquivo de vídeo selecionado:', file.name);
      setUploadStep(2);
    }
  };

  const handlePublish = () => {
    console.log('Publicando vídeo:', videoData);
    setUploadStep(3);
  };

  if (uploadStep === 1) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Upload de Vídeo</h3>
          <p className="text-gray-600">Selecione um arquivo de vídeo para fazer upload</p>
        </div>

        <div
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          onDragEnter={() => setIsDragging(true)}
          onDragLeave={() => setIsDragging(false)}
          className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-200 ${
            isDragging 
              ? 'border-red-500 bg-red-50 scale-105' 
              : 'border-gray-300 hover:border-gray-400'
          }`}
        >
          <input
            type="file"
            accept="video/*"
            onChange={handleFileInput}
            className="hidden"
            id="video-upload"
          />
          
          <div className="flex flex-col items-center space-y-6">
            <div className={`w-20 h-20 rounded-2xl flex items-center justify-center transition-colors duration-200 ${
              isDragging ? 'bg-red-100' : 'bg-gray-100'
            }`}>
              <Upload className={`w-10 h-10 transition-colors duration-200 ${
                isDragging ? 'text-red-600' : 'text-gray-400'
              }`} />
            </div>
            
            <div>
              <label
                htmlFor="video-upload"
                className="cursor-pointer text-red-600 hover:text-red-700 font-semibold text-lg"
              >
                Clique para fazer upload
              </label>
              <p className="text-gray-500 mt-2">ou arraste e solte seu vídeo aqui</p>
            </div>
            
            <div className="text-sm text-gray-400 space-y-1">
              <p>Formatos suportados: MP4, MOV, AVI, MKV</p>
              <p>Tamanho máximo: 2GB</p>
              <p>Resolução recomendada: 1920x1080 (16:9)</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (uploadStep === 2) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Detalhes do Vídeo</h3>
          <p className="text-gray-600">Configure as informações do seu vídeo antes de publicar</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Título *
              </label>
              <input
                type="text"
                value={videoData.title}
                onChange={(e) => setVideoData({...videoData, title: e.target.value})}
                placeholder="Digite o título do seu vídeo..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              <p className="text-xs text-gray-500 mt-1">{videoData.title.length}/100 caracteres</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Descrição
              </label>
              <textarea
                value={videoData.description}
                onChange={(e) => setVideoData({...videoData, description: e.target.value})}
                placeholder="Conte aos espectadores sobre o seu vídeo..."
                rows={6}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
              />
              <p className="text-xs text-gray-500 mt-1">{videoData.description.length}/5000 caracteres</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Categoria
                </label>
                <select
                  value={videoData.category}
                  onChange={(e) => setVideoData({...videoData, category: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value="">Selecione uma categoria</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tags
                </label>
                <input
                  type="text"
                  value={videoData.tags}
                  onChange={(e) => setVideoData({...videoData, tags: e.target.value})}
                  placeholder="react, tutorial, javascript"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-4 flex items-center">
                <Settings className="w-4 h-4 mr-2" />
                Configurações
              </h4>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Visibilidade
                  </label>
                  <div className="space-y-2">
                    {visibilityOptions.map((option) => {
                      const Icon = option.icon;
                      return (
                        <label key={option.value} className="flex items-start space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <input
                            type="radio"
                            value={option.value}
                            checked={videoData.visibility === option.value}
                            onChange={(e) => setVideoData({...videoData, visibility: e.target.value})}
                            className="mt-1 text-red-600 focus:ring-red-500"
                          />
                          <Icon className="w-4 h-4 text-gray-600 mt-0.5" />
                          <div>
                            <span className="font-medium text-gray-900 text-sm">{option.label}</span>
                            <p className="text-xs text-gray-600">{option.description}</p>
                          </div>
                        </label>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h5 className="font-medium text-blue-900 mb-2">Dicas</h5>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Use títulos descritivos e envolventes</li>
                <li>• Adicione tags relevantes para melhor descoberta</li>
                <li>• Escreva descrições detalhadas</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
          <button
            onClick={() => setUploadStep(1)}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            Voltar
          </button>
          
          <div className="space-x-3">
            <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              Salvar Rascunho
            </button>
            <button
              onClick={handlePublish}
              disabled={!videoData.title}
              className={`px-6 py-3 rounded-lg transition-colors duration-200 ${
                videoData.title
                  ? 'bg-red-600 text-white hover:bg-red-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Publicar
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto text-center">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <Film className="w-10 h-10 text-green-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">Vídeo Publicado com Sucesso!</h3>
      <p className="text-gray-600 mb-8">Seu vídeo está sendo processado e estará disponível em breve.</p>
      
      <div className="space-x-4">
        <button
          onClick={() => setUploadStep(1)}
          className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
        >
          Fazer Novo Upload
        </button>
        <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200">
          Ver no Canal
        </button>
      </div>
    </div>
  );
};

export default UploadManager;