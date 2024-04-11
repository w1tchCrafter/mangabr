import axios from "axios";
import IMangaScrapper, {search_results, ScrapperError} from "./types";
import cheerio from "cheerio";

export class Scrapper implements IMangaScrapper {
    public search_host: string;

    constructor() {
        this.search_host = "https://mangaonline.biz";
    }

    public async search(manga_name: string): Promise<search_results | ScrapperError> {
        const url = `${this.search_host}/?s=${manga_name.replace(" ", "+")}`;
        return this.scrap_links(url, "article.item.se.tvshows a", "href");
    }

    public async fetch_chapters(url: string): Promise<search_results | ScrapperError> {
        return this.scrap_links(url, ".episodios a", "href");
    }

    public async fetch_images(url: string): Promise<search_results | ScrapperError> {
        return this.scrap_links(url, ".content p img", "src");
    }

    private async scrap_links(url: string, selector: string, attr: string): Promise<search_results | ScrapperError> {
        try {
            let response = await axios.get(url);
            let html = response.data;
            let $ = cheerio.load(html);
            let results: search_results = [];

            $(selector).each((_: number, element: cheerio.Element) => {
                let href = $(element).attr(attr);

                if (typeof href !== "undefined") {
                    results.push(href);
                }
            });

            return [...new Set(results)];
        } catch (err) {
            return new ScrapperError(err);
        }
    }
}