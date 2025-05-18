export interface LabData {
  slug: string;
  title: string;
  description: string;
  date: string;
  badges?: string[];
  details?: string;
  images?: string[];
  links?: { label: string; url: string }[];
}

export const labsData: LabData[];
