"use client";

import { Button } from "@/components/ui/button";
import { Section, SectionContent } from "@/features/page/section";
import {
  ArrowLeft,
  Bath,
  Bed,
  Car,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Square,
} from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Données des propriétés (à remplacer par une vraie source de données)
const properties = [
  {
    id: 1,
    title: "Tropical Oasis",
    location: "Seminyak, Bali",
    description:
      "Cette magnifique villa de luxe offre une expérience de vie exceptionnelle avec sa piscine privée, ses jardins luxuriants et ses équipements modernes. Située dans le quartier exclusif de Seminyak, cette propriété allie élégance et confort pour créer un véritable havre de paix.",
    longDescription:
      "Découvrez cette villa exceptionnelle de 350m² située dans l'un des quartiers les plus prisés de Bali. La propriété dispose de 4 chambres spacieuses, 3 salles de bain modernes, une cuisine entièrement équipée et un salon ouvert sur la piscine. Les jardins tropicaux offrent un cadre idyllique pour se détendre, tandis que la terrasse extérieure est parfaite pour les dîners en plein air. La villa bénéficie également d'un emplacement privilégié à quelques minutes des plages de sable fin et des meilleurs restaurants de la région.",
    price: "$2,450,000",
    image: "/img/1.png",
    images: ["/img/1.png", "/img/2.png", "/img/3.png", "/img/4.png"],
    bedrooms: 4,
    bathrooms: 3,
    area: 350,
    parking: 2,
    advantages: [
      "Piscine privée avec vue panoramique",
      "Jardin tropical entretenu",
      "Cuisine moderne entièrement équipée",
      "Système de sécurité avancé",
      "Climatisation dans toutes les pièces",
      "Terrasse extérieure avec barbecue",
      "Proche des plages et restaurants",
      "Conciergerie 24/7",
    ],
  },
  {
    id: 2,
    title: "Bali Cliff Retreat",
    location: "Uluwatu, Bali",
    description:
      "Villa spectaculaire avec vue panoramique sur l'océan, espaces de vie spacieux et design contemporain. Cette propriété unique offre une expérience de vie inoubliable au sommet des falaises d'Uluwatu.",
    longDescription:
      "Perchée sur les falaises d'Uluwatu, cette villa de 280m² offre des vues à couper le souffle sur l'océan Indien. La propriété comprend 3 chambres avec vue mer, 2 salles de bain, un salon ouvert avec plafonds hauts et grandes baies vitrées. La terrasse panoramique est l'endroit idéal pour admirer les couchers de soleil. La villa dispose également d'un accès privé à une plage isolée et d'un parking pour 2 véhicules.",
    price: "$850,000",
    image: "/img/2.png",
    images: ["/img/2.png", "/img/3.png", "/img/4.png", "/img/1.png"],
    bedrooms: 3,
    bathrooms: 2,
    area: 280,
    parking: 2,
    advantages: [
      "Vue panoramique sur l'océan",
      "Accès privé à la plage",
      "Design contemporain et élégant",
      "Terrasse avec vue spectaculaire",
      "Grandes baies vitrées",
      "Architecture moderne",
      "Quartier exclusif et sécurisé",
      "Proche des spots de surf",
    ],
  },
  {
    id: 3,
    title: "Metro Skyline Loft",
    location: "Jakarta, Indonesia",
    description:
      "Loft contemporain avec design épuré, fenêtres du sol au plafond et vue sur la skyline de Jakarta. Cette propriété urbaine allie modernité et confort au cœur de la capitale.",
    longDescription:
      "Ce loft moderne de 200m² situé dans le centre de Jakarta offre un style de vie urbain sophistiqué. La propriété dispose de 2 chambres, 2 salles de bain, une cuisine ouverte et un espace de vie spacieux avec fenêtres panoramiques offrant une vue imprenable sur la ville. L'intérieur présente un design minimaliste avec des finitions haut de gamme. L'immeuble dispose d'équipements communs incluant une piscine, une salle de sport et une conciergerie.",
    price: "$2,150,000",
    image: "/img/3.png",
    images: ["/img/3.png", "/img/4.png", "/img/1.png", "/img/2.png"],
    bedrooms: 2,
    bathrooms: 2,
    area: 200,
    parking: 1,
    advantages: [
      "Vue panoramique sur la skyline",
      "Fenêtres du sol au plafond",
      "Design minimaliste et moderne",
      "Équipements de l'immeuble (piscine, gym)",
      "Emplacement central",
      "Finitions haut de gamme",
      "Sécurité 24/7",
      "Proche des transports et commerces",
    ],
  },
  {
    id: 4,
    title: "Modern Luxury Estate",
    location: "Bali, Indonesia",
    description:
      "Architecture époustouflante, finitions premium et design luxueux. Cette propriété d'exception représente le summum du luxe et de l'élégance à Bali.",
    longDescription:
      "Cette propriété de prestige de 450m² incarne le luxe moderne à Bali. Avec 5 chambres, 4 salles de bain, une piscine à débordement, un jardin paysager et une terrasse de 100m², cette villa offre un espace de vie exceptionnel. L'intérieur présente des matériaux nobles, une décoration raffinée et des équipements dernier cri. La propriété dispose également d'un espace de détente avec spa, d'un home cinéma et d'un garage pour 3 véhicules.",
    price: "$1,850,000",
    image: "/img/4.png",
    images: ["/img/4.png", "/img/1.png", "/img/2.png", "/img/3.png"],
    bedrooms: 5,
    bathrooms: 4,
    area: 450,
    parking: 3,
    advantages: [
      "Piscine à débordement",
      "Jardin paysager professionnel",
      "Home cinéma",
      "Espace spa et bien-être",
      "Matériaux nobles et finitions premium",
      "Architecture de prestige",
      "Terrasse panoramique de 100m²",
      "Domotique complète",
    ],
  },
];

interface PageProps {
  params: {
    id: string;
  };
}

export default function PropertyDetailPage({ params }: PageProps) {
  const propertyId = parseInt(params.id);
  const property = properties.find((p) => p.id === propertyId);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Propriété non trouvée</h1>
          <Link href="/propertys">
            <Button>Retour aux propriétés</Button>
          </Link>
        </div>
      </div>
    );
  }

  const [selectedImage, setSelectedImage] = React.useState(property.image);

  return (
    <div className="min-h-screen bg-background">
      {/* Header avec bouton retour */}
      <Section id="property-header" className="pt-8 pb-4">
        <SectionContent>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/propertys">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="mr-2 size-4" />
                Retour aux propriétés
              </Button>
            </Link>
          </motion.div>
        </SectionContent>
      </Section>

      {/* Image principale */}
      <Section id="property-images" className="pt-0 pb-8">
        <SectionContent>
          <motion.div
            className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full rounded-lg overflow-hidden mb-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={selectedImage}
              alt={property.title}
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Galerie d'images */}
          <motion.div
            className="grid grid-cols-4 gap-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {property.images.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(img)}
                className={`relative h-24 md:h-32 rounded-lg overflow-hidden border-2 transition-all ${
                  selectedImage === img
                    ? "border-primary scale-105"
                    : "border-transparent hover:border-primary/50"
                }`}
              >
                <Image
                  src={img}
                  alt={`${property.title} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </motion.div>
        </SectionContent>
      </Section>

      {/* Contenu principal */}
      <Section id="property-content" className="pt-0">
        <SectionContent>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Colonne principale */}
            <div className="lg:col-span-2 space-y-8">
              {/* Titre et localisation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  {property.title}
                </h1>
                <div className="flex items-center gap-2 text-muted-foreground mb-6">
                  <MapPin className="size-5" />
                  <span className="text-lg">{property.location}</span>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-primary italic mb-6">
                  {property.price}
                </div>
              </motion.div>

              {/* Caractéristiques */}
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-card rounded-lg border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex items-center gap-3">
                  <Bed className="size-6 text-primary" />
                  <div>
                    <div className="text-2xl font-bold">
                      {property.bedrooms}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Chambres
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Bath className="size-6 text-primary" />
                  <div>
                    <div className="text-2xl font-bold">
                      {property.bathrooms}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Salles de bain
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Square className="size-6 text-primary" />
                  <div>
                    <div className="text-2xl font-bold">{property.area}m²</div>
                    <div className="text-sm text-muted-foreground">Surface</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Car className="size-6 text-primary" />
                  <div>
                    <div className="text-2xl font-bold">{property.parking}</div>
                    <div className="text-sm text-muted-foreground">Parking</div>
                  </div>
                </div>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h2 className="text-2xl font-semibold mb-4">Description</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {property.longDescription}
                </p>
              </motion.div>

              {/* Avantages */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h2 className="text-2xl font-semibold mb-4">Avantages</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {property.advantages.map((advantage, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-card rounded-lg border"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.7 + index * 0.05 }}
                    >
                      <CheckCircle2 className="size-5 text-primary shrink-0" />
                      <span className="text-muted-foreground">{advantage}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar - Contact */}
            <div className="lg:col-span-1">
              <motion.div
                className="sticky top-8 p-6 bg-card rounded-lg border space-y-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-xl font-semibold mb-4">
                  Intéressé par cette propriété ?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Contactez-nous dès maintenant pour organiser une visite ou
                  obtenir plus d'informations.
                </p>
                <div className="space-y-4">
                  <Button
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    size="lg"
                    asChild
                  >
                    <a href="tel:+33123456789">
                      <Phone className="mr-2 size-5" />
                      Appeler maintenant
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full"
                    size="lg"
                    asChild
                  >
                    <a href="mailto:contact@habitat-azure.com">
                      <Mail className="mr-2 size-5" />
                      Envoyer un email
                    </a>
                  </Button>
                  <Button
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    size="lg"
                  >
                    Demander une visite
                  </Button>
                </div>
                <div className="pt-6 border-t">
                  <p className="text-sm text-muted-foreground mb-2">
                    Référence: PROP-{property.id.toString().padStart(4, "0")}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Prix: {property.price}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </SectionContent>
      </Section>
    </div>
  );
}
