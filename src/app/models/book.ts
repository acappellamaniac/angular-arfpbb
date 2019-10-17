export class Book implements BookRaw{
  constructor(
    public ellipsis: string,
    public subtitle: string,
    public isbn: string,
    public description: string,
    public authorTeam: string
  ) {}
}

export interface BookRaw {
  ellipsis: string;
  subtitle: string;
  isbn: string;
  description: string;
  rating: number;
  authors: string[];
}