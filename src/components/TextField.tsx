import * as React from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { autobind } from 'office-ui-fabric-react/lib/Utilities';

export class TextFieldBasicExample extends React.Component<any, any> {
  public render() {
    return (
      <div>
        <TextField label='Kommentar' placeholder='Skrive en kommentar' ariaLabel='Please enter text here' multiline autoAdjustHeight />
      </div>
    );
  }
}