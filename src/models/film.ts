export class Film {
  title: string;
  year: number;
  poster_url: string;
  film_link: string;
  summary: string;

  constructor(
    title: string,
    year: number,
    poster_url: string,
    film_link: string,
    summary: string
  ) {
    this.title = title;
    this.year = year;
    this.poster_url = poster_url;
    this.film_link = film_link;
    this.summary = summary;
  }
}
