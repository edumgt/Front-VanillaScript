import { BeanStub } from '../../context/beanStub';
import type { AgColumn } from '../../entities/agColumn';
import type { AgColumnGroup } from '../../entities/agColumnGroup';
import type { BrandedType } from '../../interfaces/brandedType';
import type { ColumnPinnedType } from '../../interfaces/iColumn';
import type { AbstractHeaderCellCtrl } from '../cells/abstractCell/abstractHeaderCellCtrl';
import type { HeaderRowType } from './headerRowComp';
export interface IHeaderRowComp {
    setTop(top: string): void;
    setHeight(height: string): void;
    setHeaderCtrls(ctrls: AbstractHeaderCellCtrl[], forceOrder: boolean, afterScroll: boolean): void;
    setWidth(width: string): void;
}
export type HeaderRowCtrlInstanceId = BrandedType<number, 'HeaderRowCtrlInstanceId'>;
export declare class HeaderRowCtrl extends BeanStub {
    readonly rowIndex: number;
    readonly pinned: ColumnPinnedType;
    readonly type: HeaderRowType;
    readonly instanceId: HeaderRowCtrlInstanceId;
    private comp;
    headerRowClass: string;
    private headerCellCtrls;
    private isPrintLayout;
    private isEnsureDomOrder;
    constructor(rowIndex: number, pinned: ColumnPinnedType, type: HeaderRowType);
    postConstruct(): void;
    /** Checks that every header cell that is currently visible has been rendered.
     * Can only be false under some circumstances when using React
     */
    areCellsRendered(): boolean;
    /**
     *
     * @param comp Proxy to the actual component
     * @param initCompState Should the component be initialised with the current state of the controller. Default: true
     */
    setComp(comp: IHeaderRowComp, compBean: BeanStub | undefined, initCompState?: boolean): void;
    getAriaRowIndex(): number;
    private addEventListeners;
    getHeaderCellCtrl(column: AgColumn | AgColumnGroup): AbstractHeaderCellCtrl | undefined;
    private onDisplayedColumnsChanged;
    private setWidth;
    private getWidthForRow;
    private onRowHeightChanged;
    getTopAndHeight(): {
        topOffset: number;
        rowHeight: number;
    };
    private onVirtualColumnsChanged;
    getHeaderCtrls(): AbstractHeaderCellCtrl<import("../cells/abstractCell/abstractHeaderCellCtrl").IAbstractHeaderCellComp, AgColumn<any> | AgColumnGroup<any>, import("../cells/abstractCell/abstractHeaderCellCtrl").IHeaderResizeFeature>[];
    private getHeaderCellCtrls;
    private recycleAndCreateHeaderCtrls;
    private getColumnsInViewport;
    private getColumnsInViewportPrintLayout;
    private getActualDepth;
    private getColumnsInViewportNormalLayout;
    findHeaderCellCtrl(column: AgColumn | AgColumnGroup | ((cellCtrl: AbstractHeaderCellCtrl) => boolean)): AbstractHeaderCellCtrl | undefined;
    focusHeader(column: AgColumn | AgColumnGroup, event?: KeyboardEvent): boolean;
    destroy(): void;
}
