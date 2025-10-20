export interface ProfileData {
  hello: string;
  description: string;
  personalInformation: PersonalInformation[];
  language: Language[];
  professionalSkills: Skill[];
  additionalSkills: string[];
  styledList: string[];
  workExperience: WorkExperience[];
  education: Education[];
}

export interface PersonalInformation {
  label: string;
  value: string;
}

export interface Language {
  label: string;
  score: number;
  value: string;
}

export interface Skill {
  label: string;
  score: number;
  tags: string[];
}

export interface WorkExperience {
  start: string;
  end: string;
  company: string;
  city: string;
  title: string;
  highlight: string;
  responsibility: string[];
}

export interface Education {
  start: string;
  end: string;
  company: string;
  city: string;
  title: string;
  highlight: string;
  responsibility: string[];
}
