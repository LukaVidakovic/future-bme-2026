export interface Paper {
  id: string;
  title: string;
  authors: string;
}

// Mapping paper IDs to filenames
const filenameMap: Record<string, string> = {
  '001': '001-Rosietall.pdf', '002': '002Vujovicetall.pdf', '003': '003_Fabris_et_all.pdf',
  '004': '004-Eric_et_all.pdf', '005': '005-Stankovic_et_all.pdf', '006': '006-Anisic_et_all.pdf',
  '007': '007-Djuricic_et_all.pdf', '008': '008-Sitarevic_et_all-1.pdf', '009': '009-Mitrovic_et_all.pdf',
  '010': '010-Vorina_et_all.pdf', '011': '011-Stevanovic_et_all.pdf', '012': '012-Grebic_et_all.pdf',
  '013': '013-Milosevic_et_all.pdf', '014': '014-Milosevic_et_all.pdf', '015': '015-Ratic_et_all.pdf',
  '016': '016-Slavic_et_all.pdf', '017': '017-Lecic.pdf', '018': '018-Pavlovic_et_all.pdf',
  '019': '019-Smaiya_et_all.pdf', '020': '020-Joseph_et_all.pdf', '021': '021-Fominykh_et_all.pdf',
  '022': '022-Thompson_Okoye.pdf', '023': '023-Sikoparija_et_all.pdf', '024': '024-Gardasevic_et_all.pdf',
  '025': '025-Milicevic_et_all.pdf', '026': '026-Jokic_et_all.pdf', '027': '027-Dukic_Mijatovic_et_all.pdf',
  '028': '028-Milosevic_et_all.pdf', '029': '029-Takaci_et_all.pdf', '030': '030-Reksc.pdf',
  '031': '031-Lazarevic_et_all.pdf', '032': '032-Bajic_et_all.pdf', '033': '033-Vukovic_et_all.pdf',
  '034': '034-Radovic_et_all.pdf', '035': '035-Vukovic_et_all.pdf', '036': '036-Sheriff_et_all.pdf',
  '037': '037-Gajic_et_all.pdf', '038': '038-Simic_et_all.pdf', '039': '039-Stevanov_et_all.pdf',
  '040': '040-Ludin_et_all.pdf', '041': '041-Mirkovic_et_all.pdf', '042': '042-Rhazaoui_et_all.pdf',
  '043': '043-Jokanovic-Djajic_et_all.pdf', '044': '044-Petrovic_et_all.pdf', '045': '045-Sudzum_et_all.pdf',
  '046': '046-Knezevic_et_all.pdf', '047': '047-Banduka_et_all.pdf', '048': '048-Savkovic_et_all.pdf',
  '049': '049-Jokanovic-Djajic_et_all.pdf', '050': '050-Paul_et_all.pdf', '051': '051-Paul_et_all.pdf',
  '052': '052-Vizjak.pdf', '053': '053-Dudic_et_all.pdf', '054': '054-Vujasinovic_et_all.pdf',
  '055': '055-Dragic_et_all.pdf', '056': '056-Pavlovic_et_all.pdf', '057': '057-Ferencak_et_all.pdf',
  '058': '058-Bojanic_et_all.pdf', '059': '059-Simic_et_all.pdf', '060': '060-Jokanovic_et_all.pdf',
  '061': '061-Sancanin_et_all.pdf', '062': '062-Zeljkovic_et_all.pdf', '063': '063-Todorovic_et_all.pdf',
  '064': '064-Betala_et_all.pdf', '065': '065-Hara_et_all.pdf', '066': '066-Baber_et_all.pdf',
  '067': '067-Gradojevic_et_all.pdf', '068': '068-Dudjak_et_all.pdf', '069': '069-Yakovenko.pdf',
  '070': '070-Jolovic_et_all.pdf', '071': '071-Cobanovic_et_all.pdf', '072': '072-Golubovic_et_all.pdf',
  '073': '073-Ivanisevic_et_all.pdf', '074': '074-Krmpot_et_all.pdf', '075': '075-Stojisic_et_all.pdf',
  '076': '076-Slavic_et_all.pdf', '077': '077-Novakovic_et_all.pdf', '078': '078-Komosar_et_all.pdf',
  '079': '079-Tegeltija_et_all.pdf', '080': '080-Popara_et_all.pdf', '081': '081-Strugar.pdf',
  '082': '082-Bolesnikov_et_all.pdf', '083': '083-Patil_et_all.pdf', '084': '084-Eror_et_all.pdf',
  '085': '085-Netti_et_all.pdf', '086': '086-Orosnjak_et_all.pdf', '087': '087-Cem_Aldag_et_all.pdf',
  '088': '088-Eker_et_all.pdf', '089': '089-Vidovic_et_all.pdf', '090': '090-Zivkovic_et_all.pdf',
  '091': '091-Sclogl_et_all.pdf', '092': '092-Wollweber.pdf', '093': '093-Scharf_et_all.pdf',
  '094': '094-Gajic_et_all.pdf', '095': '095-Bozic_et_all.pdf', '096': '096-Kia-Rostami.pdf',
  '097': '097-Golubovic_et_all.pdf', '098': '098-Matwiejczyk.pdf', '099': '099-Zdravkovic_et_all.pdf',
  '100': '100-Franken.pdf', '101': '101-Djakovic_et_all.pdf', '102': '102-Dedijer_et_all.pdf',
  '103': '103-Miljanovic_et_all.pdf', '104': '104-Boskovic_et_all.pdf', '105': '105-Spajic_et_all.pdf',
  '106': '106-Borkovic_et_all.pdf', '107': '107-Milovanovic_et_all.pdf', '108': '108-Mandic.pdf',
  '109': '109-Krizanec_Cvitkovic_et_all.pdf', '110': '110-Topalic_et_all.pdf', '111': '111-Yzeiri_et_all.pdf',
  '112': '112-Samardzic_et_all.pdf', '113': '113-Milovic_et_all.pdf', '114': '114-Dopudj_et_all.pdf',
  '115': '115-Kuzet_et_all.pdf', '116': '116-Tomasevic_Pilipovic_et_all.pdf', '117': '117-Krkljes_et_all.pdf',
  '118': '118-Adamovic.pdf', '119': '119_Stanojevic_et_all.pdf', '120': '120-Stankovski_et_all.pdf',
  '121': '121-Ostojic_et_all.pdf', '122': '122-Stojanovic_et_all.pdf', '123': '123-Zivancev_et_all.pdf',
  '124': '124-Seslija_et_all.pdf', '125': '125-Cvitkovic_et_all.pdf', '126': '126-Velkovska_et_all.pdf',
  '127': '127-Stojanovic_et_all.pdf', '128': '128-Sokolovic.pdf', '129': '129-Banerjee_et_all.pdf',
  '130': '130-Pantic_et_all.pdf', '131': '131-Janjatovic.pdf', '132': '132-Lazar-1.pdf'
};

export const getFilename = (id: string) => filenameMap[id] || `${id}.pdf`;
