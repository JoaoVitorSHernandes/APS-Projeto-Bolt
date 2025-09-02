import React, { useState } from 'react';
import { Upload, Camera, X } from 'lucide-react';

const AvatarUploader: React.FC = () => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileSelect = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFileSelect(file);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFileSelect(file);
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Foto do Perfil</h3>
        <p className="text-gray-600">Faça upload de uma nova foto de perfil. Recomendamos imagens quadradas de pelo menos 200x200px.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <div
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            onDragEnter={() => setIsDragging(true)}
            onDragLeave={() => setIsDragging(false)}
            className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors duration-200 ${
              isDragging 
                ? 'border-red-500 bg-red-50' 
                : 'border-gray-300 hover:border-gray-400'
            }`}
          >
            <input
              type="file"
              accept="image/*"
              onChange={handleFileInput}
              className="hidden"
              id="avatar-upload"
            />
            
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                <Upload className="w-8 h-8 text-gray-400" />
              </div>
              
              <div>
                <label
                  htmlFor="avatar-upload"
                  className="cursor-pointer text-red-600 hover:text-red-700 font-medium"
                >
                  Clique para fazer upload
                </label>
                <p className="text-gray-500">ou arraste e solte aqui</p>
              </div>
              
              <p className="text-xs text-gray-400">PNG, JPG até 10MB</p>
            </div>
          </div>
        </div>

        <div className="lg:w-64">
          <div className="space-y-4">
            <h4 className="font-medium text-gray-900">Preview</h4>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center">
                  {previewUrl ? (
                    <img src={previewUrl} alt="Avatar" className="w-full h-full rounded-full object-cover" />
                  ) : (
                    <span className="text-white text-sm font-semibold">JD</span>
                  )}
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">João Desenvolvetor</p>
                  <p className="text-xs text-gray-600">há 2 minutos</p>
                </div>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto">
                  {previewUrl ? (
                    <img src={previewUrl} alt="Avatar" className="w-full h-full rounded-full object-cover" />
                  ) : (
                    <span className="text-white text-xl font-semibold">JD</span>
                  )}
                </div>
                <p className="text-sm text-gray-600 mt-2">Perfil do Canal</p>
              </div>
            </div>

            {previewUrl && (
              <button
                onClick={() => setPreviewUrl(null)}
                className="w-full flex items-center justify-center space-x-2 py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <X className="w-4 h-4" />
                <span>Remover</span>
              </button>
            )}

            <button className="w-full flex items-center justify-center space-x-2 bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 transition-colors duration-200">
              <Camera className="w-4 h-4" />
              <span>Salvar Avatar</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarUploader;