export type Product = {
  slug: string;
  name: string;
  shortName: string;
  price: number;
  color: string;
  accent: string;
  bg: string;
  tag: string;
  benefits: string[];
  description: string;
  dosage: string[];
  coaUrl: string;
};

export const products: Product[] = [
  {
    slug: "bpc-157",
    name: "BPC-157",
    shortName: "BPC",
    price: 79,
    color: "#f28b47",
    accent: "orange",
    bg: "#fff2e9",
    tag: "Recovery research",
    benefits: ["Tissue models", "Inflammation studies", "Gastrointestinal research"],
    description:
      "A research peptide commonly referenced in tissue repair, inflammatory response, and gastrointestinal model studies.",
    dosage: ["5 mg vial", "10 mg vial", "Research bundle"],
    coaUrl: "/coa/bpc-157",
  },
  {
    slug: "glutathione",
    name: "Glutathione",
    shortName: "GSH",
    price: 35,
    color: "#f28b47",
    accent: "orange",
    bg: "#fff3df",
    tag: "Longevity research",
    benefits: ["Oxidative stress models", "Cellular redox studies", "Longevity assays"],
    description:
      "A research compound studied in cellular redox balance, oxidative stress models, and controlled longevity-focused laboratory assays.",
    dosage: ["200 mg vial", "500 mg vial", "Research bundle"],
    coaUrl: "/coa/glutathione",
  },
  {
    slug: "tb-500",
    name: "TB-500",
    shortName: "TB",
    price: 89,
    color: "#9475ff",
    accent: "violet",
    bg: "#f2efff",
    tag: "Mobility research",
    benefits: ["Cell migration", "Actin regulation", "Soft tissue models"],
    description:
      "A synthetic research peptide used in studies involving cellular movement, actin dynamics, and recovery pathways.",
    dosage: ["5 mg vial", "10 mg vial", "Research bundle"],
    coaUrl: "/coa/tb-500",
  },
  {
    slug: "ghk-cu",
    name: "GHK-Cu",
    shortName: "GHK",
    price: 69,
    color: "#50d0ad",
    accent: "mint",
    bg: "#eafbf6",
    tag: "Cell signaling",
    benefits: ["Copper peptide", "Skin model research", "Gene expression studies"],
    description:
      "A copper-binding peptide studied in cellular signaling, extracellular matrix, and dermatological research models.",
    dosage: ["50 mg vial", "100 mg vial", "Research bundle"],
    coaUrl: "/coa/ghk-cu",
  },
  {
    slug: "cjc-1295",
    name: "CJC-1295",
    shortName: "CJC",
    price: 95,
    color: "#5ac7e8",
    accent: "cyan",
    bg: "#eaf8fe",
    tag: "Endocrine research",
    benefits: ["GHRH analog", "Pulse studies", "Laboratory assays"],
    description:
      "A growth hormone releasing hormone analog used in controlled endocrine pathway and receptor activity studies.",
    dosage: ["2 mg vial", "5 mg vial", "Research bundle"],
    coaUrl: "/coa/cjc-1295",
  },
];

export const getProduct = (slug: string) =>
  products.find((product) => product.slug === slug);

export const faqs = [
  {
    question: "Are these products for human consumption?",
    answer:
      "No. Divine Aminos products are presented for laboratory research use only and are not intended to diagnose, treat, cure, or prevent disease.",
  },
  {
    question: "Where are CoAs stored?",
    answer:
      "Every product has a stable CoA route. QR labels can point to these routes now, and the final PDF can be updated behind the same URL later.",
  },
  {
    question: "Can the payment provider be swapped later?",
    answer:
      "Yes. The storefront is structured so checkout can connect to a compliant third-party processor when the client finalizes it.",
  },
];
