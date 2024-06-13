/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";

type Props = {
    tema: string;
};

export default class TopVendasServico extends Component<Props> {
    render() {
        const { tema} = this.props;
        return (
            <div className="container-fluid">
                <div className="list-group">
                {[
                        { name: "Serviço 1", sales: 100 },
                        { name: "Serviço 2", sales: 80 },
                        { name: "Serviço 3", sales: 60 },
                        { name: "Serviço 4", sales: 40 },
                        { name: "Serviço 5", sales: 20 }
                    ].map((Servico, index) => (
                        <a key={index} href="#" className="list-group-item">
                            <span className="badge">{Servico.sales}</span>
                            {Servico.name}
                        </a>
                    ))}
                </div>
            </div>
        );
    }
}