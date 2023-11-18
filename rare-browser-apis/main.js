// Page Visibility API
const video = document.getElementById('video');

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
    video.play();
    console.log('play');
  } else {
    video.pause();
    console.log('pause');
  }
});

let quoteText;
const quote = document.getElementById('quote');

const broadcastChannel = new BroadcastChannel('quote_channel');

const getQuote = async () => {
  if (document.visibilityState !== 'visible') return;
  try {
    const res = await fetch('https://api.quotable.io/random');
    const { content, author, dateAdded } = await res.json();
    const parsedQuote = `<p>${content}</p><br><p>- ${author}</p><br><p>Added on ${formatDate(
      dateAdded
    )}</p>`;
    quote.innerHTML = parsedQuote;
    quoteText = parsedQuote;
    broadcastChannel.postMessage(parsedQuote);
  } catch (e) {
    console.error(e);
  }
};

setInterval(getQuote, 11000);

// Web Share API
const shareButton = document.getElementById('share-button');

const share = async (data) => {
  try {
    await navigator.share(data);
  } catch (e) {
    console.error(e);
  }
};

shareButton.addEventListener('click', () => {
  const data = {
    title: 'A meaningful quote',
    text: quoteText,
    url: location.href,
  };

  share(data);
});

// Broadcast Channel API
const broadcast_channel = new BroadcastChannel('custom_broadcast');

broadcast_channel.postMessage('New custom message');

broadcast_channel.addEventListener('message', ({ data, origin }) => {
  console.log(`${origin} post ${data}`);
});

// Internationalization API
const logDate = (locale = []) => {
  const date = new Date('2022-11-10');
  const dateTime = new Intl.DateTimeFormat(locale, { timeZone: 'UTC' });
  const formattedDate = dateTime.format(date);
  console.log(formattedDate);
};

logDate();
logDate('en-US');
logDate('de-DE');
logDate('zh-TW');

function formatDate(dateString) {
  const date = new Date(dateString);
  const dateTime = new Intl.DateTimeFormat([], { timeZone: 'UTC' });
  return dateTime.format(date);
}

const getDateWithHoursAndMinutes = (date) =>
  new Intl.DateTimeFormat([], {
    dateStyle: 'short',
    timeStyle: 'short',
  }).format(date);

console.log(getDateWithHoursAndMinutes(new Date()));
