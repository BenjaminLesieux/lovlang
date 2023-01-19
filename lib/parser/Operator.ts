import {Expression, Value} from "./Expression";

export interface Operator extends Expression {}

export abstract class UnaryExpressionOperator implements Operator {
    constructor(private value: Expression) {}

    get getValue() {
        return this.value;
    }

    abstract evaluate(value: Value<any>): Value<any>;
}

export abstract class BinaryExpressionOperator implements Operator {
    constructor(private left: Expression, private right: Expression) {}

    get getLeft() {
        return this.left;
    }

    get getRight() {
        return this.right;
    }

    abstract evaluate(left: Value<any>, right: Value<any>): Value<any>;
}