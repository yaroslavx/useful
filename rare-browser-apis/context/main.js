const quote = document.getElementById('quote');
const broadcastChannel = new BroadcastChannel('quote_channel');

broadcastChannel.addEventListener('message', ({ data }) => {
  quote.innerHTML = data;
});
