import React,{Component} from 'react';
import {Card,Button,Table} from 'react-bootstrap';

class MonFooter extends Component {

    constructor(props){
        super(props);
    }


    render (){
        return (
            <div>
                <Card className="bg-dark text-white" id="monFooter">
                        <Card.Text>
                            <Table className="text-white" borderless>
                                <container id="centre">
                                <tr>
                                    <th>Retrouvez-nous au :</th>
                                    <th>         </th>
                                    <th>Du :</th>
                                </tr>
                                <tr>
                                    <td>37 Quai de Grenelle,<br/>75015 Paris</td>
                                    <th>           </th>
                                    <td>Lundi au vendredi de 9h à 20h,<br/>puis le weekend sur rendez-vous</td>
                                </tr>
                                </container>
                            </Table>
                        </Card.Text>
                </Card>
            </div>
        );
    }
}

export default MonFooter;
