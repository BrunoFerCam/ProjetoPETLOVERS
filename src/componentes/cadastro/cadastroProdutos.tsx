import { Component } from "react";

type Props = {
    tema: string;
    name: string;
    price: number;
    // Add more properties for product information
};

export default class FormularioCadastroProduto extends Component<Props> {

    render() {
        const { tema, name, price } = this.props;
        return (
            <div className="container-fluid">
                <form>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="number" className="form-control" placeholder="Price" aria-label="Price" aria-describedby="basic-addon1" />
                    </div>
                    {/* Add more input fields for product information */}
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>@</span>
                        <input type="text" className="form-control" placeholder="E-mail" aria-label="E-mail" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Add Product</button>
                    </div>
                </form>
            </div>
        )
    }
}