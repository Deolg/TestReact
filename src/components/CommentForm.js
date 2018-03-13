import PropTypes from 'prop-types';
import React, { Component } from 'react';
import '../css/customer.css'

class UserForm extends Component {
    state = {
        user: '',
        text: ''
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSave} action="/">
                    <p>
                        <input value={this.state.user}
                            onChange={this.handleChange('user')}
                            className={this.getClassName('user')} />
                    </p>



                    <p>
                        <textarea rows="10" cols="45" value={this.state.text}
                            onChange={this.handleChange('text')}
                            className={this.getClassName('text')} />
                    </p>

                    <input type="submit" />
                </form>
            </div>
        );
    }

    handleSave = () => {
        this.setState({
            user: '',
            text: ''
        })
    }

    handleChange = type=> event => {
        const val = event.target.value;
        if (val.length > rule[type].max) return

        this.setState({
            [type]: val,
        })
    }

    getClassName = type => {
        const fieldLen = this.state[type].length,
        min = rule[type].min
        return (fieldLen && fieldLen<min )?'error':''
    }
}

const rule = {
    user: {
        min: 10,
        max: 15
    },

    text: {
        min: 20,
        max: 50,
    }
}

UserForm.propTypes = {};

export default UserForm;