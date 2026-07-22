import { Artist, Activity, ScheduleItem, FaqItem, Suggestion } from '../types';

export const FESTIVAL_INFO = {
  name: 'De Dag Dat Alles Mag!',
  shortName: 'DDDAM 2026',
  subtitle: 'Het Verjaardagsfestival',
  dateString: 'Zaterdag 15 Augustus 2026',
  targetDate: '2026-08-15T13:00:00+02:00', // 15 Aug 2026 13:00 CEST
  venue: 'De Jungle',
  city: 'Zaandam',
  address: 'Oostzijde 355, 1508 EP Zaandam',
  instagram: 'https://www.instagram.com/dddamfestival/',
  venueInstagram: 'https://www.instagram.com/dejungle075/',
  cutTheCrapWebsite: 'https://cutthecrap.nl/',
  hosts: [
    { name: 'Merijn Tamboer', handle: '@merijntamboer', role: 'Jarige & Oprichter' },
    { name: 'Myrthe de Munnik', handle: '@myrthedemunnik', role: 'Jarige & Co-Host' }
  ]
};

export const ARTISTS: Artist[] = [
  {
    id: 'darzid-exophoria',
    name: 'Darzid b2b ExoPhoria',
    role: 'Nighttime Psytrance Closing Act',
    category: 'headliner',
    time: '23:00 - 02:00',
    stage: 'Jungle Cave (🚨 DAK ERAF)',
    description: 'De ultieme nachtelijke ontlading met hypnotiserende psytrance baslijnen en pompende staccato ritmes.',
    bio: 'Wanneer de zon ondergaat in De Jungle smelten Darzid en ExoPhoria samen tot één energetische psytrance powerhouse. Verwacht diepe, snelle basslines, hypnotiserende synth-melodieën en een audiovisuele trip die de bomen van Zaandam laat trillen.',
    quote: 'Als het dak er eenmaal af is, bouwen we het niet meer op!',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1000&q=80',
    tags: ['Psytrance', 'Closing', 'B2B', 'High Energy', 'Laser Show'],
    links: {
      instagram: 'https://www.instagram.com/dddamfestival/',
      soundcloud: 'https://soundcloud.com'
    }
  },
  {
    id: 'thune',
    name: 'Thune',
    role: 'Rave & Banger Mastermind',
    category: 'dj',
    time: '19:30 - 21:00',
    stage: 'Bamboo Stage',
    description: 'Pompende beats, keiharde overgangen en pure energie.',
    quote: 'Rave till you\'re scheef!',
    image: 'https://images.unsplash.com/photo-1571266028243-e4733b0f0bb1?auto=format&fit=crop&w=800&q=80',
    tags: ['Rave', 'Hard House', 'Techno'],
    links: {
      instagram: 'https://www.instagram.com/dddamfestival/'
    }
  },
  {
    id: 'villa-set',
    name: 'Villa House & Techno Crew',
    role: 'Sun-drenched Grooves',
    category: 'dj',
    time: '16:30 - 18:30',
    stage: 'Villa Garden',
    description: 'Chille zomerse deep house die geleidelijk transformeert in opzwepende jungle techno.',
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80',
    tags: ['Deep House', 'Melodic Techno', 'Jungle Vibes']
  },
  {
    id: 'merijn-bday-set',
    name: 'Merijn (Birthday Set)',
    role: 'Jarige B2B Surprise',
    category: 'dj',
    time: '21:30 - 23:00',
    stage: 'Jungle Mainstage',
    description: 'De organisator zélf achter de draaitafels voor een uitzinnige verjaardagsset vol meezingers en guilty pleasures.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
    tags: ['Guilty Pleasures', 'Birthday Bangers', 'Surprise Guests']
  },
  {
    id: 'wessel-meijering',
    name: 'Wessel Meijering',
    role: 'Stand-up Comedy Host',
    category: 'comedy',
    time: '15:00 - 16:00',
    stage: 'The Laughing Canopy',
    description: 'Scherpe grappen, chaotische verhalen en droogkoterige humor om het festival op te warmen.',
    quote: 'Als er vandaag echt alles mag, ga ik tenminste niet als enige de fout in.',
    image: 'https://images.unsplash.com/photo-1527224857830-43a7acc85260?auto=format&fit=crop&w=800&q=80',
    tags: ['Stand-up', 'Comedy', 'Lachen']
  }
];

export const ACTIVITIES: Activity[] = [
  {
    id: 'karaoke',
    title: 'Karaoke Stage',
    formula: 'Meezingen op volle borst? Mag!',
    description: 'Zing je schor zonder schaamte op ons open-air podium. Van Hazes tot ABBA en Techno Classics!',
    icon: '🎤',
    tag: 'Muziek',
    bgColor: '#FAF7EF'
  },
  {
    id: 'silent-disco',
    title: 'Silent Disco 3-Kanalen',
    formula: '3 kanalen tegelijk luisteren? Mag!',
    description: 'Wissel tussen Kanaal Rood (Guilty Pleasures), Kanaal Blauw (Bangers) en Kanaal Groen (Jungle Techno).',
    icon: '🎧',
    tag: 'Feest',
    bgColor: '#FAF7EF'
  },
  {
    id: 'xxl-games',
    title: 'XXL Games & Sjoelen',
    formula: 'Reuze Jenga omver gooien? Mag!',
    description: 'Daag je vrienden uit bij XXL Sjoelen, Reuze Jenga, Twister in het gras en Bierpong.',
    icon: '🎲',
    tag: 'Spellen',
    bgColor: '#FAF7EF'
  },
  {
    id: 'surf-desk',
    title: 'Surf Desk Challenge',
    formula: 'Surfen midden in de jungle? Mag!',
    description: 'Test je balans op het fysieke surf-balance-board van @surfisdesk. Wie blijft het langst staan?',
    icon: '🏄',
    partner: '@surfisdesk',
    tag: 'Actie',
    bgColor: '#FAF7EF'
  },
  {
    id: 'cut-the-crap',
    title: 'Gratis Knipbeurt door Ed',
    formula: 'Verse festival-coupe scoren? Mag!',
    description: 'Master-kapper Ed van Cut the Crap (cutthecrap.nl) knipt je festival-fresh ter plekke helemaal gratis.',
    icon: '✂️',
    partner: 'Ed / cutthecrap.nl',
    tag: 'Style',
    bgColor: '#FAF7EF'
  },
  {
    id: 'jungle-bar',
    title: 'Jungle Cocktailbar',
    formula: 'Exotische drankjes slurpen? Mag!',
    description: 'Versgemaakte mojito’s, tropische mocktails, koud speciaalbier en verfrissende bio-soda’s.',
    icon: '🍹',
    tag: 'Horeca',
    bgColor: '#FAF7EF'
  },
  {
    id: 'photobooth',
    title: 'Collage Photobooth',
    formula: 'Gekke pakken aantrekken? Mag!',
    description: 'Pak een opblaasdinosaurus, zet een goudgele pruik op en maak direct geprinte foto-collages.',
    icon: '📸',
    tag: 'Herinnering',
    bgColor: '#FAF7EF'
  }
];

export const SCHEDULE: ScheduleItem[] = [
  {
    id: 's1',
    time: '13:00',
    title: 'De Poorten van De Jungle Open',
    subtitle: 'Binnenkomst & Eerste Tropische Drankje',
    location: 'De Jungle Ingang',
    isNight: false,
    category: 'special',
    description: 'Inloop met jungle beats, welkomstdrankje en verkenning van de XXL games.'
  },
  {
    id: 's2',
    time: '14:00',
    title: 'Officieel Verjaardagsceremonie',
    subtitle: 'Welkom door Merijn & Myrthe',
    location: 'Main Canopy',
    isNight: false,
    category: 'special',
    description: 'Het startsein voor De Dag Dat Alles Mag. Toosten op het leven met confetti!',
    highlight: true
  },
  {
    id: 's3',
    time: '15:00',
    title: 'Wessel Meijering Comedy Show',
    subtitle: 'Stand-up onder de bamboe',
    location: 'The Laughing Canopy',
    isNight: false,
    category: 'comedy',
    description: 'Geen blad voor de mond, scherpe grappen en hilarische improvisaties.'
  },
  {
    id: 's4',
    time: '16:00',
    title: 'Opening Surf Desk & Cut the Crap',
    subtitle: 'Surfen + Gratis Knipbeurt door Ed',
    location: 'Activity Meadow',
    isNight: false,
    category: 'activity',
    description: 'Haal je gratis verse coupe bij Ed en waag een poging op het surfboard.'
  },
  {
    id: 's5',
    time: '16:30',
    title: 'Villa House & Techno Crew',
    subtitle: 'Zomerse Grooves & Deep Techno',
    location: 'Villa Garden',
    isNight: false,
    category: 'music',
    description: 'Lome zomerse klanken transformeren langzaam in stevigere dancemusic.'
  },
  {
    id: 's6',
    time: '18:00',
    title: 'XXL Sjoeltoernooi & Open Karaoke Stage',
    subtitle: 'Eeuwige Roem & Beker overhandiging',
    location: 'Games Corner',
    isNight: false,
    category: 'activity',
    description: 'Wie wordt de officiële DDDAM 2026 Sjoelkampioen?'
  },
  {
    id: 's7',
    time: '19:30',
    title: 'Thune Set: Rave till you\'re scheef!',
    subtitle: 'High Voltage Rave Masterclass',
    location: 'Bamboo Stage',
    isNight: false,
    category: 'music',
    description: 'Pompende bassen en uitzinnige dansvibes ter voorbereiding op de nacht.',
    highlight: true
  },
  {
    id: 's8',
    time: '21:00',
    title: '🚨 DAK ERAF: Night Switch',
    subtitle: 'Transitiefase naar Psytrance Night',
    location: 'Heel De Jungle',
    isNight: true,
    category: 'special',
    description: 'De verlichting verandert in neon purper, lasers gaan aan en het avondprogramma ontploft.',
    highlight: true
  },
  {
    id: 's9',
    time: '21:30',
    title: 'Merijn Birthday Surprise B2B Set',
    subtitle: 'Jarige achter de decks',
    location: 'Jungle Mainstage',
    isNight: true,
    category: 'music',
    description: 'Ongefilterde verjaardagssfeer met verrassingsartiesten en meezingers.'
  },
  {
    id: 's10',
    time: '23:00 - 02:00',
    title: '🐅 Darzid b2b ExoPhoria',
    subtitle: 'Nighttime Psytrance Closing Mayhem',
    location: 'Jungle Cave',
    isNight: true,
    category: 'music',
    description: 'Drie uur lang beukende psytrance, snelle bpm\'s en audiovisuele extase.',
    highlight: true
  }
];

export const INITIAL_SUGGESTIONS: Suggestion[] = [
  { id: '1', text: 'Op blote voeten dansen in het gras', author: 'Sophie', votes: 42, approved: true },
  { id: '2', text: 'Taart eten als ontbijt én diner', author: 'Lars', votes: 38, approved: true },
  { id: '3', text: 'Glitter op je gezicht smeren om 14:00', author: 'Anouk', votes: 56, approved: true },
  { id: '4', text: 'Met opblaasdieren polonaise lopen', author: 'Daan', votes: 29, approved: true },
  { id: '5', text: 'Confetti gooien naar willekeurige voorbijgangers', author: 'Fleur', votes: 47, approved: true },
  { id: '6', text: 'Hardop meezingen met K3 tijdens psytrance', author: 'Bram', votes: 61, approved: true }
];

export const FAQS: FaqItem[] = [
  {
    id: 'f1',
    question: 'Waar en wanneer vindt De Dag Dat Alles Mag plaats?',
    answer: 'Het festival vindt plaats op Zaterdag 15 Augustus 2026 bij De Jungle (Oostzijde 355) in Zaandam. De deuren openen om 13:00 en we gaan door tot 02:00 in de nacht!',
    category: 'Algemeen'
  },
  {
    id: 'f2',
    question: 'Hoe kom ik bij De Jungle in Zaandam?',
    answer: 'De Jungle is eenvoudig bereikbaar per fiets vanaf Zaandam Station (ca. 8 min) of met bus 67/69. Er is een ruime fietsenstalling aanwezig op het terrein. Kom je met de auto? Parkeer in de buurt op de aangewezen vakken.',
    category: 'Locatie & OV'
  },
  {
    id: 'f3',
    question: 'Wat kost een ticket voor het festival?',
    answer: 'Aanmelden is helemaal gratis! Maar om het overzicht te bewaren vragen we iedereen zich van tevoren digitaal aan te melden via het formulier op deze pagina.',
    category: 'Tickets'
  },
  {
    id: 'f4',
    question: 'Wat gebeurt er als het regent?',
    answer: 'Geen zorgen! De Jungle heeft overdekte bamboe-paviljoens, overkapte podia en een stevige houten dansvloer. Regen of zonneschijn: feest vieren mag!',
    category: 'Locatie & OV'
  },
  {
    id: 'f5',
    question: 'Is er eten en drinken aanwezig op het terrein?',
    answer: 'Zeker! Onze Jungle Bar schenkt ijskoude biertjes, cocktails en frisdrank. Ook staan er foodtrucks met heerlijke snacks, vega maaltijden en verjaardagstaart.',
    category: 'Horeca'
  },
  {
    id: 'f6',
    question: 'Mag nou echt álles op De Dag Dat Alles Mag?',
    answer: 'Vrijwel alles! Zolang het maar veilig, gezellig en met respect voor de natuur, De Jungle en elkaar gebeurt. Liefde, plezier en gekheid staan voorop!',
    category: 'Algemeen'
  }
];
