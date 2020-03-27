import React, { Component } from 'react';
import { Button, Input, Modal } from 'semantic-ui-react'

class InputModal extends Component {
    state = { open: false }

    close = () => { this.setState({open: false})}
    render() {
        const { open } = this.state
        return (
            <div>
                <Modal
                open={open}
                onClose={this.close}
                >
                    <Modal.Header>Input</Modal.Header>
                    <Modal.Content>
                    <Input focus size='huge' fluid placeholder='Please Input Your To-do' />
                    </Modal.Content>
                    <Modal.Actions>
                    <Button
                        onClick={this.close}
                        negative
                        content='Cancel'
                    />
                    <Button
                        onClick={this.close}
                        positive
                        labelPosition='right'
                        icon='checkmark'
                        content='Add'
                    />
                    </Modal.Actions>
                </Modal>
            </div>
        );
    }
}

export default InputModal;