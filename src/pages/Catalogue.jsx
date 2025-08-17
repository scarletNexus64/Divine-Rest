import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaShoppingCart, FaInfoCircle, FaSearch, FaFilter, FaChevronLeft, FaChevronRight, FaSpinner } from 'react-icons/fa';
import { FcBiotech, FcDataConfiguration, FcPortraitMode, FcFlowChart, FcBusinessman, FcLandscape, FcServices, FcSupport, FcElectronics, FcLibrary, FcTreeStructure, FcHome, FcIdea, FcGallery, FcCamera, FcDocument, FcGraduationCap, FcMusic, FcCollaboration, FcBriefcase, FcSafe } from 'react-icons/fc';
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';

const Catalogue = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [itemsPerPage] = useState(12);

  const categories = [
    { id: 'all', name: 'Tous les produits' },
    { id: 'cercueils', name: 'Cercueils' },
    { id: 'urnes', name: 'Urnes' },
    { id: 'plaques', name: 'Plaques' },
    { id: 'fleurs', name: 'Fleurs' },
    { id: 'ornements', name: 'Ornements' },
    { id: 'monuments', name: 'Monuments' },
    { id: 'accessoires', name: 'Accessoires' }
  ];

  const getProducts = () => [
    // Cercueils
    {
      id: 1,
      category: 'cercueils',
      name: 'prestigeOakCoffin',
      price: 'from' + ' 2500€',
      icon: <FcDataConfiguration className="w-16 h-16" />,
      description: 'prestigeOakCoffinDesc'
    },
    {
      id: 2,
      category: 'cercueils',
      name: 'elegancePineCoffin',
      price: 'from' + ' 1500€',
      icon: <FcDataConfiguration className="w-16 h-16" />,
      description: 'elegancePineCoffinDesc'
    },
    {
      id: 3,
      category: 'cercueils',
      name: 'traditionMahoganyCoffin',
      price: 'from' + ' 3200€',
      icon: <FcDataConfiguration className="w-16 h-16" />,
      description: 'traditionMahoganyCoffinDesc'
    },
    {
      id: 4,
      category: 'cercueils',
      name: 'modernMetalCoffin',
      price: 'from' + ' 2800€',
      icon: <FcElectronics className="w-16 h-16" />,
      description: 'modernMetalCoffinDesc'
    },
    {
      id: 5,
      category: 'cercueils',
      name: 'ecoCardboardCoffin',
      price: 'from' + ' 800€',
      icon: <FcServices className="w-16 h-16" />,
      description: 'ecoCardboardCoffinDesc'
    },
    {
      id: 6,
      category: 'cercueils',
      name: 'luxuryEbonyCoffin',
      price: 'from' + ' 4500€',
      icon: <FcBriefcase className="w-16 h-16" />,
      description: 'luxuryEbonyCoffinDesc'
    },

    // Urnes
    {
      id: 7,
      category: 'urnes',
      name: 'eternityMarbleUrn',
      price: '450€',
      icon: <FcFlowChart className="w-16 h-16" />,
      description: 'eternityMarbleUrnDesc'
    },
    {
      id: 8,
      category: 'urnes',
      name: 'serenityWoodUrn',
      price: '250€',
      icon: <FcTreeStructure className="w-16 h-16" />,
      description: 'serenityWoodUrnDesc'
    },
    {
      id: 9,
      category: 'urnes',
      name: 'crystalUrn',
      price: '680€',
      icon: <FcIdea className="w-16 h-16" />,
      description: 'crystalUrnDesc'
    },
    {
      id: 10,
      category: 'urnes',
      name: 'ceramicUrn',
      price: '320€',
      icon: <FcHome className="w-16 h-16" />,
      description: 'ceramicUrnDesc'
    },
    {
      id: 11,
      category: 'urnes',
      name: 'biodegradableUrn',
      price: '180€',
      icon: <FcSupport className="w-16 h-16" />,
      description: 'biodegradableUrnDesc'
    },
    {
      id: 12,
      category: 'urnes',
      name: 'engravedMetalUrn',
      price: '520€',
      icon: <FcSafe className="w-16 h-16" />,
      description: 'engravedMetalUrnDesc'
    },

    // Plaques
    {
      id: 13,
      category: 'plaques',
      name: 'personalizedGranitePlaque',
      price: '180€',
      icon: <FcPortraitMode className="w-16 h-16" />,
      description: 'personalizedGranitePlaqueDesc'
    },
    {
      id: 14,
      category: 'plaques',
      name: 'goldMarblePlaque',
      price: '250€',
      icon: <FcDocument className="w-16 h-16" />,
      description: 'goldMarblePlaqueDesc'
    },
    {
      id: 15,
      category: 'plaques',
      name: 'modernGlassPlaque',
      price: '320€',
      icon: <FcCamera className="w-16 h-16" />,
      description: 'modernGlassPlaqueDesc'
    },
    {
      id: 16,
      category: 'plaques',
      name: 'antiqueBronzePlaque',
      price: '380€',
      icon: <FcGraduationCap className="w-16 h-16" />,
      description: 'antiqueBronzePlaqueDesc'
    },
    {
      id: 17,
      category: 'plaques',
      name: 'colorCeramicPlaque',
      price: '150€',
      icon: <FcGallery className="w-16 h-16" />,
      description: 'colorCeramicPlaqueDesc'
    },

    // Fleurs
    {
      id: 18,
      category: 'fleurs',
      name: 'whiteRosesCrown',
      price: '150€',
      icon: <FcLandscape className="w-16 h-16" />,
      description: 'whiteRosesCrownDesc'
    },
    {
      id: 19,
      category: 'fleurs',
      name: 'lilySheaf',
      price: '120€',
      icon: <FcLandscape className="w-16 h-16" />,
      description: 'lilySheafDesc'
    },
    {
      id: 20,
      category: 'fleurs',
      name: 'redRosesBouquet',
      price: '85€',
      icon: <FcLandscape className="w-16 h-16" />,
      description: 'redRosesBouquetDesc'
    },
    {
      id: 21,
      category: 'fleurs',
      name: 'orchidsComposition',
      price: '200€',
      icon: <FcLandscape className="w-16 h-16" />,
      description: 'orchidsCompositionDesc'
    },
    {
      id: 22,
      category: 'fleurs',
      name: 'floralCushion',
      price: '95€',
      icon: <FcLandscape className="w-16 h-16" />,
      description: 'floralCushionDesc'
    },
    {
      id: 23,
      category: 'fleurs',
      name: 'chrysanthemumSheaf',
      price: '110€',
      icon: <FcLandscape className="w-16 h-16" />,
      description: 'chrysanthemumSheafDesc'
    },

    // Ornements
    {
      id: 24,
      category: 'ornements',
      name: 'goldenCross',
      price: '95€',
      icon: <FcBiotech className="w-16 h-16" />,
      description: 'goldenCrossDesc'
    },
    {
      id: 25,
      category: 'ornements',
      name: 'marbleGuardianAngel',
      price: '280€',
      icon: <FcBusinessman className="w-16 h-16" />,
      description: 'marbleGuardianAngelDesc'
    },
    {
      id: 26,
      category: 'ornements',
      name: 'engravedCrystalHeart',
      price: '150€',
      icon: <FcMusic className="w-16 h-16" />,
      description: 'engravedCrystalHeartDesc'
    },
    {
      id: 27,
      category: 'ornements',
      name: 'commemorativeStar',
      price: '75€',
      icon: <FcIdea className="w-16 h-16" />,
      description: 'commemorativeStarDesc'
    },
    {
      id: 28,
      category: 'ornements',
      name: 'motherOfPearlRosary',
      price: '65€',
      icon: <FcCollaboration className="w-16 h-16" />,
      description: 'motherOfPearlRosaryDesc'
    },

    // Monuments
    {
      id: 29,
      category: 'monuments',
      name: 'modernGraniteStele',
      price: 'from' + ' 1200€',
      icon: <FcLibrary className="w-16 h-16" />,
      description: 'modernGraniteSteleDesc'
    },
    {
      id: 30,
      category: 'monuments',
      name: 'traditionalMonument',
      price: 'from' + ' 1800€',
      icon: <FcLibrary className="w-16 h-16" />,
      description: 'traditionalMonumentDesc'
    },
    {
      id: 31,
      category: 'monuments',
      name: 'familyVault',
      price: 'from' + ' 5000€',
      icon: <FcHome className="w-16 h-16" />,
      description: 'familyVaultDesc'
    },
    {
      id: 32,
      category: 'monuments',
      name: 'personalColumbarium',
      price: 'from' + ' 800€',
      icon: <FcSafe className="w-16 h-16" />,
      description: 'personalColumbariumDesc'
    },

    // Accessoires
    {
      id: 33,
      category: 'accessoires',
      name: 'condolenceBook',
      price: '45€',
      icon: <FcDocument className="w-16 h-16" />,
      description: 'condolenceBookDesc'
    },
    {
      id: 34,
      category: 'accessoires',
      name: 'satinCushion',
      price: '35€',
      icon: <FcServices className="w-16 h-16" />,
      description: 'satinCushionDesc'
    },
    {
      id: 35,
      category: 'accessoires',
      name: 'funeralVeil',
      price: '25€',
      icon: <FcSupport className="w-16 h-16" />,
      description: 'funeralVeilDesc'
    },
    {
      id: 36,
      category: 'accessoires',
      name: 'bronzeIncense',
      price: '120€',
      icon: <FcBiotech className="w-16 h-16" />,
      description: 'bronzeIncenseDesc'
    },
    {
      id: 37,
      category: 'accessoires',
      name: 'ceremonyCandles',
      price: '15€',
      icon: <FcIdea className="w-16 h-16" />,
      description: 'ceremonyCandlesDesc'
    },
    {
      id: 38,
      category: 'accessoires',
      name: 'memorialMedallion',
      price: '55€',
      icon: <FcPortraitMode className="w-16 h-16" />,
      description: 'memorialMedallionDesc'
    }
  ];

  const products = getProducts();

  // Simulate loading effect
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [activeCategory, searchTerm]);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchTerm]);

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const LoadingSpinner = () => (
    <div className="flex items-center justify-center py-12">
      <FaSpinner className="animate-spin text-divine-gold text-4xl mr-3" />
      <span className="text-divine-gray dark:text-gray-300">Chargement des produits...</span>
    </div>
  );

  const ProductSkeleton = () => (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden animate-pulse">
      <div className="h-48 bg-gray-200 dark:bg-gray-700"></div>
      <div className="p-6">
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
        <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
        <div className="flex justify-between">
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
          <div className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <PageHeader
        title="Catalogue Produits"
        subtitle="Une sélection de produits funéraires de qualité pour honorer la mémoire de vos proches"
        backgroundImage="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=1920"
      />

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          {/* Search and Filter Bar */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative w-full md:w-96">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher un produit..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-divine-dark dark:text-white focus:ring-2 focus:ring-divine-gold focus:border-transparent transition"
                />
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-full font-medium transition-all ${
                      activeCategory === category.id
                        ? 'bg-divine-gold text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-divine-dark dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Array.from({ length: 12 }).map((_, index) => (
                <ProductSkeleton key={index} />
              ))}
            </div>
          ) : (
            <>
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeCategory}-${searchTerm}-${currentPage}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                  {currentProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group hover:scale-105"
                    >
                      <div className="relative h-48 overflow-hidden flex items-center justify-center bg-divine-light dark:bg-gray-700">
                        <motion.div 
                          className="group-hover:scale-110 transition-transform duration-300"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          {product.icon}
                        </motion.div>
                        <div className="absolute top-2 right-2 bg-divine-gold text-white px-3 py-1 rounded-full text-sm">
                          {product.category}
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-serif font-bold text-divine-dark dark:text-white mb-2">
                          {product.name}
                        </h3>
                        <p className="text-divine-gray dark:text-gray-300 text-sm mb-4">
                          {product.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold text-divine-gold">
                            {product.price}
                          </span>
                          <motion.button 
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="bg-divine-dark text-white p-2 rounded-lg hover:bg-divine-gold transition"
                          >
                            <FaInfoCircle />
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* Pagination */}
              {totalPages > 1 && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-center items-center mt-12 space-x-2"
                >
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`p-2 rounded-lg transition ${
                      currentPage === 1
                        ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed'
                        : 'bg-divine-gold text-white hover:bg-opacity-90'
                    }`}
                  >
                    <FaChevronLeft />
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`px-4 py-2 rounded-lg transition ${
                        currentPage === page
                          ? 'bg-divine-gold text-white'
                          : 'bg-gray-200 dark:bg-gray-700 text-divine-dark dark:text-white hover:bg-divine-gold hover:text-white'
                      }`}
                    >
                      {page}
                    </button>
                  ))}

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`p-2 rounded-lg transition ${
                      currentPage === totalPages
                        ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed'
                        : 'bg-divine-gold text-white hover:bg-opacity-90'
                    }`}
                  >
                    <FaChevronRight />
                  </button>
                </motion.div>
              )}

              {/* Results Info */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center mt-8 text-divine-gray dark:text-gray-300"
              >
                Affichage de {startIndex + 1} à {Math.min(endIndex, filteredProducts.length)} sur {filteredProducts.length} produits
              </motion.div>
            </>
          )}

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-divine-light dark:bg-gray-800 rounded-2xl p-8 text-center"
          >
            <h2 className="text-3xl font-serif font-bold text-divine-dark dark:text-white mb-4">
              Besoin d'aide pour choisir ?
            </h2>
            <p className="text-divine-gray dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Nos conseillers sont à votre disposition pour vous guider dans le choix des produits les plus adaptés à vos besoins et à votre budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-divine-gold text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition"
              >
                Demander un devis
              </Link>
              <a
                href="tel:+33123456789"
                className="border-2 border-divine-gold text-divine-gold px-8 py-3 rounded-full font-medium hover:bg-divine-gold hover:text-white transition"
              >
                Appeler un conseiller
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Catalogue;
