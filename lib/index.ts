import {Tokenizer} from "./token/Token";
import {FileReader} from "./reader/FileReader";

function main() {
    const sourceCode = FileReader.read("./examples/example1.lov");
    console.log(sourceCode);

    const tokenizer = new Tokenizer(sourceCode);
    console.log(tokenizer.parse());
}

main();