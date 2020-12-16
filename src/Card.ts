export interface Card {
  readonly name: string;
  readonly job: string;
  readonly description: string;
  readonly favori: boolean;
  readonly date_deces: string;
  readonly date_deces_precision: string;
  readonly date_naissance: string;
  readonly date_naissance_precision: string;
  readonly id: number;
  readonly lien_categorie_wikimedia_commons: string;
  readonly lien_wikidata: string;
  readonly lien_wikipedia: string;
  readonly resume: string;
}
