import * as React from "react";
import { Button } from 'office-ui-fabric-react/lib/Button';

export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Hello extends React.Component<any, any> {
    render() {
        return <div><Button>I am a button.</Button></div>;
    }
}