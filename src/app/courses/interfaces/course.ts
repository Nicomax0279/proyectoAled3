export interface Course {
  id?: number;
  active?: boolean;
  professorId: number;
  title: string;
  professorName?: string;
  professorSurname?: string;
  description: string;
  modality: 'virtual' | 'presencial';
  img?:string
}
