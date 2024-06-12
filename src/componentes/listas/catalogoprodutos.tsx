/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";

type Props = {
    tema: string
}

export default class CatalogoProdutos extends Component<Props>{
    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
            <div className="list-group">
                <a href="#" className="list-group-item list-group-item-action">Produto 1</a>
                <a href="#" className="list-group-item list-group-item-action">Produto 2</a>
                <a href="#" className="list-group-item list-group-item-action">Produto 3</a>
                <a href="#" className="list-group-item list-group-item-action">Produto 4</a>
                <a href="#" className="list-group-item list-group-item-action">Produto 5</a>
                <a href="#" className="list-group-item list-group-item-action">Produto 6</a>
            </div>
            </div>
        )
    }
}