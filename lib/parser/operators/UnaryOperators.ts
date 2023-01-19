import {UnaryExpressionOperator} from "../Operator";
import {Expression, LogicalValue, Value} from "../Expression";

export class NotOperator extends UnaryExpressionOperator {
    get getValue(): Expression {
        return this.getValue;
    }

    evaluate(value: Value<any>): Value<any> {
        if (value instanceof LogicalValue) {
            return new LogicalValue(!(value.getValue));
        }
        return new LogicalValue(!Boolean(value.getValue));
    }
}