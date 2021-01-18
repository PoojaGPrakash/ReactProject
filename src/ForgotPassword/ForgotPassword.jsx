import React from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';

// import { userActions } from '../actions';


class ForgotPassword extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            user: {
                email: '',
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        if (user.email) {
            this.props.register(user);
        }
    }

    render() {
        const { forgotpasswordpage  } = this.props;
        const { user, submitted } = this.state;
        return (
            <div className="col-md-12 register_block">
                <div className="register_div">
                <h3 className="mt-0">RESET PASSWORD</h3>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !email ? ' has-error' : '')}>
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" name="email" value={user.email} onChange={this.handleChange} />
                            {submitted && !user.email &&
                                <div className="help-block">Email is required</div>
                            }
                        </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Submit</button>
                        <Link to="/login" className="btn btn-link">Go back to Sign in page</Link>
                    </div>
                </form>
                </div>
            </div>
        );
    }
}

// function mapState(state) {
//     const { forgotpasswordpage } = state.forgotpassword;
//     return { forgotpasswordpage };
// }

// const actionCreators = {
//     forgotpassword: userActions.forgotpassword
// }

const connectedForgotPasswordPage = (ForgotPassword);
export { connectedForgotPasswordPage as ForgotPassword };