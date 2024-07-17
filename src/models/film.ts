export class Film {
  title: string;
  slug: string;
  year: number;
  poster_url: string;
  film_link: string;
  summary: string;
  credits: string;
  awards: string[];

  constructor(
    title: string,
    slug: string,
    year: number,
    poster_url: string,
    film_link: string,
    summary: string,
    credits: string,
    awards: string[]
  ) {
    this.title = title;
    this.slug = slug;
    this.year = year;
    this.poster_url = poster_url;
    this.film_link = film_link;
    this.summary = summary;
    this.credits = credits;
    this.awards = awards;
  }
}
