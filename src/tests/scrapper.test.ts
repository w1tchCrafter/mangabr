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