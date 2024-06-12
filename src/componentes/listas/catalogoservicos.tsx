/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";

type Props = {
    tema: string;
};

export default class ServiceList extends Component<Props> {
    render() {
        const theme = this.props.tema;
        return (
            <div className="container-fluid">
            <div className="list-group">
                <a href="#" className="list-group-item list-group-item-action">
                Serviço 1
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                Serviço 2
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                Serviço 3
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                Serviço 4
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                Serviço 5
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                Serviço 6
                </a>
            </div>
            </div>
        );
    }
}