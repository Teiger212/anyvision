import React, { Component } from 'react';

import './Modal.scss';

import Wrapper from '../../../hoc/wrapper';

import Backdrop from '../Backdrop/Backdrop';

class modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show;
    }

    render() {
        return (
            <Wrapper>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div className='modal' style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'
                }}>
                    {this.props.children}
                </div>
            </Wrapper>
        )
    }
}

export default modal;