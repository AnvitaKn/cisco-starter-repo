import React, { useState, useEffect } from 'react';

const PacketLatency = () => {
  const [latency, setLatency] = useState(0);
  const [ws, setWs] = useState(null);

  useEffect(() => {
    // Open websocket connection to Pylon
    const websocket = new WebSocket('ws://localhost:55455');

    // Set up event handlers for the websocket
    websocket.onopen = () => {
      console.log('Connected to Pylon');
    };
    websocket.onmessage = (event) => {
      // Calculate packet latency by subtracting the packet timestamp from the current time
      const packetTimestamp = event.data;
      const currentTime = Date.now();
      const packetLatency = currentTime - packetTimestamp;
      setLatency(packetLatency);
    };
    websocket.onerror = (error) => {
      console.error(error);
    };
    websocket.onclose = () => {
      console.log('Disconnected from Pylon');
    };

    setWs(websocket);
  }, []);

  return (
    <div>
      <p>Packet latency: {latency} ms</p>
    </div>
  );
};

export default PacketLatency;
