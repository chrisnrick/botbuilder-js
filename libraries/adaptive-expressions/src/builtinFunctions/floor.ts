/**
 * @module adaptive-expressions
 */
/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { NumberTransformEvaluator } from './numberTransformEvaluator';
import { ExpressionType } from '../expressionType';

export class Floor extends NumberTransformEvaluator {
    public constructor(){
        super(ExpressionType.Floor, Floor.func);
    }

    private static func(args: any[]): number {
        return Math.floor(args[0]);
    }
}