function createWebSocket() {
  const socket = new WebSocket('ws://localhost:3000');

  socket.addEventListener('open', () => {
    console.log("web socket is now open")
  });

  socket.addEventListener('message', (msg) => {
    const script = document.currentScript || (function () {
      const scripts = document.getElementsByTagName('script');
      return scripts[scripts.length - 1];
    })();

    const url = new URL(script.src);
    const version = url.searchParams.get('version');
    if (parseInt(msg.data) === version)
      return;
    location.reload();
  })

  socket.addEventListener('close', () => {
    console.log("closed web socket")
    create();
  });

  return socket
}

createWebSocket();