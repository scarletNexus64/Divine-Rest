import React, { useState, useEffect } from 'react';
import { X, Cookie, Shield, ChartBar, Settings } from 'lucide-react';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const handleAcceptAll = () => {
    const allConsent = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(allConsent));
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    const minimalConsent = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(minimalConsent));
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    const customConsent = {
      ...preferences,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(customConsent));
    setShowBanner(false);
    setShowDetails(false);
  };

  const togglePreference = (type) => {
    if (type !== 'necessary') {
      setPreferences(prev => ({
        ...prev,
        [type]: !prev[type]
      }));
    }
  };

  if (!showBanner) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-[9998] backdrop-blur-sm transition-opacity duration-300" />
      
      <div className="fixed inset-x-4 bottom-4 md:inset-auto md:bottom-8 md:left-8 md:right-8 lg:left-auto lg:right-8 lg:w-[450px] z-[9999] animate-slide-up">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
                  <Cookie className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Cookies & Confidentialité
                </h3>
              </div>
              <button
                onClick={handleRejectAll}
                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                aria-label="Fermer"
              >
                <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </button>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
              Nous utilisons des cookies pour améliorer votre expérience sur notre site, 
              analyser le trafic et vous proposer des contenus personnalisés. 
              Vous pouvez accepter tous les cookies ou personnaliser vos préférences.
            </p>

            {!showDetails ? (
              <>
                <div className="flex flex-col sm:flex-row gap-3 mb-4">
                  <button
                    onClick={handleAcceptAll}
                    className="flex-1 px-4 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors duration-200"
                  >
                    Accepter tout
                  </button>
                  <button
                    onClick={handleRejectAll}
                    className="flex-1 px-4 py-2.5 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-medium rounded-lg transition-colors duration-200"
                  >
                    Refuser tout
                  </button>
                </div>
                <button
                  onClick={() => setShowDetails(true)}
                  className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700/50 text-gray-700 dark:text-gray-300 font-medium rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Settings className="w-4 h-4" />
                  Personnaliser
                </button>
              </>
            ) : (
              <div className="space-y-4">
                <div className="max-h-60 overflow-y-auto pr-2 space-y-3">
                  <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-green-600 dark:text-green-400" />
                        <span className="font-medium text-gray-900 dark:text-white">
                          Cookies essentiels
                        </span>
                      </div>
                      <div className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium rounded">
                        Toujours actif
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Nécessaires au fonctionnement du site et à la sécurité.
                    </p>
                  </div>

                  <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <ChartBar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        <span className="font-medium text-gray-900 dark:text-white">
                          Cookies analytiques
                        </span>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={preferences.analytics}
                          onChange={() => togglePreference('analytics')}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-300 dark:bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-600"></div>
                      </label>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Nous aident à comprendre comment vous utilisez le site.
                    </p>
                  </div>

                  <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Settings className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                        <span className="font-medium text-gray-900 dark:text-white">
                          Cookies fonctionnels
                        </span>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={preferences.functional}
                          onChange={() => togglePreference('functional')}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-300 dark:bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-600"></div>
                      </label>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Mémorisent vos préférences et améliorent votre expérience.
                    </p>
                  </div>

                  <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <ChartBar className="w-4 h-4 text-red-600 dark:text-red-400" />
                        <span className="font-medium text-gray-900 dark:text-white">
                          Cookies marketing
                        </span>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={preferences.marketing}
                          onChange={() => togglePreference('marketing')}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-300 dark:bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-600"></div>
                      </label>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Utilisés pour vous proposer des publicités pertinentes.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    onClick={() => setShowDetails(false)}
                    className="flex-1 px-4 py-2.5 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-medium rounded-lg transition-colors duration-200"
                  >
                    Retour
                  </button>
                  <button
                    onClick={handleSavePreferences}
                    className="flex-1 px-4 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors duration-200"
                  >
                    Sauvegarder
                  </button>
                </div>
              </div>
            )}

            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                En utilisant notre site, vous acceptez notre{' '}
                <a href="/mentions-legales" className="text-amber-600 dark:text-amber-400 hover:underline">
                  politique de confidentialité
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default CookieBanner;