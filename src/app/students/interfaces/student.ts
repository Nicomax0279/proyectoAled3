export interface Student {
  id?: number;
  name: string;
  surname: string;
  career: Career;
  year: number;
  birthdate: Date;
  email: string;
  phoneNumber: string; 
  address: string; 
  active?: boolean;
}

export type Career =
  | 'analista de sistemas'
  | 'radiología'
  | 'administración de empresas';
