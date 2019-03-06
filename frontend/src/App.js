import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Theme from './Theme'
import Dashboard from './Dashboard'
import { ThemeProvider } from '@material-ui/styles'
import { ApiContext, endpoints } from './contexts/ApiContext'
import { SettingsProvider } from './contexts/SettingsContext'
import { StoreProvider } from './contexts/StoreContext'

const App = props => {
    return (
        <Router>
            <ApiContext.Provider value={ endpoints }>
                <ThemeProvider theme={ Theme }>
                    <StoreProvider>
                        <SettingsProvider>
                            <Dashboard />
                        </SettingsProvider>
                    </StoreProvider>
                </ThemeProvider>
            </ApiContext.Provider>
        </Router>
    )
}

export default App