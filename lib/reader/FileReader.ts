import {readFileSync} from "fs";

export class FileReader {
    static read(path: string): string {
        const file = readFileSync(path);
        return file.toString();
    }
}