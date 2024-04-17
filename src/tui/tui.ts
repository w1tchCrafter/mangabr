import * as readline from "readline";
import {exec} from "child_process"
import IMangaScrapper, {ScrapperError} from "../scrapper/types";

export default class Tui {
    private reader;

    constructor(private scrapper: IMangaScrapper) {
        this.reader = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        process.on("exit", () => this.reader.close());
    }    

    public async prompt(): Promise<void> {
        let manga_name = await this.input("search manga");
        let results = await this.scrapper.search(manga_name);

        if (results instanceof ScrapperError) {
            // handle error
        }


    }

    private async input(msg: string): Promise<string> {
        return new Promise((resolve) => {
            this.reader.question(msg, (userInput: string) => resolve(userInput));
        });
    }

    private execute(cmd: ExecOptions) {
        switch (cmd) {
            case ExecOptions.chapters:
                let command = "";
                exec(command, (err, stdout, stderr) => {
                    
                });
                break;
        }
    }
}
