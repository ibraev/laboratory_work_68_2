import React, {Component, Fragment} from 'react'
import Modal from "../../components/UI/Modal/Modal";


const withErrorHandler = (WrappedComponent,axios) => {
    return class WithErrorHOC extends Component {

        constructor(props) {
            super();

            this.state = {
                error:null
            };

            this.state.interceptorId = axios.interceptors.response.use(res => res, error => {
                this.setState({error});
                throw error
            });
        }

        componentWillUnmount() {
            axios.interceptors.response.eject(this.state.interceptorId)
        }

        errorDismissed = () => {
            this.setState({error:null})
        };



        render() {

            return (
                <Fragment>
                    <Modal show={this.state.error} close={this.errorDismissed}>
                        {this.state.error ? this.state.error.message: null}
                        </Modal>
                    <WrappedComponent{...this.props}/>;
                </Fragment>
            )
        }

    }

};

export default withErrorHandler;
