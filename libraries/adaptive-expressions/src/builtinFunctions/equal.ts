/**
 * @module adaptive-expressions
 */
/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { ComparisonEvaluator } from './comparisonEvaluator';
import { ExpressionType } from '../expressionType';
import { FunctionUtils } from '../functionUtils';

export class Equal extends ComparisonEvaluator {
    public constructor() {
        super(ExpressionType.Equal, FunctionUtils.isEqual, FunctionUtils.validateBinary);
    }
}