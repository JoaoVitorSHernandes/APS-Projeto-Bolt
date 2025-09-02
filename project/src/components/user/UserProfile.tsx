import React from 'react';
import { Mail, MapPin, Calendar, Globe } from 'lucide-react';

const UserProfile: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-start space-x-6">
        <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center">
          <span className="text-white text-2xl font-bold">JD</span>
        </div>
        
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">João Desenvolvetor</h2>
          <p className="text-gray-600 mb-4">Desenvolvedor Full-Stack e criador de conteúdo tech</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>joao@exemplo.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>São Paulo, Brasil</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Membro desde Jan 2020</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4" />
              <span>youtube.com/joaodev</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="font-semibold text-gray-900 mb-2">Vídeos Assistidos</h3>
          <p className="text-3xl font-bold text-red-600">1,247</p>
          <p className="text-sm text-gray-600 mt-1">Este mês: +89</p>
        </div>
        
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="font-semibold text-gray-900 mb-2">Canais Inscritos</h3>
          <p className="text-3xl font-bold text-blue-600">342</p>
          <p className="text-sm text-gray-600 mt-1">Novos: +12</p>
        </div>
        
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="font-semibold text-gray-900 mb-2">Tempo Total</h3>
          <p className="text-3xl font-bold text-green-600">156h</p>
          <p className="text-sm text-gray-600 mt-1">Esta semana: +8h</p>
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Sobre</h3>
        <p className="text-gray-700 leading-relaxed">
          Desenvolvedor apaixonado por tecnologia, especializado em React, Node.js e arquiteturas modernas. 
          Criador de conteúdo educativo sobre programação e boas práticas de desenvolvimento. 
          Sempre em busca de novos desafios e oportunidades de aprendizado.
        </p>
      </div>
    </div>
  );
};

export default UserProfile;