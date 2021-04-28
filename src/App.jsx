import React, { useState, useEffect, useCallback } from 'react';

import OrderPage from './pages/OrderPage';
import NetworkStatus from './components/NetworkStatus';
import { updateData } from './utils/utils';

import './App.css';

const App = () => {
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState();

  const updateOrderList = useCallback((data) => {
    setOrders(oldArray => updateData({ oldArray, data }));
  }, [setOrders]);

  useEffect(() => {
    const eventSource = new EventSource("http://localhost:8080");
    eventSource.addEventListener('order_event', (e) => {
      updateOrderList(JSON.parse(e.data));
    });

    // listen when connection is open
    eventSource.addEventListener('open', () => {
      setStatus('open');
      setTimeout(() => setStatus(), 1500);
    });

    // listen when having network issues
    eventSource.addEventListener('error', () => {
      setStatus('error');
    });
  }, []);

  return <>
    <NetworkStatus status={status} />
    <OrderPage data={orders} />
  </>
}

export default App;
