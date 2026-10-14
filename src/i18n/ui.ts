export const languages = {
  it: 'Italiano',
  en: 'English',
  de: 'Deutsch',
  fr: 'Français',
};

export const defaultLang = 'it';

export const ui = {
  it: {
    // Navigazione
    'nav.home': 'Home',
    'nav.chi-sono': 'Chi Sono',
    'nav.massaggi': 'Massaggi',
    'nav.trattamenti': 'Trattamenti',
    'nav.gallery': 'Gallery',
    'nav.blog': 'Blog',
    'nav.contatti': 'Contatti',

    // Bottoni & Call to Action
    'btn.prenota': 'Prenota Subito',
    'btn.chiama': 'Chiama Ora',
    'btn.whatsapp': 'Scrivi su WhatsApp',
    'btn.scopri': 'Scopri di più',

    // Sezioni generali
    'badge.atmosfera': 'Atmosfera e Spazi',
    'badge.contatti': 'Parliamo di benessere',
    'badge.recensioni': 'Dicono di noi',
    'reviews.title': 'Le Parole dei Nostri Ospiti',
    'reviews.subtitle': "L'affetto e la fiducia di chi ha scelto i nostri rituali di benessere.",

    // Sedi & Footer
    'footer.desc': 'Trattamenti ayurvedici personalizzati e rituali di benessere in Sardegna.',
    'footer.sedi': 'Le Sedi',
    'footer.cagliari': 'Studio principale (Inverno)',
    'footer.villasimius': 'Servizio a domicilio (Estate)',
    'footer.rights': 'Tutti i diritti riservati.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.chi-sono': 'About Me',
    'nav.massaggi': 'Massages',
    'nav.trattamenti': 'Treatments',
    'nav.gallery': 'Gallery',
    'nav.blog': 'Blog',
    'nav.contatti': 'Contact',

    // Buttons & CTAs
    'btn.prenota': 'Book Now',
    'btn.chiama': 'Call Now',
    'btn.whatsapp': 'Message on WhatsApp',
    'btn.scopri': 'Learn More',

    // General Sections
    'badge.atmosfera': 'Atmosphere & Spaces',
    'badge.contatti': 'Let’s talk about wellness',
    'badge.recensioni': 'Testimonials',
    'reviews.title': 'Words from Our Guests',
    'reviews.subtitle': 'The warmth and trust of those who chose our wellness rituals.',

    // Locations & Footer
    'footer.desc': 'Personalized Ayurvedic treatments and wellness rituals in Sardinia.',
    'footer.sedi': 'Locations',
    'footer.cagliari': 'Main Studio (Winter)',
    'footer.villasimius': 'Home Service (Summer)',
    'footer.rights': 'All rights reserved.',
  },
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.chi-sono': 'Über mich',
    'nav.massaggi': 'Massagen',
    'nav.trattamenti': 'Behandlungen',
    'nav.gallery': 'Galerie',
    'nav.blog': 'Blog',
    'nav.contatti': 'Kontakt',

    // Buttons & CTAs
    'btn.prenota': 'Jetzt Buchen',
    'btn.chiama': 'Jetzt Anrufen',
    'btn.whatsapp': 'Nachricht auf WhatsApp',
    'btn.scopri': 'Mehr Erfahren',

    // General Sections
    'badge.atmosfera': 'Atmosphäre & Räume',
    'badge.contatti': 'Lass uns über Wohlbefinden sprechen',
    'badge.recensioni': 'Kundenstimmen',
    'reviews.title': 'Worte Unserer Gäste',
    'reviews.subtitle': 'Das Vertrauen derer, die unsere Wellness-Rituale gewählt haben.',

    // Locations & Footer
    'footer.desc': 'Individuelle Ayurveda-Behandlungen und Wellness-Rituale auf Sardinien.',
    'footer.sedi': 'Standorte',
    'footer.cagliari': 'Hauptstudio (Winter)',
    'footer.villasimius': 'Hausbesuche (Sommer)',
    'footer.rights': 'Alle Rechte vorbehalten.',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.chi-sono': 'À Propos',
    'nav.massaggi': 'Massages',
    'nav.trattamenti': 'Soins',
    'nav.gallery': 'Galerie',
    'nav.blog': 'Blog',
    'nav.contatti': 'Contact',

    // Buttons & CTAs
    'btn.prenota': 'Réserver',
    'btn.chiama': 'Appeler',
    'btn.whatsapp': 'Message WhatsApp',
    'btn.scopri': 'En savoir plus',

    // General Sections
    'badge.atmosfera': 'Atmosphère & Espaces',
    'badge.contatti': 'Parlons bien-être',
    'badge.recensioni': 'Avis clients',
    'reviews.title': 'Les Mots de Nos Hôtes',
    'reviews.subtitle': 'La confiance de ceux qui ont choisi nos rituels de bien-être.',

    // Locations & Footer
    'footer.desc': 'Soins ayurvédiques personnalisés et rituels de bien-être en Sardaigne.',
    'footer.sedi': 'Nos Lieux',
    'footer.cagliari': 'Studio Principal (Hiver)',
    'footer.villasimius': 'Studio Principal (Hiver)',
    'footer.villasimius': 'Service à Domicile (Été)',
    'footer.rights': 'Tous droits réservés.',
  },
} as const;

// Helper per accedere facilmente alle traduzioni
export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang]?.[key] || ui[defaultLang][key];
  };
}