export interface Course {
  id?: number;
  active?: boolean;
  professor: string;
  title: string;
  description: string;
  modality: 'virtual' | 'presencial';
  img?:string
}
