import React, { useState, useEffect } from 'react';

import Preloader from 'some-ui-kit-library/Preloader';

import { getToken, setToken, removeToken, isExpired } from './index';
import api from 'api';

type Props = {
    children: ReactNode
}

const WithAuth = ({ children }) => {
    const [tokenFetchingStatus, setTokenFetchingStatus] = useState<boolean>(true)
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

    useEffect(() => {
        const fetchToken = async () => {
            try {
                removeToken()

                const access_token = await api.get.token()

                setToken(access_token)
                setIsAuthenticated(true)
                setTokenFetchingStatus(false)
            } catch (err) {
                const msg = err instanceof Error ? err.message : "Unknown Error: api.get.token"

                window.location.assign(`/loginpage/?from=${window.location.pathname}`)
            }
        };

        if (tokenFetchingStatus) {
            const token = getToken()

            if (token && !isExpired(token.timestamp)) {
                setIsAuthenticated(true)
                setTokenFetchingStatus(false)
            } else {
                fetchToken()
            }
        }
    }, [tokenFetchingStatus])

    const renderContent = () => {
        return isAuthenticated ? children : null
    }

    return <div>{tokenFetchingStatus}</div>
}

export default WithAuth

// Usage
{/* <WithAuth>
  <SomePage />
</WithAuth> */}