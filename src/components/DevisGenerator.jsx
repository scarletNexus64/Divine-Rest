import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Send, Calculator, FileText, Check } from 'lucide-react';
import toast from 'react-hot-toast';

const DevisGenerator = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceType: '',
    cercueil: '',
    fleurs: '',
    transport: '',
    ceremonie: '',
    marbrerie: false,
    urgence: false,
    clientInfo: {
      nom: '',
      prenom: '',
      email: '',
      telephone: '',
      ville: ''
    }
  });

  const services = [
    { id: 'inhumation', name: 'Inhumation', price: 2500, description: 'Service complet d\'inhumation' },
    { id: 'cremation', name: 'Crémation', price: 2000, description: 'Service complet de crémation' },
    { id: 'rapatriement', name: 'Rapatriement', price: 3500, description: 'Rapatriement national ou international' }
  ];

  const cercueils = [
    { id: 'pin', name: 'Cercueil Pin', price: 800, description: 'Cercueil en pin naturel' },
    { id: 'chene', name: 'Cercueil Chêne', price: 1500, description: 'Cercueil en chêne massif' },
    { id: 'prestige', name: 'Cercueil Prestige', price: 2500, description: 'Cercueil haut de gamme' }
  ];

  const options = [
    { id: 'fleurs-standard', name: 'Bouquet standard', price: 150, category: 'fleurs' },
    { id: 'fleurs-premium', name: 'Arrangement premium', price: 300, category: 'fleurs' },
    { id: 'transport-local', name: 'Transport local', price: 200, category: 'transport' },
    { id: 'transport-longue', name: 'Transport longue distance', price: 500, category: 'transport' },
    { id: 'ceremonie-simple', name: 'Cérémonie simple', price: 300, category: 'ceremonie' },
    { id: 'ceremonie-complete', name: 'Cérémonie complète', price: 800, category: 'ceremonie' }
  ];

  const calculateTotal = () => {
    let total = 0;
    
    // Service principal
    const service = services.find(s => s.id === formData.serviceType);
    if (service) total += service.price;
    
    // Cercueil
    const cercueil = cercueils.find(c => c.id === formData.cercueil);
    if (cercueil) total += cercueil.price;
    
    // Options
    ['fleurs', 'transport', 'ceremonie'].forEach(category => {
      const option = options.find(o => o.id === formData[category]);
      if (option) total += option.price;
    });
    
    // Suppléments
    if (formData.marbrerie) total += 1200;
    if (formData.urgence) total += 500;
    
    return total;
  };

  const handleInputChange = (field, value) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const generatePDF = () => {
    toast.success('Devis généré ! Le téléchargement va commencer...');
    // Ici on intégrerait une bibliothèque PDF comme jsPDF
    console.log('Génération PDF du devis', { formData, total: calculateTotal() });
  };

  const sendByEmail = () => {
    toast.success('Devis envoyé par email !');
    // Ici on intégrerait l\'envoi d\'email
    console.log('Envoi email du devis', { formData, total: calculateTotal() });
  };

  const renderStep1 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-6"
    >
      <h3 className="text-2xl font-serif font-bold text-divine-dark dark:text-white mb-6">
        Type de service
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {services.map(service => (
          <motion.div
            key={service.id}
            whileHover={{ scale: 1.02 }}
            className={`p-6 rounded-lg border-2 cursor-pointer transition-all ${
              formData.serviceType === service.id
                ? 'border-divine-gold bg-divine-gold bg-opacity-10'
                : 'border-gray-200 dark:border-gray-700 hover:border-divine-gold'
            }`}
            onClick={() => handleInputChange('serviceType', service.id)}
          >
            <h4 className="font-semibold text-divine-dark dark:text-white">{service.name}</h4>
            <p className="text-sm text-divine-gray dark:text-gray-300 mt-1">{service.description}</p>
            <p className="text-lg font-bold text-divine-gold mt-2">À partir de {service.price}€</p>
          </motion.div>
        ))}
      </div>

      <h3 className="text-2xl font-serif font-bold text-divine-dark dark:text-white mb-6 mt-8">
        Choix du cercueil
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cercueils.map(cercueil => (
          <motion.div
            key={cercueil.id}
            whileHover={{ scale: 1.02 }}
            className={`p-6 rounded-lg border-2 cursor-pointer transition-all ${
              formData.cercueil === cercueil.id
                ? 'border-divine-gold bg-divine-gold bg-opacity-10'
                : 'border-gray-200 dark:border-gray-700 hover:border-divine-gold'
            }`}
            onClick={() => handleInputChange('cercueil', cercueil.id)}
          >
            <h4 className="font-semibold text-divine-dark dark:text-white">{cercueil.name}</h4>
            <p className="text-sm text-divine-gray dark:text-gray-300 mt-1">{cercueil.description}</p>
            <p className="text-lg font-bold text-divine-gold mt-2">{cercueil.price}€</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  const renderStep2 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-6"
    >
      <h3 className="text-2xl font-serif font-bold text-divine-dark dark:text-white mb-6">
        Options et services
      </h3>
      
      {['fleurs', 'transport', 'ceremonie'].map(category => (
        <div key={category} className="mb-6">
          <h4 className="text-lg font-semibold text-divine-dark dark:text-white mb-3 capitalize">
            {category === 'fleurs' ? 'Compositions florales' : 
             category === 'transport' ? 'Transport' : 'Cérémonie'}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {options.filter(opt => opt.category === category).map(option => (
              <motion.div
                key={option.id}
                whileHover={{ scale: 1.02 }}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  formData[category] === option.id
                    ? 'border-divine-gold bg-divine-gold bg-opacity-10'
                    : 'border-gray-200 dark:border-gray-700 hover:border-divine-gold'
                }`}
                onClick={() => handleInputChange(category, option.id)}
              >
                <h5 className="font-semibold text-divine-dark dark:text-white">{option.name}</h5>
                <p className="text-lg font-bold text-divine-gold mt-1">{option.price}€</p>
              </motion.div>
            ))}
          </div>
        </div>
      ))}

      <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
        <h4 className="text-lg font-semibold text-divine-dark dark:text-white mb-4">Services supplémentaires</h4>
        <div className="space-y-3">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={formData.marbrerie}
              onChange={(e) => handleInputChange('marbrerie', e.target.checked)}
              className="mr-3 rounded border-gray-300"
            />
            <span className="text-divine-dark dark:text-white">Service de marbrerie (+1200€)</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={formData.urgence}
              onChange={(e) => handleInputChange('urgence', e.target.checked)}
              className="mr-3 rounded border-gray-300"
            />
            <span className="text-divine-dark dark:text-white">Intervention d'urgence (+500€)</span>
          </label>
        </div>
      </div>
    </motion.div>
  );

  const renderStep3 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-6"
    >
      <h3 className="text-2xl font-serif font-bold text-divine-dark dark:text-white mb-6">
        Vos coordonnées
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Nom"
          value={formData.clientInfo.nom}
          onChange={(e) => handleInputChange('clientInfo.nom', e.target.value)}
          className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-divine-dark dark:text-white"
        />
        <input
          type="text"
          placeholder="Prénom"
          value={formData.clientInfo.prenom}
          onChange={(e) => handleInputChange('clientInfo.prenom', e.target.value)}
          className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-divine-dark dark:text-white"
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.clientInfo.email}
          onChange={(e) => handleInputChange('clientInfo.email', e.target.value)}
          className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-divine-dark dark:text-white"
        />
        <input
          type="tel"
          placeholder="Téléphone"
          value={formData.clientInfo.telephone}
          onChange={(e) => handleInputChange('clientInfo.telephone', e.target.value)}
          className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-divine-dark dark:text-white"
        />
        <input
          type="text"
          placeholder="Ville"
          value={formData.clientInfo.ville}
          onChange={(e) => handleInputChange('clientInfo.ville', e.target.value)}
          className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-divine-dark dark:text-white md:col-span-2"
        />
      </div>

      <div className="bg-divine-light dark:bg-gray-700 p-6 rounded-lg mt-8">
        <h4 className="text-xl font-semibold text-divine-dark dark:text-white mb-4">Récapitulatif de votre devis</h4>
        <div className="space-y-2 text-divine-gray dark:text-gray-300">
          {formData.serviceType && (
            <div className="flex justify-between">
              <span>{services.find(s => s.id === formData.serviceType)?.name}</span>
              <span>{services.find(s => s.id === formData.serviceType)?.price}€</span>
            </div>
          )}
          {formData.cercueil && (
            <div className="flex justify-between">
              <span>{cercueils.find(c => c.id === formData.cercueil)?.name}</span>
              <span>{cercueils.find(c => c.id === formData.cercueil)?.price}€</span>
            </div>
          )}
          {['fleurs', 'transport', 'ceremonie'].map(category => {
            const option = options.find(o => o.id === formData[category]);
            return option ? (
              <div key={category} className="flex justify-between">
                <span>{option.name}</span>
                <span>{option.price}€</span>
              </div>
            ) : null;
          })}
          {formData.marbrerie && (
            <div className="flex justify-between">
              <span>Service de marbrerie</span>
              <span>1200€</span>
            </div>
          )}
          {formData.urgence && (
            <div className="flex justify-between">
              <span>Intervention d'urgence</span>
              <span>500€</span>
            </div>
          )}
        </div>
        <div className="border-t border-gray-300 dark:border-gray-600 mt-4 pt-4">
          <div className="flex justify-between text-xl font-bold text-divine-dark dark:text-white">
            <span>Total estimé</span>
            <span className="text-divine-gold">{calculateTotal()}€</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <button
          onClick={generatePDF}
          className="flex items-center justify-center bg-divine-gold text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all"
        >
          <Download className="w-5 h-5 mr-2" />
          Télécharger le devis (PDF)
        </button>
        <button
          onClick={sendByEmail}
          className="flex items-center justify-center border-2 border-divine-gold text-divine-gold px-6 py-3 rounded-lg font-medium hover:bg-divine-gold hover:text-white transition-all"
        >
          <Send className="w-5 h-5 mr-2" />
          Envoyer par email
        </button>
      </div>
    </motion.div>
  );

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {[1, 2, 3].map((stepNum) => (
            <div key={stepNum} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  step >= stepNum
                    ? 'bg-divine-gold text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-500'
                }`}
              >
                {step > stepNum ? <Check className="w-5 h-5" /> : stepNum}
              </div>
              {stepNum < 3 && (
                <div
                  className={`w-full h-1 mx-4 ${
                    step > stepNum ? 'bg-divine-gold' : 'bg-gray-200 dark:bg-gray-700'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <div className="text-sm text-divine-gray dark:text-gray-300">
          Étape {step} sur 3: {
            step === 1 ? 'Choix des services' :
            step === 2 ? 'Options complémentaires' :
            'Coordonnées et finalisation'
          }
        </div>
      </div>

      {/* Form Content */}
      <div className="min-h-[500px]">
        {step === 1 && renderStep1()}
        {step === 2 && renderStep2()}
        {step === 3 && renderStep3()}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
        <button
          onClick={prevStep}
          disabled={step === 1}
          className={`px-6 py-3 rounded-lg font-medium transition-all ${
            step === 1
              ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed'
              : 'bg-gray-500 text-white hover:bg-gray-600'
          }`}
        >
          Précédent
        </button>
        
        <div className="text-center">
          <p className="text-sm text-divine-gray dark:text-gray-300 mb-1">Total estimé</p>
          <p className="text-2xl font-bold text-divine-gold">{calculateTotal()}€</p>
        </div>

        <button
          onClick={nextStep}
          disabled={step === 3}
          className={`px-6 py-3 rounded-lg font-medium transition-all ${
            step === 3
              ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed'
              : 'bg-divine-gold text-white hover:bg-opacity-90'
          }`}
        >
          {step === 3 ? 'Terminé' : 'Suivant'}
        </button>
      </div>
    </div>
  );
};

export default DevisGenerator;