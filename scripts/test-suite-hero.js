const ids = [
  'photo-1618219908412-a29a1bb7b86e',
  'photo-1618219740975-d40978bb7378',
  'photo-1617806118233-18e1de247200',
  'photo-1617103996702-96ff29b1c467',
  'photo-1617104551722-3b2d51366400',
  'photo-1616594039964-ae9021a400a0',
  'photo-1616046229478-9901c5536a45'
];

async function run() {
  for (const id of ids) {
    const res = await fetch(`https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=80`, { method: 'HEAD' });
    console.log(id, res.status);
  }
}
run();
