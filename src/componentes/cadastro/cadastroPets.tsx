import { Component } from "react";

type Props = {
    theme: string
}

export default class PetRegistrationForm extends Component<Props> {

    render() {
        let theme = this.props.theme
        return (
            <div className="container-fluid">
                <form>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Pet Name" aria-label="Pet Name" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Breed" aria-label="Breed" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1" style={{ background: theme }}>@</span>
                        <input type="text" className="form-control" placeholder="Owner's Email" aria-label="Owner's Email" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" style={{ background: theme }}>Register</button>
                    </div>
                </form>
            </div>
        )
    }
}