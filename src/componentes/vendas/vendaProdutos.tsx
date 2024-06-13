import { Component } from "react";

type Props = {
    tema: string;
};

export default class VendaProdutos extends Component<Props> {
    render() {
        const { tema } = this.props;
        return (
            <div className="container-fluid">
                <form>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome do produto" aria-label="Nome do produto" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="number" className="form-control" placeholder="Quantidade" aria-label="Quantidade" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome do cliente" aria-label="Nome do cliente" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="E-mail do cliente" aria-label="E-mail do cliente" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Registrar venda</button>
                    </div>
                </form>
            </div>
        );
    }
}