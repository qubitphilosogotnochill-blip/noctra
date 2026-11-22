const additionalIds = [
  'photo-1513694203232-719a280e022f',
  'photo-1507089947368-19c1da9775ae',
  'photo-1545324418-cc1a3fa10c00',
  'photo-1512915922686-57c11dde9b6b',
  'photo-1522708323590-d24dbb6b0267',
  'photo-1502672260266-1c1ef2d93688',
  'photo-1560448204-e02f11c3d0e2',
  'photo-1560185127-6ed189bf02f4',
  'photo-1560185007-cde436f6a4d0',
  'photo-1560184897-ae75f418493e',
  'photo-1505693416388-ac5ce068fe85',
  'photo-1505692794407-759089f928e4',
  'photo-1505691723518-36a5ac3be353',
  'photo-1505691938895-1758d7feb511',
  'photo-1598928506311-c55ded91a20c',
  'photo-1507652313519-d4e9174996dd',
  'photo-1506126613408-eca07ce68773',
  'photo-1515377905703-c4788e51af15',
  'photo-1536746803623-cef87080bfc8',
  'photo-1519710164239-da123dc03ef4',
  'photo-1534447677768-be436bb09401',
  'photo-1506905925346-21bda4d32df4',
  'photo-1470071459604-3b5ec3a7fe05',
  'photo-1464822759023-fed622ff2c3b',
  'photo-1486406146926-c627a92ad1ab',
  'photo-1513694203232-719a280e022f'
];

async function check() {
  for (const id of additionalIds) {
    const url = `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;
    try {
      const res = await fetch(url, { method: 'HEAD' });
      if (res.ok) {
        console.log(`OK: ${id}`);
      } else {
        console.log(`FAIL: ${id}`);
      }
    } catch (e) {
      console.log(`ERR: ${id}`);
    }
  }
}
check();
