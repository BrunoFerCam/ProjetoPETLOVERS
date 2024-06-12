/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";

type Props = {
    tema: string
}

export default class ListaPets extends Component<Props> {
    render() {
        const tema = this.props.tema;
        const petNames = ["Pet 1", "Pet 2", "Pet 3", "Pet 4", "Pet 5", "Pet 6"];

        return (
            <div className="container-fluid">
                <div className="list-group">
                    {petNames.map((petName, index) => (
                        <a key={index} href="#" className="list-group-item list-group-item-action">
                            {petName}
                        </a>
                    ))}
                </div>
            </div>
        );
    }
}