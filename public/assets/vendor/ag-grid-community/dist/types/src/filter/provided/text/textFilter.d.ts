import type { IDoesFilterPassParams } from '../../../interfaces/iFilter';
import { AgInputTextField } from '../../../widgets/agInputTextField';
import type { ISimpleFilterModel, ISimpleFilterModelType, Tuple } from '../iSimpleFilter';
import { SimpleFilter } from '../simpleFilter';
import type { TextFilterModel, TextFilterParams } from './iTextFilter';
export declare class TextFilter extends SimpleFilter<TextFilterModel, string> {
    readonly filterType: "text";
    private readonly defaultFormatter;
    private readonly defaultLowercaseFormatter;
    private readonly defaultMatcher;
    private readonly eValuesFrom;
    private readonly eValuesTo;
    private matcher;
    private formatter;
    private textFilterParams;
    private filterModelFormatter;
    constructor();
    protected defaultDebounceMs: number;
    protected setParams(params: TextFilterParams): void;
    protected createCondition(position: number): TextFilterModel;
    protected areSimpleModelsEqual(aSimple: TextFilterModel, bSimple: TextFilterModel): boolean;
    protected getInputs(position: number): Tuple<AgInputTextField>;
    protected getValues(position: number): Tuple<string>;
    private getValuesWithSideEffects;
    protected getDefaultFilterOptions(): string[];
    protected createValueElement(): HTMLElement;
    private createFromToElement;
    protected removeValueElements(startPosition: number, deleteCount?: number): void;
    protected mapValuesFromModel(filterModel: TextFilterModel | null): Tuple<string>;
    protected evaluateNullValue(filterType: ISimpleFilterModelType | null): boolean;
    protected evaluateNonNullValue(values: Tuple<string>, cellValue: string, filterModel: TextFilterModel, params: IDoesFilterPassParams): boolean;
    getModelAsString(model: ISimpleFilterModel): string;
}
