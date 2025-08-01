import type { IAfterGuiAttachedParams } from '../../../interfaces/iAfterGuiAttachedParams';
import type { FILTER_LOCALE_TEXT } from '../../filterLocaleText';
import type { Comparator } from '../iScalarFilter';
import type { ISimpleFilterModel, Tuple } from '../iSimpleFilter';
import { ScalarFilter } from '../scalarFilter';
import { DateCompWrapper } from './dateCompWrapper';
import type { DateFilterModel, DateFilterParams } from './iDateFilter';
export declare class DateFilter extends ScalarFilter<DateFilterModel, Date, DateCompWrapper> {
    private readonly eConditionPanelsFrom;
    private readonly eConditionPanelsTo;
    private readonly dateConditionFromComps;
    private readonly dateConditionToComps;
    private dateFilterParams;
    private minValidYear;
    private maxValidYear;
    private minValidDate;
    private maxValidDate;
    private filterModelFormatter;
    readonly filterType: "date";
    constructor();
    afterGuiAttached(params?: IAfterGuiAttachedParams): void;
    protected mapValuesFromModel(filterModel: DateFilterModel | null): Tuple<Date>;
    protected comparator(): Comparator<Date>;
    protected isValid(value: any): boolean;
    protected setParams(params: DateFilterParams): void;
    createDateCompWrapper(element: HTMLElement): DateCompWrapper;
    protected setElementValue(element: DateCompWrapper, value: Date | null): void;
    protected setElementDisplayed(element: DateCompWrapper, displayed: boolean): void;
    protected setElementDisabled(element: DateCompWrapper, disabled: boolean): void;
    protected getDefaultFilterOptions(): string[];
    protected createValueElement(): HTMLElement;
    private createFromToElement;
    protected removeValueElements(startPosition: number, deleteCount?: number): void;
    protected removeDateComps(components: DateCompWrapper[], startPosition: number, deleteCount?: number): void;
    private isValidDateValue;
    protected isConditionUiComplete(position: number): boolean;
    protected areSimpleModelsEqual(aSimple: DateFilterModel, bSimple: DateFilterModel): boolean;
    protected createCondition(position: number): DateFilterModel;
    protected resetPlaceholder(): void;
    protected getInputs(position: number): Tuple<DateCompWrapper>;
    protected getValues(position: number): Tuple<Date>;
    protected translate(key: keyof typeof FILTER_LOCALE_TEXT): string;
    getModelAsString(model: ISimpleFilterModel): string;
}
