import { Scrapper } from "./scrapper/scrapper";
import Tui from "./tui/tui";

async function main() {
    let s = new Scrapper()
    let tui = new Tui(s);
    tui.prompt();
}

main();