import React, { Component } from 'react'
import styles from './Stream.css'
import {Button,Jumbotron} from 'react-bootstrap'
export class Stream extends Component {
  render() {
    return (
        <div>
            <Jumbotron className={styles.btn_container}>
                <Button bsStyle="primary" block>
                Block level button
                </Button>
                <Button bsStyle="primary" block>
                Block level button
                </Button>
                <Button bsStyle="primary" block>
                Block level button
                </Button>
                <Button bsStyle="primary" block>
                Block level button
                </Button>
                <Button bsStyle="primary" block>
                Block level button
                </Button>
                <Button bsStyle="primary" block>
                Block level button
                </Button>
                <Button bsStyle="primary" block>
                Block level button
                </Button>
            </Jumbotron>

        </div>
    )
  }
}

export default Stream
