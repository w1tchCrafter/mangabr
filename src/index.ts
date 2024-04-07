import { Scrapper } from "./scrapper/scrapper";

async function main() {
    let s = new Scrapper();
    await s.fetch_images("https://lermanga.org/capitulos/jashin-chan-dropkick-capitulo-00");
}

main();