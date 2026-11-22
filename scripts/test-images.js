// Curated list of high-quality architectural, cavern, stone interior, and pool images
const candidateImages = [
  // Group 1: Subterranean Architecture & Facades
  'photo-1600585154340-be6161a56a0c', // 01
  'photo-1600596542815-ffad4c1539a9', // 02
  'photo-1600607687939-ce8a6c25118c', // 03
  'photo-1600607687920-4e2a09cf159d', // 04
  'photo-1600565193348-f74bd3c7ccdf', // 05
  'photo-1600585154526-990dced4db0d', // 06
  'photo-1600607687644-c7171b42498f', // 07
  'photo-1513694203232-719a280e022f', // 08
  'photo-1506744038136-46273834b3fb', // 09
  'photo-1518241353330-0f7941c2d9b5', // 10
  
  // Group 2: Underground Pools & Thermal Waters
  'photo-1576013551627-0cc20b96c2a7', // 11
  'photo-1571896349842-33c89424de2d', // 12
  'photo-1584132967334-10e028bd69f7', // 13
  'photo-1540555700478-4be289fbecef', // 14
  'photo-1507652313519-d4e9174996dd', // 15
  'photo-1515377905703-c4788e51af15', // 16
  'photo-1572331165267-854da2b10ccc', // 17
  'photo-1566073771259-6a8506099945', // 18
  'photo-1582719508461-905c673771fd', // 19
  'photo-1578683010236-d716f9a3f461', // 20

  // Group 3: Cavern & Raw Stone Textures & Interiors
  'photo-1590381105924-c72589b9ef3f', // 21
  'photo-1618773928121-c32242e63f39', // 22
  'photo-1582719478250-c89cae4dc85b', // 23
  'photo-1512917774080-9991f1c4c750', // 24
  'photo-1613977257363-707ba9348227', // 25
  'photo-1566665797739-1674de7a421a', // 26
  'photo-1542314831-068cd1dbfeeb', // 27
  'photo-1540518614846-7ede433c4ef5', // 28
  'photo-1506126613408-eca07ce68773', // 29
  'photo-1528715471579-d1bcf0ba5e83', // 30

  // Group 4: Dining, Cellars, Lounge & Details
  'photo-1517248135467-4c7edcad34c4', // 31
  'photo-1550966871-3ed3cdb5ed0c', // 32
  'photo-1578474846511-04ba529f0b88', // 33
  'photo-1551632811-561732d1e306', // 34
  'photo-1519681393784-d120267933ba', // 35
  'photo-1464822759023-fed622ff2c3b', // 36
  'photo-1501785888041-af3ef285b470', // 37
  'photo-1511497584788-87676104235f', // 38
  'photo-1507525428034-b723cf961d3e', // 39
  'photo-1519710164239-da123dc03ef4', // 40

  // Group 5: Additional Luxury & Minimalist Perspectives
  'photo-1505691938895-1758d7feb511', // 41
  'photo-1512918728675-ed5a9ecdebfd', // 42
  'photo-1600210492486-724fe5c67fb0', // 43
  'photo-1600585152220-90363fe7e115', // 44
  'photo-1600573472550-8090b5e0745e', // 45
  'photo-1600565193348-f74bd3c7ccdf', // wait, check duplicates!
  'photo-1600585154363-67eb9e2e2099', // 46
  'photo-1600607687939-ce8a6c25118c', // check duplicate
  'photo-1600566753190-17f0baa2a6c3', // 47
  'photo-1600585152220-90363fe7e115', // check duplicate
  'photo-1600585154526-990dced4db0d', // check duplicate
  'photo-1600596542815-ffad4c1539a9', // check duplicate
  'photo-1618221195710-dd6b41faaea6', // 48
  'photo-1616486338812-3dadae4b4ace', // 49
  'photo-1616046229478-9901c5536a45', // 50
  'photo-1616594039964-ae9021a400a0', // 51
  'photo-1617806118233-18e1de247200', // 52
  'photo-1617103996702-96ff29b1c467', // 53
  'photo-1617104551722-3b2d51366400', // 54
  'photo-1618219908412-a29a1bb7b86e', // 55
  'photo-1618219740975-d40978bb7378', // 56
];

const uniqueIds = Array.from(new Set(candidateImages));
console.log(`Found ${uniqueIds.length} completely unique candidate IDs out of ${candidateImages.length}`);

// Test fetch headers for each
async function testUrls() {
  let valid = 0;
  for (const id of uniqueIds) {
    const url = `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;
    try {
      const res = await fetch(url, { method: 'HEAD' });
      if (res.ok) {
        valid++;
      } else {
        console.log(`Failed: ${id} (${res.status})`);
      }
    } catch (err) {
      console.log(`Error on ${id}: ${err.message}`);
    }
  }
  console.log(`Valid images reachable: ${valid} / ${uniqueIds.length}`);
}

testUrls();
