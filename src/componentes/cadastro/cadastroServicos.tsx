import { Component } from "react";

type Props = {
    theme: string
}

export default class FormularioCadastroServicos extends Component<Props> {

    render() {
        let theme = this.props.theme
        return (
            <div className="container-fluid">
                <form>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Service Name" aria-label="Service Name" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Service Description" aria-label="Service Description" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1" style={{ background: theme }}>@</span>
                        <input type="text" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" style={{ background: theme }}>Add Service</button>
                    </div>
                </form>
            </div>
        )
    }
}