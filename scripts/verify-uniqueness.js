const imageMapping = {
  HOME_HERO: 'photo-1600585154340-be6161a56a0c',
  HOME_INTRO: 'photo-1590381105924-c72589b9ef3f',
  HOME_ARCH_TEASER: 'photo-1513694203232-719a280e022f',

  ARCH_HERO: 'photo-1600596542815-ffad4c1539a9',
  ARCH_DISAPPEARING: 'photo-1506744038136-46273834b3fb',
  ARCH_PILLAR_1: 'photo-1600607687920-4e2a09cf159d',
  ARCH_PILLAR_2: 'photo-1470071459604-3b5ec3a7fe05',
  ARCH_PILLAR_3: 'photo-1545324418-cc1a3fa10c00',
  ARCH_PILLAR_4: 'photo-1486406146926-c627a92ad1ab',

  EXP_HERO: 'photo-1576013551627-0cc20b96c2a7',
  EXP_SPA_MAIN: 'photo-1540555700478-4be289fbecef',
  EXP_SPA_G1: 'photo-1507652313519-d4e9174996dd',
  EXP_SPA_G2: 'photo-1515377905703-c4788e51af15',
  EXP_DINING_MAIN: 'photo-1517248135467-4c7edcad34c4',
  EXP_DINING_G1: 'photo-1550966871-3ed3cdb5ed0c',
  EXP_DINING_G2: 'photo-1578474846511-04ba529f0b88',
  EXP_ABYSS_MAIN: 'photo-1571896349842-33c89424de2d',
  EXP_ABYSS_G1: 'photo-1584132967334-10e028bd69f7',
  EXP_ABYSS_G2: 'photo-1572331165267-854da2b10ccc',
  EXP_EXPEDITION_MAIN: 'photo-1464822759023-fed622ff2c3b',
  EXP_EXPEDITION_G1: 'photo-1519681393784-d120267933ba',
  EXP_EXPEDITION_G2: 'photo-1501785888041-af3ef285b470',
  EXP_SILENT_MAIN: 'photo-1506126613408-eca07ce68773',
  EXP_SILENT_G1: 'photo-1518241353330-0f7941c2d9b5',
  EXP_SILENT_G2: 'photo-1528715471579-d1bcf0ba5e83',

  SUITE_1_IMG_1: 'photo-1618773928121-c32242e63f39',
  SUITE_1_IMG_2: 'photo-1582719478250-c89cae4dc85b',
  SUITE_1_IMG_3: 'photo-1566073771259-6a8506099945',
  SUITE_1_IMG_4: 'photo-1582719508461-905c673771fd',

  SUITE_2_IMG_1: 'photo-1600607687939-ce8a6c25118c',
  SUITE_2_IMG_2: 'photo-1512915922686-57c11dde9b6b',
  SUITE_2_IMG_3: 'photo-1522708323590-d24dbb6b0267',
  SUITE_2_IMG_4: 'photo-1502672260266-1c1ef2d93688',

  SUITE_3_IMG_1: 'photo-1512917774080-9991f1c4c750',
  SUITE_3_IMG_2: 'photo-1613977257363-707ba9348227',
  SUITE_3_IMG_3: 'photo-1578683010236-d716f9a3f461',
  SUITE_3_IMG_4: 'photo-1560448204-e02f11c3d0e2',

  SUITE_4_IMG_1: 'photo-1566665797739-1674de7a421a',
  SUITE_4_IMG_2: 'photo-1560185127-6ed189bf02f4',
  SUITE_4_IMG_3: 'photo-1560185007-cde436f6a4d0',
  SUITE_4_IMG_4: 'photo-1560184897-ae75f418493e',

  SUITE_5_IMG_1: 'photo-1600565193348-f74bd3c7ccdf',
  SUITE_5_IMG_2: 'photo-1600585154526-990dced4db0d',
  SUITE_5_IMG_3: 'photo-1600607687644-c7171b42498f',
  SUITE_5_IMG_4: 'photo-1542314831-068cd1dbfeeb',

  GALLERY_1: 'photo-1507089947368-19c1da9775ae',
  GALLERY_2: 'photo-1536746803623-cef87080bfc8',
  GALLERY_3: 'photo-1505693416388-ac5ce068fe85',
  GALLERY_4: 'photo-1505691723518-36a5ac3be353',
  GALLERY_5: 'photo-1551632811-561732d1e306',
  GALLERY_6: 'photo-1505691938895-1758d7feb511',
  GALLERY_7: 'photo-1598928506311-c55ded91a20c',
  GALLERY_8: 'photo-1600210492486-724fe5c67fb0',
  GALLERY_9: 'photo-1534447677768-be436bb09401',
  GALLERY_10: 'photo-1600585152220-90363fe7e115',
  GALLERY_11: 'photo-1600573472550-8090b5e0745e',
  GALLERY_12: 'photo-1506905925346-21bda4d32df4',
  GALLERY_13: 'photo-1600585154363-67eb9e2e2099',
  GALLERY_14: 'photo-1600566753190-17f0baa2a6c3',
  GALLERY_15: 'photo-1618221195710-dd6b41faaea6',
  GALLERY_16: 'photo-1616486338812-3dadae4b4ace',
};

const values = Object.values(imageMapping);
const uniqueSet = new Set(values);

console.log(`Total slots: ${values.length}`);
console.log(`Unique values: ${uniqueSet.size}`);

if (values.length !== uniqueSet.size) {
  console.error('ERROR: Duplicate images found!');
  const counts = {};
  for (const v of values) {
    counts[v] = (counts[v] || 0) + 1;
    if (counts[v] > 1) console.log(`Duplicate found: ${v}`);
  }
  process.exit(1);
} else {
  console.log('SUCCESS: All 61 images are 100% completely unique across the entire site!');
}
