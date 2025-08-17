import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';

const MentionsLegales = () => {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Mentions Légales"
        subtitle="Informations légales et politique de confidentialité"
        backgroundImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920"
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none"
            >
              <h2 className="text-3xl font-serif font-bold text-divine-dark mb-6">
                Mentions Légales
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-divine-dark mb-4">
                    1. Éditeur du site
                  </h3>
                  <p className="text-divine-gray">
                    <strong>Divine Rest</strong><br />
                    Société par Actions Simplifiée (SAS) au capital de 100 000€<br />
                    Siège social : 123 Avenue de la Paix, 75001 Paris, France<br />
                    RCS Paris : 123 456 789<br />
                    TVA intracommunautaire : FR 12 345678901<br />
                    Téléphone : 01 23 45 67 89<br />
                    Email : contact@divinerest.fr
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-serif font-bold text-divine-dark mb-4">
                    2. Directeur de la publication
                  </h3>
                  <p className="text-divine-gray">
                    M. Pierre Dumont, Président Directeur Général
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-serif font-bold text-divine-dark mb-4">
                    3. Hébergement
                  </h3>
                  <p className="text-divine-gray">
                    Ce site est hébergé par :<br />
                    OVH SAS<br />
                    2 rue Kellermann - 59100 Roubaix - France<br />
                    Téléphone : 1007
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-serif font-bold text-divine-dark mb-4">
                    4. Propriété intellectuelle
                  </h3>
                  <p className="text-divine-gray">
                    L'ensemble de ce site relève de la législation française et internationale 
                    sur le droit d'auteur et la propriété intellectuelle. Tous les droits de 
                    reproduction sont réservés, y compris pour les documents téléchargeables 
                    et les représentations iconographiques et photographiques.
                  </p>
                </div>

                <div id="cgv">
                  <h2 className="text-3xl font-serif font-bold text-divine-dark mb-6 mt-12">
                    Conditions Générales de Vente
                  </h2>

                  <h3 className="text-2xl font-serif font-bold text-divine-dark mb-4">
                    Article 1 - Objet
                  </h3>
                  <p className="text-divine-gray mb-4">
                    Les présentes conditions générales de vente s'appliquent à toutes les 
                    prestations de services funéraires proposées par Divine Rest.
                  </p>

                  <h3 className="text-2xl font-serif font-bold text-divine-dark mb-4">
                    Article 2 - Prix
                  </h3>
                  <p className="text-divine-gray mb-4">
                    Les prix de nos prestations sont indiqués en euros toutes taxes comprises. 
                    Divine Rest se réserve le droit de modifier ses prix à tout moment, mais 
                    les services seront facturés sur la base des tarifs en vigueur au moment 
                    de la validation de la commande.
                  </p>

                  <h3 className="text-2xl font-serif font-bold text-divine-dark mb-4">
                    Article 3 - Modalités de paiement
                  </h3>
                  <p className="text-divine-gray mb-4">
                    Le règlement des prestations s'effectue par chèque, carte bancaire, 
                    virement ou espèces. Des facilités de paiement peuvent être accordées 
                    selon les conditions en vigueur.
                  </p>

                  <h3 className="text-2xl font-serif font-bold text-divine-dark mb-4">
                    Article 4 - Prestations
                  </h3>
                  <p className="text-divine-gray mb-4">
                    Divine Rest s'engage à mettre en œuvre tous les moyens nécessaires pour 
                    assurer la qualité des prestations funéraires conformément aux souhaits 
                    exprimés par le client et dans le respect de la réglementation en vigueur.
                  </p>
                </div>

                <div id="confidentialite">
                  <h2 className="text-3xl font-serif font-bold text-divine-dark mb-6 mt-12">
                    Politique de Confidentialité
                  </h2>

                  <h3 className="text-2xl font-serif font-bold text-divine-dark mb-4">
                    1. Collecte des données
                  </h3>
                  <p className="text-divine-gray mb-4">
                    Divine Rest collecte les données personnelles nécessaires à la réalisation 
                    de ses prestations : nom, prénom, adresse, téléphone, email. Ces données 
                    sont traitées avec la plus stricte confidentialité.
                  </p>

                  <h3 className="text-2xl font-serif font-bold text-divine-dark mb-4">
                    2. Utilisation des données
                  </h3>
                  <p className="text-divine-gray mb-4">
                    Les données collectées sont utilisées uniquement dans le cadre de 
                    l'organisation des obsèques et des services associés. Elles ne sont 
                    jamais vendues ou transmises à des tiers à des fins commerciales.
                  </p>

                  <h3 className="text-2xl font-serif font-bold text-divine-dark mb-4">
                    3. Protection des données
                  </h3>
                  <p className="text-divine-gray mb-4">
                    Divine Rest met en œuvre toutes les mesures techniques et organisationnelles 
                    nécessaires pour protéger les données personnelles contre tout accès non 
                    autorisé, modification, divulgation ou destruction.
                  </p>

                  <h3 className="text-2xl font-serif font-bold text-divine-dark mb-4">
                    4. Droits des utilisateurs
                  </h3>
                  <p className="text-divine-gray mb-4">
                    Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, 
                    de suppression et de portabilité de vos données. Pour exercer ces droits, 
                    contactez-nous à : dpo@divinerest.fr
                  </p>

                  <h3 className="text-2xl font-serif font-bold text-divine-dark mb-4">
                    5. Cookies
                  </h3>
                  <p className="text-divine-gray mb-4">
                    Ce site utilise des cookies pour améliorer l'expérience utilisateur. 
                    En poursuivant votre navigation, vous acceptez l'utilisation de cookies 
                    conformément à notre politique.
                  </p>
                </div>

                <div className="mt-12 p-6 bg-divine-light rounded-xl">
                  <p className="text-sm text-divine-gray">
                    <strong>Date de dernière mise à jour :</strong> 1er janvier 2024<br />
                    Pour toute question concernant nos mentions légales, contactez-nous à 
                    legal@divinerest.fr
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MentionsLegales;
