export interface Profile {
  tribe: string;
  bodyType: string;
  position: string;
  relationshipStatus: string;
  lookingFor: string;
  images: string[];
  age: number;
  bio: string;
  title: string;
  clue: {
    category: string;
    value: string;
    clue: string;
  };
  isCatfish: boolean;
  distance: number;
}

export interface Game {
  key: string;
  value: string;
  profiles: Profile[];
}

export enum Tribe {
  CLEAN_CUT = 'Clean-Cut',
  GEEK = 'Geek',
  DISCREET = 'Discreet',
  LEATHER = 'Leather',
  SOBER = 'Sober',
}

export enum BodyType {
  TONED = 'Toned',
  AVERAGE = 'Average',
  LARGE = 'Large',
  MUSCULAR = 'Muscular',
  SLIM = 'Slim',
  STOCKY = 'Stocky',
}

export enum Position {
  TOP = 'Top',
  VERS_TOP = 'Vers Top',
  VERSATILE = 'Versatile',
  VERS_BOTTOM = 'Vers Bottom',
  BOTTOM = 'Bottom',
  UNSPECIFIED = 'Unspecified',
}

export enum RelationshipStatus {
  DATING = 'Dating',
  SINGLE = 'Single',
  PARTNERED = 'Partnered',
  OPEN_RELATIONSHIP = 'Open Relationship',
  MARRIED = 'Married',
  UNSPECIFIED = 'Unspecified',
}

export enum LookingFor {
  CHAT = 'Chat',
  DATES = 'Dates',
  FRIENDS = 'Friends',
  NETWORKING = 'Networking',
  RELATIONSHIP = 'Relationship',
  RIGHT_NOW = 'Right Now',
}

export enum FilterCategory {
  tribe = 'Tribe',
  position = 'Position',
  bodyType = 'Body Type',
  lookingFor = 'Looking For',
  relationshipStatus = 'Relationship Status',
}
