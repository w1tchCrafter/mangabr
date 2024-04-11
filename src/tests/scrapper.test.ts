import { Scrapper } from "../scrapper/scrapper";

test("test scrapping manga urls", async() => {
    let scrapper = new Scrapper();
    let response = await scrapper.search("dragon ball");

    expect(response).toEqual([
        "https://mangaonline.biz/manga/dragon-ball-super/",
        "https://mangaonline.biz/manga/dragon-ball/"
    ]);
});

test("test empty results scraping manga urls", async() => {
    let scrapper = new Scrapper();
    let empty = await scrapper.search("aopuidhasp");

    expect(empty).toEqual([]);
});

test("test scrapping manga chapters", async() => {
    let scrapper = new Scrapper();
    let chapters = await scrapper.fetch_chapters("https://mangaonline.biz/manga/dragon-ball-super/");

    expect(chapters).toEqual([
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-98/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-97/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-96/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-95/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-94/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-93/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-92/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-91/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-90/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-89/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-88/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-87/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-86/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-85/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-84/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-83/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-82/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-81/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-80/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-79/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-78/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-77/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-76/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-75/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-74/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-73/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-72/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-71/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-70/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-69/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-68/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-67/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-66/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-65/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-64/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-63/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-62/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-61/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-60/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-59/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-58/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-57/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-56/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-55/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-54/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-53/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-52/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-51/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-50/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-49/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-48/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-47/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-46/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-45/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-44/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-43/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-42/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-41/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-40/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-39/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-38/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-37/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-36/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-35/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-34/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-33/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-32/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-31/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-30/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-29/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-28/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-27/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-26/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-25/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-24/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-23/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-22/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-21/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-20/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-19/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-18/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-17/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-16/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-15/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-14/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-13/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-12/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-11/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-10/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-9/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-8/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-7/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-6/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-5/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-4/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-3/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-2/',
        'https://mangaonline.biz/capitulo/dragon-ball-super-capitulo-1/'
    ]); 
});
