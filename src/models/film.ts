export class Film {
  name: string;
  slug: string;
  year: number;
  film_section: string;
  poster_url: string;
  film_link: string;
  summary: string;
  credits: string;
  awards: string[];

  constructor(
    name: string,
    slug: string,
    year: number,
    film_section: string,
    poster_url: string,
    film_link: string,
    summary: string,
    credits: string,
    awards: string[]
  ) {
    this.name = name;
    this.slug = slug;
    this.year = year;
    this.film_section = film_section;
    this.poster_url = poster_url;
    this.film_link = film_link;
    this.summary = summary;
    this.credits = credits;
    this.awards = awards;
  }
}
