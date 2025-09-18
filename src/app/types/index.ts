export interface JobHistoryItem {
  companyName: string;
  position: string;
  location: string;
  startYear: string;
  endYear: string;
  skillSummary: string[];
  summary: string;
  highlights: {
    title: string;
    shortDescription: string;
    longDescription: string;
  }[];
};