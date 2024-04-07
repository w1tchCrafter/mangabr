import axios from "axios";
import IMangaScrapper, {search_results, ScrapperError} from "./types";
import cheerio from "cheerio";
import puppeteer, { Page } from "puppeteer";

export class Scrapper implements IMangaScrapper {
    public search_host: string;

    constructor() {
        this.search_host = "https://lermanga.org";
    }

    public async search(manga_name: string): Promise<search_results | ScrapperError> {
        const url = `${this.search_host}/?s=${manga_name.replace(" ", "+")}`;
        return this.scrap_links(url, "a.film-poster-ahref.item-qtip");
    }

    public async fetch_chapters(url: string): Promise<search_results | ScrapperError> {
        return this.scrap_links(url, "a.dynamic-visited");
    }

    public async fetch_images(url: string): Promise<search_results | ScrapperError> {
        let browser = await puppeteer.launch({ headless: true });
        let page = await browser.newPage();

        try {
            await page.goto(url);
            await page.waitForSelector("");
            await page.click("");
            await this.autoscroll(page);

            let urls = await page.evaluate(() => {
                let imgs = document.querySelectorAll("img");
                return Array.from(imgs).map(img => img.getAttribute("href"));
            });

            if (urls && urls.length > 0 && urls.some(url => url !== null)) {
                let r = [];

                for (let i of urls) {
                    if (i) r.push(i)
                }

                return r;
            } else {
                return new ScrapperError("Could not fetch images");
            }
        } catch(err) {
            return new ScrapperError(err);
        } finally {
            await browser.close();
        }
    }

    private async autoscroll(page: Page): Promise<void> {
        await page.evaluate(async () => {
            await new Promise<void>((resolve, _) => {
                let totalheight = 0;
                const distance = 100;
                const scrollInterval = setInterval(() => {
                    const scrollHeight = document.body.scrollHeight;
                    window.scrollBy(0, distance);
                    totalheight += distance;
                    if (totalheight >= scrollHeight) {
                        clearInterval(scrollInterval);
                        resolve();
                    }
                }, 100);
            });
        });
    }

    private async scrap_links(url: string, selector: string): Promise<search_results | ScrapperError> {
        try {
            let response = await axios.get(url);
            let html = response.data;
            let $ = cheerio.load(html);
            let results: search_results = [];

            $(selector).each((_: number, element: cheerio.Element) => {
                let href = $(element).attr("href");

                if (typeof href !== "undefined") {
                    results.push(href);
                }
            });

            return results;
        } catch (err) {
            return new ScrapperError(err);
        }
    }
}