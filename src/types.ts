export type Language = 'EN' | 'ID';
export type Theme = 'dark' | 'light';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  roleId: string;
  category: 'partner' | 'associate' | 'specialist';
  background: string;
  backgroundId: string;
  skills: string[];
  skillsId: string[];
  imagePlaceholder?: string;
  credentials?: string;
}

export interface ProjectItem {
  id: string;
  companyName: string;
  location: string;
  commodity?: string;
  areaSize?: string;
  scopeOfWork: string[];
  description: {
    EN: string;
    ID: string;
  };
  highlights: string[];
  imageUrl: string;
  tag: string;
}

export interface ServiceCategory {
  id: string;
  title: {
    EN: string;
    ID: string;
  };
  subtitle: {
    EN: string;
    ID: string;
  };
  subcategories: {
    num: string;
    name: {
      EN: string;
      ID: string;
    };
    items: {
      EN: string;
      ID: string;
    }[];
  }[];
}

export interface ExpertiseArea {
  id: string;
  title: {
    EN: string;
    ID: string;
  };
  description: {
    EN: string;
    ID: string;
  };
  items: string[];
}
