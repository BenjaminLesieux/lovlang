interface TokenType {
    [key: string]: RegExp;
}

export const TokenTypes: TokenType = {
    IDENTIFIER: /(if|else|def|object|this|for|while|let)/,
    LOGIC: /true|false/,
    OPERATOR: /(\+|-|>|<|={1,2}|!|:{2}|\*)/,
    NUMERIC: /[0-9]+/,
    L_PAR: /\(/,
    R_PAR: /\)/,
    WHITESPACE: /\s/,
    QUOTE: /"/
}

export type TokenQuantifier = keyof TokenType;

export interface Token {
    type: TokenQuantifier,
    token: string
}

export class Tokenizer {
    private readonly tokens: Token[];

    constructor(private source: string) {
        this.tokens = [];
    }
    parse(): Token[] {
        for (let pos = 0; pos < this.source.length; pos++) {
            if (TokenTypes.WHITESPACE.test(this.source[pos])) continue;

            const letters = /[a-zA-Z]/;
            if (letters.test(this.source[pos])) {
                let value = "";
                let type = "";
                while (letters.test(this.source[pos]) && pos < this.source.length) {
                    value += this.source[pos];
                    pos++;
                }
                if (TokenTypes.IDENTIFIER.test(value)) type = "IDENTIFIER";
                else if (TokenTypes.LOGIC.test(value)) type = "LOGIC";
                else type = "VARIABLE";

                this.tokens.push({ type: type, token: value });
            }

            if (TokenTypes.L_PAR.test(this.source[pos])) {
                this.tokens.push({ type: "L_PAR", token: "(" });
            }
            else if (TokenTypes.R_PAR.test(this.source[pos])) {
                this.tokens.push({ type: "R_PAR", token: ")" });
            }
            else if (TokenTypes.OPERATOR.test(this.source[pos])) {
                this.tokens.push({ type: "OPERATOR", token: this.source[pos] });
            }
            else if (TokenTypes.QUOTE.test(this.source[pos])) {
                this.tokens.push({ type: "QUOTE", token: this.source[pos]});
            }
            else if (TokenTypes.NUMERIC.test(this.source[pos])) {
                this.tokens.push({ type: "NUMERIC", token: this.source[pos]});
            }
        }
        return this.tokens;
    }
}
