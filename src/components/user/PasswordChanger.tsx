import React, { useState } from 'react';
import { Eye, EyeOff, Lock, Check } from 'lucide-react';

const PasswordChanger: React.FC = () => {
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false
  });
  
  const [passwords, setPasswords] = useState({
    current: '',
    new: '',
    confirm: ''
  });

  const [validations, setValidations] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    special: false
  });

  const validatePassword = (password: string) => {
    setValidations({
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /\d/.test(password),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(password)
    });
  };

  const handlePasswordChange = (field: string, value: string) => {
    setPasswords({...passwords, [field]: value});
    if (field === 'new') {
      validatePassword(value);
    }
  };

  const togglePasswordVisibility = (field: keyof typeof showPasswords) => {
    setShowPasswords({...showPasswords, [field]: !showPasswords[field]});
  };

  const isValid = Object.values(validations).every(Boolean) && 
                  passwords.new === passwords.confirm && 
                  passwords.current && 
                  passwords.new;

  return (
    <div className="max-w-md mx-auto space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
          <Lock className="w-5 h-5 mr-2 text-red-600" />
          Alterar Senha
        </h3>
        <p className="text-gray-600">Mantenha sua conta segura com uma senha forte.</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Senha Atual
          </label>
          <div className="relative">
            <input
              type={showPasswords.current ? 'text' : 'password'}
              value={passwords.current}
              onChange={(e) => handlePasswordChange('current', e.target.value)}
              className="w-full p-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="Digite sua senha atual"
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility('current')}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPasswords.current ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nova Senha
          </label>
          <div className="relative">
            <input
              type={showPasswords.new ? 'text' : 'password'}
              value={passwords.new}
              onChange={(e) => handlePasswordChange('new', e.target.value)}
              className="w-full p-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="Digite sua nova senha"
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility('new')}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPasswords.new ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Confirmar Nova Senha
          </label>
          <div className="relative">
            <input
              type={showPasswords.confirm ? 'text' : 'password'}
              value={passwords.confirm}
              onChange={(e) => handlePasswordChange('confirm', e.target.value)}
              className="w-full p-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="Confirme sua nova senha"
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility('confirm')}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPasswords.confirm ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {passwords.new && (
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-medium text-gray-900 mb-3">Requisitos da Senha</h4>
          <div className="space-y-2">
            {[
              { key: 'length', label: 'Pelo menos 8 caracteres' },
              { key: 'uppercase', label: 'Uma letra maiúscula' },
              { key: 'lowercase', label: 'Uma letra minúscula' },
              { key: 'number', label: 'Um número' },
              { key: 'special', label: 'Um caractere especial' }
            ].map(({ key, label }) => (
              <div key={key} className="flex items-center space-x-2">
                <Check className={`w-4 h-4 ${validations[key as keyof typeof validations] ? 'text-green-600' : 'text-gray-400'}`} />
                <span className={`text-sm ${validations[key as keyof typeof validations] ? 'text-green-600' : 'text-gray-600'}`}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {passwords.confirm && passwords.new !== passwords.confirm && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-3">
          <p className="text-red-700 text-sm">As senhas não coincidem.</p>
        </div>
      )}

      <button
        disabled={!isValid}
        className={`w-full py-3 px-4 rounded-lg font-medium transition-colors duration-200 ${
          isValid
            ? 'bg-red-600 text-white hover:bg-red-700'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        Alterar Senha
      </button>
    </div>
  );
};

export default PasswordChanger;