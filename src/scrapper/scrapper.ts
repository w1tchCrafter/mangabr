import axios from "axios";
import IMangaScrapper, {search_results, ScrapperError} from "./types";
import cheerio from "cheerio";

export class Scrapper implements IMangaScrapper {
    public search_host: string;

    constructor() {
        this.search_host = "https://lermanga.org";
    }

    public async search(manga_name: string): Promise<search_results | ScrapperError> {
        const url = `${this.search_host}/?s=${manga_name.replace(" ", "+")}`;

        try {
            let response = await axios.get(url);
            let html = response.data;
            let $ = cheerio.load(html);
            let results: search_results = [];

            $("a.film-poster-ahref.item-qtip").each((_: number, element: cheerio.Element) => {
                let src = $(element).attr("href");

                if (typeof src !== "undefined") {
                    results.push(src);
                }
            });

            return results;

        } catch(err) { // return error case request fails
            return new ScrapperError(err);
        }
    }
}