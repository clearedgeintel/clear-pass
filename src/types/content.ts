export type Domain = 'general' | 'life' | 'health' | 'mn_law';

export interface KeyTerm {
  term: string;
  def: string;
}

export interface VideoEmbed {
  title: string;
  youtubeId: string;
}

export interface ExternalLink {
  label: string;
  url: string;
}

export interface Lesson {
  id: string;
  moduleId: string;
  title: string;
  order: number;
  estReadMin: number;
  bodyMarkdown: string;
  keyTerms: KeyTerm[];
  mnemonics?: string[];
  mnCallout?: string;
  videoEmbeds?: VideoEmbed[];
  externalLinks?: ExternalLink[];
}

export interface Flashcard {
  id: string;
  moduleId: string;
  front: string;
  back: string;
}

export interface QuizQuestion {
  id: string;
  moduleId: string;
  domain: Domain;
  difficulty: 1 | 2 | 3;
  stem: string;
  choices: string[];
  correctIndex: number;
  explanation: string;
}

export interface Module {
  id: string;
  domain: Domain;
  title: string;
  summary: string;
  order: number;
  lessons: Lesson[];
  flashcards: Flashcard[];
  quizQuestions: QuizQuestion[];
}
