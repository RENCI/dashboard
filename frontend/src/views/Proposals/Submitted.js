import React, { Component } from 'react'
import axios from 'axios'
import Heading from '../../components/Typography/Heading'

import ProposalsMatrix from '../../components/Charts/ProposalsMatrixSubmitted'
import Spinner from '../../components/Spinner/Spinner'

const proposalsUrl = process.env.NODE_ENV === 'production' ? 'https://pmd.renci.org/api/proposals/submitted-services' : 'http://localhost:3030/proposals/submitted-services'
const servicesUrl = process.env.NODE_ENV === 'production' ? 'https://pmd.renci.org/api/services/submission' : 'http://localhost:3030/services/submission'

class proposalsByApproval extends Component {
    state = {
        proposals: [],
        services: [],
    }

    componentDidMount() {
        const proposalsPromise = axios.get(proposalsUrl)
        const servicesPromise = axios.get(servicesUrl)
        Promise.all([proposalsPromise, servicesPromise])
            .then((response) => {
                this.setState({
                    proposals: response[0].data,
                    services: response[1].data,
                })
            })
            .catch(error => {
                console.error('Error:', error)
            })
    }

    render() {
        const { proposals, services } = this.state
        return (
            <div>
                <Heading>Submitted Proposals</Heading>

                <br/>
                
                {
                    (proposals.length > 0 && services.length > 0)
                    ? <ProposalsMatrix proposals={ proposals } services={ services }/>
                    : <Spinner/>
                }
                
            </div>
        )
    }
}

export default proposalsByApproval