
interface Region {
  id: string;
  name: string;
  description: string;
  issues: string[];
  initiatives: string[];
  coordinates: { top: string; left: string };
}

export const regions: Region[] = [
  {
    id: 'north-america',
    name: 'North America',
    description: 'A diverse region with a wide range of social and environmental challenges.',
    issues: ['Climate Change', 'Healthcare Access', 'Housing Inequality', 'Racial Justice', 'Immigration'],
    initiatives: [
      'Green New Deal Coalition',
      'Universal Healthcare Campaign',
      'Affordable Housing Initiative',
      'Racial Equity Network',
      'Immigrant Rights Project'
    ],
    coordinates: { top: '30%', left: '20%' },
  },
  {
    id: 'south-america',
    name: 'South America',
    description: 'Rich in natural resources and cultural heritage, facing environmental and social challenges.',
    issues: ['Deforestation', 'Indigenous Rights', 'Economic Inequality', 'Political Corruption', 'Water Access'],
    initiatives: [
      'Amazon Conservation Alliance',
      'Indigenous Rights Collective',
      'Economic Justice Network',
      'Anti-Corruption Coalition',
      'Clean Water Projects'
    ],
    coordinates: { top: '60%', left: '30%' },
  },
  {
    id: 'europe',
    name: 'Europe',
    description: 'A complex political landscape with diverse approaches to social and environmental issues.',
    issues: ['Migration Crisis', 'Climate Action', 'Digital Rights', 'Social Integration', 'Energy Transition'],
    initiatives: [
      'Refugee Support Network',
      'Climate Pact Alliance',
      'Digital Rights Observatory',
      'Social Integration Programs',
      'Renewable Energy Coalition'
    ],
    coordinates: { top: '25%', left: '48%' },
  },
  {
    id: 'africa',
    name: 'Africa',
    description: 'A continent of immense diversity facing unique development and environmental challenges.',
    issues: ['Water Scarcity', 'Education Access', 'Healthcare Infrastructure', 'Food Security', 'Conservation'],
    initiatives: [
      'Water Access Projects',
      'Education for All Initiative',
      'Healthcare Systems Strengthening',
      'Sustainable Agriculture Programs',
      'Wildlife Conservation Efforts'
    ],
    coordinates: { top: '48%', left: '50%' },
  },
  {
    id: 'asia',
    name: 'Asia',
    description: 'The largest continent with diverse cultures and rapid development alongside social challenges.',
    issues: ['Climate Resilience', 'Labor Rights', 'Gender Equality', 'Urban Development', 'Air Pollution'],
    initiatives: [
      'Climate Adaptation Network',
      'Fair Labor Coalition',
      'Women\'s Empowerment Alliance',
      'Sustainable Cities Initiative',
      'Clean Air Projects'
    ],
    coordinates: { top: '35%', left: '70%' },
  },
  {
    id: 'oceania',
    name: 'Oceania',
    description: 'Island nations facing unique challenges related to climate change and conservation.',
    issues: ['Rising Sea Levels', 'Indigenous Rights', 'Conservation', 'Climate Resilience', 'Sustainable Tourism'],
    initiatives: [
      'Climate Change Adaptation',
      'Indigenous Cultural Preservation',
      'Marine Conservation Projects',
      'Disaster Preparedness Network',
      'Eco-Tourism Standards'
    ],
    coordinates: { top: '65%', left: '80%' },
  },
];

export default regions;
