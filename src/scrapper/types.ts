export type search_results = string[];

export class ScrapperError extends Error {
    constructor(message: any) {
        super(message);
    }
}

export default interface IMangaScrapper {
    search_host: string;
    search: (manganame: string) => Promise<search_results | ScrapperError>;
}
