// All site content lives here so it can be edited without touching layout code.
// Text is taken from the Kothari Industries products catalogue.

const BASE = import.meta.env.BASE_URL
export const img = (path) => `${BASE}images/${path}`

const slug = (s) =>
  s
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

export const company = {
  name: 'Kothari Industries',
  group: 'Manilal & Brothers Group',
  founded: 1955,
  tagline: 'Products that last.',
  helpline: '+91 90385 50000',
  helplineHref: 'tel:+919038550000',
  phones: ['033 4024 5757', '033 4007 5757', '033 4064 3385'],
  email: 'kothari.mkt@gmail.com',
  website: 'www.kothariindustries.org',
  iso: 'ISO 9001:2015',
}

export const locations = [
  {
    label: 'Corporate office',
    lines: ['23B, Netaji Subhas Road', 'Security House, 1st Floor', 'Kolkata - 700 001'],
    map: 'Security House, 23B Netaji Subhas Road, Kolkata 700001',
  },
  {
    label: 'Showroom',
    lines: ['33/1, Netaji Subhas Road', 'Marshal House, Ground Floor', 'Kolkata - 700 001'],
    map: 'Marshal House, 33/1 Netaji Subhas Road, Kolkata 700001',
  },
  { label: 'Unit 1', lines: ['Near Tikiapara Railway Station', 'Howrah'] },
  { label: 'Unit 2', lines: ['Benaras Road', 'Howrah'] },
  { label: 'Unit 3', lines: ['Chamrail', 'Howrah'] },
]

// Years in business is worked out from the founding year, rounded down to 5.
const years = new Date().getFullYear() - company.founded
export const stats = [
  { value: '50+', label: 'Products in the range' },
  { value: `${Math.floor(years / 5) * 5}+`, label: 'Years of experience' },
  { value: '10+', label: 'Awards and accolades' },
  { value: '200+', label: 'Satisfied customers' },
]

export const about = {
  headline: ['The way we build', 'ingenious structures.'],
  paragraphs: [
    'Founded in 1955, Manilal & Brothers Group represents decades of dedication, expertise and leadership in the manufacturing domain of Industrial Fasteners, Scaffolding Materials, Holding Down Bolts and more. We also deal in Pipes (ERW & Seamless), Pipe Fittings, Valves and Light Construction Products.',
    'Our wide array of products has enabled us to earn trust in the market. We have a ‘no-compromise’ approach when it comes to quality of the products, making us the leading name in the market as we generate value across different industries. The relationship we have with the customers is based on complete transparency, fair trade and guarantee of quality. We are committed towards continuous innovation and improvement.',
  ],
  mission: 'To provide products of highest quality to our customers worldwide.',
  vision: 'To make an impact with the best-in-class industrial hardware products.',
  valuesIntro:
    'The company and its people represent each of these values through what we do, say and deliver.',
  values: ['Trust', 'Integrity', 'Teamwork', 'Leadership'],
}

export const leaders = [
  {
    name: 'Shri. Mani Bhai Kothari',
    role: 'Founder & Chairman of Manilal & Brothers Group',
    photo: 'photos/mani-bhai-kothari.webp',
    headline: ['The legacy towards', 'quality and excellence.'],
    quote:
      'We are committed towards being an integral part of the local business ecosystem while delivering products that impact different industries positively.',
    paragraphs: [
      'Welcome to Kothari Industries (Manilal and Brothers Group). The company represents an encompassment of the group’s belief system based on three major elements: quality, trust, and innovation. Since the inception, we have aimed and succeeded in building high-performance industrial hardware products. Through our wide range of products, we enable different industries to build and create enduring and innovative structures.',
      'The group’s work philosophy is rooted in fairness and devotion to the upliftment of people we are associated with. We walk the talk and that reflects in all the interactions and exchanges with our customers, stakeholders and employees.',
      'We have paved the path for future with an eye for digital advancements in product design and manufacturing. Similarly, we have plans to further strengthen our already well-orchestrated supply chain network and improve our exchanges with the distributors. Through our products we seek to continuously create value and impact locally and globally.',
    ],
  },
  {
    name: 'Mr. Arun Kothari',
    role: 'CEO of Kothari Industries',
    photo: 'photos/arun-kothari.webp',
    headline: ['Walking the path', 'towards excellence.'],
    quote:
      'Kothari Industries is a group of passionate professionals who aspire to make a difference while designing and manufacturing the products of tomorrow.',
    paragraphs: [
      'A warm welcome to Kothari Industries. It gives me immense pleasure and pride to be a part of this visionary group that understands the pulse of local economy and serves this country through a wide array of products.',
      'For a world that is moving and growing rapidly, being agile and inventive is a necessity. At Kothari Industries, we embrace this necessity as an opportunity. We are continuously working towards improving the quality of our products to make sure that our customers get the best. By encouraging out-of-the-box thinking and tenacity at workplace, we make sure that our employees (both on shop floor and top floor) feel inspired to put their best foot forward.',
      'Through our values and virtues, the group company continues to be recognized for its integrity and we look forward to carry on this legacy into the future.',
    ],
  },
]

// ---- Manufacturing product range (catalogue pages 05-09) -------------------

const range = (id, name, blurb, items) => ({
  id,
  name,
  blurb,
  items: items.map((n) => ({ name: n, image: `products/${slug(n.replace(/\//g, ' '))}.webp` })),
})

export const categories = [
  range(
    'foundation',
    'Foundation and structural',
    'Holding down bolts, bolts and nuts, fabrication and joint materials.',
    [
      'Foundation Bolts',
      'Fabrication',
      'PVC Water Stops',
      'Joint Board',
      'Bolts and Nuts',
      'Structural Fabrications',
    ],
  ),
  range(
    'scaffolding',
    'Scaffolding',
    'Cuplock and H-frame systems, props, accessories and fittings.',
    [
      'Scaffolding Accessories',
      'Telescopic Steel Props',
      'Scaffolding Cuplock Systems',
      'Cuplock System Fittings',
      'H-Frame Scaffolding System',
      'Scaffolding Fittings',
    ],
  ),
  range(
    'anchors',
    'Anchors and fixings',
    'Mechanical and chemical anchors for concrete and masonry.',
    [
      'Wedge Anchors / Single Ring',
      'Hit Anchors / Pin Type Anchors',
      'Drop In Anchor',
      'Chemical Anchor & Studs',
      'Heavy Duty / Rawl Bolt',
      'Eye Hook Bolt with Rawl',
      'Nylon Fixing Anchor',
      'Double Ring',
      'Bolt Anchor',
      'Hilti Chemical',
      'Hilti Anchors',
      'Hilti Capsule Chemical',
    ],
  ),
  range('clamps', 'Clamps and screws', 'Cladding clamps, pipe clamps, screws and rack bolts.', [
    'Marble Clamp',
    'Universal Clamp',
    'Saddle Clamp',
    'Gypsum Screw',
    'Self Drilling Screw & Caps',
    'Rack Bolt',
  ]),
]

// ---- Authorised dealerships (catalogue pages 11-19) ------------------------

const brand = (name, items) => ({
  id: slug(name),
  name,
  items: items.map((n) => ({
    name: n,
    image: `brands/${slug(name)}/${slug(n.replace(/\//g, ' '))}.webp`,
  })),
})

export const brands = [
  brand('Fischer', [
    'Epoxy Injection Mortar',
    'Chemical Fixing Threaded Rod',
    'Anchor & Fasteners',
    'Dispenser Gun',
    'MEP Product Range',
    'Passive Fire Stops',
  ]),
  brand('Supreme', [
    'Expansion Joint Boards',
    'Dura Rod',
    'Floor Protector',
    'Debonding Strips',
    'Insulation Flex Sheet',
    'Reflector Sheet',
  ]),
  brand('Greaves', [
    'Concrete Groove Cutter',
    'Power Trowel',
    'Forward Plate Compactor',
    'Reversible Plate Compactor',
    'Walk Behind Rollers',
    'Ride On Rollers',
  ]),
  brand('Skipper', [
    'HDPE Pipes',
    'PVC Pipes',
    'Lighting Pole',
    'PVC Fittings',
    'UPVC Pipes and Fittings',
    'CPVC Pipes and Fittings',
  ]),
  brand('Bosch', [
    'Drills & Screwdrivers',
    'Cordless Tools',
    'Rotary Hammers',
    'Concrete Vibrators',
    'Angle Grinders',
    'Benchtop Tools & Benches',
  ]),
  brand('CICO', [
    'Waterproofing',
    'Admixture',
    'Repair',
    'Bonding Material',
    'Underground / Tunnel',
    'Epoxy Compound and Mortar',
  ]),
  brand('Zydex', [
    'Seepage Proofing',
    'Leakage Proofing',
    'Cold Joint Solution',
    'Tile & Stone Bonding',
    'Paints',
    'Waterproofing',
  ]),
  brand('Husqvarna', [
    'Power Cutters',
    'Drill Motors',
    'Floor Saws',
    'Floor Grinders',
    'Tile Saws',
    'Wire Saws',
  ]),
]

export const clients = [
  'Larsen & Toubro',
  'Bridge & Roof Co. (India) Ltd.',
  'BHEL',
  'UltraTech Cement',
  'Fans Asia Pvt. Ltd.',
  'MECON',
  'Paharpur',
  'DVC',
  'HCC',
  'Tata',
  'Shapoorji Pallonji',
  'FLSmidth',
  'NCC',
  'SAIL',
  'McNally Bharat',
  'ABB',
  'Jindal Stainless',
  'Adani Power',
  'JMC Projects (India) Ltd.',
  'Petron Engineering',
]

export const quality = {
  headline: ['Ensuring that', 'you get the best.'],
  paragraphs: [
    'Since the inception, Kothari Industries has held the record for its no-compromise approach towards quality of the products. From design to manufacturing and after-market, our end-to-end product lifecycle is fortified with quality checks at every stage.',
    'An ISO 9001:2015 certified company, the company’s products are rigorously tested for built standards, performance and endurance. Our factories are equipped with testing mechanisms to ensure that the products that reach our customers are that of grade and caliber.',
    'We take Quality Assurance practices just as seriously as we take our manufacturing processes. Complete scrutiny and vigilance are the way of working in our business model. Our continued reputation for quality and excellence is a testimony to our commitment towards best-in-class standards.',
  ],
}

export const awards = [
  { name: 'CETA Life Member', year: 2018, image: 'awards/ceta-life-member-2018.webp' },
  { name: 'Fischer Trailblazers Award', year: 2019, image: 'awards/fischer-trailblazers-2019.webp' },
  { name: 'Times Business Award', year: 2020, image: 'awards/times-business-award-2020.webp' },
  {
    name: '11th CETA Premiere League (Indoor)',
    year: 2021,
    image: 'awards/ceta-premiere-league-2021.webp',
  },
]

export const nav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/brands', label: 'Brands' },
  { to: '/quality', label: 'Quality' },
  { to: '/contact', label: 'Contact' },
]
