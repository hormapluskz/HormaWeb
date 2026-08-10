import {
  BrainIcon,
  DnaIcon,
  ZapIcon,
  UtensilsIcon,
  HeartIcon,
  ShieldIcon,
  FlameIcon,
  DropletsIcon,
  ActivityIcon,
  BeakerIcon,
  UsersIcon,
  ThermometerIcon,
  SkullIcon,
} from '../icons/Icons';

export const HERO_WORDS = [
  'Sex Hormones',
  'Metabolic Health',
  'Heart Health',
  'Liver Health',
  'Cancer Risk',
  'Weight Loss',
];

export const CORE_PANELS = [
  { slug: 'baseline', label: 'Baseline', suffix: '101' },
  { slug: 'advanced', label: 'Advanced', suffix: '+34' },
  { slug: 'retest', label: 'Retest', suffix: '64' },
];

export const ADDONS = [
  "Women's core hormones",
  'Organic acids test',
  'Organ age panel',
  "Men's core hormones",
  'Weight and appetite hormones',
  'Vitamin levels',
  'Thyroid antibodies',
  'Respiratory allergy panel',
  'Prostate screening (PSA)',
  'Cholesterol damage',
  'Nutrition panel',
  'Mycotoxins',
  'Heavy metals',
  'Mineral levels',
  'Methylation panel',
  'Lipoprotein (a)',
  'Insulin and blood sugar',
  'Fertility planning',
  "Extended women's health panel",
  'Extended metabolic health panel',
  "Extended men's health panel",
  'Extended heart health panel',
  'Autoimmune health panel',
  'Environmental toxins',
  'Celiac and gluten sensitivity',
  'Blood vessel function',
  'Autoimmune screening',
];

export const CATEGORY_ICON = {
  'brain-health': BrainIcon,
  'dna-health': DnaIcon,
  energy: ZapIcon,
  'gut-health': UtensilsIcon,
  'heart-vascular-health': HeartIcon,
  'immune-system': ShieldIcon,
  inflammation: FlameIcon,
  'kidney-health': DropletsIcon,
  'liver-health': ActivityIcon,
  'metabolic-health': BeakerIcon,
  nutrients: UtensilsIcon,
  'sex-hormones': UsersIcon,
  'thyroid-health': ThermometerIcon,
  'toxin-exposure': SkullIcon,
};

export const CATEGORIES = [
  {
    slug: 'brain-health',
    name: 'Brain health',
    count: 6,
    biomarkers: [
      {
        slug: 'vitamin-d',
        name: 'Vitamin D',
        desc: 'Vitamin D is an essential and multifunctional micronutrient.',
        panels: ['Advanced', 'Baseline'],
      },
      {
        slug: 'vitamin-b12',
        name: 'Vitamin B12',
        desc: 'Vitamin B12 (cobalamin) is a water-soluble vitamin that plays a central role in energy production, DNA synthesis, red blood cell formation, and nervous system health.',
        panels: ['Advanced', 'Methylation panel', 'Nutrition panel', 'Vitamin levels'],
      },
      {
        slug: 'cortisol',
        name: 'Cortisol',
        desc: 'Cortisol is a hormone made by the adrenal glands that helps you respond to stress and regulate various bodily functions.',
        panels: ['Advanced', 'Baseline'],
      },
    ],
  },
  {
    slug: 'dna-health',
    name: 'DNA health',
    count: 3,
    biomarkers: [
      {
        slug: 'folate',
        name: 'Folate (Folic Acid)',
        desc: 'Folate is a type of vitamin B that is essential for the production and maintenance of new cells.',
        panels: ['Advanced', 'Nutrition panel', 'Vitamin levels'],
      },
      {
        slug: 'homocysteine',
        name: 'Homocysteine',
        desc: 'Homocysteine is an amino acid, which is a molecule that your body uses to make proteins.',
        panels: ['Advanced', 'Methylation panel'],
      },
    ],
  },
  {
    slug: 'energy',
    name: 'Energy',
    count: 2,
    biomarkers: [
      {
        slug: 'ast',
        name: 'Aspartate Aminotransferase (AST)',
        desc: 'AST is an enzyme that helps break down amino acids and is found in various tissues.',
        panels: ['Advanced', 'Baseline', 'Retest', 'Organ age panel'],
      },
      {
        slug: 'co2',
        name: 'Carbon Dioxide, Total',
        desc: 'Total carbon dioxide (CO2) is a measure of the amount of carbon dioxide in your blood.',
        panels: ['Advanced', 'Baseline', 'Retest', 'Organ age panel'],
      },
    ],
  },
  { slug: 'gut-health', name: 'Gut health', count: 0, biomarkers: [] },
  {
    slug: 'heart-vascular-health',
    name: 'Heart & vascular health',
    count: 2,
    biomarkers: [
      {
        slug: 'hdl',
        name: 'HDL Cholesterol',
        desc: 'HDL cholesterol is a type of cholesterol that is carried by high-density lipoproteins (HDL) in your blood.',
        panels: ['Advanced', 'Baseline', 'Retest', 'Organ age panel'],
      },
      {
        slug: 'ldl',
        name: 'LDL Cholesterol',
        desc: 'LDL cholesterol is a type of cholesterol that is carried by low-density lipoproteins (LDL) in your blood.',
        panels: ['Advanced', 'Baseline', 'Retest', 'Organ age panel'],
      },
    ],
  },
  {
    slug: 'immune-system',
    name: 'Immune system',
    count: 1,
    biomarkers: [
      {
        slug: 'alternaria',
        name: 'Alternaria alternata (m6) IgE',
        desc: "Alternaria alternata IgE measures your immune system's specific allergic antibody response.",
        panels: ['Respiratory allergy panel'],
      },
    ],
  },
  {
    slug: 'inflammation',
    name: 'Inflammation',
    count: 1,
    biomarkers: [
      {
        slug: 'crp',
        name: 'High-sensitivity CRP',
        desc: 'High-sensitivity CRP is a blood test that measures very subtle levels of inflammation in the body.',
        panels: ['Advanced', 'Baseline', 'Retest', 'Organ age panel'],
      },
    ],
  },
  { slug: 'kidney-health', name: 'Kidney health', count: 15, biomarkers: [] },
  { slug: 'liver-health', name: 'Liver health', count: 0, biomarkers: [] },
  {
    slug: 'metabolic-health',
    name: 'Metabolic health',
    count: 2,
    biomarkers: [
      {
        slug: 'insulin',
        name: 'Insulin',
        desc: 'Insulin is a hormone that is produced by the pancreas and regulates the metabolism of glucose, fat and protein.',
        panels: ['Advanced', 'Extended metabolic health panel', 'Insulin and blood sugar'],
      },
    ],
  },
  { slug: 'nutrients', name: 'Nutrients', count: 3, biomarkers: [] },
  {
    slug: 'sex-hormones',
    name: 'Sex hormones',
    count: 8,
    biomarkers: [
      {
        slug: 'testosterone',
        name: 'Testosterone, Total',
        desc: 'Testosterone is a hormone that is mainly produced by the testicles in males and the ovaries in females.',
        panels: ['Advanced', 'Baseline', "Extended men's health panel", "Men's core hormones"],
      },
    ],
  },
  { slug: 'thyroid-health', name: 'Thyroid health', count: 3, biomarkers: [] },
  { slug: 'toxin-exposure', name: 'Toxin exposure', count: 0, biomarkers: [] },
];
