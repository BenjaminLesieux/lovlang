import {BinaryExpressionOperator} from "../Operator";
import {NumericValue, TextValue, Value} from "../Expression";

export class AddOperator extends BinaryExpressionOperator {
    /**
     * On this one we let javascript evaluate the operation for us
     * */
    evaluate(left: Value<any>, right: Value<any>): Value<any> {
        return left.getValue + right.getValue;
    }
}

export class SubtractOperator extends BinaryExpressionOperator {
    evaluate(left: Value<any>, right: Value<any>): Value<any> {
        if (left instanceof NumericValue && right instanceof NumericValue) {
            const leftInt = new NumericValue(left.getValue);
            const rightInt = new NumericValue(right.getValue);
            return new NumericValue(leftInt.getValue - rightInt.getValue);
        }

        else if (left instanceof TextValue && right instanceof TextValue) {

        }

        throw new Error(`Cannot perform operator '-' on ${left.getValue} & ${right.getValue}`);
    }
}