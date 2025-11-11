export async function getCryptoTickers() {
  const url =
    'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=inr&include_24hr_change=true';
  const res = await fetch(url);
  if (!res.ok) throw new Error('Crypto API error');
  return res.json();
}

export async function getStockDemo() {
  const url =
    'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=demo';
  const res = await fetch(url);
  if (!res.ok) throw new Error('Stock API error');
  return res.json();
}
