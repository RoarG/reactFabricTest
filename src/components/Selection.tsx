import * as React from 'react';

import { Check } from 'office-ui-fabric-react/lib/Check';
import { IContextualMenuItem } from 'office-ui-fabric-react/lib/ContextualMenu';

import {
  IObjectWithKey,
  ISelection,
  Selection,
  SelectionMode,
  SelectionZone
} from 'office-ui-fabric-react/lib/Selection';
import { createListItems } from '@uifabric/example-app-base';

import '../dist/Selection.css';


export interface ISelectionBasicExampleState {
  items?: any[];
  selection?: ISelection;
  selectionMode?: SelectionMode;
  canSelect?: string;
}

export interface ISelectionItemExampleProps {
  item?: any;
  itemIndex?: number;
  selection?: ISelection;
  selectionMode?: SelectionMode;
}

/**
 * The SelectionBasicExample controls the selection state of all items
 */
export class SelectionBasicExample extends React.Component<any, ISelectionBasicExampleState> {
  private _hasMounted: boolean;

  constructor() {
    super();

    this._hasMounted = false;
    this._onSelectionChanged = this._onSelectionChanged.bind(this);
    this._onSelectionModeChanged = this._onSelectionModeChanged.bind(this);
    this._onToggleSelectAll = this._onToggleSelectAll.bind(this);
    this._onCanSelectChanged = this._onCanSelectChanged.bind(this);
    this._canSelectItem = this._canSelectItem.bind(this);

    this.state = {
      items: [{ name: 'Godkjenning',
                key: 'gk'},{
                name: 'QA',
                key: 'qa'}],
      selection: new Selection({ onSelectionChanged: this._onSelectionChanged }),
      selectionMode: SelectionMode.multiple,
      canSelect: 'all'
    };
    this.state.selection.setItems(this.state.items as IObjectWithKey[], false);
  }
 

  public componentDidMount() {
    this._hasMounted = true;
  }

  public render() {
    let { items, selection, selectionMode } = this.state;

    return (
      <div className='ms-SelectionBasicExample'>
        
      
          <SelectionZone
            selection={ selection }
            selectionMode={ selectionMode }
            onItemInvoked={ (item) => alert('item invoked: ' + item.name) }>
            { items.map((item, index) => (
              <SelectionItemExample
                ref={ 'detailsGroup_' + index }
                key={ item.key }
                item={ item }
                itemIndex={ index }
                selectionMode={ selectionMode }
                selection={ selection }
              />
            )) }
          </SelectionZone>
      
      </div>
    );
  }

  private _onSelectionChanged() {
    if (this._hasMounted) {
      this.forceUpdate();
    }
  }

  private _onToggleSelectAll() {
    let { selection } = this.state;
    selection.toggleAllSelected();
  }

  private _onSelectionModeChanged(ev: React.MouseEvent<HTMLElement>, menuItem: IContextualMenuItem) {
    this.setState({
      selectionMode: menuItem.data
    });
  }

  private _onCanSelectChanged(ev: React.MouseEvent<HTMLElement>, menuItem: IContextualMenuItem) {
    let canSelectItem = (menuItem.data === 'vowels') ? this._canSelectItem : undefined;
    let newSelection = new Selection({ onSelectionChanged: this._onSelectionChanged, canSelectItem: canSelectItem });
    newSelection.setItems(this.state.items as IObjectWithKey[], false);
    this.setState({
      selection: newSelection,
      canSelect: (menuItem.data === 'vowels') ? 'vowels' : 'all'
    });
  }

  private _canSelectItem(item: any): boolean {
    return item.name && (item.name.indexOf('a') === 0 || item.name.indexOf('e') === 0 || item.name.indexOf('i') === 0 || item.name.indexOf('o') === 0 || item.name.indexOf('u') === 0);
  }

  
  }


/**
 * The SelectionItemExample controls and displays the selection state of a single item
 */
export class SelectionItemExample extends React.Component<ISelectionItemExampleProps, {}> {
  public render() {
    let { item, itemIndex, selection, selectionMode } = this.props;
    let isSelected = selection.isIndexSelected(itemIndex);

    return (
      <div className='ms-SelectionItemExample' data-selection-index={ itemIndex }>
        { (selectionMode !== SelectionMode.none) && (
          <div className='ms-SelectionItemExample-check' data-selection-toggle={ true } >
            <Check checked={ isSelected } />
          </div>
        ) }
        <span className='ms-SelectionItemExample-name'>
          { item.name }
        </span>
      </div>
    );
  }
}