import type { IAfterGuiAttachedParams } from '../../interfaces/iAfterGuiAttachedParams';
import type { IDoesFilterPassParams } from '../../interfaces/iFilter';
import { AgPromise } from '../../utils/promise';
import type { AgInputTextField } from '../../widgets/agInputTextField';
import { AgRadioButton } from '../../widgets/agRadioButton';
import { AgSelect } from '../../widgets/agSelect';
import type { ComponentSelector } from '../../widgets/component';
import { Component } from '../../widgets/component';
import type { ICombinedSimpleModel, ISimpleFilter, ISimpleFilterModel, ISimpleFilterModelType, JoinOperator, SimpleFilterParams, Tuple } from './iSimpleFilter';
import { OptionsFactory } from './optionsFactory';
import { ProvidedFilter } from './providedFilter';
/**
 * Every filter with a dropdown where the user can specify a comparing type against the filter values.
 *
 * @param M type of filter-model managed by the concrete sub-class that extends this type
 * @param V type of value managed by the concrete sub-class that extends this type
 * @param E type of UI element used for collecting user-input
 */
export declare abstract class SimpleFilter<M extends ISimpleFilterModel, V, E = AgInputTextField> extends ProvidedFilter<M | ICombinedSimpleModel<M>, V> implements ISimpleFilter {
    abstract readonly filterType: 'number' | 'text' | 'date';
    protected readonly eTypes: AgSelect[];
    protected readonly eJoinOperatorPanels: HTMLElement[];
    protected readonly eJoinOperatorsAnd: AgRadioButton[];
    protected readonly eJoinOperatorsOr: AgRadioButton[];
    protected readonly eConditionBodies: HTMLElement[];
    private readonly listener;
    private maxNumConditions;
    private numAlwaysVisibleConditions;
    private defaultJoinOperator;
    private filterPlaceholder;
    private lastUiCompletePosition;
    private joinOperatorId;
    private filterListOptions;
    protected optionsFactory: OptionsFactory;
    protected abstract getDefaultFilterOptions(): string[];
    protected abstract createValueElement(): HTMLElement;
    protected abstract removeValueElements(startPosition: number, deleteCount?: number): void;
    protected abstract areSimpleModelsEqual(a: ISimpleFilterModel, b: ISimpleFilterModel): boolean;
    protected abstract createCondition(position: number): M;
    protected abstract mapValuesFromModel(filterModel: ISimpleFilterModel | null): Tuple<V>;
    protected abstract evaluateNullValue(filterType?: ISimpleFilterModelType | null): boolean;
    protected abstract evaluateNonNullValue(range: Tuple<V>, cellValue: V, filterModel: M, params: IDoesFilterPassParams): boolean;
    protected abstract getInputs(position: number): Tuple<E>;
    protected abstract getValues(position: number): Tuple<V>;
    protected getNumberOfInputs(type?: ISimpleFilterModelType | null): number;
    onFloatingFilterChanged(type: string | null | undefined, value: V | null): void;
    private setTypeFromFloatingFilter;
    getModelFromUi(): M | ICombinedSimpleModel<M> | null;
    protected getConditionTypes(): (ISimpleFilterModelType | null)[];
    protected getConditionType(position: number): ISimpleFilterModelType | null;
    protected getJoinOperator(): JoinOperator;
    protected areModelsEqual(a: M | ICombinedSimpleModel<M>, b: M | ICombinedSimpleModel<M>): boolean;
    private shouldRefresh;
    refresh(newParams: SimpleFilterParams): boolean;
    protected setModelIntoUi(model: ISimpleFilterModel | ICombinedSimpleModel<M>): AgPromise<void>;
    doesFilterPass(params: IDoesFilterPassParams): boolean;
    protected setParams(params: SimpleFilterParams): void;
    private setNumConditions;
    private createOption;
    private createJoinOperatorPanel;
    private createJoinOperator;
    private createFilterListOptions;
    private putOptionsIntoDropdown;
    private createBoilerplateListOption;
    private createCustomListOption;
    protected createBodyTemplate(): string;
    protected getAgComponents(): ComponentSelector[];
    protected getCssIdentifier(): string;
    protected updateUiVisibility(): void;
    private updateNumConditions;
    private updateConditionStatusesAndValues;
    private shouldAddNewConditionAtEnd;
    private removeConditionsAndOperators;
    private removeElements;
    protected removeComponents<TEventType extends string>(components: Component<TEventType>[], startPosition: number, deleteCount?: number): void;
    afterGuiAttached(params?: IAfterGuiAttachedParams): void;
    afterGuiDetached(): void;
    private getPlaceholderText;
    protected resetPlaceholder(): void;
    protected setElementValue(element: E, value: V | null, fromFloatingFilter?: boolean): void;
    protected setElementDisplayed(element: E, displayed: boolean): void;
    protected setElementDisabled(element: E, disabled: boolean): void;
    protected attachElementOnChange(element: E, listener: () => void): void;
    protected forEachInput(cb: (element: E, index: number, position: number, numberOfInputs: number) => void): void;
    protected forEachPositionInput(position: number, cb: (element: E, index: number, position: number, numberOfInputs: number) => void): void;
    private forEachPositionTypeInput;
    private isConditionDisabled;
    private isConditionBodyVisible;
    protected isConditionUiComplete(position: number): boolean;
    private getNumConditions;
    private getUiCompleteConditions;
    private createMissingConditionsAndOperators;
    protected resetUiToDefaults(silent?: boolean): AgPromise<void>;
    private resetType;
    private resetJoinOperatorAnd;
    private resetJoinOperatorOr;
    private resetJoinOperator;
    private updateJoinOperatorsDisabled;
    private updateJoinOperatorDisabled;
    private resetInput;
    private setConditionIntoUi;
    private setValueFromFloatingFilter;
    private addChangedListeners;
    /** returns true if the row passes the said condition */
    protected individualConditionPasses(params: IDoesFilterPassParams, filterModel: M): boolean;
    protected hasInvalidInputs(): boolean;
}
