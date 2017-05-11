import * as React from 'react';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel';
import { DatePickerRequiredExample } from './DatePicker';
import { TextFieldBasicExample } from './TextField';
import { DocumentCardCompactExample } from './DocumentCard';
import { SelectionBasicExample } from './Selection';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';


export class MediumPanel extends React.Component<any, any> {

  constructor() {
    super();
    this.state = { showPanel: false };
  }


  public render() {
 
    return (
      <div>
        <DefaultButton
          description='Opens the Sample Panel'
          onClick={ () => this.setState({ showPanel: true }) }
          text='Open Panel'
        />
        <Panel
          isOpen={ this.state.showPanel }
          onDismiss={ () => this.setState({ showPanel: false }) }
          type={ PanelType.medium }
          headerText='Godkjenning og Kvalitetsikkring'
        >
          <span className='ms-font-m'>
              <DocumentCardCompactExample/>
              <SelectionBasicExample/>
              <DatePickerRequiredExample/>              
              <TextFieldBasicExample/>
              <div><PrimaryButton>Send</PrimaryButton><DefaultButton>Avbryt</DefaultButton> </div>
          </span>
        </Panel>
      </div>
    );
  }
}