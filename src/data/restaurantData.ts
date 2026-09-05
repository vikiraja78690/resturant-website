import { MenuItem, GalleryItem, Testimonial, BanquetSpace } from '../types';

export const RESTAURANT_INFO = {
  name: 'EMBER & OAK',
  subtitle: 'RESTAURANT & BAR',
  tagline: 'Elevated Flavors. Memorable Moments.',
  city: 'Austin, Texas, USA',
  address: '123 Oak Avenue, Austin, Texas 78701',
  phone: '+1 (512) 555-0198',
  email: 'hello@emberandoak.com',
  hours: {
    days: 'Monday – Sunday',
    time: '11:00 AM – 11:00 PM',
    lunch: '11:00 AM – 3:00 PM',
    dinner: '5:00 PM – 11:00 PM',
    bar: '11:00 AM – Midnight (Fri & Sat to 1:00 AM)',
  },
  social: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    tiktok: 'https://tiktok.com',
  }
};

export const SIGNATURE_DISHES: MenuItem[] = [
  {
    id: 'ribeye-steak',
    name: 'Grilled Ribeye Steak',
    category: 'main-course',
    price: '$36',
    description: 'Prime 45-day dry-aged beef, charred over Texas post oak, topped with rosemary bone marrow butter and blistered heirloom vine tomatoes.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80',
    tags: ['Chef Signature', 'Gluten-Free'],
    isSpecial: true,
    pairing: 'Austin Oak Reserve Cabernet Sauvignon'
  },
  {
    id: 'truffle-pasta',
    name: 'Truffle Mushroom Pasta',
    category: 'pasta',
    price: '$28',
    description: 'Handcrafted bronze-die tagliolini with freshly shaved black winter truffles, wild forest chanterelles, cultured cream, and 24-month Parmigiano Reggiano.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80',
    tags: ['Vegetarian', 'Handmade Daily'],
    isSpecial: true,
    pairing: 'Piedmont Nebbiolo 2020'
  },
  {
    id: 'seared-salmon',
    name: 'Seared Salmon',
    category: 'seafood',
    price: '$32',
    description: 'Crisp-skinned King salmon with a velvety celery root purée, honey-glazed baby heirloom carrots, and a delicate Meyer lemon-dill emulsion.',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80',
    tags: ['Gluten-Free', 'Wild-Caught'],
    isSpecial: true,
    pairing: 'Sonoma Coast Chardonnay'
  },
  {
    id: 'chocolate-lava-cake',
    name: 'Chocolate Lava Cake',
    category: 'desserts',
    price: '$12',
    description: 'Warm Valrhona 72% dark chocolate cake with a molten core, paired with hand-churned Madagascar vanilla bean gelato and candied hazelnut lace.',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=80',
    tags: ['House Specialty'],
    isSpecial: true,
    pairing: 'Tawny Port 20 Year'
  }
];

export const MENU_ITEMS: MenuItem[] = [
  // STARTERS
  {
    id: 's-1',
    name: 'Wagyu Beef Carpaccio',
    category: 'starters',
    price: '$19',
    description: 'Thinly sliced American Wagyu, caperberries, pickled shallots, white truffle oil, shaved pecorino, and grilled rustic sourdough.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
    tags: ['Gluten-Free Option']
  },
  {
    id: 's-2',
    name: 'Charred Spanish Octopus',
    category: 'starters',
    price: '$22',
    description: 'Smoked paprika oil, crispy fingerling potatoes, saffron aioli, micro greens, and pickled Fresno chili.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80',
    tags: ['Gluten-Free', 'Signature']
  },
  {
    id: 's-3',
    name: 'Burrata di Puglia',
    category: 'starters',
    price: '$18',
    description: 'Creamy artisan burrata, roasted Texas heirloom tomatoes, basil pesto, 18-year aged balsamic drizzle, and warm focaccia.',
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d69106095?auto=format&fit=crop&w=600&q=80',
    tags: ['Vegetarian']
  },
  {
    id: 's-4',
    name: 'Ember-Smoked Bone Marrow',
    category: 'starters',
    price: '$21',
    description: 'Canoe-cut beef marrow with shallot bacon jam, fresh parsley lemon gremolata, and toasted brioche points.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80'
  },

  // SOUPS & SALADS
  {
    id: 'ss-1',
    name: 'Smoked Sweet Corn Bisque',
    category: 'soups-salads',
    price: '$14',
    description: 'Fire-roasted Hill Country sweet corn, smoked crème fraîche, chive oil, and crispy corn husk crisps.',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80',
    tags: ['Vegetarian', 'Gluten-Free']
  },
  {
    id: 'ss-2',
    name: 'Grilled Little Gem Caesar',
    category: 'soups-salads',
    price: '$16',
    description: 'Lightly charred baby gem romaine, garlic anchovy dressing, sourdough croutons, shaved parmesan frico, and crispy capers.',
    image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'ss-3',
    name: 'Roasted Golden Beet & Goat Cheese',
    category: 'soups-salads',
    price: '$17',
    description: 'Whipped Texas goat cheese, spiced pecans, baby arugula, blood orange segments, and honey-shallot vinaigrette.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80',
    tags: ['Vegetarian', 'Gluten-Free']
  },

  // MAIN COURSE
  {
    id: 'm-1',
    name: 'Grilled Ribeye Steak',
    category: 'main-course',
    price: '$36',
    description: 'Prime 45-day dry-aged beef, charred over Texas post oak, rosemary bone marrow butter, blistered vine tomatoes.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
    tags: ['Chef Signature', 'Gluten-Free'],
    isSpecial: true
  },
  {
    id: 'm-2',
    name: 'Oak-Smoked Berkshire Pork Chop',
    category: 'main-course',
    price: '$34',
    description: 'Thick-cut bone-in chop, bourbon-peach glaze, braised collard greens, and creamy stone-ground cheddar grits.',
    image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?auto=format&fit=crop&w=600&q=80',
    tags: ['Locally Sourced']
  },
  {
    id: 'm-3',
    name: 'Braised Prime Beef Short Rib',
    category: 'main-course',
    price: '$38',
    description: 'Slow-cooked for 14 hours in red wine reduction, parsnip purée, glazed Cipollini onions, and natural jus.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
    tags: ['Signature']
  },
  {
    id: 'm-4',
    name: 'Roasted Jidori Half Chicken',
    category: 'main-course',
    price: '$29',
    description: 'Herb-butter basted organic chicken, wild mushroom fricassee, roasted baby leeks, and roasted chicken jus.',
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=600&q=80',
    tags: ['Gluten-Free']
  },

  // PASTA
  {
    id: 'p-1',
    name: 'Truffle Mushroom Pasta',
    category: 'pasta',
    price: '$28',
    description: 'Handcrafted bronze-die tagliolini with black winter truffle, wild forest chanterelles, cultured cream, and Parmigiano Reggiano.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80',
    tags: ['Vegetarian', 'Handmade Daily'],
    isSpecial: true
  },
  {
    id: 'p-2',
    name: 'Squid Ink Lobster Campanelle',
    category: 'pasta',
    price: '$34',
    description: 'House-extruded squid ink pasta, Maine lobster claws, San Marzano tomato butter, Calabrian chili, and pangrattato crunch.',
    image: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281691?auto=format&fit=crop&w=600&q=80',
    tags: ['Signature']
  },
  {
    id: 'p-3',
    name: 'Wild Boar Pappardelle',
    category: 'pasta',
    price: '$29',
    description: 'Hand-cut broad ribbons, slow-braised Hill Country wild boar ragù, juniper berry, pecorino toscano, and fresh herbs.',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80'
  },

  // SEAFOOD
  {
    id: 'sf-1',
    name: 'Seared Salmon',
    category: 'seafood',
    price: '$32',
    description: 'Crisp-skinned King salmon with celery root purée, honey-glazed baby heirloom carrots, and Meyer lemon-dill emulsion.',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=600&q=80',
    tags: ['Gluten-Free', 'Wild-Caught'],
    isSpecial: true
  },
  {
    id: 'sf-2',
    name: 'Pan-Seared Sea Scallops',
    category: 'seafood',
    price: '$35',
    description: 'Jumbo Georges Bank scallops, sweet pea purée, crispy pancetta lardons, citrus butter sauce, and pea tendrils.',
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=600&q=80',
    tags: ['Gluten-Free']
  },
  {
    id: 'sf-3',
    name: 'Chilean Sea Bass',
    category: 'seafood',
    price: '$42',
    description: 'Miso-glazed sea bass fillet, bok choy, dashi ginger broth, shiitake mushrooms, and sesame crisp.',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80'
  },

  // DESSERTS
  {
    id: 'd-1',
    name: 'Chocolate Lava Cake',
    category: 'desserts',
    price: '$12',
    description: 'Warm Valrhona 72% dark chocolate cake with a molten core, paired with hand-churned vanilla bean gelato and hazelnut lace.',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80',
    tags: ['House Specialty'],
    isSpecial: true
  },
  {
    id: 'd-2',
    name: 'Smoked Bourbon Pecan Tart',
    category: 'desserts',
    price: '$13',
    description: 'Toasted Texas pecans, Balcones bourbon caramel, butter sablé crust, and mascarpone cream.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'd-3',
    name: 'Meyer Lemon Olive Oil Cake',
    category: 'desserts',
    price: '$11',
    description: 'Warm citrus-infused sponge, rosemary infused whipped ricotta, blackberry coulis, and candied zest.',
    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=600&q=80',
    tags: ['Vegetarian']
  },

  // COCKTAILS
  {
    id: 'c-1',
    name: 'The Ember Old Fashioned',
    category: 'cocktails',
    price: '$17',
    description: 'Small-batch Texas bourbon infused with charred oak staves, smoked demerara, Angostura bitters, and flamed orange peel.',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80',
    tags: ['Signature Drink']
  },
  {
    id: 'c-2',
    name: 'Austin Midnight Smoke',
    category: 'cocktails',
    price: '$18',
    description: 'Mezcal artesanal, blackberry sage syrup, fresh lime juice, egg white foam, and smoked salt rim.',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'c-3',
    name: 'Oak Botanical Spritz',
    category: 'cocktails',
    price: '$16',
    description: 'Empress 1908 Gin, St-Germain elderflower liqueur, clarified grapefruit, prosecco float, and fresh garden rosemary sprig.',
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'c-4',
    name: 'Velvet Espresso Martini',
    category: 'cocktails',
    price: '$17',
    description: 'Grey Goose vodka, freshly pulled single-origin espresso, Kahlúa, dark chocolate ganache swirl, and toasted cacao nibs.',
    image: 'https://images.unsplash.com/photo-1574056067227-66a93557e034?auto=format&fit=crop&w=600&q=80'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Wood-Fired Ribeye at Ember & Oak',
    category: 'food',
    categoryLabel: 'Food & Culinary',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85',
    description: 'Our signature prime ribeye steak kissed by Texas post oak fire.',
    aspect: 'wide'
  },
  {
    id: 'g-2',
    title: 'The Ember Old Fashioned',
    category: 'cocktails',
    categoryLabel: 'Cocktails & Spirits',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=900&q=85',
    description: 'Handcrafted signature cocktail with charred oak smoke and flamed citrus zest.',
    aspect: 'tall'
  },
  {
    id: 'g-3',
    title: 'Main Dining Room Ambience',
    category: 'interior',
    categoryLabel: 'Interiors & Atmosphere',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85',
    description: 'Dark architectural accents, warm ambient candlelight, and custom leather banquettes.',
    aspect: 'wide'
  },
  {
    id: 'g-4',
    title: 'Executive Chef Elena Vance Plating',
    category: 'chef',
    categoryLabel: 'Culinary Team',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=900&q=85',
    description: 'Chef Elena Vance applying finishing touches of black winter truffle and micro herbs.',
    aspect: 'tall'
  },
  {
    id: 'g-5',
    title: 'The Oak Private Dining Room',
    category: 'private-dining',
    categoryLabel: 'Private Dining',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=85',
    description: 'Intimate wine cellar room hosting up to 24 guests for multi-course paired dinners.',
    aspect: 'wide'
  },
  {
    id: 'g-6',
    title: 'Handcrafted Truffle Tagliolini',
    category: 'food',
    categoryLabel: 'Food & Culinary',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=85',
    description: 'Fresh bronze-die pasta rolled and cut daily in our open kitchen.',
    aspect: 'square'
  },
  {
    id: 'g-7',
    title: 'Private Banquet Celebration',
    category: 'events',
    categoryLabel: 'Events & Celebrations',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=85',
    description: 'Evening wedding reception and corporate celebration in our courtyard veranda.',
    aspect: 'wide'
  },
  {
    id: 'g-8',
    title: 'Craft Cocktail Preparation at the Bar',
    category: 'cocktails',
    categoryLabel: 'Cocktails & Spirits',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=85',
    description: 'Our mixologists crafting botanical infusions with locally gathered herbs.',
    aspect: 'tall'
  }
];

export const DEMO_TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    quote: 'Beautiful atmosphere, thoughtful service, and incredible food. The post-oak ribeye and truffle pasta were nothing short of unforgettable. A true masterclass in Austin dining.',
    author: 'Eleanor Sterling',
    role: 'Editorial Food Writer',
    occasion: 'Anniversary Dinner',
    rating: 5
  },
  {
    id: 't-2',
    quote: 'We hosted our executive annual banquet in The Oak Room. From the bespoke five-course wine pairing to the discreet, flawless service, our international guests were thoroughly blown away.',
    author: 'Marcus Chen',
    role: 'Managing Director, Tech Capital',
    occasion: 'Private Corporate Banquet',
    rating: 5
  },
  {
    id: 't-3',
    quote: 'The craft cocktail program alone justifies a visit. The Ember Old Fashioned and oysters at the marble bar are the finest start to any weekend in Austin.',
    author: 'Sophia Hawthorne',
    role: 'Austin Lifestyle & Arts Curator',
    occasion: 'Cocktail Hour & Small Plates',
    rating: 5
  }
];

export const BANQUET_SPACES: BanquetSpace[] = [
  {
    id: 'the-oak-room',
    name: 'The Oak Private Dining Room',
    capacity: 'Up to 32 Guests Seated',
    seated: 32,
    cocktail: 45,
    squareFeet: 750,
    description: 'An intimate, sound-insulated dining haven wrapped in reclaimed Texas white oak, floor-to-ceiling curated wine racks, and dedicated sommelier service.',
    features: [
      'Private Sommelier & Waitstaff',
      'Integrated 4K AV & Presentation screen',
      'Customized 3, 4, or 5-course printed menus',
      'Personalized ambient lighting and music controls'
    ],
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'the-veranda',
    name: 'The Garden Veranda & Terrace',
    capacity: 'Up to 85 Guests Seated / 120 Cocktail',
    seated: 85,
    cocktail: 120,
    squareFeet: 1600,
    description: 'A climate-controlled covered outdoor pavilion framed by heritage live oak trees, limestone fire features, and a private stone bar for receptions and weddings.',
    features: [
      'Private full-service cocktail bar',
      'Lush natural greenery with Texas limestone fire pits',
      'All-weather retractable glass walls & heaters',
      'Stage area for live acoustic trio or DJ'
    ],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'the-grand-hall',
    name: 'Full Restaurant Buyout',
    capacity: 'Up to 180 Guests Seated / 250 Cocktail',
    seated: 180,
    cocktail: 250,
    squareFeet: 3800,
    description: 'Exclusive access to our entire dining room, cocktail lounge, open kitchen observation chef counter, and outdoor veranda for premier galas and wedding celebrations.',
    features: [
      'Exclusive full-venue access',
      'Executive Chef customized live culinary stations',
      'Dual full craft cocktail bars',
      'Dedicated event director and valet team'
    ],
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=900&q=80'
  }
];

export const CATERING_SERVICES = [
  {
    id: 'weddings',
    title: 'Weddings & Rehearsals',
    subtitle: 'Unforgettable Gastronomy for Your Special Day',
    description: 'From champagne cocktail greetings with passed hors d’oeuvres to an exquisite plated multi-course dinner with sommelier wine pairings.',
    features: ['Custom couple consultation & tastings', 'Full bar service & specialty signature cocktails', 'Staffing, china, flatware & crystal stemware', 'Late-night wood-fired artisan snack stations'],
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'corporate',
    title: 'Corporate Galas & Dinners',
    subtitle: 'Polished Hospitality for Esteemed Partners',
    description: 'Elevate your firm’s brand with seamless, punctual, and discreet executive catering, boardroom luncheons, and celebratory corporate milestones.',
    features: ['Express executive lunch drop-offs', 'High-end plated dinner service', 'Dietary accommodation management', 'Full beverage package coordination'],
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'private-parties',
    title: 'Private In-Home Celebrations',
    subtitle: 'Chef-in-Residence Luxury Dining',
    description: 'Bring the Ember & Oak culinary brigade straight to your estate. We handle preparation, sommelier service, and immaculate kitchen cleanup.',
    features: ['Private chef on-site cooking', 'Live wood-charcoal yakitori & carving station', 'Table styling & floral integration', 'Bespoke menu printing'],
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'special-occasions',
    title: 'Special Milestones & Anniversaries',
    subtitle: 'Creating Lasting Memories',
    description: 'Milestone birthdays, retirement tributes, intimate engagements, and family reunions curated with personalized touches.',
    features: ['Custom dessert tables & celebratory cakes', 'Champagne towers & toast service', 'Interactive cocktail masterclasses', 'Audio-visual support options'],
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80'
  }
];

export const MENU_KITS = [
  {
    id: 'dinner-menu',
    title: 'Dinner Menu',
    subtitle: 'Full Evening A La Carte & Tasting Collection',
    pages: '4 Pages • PDF',
    updated: 'Current Season 2026',
    description: 'Includes our wood-fired steaks, handmade pastas, fresh seafood arrivals, chef signatures, and dessert selections.',
    sampleItems: ['Grilled Ribeye Steak ($36)', 'Truffle Mushroom Pasta ($28)', 'Seared Salmon ($32)', 'Wagyu Carpaccio ($19)']
  },
  {
    id: 'lunch-menu',
    title: 'Lunch Menu',
    subtitle: 'Midday Comfort & Light Seasonal Plates',
    pages: '2 Pages • PDF',
    updated: 'Monday – Friday, 11am – 3pm',
    description: 'Artisan sandwiches, fresh market salads, express two-course lunch prix fixe, and energizing zero-proof coolers.',
    sampleItems: ['Prime Steak Frites ($26)', 'Grilled Little Gem Caesar ($16)', 'Berkshire Pork Belly BLT ($18)', 'Smoked Corn Bisque ($14)']
  },
  {
    id: 'cocktail-menu',
    title: 'Cocktail & Wine Menu',
    subtitle: 'Craft Spirits, Rare Bourbons & Sommelier List',
    pages: '6 Pages • PDF',
    updated: 'Curated by Beverage Director',
    description: 'House infusions, vintage bourbons, single-estate mezcals, craft beer drafts, and 140+ international biodynamic wines.',
    sampleItems: ['The Ember Old Fashioned ($17)', 'Austin Midnight Smoke ($18)', 'Oak Botanical Spritz ($16)', 'Velvet Espresso Martini ($17)']
  },
  {
    id: 'private-events-menu',
    title: 'Private Events & Banquet Kit',
    subtitle: 'Group Packages, Floorplans & Tasting Tiers',
    pages: '8 Pages • PDF',
    updated: '2026 Event Planner Edition',
    description: 'Complete room dimensions, 3-course to 5-course package pricing, passed hors d’oeuvres tiers, and rental guidelines.',
    sampleItems: ['The Silver Oak Tier ($85/person)', 'The Reserve Oak Tier ($125/person)', 'Beverage Packages from $35/person']
  }
];
