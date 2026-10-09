// All site content lives here so it can be edited without touching layout code.
// Company text and most photos come from the Kothari Industries company profile
// (July 2025 edition). The detailed product lists and some product photos come
// from the earlier products catalogue.

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
  supportEmail: 'support@kothariindustries.net.in',
  website: 'www.kothariindustries.org',
  // Floating WhatsApp button: number in international format, digits only
  whatsapp: '919038550000',
  whatsappMessage: 'Hello Kothari Industries, I would like to enquire about your products.',
  // Short line for the header strip and footer
  certified: 'ISO 9001:2015, ISO 14001 and ISO 45001 certified',
}

// ---- Places ---------------------------------------------------------------

export const locations = [
  {
    label: 'Corporate office',
    lines: ['23B, Netaji Subhas Road', 'Security House, 1st Floor', 'Kolkata - 700001, India'],
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

export const offices = [
  {
    label: 'Rourkela, Odisha',
    lines: ['Main Road, Shiv Market', 'Rourkela - 769001, Odisha'],
    mobiles: ['+91 94370 70942'],
  },
  {
    label: 'Ahmedabad, Gujarat',
    lines: [
      'B-301, Titanium Office Complex',
      '100 FT Road, Near Sachin Tower, Anand Nagar',
      'Ahmedabad - 380015, Gujarat',
    ],
    mobiles: ['+91 86977 33808'],
  },
  {
    label: 'Lucknow, Uttar Pradesh',
    lines: [
      'C/o. Kreedum International Private Limited',
      'Krishna Plaza, Nazirabad',
      'Lucknow - 226018, Uttar Pradesh',
    ],
    mobiles: ['+91 70073 89480', '93310 17359'],
  },
  {
    label: 'Dhaka, Bangladesh',
    lines: ['C/o. S.I. International Globe Market', 'Nawabpur Road, Dhaka - 1100'],
    mobiles: ['+8800 17112 07846', '17200 04576'],
  },
]

// ---- Figures ---------------------------------------------------------------

// Years in business is worked out from the founding year, rounded down to 5.
const years = Math.floor((new Date().getFullYear() - company.founded) / 5) * 5

// The four shown on the home page
export const headlineStats = [
  { value: `${years}+`, label: 'Years of trust' },
  { value: '300+', label: 'Satisfied customers' },
  { value: '100+', label: 'Completed projects' },
  { value: '100+', label: 'Products in the range' },
]

// "A journey shaped by our people"
export const stats = [
  { value: '300+', label: 'Satisfied customers' },
  { value: '100+', label: 'Presence in India' },
  { value: '25+', label: 'Awards and accolades' },
  { value: '100+', label: 'Product range' },
  { value: '40+', label: 'Workforce size' },
  { value: '100+', label: 'Completed projects' },
  { value: '3+', label: 'Manufacturing units' },
  { value: '10+', label: 'Distribution network' },
  { value: '20+', label: 'Industries served' },
]

// ---- About -----------------------------------------------------------------

export const about = {
  headline: ['Creating strong foundations', 'for a better tomorrow.'],
  paragraphs: [
    'Established in 1955, Manilal & Brothers Group has built a strong reputation in the manufacturing sector with decades of experience and trust. Over the years the group has expanded its presence and product range to include industrial fasteners, scaffolding materials, holding down bolts, pipes, pipe fittings, valves, light construction products and construction chemicals.',
    'Kothari Industries, a part of the Manilal & Brothers Group, strengthens this legacy by contributing to the group’s growth and diversification. Guided by a commitment to quality, transparency and fair trade, the group has earned the confidence of clients across industries. With evolving practices and a focus on reliable, high-performance solutions, the journey continues driven by innovation and backed by years of expertise.',
  ],
  mission: 'To provide products of highest quality to our customers worldwide.',
  vision: 'To make an impact with the best-in-class industrial hardware products.',
}

export const values = [
  {
    name: 'Trust',
    text: 'Trust is earned through consistent actions, honesty and reliability. It forms the basis of all strong relationships within the company and with our clients.',
  },
  {
    name: 'Integrity',
    text: 'Integrity means acting with transparency and fairness. It’s about doing the right thing even when it’s not the easy choice.',
  },
  {
    name: 'Leadership',
    text: 'Leadership is demonstrated by taking initiative, being accountable and inspiring progress through clear vision and high standards.',
  },
  {
    name: 'Teamwork',
    text: 'Strong teams achieve more. By working together and supporting one another we build a collaborative and resilient culture.',
  },
  {
    name: 'Respect',
    text: 'Respect is shown by valuing each person’s ideas, experiences and contributions. It creates a workplace built on dignity and mutual understanding.',
  },
  {
    name: 'Care',
    text: 'Caring means putting people first whether it’s our employees, customers or communities. It includes a deep commitment to safety, sustainability and long-term impact.',
  },
]

export const leaders = [
  {
    name: 'Shri. Mani Bhai Kothari',
    role: 'Founder & Chairman of Manilal & Brothers Group',
    photo: 'photos/mani-bhai-kothari.webp',
    headline: ['Driven by excellence,', 'defined by quality.'],
    paragraphs: [
      'Kothari Industries, a part of the Manilal and Brothers Group, stands for quality, trust and innovation. We design and deliver high-performance industrial hardware that supports the creation of strong and lasting structures across industries.',
      'Driven by fairness and commitment, our work culture empowers everyone we work with. We focus on digital advancements to enhance product design and manufacturing efficiency. Our strategy includes strengthening supply chain systems and building strong distributor partnerships. With every step we aim to create real value and make a lasting impact locally and globally.',
    ],
  },
  {
    name: 'Mr. Arun Kothari',
    role: 'CEO',
    photo: 'photos/arun-kothari.webp',
    headline: ['Pioneering excellence', 'with every step we take.'],
    paragraphs: [
      'Joining forces with Kothari Industries is a moment of pride. As a forward-thinking group with a deep understanding of the local economy, Kothari Industries plays a key role in the nation’s progress through a range of innovative products. Driven by agility and a commitment to improvement, we aim to meet evolving market needs while ensuring top standards of quality and customer satisfaction.',
    ],
  },
  {
    name: 'Mr. Kanti Lal Kothari',
    role: 'Director',
    photo: 'photos/kanti-lal-kothari.webp',
    square: true,
    headline: ['Striving for excellence,', 'building a legacy of quality.'],
    paragraphs: [
      'Kothari Industries, a part of the Manilal and Brothers Group, is guided by the core values of quality, trust and innovation. We specialize in high-performance industrial hardware solutions that help industries build strong, reliable and lasting structures. Our approach is rooted in honesty, fairness and a genuine commitment to the growth and well-being of everyone we work with, from clients and partners to employees and communities.',
    ],
  },
]

export const team = [
  { name: 'Subrata Swarnakar', role: 'General Manager (Marketing)' },
  { name: 'Umang Mehta', role: 'Manager (Commercial)' },
  { name: 'Dipen S Sheth', role: 'Senior Manager (Trade Sales)' },
  { name: 'Priyanka Ghosh', role: 'Manager (Marketing)' },
  { name: 'Shauvik Rana', role: 'Head - Quality Control' },
  { name: 'Sanjay Kumar Jha', role: 'Dy. Manager (Works)' },
  { name: 'Sangita Rao Biswas', role: 'Dy. Manager (Accounts)' },
  { name: 'Titli Sarkar Ghosal', role: 'Sr. Executive (HR & Admin)' },
].map((p) => ({ ...p, photo: `team/${slug(p.name)}.webp` }))

// The journey, 1955 to today. Each entry can hold several events.
export const timeline = [
  { year: '1955', events: ['Founded in 1955 (Manilal & Brothers Group).'] },
  { year: '1956', events: ['Started Kolkata branch liaison office.'] },
  { year: '1983', events: ['Started project supplies at Angul, Orissa.'] },
  { year: '1986', events: ['Electrical Divn Light Centre at Rourkela.'] },
  { year: '1990', events: ['Hirakud, Bolani Ore mines major order execution successfully.'] },
  { year: '1993', events: ['Launch of Kolkata office (started for marketing).'] },
  { year: '1997', events: ['Kolkata office records highest business development.'] },
  { year: '2000', events: ['Mecon’s biggest ever single order execution for Chennai.'] },
  { year: '2005', events: ['Incorporation of Kothari Industries in Kolkata.'] },
  { year: '2007', events: ['Manufacturing in small quantities started at Kolkata.'] },
  {
    year: '2008',
    events: [
      'Bagged single largest order for foundation bolts by JMC Projects for Vedanta Jharsuguda.',
    ],
  },
  {
    year: '2009-2010',
    events: [
      'Main corporate office launched in N.S. Road, Kolkata for nationwide supply operations.',
    ],
  },
  { year: '2011', events: ['Another set up for manufacturing unit tie ups.'] },
  {
    year: '2012-2015',
    events: [
      'Successfully executed major projects at TPPR-DVC Raghunathpur, Kochi refineries etc.',
    ],
  },
  { year: '2014', events: ['Commencement of overseas business operations for exporting purposes.'] },
  { year: '2016', events: ['Opening of retail showroom at N.S. Road, Kolkata 1.'] },
  { year: '2019', events: ['Winning Fischer TrailBlazer Awards at Goa, for best performance.'] },
  {
    year: '2019-2020',
    events: ['Nal Jal Yojana of water tank structures supplied in entire Bihar.'],
  },
  {
    year: '2020',
    events: [
      'Awarded with Times Business Award 2020. Leading best quality engineering structures & scaffoldings.',
    ],
  },
  {
    year: '2021',
    events: [
      'Appointed as authorised channel partner of CICO Technologies (for admixtures & waterproofing solutions).',
    ],
  },
  {
    year: '2022',
    events: [
      'Winner of Top 50 Leaders of India Award at New Delhi by Smt. Rama Devi (MP & Present Lok Sabha Speaker) for Best Company of the Year.',
      'Recipient of Trade Excellence Award - 2022 for Best Trader of District Award by CWBTA.',
      'Appointed as authorised channel partner of STP Ltd (Berger Group) & coal tar products, admixtures, grouting materials, etc.',
    ],
  },
  {
    year: '2023',
    events: [
      'Recipient of TrailBlazer Award Best Dealer (Top-22) in India & Fischer building material, anchor fasteners.',
      'Recipient of Best Distributor Awards 2022 - 2023 by Supreme Industries, Eastern India.',
      'Appointed as channel partner of Ashirvad Pipes Pvt. Ltd. & govt. exclusive projects.',
    ],
  },
  {
    year: '2024-2025',
    events: [
      'Opening of Ahmedabad (Gujarat) and Lucknow (UP) branch office.',
      'Recipient of Fischer’s best distributor in entire Eastern India.',
      'Recipient of Excellence in Productivity Award 2024 from ASSOCHAM.',
      'Recipient of The Legend of Bengal Award by All India Human Rights.',
      'Execution of heaviest foundation bolt of 110 mm x 4000 mm long, approx 500 kg of each bolt, for refineries at Assam.',
      'Best Distributor of Supreme (Dura) in Eastern India for 2023-2024.',
      'Launch of marketing division for entire range of electrical solutions.',
    ],
  },
]

export const vision2030 = {
  headline: ['Fueled by vision,', 'driven by purpose.'],
  text: 'At Kothari Industries, we are committed to delivering reliable, high-performance industrial components that power India’s infrastructure evolution. As part of the Manilal & Brothers Group we uphold a legacy built on trust, adaptability and a relentless pursuit of excellence. Each product we create embodies our dedication to driving progress in industrial and construction sectors with efficiency, integrity and innovation. We don’t just serve industries, we strengthen ecosystems, empower partnerships and drive momentum toward a more resilient tomorrow.',
  objectives: [
    'Strengthen distribution network and dominate the domestic market.',
    'Build brand recognition with premium products and engagement.',
    'Expand exports to high-income countries, including retail partnerships.',
    'Boost efficiency via digital transformation and new manufacturing plant.',
  ],
  targets: [
    { value: '100%', label: 'Product expansion', text: 'New lines to meet growing demand by 2030' },
    { value: '6', label: 'Distribution hubs', text: 'For faster, wider market access' },
    { value: '10+', label: 'New markets', text: 'Expand reach across domestic regions' },
    { value: '25%', label: 'Revenue growth', text: 'Achieve 25% CAGR in revenue annually' },
  ],
}

export const oneTeam = {
  words: ['Voice', 'Team', 'Dream'],
  text: 'When voices unite, teams align and dreams ignite, extraordinary becomes possible. At Kothari Industries, we believe that shared vision fuels unmatched excellence. Driven by One Voice, One Team, One Dream we move forward with purpose, passion and performance.',
}

export const csr = {
  headline: ['Rooted in responsibility,', 'growing with communities.'],
  paragraphs: [
    'At Kothari Industries, we measure growth not just by profits but by the positive impact we create. Our Corporate Social Responsibility is founded on the belief that businesses succeed when communities thrive. We are committed to initiatives that address the most pressing needs, from fostering access to quality education to preserving our cultural heritage, empowering livelihoods and promoting environmental sustainability.',
    'We collaborate closely with local communities, listening to their needs and aligning our efforts to drive meaningful, sustainable change. Whether it’s helping children stay in school, preserving historical landmarks, creating job opportunities or protecting natural resources, we are dedicated to making a lasting impact.',
  ],
  initiatives: [
    {
      name: 'Tree Plantation Drive',
      image: 'csr/tree-plantation-drive.webp',
      text: 'We conducted a tree plantation drive to celebrate World Environment Day, encouraging sustainability and environmental awareness.',
    },
    {
      name: 'Rural Eye Care Camps',
      image: 'csr/rural-eye-care-camps.webp',
      text: 'We conduct eye care camps in underserved regions, providing essential check-ups, early detection and treatment access to improve vision and quality of life.',
    },
    {
      name: 'Rural Blood Donation Camps',
      image: 'csr/rural-blood-donation-camps.webp',
      text: 'We arrange blood donation camps in rural areas to support healthcare needs, raise awareness and ensure timely medical aid through a stronger, healthier community.',
    },
  ],
}

// ---- Manufacturing product range -------------------------------------------

// An item is a name, or [name, photo file name] when the two differ.
const item = (folder) => (entry) => {
  const [name, file] = Array.isArray(entry) ? entry : [entry, slug(entry.replace(/\//g, ' '))]
  return { name, image: `${folder}/${file}.webp` }
}

const range = (id, name, blurb, items, cover) => {
  const list = items.map(item('products'))
  return { id, name, blurb, items: list, cover: cover ?? list[0].image }
}

export const categories = [
  range(
    'foundation',
    'Foundation and structural',
    'Holding down bolts, bolts and nuts, insert plates, fabrication and joint materials.',
    [
      'Foundation Bolts',
      ['Bolts & Nuts (MS, HT, HSFG)', 'bolts-and-nuts'],
      'Insert Plate',
      'Structural Fabrications',
      'Fabrication',
      'PVC Water Stoppers',
      'Joint Filler Boards',
    ],
  ),
  range(
    'scaffolding',
    'Shuttering and scaffolding',
    'The entire range: telescopic steel props, cuplock and H-frame systems, accessories and fittings.',
    [
      'Telescopic Steel Props',
      'Scaffolding Cuplock Systems',
      'Cuplock System Fittings',
      'H-Frame Scaffolding System',
      'Scaffolding Accessories',
      'Scaffolding Fittings',
    ],
  ),
  range(
    'anchors',
    'Anchor bolts and fixings',
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
    'products/anchor-bolts.webp',
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

// ---- Authorized dealerships ------------------------------------------------

const brand = (name, items) => ({
  id: slug(name),
  name,
  banner: `dealers/${slug(name)}.webp`,
  items: items.map(item(`brands/${slug(name)}`)),
})

// Channel partners with a photo for each product line
export const brands = [
  brand('Fischer', [
    'Epoxy Injection Mortar',
    'Chemical Fixing Threaded Rod',
    'Anchor & Fasteners',
    'Dispenser Gun',
    'MEP Product Range',
    'Passive Fire Stops',
  ]),
  brand('Zydex', [
    'Seepage Proofing',
    'Leakage Proofing',
    'Cold Joint Solution',
    'Tile & Stone Bonding',
    'Paints',
    'Waterproofing',
  ]),
  brand('Supreme', [
    'Expansion Joint Boards',
    'Dura Rod',
    'Floor Protector',
    'Debonding Strips',
    'Insulation Flex Sheet',
    'Reflector Sheet',
  ]),
]

// Dealerships and supply lines shown as a photo strip with a list
export const supplyLines = [
  {
    id: 'stp-limited',
    name: 'STP Limited',
    partner: true,
    image: 'dealers/stp-limited.webp',
    items: [
      'Water Proofing',
      'APP Membrane',
      'Expansion Joint Board',
      'Admixture',
      'Polysulphide Sealant',
      'Joint Filler Board',
    ],
  },
  {
    id: 'pipe-fittings',
    name: 'Pipe fittings',
    image: 'dealers/pipe-fittings.webp',
    text: 'All kinds of SS pipes & fittings, flanges, etc.',
  },
  {
    id: 'pipes',
    name: 'Pipes',
    image: 'dealers/pipes.webp',
    text: 'All kinds of MS ERW / seamless / flanges, etc.',
  },
  {
    id: 'electrical-goods',
    name: 'Electrical goods',
    image: 'dealers/electrical-goods.webp',
    text: 'All kinds of switchgears, MCCBs, etc.',
  },
  {
    id: 'electrical-cables',
    name: 'Electrical cables',
    image: 'dealers/electrical-cables.webp',
    text: 'All kinds of cables & wires, etc.',
  },
]

// "Our channel partners", in brochure order
export const channelPartners = [
  { id: 'fischer', name: 'Fischer' },
  { id: 'zydex', name: 'Zydex' },
  { id: 'supreme', name: 'Supreme' },
  { id: 'stp-limited', name: 'STP Limited' },
]

// ---- Clients, industries, projects ------------------------------------------

export const clients = [
  'Larsen & Toubro',
  'Bridge & Roof Co. (India) Ltd.',
  'Paharpur',
  'Numaligarh Refinery Limited',
  'NCC',
  'SAIL',
  'Shapoorji Pallonji',
  'BHEL',
  'UltraTech Cement',
  'Jindal Stainless',
  'DVC',
  'Petron Engineering',
  'Tuaman',
  'Tata',
  'Adani Power',
  'Technip Energies',
  'thyssenkrupp',
  'Haldia Petrochemicals Ltd',
  'Merlin',
  'Patel',
  'Reliance Industries Limited',
  'ITD Cem',
]

export const testimonials = [
  {
    from: 'Bridge & Roof Co. (India) Ltd.',
    text: 'Kothari Industries Serving to Us at Various Project Sites all over India more than 40 Years. Their Products, Services & Commitment are always Consistent.',
  },
  {
    from: 'Larsen & Toubro Ltd.',
    text: 'We are happy to share that Kothari Industries has served us for many years at several L&T Projects on a Pan India basis. We are satisfied with their regular supplies for timely supplies and quality products and competitive pricing.',
  },
  {
    from: 'Ashoka Buildcon Ltd.',
    text: 'Kothari Industries Kolkata, have been supplying various products to our various sites regularly and we have found their supplies in time and hassle free for quality, timely supplies and reasonable prices. They have been associated with us for many years as a regular vendor to Ashoka Buildcon Ltd.',
  },
]

export const industries = [
  'Real Estate & Construction',
  'Infrastructure Projects',
  'Chemical Industries',
  'Power Plants',
  'Cement Industries',
  'Steel Plants',
  'Water Resources',
  'Refineries',
  'Railway Industries',
  'Aviation Industries',
]

export const projects = [
  {
    name: 'Barauni Refinery',
    supplied: 'Foundation bolts, expansion joint filler board, anchor fasteners.',
  },
  {
    name: 'BPCL Kochi & Panipat Refinery',
    file: 'bpcl-kochi-panipat-refinery',
    supplied: 'KSS Petron: foundation bolt and scaffolding, MS flat, angle & channel.',
  },
  {
    name: 'Numaligarh Refinery',
    supplied: 'Foundation bolts, expansion joint filler board, anchor fasteners.',
  },
  { name: 'Railways Projects', supplied: 'Nuts & bolts, fasteners.' },
  { name: 'Maa Flyover Kolkata', supplied: 'Foundation bolt for all the pillars.' },
  {
    name: 'Rourkela Steel Plant',
    supplied:
      'Nail chilling scraps / various fitting / nails, MS pipes / foundation bolt / scaffolding / PVC water stops.',
  },
  {
    name: 'Adani Power Godda',
    supplied:
      'MS pipes / foundation bolt / scaffolding / PVC water stops, expansion joint board, etc.',
  },
  {
    name: 'Durgapur Expressway Project',
    file: 'durgapur-expressway',
    supplied: 'Expansion joint filler board, structural materials and many more.',
  },
].map((p) => ({ ...p, image: `projects/${p.file ?? slug(p.name)}.webp` }))

export const nalJal = {
  headline: ['Nal Jal Yojana,', 'Jal Jeevan Mission.'],
  scope: 'Manufacture, supply and installation of water tank structures in Assam, Bihar and Jharkhand',
  stats: [
    { value: '5,000+', label: 'Water tanks across Bihar' },
    { value: '2,000+', label: 'Water tanks across Jharkhand' },
  ],
  paragraphs: [
    'Launched on August 15, 2019 by the Government of India under Prime Minister Shri Narendra Modi, the Nal Jal Yojana aims to provide clean drinking water to rural households across the country.',
    'Kothari Industries, a leading infrastructure development company, played a key role in the project by constructing water tank structures and supplying essential materials and equipment. As both contractor and supplier the company supported the safe storage and effective distribution of drinking water in rural areas.',
    'With its expertise and resources Kothari Industries has contributed significantly to the success of the scheme, helping it move closer to the goal of reaching millions of rural homes. The company is proud to be associated with this noble initiative and remains committed to supporting rural development in India.',
  ],
  photos: ['projects/water-tank-1.webp', 'projects/water-tank-2.webp', 'projects/water-tank-3.webp'],
}

// ---- Quality ---------------------------------------------------------------

export const quality = {
  headline: ['Focused on delivering the best', 'to meet your needs.'],
  paragraphs: [
    'Kothari Industries is certified with ISO 9001:2015 (Quality Management), ISO 14001 (Environmental Management), ISO 45001 (Occupational Health & Safety) and CE marking, reflecting our commitment to global standards.',
    'We follow a strict no-compromise policy on quality. Every product is thoroughly checked from design to manufacturing and after-sales service. Our advanced testing systems ensure strength, reliability and long-lasting performance meeting international standards. Quality assurance is at the core of what we do. With trusted certifications and customer confidence we deliver products that excel in safety, durability and performance.',
  ],
  certifications: [
    { name: 'ISO 9001:2015', text: 'Quality Management' },
    { name: 'ISO 14001', text: 'Environmental Management' },
    { name: 'ISO 45001', text: 'Occupational Health & Safety' },
    { name: 'CE', text: 'CE marking' },
  ],
}

export const qualityPlan = {
  headline: ['Engineered for trust,', 'backed by standards.'],
  paragraphs: [
    'At Kothari Industries quality is not just a standard, it’s a commitment embedded in every stage of our operations. We integrate advanced technology, skilled expertise and globally recognized systems to ensure that each product meets the highest benchmarks of reliability, safety and performance.',
    'Our unwavering focus on continuous improvement drives us to maintain these standards at every step. This dedication empowers us to deliver excellence that our clients can trust. Precision, passion and purpose guide everything we create. Driven by innovation, we consistently raise the bar to exceed global expectations.',
  ],
  points: [
    {
      name: 'Standardized Testing Protocols',
      text: 'Products undergo testing based on well-defined parameters, aligned with National and International standards ensuring consistency and compliance.',
    },
    {
      name: 'Traceable Certification (MTCs)',
      text: 'Each batch is dispatched with a Manufacturer’s Test Certificate (MTC) ensuring verified compliance and complete traceability.',
    },
  ],
}

export const whyUs = {
  headline: ['Unwavering commitment to', 'quality & expertise.'],
  paragraphs: [
    'At Kothari Industries (Manilal & Brothers Group), excellence is more than a goal, it’s our way of working. With a strong focus on innovation and superior industrial hardware we deliver products that ensure performance, durability and reliability.',
    'Clients trust us for our timely deliveries, attention to detail and unwavering commitment to quality. Backed by a legacy built on trust and professionalism, we consistently meet expectations with precision and care. Here your needs come first and excellence is delivered every time. Driven by purpose, powered by passion, we shape progress one solution at a time.',
  ],
  points: [
    'Precision engineering',
    'On-time delivery',
    'Zero compromise',
    'Lasting strength',
    'Better pricing',
  ],
}

// Newest first. "kind" tells apart a trophy and a certificate for the same award.
export const awards = [
  { name: 'Fischer Trailblazer Award', year: '2024', image: 'fischer-trailblazer-2024' },
  { name: 'Fischer Arohan Partners', year: '2024', image: 'fischer-arohan-2024' },
  {
    name: 'ASSOCHAM Business Excellence Awards',
    year: '2024',
    image: 'assocham-business-excellence-2024',
  },
  { name: 'The Legend of Bengal Award', year: '2024', image: 'legend-of-bengal-2024' },
  {
    name: 'Supreme Best Distributor for Dura',
    year: '2022-2023',
    kind: 'Trophy',
    image: 'supreme-best-distributor-dura-trophy',
  },
  {
    name: 'Supreme Best Distributor for Dura',
    year: '2022-2023',
    kind: 'Certificate',
    image: 'supreme-best-distributor-dura-certificate',
  },
  { name: 'Fischer Trailblazer Award', year: '2022', image: 'fischer-trailblazer-2022' },
  {
    name: 'CWBTA Trade Excellence Award',
    year: '2022',
    kind: 'Trophy',
    image: 'cwbta-trade-excellence-2022-trophy',
  },
  {
    name: 'CWBTA Trade Excellence Award',
    year: '2022',
    kind: 'Certificate',
    image: 'cwbta-trade-excellence-2022-certificate',
  },
  { name: 'Leaders Awards', year: '2022', kind: 'Trophy', image: 'leaders-awards-2022-trophy' },
  {
    name: 'Leaders Awards',
    year: '2022',
    kind: 'Certificate',
    image: 'leaders-awards-2022-certificate',
  },
  { name: 'Certificate of Commitment', year: '', image: 'certificate-of-commitment' },
  { name: '11th CETA Premiere League (Indoor)', year: '2021', image: 'ceta-premiere-league-2021' },
  { name: 'Times Business Award', year: '2020', image: 'times-business-award-2020' },
  { name: 'Fischer Trailblazers Award', year: '2019', image: 'fischer-trailblazers-2019' },
  { name: 'CETA Life Member', year: '2018', image: 'ceta-life-member-2018' },
].map((a) => ({ ...a, image: `awards/${a.image}.webp` }))

export const memberships = [
  'CWBTA',
  'The Calcutta Electric Traders Association',
  'FAIVM',
  'Calcutta Chamber of Trade',
  'ICC',
  'BNI',
  'ASSOCHAM',
  'RATA',
]

export const nav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/brands', label: 'Brands' },
  { to: '/projects', label: 'Projects' },
  { to: '/quality', label: 'Quality' },
  { to: '/contact', label: 'Contact' },
]
