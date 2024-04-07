import { Scrapper } from "../scrapper/scrapper";

test("test scrapping manga urls", async() => {
    let scrapper = new Scrapper();
    let response = await scrapper.search("shadows house");

    expect(response).toEqual(["https://lermanga.org/mangas/shadows-house/"]);
});

test("test empty results scraping manga urls", async() => {
    let scrapper = new Scrapper();
    let empty = await scrapper.search("aopuidhasp");

    expect(empty).toEqual([]);
});

test("test scrapping manga chapters", async() => {
    let scrapper = new Scrapper();
    let chapters = await scrapper.fetch_chapters("https://lermanga.org/mangas/jashin-chan-dropkick/");

    expect(chapters).toEqual([
        "https://lermanga.org/capitulos/jashin-chan-dropkick-capitulo-01/",
        "https://lermanga.org/capitulos/jashin-chan-dropkick-capitulo-00/"
    ]); 
});
