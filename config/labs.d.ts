export interface LabData {
  id?: number;
  slug: string;
  title: string;
  description: string;
  date: string;
  badges?: string[];
  tags?: string[];
  teamType?: string;
  details?: string;
  images?: string[];
  links?: { label: string; url: string }[];
  link?: string;
}

export const labsData: LabData[];
