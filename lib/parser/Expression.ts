export interface Expression {}
export class Value<T> implements Expression {
    constructor(private value: T){}

    get getValue() {
        return this.value;
    }
}

export class NumericValue extends Value<number> {
    constructor(value: number) {
        super(value);
    }
}

export class LogicalValue extends Value<boolean> {
    constructor(value: boolean) {
        super(value);
    }
}

export class TextValue extends Value<string> {
    constructor(value: string) {
        super(value);
    }
}