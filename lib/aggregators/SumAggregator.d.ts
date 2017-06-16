import { GroupTotals } from '../core';
import { Item } from '../dataview';
import { Aggregator } from './index';
export declare class SumAggregator extends Aggregator {
    private sum;
    init(): void;
    accumulate(item: Item): void;
    storeResult(groupTotals: GroupTotals): void;
}
