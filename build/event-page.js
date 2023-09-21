'use strict';
(() => {
  var M = {
      Africa: {
        Abidjan: ['', 0],
        Accra: ['Africa/Abidjan', 0],
        Addis_Ababa: ['Africa/Nairobi', 1],
        Algiers: ['', 2],
        Asmara: ['Africa/Nairobi', 1],
        Asmera: ['Africa/Nairobi', 1],
        Bamako: ['Africa/Abidjan', 0],
        Bangui: ['Africa/Lagos', 3],
        Banjul: ['Africa/Abidjan', 0],
        Bissau: ['', 0],
        Blantyre: ['Africa/Maputo', 4],
        Brazzaville: ['Africa/Lagos', 3],
        Bujumbura: ['Africa/Maputo', 4],
        Cairo: ['', 5],
        Casablanca: ['', 6],
        Ceuta: ['', 7],
        Conakry: ['Africa/Abidjan', 0],
        Dakar: ['Africa/Abidjan', 0],
        Dar_es_Salaam: ['Africa/Nairobi', 1],
        Djibouti: ['Africa/Nairobi', 1],
        Douala: ['Africa/Lagos', 3],
        El_Aaiun: ['', 6],
        Freetown: ['Africa/Abidjan', 0],
        Gaborone: ['Africa/Maputo', 4],
        Harare: ['Africa/Maputo', 4],
        Johannesburg: ['', 8],
        Juba: ['', 4],
        Kampala: ['Africa/Nairobi', 1],
        Khartoum: ['', 4],
        Kigali: ['Africa/Maputo', 4],
        Kinshasa: ['Africa/Lagos', 3],
        Lagos: ['', 3],
        Libreville: ['Africa/Lagos', 3],
        Lome: ['Africa/Abidjan', 0],
        Luanda: ['Africa/Lagos', 3],
        Lubumbashi: ['Africa/Maputo', 4],
        Lusaka: ['Africa/Maputo', 4],
        Malabo: ['Africa/Lagos', 3],
        Maputo: ['', 4],
        Maseru: ['Africa/Johannesburg', 8],
        Mbabane: ['Africa/Johannesburg', 8],
        Mogadishu: ['Africa/Nairobi', 1],
        Monrovia: ['', 0],
        Nairobi: ['', 1],
        Ndjamena: ['', 3],
        Niamey: ['Africa/Lagos', 3],
        Nouakchott: ['Africa/Abidjan', 0],
        Ouagadougou: ['Africa/Abidjan', 0],
        'Porto-Novo': ['Africa/Lagos', 3],
        Sao_Tome: ['', 0],
        Timbuktu: ['Africa/Abidjan', 0],
        Tripoli: ['', 9],
        Tunis: ['', 2],
        Windhoek: ['', 4],
      },
      America: {
        Adak: ['', 10],
        Anchorage: ['', 11],
        Anguilla: ['America/Puerto_Rico', 12],
        Antigua: ['America/Puerto_Rico', 12],
        Araguaina: ['', 13],
        Argentina: {
          Buenos_Aires: ['', 13],
          Catamarca: ['', 13],
          ComodRivadavia: ['America/Argentina/Catamarca', 13],
          Cordoba: ['', 13],
          Jujuy: ['', 13],
          La_Rioja: ['', 13],
          Mendoza: ['', 13],
          Rio_Gallegos: ['', 13],
          Salta: ['', 13],
          San_Juan: ['', 13],
          San_Luis: ['', 13],
          Tucuman: ['', 13],
          Ushuaia: ['', 13],
        },
        Aruba: ['America/Puerto_Rico', 12],
        Asuncion: ['', 14],
        Atikokan: ['America/Panama', 15],
        Atka: ['America/Adak', 10],
        Bahia_Banderas: ['', 16],
        Bahia: ['', 13],
        Barbados: ['', 12],
        Belem: ['', 13],
        Belize: ['', 16],
        'Blanc-Sablon': ['America/Puerto_Rico', 12],
        Boa_Vista: ['', 17],
        Bogota: ['', 18],
        Boise: ['', 19],
        Buenos_Aires: ['America/Argentina/Buenos_Aires', 13],
        Cambridge_Bay: ['', 19],
        Campo_Grande: ['', 17],
        Cancun: ['', 15],
        Caracas: ['', 17],
        Catamarca: ['America/Argentina/Catamarca', 13],
        Cayenne: ['', 13],
        Cayman: ['America/Panama', 15],
        Chicago: ['', 20],
        Chihuahua: ['', 16],
        Ciudad_Juarez: ['', 19],
        Coral_Harbour: ['America/Panama', 15],
        Cordoba: ['America/Argentina/Cordoba', 13],
        Costa_Rica: ['', 16],
        Creston: ['America/Phoenix', 21],
        Cuiaba: ['', 17],
        Curacao: ['America/Puerto_Rico', 12],
        Danmarkshavn: ['', 0],
        Dawson_Creek: ['', 21],
        Dawson: ['', 21],
        Denver: ['', 19],
        Detroit: ['', 22],
        Dominica: ['America/Puerto_Rico', 12],
        Edmonton: ['', 19],
        Eirunepe: ['', 18],
        El_Salvador: ['', 16],
        Ensenada: ['America/Tijuana', 23],
        Fort_Nelson: ['', 21],
        Fort_Wayne: ['America/Indiana/Indianapolis', 22],
        Fortaleza: ['', 13],
        Glace_Bay: ['', 24],
        Godthab: ['America/Nuuk', 25],
        Goose_Bay: ['', 26],
        Grand_Turk: ['', 27],
        Grenada: ['America/Puerto_Rico', 12],
        Guadeloupe: ['America/Puerto_Rico', 12],
        Guatemala: ['', 16],
        Guayaquil: ['', 18],
        Guyana: ['', 17],
        Halifax: ['', 24],
        Havana: ['', 28],
        Hermosillo: ['', 21],
        Indiana: {
          Indianapolis: ['', 22],
          Knox: ['', 20],
          Marengo: ['', 22],
          Petersburg: ['', 22],
          Tell_City: ['', 20],
          Vevay: ['', 22],
          Vincennes: ['', 22],
          Winamac: ['', 27],
        },
        Indianapolis: ['America/Indiana/Indianapolis', 22],
        Inuvik: ['', 19],
        Iqaluit: ['', 22],
        Jamaica: ['', 15],
        Jujuy: ['America/Argentina/Jujuy', 13],
        Juneau: ['', 11],
        Kentucky: { Louisville: ['', 22], Monticello: ['', 22] },
        Knox_IN: ['America/Indiana/Knox', 20],
        Kralendijk: ['America/Puerto_Rico', 12],
        La_Paz: ['', 17],
        Lima: ['', 18],
        Los_Angeles: ['', 23],
        Louisville: ['America/Kentucky/Louisville', 22],
        Lower_Princes: ['America/Puerto_Rico', 12],
        Maceio: ['', 13],
        Managua: ['', 16],
        Manaus: ['', 17],
        Marigot: ['America/Puerto_Rico', 12],
        Martinique: ['', 12],
        Matamoros: ['', 20],
        Mazatlan: ['', 21],
        Mendoza: ['America/Argentina/Mendoza', 13],
        Menominee: ['', 20],
        Merida: ['', 16],
        Metlakatla: ['', 11],
        Mexico_City: ['', 16],
        Miquelon: ['', 29],
        Moncton: ['', 24],
        Monterrey: ['', 16],
        Montevideo: ['', 13],
        Montreal: ['America/Toronto', 22],
        Montserrat: ['America/Puerto_Rico', 12],
        Nassau: ['America/Toronto', 22],
        New_York: ['', 22],
        Nipigon: ['America/Toronto', 22],
        Nome: ['', 11],
        Noronha: ['', 30],
        North_Dakota: { Beulah: ['', 20], Center: ['', 20], New_Salem: ['', 20] },
        Nuuk: ['', 25],
        Ojinaga: ['', 20],
        Panama: ['', 15],
        Pangnirtung: ['America/Iqaluit', 22],
        Paramaribo: ['', 13],
        Phoenix: ['', 21],
        Port_of_Spain: ['America/Puerto_Rico', 12],
        'Port-au-Prince': ['', 22],
        Porto_Acre: ['America/Rio_Branco', 18],
        Porto_Velho: ['', 17],
        Puerto_Rico: ['', 12],
        Punta_Arenas: ['', 13],
        Rainy_River: ['America/Winnipeg', 20],
        Rankin_Inlet: ['', 20],
        Recife: ['', 13],
        Regina: ['', 16],
        Resolute: ['', 31],
        Rio_Branco: ['', 18],
        Rosario: ['America/Argentina/Cordoba', 13],
        Santa_Isabel: ['America/Tijuana', 23],
        Santarem: ['', 13],
        Santiago: ['', 32],
        Santo_Domingo: ['', 12],
        Sao_Paulo: ['', 13],
        Scoresbysund: ['', 33],
        Shiprock: ['America/Denver', 19],
        Sitka: ['', 11],
        St_Barthelemy: ['America/Puerto_Rico', 12],
        St_Johns: ['', 34],
        St_Kitts: ['America/Puerto_Rico', 12],
        St_Lucia: ['America/Puerto_Rico', 12],
        St_Thomas: ['America/Puerto_Rico', 12],
        St_Vincent: ['America/Puerto_Rico', 12],
        Swift_Current: ['', 16],
        Tegucigalpa: ['', 16],
        Thule: ['', 35],
        Thunder_Bay: ['America/Toronto', 22],
        Tijuana: ['', 23],
        Toronto: ['', 22],
        Tortola: ['America/Puerto_Rico', 12],
        Vancouver: ['', 23],
        Virgin: ['America/Puerto_Rico', 12],
        Whitehorse: ['', 21],
        Winnipeg: ['', 20],
        Yakutat: ['', 11],
        Yellowknife: ['America/Edmonton', 19],
      },
      Antarctica: {
        Casey: ['', 36],
        Davis: ['', 37],
        DumontDUrville: ['Pacific/Port_Moresby', 38],
        Macquarie: ['', 39],
        Mawson: ['', 40],
        McMurdo: ['Pacific/Auckland', 41],
        Palmer: ['', 13],
        Rothera: ['', 42],
        South_Pole: ['Pacific/Auckland', 41],
        Syowa: ['Asia/Riyadh', 43],
        Troll: ['', 44],
        Vostok: ['Asia/Urumqi', 45],
      },
      Arctic: { Longyearbyen: ['Europe/Berlin', 46] },
      Asia: {
        Aden: ['Asia/Riyadh', 43],
        Almaty: ['', 45],
        Amman: ['', 43],
        Anadyr: ['', 47],
        Aqtau: ['', 40],
        Aqtobe: ['', 40],
        Ashgabat: ['', 40],
        Ashkhabad: ['Asia/Ashgabat', 40],
        Atyrau: ['', 40],
        Baghdad: ['', 43],
        Bahrain: ['Asia/Qatar', 43],
        Baku: ['', 48],
        Bangkok: ['', 37],
        Barnaul: ['', 49],
        Beirut: ['', 50],
        Bishkek: ['', 45],
        Brunei: ['Asia/Kuching', 51],
        Calcutta: ['Asia/Kolkata', 52],
        Chita: ['', 53],
        Choibalsan: ['', 51],
        Chongqing: ['Asia/Shanghai', 54],
        Chungking: ['Asia/Shanghai', 54],
        Colombo: ['', 55],
        Dacca: ['Asia/Dhaka', 45],
        Damascus: ['', 43],
        Dhaka: ['', 45],
        Dili: ['', 56],
        Dubai: ['', 48],
        Dushanbe: ['', 40],
        Famagusta: ['', 57],
        Gaza: ['', 58],
        Harbin: ['Asia/Shanghai', 54],
        Hebron: ['', 58],
        Ho_Chi_Minh: ['', 37],
        Hong_Kong: ['', 59],
        Hovd: ['', 37],
        Irkutsk: ['', 60],
        Istanbul: ['Europe/Istanbul', 61],
        Jakarta: ['', 62],
        Jayapura: ['', 63],
        Jerusalem: ['', 64],
        Kabul: ['', 65],
        Kamchatka: ['', 47],
        Karachi: ['', 66],
        Kashgar: ['Asia/Urumqi', 45],
        Kathmandu: ['', 67],
        Katmandu: ['Asia/Kathmandu', 67],
        Khandyga: ['', 53],
        Kolkata: ['', 52],
        Krasnoyarsk: ['', 49],
        Kuala_Lumpur: ['Asia/Singapore', 51],
        Kuching: ['', 51],
        Kuwait: ['Asia/Riyadh', 43],
        Macao: ['Asia/Macau', 54],
        Macau: ['', 54],
        Magadan: ['', 68],
        Makassar: ['', 69],
        Manila: ['', 70],
        Muscat: ['Asia/Dubai', 48],
        Nicosia: ['', 71],
        Novokuznetsk: ['', 49],
        Novosibirsk: ['', 49],
        Omsk: ['', 72],
        Oral: ['', 40],
        Phnom_Penh: ['Asia/Bangkok', 37],
        Pontianak: ['', 62],
        Pyongyang: ['', 73],
        Qatar: ['', 43],
        Qostanay: ['', 45],
        Qyzylorda: ['', 40],
        Rangoon: ['Asia/Yangon', 74],
        Riyadh: ['', 43],
        Saigon: ['Asia/Ho_Chi_Minh', 37],
        Sakhalin: ['', 68],
        Samarkand: ['', 40],
        Seoul: ['', 73],
        Shanghai: ['', 54],
        Singapore: ['', 51],
        Srednekolymsk: ['', 68],
        Taipei: ['', 54],
        Tashkent: ['', 40],
        Tbilisi: ['', 48],
        Tehran: ['', 75],
        Tel_Aviv: ['Asia/Jerusalem', 64],
        Thimbu: ['Asia/Thimphu', 45],
        Thimphu: ['', 45],
        Tokyo: ['', 76],
        Tomsk: ['', 49],
        Ujung_Pandang: ['Asia/Makassar', 69],
        Ulaanbaatar: ['', 51],
        Ulan_Bator: ['Asia/Ulaanbaatar', 51],
        Urumqi: ['', 45],
        'Ust-Nera': ['', 77],
        Vientiane: ['Asia/Bangkok', 37],
        Vladivostok: ['', 77],
        Yakutsk: ['', 53],
        Yangon: ['', 74],
        Yekaterinburg: ['', 78],
        Yerevan: ['', 48],
      },
      Atlantic: {
        Azores: ['', 79],
        Bermuda: ['', 24],
        Canary: ['', 80],
        Cape_Verde: ['', 81],
        Faeroe: ['Atlantic/Faroe', 82],
        Faroe: ['', 82],
        Jan_Mayen: ['Europe/Berlin', 46],
        Madeira: ['', 80],
        Reykjavik: ['Africa/Abidjan', 0],
        South_Georgia: ['', 30],
        St_Helena: ['Africa/Abidjan', 0],
        Stanley: ['', 13],
      },
      Australia: {
        ACT: ['Australia/Sydney', 39],
        Adelaide: ['', 83],
        Brisbane: ['', 84],
        Broken_Hill: ['', 83],
        Canberra: ['Australia/Sydney', 39],
        Currie: ['Australia/Hobart', 85],
        Darwin: ['', 86],
        Eucla: ['', 87],
        Hobart: ['', 85],
        LHI: ['Australia/Lord_Howe', 88],
        Lindeman: ['', 84],
        Lord_Howe: ['', 88],
        Melbourne: ['', 39],
        North: ['Australia/Darwin', 86],
        NSW: ['Australia/Sydney', 39],
        Perth: ['', 89],
        Queensland: ['Australia/Brisbane', 84],
        South: ['Australia/Adelaide', 83],
        Sydney: ['', 39],
        Tasmania: ['Australia/Hobart', 85],
        Victoria: ['Australia/Melbourne', 39],
        West: ['Australia/Perth', 89],
        Yancowinna: ['Australia/Broken_Hill', 83],
      },
      Brazil: {
        Acre: ['America/Rio_Branco', 18],
        DeNoronha: ['America/Noronha', 30],
        East: ['America/Sao_Paulo', 13],
        West: ['America/Manaus', 17],
      },
      Canada: {
        Atlantic: ['America/Halifax', 24],
        Central: ['America/Winnipeg', 20],
        Eastern: ['America/Toronto', 22],
        Mountain: ['America/Edmonton', 19],
        Newfoundland: ['America/St_Johns', 34],
        Pacific: ['America/Vancouver', 23],
        Saskatchewan: ['America/Regina', 16],
        Yukon: ['America/Whitehorse', 21],
      },
      CET: ['', 46],
      Chile: { Continental: ['America/Santiago', 32], EasterIsland: ['Pacific/Easter', 90] },
      CST6CDT: ['', 20],
      Cuba: ['America/Havana', 28],
      EET: ['', 57],
      Egypt: ['Africa/Cairo', 5],
      Eire: ['Europe/Dublin', 91],
      EST: ['', 15],
      EST5EDT: ['', 22],
      Etc: {
        'GMT-0': ['Etc/GMT', 92],
        'GMT-1': ['', 93],
        'GMT-10': ['', 77],
        'GMT-11': ['', 68],
        'GMT-12': ['', 47],
        'GMT-13': ['', 94],
        'GMT-14': ['', 95],
        'GMT-2': ['', 96],
        'GMT-3': ['', 61],
        'GMT-4': ['', 97],
        'GMT-5': ['', 78],
        'GMT-6': ['', 72],
        'GMT-7': ['', 49],
        'GMT-8': ['', 60],
        'GMT-9': ['', 53],
        GMT: ['', 92],
        'GMT+0': ['Etc/GMT', 92],
        'GMT+1': ['', 98],
        'GMT+10': ['', 99],
        'GMT+11': ['', 100],
        'GMT+12': ['', 101],
        'GMT+2': ['', 30],
        'GMT+3': ['', 13],
        'GMT+4': ['', 17],
        'GMT+5': ['', 18],
        'GMT+6': ['', 102],
        'GMT+7': ['', 103],
        'GMT+8': ['', 104],
        'GMT+9': ['', 105],
        GMT0: ['Etc/GMT', 92],
        Greenwich: ['Etc/GMT', 92],
        UCT: ['Etc/UTC', 106],
        Universal: ['Etc/UTC', 106],
        UTC: ['', 106],
        Zulu: ['Etc/UTC', 106],
      },
      Europe: {
        Amsterdam: ['Europe/Brussels', 46],
        Andorra: ['', 46],
        Astrakhan: ['', 97],
        Athens: ['', 57],
        Belfast: ['Europe/London', 107],
        Belgrade: ['', 7],
        Berlin: ['', 46],
        Bratislava: ['Europe/Prague', 46],
        Brussels: ['', 46],
        Bucharest: ['', 108],
        Budapest: ['', 46],
        Busingen: ['Europe/Zurich', 7],
        Chisinau: ['', 109],
        Copenhagen: ['Europe/Berlin', 46],
        Dublin: ['', 91],
        Gibraltar: ['', 46],
        Guernsey: ['Europe/London', 107],
        Helsinki: ['', 57],
        Isle_of_Man: ['Europe/London', 107],
        Istanbul: ['', 61],
        Jersey: ['Europe/London', 107],
        Kaliningrad: ['', 110],
        Kiev: ['Europe/Kyiv', 111],
        Kirov: ['', 112],
        Kyiv: ['', 111],
        Lisbon: ['', 113],
        Ljubljana: ['Europe/Belgrade', 7],
        London: ['', 107],
        Luxembourg: ['Europe/Brussels', 46],
        Madrid: ['', 7],
        Malta: ['', 46],
        Mariehamn: ['Europe/Helsinki', 57],
        Minsk: ['', 43],
        Monaco: ['Europe/Paris', 46],
        Moscow: ['', 112],
        Nicosia: ['Asia/Nicosia', 71],
        Oslo: ['Europe/Berlin', 46],
        Paris: ['', 46],
        Podgorica: ['Europe/Belgrade', 7],
        Prague: ['', 46],
        Riga: ['', 57],
        Rome: ['', 46],
        Samara: ['', 97],
        San_Marino: ['Europe/Rome', 46],
        Sarajevo: ['Europe/Belgrade', 7],
        Saratov: ['', 97],
        Simferopol: ['', 112],
        Skopje: ['Europe/Belgrade', 7],
        Sofia: ['', 57],
        Stockholm: ['Europe/Berlin', 46],
        Tallinn: ['', 57],
        Tirane: ['', 46],
        Tiraspol: ['Europe/Chisinau', 109],
        Ulyanovsk: ['', 97],
        Uzhgorod: ['Europe/Kyiv', 111],
        Vaduz: ['Europe/Zurich', 7],
        Vatican: ['Europe/Rome', 46],
        Vienna: ['', 46],
        Vilnius: ['', 57],
        Volgograd: ['', 112],
        Warsaw: ['', 46],
        Zagreb: ['Europe/Belgrade', 7],
        Zaporozhye: ['Europe/Kyiv', 111],
        Zurich: ['', 7],
      },
      'GB-Eire': ['Europe/London', 107],
      GB: ['Europe/London', 107],
      'GMT-0': ['Etc/GMT', 92],
      GMT: ['Etc/GMT', 92],
      'GMT+0': ['Etc/GMT', 92],
      GMT0: ['Etc/GMT', 92],
      Greenwich: ['Etc/GMT', 92],
      Hongkong: ['Asia/Hong_Kong', 59],
      HST: ['', 114],
      Iceland: ['Africa/Abidjan', 0],
      Indian: {
        Antananarivo: ['Africa/Nairobi', 1],
        Chagos: ['', 45],
        Christmas: ['Asia/Bangkok', 37],
        Cocos: ['Asia/Yangon', 74],
        Comoro: ['Africa/Nairobi', 1],
        Kerguelen: ['Indian/Maldives', 40],
        Mahe: ['Asia/Dubai', 48],
        Maldives: ['', 40],
        Mauritius: ['', 48],
        Mayotte: ['Africa/Nairobi', 1],
        Reunion: ['Asia/Dubai', 48],
      },
      Iran: ['Asia/Tehran', 75],
      Israel: ['Asia/Jerusalem', 64],
      Jamaica: ['America/Jamaica', 15],
      Japan: ['Asia/Tokyo', 76],
      Kwajalein: ['Pacific/Kwajalein', 115],
      Libya: ['Africa/Tripoli', 9],
      MET: ['', 116],
      Mexico: {
        BajaNorte: ['America/Tijuana', 23],
        BajaSur: ['America/Mazatlan', 21],
        General: ['America/Mexico_City', 16],
      },
      MST: ['', 21],
      MST7MDT: ['', 19],
      Navajo: ['America/Denver', 19],
      'NZ-CHAT': ['Pacific/Chatham', 117],
      NZ: ['Pacific/Auckland', 41],
      Pacific: {
        Apia: ['', 118],
        Auckland: ['', 41],
        Bougainville: ['', 36],
        Chatham: ['', 117],
        Chuuk: ['Pacific/Port_Moresby', 38],
        Easter: ['', 90],
        Efate: ['', 36],
        Enderbury: ['Pacific/Kanton', 118],
        Fakaofo: ['', 118],
        Fiji: ['', 115],
        Funafuti: ['Pacific/Tarawa', 115],
        Galapagos: ['', 102],
        Gambier: ['', 119],
        Guadalcanal: ['', 36],
        Guam: ['', 120],
        Honolulu: ['', 114],
        Johnston: ['Pacific/Honolulu', 114],
        Kanton: ['', 118],
        Kiritimati: ['', 121],
        Kosrae: ['', 36],
        Kwajalein: ['', 115],
        Majuro: ['Pacific/Tarawa', 115],
        Marquesas: ['', 122],
        Midway: ['Pacific/Pago_Pago', 123],
        Nauru: ['', 115],
        Niue: ['', 124],
        Norfolk: ['', 125],
        Noumea: ['', 36],
        Pago_Pago: ['', 123],
        Palau: ['', 56],
        Pitcairn: ['', 126],
        Pohnpei: ['Pacific/Guadalcanal', 36],
        Ponape: ['Pacific/Guadalcanal', 36],
        Port_Moresby: ['', 38],
        Rarotonga: ['', 127],
        Saipan: ['Pacific/Guam', 120],
        Samoa: ['Pacific/Pago_Pago', 123],
        Tahiti: ['', 127],
        Tarawa: ['', 115],
        Tongatapu: ['', 118],
        Truk: ['Pacific/Port_Moresby', 38],
        Wake: ['Pacific/Tarawa', 115],
        Wallis: ['Pacific/Tarawa', 115],
        Yap: ['Pacific/Port_Moresby', 38],
      },
      Poland: ['Europe/Warsaw', 46],
      Portugal: ['Europe/Lisbon', 113],
      PRC: ['Asia/Shanghai', 54],
      PST8PDT: ['', 23],
      ROC: ['Asia/Taipei', 54],
      ROK: ['Asia/Seoul', 73],
      Singapore: ['Asia/Singapore', 51],
      Turkey: ['Europe/Istanbul', 61],
      UCT: ['Etc/UTC', 106],
      Universal: ['Etc/UTC', 106],
      US: {
        Alaska: ['America/Anchorage', 11],
        Aleutian: ['America/Adak', 10],
        Arizona: ['America/Phoenix', 21],
        Central: ['America/Chicago', 20],
        'East-Indiana': ['America/Indiana/Indianapolis', 22],
        Eastern: ['America/New_York', 22],
        Hawaii: ['Pacific/Honolulu', 114],
        'Indiana-Starke': ['America/Indiana/Knox', 20],
        Michigan: ['America/Detroit', 22],
        Mountain: ['America/Denver', 19],
        Pacific: ['America/Los_Angeles', 23],
        Samoa: ['Pacific/Pago_Pago', 123],
      },
      UTC: ['Etc/UTC', 106],
      'W-SU': ['Europe/Moscow', 112],
      WET: ['', 82],
      Zulu: ['Etc/UTC', 106],
    },
    ue = [
      '20230517T170335Z<n><bs><n><tz>GMT<n><of>+0000<n><ot>+0000<n><s>19700101T000000<n><es><n>',
      '20230517T170335Z<n><bs><n><tz>EAT<n><of>+0300<n><ot>+0300<n><s>19700101T000000<n><es><n>',
      '20230517T170335Z<n><bs><n><tz>CET<n><of>+0100<n><ot>+0100<n><s>19700101T000000<n><es><n>',
      '20230517T170335Z<n><bs><n><tz>WAT<n><of>+0100<n><ot>+0100<n><s>19700101T000000<n><es><n>',
      '20230517T170335Z<n><bs><n><tz>CAT<n><of>+0200<n><ot>+0200<n><s>19700101T000000<n><es><n>',
      '20230517T170335Z<n><bd><n><tz>EEST<n><of>+0200<n><ot>+0300<n><s>19700424T000000<n><r>FREQ=YEARLY;BYMONTH=4;BYDAY=-1FR<n><ed><n><bs><n><tz>EET<n><of>+0300<n><ot>+0200<n><s>19701030T000000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1FR<n><es><n>',
      '20230517T170335Z<n><bs><n><tz>+01<n><of>+0100<n><ot>+0100<n><s>19700101T000000<n><es><n>',
      '20230517T170336Z<n><bd><n><tz>CEST<n><of>+0100<n><ot>+0200<n><s>19700329T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n><bs><n><tz>CET<n><of>+0200<n><ot>+0100<n><s>19701025T030000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>',
      '20230517T170335Z<n><bs><n><tz>SAST<n><of>+0200<n><ot>+0200<n><s>19700101T000000<n><es><n>',
      '20230517T170335Z<n><bs><n><tz>EET<n><of>+0200<n><ot>+0200<n><s>19700101T000000<n><es><n>',
      '20230517T170336Z<n><bd><n><tz>HDT<n><of>-1000<n><ot>-0900<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n><bs><n><tz>HST<n><of>-0900<n><ot>-1000<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n>',
      '20230517T170336Z<n><bd><n><tz>AKDT<n><of>-0900<n><ot>-0800<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n><bs><n><tz>AKST<n><of>-0800<n><ot>-0900<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n>',
      '20230517T170336Z<n><bs><n><tz>AST<n><of>-0400<n><ot>-0400<n><s>19700101T000000<n><es><n>',
      '20230517T170336Z<n><bs><n><tz>-03<n><of>-0300<n><ot>-0300<n><s>19700101T000000<n><es><n>',
      '20230517T170336Z<n><bd><n><tz>-03<n><of>-0400<n><ot>-0300<n><s>19701004T000000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=1SU<n><ed><n><bs><n><tz>-04<n><of>-0300<n><ot>-0400<n><s>19700322T000000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=4SU<n><es><n>',
      '20230517T170336Z<n><bs><n><tz>EST<n><of>-0500<n><ot>-0500<n><s>19700101T000000<n><es><n>',
      '20230517T170336Z<n><bs><n><tz>CST<n><of>-0600<n><ot>-0600<n><s>19700101T000000<n><es><n>',
      '20230517T170336Z<n><bs><n><tz>-04<n><of>-0400<n><ot>-0400<n><s>19700101T000000<n><es><n>',
      '20230517T170336Z<n><bs><n><tz>-05<n><of>-0500<n><ot>-0500<n><s>19700101T000000<n><es><n>',
      '20230517T170336Z<n><bd><n><tz>MDT<n><of>-0700<n><ot>-0600<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n><bs><n><tz>MST<n><of>-0600<n><ot>-0700<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n>',
      '20230517T170336Z<n><bd><n><tz>CDT<n><of>-0600<n><ot>-0500<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n><bs><n><tz>CST<n><of>-0500<n><ot>-0600<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n>',
      '20230517T170336Z<n><bs><n><tz>MST<n><of>-0700<n><ot>-0700<n><s>19700101T000000<n><es><n>',
      '20230517T170336Z<n><bd><n><tz>EDT<n><of>-0500<n><ot>-0400<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n><bs><n><tz>EST<n><of>-0400<n><ot>-0500<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n>',
      '20230517T170336Z<n><bd><n><tz>PDT<n><of>-0800<n><ot>-0700<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n><bs><n><tz>PST<n><of>-0700<n><ot>-0800<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n>',
      '20230517T170336Z<n><bd><n><tz>ADT<n><of>-0400<n><ot>-0300<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n><bs><n><tz>AST<n><of>-0300<n><ot>-0400<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n>',
      '20230517T170335Z<n><bd><n><tz>-01<n><of>-0200<n><ot>-0100<n><s>19700328T230000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SA<n><ed><n><bs><n><tz>-02<n><of>-0100<n><ot>-0200<n><s>19701025T000000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>',
      '20230517T170336Z<n><bs><n><tz>AST<n><of>-0300<n><ot>-0400<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n><bd><n><tz>ADT<n><of>-0400<n><ot>-0300<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n>',
      '20230517T170336Z<n><bs><n><tz>EST<n><of>-0400<n><ot>-0500<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n><bd><n><tz>EDT<n><of>-0500<n><ot>-0400<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n>',
      '20230517T170336Z<n><bs><n><tz>CST<n><of>-0400<n><ot>-0500<n><s>19701101T010000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n><bd><n><tz>CDT<n><of>-0500<n><ot>-0400<n><s>19700308T000000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n>',
      '20230517T170336Z<n><bd><n><tz>-02<n><of>-0300<n><ot>-0200<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n><bs><n><tz>-03<n><of>-0200<n><ot>-0300<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n>',
      '20230517T170336Z<n><bs><n><tz>-02<n><of>-0200<n><ot>-0200<n><s>19700101T000000<n><es><n>',
      '20230517T170336Z<n><bs><n><tz>CST<n><of>-0500<n><ot>-0600<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n><bd><n><tz>CDT<n><of>-0600<n><ot>-0500<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n>',
      '20230517T170336Z<n><bs><n><tz>-04<n><of>-0300<n><ot>-0400<n><s>19700405T000000<n><r>FREQ=YEARLY;BYMONTH=4;BYDAY=1SU<n><es><n><bd><n><tz>-03<n><of>-0400<n><ot>-0300<n><s>19700906T000000<n><r>FREQ=YEARLY;BYMONTH=9;BYDAY=1SU<n><ed><n>',
      '20230517T170335Z<n><bd><n><tz>+00<n><of>-0100<n><ot>+0000<n><s>19700329T000000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n><bs><n><tz>-01<n><of>+0000<n><ot>-0100<n><s>19701025T010000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>',
      '20230517T170336Z<n><bs><n><tz>NST<n><of>-0230<n><ot>-0330<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n><bd><n><tz>NDT<n><of>-0330<n><ot>-0230<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n>',
      '20230517T170335Z<n><bd><n><tz>ADT<n><of>-0400<n><ot>-0300<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n><bs><n><tz>AST<n><of>-0300<n><ot>-0400<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n>',
      '20230517T170335Z<n><bs><n><tz>+11<n><of>+1100<n><ot>+1100<n><s>19700101T000000<n><es><n>',
      '20230517T170335Z<n><bs><n><tz>+07<n><of>+0700<n><ot>+0700<n><s>19700101T000000<n><es><n>',
      '20230517T170335Z<n><bs><n><tz>+10<n><of>+1000<n><ot>+1000<n><s>19700101T000000<n><es><n>',
      '20230517T170335Z<n><bs><n><tz>AEST<n><of>+1100<n><ot>+1000<n><s>19700405T030000<n><r>FREQ=YEARLY;BYMONTH=4;BYDAY=1SU<n><es><n><bd><n><tz>AEDT<n><of>+1000<n><ot>+1100<n><s>19701004T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=1SU<n><ed><n>',
      '20230517T170335Z<n><bs><n><tz>+05<n><of>+0500<n><ot>+0500<n><s>19700101T000000<n><es><n>',
      '20230517T170335Z<n><bd><n><tz>NZDT<n><of>+1200<n><ot>+1300<n><s>19700927T020000<n><r>FREQ=YEARLY;BYMONTH=9;BYDAY=-1SU<n><ed><n><bs><n><tz>NZST<n><of>+1300<n><ot>+1200<n><s>19700405T030000<n><r>FREQ=YEARLY;BYMONTH=4;BYDAY=1SU<n><es><n>',
      '20230517T170335Z<n><bs><n><tz>-03<n><of>-0300<n><ot>-0300<n><s>19700101T000000<n><es><n>',
      '20230517T170335Z<n><bs><n><tz>+03<n><of>+0300<n><ot>+0300<n><s>19700101T000000<n><es><n>',
      '20230517T170335Z<n><bd><n><tz>+02<n><of>+0000<n><ot>+0200<n><s>19700329T010000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n><bs><n><tz>+00<n><of>+0200<n><ot>+0000<n><s>19701025T030000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>',
      '20230517T170335Z<n><bs><n><tz>+06<n><of>+0600<n><ot>+0600<n><s>19700101T000000<n><es><n>',
      '20230517T170335Z<n><bd><n><tz>CEST<n><of>+0100<n><ot>+0200<n><s>19700329T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n><bs><n><tz>CET<n><of>+0200<n><ot>+0100<n><s>19701025T030000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>',
      '20230517T170336Z<n><bs><n><tz>+12<n><of>+1200<n><ot>+1200<n><s>19700101T000000<n><es><n>',
      '20230517T170335Z<n><bs><n><tz>+04<n><of>+0400<n><ot>+0400<n><s>19700101T000000<n><es><n>',
      '20230517T170336Z<n><bs><n><tz>+07<n><of>+0700<n><ot>+0700<n><s>19700101T000000<n><es><n>',
      '20230517T170335Z<n><bd><n><tz>EEST<n><of>+0200<n><ot>+0300<n><s>19700329T000000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n><bs><n><tz>EET<n><of>+0300<n><ot>+0200<n><s>19701025T000000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>',
      '20230517T170335Z<n><bs><n><tz>+08<n><of>+0800<n><ot>+0800<n><s>19700101T000000<n><es><n>',
      '20230517T170335Z<n><bs><n><tz>IST<n><of>+0530<n><ot>+0530<n><s>19700101T000000<n><es><n>',
      '20230517T170336Z<n><bs><n><tz>+09<n><of>+0900<n><ot>+0900<n><s>19700101T000000<n><es><n>',
      '20230517T170335Z<n><bs><n><tz>CST<n><of>+0800<n><ot>+0800<n><s>19700101T000000<n><es><n>',
      '20230517T170335Z<n><bs><n><tz>+0530<n><of>+0530<n><ot>+0530<n><s>19700101T000000<n><es><n>',
      '20230517T170335Z<n><bs><n><tz>+09<n><of>+0900<n><ot>+0900<n><s>19700101T000000<n><es><n>',
      '20230517T170335Z<n><bd><n><tz>EEST<n><of>+0200<n><ot>+0300<n><s>19700329T030000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n><bs><n><tz>EET<n><of>+0300<n><ot>+0200<n><s>19701025T040000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>',
      '20230517T170335Z<n><bs><n><tz>EET<n><of>+0300<n><ot>+0200<n><s>19701024T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SA<n><es><n><bd><n><tz>EEST<n><of>+0200<n><ot>+0300<n><s>19700328T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SA<n><ed><n>',
      '20230517T170335Z<n><bs><n><tz>HKT<n><of>+0800<n><ot>+0800<n><s>19700101T000000<n><es><n>',
      '20230517T170336Z<n><bs><n><tz>+08<n><of>+0800<n><ot>+0800<n><s>19700101T000000<n><es><n>',
      '20230517T170336Z<n><bs><n><tz>+03<n><of>+0300<n><ot>+0300<n><s>19700101T000000<n><es><n>',
      '20230517T170335Z<n><bs><n><tz>WIB<n><of>+0700<n><ot>+0700<n><s>19700101T000000<n><es><n>',
      '20230517T170335Z<n><bs><n><tz>WIT<n><of>+0900<n><ot>+0900<n><s>19700101T000000<n><es><n>',
      '20230517T170335Z<n><bd><n><tz>IDT<n><of>+0200<n><ot>+0300<n><s>19700327T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1FR<n><ed><n><bs><n><tz>IST<n><of>+0300<n><ot>+0200<n><s>19701025T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>',
      '20230517T170335Z<n><bs><n><tz>+0430<n><of>+0430<n><ot>+0430<n><s>19700101T000000<n><es><n>',
      '20230517T170335Z<n><bs><n><tz>PKT<n><of>+0500<n><ot>+0500<n><s>19700101T000000<n><es><n>',
      '20230517T170335Z<n><bs><n><tz>+0545<n><of>+0545<n><ot>+0545<n><s>19700101T000000<n><es><n>',
      '20230517T170336Z<n><bs><n><tz>+11<n><of>+1100<n><ot>+1100<n><s>19700101T000000<n><es><n>',
      '20230517T170335Z<n><bs><n><tz>WITA<n><of>+0800<n><ot>+0800<n><s>19700101T000000<n><es><n>',
      '20230517T170335Z<n><bs><n><tz>PST<n><of>+0800<n><ot>+0800<n><s>19700101T000000<n><es><n>',
      '20230517T170335Z<n><bs><n><tz>EET<n><of>+0300<n><ot>+0200<n><s>19701025T040000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n><bd><n><tz>EEST<n><of>+0200<n><ot>+0300<n><s>19700329T030000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n>',
      '20230517T170336Z<n><bs><n><tz>+06<n><of>+0600<n><ot>+0600<n><s>19700101T000000<n><es><n>',
      '20230517T170335Z<n><bs><n><tz>KST<n><of>+0900<n><ot>+0900<n><s>19700101T000000<n><es><n>',
      '20230517T170335Z<n><bs><n><tz>+0630<n><of>+0630<n><ot>+0630<n><s>19700101T000000<n><es><n>',
      '20230517T170335Z<n><bs><n><tz>+0330<n><of>+0330<n><ot>+0330<n><s>19700101T000000<n><es><n>',
      '20230517T170335Z<n><bs><n><tz>JST<n><of>+0900<n><ot>+0900<n><s>19700101T000000<n><es><n>',
      '20230517T170336Z<n><bs><n><tz>+10<n><of>+1000<n><ot>+1000<n><s>19700101T000000<n><es><n>',
      '20230517T170336Z<n><bs><n><tz>+05<n><of>+0500<n><ot>+0500<n><s>19700101T000000<n><es><n>',
      '20230517T170336Z<n><bd><n><tz>+00<n><of>-0100<n><ot>+0000<n><s>19700329T000000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n><bs><n><tz>-01<n><of>+0000<n><ot>-0100<n><s>19701025T010000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>',
      '20230517T170336Z<n><bd><n><tz>WEST<n><of>+0000<n><ot>+0100<n><s>19700329T010000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n><bs><n><tz>WET<n><of>+0100<n><ot>+0000<n><s>19701025T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>',
      '20230517T170335Z<n><bs><n><tz>-01<n><of>-0100<n><ot>-0100<n><s>19700101T000000<n><es><n>',
      '20230517T170335Z<n><bd><n><tz>WEST<n><of>+0000<n><ot>+0100<n><s>19700329T010000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n><bs><n><tz>WET<n><of>+0100<n><ot>+0000<n><s>19701025T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>',
      '20230517T170335Z<n><bs><n><tz>ACST<n><of>+1030<n><ot>+0930<n><s>19700405T030000<n><r>FREQ=YEARLY;BYMONTH=4;BYDAY=1SU<n><es><n><bd><n><tz>ACDT<n><of>+0930<n><ot>+1030<n><s>19701004T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=1SU<n><ed><n>',
      '20230517T170335Z<n><bs><n><tz>AEST<n><of>+1000<n><ot>+1000<n><s>19700101T000000<n><es><n>',
      '20230517T170335Z<n><bd><n><tz>AEDT<n><of>+1000<n><ot>+1100<n><s>19701004T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=1SU<n><ed><n><bs><n><tz>AEST<n><of>+1100<n><ot>+1000<n><s>19700405T030000<n><r>FREQ=YEARLY;BYMONTH=4;BYDAY=1SU<n><es><n>',
      '20230517T170335Z<n><bs><n><tz>ACST<n><of>+0930<n><ot>+0930<n><s>19700101T000000<n><es><n>',
      '20230517T170335Z<n><bs><n><tz>+0845<n><of>+0845<n><ot>+0845<n><s>19700101T000000<n><es><n>',
      '20230517T170335Z<n><bs><n><tz>+1030<n><of>+1100<n><ot>+1030<n><s>19700405T020000<n><r>FREQ=YEARLY;BYMONTH=4;BYDAY=1SU<n><es><n><bd><n><tz>+11<n><of>+1030<n><ot>+1100<n><s>19701004T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=1SU<n><ed><n>',
      '20230517T170335Z<n><bs><n><tz>AWST<n><of>+0800<n><ot>+0800<n><s>19700101T000000<n><es><n>',
      '20230517T170336Z<n><bs><n><tz>-06<n><of>-0500<n><ot>-0600<n><s>19700404T220000<n><r>FREQ=YEARLY;BYMONTH=4;BYDAY=1SA<n><es><n><bd><n><tz>-05<n><of>-0600<n><ot>-0500<n><s>19700905T220000<n><r>FREQ=YEARLY;BYMONTH=9;BYDAY=1SA<n><ed><n>',
      '20230517T170335Z<n><bs><n><tz>IST<n><of>+0000<n><ot>+0100<n><s>19700329T010000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><es><n><bd><n><tz>GMT<n><of>+0100<n><ot>+0000<n><s>19701025T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><ed><n>',
      '20230517T170336Z<n><bs><n><tz>GMT<n><of>+0000<n><ot>+0000<n><s>19700101T000000<n><es><n>',
      '20230517T170336Z<n><bs><n><tz>+01<n><of>+0100<n><ot>+0100<n><s>19700101T000000<n><es><n>',
      '20230517T170336Z<n><bs><n><tz>+13<n><of>+1300<n><ot>+1300<n><s>19700101T000000<n><es><n>',
      '20230517T170336Z<n><bs><n><tz>+14<n><of>+1400<n><ot>+1400<n><s>19700101T000000<n><es><n>',
      '20230517T170336Z<n><bs><n><tz>+02<n><of>+0200<n><ot>+0200<n><s>19700101T000000<n><es><n>',
      '20230517T170336Z<n><bs><n><tz>+04<n><of>+0400<n><ot>+0400<n><s>19700101T000000<n><es><n>',
      '20230517T170336Z<n><bs><n><tz>-01<n><of>-0100<n><ot>-0100<n><s>19700101T000000<n><es><n>',
      '20230517T170336Z<n><bs><n><tz>-10<n><of>-1000<n><ot>-1000<n><s>19700101T000000<n><es><n>',
      '20230517T170336Z<n><bs><n><tz>-11<n><of>-1100<n><ot>-1100<n><s>19700101T000000<n><es><n>',
      '20230517T170336Z<n><bs><n><tz>-12<n><of>-1200<n><ot>-1200<n><s>19700101T000000<n><es><n>',
      '20230517T170336Z<n><bs><n><tz>-06<n><of>-0600<n><ot>-0600<n><s>19700101T000000<n><es><n>',
      '20230517T170336Z<n><bs><n><tz>-07<n><of>-0700<n><ot>-0700<n><s>19700101T000000<n><es><n>',
      '20230517T170336Z<n><bs><n><tz>-08<n><of>-0800<n><ot>-0800<n><s>19700101T000000<n><es><n>',
      '20230517T170336Z<n><bs><n><tz>-09<n><of>-0900<n><ot>-0900<n><s>19700101T000000<n><es><n>',
      '20230517T170336Z<n><bs><n><tz>UTC<n><of>+0000<n><ot>+0000<n><s>19700101T000000<n><es><n>',
      '20230517T170335Z<n><bd><n><tz>BST<n><of>+0000<n><ot>+0100<n><s>19700329T010000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n><bs><n><tz>GMT<n><of>+0100<n><ot>+0000<n><s>19701025T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>',
      '20230517T170336Z<n><bd><n><tz>EEST<n><of>+0200<n><ot>+0300<n><s>19700329T030000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n><bs><n><tz>EET<n><of>+0300<n><ot>+0200<n><s>19701025T040000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>',
      '20230517T170335Z<n><bd><n><tz>EEST<n><of>+0200<n><ot>+0300<n><s>19700329T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n><bs><n><tz>EET<n><of>+0300<n><ot>+0200<n><s>19701025T030000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>',
      '20230517T170336Z<n><bs><n><tz>EET<n><of>+0200<n><ot>+0200<n><s>19700101T000000<n><es><n>',
      '20230517T170336Z<n><bs><n><tz>EET<n><of>+0300<n><ot>+0200<n><s>19701025T040000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n><bd><n><tz>EEST<n><of>+0200<n><ot>+0300<n><s>19700329T030000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n>',
      '20230517T170336Z<n><bs><n><tz>MSK<n><of>+0300<n><ot>+0300<n><s>19700101T000000<n><es><n>',
      '20230517T170336Z<n><bs><n><tz>WET<n><of>+0100<n><ot>+0000<n><s>19701025T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n><bd><n><tz>WEST<n><of>+0000<n><ot>+0100<n><s>19700329T010000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n>',
      '20230517T170336Z<n><bs><n><tz>HST<n><of>-1000<n><ot>-1000<n><s>19700101T000000<n><es><n>',
      '20230517T170335Z<n><bs><n><tz>+12<n><of>+1200<n><ot>+1200<n><s>19700101T000000<n><es><n>',
      '20230517T170335Z<n><bd><n><tz>MEST<n><of>+0100<n><ot>+0200<n><s>19700329T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n><bs><n><tz>MET<n><of>+0200<n><ot>+0100<n><s>19701025T030000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>',
      '20230517T170335Z<n><bd><n><tz>+1345<n><of>+1245<n><ot>+1345<n><s>19700927T024500<n><r>FREQ=YEARLY;BYMONTH=9;BYDAY=-1SU<n><ed><n><bs><n><tz>+1245<n><of>+1345<n><ot>+1245<n><s>19700405T034500<n><r>FREQ=YEARLY;BYMONTH=4;BYDAY=1SU<n><es><n>',
      '20230517T170335Z<n><bs><n><tz>+13<n><of>+1300<n><ot>+1300<n><s>19700101T000000<n><es><n>',
      '20230517T170335Z<n><bs><n><tz>-09<n><of>-0900<n><ot>-0900<n><s>19700101T000000<n><es><n>',
      '20230517T170335Z<n><bs><n><tz>ChST<n><of>+1000<n><ot>+1000<n><s>19700101T000000<n><es><n>',
      '20230517T170335Z<n><bs><n><tz>+14<n><of>+1400<n><ot>+1400<n><s>19700101T000000<n><es><n>',
      '20230517T170335Z<n><bs><n><tz>-0930<n><of>-0930<n><ot>-0930<n><s>19700101T000000<n><es><n>',
      '20230517T170335Z<n><bs><n><tz>SST<n><of>-1100<n><ot>-1100<n><s>19700101T000000<n><es><n>',
      '20230517T170335Z<n><bs><n><tz>-11<n><of>-1100<n><ot>-1100<n><s>19700101T000000<n><es><n>',
      '20230517T170335Z<n><bd><n><tz>+12<n><of>+1100<n><ot>+1200<n><s>19701004T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=1SU<n><ed><n><bs><n><tz>+11<n><of>+1200<n><ot>+1100<n><s>19700405T030000<n><r>FREQ=YEARLY;BYMONTH=4;BYDAY=1SU<n><es><n>',
      '20230517T170335Z<n><bs><n><tz>-08<n><of>-0800<n><ot>-0800<n><s>19700101T000000<n><es><n>',
      '20230517T170335Z<n><bs><n><tz>-10<n><of>-1000<n><ot>-1000<n><s>19700101T000000<n><es><n>',
    ];
  function $e(e) {
    let t = e.split('/');
    return (t.length === 3 &&
      (!M[`${t[0]}`] || !M[`${t[0]}`][`${t[1]}`] || !M[`${t[0]}`][`${t[1]}`][`${t[2]}`])) ||
      (t.length === 2 && (!M[`${t[0]}`] || !M[`${t[0]}`][`${t[1]}`])) ||
      (t.length === 1 && !M[`${t[0]}`])
      ? (console.error('Given timezone not valid.'), '')
      : t.length === 3
      ? [M[`${t[0]}`][`${t[1]}`][`${t[2]}`][0], me(ue[M[`${t[0]}`][`${t[1]}`][`${t[2]}`][1]])]
      : t.length === 2
      ? [M[`${t[0]}`][`${t[1]}`][0], me(ue[M[`${t[0]}`][`${t[1]}`][1]])]
      : [M[`${t[0]}`][0], me(ue[M[`${t[0]}`][1]])];
  }
  function me(e) {
    let t = {
      '<br>': '<n>',
      'TZNAME:': '<tz>',
      'TZOFFSETFROM:': '<of>',
      'TZOFFSETTO:': '<ot>',
      'DTSTART:': '<s>',
      'RRULE:': '<r>',
      'BEGIN:DAYLIGHT': '<bd>',
      'END:DAYLIGHT': '<ed>',
      'BEGIN:STANDARD': '<bs>',
      'END:STANDARD': '<es>',
    };
    for (let [a, n] of Object.entries(t)) e = e.replaceAll(n, a);
    return e;
  }
  function Ue(e, t = !1) {
    let a = $e(e);
    if (a[1] == null || a[1] == '') return '';
    let n = (function () {
        return a[0] == '' ? e : a[0];
      })(),
      o = 'TZID=' + n,
      r = [
        `BEGIN:VTIMEZONE\r
TZID:` +
          n +
          `\r
X-LIC-LOCATION:` +
          n +
          `\r
LAST-MODIFIED:` +
          a[1].replace(/[^\w_\-:,;=+/<br>]/g, '').replace(
            /<br>/g,
            `\r
`
          ) +
          'END:VTIMEZONE',
        o,
      ];
    return t ? JSON.stringify(r) : r;
  }
  function ne(e, t, a) {
    let n = $e(e);
    if (n[1] == null || n[1] == '') return '';
    if (!t.match(/^\d{4}-\d{2}-\d{2}$/))
      return console.error('offset calculation failed: date misspelled [-> YYYY-MM-DD]'), '';
    if (!a.match(/^\d{2}:\d{2}$/))
      return console.error('offset calculation failed: time misspelled [-> hh:mm]'), '';
    if (!n[1].match(/BEGIN:DAYLIGHT/i)) return n[1].match(/TZOFFSETTO:([+|-]\d{4})/i)[1];
    let o = t + 'T' + a + ':00',
      r = new Date(o),
      i = r.getFullYear(),
      l = r.getMonth() + 1,
      c = r.getDate(),
      s = r.getHours(),
      g = n[1].replace(/[^\w_\-:,;=+/<br>]/g, '').split('<br>'),
      b = { 1: {}, 2: {} },
      u = 0;
    for (let f = 0; f < g.length; f++)
      if (
        (g[`${f}`].startsWith('TZOFFSETTO') && (u++, (b[`${u}`].offset = g[`${f}`].split(':')[1])),
        g[`${f}`].startsWith('DTSTART') && (b[`${u}`].hour = parseInt(g[`${f}`].substr(17, 2))),
        g[`${f}`].startsWith('RRULE'))
      ) {
        let w = g[`${f}`].split(';'),
          A = parseInt(w[1].split('=')[1]);
        (b[`${u}`].month = parseInt(A)), (b[`${u}`].day = w[2].split('=')[1]);
      }
    if (
      (b[1].month > b[2].month && ([b[1], b[2]] = [b[2], b[1]]), l != b[1].month && l != b[2].month)
    )
      return l < b[1].month || l > b[2].month ? b[2].offset : b[1].offset;
    let y = (function () {
        return Object.keys(b).find((f) => b[`${f}`].month == l);
      })(),
      m = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'],
      h = new Date(i, l, 0).getDate(),
      p = new Date(i, l - 1, 1).getDay(),
      k = { SU: {}, MO: {}, TU: {}, WE: {}, TH: {}, FR: {}, SA: {} };
    for (let f = 1; f <= h; f++) {
      let w = Object.keys(k[m[`${p}`]]).length + 1;
      (k[m[`${p}`]][`${w}`] = f), p++, p == 7 && (p = 0);
    }
    let d = (function () {
      if (b[`${y}`].day[0] == '-') {
        let f = b[`${y}`].day.substr(2, 2),
          w = Object.keys(k[`${f}`]).length + 1 - parseInt(b[`${y}`].day[1]);
        return k[`${f}`][`${w}`];
      }
      let f = b[`${y}`].day.substr(1, 2);
      return k[`${f}`][b[`${y}`].day[0]];
    })();
    if (c > d || (c == d && s >= b[`${y}`].hour)) return b[`${y}`].offset;
    let x = (function () {
      return y == 1 ? 2 : 1;
    })();
    return b[`${x}`].offset;
  }
  var ae = [];
  function Oe(e = !1) {
    return (
      ae.length == 0 &&
        (ae = (function () {
          let t = [];
          for (let [a, n] of Object.entries(M))
            if (typeof n === 'object' && !Array.isArray(n))
              for (let [o, r] of Object.entries(n))
                if (typeof r === 'object' && !Array.isArray(r))
                  for (let [i] of Object.entries(r)) t.push(a + '/' + o + '/' + i);
                else t.push(a + '/' + o);
            else t.push(a);
          return t;
        })()),
      e ? JSON.stringify(ae) : ae
    );
  }
  var Ve = '2.4.1',
    He = {
      default: `:host{width:fit-content;--base-font-size-l:16px;--base-font-size-m:16px;--base-font-size-s:16px;--font:arial,helvetica,sans-serif;--keyboard-focus:#1e90ff;--btn-background:#f5f5f5;--btn-background-hover:#fff;--btn-border:#d2d2d2;--btn-text:#333;--btn-text-hover:#000;--btn-shadow:rgba(0 0 0 / 20%) 2px 5px 18px -1px,rgba(0 0 0 / 15%) 2px 2px 10px -3px;--btn-shadow-hover:rgba(0 0 0 / 35%) 2px 5px 18px -1px,rgba(0 0 0 / 30%) 2px 2px 10px -3px;--btn-shadow-active:rgba(0 0 0 / 50%) 2px 5px 18px -1px,rgba(0 0 0 / 45%) 2px 2px 10px -3px;--list-background:#f5f5f5;--list-background-hover:#fff;--list-text:#333;--list-text-hover:#000;--list-close-background:#e5e5e5;--list-close-text:#777;--list-shadow:rgba(0 0 0 / 20%) 2px 5px 18px -1px,rgba(0 0 0 / 40%) 2px 2px 10px -3px;--list-shadow-modal:rgba(0 0 0 / 60%) 3px 6px 40px -5px,rgba(0 0 0 / 60%) 3px 3px 15px -4px;--modal-text:#000;--modal-background:#f5f5f5;--modal-btn-bar:#c6c8cd;--modal-btn-background:#f5f5f5;--modal-btn-secondary-background:#e2e1e6;--modal-btn-background-hover:#fff;--modal-btn-text:#2e2e2e;--modal-btn-text-hover:#161616;--modal-btn-secondary-text:#666567;--modal-shadow:drop-shadow(5px 8px 30px rgba(0 0 0 / 70%));--modal-shadow-btn:rgba(0 0 0 / 10%) 2px 3px 10px -3px,rgba(0 0 0 / 25%) 1px 1px 8px -4px;--modal-shadow-btn-hover:rgba(0 0 0 / 35%) 3px 5px 15px -2px,rgba(0 0 0 / 20%) 2px 4px 25px -6px;--date-btn-text:#1d1d1e;--date-btn-text-secondary:#3a3a3f;--date-btn-cal-day-text:#fff;--date-btn-cal-month-text:#d3d2d7;--date-btn-cal-background:#313132;--date-btn-background:#eae9ed;--date-btn-background-hover:#fff;--date-btn-shadow:rgba(0 0 0 / 40%) 1px 3px 15px -4px,rgba(0 0 0 / 20%) 1px 1px 8px -4px;--date-btn-shadow-hover:rgba(0 0 0 / 40%) 4px 6px 18px -1px,rgba(0 0 0 / 35%) 4px 5px 25px -2px;--checkmark-background:radial-gradient(circle,#fff 0,rgba(255 255 255 / 80%) 40%,rgba(255 255 255 / 0%) 70%);--overlay-background:rgba(20 20 20 / 25%);--overlay-cursor:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23777' width='16' height='16' viewBox='0 0 122.878 122.88'%3E%3Cpath d='M1.426 8.313a4.87 4.87 0 0 1 0-6.886 4.87 4.87 0 0 1 6.886 0l53.127 53.127 53.127-53.127a4.87 4.87 0 0 1 6.887 0 4.87 4.87 0 0 1 0 6.886L68.324 61.439l53.128 53.128a4.87 4.87 0 0 1-6.887 6.886L61.438 68.326 8.312 121.453a4.87 4.87 0 0 1-6.886 0 4.87 4.87 0 0 1 0-6.886l53.127-53.128L1.426 8.313h0z'/%3E%3C/svg%3E") 16 16,crosshair;--icon-ms365-color:#ea3e23;--icon-yahoo-color:#5f01d1;--icon-filter:none}:host(.atcb-dark){--btn-background:#2e2e2e;--btn-background-hover:#373737;--btn-border:#4d4d4d;--btn-text:#dedede;--btn-text-hover:#f1f1f1;--btn-shadow:rgba(255 255 255 / 5%) -12px -5px 20px -8px,rgba(255 255 255 / 6%) -7px -5px 15px -3px,rgba(0 0 0 / 50%) 2px 5px 18px -1px,rgba(0 0 0 / 40%) 3px 3px 20px -3px;--btn-shadow-hover:rgba(255 255 255 / 6%) -12px -5px 23px -8px,rgba(255 255 255 / 7%) -7px -5px 18px -3px,rgba(0 0 0 / 60%) 2px 5px 19px -1px,rgba(0 0 0 / 50%) 3px 3px 22px -3px;--btn-shadow-active:rgba(255 255 255 / 7%) -12px -5px 23px -8px,rgba(255 255 255 / 8%) -7px -5px 18px -3px,rgba(0 0 0 / 70%) 2px 5px 19px -1px,rgba(0 0 0 / 60%) 3px 3px 22px -3px;--list-background:#2e2e2e;--list-background-hover:#373737;--list-text:#dedede;--list-text-hover:#f1f1f1;--list-close-background:#282828;--list-shadow:rgba(255 255 255 / 5%) -12px -5px 20px -8px,rgba(255 255 255 / 6%) -7px -5px 15px -3px,rgba(0 0 0 / 50%) 2px 5px 18px -1px,rgba(0 0 0 / 40%) 3px 3px 20px -3px;--list-shadow-modal:rgba(255 255 255 / 8%) -12px -5px 30px -8px,rgba(255 255 255 / 8%) -7px -5px 15px -3px,rgba(0 0 0 / 60%) 4px 6px 50px -4px,rgba(0 0 0 / 90%) 8px 12px 40px -2px;--modal-text:#f1f1f1;--modal-background:#242424;--modal-btn-bar:#38383a;--modal-btn-background:#181819;--modal-btn-secondary-background:#2e2d30;--modal-btn-background-hover:#434246;--modal-btn-text:#dbdbdb;--modal-btn-text-hover:#fff;--modal-btn-secondary-text:#b8b8b8;--modal-shadow:drop-shadow(5px 8px 30px rgba(0 0 0 / 90%));--modal-shadow-btn:rgba(255 255 255 / 5%) -2px -2px 10px,rgba(0 0 0 / 30%) 1px 2px 8px -1px;--date-btn-text:#ebebf0;--date-btn-text-secondary:#b5b5bd;--date-btn-cal-day-text:#101010;--date-btn-cal-month-text:#3e3e3f;--date-btn-cal-background:#c7c7cd;--date-btn-background:#363636;--date-btn-background-hover:#474747;--date-btn-shadow:rgba(255 255 255 / 10%) -8px -6px 20px,rgba(0 0 0 / 50%) 1px 3px 25px -8px,rgba(0 0 0 / 50%) 1px 1px 10px -3px;--checkmark-background:radial-gradient(circle,rgba(0 0 0 / 50%) 0,rgba(0 0 0 / 30%) 40%,rgba(0 0 0 / 0%) 70%);--overlay-background:rgba(20 20 20 / 60%);--icon-ms365-color:#ea3e23;--icon-yahoo-color:#bebebe;--icon-filter:grayscale(.2)}.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-l)}@media (width <= 991px){.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-m)}}@media (width <= 575px){.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-s)}}.atcb-button-wrapper{display:block;padding:5px;position:relative}.atcb-button{align-items:center;background-color:var(--btn-background);border:1px solid var(--btn-border);border-radius:6px;box-shadow:var(--btn-shadow);color:var(--btn-text);cursor:pointer;display:flex;font-family:var(--font);font-size:1em;font-weight:600;justify-content:center;line-height:1.5em;margin:.13em;max-width:350px;min-width:10em;padding:.65em 1em;position:relative;text-align:center;touch-action:manipulation;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;width:auto;z-index:1}.atcb-button.atcb-no-text,.atcb-button:disabled{min-width:0}.atcb-rtl .atcb-button{direction:rtl;text-align:right}.atcb-button:focus-visible{outline:2px solid var(--keyboard-focus)}.atcb-button:not([disabled]):focus,.atcb-button:not([disabled]):hover{background-color:var(--btn-background-hover);box-shadow:var(--btn-shadow-hover);color:var(--btn-text-hover)}.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropoverlay){z-index:15000000}.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropoverlay),.atcb-button.atcb-single:not([disabled]):focus,.atcb-button.atcb-single:not([disabled]):hover{background-color:var(--btn-background-hover);box-shadow:var(--btn-shadow-active);color:var(--btn-text-hover);margin:0;padding:.78em 1.13em}.atcb-button.atcb-active.atcb-dropoverlay{z-index:14000090}.atcb-icon{height:1em;margin-bottom:.3em;margin-right:.8em;flex-grow:0;flex-shrink:0}.atcb-rtl .atcb-icon{margin-right:0;margin-left:.8em}.atcb-no-text .atcb-icon{margin-right:0;margin-left:0}.atcb-icon svg{height:100%;fill:currentcolor;width:auto}.atcb-text{overflow-wrap:anywhere}.atcb-button:disabled .atcb-text{letter-spacing:.1em}.atcb-dropdown-anchor{bottom:4px;height:1px;width:100%;opacity:0;position:absolute}.atcb-list-wrapper{box-sizing:border-box;padding:0 4px;position:absolute;z-index:14000090}.atcb-list-wrapper.atcb-dropoverlay{z-index:15000000;max-width:max-content}.atcb-list{border-radius:0 0 6px 6px;box-sizing:border-box;box-shadow:var(--list-shadow);color:var(--list-text);display:block;font-family:var(--font);min-width:100%;position:relative;user-select:none;-webkit-user-select:none;width:fit-content}.atcb-list-item{align-items:center;background-color:var(--list-background);box-sizing:border-box;cursor:pointer;display:flex;font-size:1em;line-height:1.75em;padding:.8em;text-align:left;touch-action:manipulation;-webkit-tap-highlight-color:transparent}.atcb-rtl .atcb-list-item{direction:rtl;text-align:right}.atcb-list-item:hover{background-color:var(--list-background-hover);color:var(--list-text-hover)}.atcb-list-item:focus-visible{background-color:var(--list-background-hover);color:var(--keyboard-focus);font-weight:600;outline:0}.atcb-list-item:last-child{border-radius:0 0 6px 6px}.atcb-dropup .atcb-list-item:last-child{border-radius:0;padding-bottom:1.25em}.atcb-dropoverlay .atcb-list .atcb-list-item:first-child,.atcb-dropup .atcb-list,.atcb-dropup .atcb-list-item:first-child,.atcb-list.atcb-modal .atcb-list-item:first-child{border-radius:6px 6px 0 0}.atcb-dropoverlay .atcb-list .atcb-list-item:only-child,.atcb-list.atcb-modal .atcb-list-item:only-child{border-radius:6px}.atcb-list.atcb-generated-button:not(.atcb-modal) .atcb-list-item:first-child{padding-top:1.25em}.atcb-dropoverlay .atcb-list.atcb-generated-button:not(.atcb-modal) .atcb-list-item:first-child,.atcb-dropup .atcb-list.atcb-generated-button:not(.atcb-modal) .atcb-list-item:first-child{padding-top:.8em}.atcb-dropoverlay .atcb-list,.atcb-list.atcb-modal{border-radius:6px}.atcb-list.atcb-modal{box-shadow:var(--list-shadow-modal)}.atcb-list-item .atcb-icon{margin-bottom:.5em;margin-right:.6em;width:1.125em}.atcb-rtl .atcb-list-item .atcb-icon{margin-right:0;margin-left:.6em}.atcb-no-text .atcb-list-item .atcb-icon{margin:0 auto}.atcb-list-item-close{background-color:var(--list-close-background)}.atcb-list-item.atcb-list-item-close:not(:focus-visible){color:var(--list-close-text)}.atcb-list-item-close svg{fill:currentcolor}.atcb-modal{display:block;margin:auto;min-width:250px;width:auto;position:relative;z-index:14000090}.atcb-modal-box{filter:var(--modal-shadow);color:var(--modal-text);cursor:default;box-sizing:border-box;font-family:var(--font);line-height:1.5em;text-align:left;user-select:none;-webkit-user-select:none;touch-action:manipulation;width:100%;margin-bottom:20px;max-width:32em;-webkit-tap-highlight-color:transparent}.atcb-modal-box.atcb-rtl{text-align:right;direction:rtl;padding:1.25em 1em 1.25em 2em}.atcb-modal-icon{height:2.5em;width:2.5em;border-radius:100%;background-color:var(--modal-background);padding:1.75em;margin:auto}.atcb-modal-icon svg{height:auto;fill:currentcolor;width:100%}.atcb-modal-headline{background-color:var(--modal-background);border-radius:6px 6px 0 0;font-size:1.3em;font-weight:600;line-height:1.5em;padding:1.8em 2em 1.3em;text-transform:uppercase;text-align:center}.atcb-modal-icon+.atcb-modal-headline{margin-top:-2.6em;padding-top:2.6em}.atcb-modal-content{background-color:var(--modal-background);font-size:1em;padding:.3em 2.5em 2.25em}.atcb-modal-icon+.atcb-modal-content{border-radius:6px 6px 0 0;margin-top:-2.6em;padding-top:2.6em}@media (width <= 575px){.atcb-modal-headline{padding:1.8em 1em 1em}.atcb-modal-content{padding:.3em 1.5em 1.5em}.atcb-modal-icon+.atcb-modal-content{padding-top:1.8em}}.atcb-modal-buttons{background-color:var(--modal-btn-bar);border-radius:0 0 6px 6px;box-sizing:border-box;padding:.8em 1em;text-align:center;width:100%;display:flex;justify-content:center;flex-flow:row-reverse wrap;align-items:center}a.atcb-modal-btn,button.atcb-modal-btn{background-color:var(--modal-btn-secondary-background);border:0;border-radius:6px;box-shadow:var(--modal-shadow-btn);color:var(--modal-btn-secondary-text);cursor:pointer;display:inline-block;font-family:var(--font);font-size:.9em;font-weight:600;line-height:1.5em;margin:.625em;padding:.625em 1.25em;position:relative;text-align:center;text-decoration:none;touch-action:manipulation;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;text-transform:uppercase}a.atcb-modal-btn.atcb-modal-btn-primary,button.atcb-modal-btn.atcb-modal-btn-primary{background-color:var(--modal-btn-background);color:var(--modal-btn-text)}a.atcb-modal-btn:hover,button.atcb-modal-btn:hover{background-color:var(--modal-btn-background-hover);box-shadow:var(--modal-shadow-btn-hover);color:var(--modal-btn-text-hover);text-decoration:none}a.atcb-modal-btn:focus-visible,button.atcb-modal-btn:focus-visible{background-color:var(--modal-btn-background-hover);outline:2px solid var(--keyboard-focus)}.atcb-subevent-btn{display:flex;align-items:flex-start;cursor:pointer;font-family:var(--font);font-size:1em;box-shadow:var(--date-btn-shadow);background-color:var(--date-btn-background);border:0;border-radius:6px;padding:0;margin:0;touch-action:manipulation;position:relative;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent}.atcb-subevent-btn:hover{align-items:center}.atcb-subevent-btn:focus,.atcb-subevent-btn:hover{background-color:var(--date-btn-background-hover);box-shadow:var(--date-btn-shadow-hover)}.atcb-subevent-btn:focus-visible{outline:2px solid var(--keyboard-focus)}.atcb-subevent-btn+.atcb-subevent-btn{margin-top:30px}.atcb-date-btn-left{border-radius:4px 0 0 4px;align-self:stretch;background-color:var(--date-btn-cal-background);color:var(--date-btn-background-hover);padding:.7em .8em .8em;width:2.7em;align-items:center;display:flex;flex-direction:column}.atcb-rtl .atcb-date-btn-left{border-radius:0 4px 4px 0}.atcb-subevent-btn:hover .atcb-date-btn-left{opacity:.8}.atcb-date-btn-day{color:var(--date-btn-cal-day-text);font-weight:300;font-size:2em;word-break:keep-all;padding-bottom:.1em}.atcb-initialized[lang=ja] .atcb-date-btn-day,.atcb-initialized[lang=ko] .atcb-date-btn-day,.atcb-initialized[lang=zh] .atcb-date-btn-day{font-size:1.3em}.atcb-date-btn-month{color:var(--date-btn-cal-month-text);font-weight:600;font-size:1em}.atcb-date-btn-right{position:relative;color:var(--date-btn-text);min-width:12.5em;overflow-wrap:anywhere}.atcb-date-btn-details{opacity:1;padding:.7em .8em;text-align:left}.atcb-rtl .atcb-date-btn-details{text-align:right}.atcb-date-btn-hover{position:absolute;top:0;left:0;width:100%;opacity:0;height:100%;display:flex;align-items:center;justify-content:center;font-weight:600;font-size:1em;padding:.3em;box-sizing:border-box}.atcb-subevent-btn:hover .atcb-date-btn-details{opacity:0}.atcb-subevent-btn:hover .atcb-date-btn-hover{opacity:1}.atcb-date-btn-headline{font-weight:600;font-size:.9em;margin-bottom:.5em;overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}.atcb-date-btn-content{display:flex;align-items:flex-start;font-size:.8em;color:var(--date-btn-text-secondary)}.atcb-date-btn-content-location{overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;word-break:break-all}.atcb-date-btn-content-icon{display:inline-block;height:.8em;width:1.3em;flex:0 0 1.3em}.atcb-rtl .atcb-date-btn-content-icon{margin-right:0;margin-left:.5em}.atcb-initialized[lang=ja] .atcb-date-btn-content:not(.atcb-date-btn-content-location) .atcb-date-btn-content-icon,.atcb-initialized[lang=ko] .atcb-date-btn-content:not(.atcb-date-btn-content-location) .atcb-date-btn-content-icon,.atcb-initialized[lang=zh] .atcb-date-btn-content:not(.atcb-date-btn-content-location) .atcb-date-btn-content-icon{margin-top:.15em}.atcb-date-btn-content-icon svg{height:100%;fill:currentcolor;width:auto}.atcb-date-btn-content+.atcb-date-btn-content{margin-top:.3em}.atcb-date-btn-content-text span:not(.atcb-icon-ical){padding-right:.3em;display:inline-block}.atcb-checkmark{display:none}.atcb-saved .atcb-checkmark{box-sizing:content-box;color:var(--btn-text);display:block;position:absolute;top:-.9em;right:-.3em;padding:.5em;background:var(--checkmark-background);border-radius:100%;height:1.5em}.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropoverlay) .atcb-checkmark,.atcb-button.atcb-single:focus .atcb-checkmark,.atcb-button.atcb-single:hover .atcb-checkmark{top:-.77em;right:-.17em}.atcb-checkmark svg{height:100%;fill:currentcolor;width:auto}#atcb-bgoverlay{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background-color:var(--overlay-background);border:0;box-sizing:border-box;display:flex;height:calc(100vh + 100px);inset-inline:0;left:0;right:0;top:0;min-height:100%;min-width:100%;overflow-y:auto;padding:20px 20px 130px;position:fixed;width:100vw;z-index:14000000}#atcb-bgoverlay:not(dialog){animation:atcb-bgoverlay-animate .2s ease 0s 1 normal forwards;opacity:0}#atcb-bgoverlay.atcb-no-bg{animation:none;backdrop-filter:none;-webkit-backdrop-filter:none;opacity:1;background-color:transparent}@keyframes atcb-bgoverlay-animate{0%{opacity:0}100%{opacity:1}}#atcb-bgoverlay.atcb-click:hover{cursor:var(--overlay-cursor)}.atcb-icon .atcb-icon-apple svg{fill:currentcolor}.atcb-icon .atcb-icon-ical svg{fill:currentcolor}.atcb-icon .atcb-icon-ms365 svg{fill:var(--icon-ms365-color)}.atcb-icon .atcb-icon-yahoo svg{fill:var(--icon-yahoo-color)}.atcb-icon .atcb-icon-google svg,.atcb-icon .atcb-icon-msteams svg,.atcb-icon .atcb-icon-outlookcom svg{filter:var(--icon-filter)}`,
      '3d': `:host{width:fit-content;--base-font-size-l:16px;--base-font-size-m:16px;--base-font-size-s:16px;--font:arial,helvetica,sans-serif;--keyboard-focus:#1e90ff;--btn-background:#f5f5f5;--btn-background-hover:#fff;--btn-border:#d2d2d2;--btn-text:#333;--btn-text-hover:#000;--btn-shadow:rgba(0 0 0 / 20%) 2px 5px 18px -1px,rgba(0 0 0 / 15%) 2px 2px 10px -3px;--btn-shadow-hover:rgba(0 0 0 / 35%) 2px 5px 18px -1px,rgba(0 0 0 / 30%) 2px 2px 10px -3px;--btn-shadow-active:rgba(0 0 0 / 50%) 2px 10px 20px -2px,rgba(0 0 0 / 45%) 2px 4px 12px -3px;--btn-shadow-active-up:rgba(0 0 0 / 40%) 2px -8px 15px -2px,rgba(0 0 0 / 50%) 2px 4px 12px -3px;--list-background:#f5f5f5;--list-background-hover:#fff;--list-text:#333;--list-text-hover:#000;--list-close-background:#e5e5e5;--list-close-text:#777;--list-shadow:rgba(0 0 0 / 20%) 2px 5px 18px -1px,rgba(0 0 0 / 40%) 2px 2px 10px -3px;--list-shadow-modal:rgba(0 0 0 / 60%) 3px 6px 40px -5px,rgba(0 0 0 / 60%) 3px 3px 15px -4px;--modal-text:#000;--modal-background:#f5f5f5;--modal-btn-bar:#c6c8cd;--modal-btn-background:#f5f5f5;--modal-btn-secondary-background:#e2e1e6;--modal-btn-background-hover:#fff;--modal-btn-text:#2e2e2e;--modal-btn-text-hover:#161616;--modal-btn-secondary-text:#666567;--modal-shadow:drop-shadow(5px 8px 30px rgba(0 0 0 / 70%));--modal-shadow-btn:rgba(0 0 0 / 10%) 2px 3px 10px -3px,rgba(0 0 0 / 25%) 1px 1px 8px -4px;--modal-shadow-btn-hover:rgba(0 0 0 / 35%) 3px 5px 15px -2px,rgba(0 0 0 / 20%) 2px 4px 25px -6px;--date-btn-text:#1d1d1e;--date-btn-text-secondary:#3a3a3f;--date-btn-cal-day-text:#fff;--date-btn-cal-month-text:#d3d2d7;--date-btn-cal-background:#313132;--date-btn-background:#eae9ed;--date-btn-background-hover:#fff;--date-btn-shadow:rgba(0 0 0 / 40%) 1px 3px 15px -4px,rgba(0 0 0 / 20%) 1px 1px 8px -4px;--date-btn-shadow-hover:rgba(0 0 0 / 40%) 4px 6px 18px -1px,rgba(0 0 0 / 35%) 4px 5px 25px -2px;--checkmark-background:radial-gradient(circle,#fff 0,rgba(255 255 255 / 80%) 40%,rgba(255 255 255 / 0%) 70%);--overlay-background:rgba(20 20 20 / 25%);--overlay-cursor:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23777' width='16' height='16' viewBox='0 0 122.878 122.88'%3E%3Cpath d='M1.426 8.313a4.87 4.87 0 0 1 0-6.886 4.87 4.87 0 0 1 6.886 0l53.127 53.127 53.127-53.127a4.87 4.87 0 0 1 6.887 0 4.87 4.87 0 0 1 0 6.886L68.324 61.439l53.128 53.128a4.87 4.87 0 0 1-6.887 6.886L61.438 68.326 8.312 121.453a4.87 4.87 0 0 1-6.886 0 4.87 4.87 0 0 1 0-6.886l53.127-53.128L1.426 8.313h0z'/%3E%3C/svg%3E") 16 16,crosshair;--icon-ms365-color:#ea3e23;--icon-yahoo-color:#5f01d1;--icon-filter:none}:host(.atcb-dark){--btn-background:#2e2e2e;--btn-background-hover:#373737;--btn-border:#4d4d4d;--btn-text:#dedede;--btn-text-hover:#f1f1f1;--btn-shadow:rgba(255 255 255 / 5%) -12px -5px 20px -8px,rgba(255 255 255 / 6%) -7px -5px 15px -3px,rgba(0 0 0 / 50%) 2px 5px 18px -1px,rgba(0 0 0 / 40%) 3px 3px 20px -3px;--btn-shadow-hover:rgba(255 255 255 / 6%) -12px -5px 23px -8px,rgba(255 255 255 / 7%) -7px -5px 18px -3px,rgba(0 0 0 / 60%) 2px 5px 19px -1px,rgba(0 0 0 / 50%) 3px 3px 22px -3px;--btn-shadow-active:rgba(255 255 255 / 7%) -12px -5px 23px -8px,rgba(255 255 255 / 8%) -7px -5px 18px -3px,rgba(0 0 0 / 70%) 2px 10px 20px -1px,rgba(0 0 0 / 60%) 3px 5px 25px -3px;--btn-shadow-active-up:rgba(255 255 255 / 7%) -12px 5px 23px -8px,rgba(255 255 255 / 8%) -7px 5px 18px -3px,rgba(0 0 0 / 60%) 2px -8px 15px -1px,rgba(0 0 0 / 60%) 3px 5px 25px -3px;--list-background:#2e2e2e;--list-background-hover:#373737;--list-text:#dedede;--list-text-hover:#f1f1f1;--list-close-background:#282828;--list-shadow:rgba(255 255 255 / 5%) -12px -5px 20px -8px,rgba(255 255 255 / 6%) -7px -5px 15px -3px,rgba(0 0 0 / 50%) 2px 5px 18px -1px,rgba(0 0 0 / 40%) 3px 3px 20px -3px;--list-shadow-modal:rgba(255 255 255 / 8%) -12px -5px 30px -8px,rgba(255 255 255 / 8%) -7px -5px 15px -3px,rgba(0 0 0 / 60%) 4px 6px 50px -4px,rgba(0 0 0 / 90%) 8px 12px 40px -2px;--modal-text:#f1f1f1;--modal-background:#242424;--modal-btn-bar:#38383a;--modal-btn-background:#181819;--modal-btn-secondary-background:#2e2d30;--modal-btn-background-hover:#434246;--modal-btn-text:#dbdbdb;--modal-btn-text-hover:#fff;--modal-btn-secondary-text:#b8b8b8;--modal-shadow:drop-shadow(5px 8px 30px rgba(0 0 0 / 90%));--modal-shadow-btn:rgba(255 255 255 / 5%) -2px -2px 10px,rgba(0 0 0 / 30%) 1px 2px 8px -1px;--date-btn-text:#ebebf0;--date-btn-text-secondary:#b5b5bd;--date-btn-cal-day-text:#101010;--date-btn-cal-month-text:#3e3e3f;--date-btn-cal-background:#c7c7cd;--date-btn-background:#363636;--date-btn-background-hover:#474747;--date-btn-shadow:rgba(255 255 255 / 10%) -8px -6px 20px,rgba(0 0 0 / 50%) 1px 3px 25px -8px,rgba(0 0 0 / 50%) 1px 1px 10px -3px;--checkmark-background:radial-gradient(circle,rgba(0 0 0 / 50%) 0,rgba(0 0 0 / 30%) 40%,rgba(0 0 0 / 0%) 70%);--overlay-background:rgba(20 20 20 / 60%);--icon-ms365-color:#ea3e23;--icon-yahoo-color:#bebebe;--icon-filter:grayscale(.2)}.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-l)}@media (width <= 991px){.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-m)}}@media (width <= 575px){.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-s)}}.atcb-button-wrapper{display:block;padding:5px;position:relative}.atcb-button{align-items:center;background-color:var(--btn-background);border:1px solid var(--btn-border);border-radius:6px;box-shadow:var(--btn-shadow);color:var(--btn-text);cursor:pointer;display:flex;font-family:var(--font);font-size:1em;font-weight:600;justify-content:center;line-height:1.5em;margin:0;max-width:350px;min-width:10em;padding:.65em 1em;position:relative;text-align:center;touch-action:manipulation;transform:translate3d(0,0,-12px);user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;width:auto;z-index:1}.atcb-button.atcb-no-text,.atcb-button:disabled{min-width:0}.atcb-rtl .atcb-button{direction:rtl;text-align:right}.atcb-button:focus-visible{outline:2px solid var(--keyboard-focus)}.atcb-button:not([disabled]):focus,.atcb-button:not([disabled]):hover{background-color:var(--btn-background-hover);box-shadow:var(--btn-shadow-hover);color:var(--btn-text-hover)}.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropoverlay){background-color:var(--btn-background-hover);z-index:15000000}.atcb-button.atcb-single:not([disabled]):focus,.atcb-button.atcb-single:not([disabled]):hover{background-color:var(--btn-background-hover);box-shadow:var(--btn-shadow-active);color:var(--btn-text-hover);margin:-.13em;padding:.78em 1.13em}.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropup,.atcb-dropoverlay){box-shadow:var(--btn-shadow-active);transform:perspective(100px) rotateX(12deg) translate3d(0,0,2px);transition:transform .1s linear}.atcb-button.atcb-active.atcb-dropup:not(.atcb-modal-style,.atcb-dropoverlay){box-shadow:var(--btn-shadow-active-up);transform:perspective(100px) rotateX(348deg) translate3d(0,0,2px);transition:transform .1s linear}.atcb-button.atcb-active.atcb-dropoverlay{transform:translate3d(0,0,0);z-index:14000090}.atcb-icon{height:1em;margin-bottom:.3em;margin-right:.8em;flex-grow:0;flex-shrink:0}.atcb-rtl .atcb-icon{margin-right:0;margin-left:.8em}.atcb-no-text .atcb-icon{margin-right:0;margin-left:0}.atcb-icon svg{height:100%;fill:currentcolor;width:auto}.atcb-text{overflow-wrap:anywhere}.atcb-button:disabled .atcb-text{letter-spacing:.1em}.atcb-dropdown-anchor{bottom:6px;height:1px;width:100%;opacity:0;position:absolute}.atcb-list-wrapper{box-sizing:border-box;padding:0 4px;position:absolute;transform:translate3d(0,0,0);z-index:14000090}.atcb-list{background-color:var(--list-background);border-radius:0 0 6px 6px;box-sizing:border-box;box-shadow:var(--list-shadow);color:var(--list-text);display:block;font-family:var(--font);min-width:100%;position:relative;user-select:none;-webkit-user-select:none;width:fit-content}.atcb-list-wrapper.atcb-dropdown:not(.atcb-dropup,.atcb-dropoverlay){animation:atcb-list-slide-down .4s ease 50ms 1 normal both;opacity:0}.atcb-list-wrapper.atcb-dropup:not(.atcb-dropoverlay){animation:atcb-list-slide-up .4s ease 50ms 1 normal both;opacity:0}.atcb-list-wrapper.atcb-dropoverlay{transform:translate3d(0,0,2px);z-index:15000000;animation:atcb-list-slide-center .3s ease 0s 1 normal both;opacity:0}@keyframes atcb-list-slide-down{0%{opacity:0;transform:rotateX(70deg);transform-origin:top}100%{opacity:1;transform:rotateX(0);transform-origin:top}}@keyframes atcb-list-slide-up{0%{opacity:0;transform:rotateX(70deg);transform-origin:bottom}100%{opacity:1;transform:rotateX(0);transform-origin:bottom}}@keyframes atcb-list-slide-center{0%{opacity:0;transform:scaleY(1)}1%{opacity:1;transform:scaleY(0)}100%{opacity:1;transform:scaleY(1)}}.atcb-list-item{align-items:center;background-color:var(--list-background);box-sizing:border-box;cursor:pointer;display:flex;font-size:1em;line-height:1.75em;padding:.8em;text-align:left;touch-action:manipulation;-webkit-tap-highlight-color:transparent}.atcb-rtl .atcb-list-item{direction:rtl;text-align:right}.atcb-list-item:hover{background-color:var(--list-background-hover);color:var(--list-text-hover)}.atcb-list-item:focus-visible{background-color:var(--list-background-hover);color:var(--keyboard-focus);font-weight:600;outline:0}.atcb-list-item:last-child{border-radius:0 0 6px 6px}.atcb-dropup .atcb-list-item:last-child{border-radius:0;padding-bottom:1.5em}.atcb-dropoverlay .atcb-list .atcb-list-item:first-child,.atcb-dropup .atcb-list,.atcb-dropup .atcb-list-item:first-child,.atcb-list.atcb-modal .atcb-list-item:first-child{border-radius:6px 6px 0 0}.atcb-dropoverlay .atcb-list .atcb-list-item:only-child,.atcb-list.atcb-modal .atcb-list-item:only-child{border-radius:6px}.atcb-list.atcb-generated-button:not(.atcb-modal) .atcb-list-item:first-child{padding-top:1.5em}.atcb-dropoverlay .atcb-list.atcb-generated-button:not(.atcb-modal) .atcb-list-item:first-child,.atcb-dropup .atcb-list.atcb-generated-button:not(.atcb-modal) .atcb-list-item:first-child{padding-top:.8em}.atcb-dropoverlay .atcb-list,.atcb-list.atcb-modal{border-radius:6px}.atcb-list.atcb-modal{box-shadow:var(--list-shadow-modal)}.atcb-list-item .atcb-icon{margin-bottom:.5em;margin-right:.6em;width:1.125em}.atcb-rtl .atcb-list-item .atcb-icon{margin-right:0;margin-left:.6em}.atcb-no-text .atcb-list-item .atcb-icon{margin:0 auto}.atcb-list-item-close{background-color:var(--list-close-background)}.atcb-list-item.atcb-list-item-close:not(:focus-visible){color:var(--list-close-text)}.atcb-list-item-close svg{fill:currentcolor}.atcb-modal{display:block;margin:auto;min-width:250px;width:auto;position:relative;z-index:14000090}.atcb-modal-box{filter:var(--modal-shadow);color:var(--modal-text);cursor:default;box-sizing:border-box;font-family:var(--font);line-height:1.5em;text-align:left;user-select:none;-webkit-user-select:none;touch-action:manipulation;width:100%;margin-bottom:20px;max-width:32em;-webkit-tap-highlight-color:transparent}.atcb-modal-box.atcb-rtl{text-align:right;direction:rtl;padding:1.25em 1em 1.25em 2em}.atcb-modal-icon{height:2.5em;width:2.5em;border-radius:100%;background-color:var(--modal-background);padding:1.75em;margin:auto}.atcb-modal-icon svg{height:auto;fill:currentcolor;width:100%}.atcb-modal-headline{background-color:var(--modal-background);border-radius:6px 6px 0 0;font-size:1.3em;font-weight:600;line-height:1.5em;padding:1.8em 2em 1.3em;text-transform:uppercase;text-align:center}.atcb-modal-icon+.atcb-modal-headline{margin-top:-2.6em;padding-top:2.6em}.atcb-modal-content{background-color:var(--modal-background);font-size:1em;padding:.3em 2.5em 2.25em}.atcb-modal-icon+.atcb-modal-content{border-radius:6px 6px 0 0;margin-top:-2.6em;padding-top:2.6em}@media (width <= 575px){.atcb-modal-headline{padding:1.8em 1em 1em}.atcb-modal-content{padding:.3em 1.5em 1.5em}.atcb-modal-icon+.atcb-modal-content{padding-top:1.8em}}.atcb-modal-buttons{background-color:var(--modal-btn-bar);border-radius:0 0 6px 6px;box-sizing:border-box;padding:.8em 1em;text-align:center;width:100%;display:flex;justify-content:center;flex-flow:row-reverse wrap;align-items:center}a.atcb-modal-btn,button.atcb-modal-btn{background-color:var(--modal-btn-secondary-background);border:0;border-radius:6px;box-shadow:var(--modal-shadow-btn);color:var(--modal-btn-secondary-text);cursor:pointer;display:inline-block;font-family:var(--font);font-size:.9em;font-weight:600;line-height:1.5em;margin:.625em;padding:.625em 1.25em;position:relative;text-align:center;text-decoration:none;touch-action:manipulation;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;text-transform:uppercase}a.atcb-modal-btn.atcb-modal-btn-primary,button.atcb-modal-btn.atcb-modal-btn-primary{background-color:var(--modal-btn-background);color:var(--modal-btn-text)}a.atcb-modal-btn:hover,button.atcb-modal-btn:hover{background-color:var(--modal-btn-background-hover);box-shadow:var(--modal-shadow-btn-hover);color:var(--modal-btn-text-hover);text-decoration:none}a.atcb-modal-btn:focus-visible,button.atcb-modal-btn:focus-visible{background-color:var(--modal-btn-background-hover);outline:2px solid var(--keyboard-focus)}.atcb-subevent-btn{display:flex;align-items:flex-start;cursor:pointer;font-family:var(--font);font-size:1em;box-shadow:var(--date-btn-shadow);background-color:var(--date-btn-background);border:0;border-radius:6px;padding:0;margin:0;touch-action:manipulation;position:relative;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent}.atcb-subevent-btn:hover{align-items:center}.atcb-subevent-btn:focus,.atcb-subevent-btn:hover{background-color:var(--date-btn-background-hover);box-shadow:var(--date-btn-shadow-hover)}.atcb-subevent-btn:focus-visible{outline:2px solid var(--keyboard-focus)}.atcb-subevent-btn+.atcb-subevent-btn{margin-top:30px}.atcb-date-btn-left{border-radius:4px 0 0 4px;align-self:stretch;background-color:var(--date-btn-cal-background);color:var(--date-btn-background-hover);padding:.7em .8em .8em;width:2.7em;align-items:center;display:flex;flex-direction:column}.atcb-rtl .atcb-date-btn-left{border-radius:0 4px 4px 0}.atcb-subevent-btn:hover .atcb-date-btn-left{opacity:.8}.atcb-date-btn-day{color:var(--date-btn-cal-day-text);font-weight:300;font-size:2em;word-break:keep-all;padding-bottom:.1em}.atcb-initialized[lang=ja] .atcb-date-btn-day,.atcb-initialized[lang=ko] .atcb-date-btn-day,.atcb-initialized[lang=zh] .atcb-date-btn-day{font-size:1.3em}.atcb-date-btn-month{color:var(--date-btn-cal-month-text);font-weight:600;font-size:1em}.atcb-date-btn-right{position:relative;color:var(--date-btn-text);min-width:12.5em;overflow-wrap:anywhere}.atcb-date-btn-details{opacity:1;padding:.7em .8em;text-align:left}.atcb-rtl .atcb-date-btn-details{text-align:right}.atcb-date-btn-hover{position:absolute;top:0;left:0;width:100%;opacity:0;height:100%;display:flex;align-items:center;justify-content:center;font-weight:600;font-size:1em;padding:.3em;box-sizing:border-box}.atcb-subevent-btn:hover .atcb-date-btn-details{opacity:0}.atcb-subevent-btn:hover .atcb-date-btn-hover{opacity:1}.atcb-date-btn-headline{font-weight:600;font-size:.9em;margin-bottom:.5em;overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}.atcb-date-btn-content{display:flex;align-items:flex-start;font-size:.8em;color:var(--date-btn-text-secondary)}.atcb-date-btn-content-location{overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;word-break:break-all}.atcb-date-btn-content-icon{display:inline-block;height:.8em;width:1.3em;flex:0 0 1.3em}.atcb-rtl .atcb-date-btn-content-icon{margin-right:0;margin-left:.5em}.atcb-initialized[lang=ja] .atcb-date-btn-content:not(.atcb-date-btn-content-location) .atcb-date-btn-content-icon,.atcb-initialized[lang=ko] .atcb-date-btn-content:not(.atcb-date-btn-content-location) .atcb-date-btn-content-icon,.atcb-initialized[lang=zh] .atcb-date-btn-content:not(.atcb-date-btn-content-location) .atcb-date-btn-content-icon{margin-top:.15em}.atcb-date-btn-content-icon svg{height:100%;fill:currentcolor;width:auto}.atcb-date-btn-content+.atcb-date-btn-content{margin-top:.3em}.atcb-date-btn-content-text span:not(.atcb-icon-ical){padding-right:.3em;display:inline-block}.atcb-checkmark{display:none}.atcb-saved .atcb-checkmark{box-sizing:content-box;color:var(--btn-text);display:block;position:absolute;top:-.9em;right:-.3em;padding:.5em;background:var(--checkmark-background);border-radius:100%;height:1.5em}.atcb-checkmark svg{height:100%;fill:currentcolor;width:auto}#atcb-bgoverlay{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background-color:var(--overlay-background);border:0;box-sizing:border-box;display:flex;height:calc(100vh + 100px);inset-inline:0;left:0;right:0;top:0;min-height:100%;min-width:100%;overflow-y:auto;padding:20px 20px 130px;position:fixed;width:100vw;z-index:14000000}#atcb-bgoverlay:not(dialog){animation:atcb-bgoverlay-animate .2s ease 0s 1 normal forwards;opacity:0}#atcb-bgoverlay.atcb-no-bg{animation:none;backdrop-filter:none;-webkit-backdrop-filter:none;opacity:1;background-color:transparent}@keyframes atcb-bgoverlay-animate{0%{opacity:0}100%{opacity:1}}#atcb-bgoverlay.atcb-click:hover{cursor:var(--overlay-cursor)}.atcb-icon .atcb-icon-apple svg{fill:currentcolor}.atcb-icon .atcb-icon-ical svg{fill:currentcolor}.atcb-icon .atcb-icon-ms365 svg{fill:var(--icon-ms365-color)}.atcb-icon .atcb-icon-yahoo svg{fill:var(--icon-yahoo-color)}.atcb-icon .atcb-icon-google svg,.atcb-icon .atcb-icon-msteams svg,.atcb-icon .atcb-icon-outlookcom svg{filter:var(--icon-filter)}`,
      flat: `:host{width:fit-content;--base-font-size-l:16px;--base-font-size-m:16px;--base-font-size-s:16px;--font:arial,helvetica,sans-serif;--keyboard-focus:#1e90ff;--btn-background:#f5f5f5;--btn-background-hover:#fff;--btn-border:#545454;--btn-shadow:#333;--btn-text:#333;--btn-text-hover:#000;--list-background:#f5f5f5;--list-background-hover:#fff;--list-border:#545454;--list-text:#333;--list-text-hover:#000;--list-close-background:#545454;--list-close-text:#b0b0b0;--list-close-text-hover:#777;--modal-text:#000;--modal-background:#f5f5f5;--modal-btn-bar:#bababa;--modal-btn-background:#f5f5f5;--modal-btn-secondary-background:#e2e1e6;--modal-btn-background-hover:#fff;--modal-btn-text:#2e2e2e;--modal-btn-text-hover:#161616;--modal-btn-secondary-text:#676767;--date-btn-text:#1d1d1e;--date-btn-text-secondary:#414141;--date-btn-cal-day-text:#fff;--date-btn-cal-month-text:#d3d2d7;--date-btn-cal-background:#313132;--date-btn-background:#eae9ed;--date-btn-background-hover:#fff;--checkmark-background:radial-gradient(circle,#fff 0,rgba(255 255 255 / 80%) 40%,rgba(255 255 255 / 0%) 70%);--overlay-background:rgba(20 20 20 / 40%);--overlay-cursor:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23777' width='16' height='16' viewBox='0 0 122.878 122.88'%3E%3Cpath d='M1.426 8.313a4.87 4.87 0 0 1 0-6.886 4.87 4.87 0 0 1 6.886 0l53.127 53.127 53.127-53.127a4.87 4.87 0 0 1 6.887 0 4.87 4.87 0 0 1 0 6.886L68.324 61.439l53.128 53.128a4.87 4.87 0 0 1-6.887 6.886L61.438 68.326 8.312 121.453a4.87 4.87 0 0 1-6.886 0 4.87 4.87 0 0 1 0-6.886l53.127-53.128L1.426 8.313h0z'/%3E%3C/svg%3E") 16 16,crosshair;--icon-ms365-color:#ea3e23;--icon-yahoo-color:#5f01d1;--icon-filter:none}:host(.atcb-dark){--btn-background:#222;--btn-background-hover:#373737;--btn-border:#515151;--btn-shadow:#000;--btn-text:#dedede;--btn-text-hover:#f1f1f1;--list-background:#222;--list-background-hover:#373737;--list-border:#515151;--list-text:#dedede;--list-text-hover:#f1f1f1;--list-close-background:#111;--list-close-text:#777;--list-close-text-hover:#f1f1f1;--modal-text:#f1f1f1;--modal-background:#242424;--modal-btn-bar:#313131;--modal-btn-background:#181819;--modal-btn-secondary-background:#2e2d30;--modal-btn-background-hover:#434246;--modal-btn-text:#dbdbdb;--modal-btn-text-hover:#fff;--modal-btn-secondary-text:#b8b8b8;--date-btn-text:#ebebf0;--date-btn-text-secondary:#b5b5bd;--date-btn-cal-day-text:#101010;--date-btn-cal-month-text:#414141;--date-btn-cal-background:#c7c7cd;--date-btn-background:#2d2d2d;--date-btn-background-hover:#474747;--checkmark-background:radial-gradient(circle,rgba(0 0 0 / 50%) 0,rgba(0 0 0 / 30%) 40%,rgba(0 0 0 / 0%) 70%);--overlay-background:rgba(20 20 20 / 75%);--icon-ms365-color:#ea3e23;--icon-yahoo-color:#bebebe;--icon-filter:grayscale(0.2)}.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-l)}@media (width <= 991px){.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-m)}}@media (width <= 575px){.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-s)}}.atcb-button-wrapper{display:block;padding:5px;position:relative}.atcb-button{align-items:center;background-color:var(--btn-background);border:.2em solid var(--btn-border);color:var(--btn-text);cursor:pointer;display:flex;font-family:var(--font);font-size:1em;font-weight:600;justify-content:center;line-height:1.5em;margin:0;max-width:350px;min-width:10em;padding:.8em 1.2em;top:0;left:0;box-shadow:0 0 0 0 var(--btn-shadow);position:relative;text-align:center;touch-action:manipulation;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;width:auto;z-index:1}.atcb-button.atcb-no-text,.atcb-button:disabled{min-width:0}.atcb-button.atcb-click:not([disabled]){top:-3px;left:-3px;box-shadow:3px 3px 0 0 var(--btn-shadow)}.atcb-rtl .atcb-button{direction:rtl;text-align:right}.atcb-button:focus-visible{outline:2px solid var(--keyboard-focus)}.atcb-button:not([disabled]):focus,.atcb-button:not([disabled]):hover{background-color:var(--btn-background-hover);top:0;left:0;box-shadow:0 0 0 0 var(--btn-shadow);color:var(--btn-text-hover)}.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropoverlay){z-index:15000000}.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropoverlay),.atcb-button.atcb-single:not([disabled]):focus,.atcb-button.atcb-single:not([disabled]):hover{background-color:var(--btn-background-hover);top:-5px;left:-5px;box-shadow:5px 5px 0 0 var(--btn-shadow);color:var(--btn-text-hover)}.atcb-button.atcb-active.atcb-dropoverlay{z-index:14000090}.atcb-icon{height:1em;margin-right:1em;line-height:1em;flex-grow:0;flex-shrink:0}.atcb-rtl .atcb-icon{margin-right:0;margin-left:1em}.atcb-no-text .atcb-icon{margin-right:0;margin-left:0}.atcb-icon svg{height:100%;fill:currentcolor;width:auto}.atcb-icon-trigger svg{display:none}.atcb-button .atcb-icon-trigger::after{content:"+";font-size:1.5em}.atcb-text{overflow-wrap:anywhere}.atcb-button:disabled .atcb-text{letter-spacing:.1em}.atcb-dropdown-anchor{bottom:0;height:0;width:100%;opacity:0;position:absolute}.atcb-list-wrapper{box-sizing:border-box;padding:0 2px 0 6px;position:absolute;z-index:16000090}.atcb-list-wrapper:not(.atcb-dropup,.atcb-dropoverlay){animation:list-entrance-bottom .2s ease 0s 1 normal forwards}.atcb-list-wrapper.atcb-dropup{animation:list-entrance-top .2s ease 0s 1 normal forwards}.atcb-list-wrapper.atcb-dropoverlay{z-index:15000000}@keyframes list-entrance-bottom{0%{opacity:0;transform:translateY(150px)}100%{opacity:1;transform:translateY(0)}}@keyframes list-entrance-top{0%{opacity:0;transform:translateY(-150px)}100%{opacity:1;transform:translateY(0)}}.atcb-list{background:var(--list-close-background);box-sizing:border-box;border:.15em solid var(--list-border);color:var(--list-text);display:block;font-family:var(--font);min-width:100%;position:relative;user-select:none;-webkit-user-select:none;width:fit-content}.atcb-list-item{align-items:center;background-color:var(--list-background);box-sizing:border-box;cursor:pointer;display:flex;font-size:1em;line-height:1.75em;padding:.8em;text-align:left;touch-action:manipulation;-webkit-tap-highlight-color:transparent}.atcb-rtl .atcb-list-item{direction:rtl;text-align:right}.atcb-list-item:hover{background-color:var(--list-background-hover);color:var(--list-text-hover)}.atcb-list-item:focus-visible{background-color:var(--list-background-hover);color:var(--keyboard-focus);font-weight:600;outline:0}.atcb-dropup .atcb-list-item:last-child{border-bottom-width:0}.atcb-list.atcb-generated-button:not(.atcb-modal) .atcb-list-item:first-child{border-top-width:0}.atcb-dropoverlay .atcb-list.atcb-generated-button:not(.atcb-modal) .atcb-list-item:first-child,.atcb-dropup .atcb-list.atcb-generated-button:not(.atcb-modal) .atcb-list-item:first-child{border-top-width:.15em}.atcb-list-item .atcb-icon{margin-bottom:.1em;margin-right:.6em;width:1.125em}.atcb-rtl .atcb-list-item .atcb-icon{margin-right:0;margin-left:.6em}.atcb-no-text .atcb-list-item .atcb-icon{margin:0 auto}.atcb-list-item-close{background-color:var(--list-close-background)}.atcb-list-item.atcb-list-item-close:not(:focus-visible){color:var(--list-close-text)}.atcb-list-item.atcb-list-item-close:hover{color:var(--list-close-text-hover)}.atcb-list-item-close svg{fill:currentcolor}.atcb-modal{display:block;margin:auto;min-width:250px;width:auto;position:relative;z-index:14000090}.atcb-modal-box{border:.15em solid var(--btn-border);background-color:var(--modal-background);color:var(--modal-text);cursor:default;box-sizing:border-box;font-family:var(--font);line-height:1.5em;text-align:left;user-select:none;-webkit-user-select:none;touch-action:manipulation;width:100%;margin-bottom:20px;max-width:32em;-webkit-tap-highlight-color:transparent}.atcb-modal-box.atcb-rtl{text-align:right;direction:rtl;padding:1.25em 1em 1.25em 2em}.atcb-modal-icon{height:2.5em;width:2.5em;padding:1.75em;margin:auto}.atcb-modal-icon svg{height:auto;fill:currentcolor;width:100%}.atcb-modal-headline{font-size:1.3em;font-weight:600;line-height:1.5em;padding:1.8em 2em 1.3em;text-transform:uppercase;text-align:center}.atcb-modal-icon+.atcb-modal-headline{padding-top:0}.atcb-modal-content{font-size:1em;padding:.3em 2.5em 2.25em}.atcb-modal-icon+.atcb-modal-content{border-radius:6px 6px 0 0;padding-top:0}@media (width <= 575px){.atcb-modal-headline{padding:1.8em 1em 1em}.atcb-modal-content{padding:.3em 1.5em 1.5em}}.atcb-modal-buttons{background-color:var(--modal-btn-bar);box-sizing:border-box;padding:.8em 1em;text-align:center;width:100%;display:flex;justify-content:center;flex-flow:row-reverse wrap;align-items:center}a.atcb-modal-btn,button.atcb-modal-btn{border:.2em solid var(--btn-border);background-color:var(--modal-btn-secondary-background);color:var(--modal-btn-secondary-text);cursor:pointer;display:inline-block;font-family:var(--font);font-size:.9em;font-weight:600;line-height:1.5em;margin:.625em;padding:.625em 1.25em;position:relative;text-align:center;text-decoration:none;touch-action:manipulation;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;text-transform:uppercase;top:0;left:0;box-shadow:0 0 0 0 var(--btn-shadow)}a.atcb-modal-btn.atcb-modal-btn-primary,button.atcb-modal-btn.atcb-modal-btn-primary{background-color:var(--modal-btn-background);color:var(--modal-btn-text)}a.atcb-modal-btn:hover,button.atcb-modal-btn:hover{background-color:var(--modal-btn-background-hover);color:var(--modal-btn-text-hover);text-decoration:none;top:-3px;left:-3px;box-shadow:3px 3px 0 0 var(--btn-shadow)}a.atcb-modal-btn:focus-visible,button.atcb-modal-btn:focus-visible{background-color:var(--modal-btn-background-hover);outline:2px solid var(--keyboard-focus)}.atcb-subevent-btn{border:.15em solid var(--btn-border);display:flex;align-items:flex-start;cursor:pointer;font-family:var(--font);font-size:1em;background-color:var(--date-btn-background);padding:0;margin:0;touch-action:manipulation;position:relative;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;top:0;left:0;box-shadow:0 0 0 0 var(--btn-shadow)}.atcb-subevent-btn:hover{align-items:center;top:-3px;left:-3px;box-shadow:3px 3px 0 0 var(--btn-shadow)}.atcb-subevent-btn:focus,.atcb-subevent-btn:hover{background-color:var(--date-btn-background-hover)}.atcb-subevent-btn:focus-visible{outline:2px solid var(--keyboard-focus)}.atcb-subevent-btn+.atcb-subevent-btn{margin-top:30px}.atcb-date-btn-left{align-self:stretch;background-color:var(--date-btn-cal-background);color:var(--date-btn-background-hover);padding:.7em .8em .8em;width:2.7em;align-items:center;display:flex;flex-direction:column}.atcb-subevent-btn:hover .atcb-date-btn-left{opacity:.8}.atcb-date-btn-day{color:var(--date-btn-cal-day-text);font-weight:300;font-size:2em;word-break:keep-all;padding-bottom:.1em}.atcb-initialized[lang=ja] .atcb-date-btn-day,.atcb-initialized[lang=ko] .atcb-date-btn-day,.atcb-initialized[lang=zh] .atcb-date-btn-day{font-size:1.3em}.atcb-date-btn-month{color:var(--date-btn-cal-month-text);font-weight:600;font-size:1em}.atcb-date-btn-right{position:relative;color:var(--date-btn-text);min-width:12.5em;overflow-wrap:anywhere}.atcb-date-btn-details{opacity:1;padding:.7em .8em;text-align:left}.atcb-rtl .atcb-date-btn-details{text-align:right}.atcb-date-btn-hover{position:absolute;top:0;left:0;width:100%;opacity:0;height:100%;display:flex;align-items:center;justify-content:center;font-weight:600;font-size:1em;padding:.3em;box-sizing:border-box}.atcb-subevent-btn:hover .atcb-date-btn-details{opacity:0}.atcb-subevent-btn:hover .atcb-date-btn-hover{opacity:1}.atcb-date-btn-headline{font-weight:600;font-size:.9em;margin-bottom:.5em;overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}.atcb-date-btn-content{display:flex;align-items:flex-start;font-size:.8em;color:var(--date-btn-text-secondary)}.atcb-date-btn-content-location{overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;word-break:break-all}.atcb-date-btn-content-icon{display:inline-block;height:.8em;width:1.3em;flex:0 0 1.3em}.atcb-rtl .atcb-date-btn-content-icon{margin-right:0;margin-left:.5em}.atcb-initialized[lang=ja] .atcb-date-btn-content:not(.atcb-date-btn-content-location) .atcb-date-btn-content-icon,.atcb-initialized[lang=ko] .atcb-date-btn-content:not(.atcb-date-btn-content-location) .atcb-date-btn-content-icon,.atcb-initialized[lang=zh] .atcb-date-btn-content:not(.atcb-date-btn-content-location) .atcb-date-btn-content-icon{margin-top:.15em}.atcb-date-btn-content-icon svg{height:100%;fill:currentcolor;width:auto}.atcb-date-btn-content+.atcb-date-btn-content{margin-top:.3em}.atcb-date-btn-content-text span:not(.atcb-icon-ical){padding-right:.3em;display:inline-block}.atcb-checkmark{display:none}.atcb-saved .atcb-checkmark{box-sizing:content-box;color:var(--btn-text);display:block;position:absolute;top:-.9em;right:-.3em;padding:.5em;background:var(--checkmark-background);border-radius:100%;height:1.5em}.atcb-checkmark svg{height:100%;fill:currentcolor;width:auto}#atcb-bgoverlay{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background-color:var(--overlay-background);border:0;box-sizing:border-box;display:flex;height:calc(100vh + 100px);inset-inline:0;left:0;right:0;top:0;min-height:100%;min-width:100%;overflow-y:auto;padding:20px 20px 130px;position:fixed;width:100vw;z-index:14000000}#atcb-bgoverlay:not(dialog){animation:atcb-bgoverlay-animate .2s ease 0s 1 normal forwards;opacity:0}#atcb-bgoverlay.atcb-no-bg{animation:none;backdrop-filter:none;-webkit-backdrop-filter:none;opacity:1;background-color:transparent}@keyframes atcb-bgoverlay-animate{0%{opacity:0}100%{opacity:1}}#atcb-bgoverlay.atcb-click:hover{cursor:var(--overlay-cursor)}.atcb-icon .atcb-icon-apple svg{fill:currentcolor}.atcb-icon .atcb-icon-ical svg{fill:currentcolor}.atcb-icon .atcb-icon-ms365 svg{fill:var(--icon-ms365-color)}.atcb-icon .atcb-icon-yahoo svg{fill:var(--icon-yahoo-color)}.atcb-icon .atcb-icon-google svg,.atcb-icon .atcb-icon-msteams svg,.atcb-icon .atcb-icon-outlookcom svg{filter:var(--icon-filter)}`,
      round: `:host{width:fit-content;--base-font-size-l:16px;--base-font-size-m:16px;--base-font-size-s:16px;--font:arial,helvetica,sans-serif;--keyboard-focus:#1e90ff;--btn-background:#f5f5f5;--btn-background-hover:#fff;--btn-border:#d2d2d2;--btn-text:#333;--btn-text-hover:#000;--btn-shadow:rgba(0 0 0 / 20%) 2px 5px 18px -1px,rgba(0 0 0 / 15%) 2px 2px 10px -3px;--btn-shadow-hover:rgba(0 0 0 / 35%) 2px 5px 18px -1px,rgba(0 0 0 / 30%) 2px 2px 10px -3px;--btn-shadow-active:rgba(0 0 0 / 50%) 2px 5px 18px -1px,rgba(0 0 0 / 45%) 2px 2px 10px -3px;--list-background:#f5f5f5;--list-background-hover:#fff;--list-text:#333;--list-text-hover:#000;--list-close-background:#e5e5e5;--list-close-text:#777;--list-shadow:rgba(0 0 0 / 20%) 2px 5px 18px -1px,rgba(0 0 0 / 40%) 2px 2px 10px -3px;--list-shadow-modal:rgba(0 0 0 / 60%) 3px 6px 40px -5px,rgba(0 0 0 / 60%) 3px 3px 15px -4px;--modal-text:#000;--modal-background:#f5f5f5;--modal-btn-bar:#c6c8cd;--modal-btn-background:#f5f5f5;--modal-btn-secondary-background:#e2e1e6;--modal-btn-background-hover:#fff;--modal-btn-text:#2e2e2e;--modal-btn-text-hover:#161616;--modal-btn-secondary-text:#666567;--modal-shadow:drop-shadow(5px 8px 30px rgba(0 0 0 / 70%));--modal-shadow-btn:rgba(0 0 0 / 10%) 2px 3px 10px -3px,rgba(0 0 0 / 25%) 1px 1px 8px -4px;--modal-shadow-btn-hover:rgba(0 0 0 / 35%) 3px 5px 15px -2px,rgba(0 0 0 / 20%) 2px 4px 25px -6px;--date-btn-text:#1d1d1e;--date-btn-text-secondary:#3a3a3f;--date-btn-cal-day-text:#fff;--date-btn-cal-month-text:#d3d2d7;--date-btn-cal-background:#313132;--date-btn-background:#eae9ed;--date-btn-background-hover:#fff;--date-btn-shadow:rgba(0 0 0 / 40%) 1px 3px 15px -4px,rgba(0 0 0 / 20%) 1px 1px 8px -4px;--date-btn-shadow-hover:rgba(0 0 0 / 40%) 4px 6px 18px -1px,rgba(0 0 0 / 35%) 4px 5px 25px -2px;--checkmark-background:radial-gradient(circle,#fff 0,rgba(255 255 255 / 80%) 40%,rgba(255 255 255 / 0%) 70%);--overlay-background:rgba(20 20 20 / 25%);--overlay-cursor:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23777' width='16' height='16' viewBox='0 0 122.878 122.88'%3E%3Cpath d='M1.426 8.313a4.87 4.87 0 0 1 0-6.886 4.87 4.87 0 0 1 6.886 0l53.127 53.127 53.127-53.127a4.87 4.87 0 0 1 6.887 0 4.87 4.87 0 0 1 0 6.886L68.324 61.439l53.128 53.128a4.87 4.87 0 0 1-6.887 6.886L61.438 68.326 8.312 121.453a4.87 4.87 0 0 1-6.886 0 4.87 4.87 0 0 1 0-6.886l53.127-53.128L1.426 8.313h0z'/%3E%3C/svg%3E") 16 16,crosshair;--icon-ms365-color:#ea3e23;--icon-yahoo-color:#5f01d1;--icon-filter:none}:host(.atcb-dark){--btn-background:#2e2e2e;--btn-background-hover:#373737;--btn-border:#4d4d4d;--btn-text:#dedede;--btn-text-hover:#f1f1f1;--btn-shadow:rgba(255 255 255 / 5%) -12px -5px 20px -8px,rgba(255 255 255 / 6%) -7px -5px 15px -3px,rgba(0 0 0 / 50%) 2px 5px 18px -1px,rgba(0 0 0 / 40%) 3px 3px 20px -3px;--btn-shadow-hover:rgba(255 255 255 / 6%) -12px -5px 23px -8px,rgba(255 255 255 / 7%) -7px -5px 18px -3px,rgba(0 0 0 / 60%) 2px 5px 19px -1px,rgba(0 0 0 / 50%) 3px 3px 22px -3px;--btn-shadow-active:rgba(255 255 255 / 7%) -12px -5px 23px -8px,rgba(255 255 255 / 8%) -7px -5px 18px -3px,rgba(0 0 0 / 70%) 2px 5px 19px -1px,rgba(0 0 0 / 60%) 3px 3px 22px -3px;--list-background:#2e2e2e;--list-background-hover:#373737;--list-text:#dedede;--list-text-hover:#f1f1f1;--list-close-background:#282828;--list-shadow:rgba(255 255 255 / 5%) -12px -5px 20px -8px,rgba(255 255 255 / 6%) -7px -5px 15px -3px,rgba(0 0 0 / 50%) 2px 5px 18px -1px,rgba(0 0 0 / 40%) 3px 3px 20px -3px;--list-shadow-modal:rgba(255 255 255 / 8%) -12px -5px 30px -8px,rgba(255 255 255 / 8%) -7px -5px 15px -3px,rgba(0 0 0 / 60%) 4px 6px 50px -4px,rgba(0 0 0 / 90%) 8px 12px 40px -2px;--modal-text:#f1f1f1;--modal-background:#242424;--modal-btn-bar:#38383a;--modal-btn-background:#181819;--modal-btn-secondary-background:#2e2d30;--modal-btn-background-hover:#434246;--modal-btn-text:#dbdbdb;--modal-btn-text-hover:#fff;--modal-btn-secondary-text:#b8b8b8;--modal-shadow:drop-shadow(5px 8px 30px rgba(0 0 0 / 90%));--modal-shadow-btn:rgba(255 255 255 / 5%) -2px -2px 10px,rgba(0 0 0 / 30%) 1px 2px 8px -1px;--date-btn-text:#ebebf0;--date-btn-text-secondary:#b5b5bd;--date-btn-cal-day-text:#101010;--date-btn-cal-month-text:#3e3e3f;--date-btn-cal-background:#c7c7cd;--date-btn-background:#363636;--date-btn-background-hover:#474747;--date-btn-shadow:rgba(255 255 255 / 10%) -8px -6px 20px,rgba(0 0 0 / 50%) 1px 3px 25px -8px,rgba(0 0 0 / 50%) 1px 1px 10px -3px;--checkmark-background:radial-gradient(circle,rgba(0 0 0 / 50%) 0,rgba(0 0 0 / 30%) 40%,rgba(0 0 0 / 0%) 70%);--overlay-background:rgba(20 20 20 / 60%);--icon-ms365-color:#ea3e23;--icon-yahoo-color:#bebebe;--icon-filter:grayscale(.2)}.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-l)}@media (width <= 991px){.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-m)}}@media (width <= 575px){.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-s)}}.atcb-button-wrapper{display:block;padding:5px;position:relative}.atcb-button{align-items:center;background-color:var(--btn-background);border:1px solid var(--btn-border);border-radius:500px;box-shadow:var(--btn-shadow);color:var(--btn-text);cursor:pointer;display:flex;font-family:var(--font);font-size:1em;font-weight:600;justify-content:center;line-height:1.5em;margin:.13em;max-width:350px;min-width:10em;padding:.65em 1.3em;position:relative;text-align:center;touch-action:manipulation;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;width:auto;z-index:1}.atcb-button.atcb-no-text{min-width:0;border-radius:100%;display:flex;align-content:center;justify-content:center;align-items:center;height:3em;width:3em;padding:0}.atcb-button:disabled{min-width:0}.atcb-rtl .atcb-button{direction:rtl;text-align:right}.atcb-button:focus-visible{outline:2px solid var(--keyboard-focus)}.atcb-button:not([disabled]):focus,.atcb-button:not([disabled]):hover{background-color:var(--btn-background-hover);box-shadow:var(--btn-shadow-hover);color:var(--btn-text-hover);margin:0;padding:.78em 1.43em}.atcb-button.atcb-no-text:focus,.atcb-button.atcb-no-text:hover{height:3.26em;width:3.26em;padding:0}.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropoverlay){z-index:15000000}.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropoverlay,.atcb-no-text),.atcb-button.atcb-single:not(.atcb-no-text,[disabled]):focus,.atcb-button.atcb-single:not(.atcb-no-text,[disabled]):hover{background-color:var(--btn-background-hover);box-shadow:var(--btn-shadow-active);color:var(--btn-text-hover);margin:0;padding:.78em 1.43em}.atcb-button.atcb-active.atcb-no-text:not(.atcb-modal-style,.atcb-dropoverlay),.atcb-button.atcb-single.atcb-no-text:not([disabled]):focus,.atcb-button.atcb-single.atcb-no-text:not([disabled]):hover{background-color:var(--btn-background-hover);box-shadow:var(--btn-shadow-active);color:var(--btn-text-hover);margin:0;padding:.93em 1.43em}.atcb-button.atcb-dropup::after,.atcb-button:not(.atcb-modal-style,.atcb-dropoverlay,.atcb-dropup,.atcb-no-text)::before{content:"";width:0;height:0;position:absolute;left:0;right:0;margin:0 auto;transition:border-width .1s linear .1s}.atcb-button:not(.atcb-modal-style,.atcb-dropoverlay,.atcb-dropup,.atcb-no-text)::before{top:100%;border:0 solid transparent;border-bottom:none;border-top-color:var(--btn-background-hover)}.atcb-button.atcb-dropup::after{bottom:100%;border:0 solid transparent;border-top:none;border-bottom-color:var(--btn-background-hover)}.atcb-button.atcb-active.atcb-dropup::after,.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropoverlay,.atcb-dropup,.atcb-no-text)::before{border-width:.35em}.atcb-button.atcb-active.atcb-dropoverlay{z-index:14000090}.atcb-icon{height:1em;margin-bottom:.3em;margin-right:.8em;flex-grow:0;flex-shrink:0}.atcb-rtl .atcb-icon{margin-right:0;margin-left:.8em}.atcb-no-text .atcb-icon{margin-right:0;margin-left:0}.atcb-icon svg{height:100%;fill:currentcolor;width:auto}.atcb-text{overflow-wrap:anywhere}.atcb-button:disabled .atcb-text{letter-spacing:.1em}.atcb-dropdown-anchor{bottom:-15px;height:0;width:100%;opacity:0;position:absolute}.atcb-list-wrapper{box-sizing:border-box;position:absolute;z-index:14000090;min-width:12.5em;width:auto}.atcb-list-wrapper:not(.atcb-dropup,.atcb-dropoverlay){animation:list-entrance-bottom .2s ease 0s 1 normal forwards}.atcb-list-wrapper.atcb-dropup{animation:list-entrance-top .2s ease 0s 1 normal forwards}.atcb-list-wrapper.atcb-dropoverlay{animation:list-entrance-center .2s ease 0s 1 normal forwards;z-index:15000000}@keyframes list-entrance-bottom{0%{opacity:0;transform:translateY(250px)}100%{opacity:1;transform:translateY(0)}}@keyframes list-entrance-top{0%{opacity:0;transform:translateY(-250px)}100%{opacity:1;transform:translateY(0)}}@keyframes list-entrance-center{0%{opacity:0;transform:scaleY(1)}1%{opacity:1;transform:scaleY(0)}100%{opacity:1;transform:scaleY(1)}}.atcb-list{border-radius:11px;box-sizing:border-box;box-shadow:var(--list-shadow);color:var(--list-text);display:block;font-family:var(--font);min-width:100%;position:relative;user-select:none;-webkit-user-select:none;width:fit-content}.atcb-list-item{align-items:center;background-color:var(--list-background);box-sizing:border-box;cursor:pointer;display:flex;font-size:1em;line-height:1.75em;padding:.8em;text-align:left;touch-action:manipulation;-webkit-tap-highlight-color:transparent}.atcb-rtl .atcb-list-item{direction:rtl;text-align:right}.atcb-list-item:hover{background-color:var(--list-background-hover);color:var(--list-text-hover)}.atcb-list-item:focus-visible{background-color:var(--list-background-hover);color:var(--keyboard-focus);font-weight:600;outline:0}.atcb-list-item:last-child{border-radius:0 0 11px 11px}.atcb-list-item:first-child{border-radius:11px 11px 0 0}.atcb-list-item:only-child{border-radius:11px}.atcb-list.atcb-modal{box-shadow:var(--list-shadow-modal)}.atcb-list-item .atcb-icon{margin-bottom:.5em;margin-right:.6em;width:1.125em}.atcb-rtl .atcb-list-item .atcb-icon{margin-right:0;margin-left:.6em}.atcb-no-text .atcb-list-item .atcb-icon{margin:0 auto}.atcb-list-item-close{background-color:var(--list-close-background)}.atcb-list-item.atcb-list-item-close:not(:focus-visible){color:var(--list-close-text)}.atcb-list-item-close svg{fill:currentcolor}.atcb-modal{display:block;margin:auto;min-width:250px;width:auto;position:relative;z-index:14000090}.atcb-modal-box{filter:var(--modal-shadow);color:var(--modal-text);cursor:default;box-sizing:border-box;font-family:var(--font);line-height:1.5em;text-align:left;user-select:none;-webkit-user-select:none;touch-action:manipulation;width:100%;margin-bottom:20px;max-width:32em;-webkit-tap-highlight-color:transparent}.atcb-modal-box.atcb-rtl{text-align:right;direction:rtl;padding:1.25em 1em 1.25em 2em}.atcb-modal-icon{height:2.5em;width:2.5em;border-radius:100%;background-color:var(--modal-background);padding:1.75em;margin:auto}.atcb-modal-icon svg{height:auto;fill:currentcolor;width:100%}.atcb-modal-headline{background-color:var(--modal-background);border-radius:9px 9px 0 0;font-size:1.3em;font-weight:600;line-height:1.5em;padding:1.8em 2em 1.3em;text-transform:uppercase;text-align:center}.atcb-modal-icon+.atcb-modal-headline{margin-top:-2.6em;padding-top:2.6em}.atcb-modal-content{background-color:var(--modal-background);font-size:1em;padding:.3em 2.5em 2.25em}.atcb-modal-icon+.atcb-modal-content{border-radius:9px 9px 0 0;margin-top:-2.6em;padding-top:2.6em}@media (width <= 575px){.atcb-modal-headline{padding:1.8em 1em 1em}.atcb-modal-content{padding:.3em 1.5em 1.5em}.atcb-modal-icon+.atcb-modal-content{padding-top:1.8em}}.atcb-modal-buttons{background-color:var(--modal-btn-bar);border-radius:0 0 9px 9px;box-sizing:border-box;padding:.8em 1em;text-align:center;width:100%;display:flex;justify-content:center;flex-flow:row-reverse wrap;align-items:center}a.atcb-modal-btn,button.atcb-modal-btn{background-color:var(--modal-btn-secondary-background);border:0;border-radius:500px;box-shadow:var(--modal-shadow-btn);color:var(--modal-btn-secondary-text);cursor:pointer;display:inline-block;font-family:var(--font);font-size:.9em;font-weight:600;line-height:1.5em;margin:.625em;padding:.625em 1.25em;position:relative;text-align:center;text-decoration:none;touch-action:manipulation;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;text-transform:uppercase}a.atcb-modal-btn.atcb-modal-btn-primary,button.atcb-modal-btn.atcb-modal-btn-primary{background-color:var(--modal-btn-background);color:var(--modal-btn-text)}a.atcb-modal-btn:hover,button.atcb-modal-btn:hover{background-color:var(--modal-btn-background-hover);box-shadow:var(--modal-shadow-btn-hover);color:var(--modal-btn-text-hover);text-decoration:none}a.atcb-modal-btn:focus-visible,button.atcb-modal-btn:focus-visible{background-color:var(--modal-btn-background-hover);outline:2px solid var(--keyboard-focus)}.atcb-subevent-btn{display:flex;align-items:flex-start;cursor:pointer;font-family:var(--font);font-size:1em;box-shadow:var(--date-btn-shadow);background-color:var(--date-btn-background);border:0;border-radius:6px;padding:0;margin:0;touch-action:manipulation;position:relative;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent}.atcb-subevent-btn:hover{align-items:center}.atcb-subevent-btn:focus,.atcb-subevent-btn:hover{background-color:var(--date-btn-background-hover);box-shadow:var(--date-btn-shadow-hover)}.atcb-subevent-btn:focus-visible{outline:2px solid var(--keyboard-focus)}.atcb-subevent-btn+.atcb-subevent-btn{margin-top:30px}.atcb-date-btn-left{border-radius:4px 0 0 4px;align-self:stretch;background-color:var(--date-btn-cal-background);color:var(--date-btn-background-hover);padding:.7em .8em .8em;width:2.7em;align-items:center;display:flex;flex-direction:column}.atcb-rtl .atcb-date-btn-left{border-radius:0 4px 4px 0}.atcb-subevent-btn:hover .atcb-date-btn-left{opacity:.8}.atcb-date-btn-day{color:var(--date-btn-cal-day-text);font-weight:300;font-size:2em;word-break:keep-all;padding-bottom:.1em}.atcb-initialized[lang=ja] .atcb-date-btn-day,.atcb-initialized[lang=ko] .atcb-date-btn-day,.atcb-initialized[lang=zh] .atcb-date-btn-day{font-size:1.3em}.atcb-date-btn-month{color:var(--date-btn-cal-month-text);font-weight:600;font-size:1em}.atcb-date-btn-right{position:relative;color:var(--date-btn-text);min-width:12.5em;overflow-wrap:anywhere}.atcb-date-btn-details{opacity:1;padding:.7em .8em;text-align:left}.atcb-rtl .atcb-date-btn-details{text-align:right}.atcb-date-btn-hover{position:absolute;top:0;left:0;width:100%;opacity:0;height:100%;display:flex;align-items:center;justify-content:center;font-weight:600;font-size:1em;padding:.3em;box-sizing:border-box}.atcb-subevent-btn:hover .atcb-date-btn-details{opacity:0}.atcb-subevent-btn:hover .atcb-date-btn-hover{opacity:1}.atcb-date-btn-headline{font-weight:600;font-size:.9em;margin-bottom:.5em;overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}.atcb-date-btn-content{display:flex;align-items:flex-start;font-size:.8em;color:var(--date-btn-text-secondary)}.atcb-date-btn-content-location{overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;word-break:break-all}.atcb-date-btn-content-icon{display:inline-block;height:.8em;width:1.3em;flex:0 0 1.3em}.atcb-rtl .atcb-date-btn-content-icon{margin-right:0;margin-left:.5em}.atcb-initialized[lang=ja] .atcb-date-btn-content:not(.atcb-date-btn-content-location) .atcb-date-btn-content-icon,.atcb-initialized[lang=ko] .atcb-date-btn-content:not(.atcb-date-btn-content-location) .atcb-date-btn-content-icon,.atcb-initialized[lang=zh] .atcb-date-btn-content:not(.atcb-date-btn-content-location) .atcb-date-btn-content-icon{margin-top:.15em}.atcb-date-btn-content-icon svg{height:100%;fill:currentcolor;width:auto}.atcb-date-btn-content+.atcb-date-btn-content{margin-top:.3em}.atcb-date-btn-content-text span:not(.atcb-icon-ical){padding-right:.3em;display:inline-block}.atcb-checkmark{display:none}.atcb-saved .atcb-checkmark{box-sizing:content-box;color:var(--btn-text);display:block;position:absolute;top:-.9em;right:-.3em;padding:.5em;background:var(--checkmark-background);border-radius:100%;height:1.5em}.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropoverlay) .atcb-checkmark,.atcb-button:focus .atcb-checkmark,.atcb-button:hover .atcb-checkmark{top:-.77em;right:-.17em}.atcb-checkmark svg{height:100%;fill:currentcolor;width:auto}#atcb-bgoverlay{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background-color:var(--overlay-background);border:0;box-sizing:border-box;display:flex;height:calc(100vh + 100px);inset-inline:0;left:0;right:0;top:0;min-height:100%;min-width:100%;overflow-y:auto;padding:20px 20px 130px;position:fixed;width:100vw;z-index:14000000}#atcb-bgoverlay:not(dialog){animation:atcb-bgoverlay-animate .2s ease 0s 1 normal forwards;opacity:0}#atcb-bgoverlay.atcb-no-bg{animation:none;backdrop-filter:none;-webkit-backdrop-filter:none;opacity:1;background-color:transparent}@keyframes atcb-bgoverlay-animate{0%{opacity:0}100%{opacity:1}}#atcb-bgoverlay.atcb-click:hover{cursor:var(--overlay-cursor)}.atcb-icon .atcb-icon-apple svg{fill:currentcolor}.atcb-icon .atcb-icon-ical svg{fill:currentcolor}.atcb-icon .atcb-icon-ms365 svg{fill:var(--icon-ms365-color)}.atcb-icon .atcb-icon-yahoo svg{fill:var(--icon-yahoo-color)}.atcb-icon .atcb-icon-google svg,.atcb-icon .atcb-icon-msteams svg,.atcb-icon .atcb-icon-outlookcom svg{filter:var(--icon-filter)}`,
      neumorphism: `:host{width:fit-content;--base-font-size-l:16px;--base-font-size-m:16px;--base-font-size-s:16px;--font:arial,helvetica,sans-serif;--keyboard-focus:#1e90ff;--btn-background:#f5f5f5;--btn-background-hover:#fff;--btn-text:#444;--btn-text-hover:#111;--btn-shadow:rgba(40 40 40 / 30%) 0.3em 0.3em 0.6em,rgba(255 255 255 / 70%) -0.1em -0.1em 0.3em;--btn-shadow-hover:rgba(40 40 40 / 50%) 0.4em 0.4em 0.8em,rgba(255 255 255 / 90%) -0.2em -0.2em 0.5em;--btn-shadow-active:inset rgba(40 40 40 / 40%) 0.15em 0.15em 0.3em,inset rgba(255 255 255 / 90%) -0.2em -0.2em 0.5em;--list-background:#f5f5f5;--list-background-hover:#fff;--list-text:#444;--list-text-hover:#111;--list-close-background:#e5e5e5;--list-close-text:#777;--list-shadow:rgba(40 40 40 / 30%) 0.4em 0.4em 0.8em,rgba(255 255 255 / 80%) -0.2em -0.2em 0.5em;--modal-text:#111;--modal-background:#f5f5f5;--modal-btn-bar:#c6c8cd;--modal-btn-background:#f5f5f5;--modal-btn-secondary-background:#e2e1e6;--modal-btn-background-hover:#fff;--modal-btn-text:#2e2e2e;--modal-btn-text-hover:#222;--modal-btn-secondary-text:#666567;--modal-shadow:drop-shadow(5px 8px 30px rgba(0 0 0 / 70%));--modal-shadow-btn:rgba(40 40 40 / 15%) 0.2em 0.2em 0.4em,rgba(255 255 255 / 30%) -0.1em -0.1em 0.3em;--modal-shadow-btn-hover:rgba(40 40 40 / 40%) 0.4em 0.4em 0.7em,rgba(255 255 255 / 70%) -0.2em -0.2em 0.5em;--date-btn-text:#1d1d1e;--date-btn-text-secondary:#3a3a3f;--date-btn-cal-day-text:#fff;--date-btn-cal-month-text:#d3d2d7;--date-btn-cal-background:#313132;--date-btn-background:#e3e5ea;--date-btn-background-hover:#fff;--date-btn-shadow:rgba(40 40 40 / 40%) 0.2em 0.2em 0.8em,rgba(255 255 255 / 80%) -0.2em -0.2em 0.4em;--date-btn-shadow-hover:rgba(40 40 40 / 50%) 0.3em 0.4em 1em,rgba(255 255 255) -0.3em -0.3em 0.7em;--checkmark-background:radial-gradient(circle, #fff 0, rgba(255 255 255 / 80%) 40%, rgba(255 255 255 / 0%) 70%);--overlay-background:#dcdcdc;--overlay-cursor:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23777' width='16' height='16' viewBox='0 0 122.878 122.88'%3E%3Cpath d='M1.426 8.313a4.87 4.87 0 0 1 0-6.886 4.87 4.87 0 0 1 6.886 0l53.127 53.127 53.127-53.127a4.87 4.87 0 0 1 6.887 0 4.87 4.87 0 0 1 0 6.886L68.324 61.439l53.128 53.128a4.87 4.87 0 0 1-6.887 6.886L61.438 68.326 8.312 121.453a4.87 4.87 0 0 1-6.886 0 4.87 4.87 0 0 1 0-6.886l53.127-53.128L1.426 8.313h0z'/%3E%3C/svg%3E") 16 16,crosshair;--icon-ms365-color:#ea3e23;--icon-yahoo-color:#5f01d1;--icon-filter:none}:host(.atcb-dark){--btn-background:#2e2e2e;--btn-background-hover:#373737;--btn-text:#dedede;--btn-text-hover:#f1f1f1;--btn-shadow:rgba(0 0 0 / 70%) 0.3em 0.3em 0.6em,rgba(230 230 230 / 30%) -0.05em -0.05em 0.4em;--btn-shadow-hover:rgba(0 0 0 / 80%) 0.4em 0.4em 0.9em,rgba(230 230 230 / 35%) -0.08em -0.08em 0.5em;--btn-shadow-active:inset rgba(0 0 0 / 80%) 0.15em 0.15em 0.25em,inset rgba(230 230 230 / 15%) -0.2em -0.2em 0.6em;--list-background:#2e2e2e;--list-background-hover:#373737;--list-text:#dedede;--list-text-hover:#f1f1f1;--list-close-background:#282828;--list-shadow:rgba(0 0 0) 0.3em 0.3em 1em,rgba(230 230 230 / 40%) -0.08em -0.08em 0.6em;--modal-text:#f1f1f1;--modal-background:#242424;--modal-btn-bar:#38383a;--modal-btn-background:#181819;--modal-btn-secondary-background:#2e2d30;--modal-btn-background-hover:#434246;--modal-btn-text:#dbdbdb;--modal-btn-text-hover:#fff;--modal-btn-secondary-text:#b8b8b8;--modal-shadow:drop-shadow(5px 8px 35px rgba(0 0 0 / 90%));--modal-shadow-btn:rgba(0 0 0 / 60%) 0.2em 0.2em 0.6em,rgba(230 230 230 / 15%) -0.1em -0.1em 0.4em;--modal-shadow-btn-hover:rgba(0 0 0 / 80%) 0.3em 0.3em 0.8em,rgba(230 230 230 / 15%) -0.1em -0.1em 0.6em;--date-btn-text:#ebebf0;--date-btn-text-secondary:#b5b5bd;--date-btn-cal-day-text:#101010;--date-btn-cal-month-text:#3e3e3f;--date-btn-cal-background:#c7c7cd;--date-btn-background:#363636;--date-btn-background-hover:#474747;--date-btn-shadow:rgba(0 0 0 / 70%) 0.2em 0.2em 0.8em,rgba(230 230 230 / 15%) -0.1em -0.1em 0.5em;--date-btn-shadow-hover:rgba(0 0 0) 0.3em 0.4em 1em,rgba(230 230 230 / 15%) -0.2em -0.2em 0.8em;--checkmark-background:radial-gradient(circle, rgba(0 0 0 / 50%) 0, rgba(0 0 0 / 30%) 40%, rgba(0 0 0 / 0%) 70%);--overlay-background:#141414;--icon-ms365-color:#ea3e23;--icon-yahoo-color:#bebebe;--icon-filter:grayscale(0.2)}.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-l)}@media (width <= 991px){.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-m)}}@media (width <= 575px){.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-s)}}.atcb-button-wrapper{display:block;padding:5px;position:relative}.atcb-button{align-items:center;background-color:var(--btn-background);border:0;border-radius:15px;box-shadow:var(--btn-shadow);color:var(--btn-text);cursor:pointer;display:flex;font-family:var(--font);font-size:1em;font-weight:600;justify-content:center;line-height:1.5em;margin:0;max-width:350px;min-width:10em;padding:1em 1.2em;position:relative;text-align:center;touch-action:manipulation;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;width:auto;transition:box-shadow .1s ease-in-out,background-color .1s ease-in-out;z-index:1}.atcb-button.atcb-no-text{min-width:0;border-radius:100%;display:flex;align-content:center;justify-content:center;align-items:center;height:3em;width:3em;padding:0}.atcb-button:disabled{min-width:0}.atcb-rtl .atcb-button{direction:rtl;text-align:right}.atcb-button:focus-visible{outline:2px solid var(--keyboard-focus)}.atcb-button:not([disabled]):focus,.atcb-button:not([disabled]):hover{background-color:var(--btn-background-hover);box-shadow:var(--btn-shadow-hover);color:var(--btn-text-hover)}.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropoverlay){z-index:15000000}.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropoverlay),.atcb-button.atcb-single:not([disabled]):focus,.atcb-button.atcb-single:not([disabled]):hover{background-color:var(--btn-background-hover);box-shadow:var(--btn-shadow-active);color:var(--btn-text-hover)}.atcb-button.atcb-active.atcb-dropoverlay{z-index:14000090}.atcb-icon{height:1em;margin-bottom:.3em;margin-right:.8em;flex-grow:0;flex-shrink:0}.atcb-rtl .atcb-icon{margin-right:0;margin-left:.8em}.atcb-no-text .atcb-icon{margin-right:0;margin-left:0}.atcb-icon svg{height:100%;fill:currentcolor;width:auto}.atcb-text{overflow-wrap:anywhere}.atcb-button:disabled .atcb-text{letter-spacing:.1em}.atcb-dropdown-anchor{bottom:-30px;height:0;width:100%;opacity:0;position:absolute}.atcb-list-wrapper{box-sizing:border-box;position:absolute;min-width:12.5em;width:auto;animation:list-entrance .6s ease 0s 1 normal forwards;z-index:15000000}@keyframes list-entrance{0%{opacity:0}100%{opacity:1}}.atcb-list{border-radius:11px;box-sizing:border-box;box-shadow:var(--list-shadow);color:var(--list-text);display:block;font-family:var(--font);min-width:100%;position:relative;user-select:none;-webkit-user-select:none;width:fit-content}.atcb-list-item{box-shadow:none;align-items:center;background-color:var(--list-background);box-sizing:border-box;cursor:pointer;display:flex;font-size:1em;line-height:1.75em;padding:1em;text-align:left;touch-action:manipulation;-webkit-tap-highlight-color:transparent;transition:box-shadow .15s ease-in-out,padding .15s ease-in-out,margin .15s ease-in-out}.atcb-rtl .atcb-list-item{direction:rtl;text-align:right}.atcb-list-item:hover{box-shadow:var(--btn-shadow);background-color:var(--list-background-hover);color:var(--list-text-hover);padding:1.2em;margin:-.2em;position:relative;z-index:15000010}.atcb-list-item:focus-visible{box-shadow:var(--btn-shadow);background-color:var(--list-background-hover);color:var(--keyboard-focus);padding:1.2em;margin:-.2em;position:relative;z-index:15000010;font-weight:600;outline:0}.atcb-list-item:last-child{border-radius:0 0 11px 11px}.atcb-list-item:first-child{border-radius:11px 11px 0 0}.atcb-list-item:only-child{border-radius:11px}.atcb-list-item .atcb-icon{margin-bottom:.5em;margin-right:.6em;width:1.125em}.atcb-rtl .atcb-list-item .atcb-icon{margin-right:0;margin-left:.6em}.atcb-no-text .atcb-list-item .atcb-icon{margin:0 auto}.atcb-list-item-close{background-color:var(--list-close-background)}.atcb-list-item.atcb-list-item-close:not(:focus-visible){color:var(--list-close-text)}.atcb-list-item-close svg{fill:currentcolor}.atcb-modal{display:block;margin:auto;min-width:250px;width:auto;position:relative;z-index:14000090}.atcb-modal-box{animation:list-entrance .6s ease 0s 1 normal forwards;filter:var(--modal-shadow);color:var(--modal-text);cursor:default;box-sizing:border-box;font-family:var(--font);line-height:1.5em;text-align:left;user-select:none;-webkit-user-select:none;touch-action:manipulation;width:100%;margin-bottom:20px;max-width:32em;-webkit-tap-highlight-color:transparent}.atcb-modal-box.atcb-rtl{text-align:right;direction:rtl;padding:1.25em 1em 1.25em 2em}.atcb-modal-icon{height:2.5em;width:2.5em;border-radius:100%;background-color:var(--modal-background);padding:1.75em;margin:auto}.atcb-modal-icon svg{height:auto;fill:currentcolor;width:100%}.atcb-modal-headline{background-color:var(--modal-background);border-radius:9px 9px 0 0;font-size:1.3em;font-weight:600;line-height:1.5em;padding:1.8em 2em 1.3em;text-transform:uppercase;text-align:center}.atcb-modal-icon+.atcb-modal-headline{margin-top:-2.6em;padding-top:2.6em}.atcb-modal-content{background-color:var(--modal-background);font-size:1em;padding:.3em 2.5em 2.25em}.atcb-modal-icon+.atcb-modal-content{border-radius:6px 6px 0 0;margin-top:-2.6em;padding-top:2.6em}@media (width <= 575px){.atcb-modal-headline{padding:1.8em 1em 1em}.atcb-modal-content{padding:.3em 1.5em 1.5em}.atcb-modal-icon+.atcb-modal-content{padding-top:1.8em}}.atcb-modal-buttons{background-color:var(--modal-btn-bar);border-radius:0 0 9px 9px;box-sizing:border-box;padding:.8em 1em;text-align:center;width:100%;display:flex;justify-content:center;flex-flow:row-reverse wrap;align-items:center}a.atcb-modal-btn,button.atcb-modal-btn{background-color:var(--modal-btn-secondary-background);border:0;border-radius:13px;box-shadow:var(--modal-shadow-btn);color:var(--modal-btn-secondary-text);cursor:pointer;display:inline-block;font-family:var(--font);font-size:.9em;font-weight:600;line-height:1.5em;margin:.625em;padding:.625em 1.25em;position:relative;text-align:center;text-decoration:none;touch-action:manipulation;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;text-transform:uppercase}a.atcb-modal-btn.atcb-modal-btn-primary,button.atcb-modal-btn.atcb-modal-btn-primary{background-color:var(--modal-btn-background);color:var(--modal-btn-text)}a.atcb-modal-btn:hover,button.atcb-modal-btn:hover{background-color:var(--modal-btn-background-hover);box-shadow:var(--modal-shadow-btn-hover);color:var(--modal-btn-text-hover);text-decoration:none}a.atcb-modal-btn:focus-visible,button.atcb-modal-btn:focus-visible{background-color:var(--modal-btn-background-hover);outline:2px solid var(--keyboard-focus)}.atcb-subevent-btn{display:flex;align-items:flex-start;cursor:pointer;font-family:var(--font);font-size:1em;box-shadow:var(--date-btn-shadow);background-color:var(--date-btn-background);border:0;border-radius:6px;padding:0;margin:0;touch-action:manipulation;position:relative;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent}.atcb-subevent-btn:hover{align-items:center}.atcb-subevent-btn:focus,.atcb-subevent-btn:hover{background-color:var(--date-btn-background-hover);box-shadow:var(--date-btn-shadow-hover)}.atcb-subevent-btn:focus-visible{outline:2px solid var(--keyboard-focus)}.atcb-subevent-btn+.atcb-subevent-btn{margin-top:30px}.atcb-date-btn-left{border-radius:4px 0 0 4px;align-self:stretch;background-color:var(--date-btn-cal-background);color:var(--date-btn-background-hover);padding:.7em .8em .8em;width:2.7em;align-items:center;display:flex;flex-direction:column}.atcb-rtl .atcb-date-btn-left{border-radius:0 4px 4px 0}.atcb-subevent-btn:hover .atcb-date-btn-left{opacity:.8}.atcb-date-btn-day{color:var(--date-btn-cal-day-text);font-weight:300;font-size:2em;word-break:keep-all;padding-bottom:.1em}.atcb-initialized[lang=ja] .atcb-date-btn-day,.atcb-initialized[lang=ko] .atcb-date-btn-day,.atcb-initialized[lang=zh] .atcb-date-btn-day{font-size:1.3em}.atcb-date-btn-month{color:var(--date-btn-cal-month-text);font-weight:600;font-size:1em}.atcb-date-btn-right{position:relative;color:var(--date-btn-text);min-width:12.5em;overflow-wrap:anywhere}.atcb-date-btn-details{opacity:1;padding:.7em .8em;text-align:left}.atcb-rtl .atcb-date-btn-details{text-align:right}.atcb-date-btn-hover{position:absolute;top:0;left:0;width:100%;opacity:0;height:100%;display:flex;align-items:center;justify-content:center;font-weight:600;font-size:1em;padding:.3em;box-sizing:border-box}.atcb-subevent-btn:hover .atcb-date-btn-details{opacity:0}.atcb-subevent-btn:hover .atcb-date-btn-hover{opacity:1}.atcb-date-btn-headline{font-weight:600;font-size:.9em;margin-bottom:.5em;overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}.atcb-date-btn-content{display:flex;align-items:flex-start;font-size:.8em;color:var(--date-btn-text-secondary)}.atcb-date-btn-content-location{overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;word-break:break-all}.atcb-date-btn-content-icon{display:inline-block;height:.8em;width:1.3em;flex:0 0 1.3em}.atcb-rtl .atcb-date-btn-content-icon{margin-right:0;margin-left:.5em}.atcb-initialized[lang=ja] .atcb-date-btn-content:not(.atcb-date-btn-content-location) .atcb-date-btn-content-icon,.atcb-initialized[lang=ko] .atcb-date-btn-content:not(.atcb-date-btn-content-location) .atcb-date-btn-content-icon,.atcb-initialized[lang=zh] .atcb-date-btn-content:not(.atcb-date-btn-content-location) .atcb-date-btn-content-icon{margin-top:.15em}.atcb-date-btn-content-icon svg{height:100%;fill:currentcolor;width:auto}.atcb-date-btn-content+.atcb-date-btn-content{margin-top:.3em}.atcb-date-btn-content-text span:not(.atcb-icon-ical){padding-right:.3em;display:inline-block}.atcb-checkmark{display:none}.atcb-saved .atcb-checkmark{box-sizing:content-box;color:var(--btn-text);display:block;position:absolute;top:-.9em;right:-.3em;padding:.5em;background:var(--checkmark-background);border-radius:100%;height:1.5em}.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropoverlay) .atcb-checkmark,.atcb-button.atcb-single:focus .atcb-checkmark,.atcb-button.atcb-single:hover .atcb-checkmark{top:-.77em;right:-.17em}.atcb-checkmark svg{height:100%;fill:currentcolor;width:auto}#atcb-bgoverlay{background-color:var(--overlay-background);border:0;box-sizing:border-box;display:flex;height:calc(100vh + 100px);inset-inline:0;left:0;right:0;top:0;min-height:100%;min-width:100%;overflow-y:auto;padding:20px 20px 130px;position:fixed;width:100vw;z-index:14000000}#atcb-bgoverlay:not(dialog){animation:atcb-bgoverlay-animate .1s ease 0s 1 normal forwards;opacity:0}#atcb-bgoverlay.atcb-no-bg{animation:none;backdrop-filter:none;-webkit-backdrop-filter:none;opacity:1;background-color:transparent}@keyframes atcb-bgoverlay-animate{0%{opacity:0}100%{opacity:1}}#atcb-bgoverlay.atcb-click:hover{cursor:var(--overlay-cursor)}.atcb-icon .atcb-icon-apple svg{fill:currentcolor}.atcb-icon .atcb-icon-ical svg{fill:currentcolor}.atcb-icon .atcb-icon-ms365 svg{fill:var(--icon-ms365-color)}.atcb-icon .atcb-icon-yahoo svg{fill:var(--icon-yahoo-color)}.atcb-icon .atcb-icon-google svg,.atcb-icon .atcb-icon-msteams svg,.atcb-icon .atcb-icon-outlookcom svg{filter:var(--icon-filter)}`,
      text: `:host{width:fit-content;--base-font-size-l:16px;--base-font-size-m:16px;--base-font-size-s:16px;--font:arial,helvetica,sans-serif;--keyboard-focus:#1e90ff;--btn-underline:#a9ceff;--btn-border:#a8a8a8;--btn-background:#f5f5f5;--btn-background-hover:#fff;--btn-text:#333;--btn-text-hover:#000;--btn-text-shadow:#fff;--list-background:#f5f5f5;--list-background-hover:#fff;--list-text:#333;--list-text-hover:#000;--list-close-background:#e5e5e5;--list-close-text:#777;--list-shadow:rgba(0 0 0 / 20%) 2px 5px 18px -1px,rgba(0 0 0 / 40%) 2px 2px 10px -3px;--list-shadow-modal:rgba(0 0 0 / 60%) 3px 6px 40px -5px,rgba(0 0 0 / 60%) 3px 3px 15px -4px;--modal-text:#000;--modal-background:#f5f5f5;--modal-btn-bar:#c6c8cd;--modal-btn-background:#f5f5f5;--modal-btn-secondary-background:#e2e1e6;--modal-btn-background-hover:#fff;--modal-btn-text:#2e2e2e;--modal-btn-text-hover:#161616;--modal-btn-secondary-text:#666567;--modal-shadow:drop-shadow(5px 8px 30px rgba(0 0 0 / 70%));--modal-shadow-btn:rgba(0 0 0 / 10%) 2px 3px 10px -3px,rgba(0 0 0 / 25%) 1px 1px 8px -4px;--modal-shadow-btn-hover:rgba(0 0 0 / 35%) 3px 5px 15px -2px,rgba(0 0 0 / 20%) 2px 4px 25px -6px;--date-btn-text:#1d1d1e;--date-btn-text-secondary:#3a3a3f;--date-btn-cal-day-text:#fff;--date-btn-cal-month-text:#d3d2d7;--date-btn-cal-background:#313132;--date-btn-background:#eae9ed;--date-btn-background-hover:#fff;--date-btn-shadow:rgba(0 0 0 / 40%) 1px 3px 15px -4px,rgba(0 0 0 / 20%) 1px 1px 8px -4px;--date-btn-shadow-hover:rgba(0 0 0 / 40%) 4px 6px 18px -1px,rgba(0 0 0 / 35%) 4px 5px 25px -2px;--checkmark-background:radial-gradient(circle,rgba(255 255 255 / 80%)  0,rgba(255 255 255 / 60%) 40%,rgba(255 255 255 / 0%) 70%);--overlay-background:rgba(200 200 200 / 25%);--overlay-cursor:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23777' width='16' height='16' viewBox='0 0 122.878 122.88'%3E%3Cpath d='M1.426 8.313a4.87 4.87 0 0 1 0-6.886 4.87 4.87 0 0 1 6.886 0l53.127 53.127 53.127-53.127a4.87 4.87 0 0 1 6.887 0 4.87 4.87 0 0 1 0 6.886L68.324 61.439l53.128 53.128a4.87 4.87 0 0 1-6.887 6.886L61.438 68.326 8.312 121.453a4.87 4.87 0 0 1-6.886 0 4.87 4.87 0 0 1 0-6.886l53.127-53.128L1.426 8.313h0z'/%3E%3C/svg%3E") 16 16,crosshair;--icon-ms365-color:#ea3e23;--icon-yahoo-color:#5f01d1;--icon-filter:none}:host(.atcb-dark){--btn-underline:#336db9;--btn-border:#888;--btn-background:#2e2e2e;--btn-background-hover:#373737;--btn-text:#dedede;--btn-text-hover:#fff;--btn-text-shadow:#000;--list-background:#2e2e2e;--list-background-hover:#373737;--list-text:#dedede;--list-text-hover:#fff;--list-close-background:#282828;--list-shadow:rgba(255 255 255 / 5%) -12px -5px 20px -8px,rgba(255 255 255 / 6%) -7px -5px 15px -3px,rgba(0 0 0 / 50%) 2px 5px 18px -1px,rgba(0 0 0 / 40%) 3px 3px 20px -3px;--list-shadow-modal:rgba(255 255 255 / 8%) -12px -5px 30px -8px,rgba(255 255 255 / 8%) -7px -5px 15px -3px,rgba(0 0 0 / 60%) 4px 6px 50px -4px,rgba(0 0 0 / 90%) 8px 12px 40px -2px;--modal-text:#f1f1f1;--modal-background:#242424;--modal-btn-bar:#38383a;--modal-btn-background:#181819;--modal-btn-secondary-background:#2e2d30;--modal-btn-background-hover:#434246;--modal-btn-text:#dbdbdb;--modal-btn-text-hover:#fff;--modal-btn-secondary-text:#b8b8b8;--modal-shadow:drop-shadow(5px 8px 30px rgba(0 0 0 / 90%));--modal-shadow-btn:rgba(255 255 255 / 5%) -2px -2px 10px,rgba(0 0 0 / 30%) 1px 2px 8px -1px;--date-btn-text:#ebebf0;--date-btn-text-secondary:#b5b5bd;--date-btn-cal-day-text:#101010;--date-btn-cal-month-text:#3e3e3f;--date-btn-cal-background:#c7c7cd;--date-btn-background:#363636;--date-btn-background-hover:#474747;--date-btn-shadow:rgba(255 255 255 / 10%) -8px -6px 20px,rgba(0 0 0 / 50%) 1px 3px 25px -8px,rgba(0 0 0 / 50%) 1px 1px 10px -3px;--checkmark-background:radial-gradient(circle,rgba(0 0 0 / 40%) 0,rgba(0 0 0 / 20%) 40%,rgba(0 0 0 / 0%) 70%);--overlay-background:rgba(20 20 20 / 60%);--icon-ms365-color:#ea3e23;--icon-yahoo-color:#bebebe;--icon-filter:grayscale(0.2)}.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-l)}@media (width <= 991px){.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-m)}}@media (width <= 575px){.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-s)}}.atcb-button-wrapper{display:block;padding:5px;position:relative}.atcb-button{background-image:linear-gradient(120deg,var(--btn-underline) 0,var(--btn-underline) 100%);background-repeat:no-repeat;background-size:100% 10%;background-position:0 100%;background-color:transparent;border:0;border-radius:0;transition:background-size .1s ease-in,border-radius .2s ease-in;align-items:center;color:var(--btn-text);cursor:pointer;display:flex;font-family:var(--font);font-size:1em;font-weight:600;justify-content:center;line-height:1.2em;margin:0 .2em;padding:.75em;position:relative;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;width:auto;z-index:1}.atcb-button.atcb-no-text,.atcb-button:disabled{min-width:0}.atcb-rtl .atcb-button{direction:rtl;text-align:right}.atcb-button:focus-visible{outline:2px solid var(--keyboard-focus)}.atcb-button:not([disabled]):focus,.atcb-button:not([disabled]):hover{background-size:100% 100%;color:var(--btn-text-hover);text-shadow:0 0 .7em var(--btn-text-shadow);border-radius:21px}.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropoverlay){z-index:15000000}.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropoverlay),.atcb-button.atcb-single:not([disabled]):focus,.atcb-button.atcb-single:not([disabled]):hover{background-size:100% 10%;border-radius:3px 3px 11px 11px;background-position:0 0;background-color:var(--btn-background);color:var(--btn-text);text-shadow:none}.atcb-button.atcb-active.atcb-dropup{background-position:0 100%;border-radius:11px 11px 3px 3px}.atcb-button.atcb-dropup::after,.atcb-button:not(.atcb-modal-style,.atcb-dropoverlay,.atcb-dropup)::before{content:"";width:0;height:0;position:absolute;left:0;right:0;margin:0 auto;transition:border-width .1s linear .1s}.atcb-button:not(.atcb-modal-style,.atcb-dropoverlay,.atcb-dropup)::before{top:100%;border:0 solid transparent;border-bottom:none;border-top-color:var(--btn-background)}.atcb-button.atcb-dropup::after{bottom:100%;border:0 solid transparent;border-top:none;border-bottom-color:var(--btn-background)}.atcb-button.atcb-active.atcb-dropup::after,.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropoverlay,.atcb-dropup)::before{border-width:.35em}.atcb-button.atcb-active.atcb-dropoverlay{z-index:14000090}.atcb-icon{height:1em;margin-right:1em;line-height:1em;flex-grow:0;flex-shrink:0}.atcb-rtl .atcb-icon{margin-right:0;margin-left:1em}.atcb-no-text .atcb-icon{margin-right:0;margin-left:0}.atcb-icon svg{height:100%;fill:currentcolor;width:auto}.atcb-icon-trigger svg{display:none}.atcb-button .atcb-icon-trigger::after{content:"+";font-size:1.5em}.atcb-text{overflow-wrap:anywhere}.atcb-button:disabled .atcb-text{letter-spacing:.1em}.atcb-dropdown-anchor{bottom:-15px;height:0;width:100%;opacity:0;position:absolute}.atcb-list-wrapper{box-sizing:border-box;position:absolute;z-index:14000090;min-width:12.5em;width:auto}.atcb-list-wrapper:not(.atcb-dropup,.atcb-dropoverlay){animation:list-entrance-bottom .2s ease 0s 1 normal forwards}.atcb-list-wrapper.atcb-dropup{animation:list-entrance-top .2s ease 0s 1 normal forwards}.atcb-list-wrapper.atcb-dropoverlay{animation:list-entrance-center .2s ease 0s 1 normal forwards;z-index:15000000}@keyframes list-entrance-bottom{0%{opacity:0;transform:translateY(250px)}100%{opacity:1;transform:translateY(0)}}@keyframes list-entrance-top{0%{opacity:0;transform:translateY(-250px)}100%{opacity:1;transform:translateY(0)}}@keyframes list-entrance-center{0%{opacity:0;transform:scaleY(1)}1%{opacity:1;transform:scaleY(0)}100%{opacity:1;transform:scaleY(1)}}.atcb-list{border-radius:11px;box-sizing:border-box;box-shadow:var(--list-shadow);color:var(--list-text);display:block;font-family:var(--font);min-width:100%;position:relative;user-select:none;-webkit-user-select:none;width:fit-content}.atcb-list-item{align-items:center;background-color:var(--list-background);box-sizing:border-box;cursor:pointer;display:flex;font-size:1em;line-height:1.75em;padding:.8em 1em;text-align:left;touch-action:manipulation;-webkit-tap-highlight-color:transparent}.atcb-rtl .atcb-list-item{direction:rtl;text-align:right}.atcb-list-item:hover{background-color:var(--list-background-hover);color:var(--list-text-hover)}.atcb-list-item:focus-visible{background-color:var(--list-background-hover);color:var(--keyboard-focus);font-weight:600;outline:0}.atcb-list-item:last-child{border-radius:0 0 11px 11px}.atcb-list-item:first-child{border-radius:11px 11px 0 0}.atcb-list-item:only-child{border-radius:11px}.atcb-list.atcb-modal{box-shadow:var(--list-shadow-modal)}.atcb-list-item .atcb-icon{margin-bottom:.1em;margin-right:.7em;width:1.125em}.atcb-rtl .atcb-list-item .atcb-icon{margin-right:0;margin-left:.7em}.atcb-no-text .atcb-list-item .atcb-icon{margin:0 auto}.atcb-list-item-close{background-color:var(--list-close-background)}.atcb-list-item.atcb-list-item-close:not(:focus-visible){color:var(--list-close-text)}.atcb-list-item-close svg{fill:currentcolor}.atcb-modal{display:block;margin:auto;min-width:250px;width:auto;position:relative;z-index:14000090}.atcb-modal-box{filter:var(--modal-shadow);color:var(--modal-text);cursor:default;box-sizing:border-box;font-family:var(--font);line-height:1.5em;text-align:left;user-select:none;-webkit-user-select:none;touch-action:manipulation;width:100%;margin-bottom:20px;max-width:32em;-webkit-tap-highlight-color:transparent}.atcb-modal-box.atcb-rtl{text-align:right;direction:rtl;padding:1.25em 1em 1.25em 2em}.atcb-modal-icon{height:2.5em;width:2.5em;border-radius:100%;background-color:var(--modal-background);padding:1.75em;margin:auto}.atcb-modal-icon svg{height:auto;fill:currentcolor;width:100%}.atcb-modal-headline{background-color:var(--modal-background);border-radius:9px 9px 0 0;font-size:1.3em;font-weight:600;line-height:1.5em;padding:1.8em 2em 1.3em;text-transform:uppercase;text-align:center}.atcb-modal-icon+.atcb-modal-headline{margin-top:-2.6em;padding-top:2.6em}.atcb-modal-content{background-color:var(--modal-background);font-size:1em;padding:.3em 2.5em 2.25em}.atcb-modal-icon+.atcb-modal-content{border-radius:9px 9px 0 0;margin-top:-2.6em;padding-top:2.6em}@media (width <= 575px){.atcb-modal-headline{padding:1.8em 1em 1em}.atcb-modal-content{padding:.3em 1.5em 1.5em}.atcb-modal-icon+.atcb-modal-content{padding-top:1.8em}}.atcb-modal-buttons{background-color:var(--modal-btn-bar);border-radius:0 0 9px 9px;box-sizing:border-box;padding:.8em 1em;text-align:center;width:100%;display:flex;justify-content:center;flex-flow:row-reverse wrap;align-items:center}a.atcb-modal-btn,button.atcb-modal-btn{background-color:var(--modal-btn-secondary-background);border:0;border-radius:21px;box-shadow:var(--modal-shadow-btn);color:var(--modal-btn-secondary-text);cursor:pointer;display:inline-block;font-family:var(--font);font-size:.9em;font-weight:600;line-height:1.5em;margin:.625em;padding:.625em 1.25em;position:relative;text-align:center;text-decoration:none;touch-action:manipulation;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;text-transform:uppercase}a.atcb-modal-btn.atcb-modal-btn-primary,button.atcb-modal-btn.atcb-modal-btn-primary{background-color:var(--modal-btn-background);color:var(--modal-btn-text)}a.atcb-modal-btn:hover,button.atcb-modal-btn:hover{background-color:var(--modal-btn-background-hover);box-shadow:var(--modal-shadow-btn-hover);color:var(--modal-btn-text-hover);text-decoration:none}a.atcb-modal-btn:focus-visible,button.atcb-modal-btn:focus-visible{background-color:var(--modal-btn-background-hover);outline:2px solid var(--keyboard-focus)}.atcb-subevent-btn{display:flex;align-items:flex-start;cursor:pointer;font-family:var(--font);font-size:1em;box-shadow:var(--date-btn-shadow);background-color:var(--date-btn-background);border:0;border-radius:6px;padding:0;margin:0;touch-action:manipulation;position:relative;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent}.atcb-subevent-btn:hover{align-items:center}.atcb-subevent-btn:focus,.atcb-subevent-btn:hover{background-color:var(--date-btn-background-hover);box-shadow:var(--date-btn-shadow-hover)}.atcb-subevent-btn:focus-visible{outline:2px solid var(--keyboard-focus)}.atcb-subevent-btn+.atcb-subevent-btn{margin-top:30px}.atcb-date-btn-left{border-radius:4px 0 0 4px;align-self:stretch;background-color:var(--date-btn-cal-background);color:var(--date-btn-background-hover);padding:.7em .8em .8em;width:2.7em;align-items:center;display:flex;flex-direction:column}.atcb-rtl .atcb-date-btn-left{border-radius:0 4px 4px 0}.atcb-subevent-btn:hover .atcb-date-btn-left{opacity:.8}.atcb-date-btn-day{color:var(--date-btn-cal-day-text);font-weight:300;font-size:2em;word-break:keep-all;padding-bottom:.1em}.atcb-initialized[lang=ja] .atcb-date-btn-day,.atcb-initialized[lang=ko] .atcb-date-btn-day,.atcb-initialized[lang=zh] .atcb-date-btn-day{font-size:1.3em}.atcb-date-btn-month{color:var(--date-btn-cal-month-text);font-weight:600;font-size:1em}.atcb-date-btn-right{position:relative;color:var(--date-btn-text);min-width:12.5em;overflow-wrap:anywhere}.atcb-date-btn-details{opacity:1;padding:.7em .8em;text-align:left}.atcb-rtl .atcb-date-btn-details{text-align:right}.atcb-date-btn-hover{position:absolute;top:0;left:0;width:100%;opacity:0;height:100%;display:flex;align-items:center;justify-content:center;font-weight:600;font-size:1em;padding:.3em;box-sizing:border-box}.atcb-subevent-btn:hover .atcb-date-btn-details{opacity:0}.atcb-subevent-btn:hover .atcb-date-btn-hover{opacity:1}.atcb-date-btn-headline{font-weight:600;font-size:.9em;margin-bottom:.5em;overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}.atcb-date-btn-content{display:flex;align-items:flex-start;font-size:.8em;color:var(--date-btn-text-secondary)}.atcb-date-btn-content-location{overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;word-break:break-all}.atcb-date-btn-content-icon{display:inline-block;height:.8em;width:1.3em;flex:0 0 1.3em}.atcb-rtl .atcb-date-btn-content-icon{margin-right:0;margin-left:.5em}.atcb-initialized[lang=ja] .atcb-date-btn-content:not(.atcb-date-btn-content-location) .atcb-date-btn-content-icon,.atcb-initialized[lang=ko] .atcb-date-btn-content:not(.atcb-date-btn-content-location) .atcb-date-btn-content-icon,.atcb-initialized[lang=zh] .atcb-date-btn-content:not(.atcb-date-btn-content-location) .atcb-date-btn-content-icon{margin-top:.15em}.atcb-date-btn-content-icon svg{height:100%;fill:currentcolor;width:auto}.atcb-date-btn-content+.atcb-date-btn-content{margin-top:.3em}.atcb-date-btn-content-text span:not(.atcb-icon-ical){padding-right:.3em;display:inline-block}.atcb-checkmark{display:none}.atcb-saved .atcb-checkmark{box-sizing:content-box;color:var(--btn-text);display:block;position:absolute;top:-.9em;right:-.3em;padding:.5em;background:var(--checkmark-background);border-radius:100%;height:1.5em}.atcb-checkmark svg{height:100%;fill:currentcolor;width:auto}#atcb-bgoverlay{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background-color:var(--overlay-background);border:0;box-sizing:border-box;display:flex;height:calc(100vh + 100px);inset-inline:0;left:0;right:0;top:0;min-height:100%;min-width:100%;overflow-y:auto;padding:20px 20px 130px;position:fixed;width:100vw;z-index:14000000}#atcb-bgoverlay:not(dialog){animation:atcb-bgoverlay-animate .2s ease 0s 1 normal forwards;opacity:0}#atcb-bgoverlay.atcb-no-bg{animation:none;backdrop-filter:none;-webkit-backdrop-filter:none;opacity:1;background-color:transparent}@keyframes atcb-bgoverlay-animate{0%{opacity:0}100%{opacity:1}}#atcb-bgoverlay.atcb-click:hover{cursor:var(--overlay-cursor)}.atcb-icon .atcb-icon-apple svg{fill:var(--btn-text)}.atcb-icon .atcb-icon-ical svg{fill:var(--btn-text)}.atcb-icon .atcb-icon-ms365 svg{fill:var(--icon-ms365-color)}.atcb-icon .atcb-icon-yahoo svg{fill:var(--icon-yahoo-color)}.atcb-icon .atcb-icon-google svg,.atcb-icon .atcb-icon-msteams svg,.atcb-icon .atcb-icon-outlookcom svg{filter:var(--icon-filter)}`,
      date: `:host{width:fit-content;--base-font-size-l:16px;--base-font-size-m:16px;--base-font-size-s:16px;--font:arial,helvetica,sans-serif;--keyboard-focus:#1e90ff;--btn-background:#f5f5f5;--btn-background-hover:#fff;--btn-border:#d2d2d2;--btn-text:#333;--btn-text-hover:#000;--btn-shadow:rgba(0 0 0 / 20%) 2px 5px 18px -1px,rgba(0 0 0 / 15%) 2px 2px 10px -3px;--btn-shadow-hover:rgba(0 0 0 / 30%) 2px 5px 18px -1px,rgba(0 0 0 / 25%) 2px 2px 10px -3px;--list-background:#f5f5f5;--list-background-hover:#fff;--list-text:#333;--list-text-hover:#000;--list-close-background:#e5e5e5;--list-close-text:#777;--list-shadow:rgba(0 0 0 / 20%) 2px 5px 18px -1px,rgba(0 0 0 / 40%) 2px 2px 10px -3px;--list-shadow-modal:rgba(0 0 0 / 60%) 3px 6px 40px -5px,rgba(0 0 0 / 60%) 3px 3px 15px -4px;--modal-text:#000;--modal-background:#f5f5f5;--modal-btn-bar:#c6c8cd;--modal-btn-background:#f5f5f5;--modal-btn-secondary-background:#e2e1e6;--modal-btn-background-hover:#fff;--modal-btn-text:#2e2e2e;--modal-btn-text-hover:#161616;--modal-btn-secondary-text:#666567;--modal-shadow:drop-shadow(5px 8px 30px rgba(0 0 0 / 70%));--modal-shadow-btn:rgba(0 0 0 / 10%) 2px 3px 10px -3px,rgba(0 0 0 / 25%) 1px 1px 8px -4px;--modal-shadow-btn-hover:rgba(0 0 0 / 35%) 3px 5px 15px -2px,rgba(0 0 0 / 20%) 2px 4px 25px -6px;--date-btn-text:#1d1d1e;--date-btn-text-secondary:#3a3a3f;--date-btn-cal-day-text:#fff;--date-btn-cal-month-text:#d3d2d7;--date-btn-cal-background:#313132;--date-btn-background:#eae9ed;--date-btn-background-hover:#fff;--date-btn-shadow:rgba(0 0 0 / 40%) 1px 3px 15px -4px,rgba(0 0 0 / 20%) 1px 1px 8px -4px;--date-btn-shadow-hover:rgba(0 0 0 / 40%) 4px 6px 18px -1px,rgba(0 0 0 / 35%) 4px 5px 25px -2px;--checkmark-background:radial-gradient(circle,#fff 0,rgba(255 255 255 / 80%) 40%,rgba(255 255 255 / 0%) 70%);--overlay-background:rgba(20 20 20 / 25%);--overlay-cursor:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23777' width='16' height='16' viewBox='0 0 122.878 122.88'%3E%3Cpath d='M1.426 8.313a4.87 4.87 0 0 1 0-6.886 4.87 4.87 0 0 1 6.886 0l53.127 53.127 53.127-53.127a4.87 4.87 0 0 1 6.887 0 4.87 4.87 0 0 1 0 6.886L68.324 61.439l53.128 53.128a4.87 4.87 0 0 1-6.887 6.886L61.438 68.326 8.312 121.453a4.87 4.87 0 0 1-6.886 0 4.87 4.87 0 0 1 0-6.886l53.127-53.128L1.426 8.313h0z'/%3E%3C/svg%3E") 16 16,crosshair;--icon-ms365-color:#ea3e23;--icon-yahoo-color:#5f01d1;--icon-filter:none}:host(.atcb-dark){--btn-background:#2e2e2e;--btn-background-hover:#474747;--btn-border:#4d4d4d;--btn-text:#dedede;--btn-text-hover:#f1f1f1;--btn-shadow:rgba(255 255 255 / 5%) -12px -5px 20px -8px,rgba(255 255 255 / 6%) -7px -5px 15px -3px,rgba(0 0 0 / 50%) 2px 5px 18px -1px,rgba(0 0 0 / 40%) 3px 3px 20px -3px;--btn-shadow-hover:rgba(255 255 255 / 6%) -12px -5px 23px -8px,rgba(255 255 255 / 7%) -7px -5px 18px -3px,rgba(0 0 0 / 60%) 2px 5px 19px -1px,rgba(0 0 0 / 50%) 3px 3px 22px -3px;--list-background:#2e2e2e;--list-background-hover:#474747;--list-text:#dedede;--list-text-hover:#f1f1f1;--list-close-background:#282828;--list-shadow:rgba(255 255 255 / 5%) -12px -5px 20px -8px,rgba(255 255 255 / 6%) -7px -5px 15px -3px,rgba(0 0 0 / 50%) 2px 5px 18px -1px,rgba(0 0 0 / 40%) 3px 3px 20px -3px;--list-shadow-modal:rgba(255 255 255 / 8%) -12px -5px 30px -8px,rgba(255 255 255 / 8%) -7px -5px 15px -3px,rgba(0 0 0 / 60%) 4px 6px 50px -4px,rgba(0 0 0 / 90%) 8px 12px 40px -2px;--modal-text:#f1f1f1;--modal-background:#242424;--modal-btn-bar:#38383a;--modal-btn-background:#181819;--modal-btn-secondary-background:#2e2d30;--modal-btn-background-hover:#434246;--modal-btn-text:#dbdbdb;--modal-btn-text-hover:#fff;--modal-btn-secondary-text:#b8b8b8;--modal-shadow:drop-shadow(5px 8px 30px rgba(0 0 0 / 90%));--modal-shadow-btn:rgba(255 255 255 / 5%) -2px -2px 10px,rgba(0 0 0 / 30%) 1px 2px 8px -1px;--date-btn-text:#ebebf0;--date-btn-text-secondary:#b5b5bd;--date-btn-cal-day-text:#101010;--date-btn-cal-month-text:#3e3e3f;--date-btn-cal-background:#c7c7cd;--date-btn-background:#363636;--date-btn-background-hover:#474747;--date-btn-shadow:rgba(255 255 255 / 10%) -8px -6px 20px,rgba(0 0 0 / 50%) 1px 3px 25px -8px,rgba(0 0 0 / 50%) 1px 1px 10px -3px;--checkmark-background:radial-gradient(circle,rgba(0 0 0 / 50%) 0,rgba(0 0 0 / 30%) 40%,rgba(0 0 0 / 0%) 70%);--overlay-background:rgba(20 20 20 / 60%);--icon-ms365-color:#ea3e23;--icon-yahoo-color:#bebebe;--icon-filter:grayscale(.2)}.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-l)}@media (width <= 991px){.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-m)}}@media (width <= 575px){.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-s)}}.atcb-button-wrapper{display:block;padding:5px;position:relative}.atcb-button,.atcb-subevent-btn{display:flex;align-items:flex-start;cursor:pointer;font-family:var(--font);font-size:1em;box-shadow:var(--date-btn-shadow);background-color:var(--date-btn-background);border:0;border-radius:6px;padding:0;margin:0;touch-action:manipulation;position:relative;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent}.atcb-button{box-shadow:var(--btn-shadow);min-width:17.5em;max-width:16em;position:relative;z-index:1}.atcb-rtl .atcb-button{direction:rtl;text-align:right}.atcb-button:hover,.atcb-subevent-btn:hover{align-items:center}.atcb-subevent-btn:focus,.atcb-subevent-btn:hover{background-color:var(--date-btn-background-hover);box-shadow:var(--date-btn-shadow-hover)}.atcb-button:focus,.atcb-button:hover{background-color:var(--btn-background-hover);box-shadow:var(--btn-shadow-hover)}.atcb-button:focus-visible,.atcb-subevent-btn:focus-visible{outline:2px solid var(--keyboard-focus)}.atcb-button.atcb-active.atcb-dropoverlay{z-index:14000090}.atcb-subevent-btn+.atcb-subevent-btn{margin-top:30px}.atcb-date-btn-left{border-radius:4px 0 0 4px;align-self:stretch;background-color:var(--date-btn-cal-background);color:var(--date-btn-background-hover);padding:.7em .8em .8em;width:2.7em;align-items:center;display:flex;flex-direction:column}.atcb-rtl .atcb-date-btn-left{border-radius:0 4px 4px 0}.atcb-button:hover .atcb-date-btn-left,.atcb-subevent-btn:hover .atcb-date-btn-left{opacity:.8}.atcb-date-btn-day{color:var(--date-btn-cal-day-text);font-weight:300;font-size:2em;word-break:keep-all;padding-bottom:.1em}.atcb-initialized[lang=ja] .atcb-date-btn-day,.atcb-initialized[lang=ko] .atcb-date-btn-day,.atcb-initialized[lang=zh] .atcb-date-btn-day{font-size:1.3em}.atcb-date-btn-month{color:var(--date-btn-cal-month-text);font-weight:600;font-size:1em}.atcb-date-btn-right{position:relative;color:var(--date-btn-text);min-width:12.5em;overflow-wrap:anywhere}.atcb-date-btn-details{opacity:1;padding:.7em .8em;text-align:left}.atcb-rtl .atcb-date-btn-details{text-align:right}.atcb-date-btn-hover{position:absolute;top:0;left:0;width:100%;opacity:0;height:100%;display:flex;align-items:center;justify-content:center;font-weight:600;font-size:1em;padding:.3em;box-sizing:border-box}.atcb-button:disabled .atcb-date-btn-hover{letter-spacing:.1em}.atcb-button:hover .atcb-date-btn-details,.atcb-subevent-btn:hover .atcb-date-btn-details{opacity:0}.atcb-button:hover .atcb-date-btn-hover,.atcb-subevent-btn:hover .atcb-date-btn-hover{opacity:1}.atcb-date-btn-headline{font-weight:600;font-size:.9em;margin-bottom:.5em;overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}.atcb-date-btn-content{display:flex;align-items:flex-start;font-size:.8em;color:var(--date-btn-text-secondary)}.atcb-date-btn-content-location{overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;word-break:break-all}.atcb-date-btn-content-icon{display:inline-block;height:.8em;width:1.3em;flex:0 0 1.3em}.atcb-rtl .atcb-date-btn-content-icon{margin-right:0;margin-left:.5em}.atcb-initialized[lang=ja] .atcb-date-btn-content:not(.atcb-date-btn-content-location) .atcb-date-btn-content-icon,.atcb-initialized[lang=ko] .atcb-date-btn-content:not(.atcb-date-btn-content-location) .atcb-date-btn-content-icon,.atcb-initialized[lang=zh] .atcb-date-btn-content:not(.atcb-date-btn-content-location) .atcb-date-btn-content-icon{margin-top:.15em}.atcb-date-btn-content-icon svg{height:100%;fill:currentcolor;width:auto}.atcb-date-btn-content+.atcb-date-btn-content{margin-top:.3em}.atcb-date-btn-content-text span:not(.atcb-icon-ical){padding-right:.3em;display:inline-block}.atcb-icon{height:1em;margin-bottom:.3em;margin-right:.8em;flex-grow:0;flex-shrink:0}.atcb-rtl .atcb-icon{margin-right:0;margin-left:.8em}.atcb-icon svg{height:100%;fill:currentcolor;width:auto}.atcb-text{overflow-wrap:anywhere}.atcb-dropdown-anchor{bottom:4px;height:1px;width:100%;opacity:0;position:absolute}.atcb-list-wrapper{box-sizing:border-box;padding:0 4px;position:absolute;z-index:14000090}.atcb-list-wrapper.atcb-dropoverlay{z-index:15000000}.atcb-list{border-radius:0 0 6px 6px;box-sizing:border-box;box-shadow:var(--list-shadow);color:var(--list-text);display:block;font-family:var(--font);min-width:100%;position:relative;user-select:none;-webkit-user-select:none;width:fit-content}.atcb-list-item{align-items:center;background-color:var(--list-background);box-sizing:border-box;cursor:pointer;display:flex;font-size:1em;line-height:1.75em;padding:.8em;text-align:left;touch-action:manipulation;-webkit-tap-highlight-color:transparent}.atcb-rtl .atcb-list-item{direction:rtl;text-align:right}.atcb-list-item:hover{background-color:var(--list-background-hover);color:var(--list-text-hover)}.atcb-list-item:focus-visible{background-color:var(--list-background-hover);color:var(--keyboard-focus);font-weight:600;outline:0}.atcb-list-item:last-child{border-radius:0 0 6px 6px}.atcb-dropup .atcb-list-item:last-child{border-radius:0;padding-bottom:1.25em}.atcb-dropoverlay .atcb-list .atcb-list-item:first-child,.atcb-dropup .atcb-list-item:first-child,.atcb-list.atcb-modal .atcb-list-item:first-child{border-radius:6px 6px 0 0}.atcb-dropoverlay .atcb-list .atcb-list-item:only-child,.atcb-list.atcb-modal .atcb-list-item:only-child{border-radius:6px}.atcb-list.atcb-generated-button:not(.atcb-modal) .atcb-list-item:first-child{padding-top:1.25em}.atcb-dropoverlay .atcb-list.atcb-generated-button:not(.atcb-modal) .atcb-list-item:first-child,.atcb-dropup .atcb-list.atcb-generated-button:not(.atcb-modal) .atcb-list-item:first-child{padding-top:.8em}.atcb-dropoverlay .atcb-list,.atcb-list.atcb-modal{border-radius:6px}.atcb-list.atcb-modal{box-shadow:var(--list-shadow-modal)}.atcb-list-item .atcb-icon{margin-bottom:.5em;margin-right:.6em;width:1.125em}.atcb-rtl .atcb-list-item .atcb-icon{margin-right:0;margin-left:.6em}.atcb-no-text .atcb-list-item .atcb-icon{margin:0 auto}.atcb-list-item-close{background-color:var(--list-close-background)}.atcb-list-item.atcb-list-item-close:not(:focus-visible){color:var(--list-close-text)}.atcb-list-item-close svg{fill:currentcolor}.atcb-modal{display:block;margin:auto;min-width:250px;width:auto;position:relative;z-index:14000090}.atcb-modal-box{filter:var(--modal-shadow);color:var(--modal-text);cursor:default;box-sizing:border-box;font-family:var(--font);line-height:1.5em;text-align:left;user-select:none;-webkit-user-select:none;touch-action:manipulation;width:100%;margin-bottom:20px;max-width:32em;-webkit-tap-highlight-color:transparent}.atcb-modal-box.atcb-rtl{text-align:right;direction:rtl;padding:1.25em 1em 1.25em 2em}.atcb-modal-icon{height:2.5em;width:2.5em;border-radius:100%;background-color:var(--modal-background);padding:1.75em;margin:auto}.atcb-modal-icon svg{height:auto;fill:currentcolor;width:100%}.atcb-modal-headline{background-color:var(--modal-background);border-radius:6px 6px 0 0;font-size:1.3em;font-weight:600;line-height:1.5em;padding:1.8em 2em 1.3em;text-transform:uppercase;text-align:center}.atcb-modal-icon+.atcb-modal-headline{margin-top:-2.6em;padding-top:2.6em}.atcb-modal-content{background-color:var(--modal-background);font-size:1em;padding:.3em 2.5em 2.25em}.atcb-modal-icon+.atcb-modal-content{border-radius:6px 6px 0 0;margin-top:-2.6em;padding-top:2.6em}@media (width <= 575px){.atcb-modal-headline{padding:1.8em 1em 1em}.atcb-modal-content{padding:.3em 1.5em 1.5em}.atcb-modal-icon+.atcb-modal-content{padding-top:1.8em}}.atcb-modal-buttons{background-color:var(--modal-btn-bar);border-radius:0 0 6px 6px;box-sizing:border-box;padding:.8em 1em;text-align:center;width:100%;display:flex;justify-content:center;flex-flow:row-reverse wrap;align-items:center}a.atcb-modal-btn,button.atcb-modal-btn{background-color:var(--modal-btn-secondary-background);border:0;border-radius:6px;box-shadow:var(--modal-shadow-btn);color:var(--modal-btn-secondary-text);cursor:pointer;display:inline-block;font-family:var(--font);font-size:.9em;font-weight:600;line-height:1.5em;margin:.625em;padding:.625em 1.25em;position:relative;text-align:center;text-decoration:none;touch-action:manipulation;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;text-transform:uppercase}a.atcb-modal-btn.atcb-modal-btn-primary,button.atcb-modal-btn.atcb-modal-btn-primary{background-color:var(--modal-btn-background);color:var(--modal-btn-text)}a.atcb-modal-btn:hover,button.atcb-modal-btn:hover{background-color:var(--modal-btn-background-hover);box-shadow:var(--modal-shadow-btn-hover);color:var(--modal-btn-text-hover);text-decoration:none}a.atcb-modal-btn:focus-visible,button.atcb-modal-btn:focus-visible{background-color:var(--modal-btn-background-hover);outline:2px solid var(--keyboard-focus)}.atcb-checkmark{display:none}.atcb-saved .atcb-checkmark{box-sizing:content-box;color:var(--btn-text);display:block;position:absolute;top:-.9em;right:-.3em;padding:.5em;background:var(--checkmark-background);border-radius:100%;height:1.5em}.atcb-checkmark svg{height:100%;fill:currentcolor;width:auto}#atcb-bgoverlay{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background-color:var(--overlay-background);border:0;box-sizing:border-box;display:flex;height:calc(100vh + 100px);inset-inline:0;left:0;right:0;top:0;min-height:100%;min-width:100%;overflow-y:auto;padding:20px 20px 130px;position:fixed;width:100vw;z-index:14000000}#atcb-bgoverlay:not(dialog){animation:atcb-bgoverlay-animate .2s ease 0s 1 normal forwards;opacity:0}#atcb-bgoverlay.atcb-no-bg{animation:none;backdrop-filter:none;-webkit-backdrop-filter:none;opacity:1;background-color:transparent}@keyframes atcb-bgoverlay-animate{0%{opacity:0}100%{opacity:1}}#atcb-bgoverlay.atcb-click:hover{cursor:var(--overlay-cursor)}.atcb-icon .atcb-icon-apple svg{fill:currentcolor}.atcb-icon .atcb-icon-ical svg{fill:currentcolor}.atcb-icon .atcb-icon-ms365 svg{fill:var(--icon-ms365-color)}.atcb-icon .atcb-icon-yahoo svg{fill:var(--icon-yahoo-color)}.atcb-icon .atcb-icon-google svg,.atcb-icon .atcb-icon-msteams svg,.atcb-icon .atcb-icon-outlookcom svg{filter:var(--icon-filter)}`,
    },
    B = () => typeof window !== 'undefined',
    R = B()
      ? () =>
          !!(
            (/iPad|iPhone|iPod/i.test(navigator.userAgent || navigator.vendor || window.opera) &&
              !window.MSStream) ||
            (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
          )
      : () => !1,
    Se = B()
      ? () =>
          !!(
            /android/i.test(navigator.userAgent || navigator.vendor || window.opera) &&
            !window.MSStream
          )
      : () => !1,
    xe = B()
      ? () =>
          !!/^((?!chrome|android|crios|fxios).)*safari/i.test(
            navigator.userAgent || navigator.vendor
          )
      : () => !1,
    G = () => !!(Se() || R()),
    ve = B()
      ? () =>
          !!/(; ?wv|(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari))/i.test(
            navigator.userAgent || navigator.vendor
          )
      : () => !1,
    xt = B()
      ? () => !!/(Instagram)/i.test(navigator.userAgent || navigator.vendor || window.opera)
      : () => !1,
    Ye = ve() ? '_system' : '_blank',
    vt = ['apple', 'google', 'ical', 'ms365', 'outlookcom', 'msteams', 'yahoo'],
    yt = ['apple', 'google', 'ical'],
    kt = ['msteams'],
    wt = ['ical'],
    z = [],
    ye = [
      'debug',
      'cspnonce',
      'name',
      'dates',
      'description',
      'startDate',
      'startTime',
      'endDate',
      'endTime',
      'timeZone',
      'location',
      'status',
      'sequence',
      'uid',
      'organizer',
      'attendee',
      'icsFile',
      'images',
      'recurrence',
      'recurrence_interval',
      'recurrence_until',
      'recurrence_count',
      'recurrence_byDay',
      'recurrence_byMonth',
      'recurrence_byMonthDay',
      'recurrence_weekstart',
      'availability',
      'created',
      'updated',
      'subscribe',
      'options',
      'iCalFileName',
      'listStyle',
      'buttonStyle',
      'trigger',
      'hideIconButton',
      'hideIconList',
      'hideIconModal',
      'hideTextLabelButton',
      'hideTextLabelList',
      'buttonsList',
      'hideBackground',
      'hideCheckmark',
      'hideBranding',
      'size',
      'label',
      'ty',
      'rsvp',
      'inline',
      'inlineRsvp',
      'customLabels',
      'customCss',
      'lightMode',
      'language',
      'hideRichData',
      'bypassWebViewCheck',
      'blockInteraction',
      'styleLight',
      'styleDark',
      'disabled',
      'hidden',
      'hideButton',
      'pastDateHandling',
      'proxy',
      'fakeMobile',
      'fakeIOS',
      'fakeAndroid',
      'forceOverlay',
    ],
    ke = [
      'debug',
      'hideIconButton',
      'hideIconList',
      'hideIconModal',
      'hideTextLabelButton',
      'hideTextLabelList',
      'subscribe',
      'hideBackground',
      'hideCheckmark',
      'hideBranding',
      'inlineRsvp',
      'hideRichData',
      'buttonsList',
      'inline',
      'bypassWebViewCheck',
      'blockInteraction',
      'disabled',
      'hidden',
      'hideButton',
      'proxy',
      'fakeMobile',
      'fakeIOS',
      'fakeAndroid',
      'forceOverlay',
    ],
    Tt = ['customLabels', 'ty', 'rsvp'],
    zt = ['dates'],
    At = ['images', 'options'],
    H = {
      trigger:
        '<span class="atcb-icon-trigger"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200.016"><path d="M132.829 7.699c0-4.248 4.199-7.699 9.391-7.699s9.391 3.451 9.391 7.699v33.724c0 4.248-4.199 7.699-9.391 7.699s-9.391-3.451-9.391-7.699zm-5.941 123.747c2.979 0 5.404 2.425 5.404 5.404s-2.425 5.404-5.404 5.404l-21.077-.065-.065 21.045c0 2.979-2.425 5.404-5.404 5.404s-5.404-2.425-5.404-5.404l.065-21.061-21.045-.081c-2.979 0-5.404-2.425-5.404-5.404s2.425-5.404 5.404-5.404l21.061.065.065-21.045c0-2.979 2.425-5.404 5.404-5.404s5.404 2.425 5.404 5.404l-.065 21.077 21.061.065zM48.193 7.699C48.193 3.451 52.393 0 57.585 0s9.391 3.451 9.391 7.699v33.724c0 4.248-4.199 7.699-9.391 7.699s-9.391-3.451-9.391-7.699zM10.417 73.763h179.167V34.945c0-1.302-.537-2.49-1.4-3.369-.863-.863-2.051-1.4-3.369-1.4h-17.171c-2.881 0-5.208-2.327-5.208-5.208s2.327-5.208 5.208-5.208h17.171c4.183 0 7.975 1.709 10.726 4.46S200 30.762 200 34.945v44.043 105.843c0 4.183-1.709 7.975-4.46 10.726s-6.543 4.46-10.726 4.46H15.186c-4.183 0-7.975-1.709-10.726-4.46C1.709 192.79 0 188.997 0 184.814V78.988 34.945c0-4.183 1.709-7.975 4.46-10.726s6.543-4.46 10.726-4.46h18.343c2.881 0 5.208 2.327 5.208 5.208s-2.327 5.208-5.208 5.208H15.186c-1.302 0-2.49.537-3.369 1.4-.863.863-1.4 2.051-1.4 3.369zm179.167 10.433H10.417v100.618c0 1.302.537 2.49 1.4 3.369.863.863 2.051 1.4 3.369 1.4h169.629c1.302 0 2.49-.537 3.369-1.4.863-.863 1.4-2.051 1.4-3.369zM82.08 30.176c-2.881 0-5.208-2.327-5.208-5.208s2.327-5.208 5.208-5.208h34.977c2.881 0 5.208 2.327 5.208 5.208s-2.327 5.208-5.208 5.208z"/></svg></span>',
      apple:
        '<span class="atcb-icon-apple"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 245.657"><path d="M167.084 130.514c-.308-31.099 25.364-46.022 26.511-46.761-14.429-21.107-36.91-24.008-44.921-24.335-19.13-1.931-37.323 11.27-47.042 11.27-9.692 0-24.67-10.98-40.532-10.689-20.849.308-40.07 12.126-50.818 30.799-21.661 37.581-5.54 93.281 15.572 123.754 10.313 14.923 22.612 31.688 38.764 31.089 15.549-.612 21.433-10.073 40.242-10.073s24.086 10.073 40.546 9.751c16.737-.308 27.34-15.214 37.585-30.187 11.855-17.318 16.714-34.064 17.009-34.925-.372-.168-32.635-12.525-32.962-49.68l.045-.013zm-30.917-91.287C144.735 28.832 150.524 14.402 148.942 0c-12.344.503-27.313 8.228-36.176 18.609-7.956 9.216-14.906 23.904-13.047 38.011 13.786 1.075 27.862-7.004 36.434-17.376z"/></svg></span>',
      google:
        '<span class="atcb-icon-google"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path d="M152.637 47.363H47.363v105.273h105.273z" fill="#fff"/><path d="M152.637 200L200 152.637h-47.363z" fill="#f72a25"/><path d="M200 47.363h-47.363v105.273H200z" fill="#fbbc04"/><path d="M152.637 152.637H47.363V200h105.273z" fill="#34a853"/><path d="M0 152.637v31.576A15.788 15.788 0 0 0 15.788 200h31.576v-47.363z" fill="#188038"/><path d="M200 47.363V15.788A15.79 15.79 0 0 0 184.212 0h-31.575v47.363z" fill="#1967d2"/><path d="M15.788 0A15.79 15.79 0 0 0 0 15.788v136.849h47.363V47.363h105.274V0z" fill="#4285f4"/><path d="M68.962 129.02c-3.939-2.653-6.657-6.543-8.138-11.67l9.131-3.76c.83 3.158 2.279 5.599 4.346 7.341 2.051 1.742 4.557 2.588 7.471 2.588 2.995 0 5.55-.911 7.699-2.718 2.148-1.823 3.223-4.134 3.223-6.934 0-2.865-1.139-5.208-3.402-7.031s-5.111-2.718-8.496-2.718h-5.273v-9.033h4.736c2.913 0 5.387-.781 7.389-2.376 2.002-1.579 2.995-3.743 2.995-6.494 0-2.441-.895-4.395-2.686-5.859s-4.053-2.197-6.803-2.197c-2.686 0-4.818.716-6.396 2.148s-2.767 3.255-3.451 5.273l-9.033-3.76c1.204-3.402 3.402-6.396 6.624-8.984s7.34-3.89 12.337-3.89c3.695 0 7.031.716 9.977 2.148s5.257 3.418 6.934 5.941c1.676 2.539 2.507 5.387 2.507 8.545 0 3.223-.781 5.941-2.327 8.187-1.546 2.23-3.467 3.955-5.729 5.143v.537a17.39 17.39 0 0 1 7.34 5.729c1.904 2.572 2.865 5.632 2.865 9.212s-.911 6.771-2.718 9.57c-1.823 2.799-4.329 5.013-7.52 6.624s-6.787 2.425-10.775 2.425c-4.622 0-8.887-1.318-12.826-3.988zm56.087-45.312l-10.026 7.243-5.013-7.601 17.985-12.972h6.901v61.198h-9.847z" fill="#1a73e8"/></svg></span>',
      ical: '<span class="atcb-icon-ical"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200.016"><path d="M132.829 7.699c0-4.248 4.199-7.699 9.391-7.699s9.391 3.451 9.391 7.699v33.724c0 4.248-4.199 7.699-9.391 7.699s-9.391-3.451-9.391-7.699zm-25.228 161.263c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zm-81.803-59.766c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zm40.902 0c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zm40.902 0c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zm40.918 0c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zM25.798 139.079c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zm40.902 0c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zm40.902 0c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zm40.918 0c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zM25.798 168.962c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zm40.902 0c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zM48.193 7.699C48.193 3.451 52.393 0 57.585 0s9.391 3.451 9.391 7.699v33.724c0 4.248-4.199 7.699-9.391 7.699s-9.391-3.451-9.391-7.699zM10.417 73.763h179.15V34.945c0-1.302-.537-2.49-1.4-3.369-.863-.863-2.051-1.4-3.369-1.4h-17.155c-2.881 0-5.208-2.327-5.208-5.208s2.327-5.208 5.208-5.208h17.171c4.183 0 7.975 1.709 10.726 4.46S200 30.762 200 34.945v44.043 105.843c0 4.183-1.709 7.975-4.46 10.726s-6.543 4.46-10.726 4.46H15.186c-4.183 0-7.975-1.709-10.726-4.46C1.709 192.79 0 188.997 0 184.814V78.971 34.945c0-4.183 1.709-7.975 4.46-10.726s6.543-4.46 10.726-4.46h18.343c2.881 0 5.208 2.327 5.208 5.208s-2.327 5.208-5.208 5.208H15.186c-1.302 0-2.49.537-3.369 1.4-.863.863-1.4 2.051-1.4 3.369zm179.167 10.433H10.417v100.618c0 1.302.537 2.49 1.4 3.369.863.863 2.051 1.4 3.369 1.4h169.629c1.302 0 2.49-.537 3.369-1.4.863-.863 1.4-2.051 1.4-3.369zM82.08 30.176c-2.881 0-5.208-2.327-5.208-5.208s2.327-5.208 5.208-5.208h34.977c2.881 0 5.208 2.327 5.208 5.208s-2.327 5.208-5.208 5.208z"/></svg></span>',
      msteams:
        '<span class="atcb-icon-msteams"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 186.047"><path d="M195.349 39.535a20.93 20.93 0 1 1-41.86 0 20.93 20.93 0 1 1 41.86 0zm-55.847 30.233h51.66A8.84 8.84 0 0 1 200 78.605v47.056c0 17.938-14.541 32.479-32.479 32.479h0-.154c-17.938.003-32.481-14.537-32.484-32.474v-.005-51.274a4.62 4.62 0 0 1 4.619-4.619z" fill="#5059c9"/><path d="M149.614 69.767H64.34c-4.823.119-8.637 4.122-8.526 8.944v53.67c-.673 28.941 22.223 52.957 51.163 53.665 28.94-.708 51.836-24.725 51.163-53.665v-53.67c.112-4.823-3.703-8.825-8.526-8.944zm-10.079-39.535a30.233 30.233 0 0 1-60.465 0 30.233 30.233 0 0 1 60.465 0z" fill="#7b83eb"/><path opacity=".1" d="M111.628 69.767v75.209c-.023 3.449-2.113 6.547-5.302 7.86-1.015.43-2.107.651-3.209.651H59.907l-1.628-4.651c-1.628-5.337-2.459-10.885-2.465-16.465V78.698c-.112-4.815 3.697-8.811 8.512-8.93z"/><path opacity=".2" d="M106.977 69.767v79.86a8.241 8.241 0 0 1-.651 3.209c-1.313 3.189-4.412 5.279-7.86 5.302H62.093l-2.186-4.651a46.13 46.13 0 0 1-1.628-4.651 56.647 56.647 0 0 1-2.465-16.465V78.698c-.112-4.815 3.697-8.811 8.512-8.93z"/><path opacity=".2" d="M102.326 69.767v70.558a8.58 8.58 0 0 1-8.512 8.512H58.279a56.647 56.647 0 0 1-2.465-16.465V78.698c-.112-4.815 3.697-8.811 8.512-8.93z"/><path opacity=".1" d="M111.628 45.721v14.651l-2.326.093c-.791 0-1.535-.046-2.326-.093-1.57-.104-3.127-.353-4.651-.744a30.233 30.233 0 0 1-20.93-17.767 25.845 25.845 0 0 1-1.488-4.651h23.209c4.693.018 8.494 3.818 8.512 8.512z"/><use xlink:href="#B" opacity=".2" transform="scale(.08973306)"/><path d="M106.977 50.372v10c-1.57-.104-3.127-.353-4.651-.744a30.233 30.233 0 0 1-20.93-17.767h17.07c4.693.018 8.494 3.818 8.512 8.512zm0 19.395v70.558a8.58 8.58 0 0 1-8.512 8.512H58.279a56.647 56.647 0 0 1-2.465-16.465V78.698c-.112-4.815 3.697-8.811 8.512-8.93z" opacity=".2"/><path opacity=".2" d="M102.326 50.372v9.256a30.233 30.233 0 0 1-20.93-17.767h12.419c4.693.018 8.494 3.818 8.512 8.512z"/><linearGradient id="A" gradientUnits="userSpaceOnUse" x1="17.776" y1="35.199" x2="84.55" y2="150.848"><stop offset="0" stop-color="#5a62c3"/><stop offset=".5" stop-color="#4d55bd"/><stop offset="1" stop-color="#3940ab"/></linearGradient><path fill="url(#A)" d="M8.526 41.86H93.8a8.53 8.53 0 0 1 8.526 8.526v85.274a8.53 8.53 0 0 1-8.526 8.526H8.526A8.53 8.53 0 0 1 0 135.66V50.386a8.53 8.53 0 0 1 8.526-8.526z"/><path fill="#fff" d="M73.6 74.316H56.553v46.419h-10.86V74.316H28.726v-9.005H73.6z"/><defs><path id="B" d="M1192.167 561.355v111.442c-17.496-1.161-34.848-3.937-51.833-8.293a336.92 336.92 0 0 1-233.25-198.003h190.228c52.304.198 94.656 42.55 94.855 94.854z"/></defs></svg></span>',
      ms365:
        '<span class="atcb-icon-ms365"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 239.766"><path d="M200 219.785l-.021-.012V20.591L128.615 0 .322 48.172 0 48.234.016 192.257l43.78-17.134V57.943l84.819-20.279-.012 172.285L.088 192.257l128.515 47.456v.053l71.376-19.753v-.227z"/></svg></span>',
      outlookcom:
        '<span class="atcb-icon-outlookcom"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 175"><path d="M178.725 0H71.275A8.775 8.775 0 0 0 62.5 8.775v9.975l60.563 18.75L187.5 18.75V8.775A8.775 8.775 0 0 0 178.725 0z" fill="#0364b8"/><path d="M197.813 96.281c.915-2.878 2.187-5.855 2.187-8.781-.002-1.485-.795-2.857-1.491-3.26l-68.434-38.99a9.37 9.37 0 0 0-9.244-.519c-.312.154-.614.325-.906.512l-67.737 38.6-.025.013-.075.044a4.16 4.16 0 0 0-2.088 3.6c.541 2.971 1.272 5.904 2.188 8.781l71.825 52.532z" fill="#0a2767"/><path d="M150 18.75h-43.75L93.619 37.5l12.631 18.75L150 93.75h37.5v-37.5z" fill="#28a8ea"/><path d="M150 18.75h37.5v37.5H150z" fill="#50d9ff"/><path d="M150 93.75l-43.75-37.5H62.5v37.5l43.75 37.5 67.7 11.05z" fill="#0364b8"/><path d="M106.25 56.25v37.5H150v-37.5zM150 93.75v37.5h37.5v-37.5zm-87.5-75h43.75v37.5H62.5z" fill="#0078d4"/><path d="M62.5 93.75h43.75v37.5H62.5z" fill="#064a8c"/><path d="M126.188 145.113l-73.706-53.75 3.094-5.438 68.181 38.825a3.3 3.3 0 0 0 2.625-.075l68.331-38.937 3.1 5.431z" fill="#0a2767" opacity=".5"/><path d="M197.919 91.106l-.088.05-.019.013-67.738 38.588c-2.736 1.764-6.192 1.979-9.125.569l23.588 31.631 51.588 11.257v-.001c2.434-1.761 3.876-4.583 3.875-7.587V87.5c.001 1.488-.793 2.862-2.081 3.606z" fill="#1490df"/><path d="M200 165.625v-4.613l-62.394-35.55-7.531 4.294a9.356 9.356 0 0 1-9.125.569l23.588 31.631 51.588 11.231v.025a9.362 9.362 0 0 0 3.875-7.588z" opacity=".05"/><path d="M199.688 168.019l-68.394-38.956-1.219.688c-2.734 1.766-6.19 1.984-9.125.575l23.588 31.631 51.587 11.256v.001a9.38 9.38 0 0 0 3.562-5.187z" opacity=".1"/><path d="M51.455 90.721c-.733-.467-1.468-1.795-1.455-3.221v78.125c-.007 5.181 4.194 9.382 9.375 9.375h131.25c1.395-.015 2.614-.366 3.813-.813.638-.258 1.252-.652 1.687-.974z" fill="#28a8ea"/><path d="M112.5 141.669V39.581a8.356 8.356 0 0 0-8.331-8.331H62.687v46.6l-10.5 5.987-.031.012-.075.044A4.162 4.162 0 0 0 50 87.5v.031-.031V150h54.169a8.356 8.356 0 0 0 8.331-8.331z" opacity=".1"/><path d="M106.25 147.919V45.831a8.356 8.356 0 0 0-8.331-8.331H62.687v40.35l-10.5 5.987-.031.012-.075.044A4.162 4.162 0 0 0 50 87.5v.031-.031 68.75h47.919a8.356 8.356 0 0 0 8.331-8.331z" opacity=".2"/><path d="M106.25 135.419V45.831a8.356 8.356 0 0 0-8.331-8.331H62.687v40.35l-10.5 5.987-.031.012-.075.044A4.162 4.162 0 0 0 50 87.5v.031-.031 56.25h47.919a8.356 8.356 0 0 0 8.331-8.331z" opacity=".2"/><path d="M100 135.419V45.831a8.356 8.356 0 0 0-8.331-8.331H62.687v40.35l-10.5 5.987-.031.012-.075.044A4.162 4.162 0 0 0 50 87.5v.031-.031 56.25h41.669a8.356 8.356 0 0 0 8.331-8.331z" opacity=".2"/><path d="M8.331 37.5h83.337A8.331 8.331 0 0 1 100 45.831v83.338a8.331 8.331 0 0 1-8.331 8.331H8.331A8.331 8.331 0 0 1 0 129.169V45.831A8.331 8.331 0 0 1 8.331 37.5z" fill="#0078d4"/><path d="M24.169 71.675a26.131 26.131 0 0 1 10.263-11.337 31.031 31.031 0 0 1 16.313-4.087 28.856 28.856 0 0 1 15.081 3.875 25.875 25.875 0 0 1 9.988 10.831 34.981 34.981 0 0 1 3.5 15.938 36.881 36.881 0 0 1-3.606 16.662 26.494 26.494 0 0 1-10.281 11.213 30 30 0 0 1-15.656 3.981 29.556 29.556 0 0 1-15.425-3.919 26.275 26.275 0 0 1-10.112-10.85 34.119 34.119 0 0 1-3.544-15.744 37.844 37.844 0 0 1 3.481-16.563zm10.938 26.613a16.975 16.975 0 0 0 5.769 7.463 15.069 15.069 0 0 0 9.019 2.719 15.831 15.831 0 0 0 9.631-2.806 16.269 16.269 0 0 0 5.606-7.481 28.913 28.913 0 0 0 1.787-10.406 31.644 31.644 0 0 0-1.687-10.538 16.681 16.681 0 0 0-5.413-7.75 14.919 14.919 0 0 0-9.544-2.956 15.581 15.581 0 0 0-9.231 2.744 17.131 17.131 0 0 0-5.9 7.519 29.85 29.85 0 0 0-.044 21.5z" fill="#fff"/></svg></span>',
      yahoo:
        '<span class="atcb-icon-yahoo"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 177.803"><path d="M0 43.284h38.144l22.211 56.822 22.5-56.822h37.135L64.071 177.803H26.694l15.308-35.645L.001 43.284zm163.235 45.403H121.64L158.558 0 200 .002zm-30.699 8.488c12.762 0 23.108 10.346 23.108 23.106s-10.345 23.106-23.108 23.106a23.11 23.11 0 0 1-23.104-23.106 23.11 23.11 0 0 1 23.104-23.106z"/></svg></span>',
      atcb: '<svg version="1.1" viewBox="0 0 150 8.5002" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g transform="matrix(1.3333 0 0 -1.3333 -2427.5 1757.9)"><g transform="matrix(.22189 0 0 -.22189 1822.6 1374.6)" fill="#777" style="paint-order:stroke markers fill;shape-inside:url(#rect2441);white-space:pre" aria-label="Add-to-Calendar-PRO.com"><path d="m-1.2773 253.99h12.148l7.9688 27.5h-9.4141l-1.0547-5.2734h-7.1094l-1.1328 5.2734h-9.0234zm8.7109 17.305-2.6172-12.031-2.6953 12.031z" style="paint-order:stroke markers fill"/><path d="m29.66 261.16q2.2656 0 3.9062 0.9375t2.6562 3.1055v-10.078l8.4375-1.25v27.617h-8.4375v-3.7109q-0.9375 2.0117-2.5586 3.0273-1.6211 0.9961-4.043 0.9961-2.0898 0-3.8672-0.83985-1.7773-0.85937-3.0859-2.2852-1.2891-1.4258-2.0312-3.2812-0.74219-1.875-0.74219-3.9062 0-2.1875 0.78125-4.082 0.80078-1.8945 2.1484-3.2812 1.3477-1.3867 3.1055-2.168 1.7773-0.80078 3.7305-0.80078zm6.5625 10.176q-0.03906-0.78125-0.37109-1.4844-0.33203-0.70312-0.87891-1.2109-0.52734-0.52735-1.2305-0.82032-0.70312-0.3125-1.4648-0.3125-0.85938 0-1.6016 0.33203-0.72266 0.3125-1.25 0.85938-0.52734 0.54687-0.83984 1.2695-0.29297 0.72266-0.29297 1.5234 0 0.85937 0.3125 1.582 0.33203 0.72266 0.87891 1.2695 0.54688 0.52734 1.2695 0.83984 0.72266 0.29297 1.5234 0.29297 0.83984 0 1.5625-0.33203 0.72266-0.33203 1.25-0.8789 0.52734-0.54688 0.82031-1.2695 0.3125-0.72265 0.3125-1.5039z" style="paint-order:stroke markers fill"/><path d="m57.551 261.16q2.2656 0 3.9062 0.9375t2.6562 3.1055v-10.078l8.4375-1.25v27.617h-8.4375v-3.7109q-0.9375 2.0117-2.5586 3.0273-1.6211 0.9961-4.043 0.9961-2.0898 0-3.8672-0.83985-1.7773-0.85937-3.0859-2.2852-1.2891-1.4258-2.0312-3.2812-0.74219-1.875-0.74219-3.9062 0-2.1875 0.78125-4.082 0.80078-1.8945 2.1484-3.2812 1.3477-1.3867 3.1055-2.168 1.7773-0.80078 3.7305-0.80078zm6.5625 10.176q-0.03906-0.78125-0.37109-1.4844-0.33203-0.70312-0.87891-1.2109-0.52734-0.52735-1.2305-0.82032-0.70312-0.3125-1.4648-0.3125-0.85938 0-1.6016 0.33203-0.72266 0.3125-1.25 0.85938-0.52734 0.54687-0.83984 1.2695-0.29297 0.72266-0.29297 1.5234 0 0.85937 0.3125 1.582 0.33203 0.72266 0.87891 1.2695 0.54688 0.52734 1.2695 0.83984 0.72266 0.29297 1.5234 0.29297 0.83984 0 1.5625-0.33203 0.72266-0.33203 1.25-0.8789 0.52734-0.54688 0.82031-1.2695 0.3125-0.72265 0.3125-1.5039z" style="paint-order:stroke markers fill"/><path d="m76.496 268.8h10.742v4.7266h-10.742z" style="paint-order:stroke markers fill"/><path d="m104.8 280.44q-2.7148 1.3672-6.0156 1.3672-1.6992 0-3.0273-0.54688-1.3281-0.5664-2.2461-1.6016-0.89844-1.0547-1.3672-2.5195-0.46875-1.4844-0.46875-3.3398l0.03906-7.3828h-2.5391v-4.9609h3.1641l3.7109-7.5781h4.0625v7.5781h4.6094v4.9609h-4.6094v6.7969q0 1.0547 0.68359 1.582t1.8555 0.52734q0.91797 0 1.8359-0.46875z" style="paint-order:stroke markers fill"/><path d="m114.62 271.45q0 1.0938 0.3125 1.9141 0.33204 0.82031 0.85938 1.3672 0.52734 0.54687 1.2109 0.82031 0.68359 0.27344 1.3867 0.27344 0.70312 0 1.3672-0.27344 0.6836-0.27344 1.2109-0.82031 0.54688-0.54688 0.85938-1.3672 0.33203-0.82031 0.33203-1.9141t-0.33203-1.9141q-0.3125-0.82031-0.85938-1.3476-0.52734-0.54688-1.2109-0.82032-0.66406-0.27343-1.3672-0.27343-0.70313 0-1.3867 0.27343-0.6836 0.27344-1.2109 0.82032-0.52734 0.52734-0.85938 1.3476-0.3125 0.82032-0.3125 1.9141zm-7.8125 0q0.0977-2.5195 1.0352-4.4336 0.95703-1.9141 2.5195-3.2226 1.5625-1.3086 3.6133-1.9727 2.0703-0.66406 4.3945-0.66406 2.5391 0 4.6484 0.76172 2.1094 0.76171 3.6328 2.1289 1.5234 1.3477 2.3633 3.2422 0.83985 1.8945 0.83985 4.1602 0 1.8359-0.48828 3.3203-0.46875 1.4844-1.2891 2.6367-0.82031 1.1328-1.9336 1.9726-1.1133 0.83985-2.4023 1.3867-1.2891 0.52735-2.6758 0.78125-1.3672 0.25391-2.7344 0.25391-2.5781 0-4.707-0.74219-2.1094-0.76172-3.6328-2.1289-1.5234-1.3672-2.3633-3.2617-0.82032-1.9141-0.82032-4.2188z" style="paint-order:stroke markers fill"/><path d="m132.73 268.8h10.742v4.7266h-10.742z" style="paint-order:stroke markers fill"/><path d="m162.41 274.89q0.6836 0 1.2695-0.0586 0.58594-0.0781 1.1524-0.21484 0.58593-0.13672 1.1914-0.35156 0.60547-0.21485 1.3477-0.50782l1.0938 6.3477q-3.4766 2.0117-7.5781 2.0117-5.8008 0-9.9414-3.9062-4.3359-4.0625-4.3945-10.488 0-3.125 1.0742-5.7617 1.0742-2.6367 2.9688-4.5312 1.8945-1.9141 4.4726-2.9688 2.5781-1.0742 5.5859-1.0742 4.2773 0 7.7734 1.9922l-1.0547 6.2109q-2.8711-1.0938-5.1953-1.0938-3.2617 0-4.9609 1.8945-1.6797 1.875-1.6797 5.293 0 1.6992 0.44922 3.0469 0.46875 1.3281 1.3477 2.2656 0.8789 0.91797 2.1484 1.4062 1.2891 0.48829 2.9297 0.48829z" style="paint-order:stroke markers fill"/><path d="m186.52 277.78q-0.9375 1.9531-2.5391 2.9883-1.6016 1.0352-4.0234 1.0352-1.9531 0-3.7305-0.78125-1.7774-0.80078-3.125-2.1875-1.3477-1.4062-2.1484-3.3203-0.80078-1.9141-0.80078-4.1602 0-2.2266 0.80078-4.1016 0.82031-1.875 2.168-3.2227 1.3672-1.3672 3.125-2.1094 1.7773-0.76172 3.7109-0.76172 0.9961 0 1.9531 0.27343 0.97656 0.25391 1.8359 0.83985 0.8789 0.5664 1.582 1.4453 0.72265 0.87891 1.1914 2.1094v-4.668h8.3984v20.332h-8.3984zm0-6.4453q-0.0391-0.78125-0.37109-1.4844-0.33203-0.70312-0.87891-1.2109-0.52734-0.52735-1.2305-0.82032-0.70313-0.3125-1.4648-0.3125-0.85937 0-1.6016 0.33203-0.72266 0.3125-1.2695 0.85938-0.52735 0.52734-0.83985 1.25t-0.3125 1.543q0 0.85937 0.33204 1.6016 0.33203 0.72266 0.8789 1.25 0.56641 0.52734 1.2891 0.83984 0.72266 0.29297 1.5234 0.29297 0.82031 0 1.5234-0.3125 0.70312-0.3125 1.2305-0.83984 0.52734-0.52734 0.83984-1.2109 0.3125-0.70312 0.35156-1.4648z" style="paint-order:stroke markers fill"/><path d="m212.02 280.44q-2.7148 1.3672-6.0156 1.3672-1.6992 0-3.0273-0.54688-1.3281-0.5664-2.2461-1.6016-0.89843-1.0547-1.3672-2.5195-0.46875-1.4844-0.46875-3.3398v-18.672l8.4375-1.25v19.336q0 1.0742 0.68359 1.6016 0.68359 0.50781 1.8555 0.50781 0.89844 0 1.8359-0.46875z" style="paint-order:stroke markers fill"/><path d="m225.71 276.2q2.7344 0 5.8984-1.4062l0.97656 5.3711q-3.6328 1.6406-8.1641 1.6406-2.5195 0-4.6094-0.76172-2.0703-0.78125-3.5742-2.1484-1.4844-1.3867-2.3242-3.2812-0.82031-1.8945-0.82031-4.1211 0-2.3438 0.85937-4.2383 0.87891-1.9141 2.3828-3.2617 1.5039-1.3672 3.5156-2.0898 2.0117-0.74218 4.2969-0.74218 2.3047 0 4.043 0.78125 1.7383 0.76172 2.8906 2.1094 1.1719 1.3281 1.7383 3.125 0.58594 1.7774 0.58594 3.8086 0 0.27343-0.0195 0.52734t-0.0586 0.48828l-11.992 1.5625q0.46875 1.4062 1.5625 2.0312 1.0938 0.60547 2.8125 0.60547zm1.4844-7.6758q-0.6836-2.5-3.0469-2.5-0.74218 0-1.3281 0.29297t-0.9961 0.82031q-0.39062 0.50781-0.60546 1.2305-0.21485 0.70312-0.23438 1.5234z" style="paint-order:stroke markers fill"/><path d="m236.3 261.75h8.0469v4.082q1.1719-2.3633 3.0078-3.5156 1.8555-1.1523 4.3359-1.1523 1.9922 0 3.5156 0.74218 1.5234 0.74219 2.5586 2.1094 1.0547 1.3477 1.582 3.2617 0.54687 1.8945 0.54687 4.2188v10h-8.3984v-10.82q0-0.78125-0.15625-1.4453-0.13672-0.66406-0.46875-1.1328-0.3125-0.48828-0.80078-0.74219-0.48828-0.27343-1.1914-0.27343-0.85938 0-1.582 0.42968-0.72265 0.41016-1.2695 1.0156-0.52734 0.60547-0.85937 1.2695-0.33203 0.64453-0.42969 1.1133v10.586h-8.4375z" style="paint-order:stroke markers fill"/><path d="m272.59 261.16q2.2656 0 3.9062 0.9375 1.6406 0.9375 2.6562 3.1055v-10.078l8.4375-1.25v27.617h-8.4375v-3.7109q-0.9375 2.0117-2.5586 3.0273-1.6211 0.9961-4.043 0.9961-2.0898 0-3.8672-0.83985-1.7773-0.85937-3.0859-2.2852-1.2891-1.4258-2.0312-3.2812-0.74219-1.875-0.74219-3.9062 0-2.1875 0.78125-4.082 0.80078-1.8945 2.1484-3.2812 1.3476-1.3867 3.1055-2.168 1.7774-0.80078 3.7305-0.80078zm6.5625 10.176q-0.0391-0.78125-0.37109-1.4844-0.33203-0.70312-0.87891-1.2109-0.52734-0.52735-1.2305-0.82032-0.70312-0.3125-1.4648-0.3125-0.85937 0-1.6016 0.33203-0.72266 0.3125-1.25 0.85938-0.52735 0.54687-0.83985 1.2695-0.29296 0.72266-0.29296 1.5234 0 0.85937 0.3125 1.582 0.33203 0.72266 0.8789 1.2695 0.54688 0.52734 1.2695 0.83984 0.72266 0.29297 1.5234 0.29297 0.83984 0 1.5625-0.33203t1.25-0.8789q0.52734-0.54688 0.82031-1.2695 0.3125-0.72265 0.3125-1.5039z" style="paint-order:stroke markers fill"/><path d="m307.06 277.78q-0.9375 1.9531-2.5391 2.9883-1.6016 1.0352-4.0234 1.0352-1.9531 0-3.7305-0.78125-1.7773-0.80078-3.125-2.1875-1.3477-1.4062-2.1484-3.3203-0.80078-1.9141-0.80078-4.1602 0-2.2266 0.80078-4.1016 0.82032-1.875 2.168-3.2227 1.3672-1.3672 3.125-2.1094 1.7774-0.76172 3.7109-0.76172 0.99609 0 1.9531 0.27343 0.97657 0.25391 1.8359 0.83985 0.87891 0.5664 1.582 1.4453 0.72266 0.87891 1.1914 2.1094v-4.668h8.3984v20.332h-8.3984zm0-6.4453q-0.0391-0.78125-0.37109-1.4844-0.33204-0.70312-0.87891-1.2109-0.52734-0.52735-1.2305-0.82032-0.70312-0.3125-1.4648-0.3125-0.85938 0-1.6016 0.33203-0.72265 0.3125-1.2695 0.85938-0.52734 0.52734-0.83984 1.25t-0.3125 1.543q0 0.85937 0.33203 1.6016 0.33203 0.72266 0.87891 1.25 0.5664 0.52734 1.2891 0.83984 0.72266 0.29297 1.5234 0.29297 0.82031 0 1.5234-0.3125 0.70313-0.3125 1.2305-0.83984 0.52735-0.52734 0.83985-1.2109 0.3125-0.70312 0.35156-1.4648z" style="paint-order:stroke markers fill"/><path d="m319.5 261.75h8.4375v4.082q0.95703-2.4219 2.5391-3.5352 1.6016-1.1328 3.6719-1.1328l1.1719 6.543q-3.8086 0-5.6055 0.82031-1.7773 0.80078-1.7773 2.5781v10.391h-8.4375z" style="paint-order:stroke markers fill"/><path d="m337.22 268.8h10.742v4.7266h-10.742z" style="paint-order:stroke markers fill"/><path d="m352.43 253.99h9.9219q3.0859 0 5.4883 0.60547t4.043 1.7773q1.6406 1.1719 2.5 2.8711 0.85937 1.6797 0.85937 3.8477 0 2.1094-0.97656 3.7695-0.97656 1.6602-2.6758 2.832-1.6992 1.1524-3.9844 1.7774-2.2656 0.60547-4.8633 0.60547h-1.6797v9.4141h-8.6328zm10.352 12.539q2.0703 0 3.2422-0.85937 1.1719-0.85938 1.1719-2.5781 0-0.83984-0.35156-1.4648-0.33204-0.625-0.9375-1.0352-0.58594-0.42969-1.3867-0.64453t-1.7383-0.21484h-1.7188v6.7188q0.27343 0.0391 0.70312 0.0586t1.0156 0.0195z" style="paint-order:stroke markers fill"/><path d="m402.92 281.41q-2.5586 0.70313-3.6914 0.70313-7.2461 0-9.1016-6.6016l-1.0938-4.4531h-1.875v10.43h-8.75v-27.5h12.227q2.3828 0 4.4726 0.54687 2.0898 0.52735 3.6328 1.5625 1.5625 1.0156 2.4414 2.5195 0.89844 1.5039 0.89844 3.457 0 1.4453-0.37109 2.5976-0.35157 1.1328-1.0352 2.0508-0.68359 0.89844-1.6797 1.6016-0.97656 0.70312-2.2266 1.25l0.17578 0.95703q0.0586 0.33203 0.11719 0.5664 0.0586 0.23438 0.0977 0.39063l0.21484 0.83984q0.23437 0.74219 0.52734 1.2695 0.3125 0.50782 0.78125 0.83985 0.46875 0.3125 1.1524 0.46875 0.70312 0.13672 1.6992 0.13672 0.15625 0 0.48828-0.0391 0.35156-0.0391 0.89843-0.11718zm-8.8476-18.945q0-0.76172-0.33203-1.25-0.3125-0.50781-0.87891-0.78125-0.56641-0.29297-1.3281-0.39062-0.76172-0.11719-1.6406-0.11719h-2.7344v5.5078h1.5234l1.2891-0.0586q0.76171-0.0586 1.4844-0.19532 0.74219-0.15625 1.3281-0.46875 0.58593-0.33203 0.9375-0.85937 0.35156-0.54688 0.35156-1.3867z" style="paint-order:stroke markers fill"/><path d="m404.76 267.78q0-5.957 3.7891-10.039 4.043-4.3555 10.938-4.3555 3.3594 0 6.0742 1.0938 2.7148 1.0742 4.6289 2.9883t2.9492 4.5703q1.0352 2.6367 1.0352 5.7422 0 1.875-0.42968 3.6719-0.42969 1.7969-1.2891 3.3984-0.83984 1.582-2.0898 2.9297-1.25 1.3281-2.8906 2.3047-1.6211 0.95703-3.6328 1.4844-1.9922 0.54688-4.3555 0.54688-2.4219 0-4.4531-0.54688-2.0117-0.54687-3.6523-1.5234-1.6406-0.97657-2.8906-2.3242-1.2305-1.3477-2.0703-2.9297-0.82031-1.6016-1.25-3.3789-0.41016-1.7773-0.41016-3.6328zm14.727 7.0703q1.543 0 2.6172-0.64453 1.0938-0.66406 1.7774-1.6797 0.70312-1.0352 1.0156-2.3047 0.33203-1.2695 0.33203-2.4805 0-1.582-0.41015-2.8906-0.39063-1.3281-1.1524-2.2852-0.74219-0.97657-1.8164-1.543-1.0547-0.56641-2.3633-0.625-1.5625 0.0391-2.6562 0.70312-1.0938 0.66407-1.7969 1.7188-0.68359 1.0352-1.0156 2.3438-0.3125 1.2891-0.3125 2.5781 0 1.5234 0.39063 2.832 0.41016 1.2891 1.1523 2.2461 0.76172 0.9375 1.8359 1.4844 1.0742 0.54687 2.4023 0.54687z" style="paint-order:stroke markers fill"/><path d="m436.18 279.2q0-0.58594 0.2474-1.0807 0.26042-0.49479 0.67708-0.84636 0.41667-0.35156 0.95053-0.54687 0.54687-0.20834 1.1198-0.20834 0.59896 0 1.1458 0.22136 0.54688 0.20833 0.95053 0.58594 0.41666 0.36458 0.65104 0.84635 0.2474 0.48177 0.2474 1.0286 0 0.61198-0.26042 1.1068-0.2474 0.49479-0.66407 0.85938-0.41666 0.35156-0.96354 0.54687-0.53385 0.19531-1.1068 0.19531-0.625 0-1.1719-0.20833-0.54687-0.20833-0.95052-0.57292-0.40365-0.36458-0.63802-0.85937-0.23438-0.49479-0.23438-1.0677z" style="paint-order:stroke markers fill"/><path d="m454.38 272.56q-1.4062-0.4427-2.6042-0.4427-0.61198 0-1.1068 0.19531-0.48177 0.19531-0.83333 0.54687-0.33855 0.35157-0.53386 0.85938-0.18229 0.49479-0.18229 1.1068t0.18229 1.1198q0.19531 0.49479 0.54688 0.85937 0.35156 0.36459 0.84635 0.5599 0.50782 0.19531 1.1328 0.19531 1.1849 0 2.5-0.44271l0.52083 3.724q-1.0026 0.52083-1.9661 0.6901-0.95053 0.16927-2.0703 0.16927-1.5755 0-2.9036-0.49479t-2.2917-1.3932-1.5104-2.1615q-0.53385-1.276-0.53385-2.8255t0.58594-2.8125q0.58593-1.276 1.5755-2.1745 1.0026-0.91146 2.3177-1.4062 1.3151-0.4948 2.7604-0.4948 0.63802 0 1.1458 0.0521 0.52084 0.0391 0.98959 0.16927 0.46875 0.11718 0.9375 0.32552 0.46875 0.20833 1.0156 0.53385z" style="paint-order:stroke markers fill"/><path d="m461.18 274.8q0 0.72917 0.20833 1.276 0.22136 0.54688 0.57292 0.91146 0.35157 0.36459 0.80729 0.54688 0.45573 0.18229 0.92449 0.18229 0.46875 0 0.91145-0.18229 0.45573-0.18229 0.8073-0.54688 0.36458-0.36458 0.57291-0.91146 0.22136-0.54687 0.22136-1.276t-0.22136-1.276q-0.20833-0.54688-0.57291-0.89844-0.35157-0.36458-0.8073-0.54688-0.4427-0.18229-0.91145-0.18229-0.46876 0-0.92449 0.18229-0.45572 0.1823-0.80729 0.54688-0.35156 0.35156-0.57292 0.89844-0.20833 0.54687-0.20833 1.276zm-5.2083 0q0.0651-1.6797 0.69011-2.9557 0.63802-1.276 1.6797-2.1484 1.0417-0.8724 2.4088-1.3151 1.3802-0.44271 2.9297-0.44271 1.6927 0 3.099 0.50782 1.4062 0.50781 2.4219 1.4193 1.0156 0.89844 1.5755 2.1615 0.55989 1.263 0.55989 2.7734 0 1.224-0.32552 2.2136-0.3125 0.98958-0.85937 1.7578-0.54688 0.75521-1.2891 1.3151-0.74219 0.55989-1.6016 0.92448-0.85938 0.35156-1.7839 0.52083-0.91146 0.16927-1.8229 0.16927-1.7188 0-3.138-0.49479-1.4062-0.50781-2.4219-1.4193t-1.5755-2.1745q-0.54688-1.276-0.54688-2.8125z" style="paint-order:stroke markers fill"/><path d="m488.16 271.26q0.54688-1.6536 1.7578-2.487 1.2109-0.83334 3.138-0.83334 1.0938 0 2.0182 0.50782 0.92448 0.50781 1.6016 1.4193 0.67708 0.91146 1.0547 2.1745 0.3776 1.263 0.3776 2.7865v6.6667h-5.625v-6.6667q0-0.55989-0.13021-1.0286-0.11718-0.48178-0.35156-0.83334-0.23437-0.35156-0.57292-0.54687-0.33854-0.19532-0.76823-0.19532-0.55989 0-0.96354 0.26042-0.40364 0.2474-0.66406 0.63802-0.26042 0.37761-0.39063 0.84636-0.11718 0.45573-0.11718 0.85937v6.6667h-5.5729v-6.6667q0-0.54687-0.13021-1.0156-0.11718-0.48178-0.36458-0.83334-0.23438-0.35156-0.58594-0.54687-0.35156-0.20834-0.79427-0.20834-0.48177 0-0.8724 0.19532-0.3776 0.19531-0.65104 0.54687-0.27344 0.33854-0.42969 0.79427-0.14323 0.45573-0.15625 0.96355v6.7708h-5.625v-13.164h5.625v2.7214q0.74219-1.6536 1.875-2.3828 1.1458-0.72917 2.6823-0.72917 0.74219 0 1.4323 0.19532 0.69011 0.18229 1.2891 0.58593 0.61198 0.40365 1.0938 1.0417 0.49479 0.625 0.82031 1.4974z" style="paint-order:stroke markers fill"/></g></g></svg>',
      close:
        '<span class="atcb-icon-close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path d="M2.321 13.529a7.927 7.927 0 0 1 0-11.208 7.927 7.927 0 0 1 11.208 0l86.471 86.471L186.47 2.321a7.927 7.927 0 0 1 11.209 0 7.927 7.927 0 0 1 0 11.208l-86.474 86.469 86.472 86.473a7.927 7.927 0 0 1-11.209 11.208l-86.471-86.471-86.469 86.471a7.927 7.927 0 0 1-11.208-11.208l86.471-86.473z"/></svg></span>',
      location:
        '<span class="atcb-icon-location"><svg viewBox="0 0 200 266.42" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="m148.54 230.43c-12.12 13.291-26.234 25.193-42.083 34.82-1.9513 1.431-4.5964 1.6044-6.7645 0.21681-23.416-14.895-43.08-32.782-58.539-52.23-21.334-26.755-34.755-56.414-39.351-84.99-4.6831-28.966-0.30354-56.848 14.114-79.505 5.6805-8.9543 12.944-17.106 21.79-24.153 20.337-16.196 43.557-24.76 66.713-24.586 22.288 0.17345 44.295 8.4773 63.309 25.844 6.6778 6.0707 12.293 13.03 16.89 20.575 15.502 25.54 18.841 58.105 12.033 91.104-6.7212 32.608-23.416 65.737-48.11 92.839zm-48.544-178.91c27.492 0 49.758 22.288 49.758 49.758 0 27.492-22.288 49.758-49.758 49.758-27.492 0-49.758-22.267-49.758-49.758-0.02168-27.492 22.267-49.758 49.758-49.758z" stroke-width="2.1681"/></svg></span>',
      warning:
        '<span class="atcb-icon-warning"><svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path d="m100 0c27.613 0 52.613 11.195 70.711 29.293 18.094 18.094 29.289 43.098 29.289 70.707 0 27.613-11.195 52.613-29.289 70.711-18.098 18.094-43.098 29.289-70.711 29.289-27.609 0-52.613-11.195-70.707-29.289-18.098-18.098-29.293-43.098-29.293-70.711 0-27.609 11.195-52.613 29.293-70.707 18.094-18.098 43.098-29.293 70.707-29.293zm57.66 42.34c-14.758-14.754-35.145-23.883-57.66-23.883-22.516 0-42.902 9.1289-57.66 23.883-14.754 14.758-23.883 35.145-23.883 57.66 0 22.516 9.1289 42.902 23.883 57.66 14.758 14.754 35.145 23.883 57.66 23.883 22.516 0 42.902-9.1289 57.66-23.883 14.754-14.758 23.883-35.145 23.883-57.66 0-22.516-9.1289-42.902-23.883-57.66z" fill="#f44336" fill-rule="nonzero" stroke-width=".39062"/><g transform="matrix(3.8384 0 0 3.8384 2277.8 -576.85)" style="shape-inside:url(#rect7396);white-space:pre" aria-label="!"><path d="m-563.8 161.59-0.65341 20.185h-5.8381l-0.65341-20.185zm-3.5796 29.503q-1.5199 0-2.6136-1.0795-1.0796-1.0796-1.0796-2.6136 0-1.5057 1.0796-2.571 1.0938-1.0796 2.6136-1.0796 1.4631 0 2.571 1.0796 1.1222 1.0653 1.1222 2.571 0 1.0227-0.52557 1.8608-0.51137 0.83807-1.3494 1.3352-0.82387 0.49715-1.8182 0.49715z"/></g></svg></span>',
      checkmark:
        '<span class="atcb-icon-checkmark"><svg viewBox="0 0 122.88 122.87" xmlns="http://www.w3.org/2000/svg"><path fill:#39B54A; d="m33.666 50.046s6.0748-0.59297 17.413 4.2983c9.3883 4.5751 11.891 8.3955 11.891 8.3955 5.38-8.65 11.11-16.6 17.16-23.9 10.412-12.578 24.613-22.448 24.613-22.448l14.257-0.012228s-19.308 19.294-32.483 38.51c-13.175 19.216-22.877 41.21-22.877 41.21s-9.3948-18.164-14.53-24.53-10.77-11.59-17.52-16.22z" fill="#45b555"/><path fill:#3C3C3C; d="m61.44 0c9.53 0 18.55 2.17 26.61 6.04-3.3 2.61-6.36 5.11-9.21 7.53-5.43-1.97-11.28-3.05-17.39-3.05-14.06 0-26.79 5.7-36 14.92s-14.92 21.94-14.92 36 5.7 26.78 14.92 36 21.94 14.92 36 14.92 26.79-5.7 36-14.92c9.22-9.22 14.91-21.94 14.91-36 0-3.34-0.32-6.62-0.94-9.78 2.64-3.44 5.35-6.88 8.11-10.28 2.17 6.28 3.35 13.04 3.35 20.06 0 16.96-6.88 32.33-17.99 43.44-11.12 11.12-26.48 18-43.44 18s-32.32-6.88-43.44-18c-11.13-11.12-18.01-26.48-18.01-43.44 0-16.97 6.88-32.33 17.99-43.44 11.12-11.12 26.48-18 43.45-18z"/></svg></span>',
    };
  function Je(e) {
    return (
      (e = Et(e)),
      (e.timeZone = St(e.timeZone)),
      (e = Yt(e)),
      (e = Lt(e)),
      (e = Dt(e)),
      (e.sizes = Mt(e.size)),
      (e.lightMode = _t(e.lightMode)),
      (e = Rt(e)),
      (e = Ct(e)),
      (e = Bt(e)),
      (e = Ut(e)),
      (e = Ot(e)),
      e
    );
  }
  function Et(e) {
    for (let t = 0; t < ke.length; t++) {
      let a = ke[`${t}`];
      e[`${a}`] != null && (e[`${a}`] === 'true' || e[`${a}`] === !0)
        ? (e[`${a}`] = !0)
        : (e[`${a}`] = !1);
    }
    return e;
  }
  function St(e = null) {
    return !e || e == '' ? 'GMT' : e;
  }
  function Yt(e) {
    if (e.recurrence != null && e.recurrence != '')
      if (
        ((e.recurrence = e.recurrence.replace(/\s+/g, '').toUpperCase()),
        !/^(RRULE:[\w=;,:+-/\\]+|daily|weekly|monthly|yearly)$/im.test(e.recurrence))
      )
        e.recurrence = '!wrong rrule format!';
      else if (/^RRULE:/i.test(e.recurrence)) {
        e.recurrence_simplyfied = !1;
        let t = e.recurrence.substring(6).split(';'),
          a = new Object();
        t.forEach(function (n) {
          a[n.split('=')[0]] = n.split('=')[1];
        }),
          (e.recurrence_until = a.UNTIL ? a.UNTIL : ''),
          (e.recurrence_count = a.COUNT ? a.COUNT : ''),
          (e.recurrence_byDay = a.BYDAY ? a.BYDAY : ''),
          (e.recurrence_byMonth = a.BYMONTH ? a.BYMONTH : ''),
          (e.recurrence_byMonthDay = a.BYMONTHDAY ? a.BYMONTHDAY : ''),
          (e.recurrence_interval = a.INTERVAL ? a.INTERVAL : 1),
          (e.recurrence_frequency = a.FREQ ? a.FREQ : '');
      } else
        (e.recurrence_simplyfied = !0),
          (e.recurrence_interval == null || e.recurrence_interval == '') &&
            (e.recurrence_interval = 1),
          (e.recurrence_weekstart == null ||
            (e.recurrence_weekstart == '') | (e.recurrence_weekstart.length > 2)) &&
            (e.recurrence_weekstart = 'MO'),
          (e.recurrence_frequency = e.recurrence),
          (e.recurrence =
            'RRULE:FREQ=' +
            e.recurrence +
            ';WKST=' +
            e.recurrence_weekstart +
            ';INTERVAL=' +
            e.recurrence_interval),
          e.recurrence_until != null &&
            e.recurrence_until != '' &&
            (e.endTime != null && e.endTime != ''
              ? (e.recurrence =
                  e.recurrence +
                  ';UNTIL=' +
                  e.recurrence_until.replace(/-/g, '').slice(0, 8) +
                  'T' +
                  e.endTime.replace(':', '') +
                  '00')
              : (e.recurrence =
                  e.recurrence + ';UNTIL=' + e.recurrence_until.replace(/-/g, '').slice(0, 8))),
          e.recurrence_count != null &&
            e.recurrence_count != '' &&
            (e.recurrence = e.recurrence + ';COUNT=' + e.recurrence_count),
          e.recurrence_byDay != null &&
            e.recurrence_byDay != '' &&
            (e.recurrence = e.recurrence + ';BYDAY=' + e.recurrence_byDay),
          e.recurrence_byMonth != null &&
            e.recurrence_byMonth != '' &&
            (e.recurrence = e.recurrence + ';BYMONTH=' + e.recurrence_byMonth),
          e.recurrence_byMonthDay != null &&
            e.recurrence_byMonthDay != '' &&
            (e.recurrence = e.recurrence + ';BYMONTHDAY=' + e.recurrence_byMonthDay);
    return e;
  }
  function Lt(e) {
    let t = [];
    e.optionLabels = [];
    let a = !1,
      n = !1;
    for (let o = 0; o < e.options.length; o++) {
      let r = e.options[`${o}`].split('|'),
        i = r[0].toLowerCase().replace('microsoft', 'ms').replace(/\./, ''),
        l = (function () {
          return r[1] != null ? r[1] : '';
        })();
      i === 'apple' && (n = !0),
        i === 'ical' && (a = !0),
        !(
          (R() && wt.includes(i)) ||
          (e.recurrence != null &&
            e.recurrence != '' &&
            (!yt.includes(i) ||
              (e.recurrence_until != null &&
                e.recurrence_until != '' &&
                (i === 'apple' || i === 'ical')) ||
              (R() && i === 'google'))) ||
          (e.subscribe && kt.includes(i))
        ) && (t.push(i), e.optionLabels.push(l));
    }
    return (
      t.length === 0 && (R() || (t.push('ical'), e.optionLabels.push('')), (a = !0)),
      R() && a && !n && (t.push('apple'), e.optionLabels.push('')),
      (e.options = t),
      e
    );
  }
  function Dt(e) {
    (e.listStyle == null || e.listStyle == '') && (e.listStyle = 'dropdown');
    let t = (function () {
      return (
        e.listStyle == 'dropdown' ||
        e.listStyle == 'dropdown-static' ||
        e.listStyle == 'dropup-static'
      );
    })();
    return (
      e.listStyle === 'modal' && (e.trigger = 'click'),
      e.buttonStyle != null && e.buttonStyle != '' && e.buttonStyle != 'default'
        ? ((e.buttonStyle == 'round' ||
            e.buttonStyle == 'text' ||
            e.buttonStyle == 'date' ||
            e.buttonStyle == 'neumorphism') &&
            (e.trigger = 'click'),
          e.buttonStyle == 'date' && t && (e.listStyle = 'overlay'))
        : (e.buttonStyle = 'default'),
      (e.buttonStyle == 'default' || e.buttonStyle == '3d' || e.buttonStyle == 'flat') &&
        t &&
        !e.hideTextLabelList &&
        e.hideTextLabelButton &&
        (e.listStyle = 'overlay'),
      e.buttonsList && e.buttonStyle == 'date' && (e.buttonsList = !1),
      e
    );
  }
  function Mt(e) {
    let t = [];
    if (((t.l = t.m = t.s = 16), e != null && e != '')) {
      let a = e.split('|');
      for (let n = 0; n < a.length; n++) a[`${n}`] = parseInt(a[`${n}`]);
      a[0] >= 0 && a[0] < 11 && (t.l = t.m = t.s = 10 + a[0]),
        a.length > 2
          ? (a[1] >= 0 && a[1] < 11 && (t.m = 10 + a[1]),
            a[2] >= 0 && a[2] < 11 && (t.s = 10 + a[2]))
          : a.length == 2 && a[1] >= 0 && a[1] < 11 && (t.m = t.s = 10 + a[1]);
    }
    return t;
  }
  function _t(e = '') {
    return e == 'system' && B()
      ? window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
      : e != 'bodyScheme' && e != 'dark'
      ? 'light'
      : e;
  }
  function Rt(e) {
    return (
      (e.language == null || e.language == '' || !xa.includes(e.language)) && (e.language = 'en'),
      e.language.length > 2 && (e.language = e.language.substring(0, 2)),
      ha.includes(e.language) ? (e.rtl = !0) : (e.rtl = !1),
      e
    );
  }
  function Ct(e) {
    if (e.dates != null && e.dates.length > 0)
      for (let a = 0; a < e.dates.length; a++) {
        e.dates[`${a}`].timeZone == null && (e.dates[`${a}`].timeZone = e.timeZone);
        let n = Ne(e.dates[`${a}`]);
        (e.dates[`${a}`].startTime = n.startTime),
          (e.dates[`${a}`].endTime = n.endTime),
          (e.dates[`${a}`].timeZone = n.timeZone),
          (e.dates[`${a}`].startDate = oe(n.startDate)),
          (e.dates[`${a}`].endDate = oe(n.endDate)),
          (e.dates[`${a}`].timestamp = pe(
            'timestamp',
            e.dates[`${a}`].startDate,
            e.dates[`${a}`].startTime,
            e.dates[`${a}`].timeZone
          )),
          (e.dates[`${a}`].overdue = pe(
            'overdue',
            e.dates[`${a}`].endDate,
            e.dates[`${a}`].endTime,
            e.dates[`${a}`].timeZone
          ));
      }
    else {
      let a = Ne(e);
      (e.dates = []),
        (e.dates[0] = new Object()),
        (e.startTime = e.dates[0].startTime = a.startTime),
        (e.endTime = e.dates[0].endTime = a.endTime),
        (e.timeZone = e.dates[0].timeZone = a.timeZone),
        (e.startDate = e.dates[0].startDate = oe(a.startDate)),
        (e.endDate = e.dates[0].endDate = oe(a.endDate)),
        e.recurrence
          ? (e.dates[0].overdue = !1)
          : (e.dates[0].overdue = pe('overdue', e.endDate, e.endTime, e.timeZone));
    }
    let t = new Date();
    return (
      (e.created == null || e.created == '') && (e.created = _(t, 'clean', !0)),
      (e.updated == null || e.updated == '') && (e.updated = _(t, 'clean', !0)),
      e
    );
  }
  function Bt(e) {
    return (
      (e.status == null || e.status == '') && (e.status = 'CONFIRMED'),
      (e.sequence == null || e.sequence == '') && (e.sequence = 0),
      e
    );
  }
  function $t(e, t) {
    return (
      e.dates[`${t}`].description != null && e.dates[`${t}`].description != ''
        ? ((e.dates[`${t}`].description = e.dates[`${t}`].description.replace(
            /(\\r\\n|\\n|\\r|<br(\s|\s\/|\/|)>)/g,
            ''
          )),
          (e.dates[`${t}`].descriptionHtmlFree = O(e.dates[`${t}`].description, !0)),
          (e.dates[`${t}`].descriptionHtmlFreeICal = O(e.dates[`${t}`].description, !0, !0)),
          (e.dates[`${t}`].description = O(e.dates[`${t}`].description)))
        : e.dates[`${t}`].description == null && e.description != null && e.description != ''
        ? ((e.description = e.description.replace(/(\\r\\n|\\n|\\r|<br(\s|\s\/|\/|)>)/g, '')),
          (e.dates[`${t}`].descriptionHtmlFree = O(e.description, !0)),
          (e.dates[`${t}`].descriptionHtmlFreeICal = O(e.description, !0, !0)),
          (e.dates[`${t}`].description = O(e.description)))
        : (e.dates[`${t}`].descriptionHtmlFree = e.dates[`${t}`].description = ''),
      e
    );
  }
  function Ut(e) {
    for (let t = 0; t < e.dates.length; t++)
      (e = $t(e, t)),
        (e.dates[`${t}`].name == null || e.dates[`${t}`].name == '') &&
          (e.dates[`${t}`].name = e.name),
        e.dates[`${t}`].status == null
          ? (e.dates[`${t}`].status = e.status.toUpperCase())
          : (e.dates[`${t}`].status = e.dates[`${t}`].status.toUpperCase()),
        e.dates[`${t}`].sequence == null && (e.dates[`${t}`].sequence = e.sequence),
        e.dates[`${t}`].organizer == null &&
          e.organizer != null &&
          (e.dates[`${t}`].organizer = e.organizer),
        e.dates[`${t}`].attendee == null &&
          e.attendee != null &&
          (e.dates[`${t}`].attendee = e.attendee),
        e.dates[`${t}`].availability == null && e.availability != null
          ? (e.dates[`${t}`].availability = e.availability.toLowerCase())
          : e.dates[`${t}`].availability != null &&
            (e.dates[`${t}`].availability = e.dates[`${t}`].availability.toLowerCase()),
        e.dates[`${t}`].location == null &&
          e.location != null &&
          (e.dates[`${t}`].location = e.location),
        e.dates[`${t}`].location && e.dates[`${t}`].location.startsWith('http')
          ? (e.dates[`${t}`].onlineEvent = !0)
          : (e.dates[`${t}`].onlineEvent = !1),
        e.dates[`${t}`].uid == null &&
          (t == 0 && e.uid != null && e.uid != ''
            ? (e.dates[0].uid = e.uid)
            : (e.dates[`${t}`].uid = lt()));
    return (
      e.recurrence != null && e.recurrence != '' && (e.dates[0].recurrence = e.recurrence),
      e.dates.length > 1 && e.dates.sort((t, a) => t.timestamp - a.timestamp),
      e
    );
  }
  function Ne(e) {
    return (
      (e.endDate == null || e.endDate == '') && (e.endDate = e.startDate),
      ['start', 'end'].forEach(function (a) {
        if (!/^(\d{4}-\d{2}-\d{2}T?(?:\d{2}:\d{2}|)Z?|today(?:\+\d{1,4}|))$/.test(e[a + 'Date']))
          e[a + 'Date'] = 'badly-formed';
        else {
          if (e[a + 'Date'] != null) {
            e[a + 'Date'] = e[a + 'Date'].replace(/\.\d{3}/, '').replace('Z', '');
            let n = e[a + 'Date'].split('T');
            n[1] != null && ((e[a + 'Date'] = n[0]), (e[a + 'Time'] = n[1]));
          }
          if (e[a + 'Time'] != null && e[a + 'Time'].length === 8) {
            let n = e[a + 'Time'];
            e[a + 'Time'] = n.substring(0, n.length - 3);
          }
        }
      }),
      e.timeZone == 'currentBrowser' &&
        (e.timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone),
      e
    );
  }
  function pe(e, t, a = null, n) {
    try {
      let o = (function () {
        if (a) {
          let i = ne(n, t, a);
          return new Date(t + ' ' + a + ':00 GMT' + i);
        }
        return new Date(t);
      })();
      if (e === 'timestamp') return o.getTime();
      a || o.setDate(o.getDate() + 1);
      let r = new Date().toISOString();
      return o.getTime() < new Date(r).getTime();
    } catch {
      return !1;
    }
  }
  function oe(e) {
    let t = new Date(),
      a = t.getUTCFullYear() + '-' + (t.getUTCMonth() + 1) + '-' + t.getUTCDate();
    e = e.replace(/today/gi, a);
    let n = e.split('+'),
      o = n[0].split('-'),
      r = (function () {
        return o[0].length < 4
          ? new Date(Date.UTC(o[2], o[0] - 1, o[1]))
          : new Date(Date.UTC(o[0], o[1] - 1, o[2]));
      })();
    n[1] != null && n[1] > 0 && r.setDate(r.getDate() + parseInt(n[1]));
    try {
      return r.toISOString().replace(/T(\d{2}:\d{2}:\d{2}\.\d{3})Z/g, '');
    } catch {
      return !1;
    }
  }
  function Ot(e) {
    (e.pastDateHandling == null ||
      (e.pastDateHandling != 'disable' && e.pastDateHandling != 'hide')) &&
      (e.pastDateHandling = 'none');
    let t = (function () {
      for (let a = 0; a < e.dates.length; a++) if (!e.dates[`${a}`].overdue) return !1;
      return !0;
    })();
    return (
      (e.allOverdue = !1),
      t &&
        ((e.allOverdue = !0),
        e.pastDateHandling == 'disable'
          ? (e.disabled = !0)
          : e.pastDateHandling == 'hide' && (e.hidden = !0)),
      (e.disabled || e.hidden) && (e.blockInteraction = !0),
      e
    );
  }
  function Xe(e) {
    if (
      (e.validationError && (e.validationError = null), e.options == null || e.options.length < 1)
    )
      return (
        (e.validationError = 'Add to Calendar Button generation failed: no valid options set'), !1
      );
    if (e.name == null || e.name == '')
      return (
        (e.validationError =
          'Add to Calendar Button generation failed: required name information missing'),
        !1
      );
    if (e.dates != null && e.dates.length > 0) {
      let t = ['name', 'startDate'],
        a = ['name'];
      return t.every(function (n) {
        for (let o = 0; o < e.dates.length; o++)
          if (
            (!a.includes(`${n}`) &&
              (e.dates[`${o}`][`${n}`] == null || e.dates[`${o}`][`${n}`] == '')) ||
            (a.includes(`${n}`) &&
              (e.dates[`${o}`][`${n}`] == null || e.dates[`${o}`][`${n}`] == '') &&
              (e[`${n}`] == null || e[`${n}`] == ''))
          )
            return (
              (e.validationError =
                'Add to Calendar Button generation failed: required setting missing [dates array object #' +
                (o + 1) +
                '/' +
                e.dates.length +
                '] => [' +
                n +
                ']'),
              !1
            );
        return !0;
      });
    }
    return ['startDate'].every(function (a) {
      return e[`${a}`] == null || e[`${a}`] == ''
        ? ((e.validationError =
            'Add to Calendar Button generation failed: required setting missing [' + a + ']'),
          !1)
        : !0;
    });
  }
  function et(e) {
    e.validationError && (e.validationError = null);
    let t = 'Add to Calendar Button generation (' + e.identifier + ')';
    return !(
      !tt(e, t) ||
      !Ht(e, t) ||
      !Nt(e, t) ||
      !It(e, t) ||
      !Ft(e, t) ||
      !Zt(e, t) ||
      !qt(e, t) ||
      !Xt(e, t) ||
      (e.recurrence_simplyfied && !ea(e, t))
    );
  }
  function tt(e, t, a = '', n = '') {
    let o = (function () {
      return a != '' && e.dates[`${a}`].icsFile != null
        ? e.dates[`${a}`].icsFile
        : a == '' && e.icsFile != null
        ? e.icsFile
        : '';
    })();
    return o != '' &&
      (!X(o, !1) || (!e.icsFile.startsWith('https://') && !e.icsFile.startsWith('http://')))
      ? ((e.validationError = t + ' failed: explicit ics file path not valid' + n), !1)
      : !0;
  }
  function Ht(e, t) {
    return [
      'default',
      '3d',
      'flat',
      'round',
      'neumorphism',
      'text',
      'date',
      'custom',
      'none',
    ].includes(e.buttonStyle)
      ? e.customCss != null &&
        e.customCss != '' &&
        (!X(e.customCss, !1) || !/\.css$/m.test(e.customCss))
        ? ((e.validationError = t + ' failed: customCss provided, but no valid url'), !1)
        : (e.customCss == null || e.customCss == '') && e.buttonStyle == 'custom'
        ? ((e.validationError =
            t + ' failed: buttonStyle "custom" selected, but no customCss file provided'),
          !1)
        : !0
      : ((e.validationError = t + ' failed: provided buttonStyle invalid'), !1);
  }
  function Nt(e, t) {
    return e.subscribe == !0 && (e.icsFile == null || e.icsFile == '')
      ? ((e.validationError =
          t + ' failed: a subscription calendar requires a valid explicit ics file as well'),
        !1)
      : !0;
  }
  function It(e, t) {
    return /^\d{8}T\d{6}Z$/.test(e.created)
      ? !0
      : ((e.validationError =
          t +
          ' failed: created date format not valid. Needs to be a full ISO-8601 UTC date and time string, formatted YYYYMMDDTHHMMSSZ'),
        !1);
  }
  function Ft(e, t) {
    return /^\d{8}T\d{6}Z$/.test(e.updated)
      ? !0
      : ((e.validationError =
          t +
          ' failed: updated date format not valid. Needs to be a full ISO-8601 UTC date and time string, formatted YYYYMMDDTHHMMSSZ'),
        !1);
  }
  function Zt(e, t) {
    return e.options == null || e.options.length < 1
      ? ((e.validationError = t + ' failed: no valid options available'), !1)
      : !!e.options.every(function (a) {
          return vt.includes(a)
            ? !0
            : ((e.validationError = t + ' failed: invalid option [' + a + ']'), !1);
        });
  }
  function qt(e, t) {
    for (let a = 0; a < e.dates.length; a++) {
      let n = (function () {
        return e.dates.length == 1
          ? ''
          : ' [dates array object #' + (a + 1) + '/' + e.dates.length + '] ';
      })();
      if (
        !tt(e, t, a, n) ||
        !jt(e, t, a, n) ||
        !Pt(e, t, a, n) ||
        !Gt(e, t, a, n) ||
        !Kt(e, t, a, n) ||
        !Qt(e, t, a, n) ||
        !Wt(e, t, a, n) ||
        !Vt(e, t, a, n) ||
        !Jt(e, t, a, n)
      )
        return !1;
    }
    return !0;
  }
  function jt(e, t, a, n) {
    return e.dates[`${a}`].status != 'TENTATIVE' &&
      e.dates[`${a}`].status != 'CONFIRMED' &&
      e.dates[`${a}`].status != 'CANCELLED'
      ? ((e.validationError =
          t + ' failed: event status needs to be TENTATIVE, CONFIRMED, or CANCELLED' + n),
        !1)
      : !0;
  }
  function Pt(e, t, a, n) {
    return e.dates[`${a}`].availability != null &&
      e.dates[`${a}`].availability != '' &&
      e.dates[`${a}`].availability != 'free' &&
      e.dates[`${a}`].availability != 'busy'
      ? ((e.validationError = t + ' failed: event availability needs to be "free" or "busy"' + n),
        !1)
      : !0;
  }
  function Gt(e, t, a, n) {
    if (e.dates[`${a}`].organizer != null && e.dates[`${a}`].organizer != '') {
      let o = e.dates[`${a}`].organizer.split('|');
      if (o.length != 2 || o[0].length > 50 || o[1].length > 80 || !it(o[1]))
        return (
          (e.validationError =
            t +
            ' failed: organizer needs to match the schema "NAME|EMAIL" with a valid email address' +
            n),
          !1
        );
    }
    return !0;
  }
  function Kt(e, t, a, n) {
    if (e.dates[`${a}`].attendee != null && e.dates[`${a}`].attendee != '') {
      if (e.dates[`${a}`].organizer == null || e.dates[`${a}`].organizer == '')
        return (
          (e.validationError =
            t + ' failed: if an attendee is set, you also need to set the organizer' + n),
          !1
        );
      let o = e.dates[`${a}`].attendee.split('|');
      if (o.length != 2 || o[0].length > 50 || o[1].length > 80 || !it(o[1]))
        return (
          (e.validationError =
            t +
            ' failed: attendee needs to match the schema "NAME|EMAIL" with a valid email address' +
            n),
          !1
        );
    }
    return !0;
  }
  function Qt(e, t, a, n) {
    return (
      /^(\w|-){1,254}$/.test(e.dates[`${a}`].uid) ||
        (e.debug &&
          console.warn(
            t +
              ': UID not valid. May only contain alpha, digits, and dashes; and be less than 255 characters. Falling back to an automated value!' +
              n
          ),
        (e.dates[`${a}`].uid = lt())),
      !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
        e.dates[`${a}`].uid
      ) &&
        e.debug &&
        console.warn(
          t +
            ': UID is highly recommended to be a hex-encoded random Universally Unique Identifier (UUID)!' +
            n
        ),
      !0
    );
  }
  function Wt(e, t, a, n) {
    return (
      /^\d+$/.test(e.dates[`${a}`].sequence) ||
        (e.debug &&
          console.log(t + ': sequence needs to be a number. Used the default 0 instead' + n),
        (e.dates[`${a}`].sequence = 0)),
      !0
    );
  }
  function Vt(e, t, a, n) {
    return Oe().includes(e.dates[`${a}`].timeZone)
      ? !0
      : ((e.validationError = t + ' failed: invalid time zone given' + n), !1);
  }
  function Jt(e, t, a, n) {
    let o = ['startDate', 'endDate'],
      r = o;
    return !o.every(function (l) {
      if (e.dates[`${a}`][`${l}`].length !== 10)
        return (e.validationError = t + ' failed: date misspelled [-> YYYY-MM-DD]' + n), !1;
      let c = e.dates[`${a}`][`${l}`].split('-');
      return c.length < 3 || c.length > 3
        ? ((e.validationError =
            t + ' failed: date misspelled [' + l + ': ' + e.dates[`${a}`][`${l}`] + ']' + n),
          !1)
        : ((r[`${l}`] = new Date(c[0], c[1] - 1, c[2])), !0);
    }) ||
      !['startTime', 'endTime'].every(function (l) {
        if (e.dates[`${a}`][`${l}`] != null) {
          if (e.dates[`${a}`][`${l}`].length !== 5)
            return (e.validationError = t + ' failed: time misspelled [-> HH:MM]' + n), !1;
          let c = e.dates[`${a}`][`${l}`].split(':');
          if (c.length < 2 || c.length > 2)
            return (
              (e.validationError =
                t + ' failed: time misspelled [' + l + ': ' + e.dates[`${a}`][`${l}`] + ']' + n),
              !1
            );
          if (c[0] > 23)
            return (
              (e.validationError =
                t +
                ' failed: time misspelled - hours number too high [' +
                l +
                ': ' +
                c[0] +
                ']' +
                n),
              !1
            );
          if (c[1] > 59)
            return (
              (e.validationError =
                t +
                ' failed: time misspelled - minutes number too high [' +
                l +
                ': ' +
                c[1] +
                ']' +
                n),
              !1
            );
          l == 'startTime' &&
            (r.startDate = new Date(r.startDate.getTime() + c[0] * 36e5 + c[1] * 6e4)),
            l == 'endTime' &&
              (r.endDate = new Date(r.endDate.getTime() + c[0] * 36e5 + c[1] * 6e4));
        }
        return !0;
      })
      ? !1
      : (e.dates[`${a}`].startTime != null && e.dates[`${a}`].endTime == null) ||
        (e.dates[`${a}`].startTime == null && e.dates[`${a}`].endTime != null)
      ? ((e.validationError =
          t +
          ' failed: if you set a starting or end time, the respective other one also needs to be defined' +
          n),
        !1)
      : r.endDate < r.startDate
      ? ((e.validationError = t + ' failed: end date before start date' + n), !1)
      : !0;
  }
  function Xt(e, t) {
    return e.recurrence != null && e.recurrence != '' && e.dates.length > 1
      ? ((e.validationError = t + ' failed: RRULE and multi-date set at the same time'), !1)
      : e.recurrence != null && e.recurrence != '' && !/^RRULE:[\w=;,:+-/\\]+$/i.test(e.recurrence)
      ? ((e.validationError = t + ' failed: RRULE data misspelled'), !1)
      : !0;
  }
  function ea(e, t) {
    return e.recurrence_interval != null &&
      e.recurrence_interval != '' &&
      !/^\d+$/.test(e.recurrence_interval)
      ? ((e.validationError = t + ' failed: recurrence data (interval) misspelled'), !1)
      : e.recurrence_until != null &&
        e.recurrence_until != '' &&
        !/^(\d|-|:)+$/i.test(e.recurrence_until)
      ? ((e.validationError = t + ' failed: recurrence data (until) misspelled'), !1)
      : e.recurrence_count != null && e.recurrence_count != '' && !/^\d+$/.test(e.recurrence_count)
      ? ((e.validationError = t + ' failed: recurrence data (interval) misspelled'), !1)
      : e.recurrence_byMonth != null &&
        e.recurrence_byMonth != '' &&
        !/^(\d|,)+$/.test(e.recurrence_byMonth)
      ? ((e.validationError = t + ' failed: recurrence data (byMonth) misspelled'), !1)
      : e.recurrence_byMonthDay != null &&
        e.recurrence_byMonthDay != '' &&
        !/^(\d|,)+$/.test(e.recurrence_byMonthDay)
      ? ((e.validationError = t + ' failed: recurrence data (byMonthDay) misspelled'), !1)
      : e.recurrence_byDay != null &&
        e.recurrence_byDay != '' &&
        !/^(\d|-|MO|TU|WE|TH|FR|SA|SU|,)+$/im.test(e.recurrence_byDay)
      ? ((e.validationError = t + ' failed: recurrence data (byDay) misspelled'), !1)
      : e.recurrence_weekstart != null &&
        e.recurrence_weekstart != '' &&
        !/^(MO|TU|WE|TH|FR|SA|SU)$/im.test(e.recurrence_weekstart)
      ? ((e.validationError = t + ' failed: recurrence data (weekstart) misspelled'), !1)
      : !0;
  }
  function L(e, t, a = '', n = null, o = !1, r = !1) {
    t == 'open'
      ? Ie(e, a, n, o, r)
      : t == 'close' || n.classList.contains('atcb-active') || e.querySelector('.atcb-active-modal')
      ? j(e, o)
      : Ie(e, a, n, o, r);
  }
  function Ie(e, t, a = null, n = !1, o = !1) {
    if (e.querySelector('.atcb-list') || e.querySelector('.atcb-modal')) return;
    S('openList', t.identifier, t.identifier), (z.active = t.identifier);
    let r = na(e, t),
      i = document.createElement('div');
    i.classList.add('atcb-list-wrapper'),
      t.hideTextLabelList && i.classList.add('atcb-no-text'),
      a
        ? (a.classList.add('atcb-active'),
          a.setAttribute('aria-expanded', !0),
          t.listStyle === 'modal'
            ? (a.classList.add('atcb-modal-style'), r.classList.add('atcb-modal'))
            : (i.append(r),
              i.classList.add('atcb-dropdown'),
              t.listStyle === 'overlay' && i.classList.add('atcb-dropoverlay')),
          o && r.classList.add('atcb-generated-button'))
        : r.classList.add('atcb-modal');
    let l = at(e, t.trigger, t.listStyle === 'modal', !t.hideBackground);
    if (t.listStyle === 'modal') {
      let s = Le(e, t);
      s.querySelector('.atcb-modal-host-initialized').append(l),
        l.append(r),
        t.hideBranding || we(s, !1),
        ce(r, t.sizes),
        De(s),
        ee(l);
    } else
      t.forceOverlay && ((e = oa(e, t)), (a = e.querySelector('button.atcb-button'))),
        e.querySelector('.atcb-initialized').append(i),
        i.append(r),
        t.buttonStyle != 'default' && i.classList.add('atcb-style-' + t.buttonStyle),
        t.hideBranding || we(e),
        e.append(l),
        ce(r, t.sizes),
        (i.style.display = 'none'),
        setTimeout(function () {
          (i.style.display = 'block'),
            t.listStyle === 'dropdown-static'
              ? fe(e, a, i, !0)
              : t.listStyle === 'dropup-static'
              ? fe(e, a, i, !1, !0)
              : fe(e, a, i);
        }, 5),
        ee(l);
    let c = (function () {
      let s = e.querySelector('.atcb-list-item');
      if (s) return s;
      let g = document.getElementById(t.identifier + '-modal-host');
      if (g) return g.shadowRoot.querySelector('.atcb-list-item');
    })();
    c && (n ? c.focus() : (c.focus({ preventScroll: !0 }), c.blur()));
  }
  function j(e, t = !1) {
    let a = document.getElementById(e.host.getAttribute('atcb-button-id') + '-modal-host'),
      n = (function () {
        return !a || a.length === 0
          ? []
          : a.shadowRoot.querySelectorAll('.atcb-modal[data-modal-nr]');
      })();
    if (n.length > 1) {
      a.shadowRoot.querySelectorAll('.atcb-modal[data-modal-nr="' + n.length + '"]')[0].remove();
      let o = a.shadowRoot.querySelectorAll(
        '.atcb-modal[data-modal-nr="' + (n.length - 1) + '"]'
      )[0];
      o.style.display = 'block';
      let r = o,
        i = o.getElementsByTagName('button');
      i.length > 0 && (r = i[0]), r.focus(), t || r.blur();
    } else {
      let o = (function () {
        let i = e.querySelector('.atcb-active, .atcb-active-modal');
        return i || document.querySelector('.atcb-active, .atcb-active-modal');
      })();
      o && (o.focus({ preventScroll: !0 }), t || o.blur()),
        Array.from(e.querySelectorAll('.atcb-active')).forEach((i) => {
          i.classList.remove('atcb-active'), i.setAttribute('aria-expanded', !1);
        }),
        Array.from(e.querySelectorAll('.atcb-active-modal')).forEach((i) => {
          i.classList.remove('atcb-active-modal');
        }),
        Array.from(document.querySelectorAll('.atcb-active')).forEach((i) => {
          i.classList.remove('atcb-active'), i.setAttribute('aria-expanded', !1);
        }),
        Array.from(document.querySelectorAll('.atcb-active-modal')).forEach((i) => {
          i.classList.remove('atcb-active-modal');
        }),
        a && a.remove(),
        document.body.classList.remove('atcb-modal-no-scroll'),
        document.documentElement.classList.remove('atcb-modal-no-scroll'),
        Array.from(e.querySelectorAll('.atcb-list-wrapper'))
          .concat(Array.from(e.querySelectorAll('.atcb-list')))
          .concat(Array.from(e.querySelectorAll('#add-to-calendar-button-reference')))
          .concat(Array.from(e.querySelectorAll('#atcb-bgoverlay')))
          .forEach((i) => i.remove());
      let r = document.querySelector('.atcb-shadow-hide');
      r &&
        ((r.shadowRoot.querySelector('.atcb-initialized').style.opacity = '1'),
        r.classList.remove('atcb-shadow-hide'),
        window.removeEventListener('scroll', le),
        window.removeEventListener('resize', le)),
        (z.active = '');
    }
  }
  function re(e, t, a, n, o = !1, r = '', i = !1) {
    switch (n) {
      case 'trigger':
      default:
        (a.id = t.identifier),
          t.blockInteraction ||
            (a.addEventListener('keyup', function (l) {
              (l.key === 'Enter' ||
                l.code == 'Space' ||
                (l.key === 'Alt' && l.key === 'Control' && l.code === 'Space')) &&
                (l.preventDefault(), L(e, 'auto', t, a, !0, !0));
            }),
            a.addEventListener(
              'touchend',
              U((l) => {
                l.preventDefault(), L(e, 'auto', t, a, !1, !0);
              })
            ),
            t.trigger === 'click'
              ? a.addEventListener(
                  'mouseup',
                  U((l) => {
                    l.preventDefault(), L(e, 'auto', t, a, !1, !0);
                  })
                )
              : a.addEventListener(
                  'mouseenter',
                  U((l) => {
                    l.preventDefault(), L(e, 'open', t, a, !1, !0);
                  })
                ));
        break;
      case 'apple':
      case 'google':
      case 'ical':
      case 'msteams':
      case 'ms365':
      case 'outlookcom':
      case 'yahoo':
        (a.id = t.identifier + '-' + n),
          t.blockInteraction ||
            (a.addEventListener(
              'click',
              U(() => {
                i
                  ? (e.querySelector('#' + a.id).blur(), S('openSingletonLink', a.id, t.identifier))
                  : (L(e, 'close'), S('openCalendarLink', a.id, t.identifier)),
                  N(e, n, t);
              })
            ),
            a.addEventListener('keyup', function (l) {
              l.key === 'Enter' &&
                (l.preventDefault(),
                i
                  ? (e.querySelector('#' + a.id).blur(), S('openSingletonLink', a.id, t.identifier))
                  : (L(e, 'close'), S('openCalendarLink', a.id, t.identifier)),
                N(e, n, t, 'all', !0));
            }));
        break;
      case 'close':
        (a.id = t.identifier + '-close'),
          a.addEventListener(
            'click',
            q(() => {
              S('closeList', 'List Close Button', z.active), L(e, 'close');
            })
          ),
          a.addEventListener('keyup', function (l) {
            l.key === 'Enter' &&
              (l.preventDefault(),
              S('closeList', 'List Close Button', z.active),
              L(e, 'close', t, 'all', !0));
          });
        break;
    }
    ta(t, a, n, o, r, i);
  }
  function ta(e, t, a, n, o, r) {
    let i = (function () {
      if (e.pastDateHandling != 'none') {
        let c = !0;
        for (let s = 0; s < e.dates.length; s++)
          if (!e.dates[`${s}`].overdue) {
            c = !1;
            break;
          }
        if (c) return v('expired', e);
      }
      return v('label.addtocalendar', e);
    })();
    if (
      (o == '' && e.options.length === 1 && (o = i),
      (o = {
        trigger: o || i,
        apple: o || 'Apple',
        google: o || 'Google',
        ical: o || v('label.icalfile', e),
        msteams: o || 'Microsoft Teams',
        ms365: o || 'Microsoft 365',
        outlookcom: o || 'Outlook.com',
        yahoo: o || 'Yahoo',
        close: v('close', e),
      }[`${a}`]),
      !(e.buttonStyle == 'date' && (a == 'trigger' || r)))
    ) {
      if (n) {
        let c = document.createElement('span');
        c.classList.add('atcb-icon'), (c.innerHTML = H[`${a}`]), t.append(c);
      }
      if (
        ((a == 'trigger' || r) && !e.hideTextLabelButton) ||
        (!r && a != 'trigger' && !e.hideTextLabelList)
      ) {
        let c = document.createElement('span');
        c.classList.add('atcb-text'), (c.textContent = o), t.append(c);
      }
      t.setAttribute('aria-label', o);
    }
  }
  function aa(e, t, a, n = !1) {
    let o = (function () {
      return !!(a.options.length === 1 || (a.buttonsList && a.buttonStyle != 'date'));
    })();
    (o ? a.options : ['default']).forEach(function (i) {
      let l = document.createElement('div');
      l.classList.add('atcb-button-wrapper'),
        a.rtl && l.classList.add('atcb-rtl'),
        t.append(l),
        ce(l, a.sizes);
      let c = document.createElement('button');
      if (
        (c.classList.add('atcb-button'),
        a.disabled &&
          (c.setAttribute('disabled', !0),
          (c.style.cssText =
            'opacity: .75; cursor: not-allowed; filter: brightness(95%); border-style: dashed;')),
        a.hideTextLabelButton && c.classList.add('atcb-no-text'),
        a.trigger === 'click' && c.classList.add('atcb-click'),
        a.listStyle === 'overlay' && c.classList.add('atcb-dropoverlay'),
        (c.type = 'button'),
        c.setAttribute('aria-expanded', !1),
        l.append(c),
        a.buttonStyle == 'date' && nt(a, c),
        o)
      ) {
        c.classList.add('atcb-single');
        let s = (function () {
          return a.buttonsList && a.options.length > 1 ? a.optionLabels[0] : a.label;
        })();
        re(e, a, c, i, !a.hideIconButton, s, !0),
          (c.id = a.identifier),
          a.buttonsList && (c.id = a.identifier + '-' + i);
      } else {
        re(e, a, c, 'trigger', !a.hideIconButton, a.label);
        let s = document.createElement('div');
        s.classList.add('atcb-dropdown-anchor'), c.append(s);
      }
      if (!a.hideCheckmark && !a.hideTextLabelButton && !a.buttonsList && !a.disabled) {
        let s = document.createElement('div');
        s.classList.add('atcb-checkmark'), (s.innerHTML = H.checkmark), c.append(s);
      }
    }),
      n && console.log('Add to Calendar Button "' + a.identifier + '" created');
  }
  function na(e, t) {
    let a = document.createElement('div');
    a.classList.add('atcb-list'), (a.role = 'list'), t.rtl && a.classList.add('atcb-rtl');
    let n = 0;
    if (
      (t.options.forEach(function (o) {
        let r = document.createElement('div');
        r.classList.add('atcb-list-item'),
          (r.role = 'link'),
          (r.tabIndex = 0),
          n++,
          (r.dataset.optionNumber = n),
          a.append(r),
          re(e, t, r, o, !t.hideIconList, t.optionLabels[n - 1]);
      }),
      t.listStyle === 'modal')
    ) {
      let o = document.createElement('div');
      o.classList.add('atcb-list-item', 'atcb-list-item-close'),
        (o.role = 'button'),
        (o.tabIndex = 0),
        n++,
        (o.dataset.optionNumber = n),
        a.append(o),
        re(e, t, o, 'close', !t.hideIconList);
    }
    return a;
  }
  function at(e, t = '', a = !1, n = !0) {
    let o = (function () {
      return a ? document.createElement('dialog') : document.createElement('div');
    })();
    a && o.setAttribute('open', !0),
      (o.id = 'atcb-bgoverlay'),
      n || o.classList.add('atcb-no-bg'),
      (o.role = 'button'),
      (o.tabIndex = 0),
      o.addEventListener(
        'mouseup',
        U((i) => {
          i.target === i.currentTarget &&
            (S('closeList', 'Background Hit', z.active), L(e, 'close'));
        })
      );
    let r = !1;
    return (
      o.addEventListener(
        'touchstart',
        U(() => (r = !1)),
        { passive: !0 }
      ),
      o.addEventListener(
        'touchmove',
        U(() => (r = !0)),
        { passive: !0 }
      ),
      o.addEventListener(
        'touchend',
        q((i) => {
          r !== !1 ||
            i.target !== i.currentTarget ||
            (S('closeList', 'Background Hit', z.active), L(e, 'close'));
        }),
        { passive: !0 }
      ),
      t !== 'click'
        ? o.addEventListener(
            'mousemove',
            U((i) => {
              i.target === i.currentTarget &&
                (S('closeList', 'Background Hit', z.active), L(e, 'close'));
            })
          )
        : o.classList.add('atcb-click'),
      o
    );
  }
  function we(e, t = !0) {
    let a = document.createElement('div');
    (a.id = 'add-to-calendar-button-reference'),
      (a.style.cssText =
        'width: 130px; padding: 5px; height: auto; opacity: .8; transform: translate3d(0, 0, 0); z-index: 15000000;'),
      setTimeout(() => {
        a.innerHTML =
          '<a href="https://add-to-calendar-pro.com" target="_blank" rel="noopener">' +
          H.atcb +
          '</a>';
      }, 500),
      t
        ? e.querySelector('.atcb-initialized .atcb-list-wrapper').append(a)
        : (window.innerHeight > 1e3 || window.innerWidth > 1e3) &&
          (e.append(a), (a.style.cssText += 'position: fixed; bottom: 15px; right: 30px;'));
  }
  function I(e, t, a = '', n, o = '', r = [], i = [], l = !1, c = {}) {
    z.active = t.identifier;
    let s = Le(e, t, !1),
      g = (function () {
        let p = s.getElementById('atcb-bgoverlay');
        if (!p) {
          let k = at(e, 'click', !0, !t.hideBackground);
          return s.querySelector('.atcb-modal-host-initialized').append(k), k;
        }
        return p;
      })(),
      b = document.createElement('div');
    b.classList.add('atcb-modal'), g.append(b);
    let u = s.querySelectorAll('.atcb-modal').length;
    (b.dataset.modalNr = u), (b.tabIndex = 0), b.focus({ preventScroll: !0 }), b.blur();
    let y = (function () {
      let p = e.getElementById(t.identifier);
      return p || document.getElementById(t.identifier);
    })();
    y && y.classList.add('atcb-active-modal');
    let m = document.createElement('div');
    if (
      (m.classList.add('atcb-modal-box'),
      t.rtl && m.classList.add('atcb-rtl'),
      b.append(m),
      ce(m, t.sizes),
      ee(g),
      a != '' && !t.hideIconModal)
    ) {
      let p = document.createElement('div');
      p.classList.add('atcb-modal-icon'), (p.innerHTML = H[`${a}`]), m.append(p);
    }
    if (n && n != '') {
      let p = document.createElement('div');
      p.classList.add('atcb-modal-headline'), (p.textContent = n), m.append(p);
    }
    if (o != '') {
      let p = document.createElement('div');
      p.classList.add('atcb-modal-content'), (p.innerHTML = o), m.append(p);
    }
    if (i.length > 1) {
      t.hideBranding || we(s, !1);
      let p = document.createElement('div');
      p.classList.add('atcb-modal-content'), m.append(p);
      for (let k = 1; k < i.length; k++) {
        let d = document.createElement('button');
        (d.type = 'button'),
          (d.id = t.identifier + '-' + i[0] + '-' + k),
          z[`${t.identifier}`][`${i[0]}`][k - 1] > 0 && d.classList.add('atcb-saved'),
          d.classList.add('atcb-subevent-btn'),
          p.append(d),
          nt(t, d, k),
          !t.dates[k - 1].overdue || t.pastDateHandling == 'none'
            ? (k == 1 && l && d.focus(),
              d.addEventListener(
                'click',
                q(() => {
                  S('openSubEventLink', d.id, t.identifier),
                    d.blur(),
                    N(e, i[0], t, i[`${k}`], l, !0);
                })
              ))
            : (d.setAttribute('disabled', !0),
              (d.style.cssText =
                'opacity: .75; cursor: not-allowed; filter: brightness(95%); border-style: dashed;'));
      }
    }
    r.length == 0 && r.push({ type: 'close', label: v('close', t) });
    let h = document.createElement('div');
    if (
      (h.classList.add('atcb-modal-buttons'),
      m.append(h),
      r.forEach((p, k) => {
        let d;
        switch (
          (p.href != null && p.href != ''
            ? ((d = document.createElement('a')),
              d.setAttribute('target', Ye),
              d.setAttribute('href', p.href),
              d.setAttribute('rel', 'noopener'))
            : ((d = document.createElement('button')), (d.type = 'button')),
          d.classList.add('atcb-modal-btn'),
          p.primary && d.classList.add('atcb-modal-btn-primary'),
          (p.label == null || p.label == '') && (p.label = v('modal.button.default', t)),
          (d.textContent = p.label),
          h.append(d),
          k == 0 && i.length < 2 && l && d.focus(),
          p.type)
        ) {
          default:
          case 'close':
            d.addEventListener(
              'click',
              q(() => {
                S('closeList', 'Modal Close Button', z.active), j(e);
              })
            ),
              d.addEventListener('keyup', function (x) {
                (x.key === 'Enter' ||
                  x.code == 'Space' ||
                  (x.key === 'Alt' && x.key === 'Control' && x.code === 'Space')) &&
                  (S('closeList', 'Modal Close Button', z.active), L(e, 'close', '', '', !0));
              });
            break;
          case 'yahoo2nd':
            d.addEventListener(
              'click',
              q(() => {
                j(e), Fe(e, t);
              })
            ),
              d.addEventListener('keyup', function (x) {
                (x.key === 'Enter' ||
                  x.code == 'Space' ||
                  (x.key === 'Alt' && x.key === 'Control' && x.code === 'Space')) &&
                  (L(e, 'close', '', '', !0), Fe(e, t, l));
              });
            break;
          case '2timeslink':
            d.addEventListener(
              'click',
              q(() => {
                j(e), N(e, c.type, t, c.id, l, !1, !0);
              })
            ),
              d.addEventListener('keyup', function (x) {
                (x.key === 'Enter' ||
                  x.code == 'Space' ||
                  (x.key === 'Alt' && x.key === 'Control' && x.code === 'Space')) &&
                  (L(e, 'close', '', '', !0), N(e, c.type, t, c.id, l, !1, !0));
              });
            break;
          case 'none':
            break;
        }
      }),
      u > 1)
    ) {
      let p = s.querySelector('.atcb-modal[data-modal-nr="' + (u - 1) + '"]');
      p.style.display = 'none';
    }
    De(s, b);
  }
  function Fe(e, t, a) {
    se(e, t), N(e, 'yahoo2nd', t, 'all', a);
  }
  function nt(e, t, a = 'all') {
    a != 'all' ? (a = parseInt(a) - 1) : e.dates.length == 1 && (a = 0);
    let n = (function () {
        let d,
          x,
          f,
          w,
          A = {},
          D = {},
          E = [],
          Q = '',
          W = '';
        a == 'all'
          ? ((A = C(e.dates[0])),
            (D = C(e.dates[e.dates.length - 1])),
            (f = e.dates[0].timeZone),
            (w = e.dates[e.dates.length - 1].timeZone))
          : ((A = C(e.dates[`${a}`])), (D = A), (f = e.dates[`${a}`].timeZone), (w = f)),
          (d = new Date(A.start)),
          (x = new Date(D.end)),
          A.allday && (f = 'GMT'),
          D.allday && (w = 'GMT');
        let be = Intl.DateTimeFormat().resolvedOptions().timeZone,
          ft = ['global', 'world-wide', 'worldwide', 'online'];
        (function () {
          let T = 0,
            Be = e.dates.length - 1;
          for (a != 'all' && (T = Be = a), T; T <= Be; T++)
            if (
              !(function () {
                return !!(
                  e.dates[`${T}`].location != null &&
                  e.dates[`${T}`].location != '' &&
                  ft.includes(e.dates[`${T}`].location.toLowerCase())
                );
              })() &&
              !e.dates[`${T}`].onlineEvent
            )
              return !1;
          return !0;
        })()
          ? (f = w = be)
          : (!A.allday && be != f && f != w && (Q = '(' + f + ')'),
            ((!D.allday && be != w) || f != w) && (W = '(' + w + ')'));
        let Ce = new Date(),
          te = (function () {
            return d.getFullYear() == Ce.getFullYear();
          })(),
          ht = (function () {
            return x.getFullYear() == Ce.getFullYear();
          })(),
          F = Ze(f, te, e.language),
          V = Ze(w, ht, e.language);
        if (
          d.toLocaleDateString(e.language, V.DateLong) ===
          x.toLocaleDateString(e.language, V.DateLong)
        )
          if (A.allday) te || E.push(d.toLocaleDateString(e.language, F.DateLong));
          else {
            let T = '';
            te
              ? (T = d.toLocaleString(e.language, F.Time))
              : (T = d.toLocaleString(e.language, F.DateTimeLong)),
              e.language == 'en' && (T = T.replace(/:00/, '')),
              E.push(T),
              Q != '' && E.push(Q),
              E.push('-'),
              (T = x.toLocaleTimeString(e.language, V.Time)),
              e.language == 'en' && (T = T.replace(/:00/, '')),
              E.push(T),
              W != '' && E.push(W);
          }
        else {
          if (A.allday) E.push(d.toLocaleDateString(e.language, F.DateLong));
          else {
            let T = '';
            te
              ? (T = d.toLocaleString(e.language, F.Time))
              : (T = d.toLocaleString(e.language, F.DateTimeLong)),
              e.language == 'en' && (T = T.replace(/:00/, '')),
              E.push(T);
          }
          if ((Q != '' && E.push(Q), E.push('-'), D.allday))
            E.push(x.toLocaleDateString(e.language, V.DateLong));
          else {
            let T = x.toLocaleString(e.language, V.DateTimeLong);
            e.language == 'en' && (T = T.replace(/:00/, '')), E.push(T);
          }
          W != '' && E.push(W);
        }
        return E;
      })(),
      o = (function () {
        return a != 'all' && e.dates[`${a}`].status == 'CANCELLED'
          ? v('date.status.cancelled', e) + '<br>' + v('date.status.cancelled.cta', e)
          : e.pastDateHandling != 'none' &&
            ((a == 'all' && e.allOverdue) || (a != 'all' && e.dates[`${a}`].overdue))
          ? v('expired', e)
          : e.label && e.label != ''
          ? e.label
          : '+ ' + v('label.addtocalendar', e);
      })(),
      r = (function () {
        return a != 'all' && e.dates[`${a}`].status == 'CANCELLED'
          ? v('date.status.cancelled', e)
          : '';
      })(),
      i = (function () {
        return n.length == 0 ? v('recurring', e) + ' &#x27F3;' : '&#x27F3;';
      })(),
      l = !1;
    a === 'all' && ((a = 0), (l = !0));
    let c = new Date(C(e.dates[`${a}`]).start),
      s = C(e.dates[`${a}`]).allday,
      g = e.dates[`${a}`].timeZone,
      b = document.createElement('div');
    b.classList.add('atcb-date-btn-left'), t.append(b);
    let u = document.createElement('div');
    u.classList.add('atcb-date-btn-day'), b.append(u);
    let y = document.createElement('div');
    y.classList.add('atcb-date-btn-month'),
      (u.textContent = (function () {
        return s
          ? c.toLocaleString(e.language, { day: 'numeric' })
          : c.toLocaleString(e.language, { day: 'numeric', timeZone: g });
      })()),
      (y.textContent = (function () {
        return s
          ? c.toLocaleString(e.language, { month: 'short' })
          : c.toLocaleString(e.language, { month: 'short', timeZone: g });
      })()),
      b.append(y);
    let m = document.createElement('div');
    m.classList.add('atcb-date-btn-right'), t.append(m);
    let h = document.createElement('div');
    h.classList.add('atcb-date-btn-details'), m.append(h);
    let p = document.createElement('div');
    if (
      (p.classList.add('atcb-date-btn-headline'),
      e.dates.length > 1 && l ? (p.textContent = e.name) : (p.textContent = e.dates[`${a}`].name),
      h.append(p),
      (e.dates[`${a}`].location != null &&
        e.dates[`${a}`].location != '' &&
        !e.dates[`${a}`].onlineEvent) ||
        r != '')
    ) {
      let d = document.createElement('div');
      if ((d.classList.add('atcb-date-btn-content'), h.append(d), r != ''))
        (d.textContent = r), (d.style.fontWeight = '600'), (d.style.color = '#9c1a23');
      else {
        d.classList.add('atcb-date-btn-content-location');
        let x = document.createElement('span');
        x.classList.add('atcb-date-btn-content-icon'), (x.innerHTML = H.location), d.append(x);
        let f = document.createElement('span');
        (f.textContent = e.dates[`${a}`].location), d.append(f);
      }
    } else if (
      e.dates[`${a}`].description != '' &&
      n.length == 0 &&
      (e.recurrence == null || e.recurrence == '')
    ) {
      let d = document.createElement('div');
      d.classList.add('atcb-date-btn-content'),
        (d.textContent = e.dates[`${a}`].description),
        (d.style.cssText =
          'overflow: hidden; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;'),
        h.append(d);
    } else
      (p.style.cssText = '-webkit-line-clamp: 2;'),
        n.length == 0 &&
          (e.recurrence == null || e.recurrence == '') &&
          ((m.style.alignSelf = 'center'),
          (p.style.cssText = 'text-align: center; -webkit-line-clamp: 2;'));
    if (n.length > 0 || (e.recurrence != null && e.recurrence != '')) {
      let d = document.createElement('div');
      d.classList.add('atcb-date-btn-content'), h.append(d);
      let x = document.createElement('span');
      x.classList.add('atcb-date-btn-content-icon'), (x.innerHTML = H.ical), d.append(x);
      let f = document.createElement('span');
      if (
        (f.classList.add('atcb-date-btn-content-text'),
        d.append(f),
        n.forEach(function (w) {
          let A = document.createElement('span');
          (A.textContent = w), f.append(A);
        }),
        e.recurrence != null && e.recurrence != '')
      ) {
        let w = document.createElement('span');
        (w.innerHTML = i), f.append(w);
      }
    }
    let k = document.createElement('div');
    if (
      (k.classList.add('atcb-date-btn-hover'), (k.innerHTML = o), m.append(k), !e.hideCheckmark)
    ) {
      let d = document.createElement('div');
      d.classList.add('atcb-checkmark'), (d.innerHTML = H.checkmark), t.append(d);
    }
  }
  function Ze(e, t = !1, a = 'en') {
    let n = (function () {
      return a == 'en' ? 'h12' : 'h23';
    })();
    return t
      ? {
          DateLong: { timeZone: e, month: 'short', day: 'numeric' },
          DateTimeLong: {
            timeZone: e,
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hourCycle: n,
          },
          Time: { timeZone: e, hour: 'numeric', minute: '2-digit', hourCycle: n },
        }
      : {
          DateLong: { timeZone: e, year: 'numeric', month: 'numeric', day: 'numeric' },
          DateTimeLong: {
            timeZone: e,
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hourCycle: n,
          },
          Time: { timeZone: e, hour: 'numeric', minute: '2-digit', hourCycle: n },
        };
  }
  function Le(e, t, a = !0) {
    let n = document.getElementById(t.identifier + '-modal-host');
    if (!a && n) return n.shadowRoot;
    n && n.remove();
    let o = document.createElement('div');
    (o.id = t.identifier + '-modal-host'),
      e.host.hasAttribute('styleLight') &&
        o.setAttribute('styleLight', e.host.getAttribute('styleLight')),
      e.host.hasAttribute('styleDark') &&
        o.setAttribute('styleDark', e.host.getAttribute('styleDark')),
      e.host.hasAttribute('cspnonce') &&
        o.setAttribute('cspnonce', e.host.getAttribute('cspnonce')),
      o.setAttribute('atcb-button-id', t.identifier),
      o.setAttribute(
        'style',
        'transform:translate3D(0, 0, 0);visibility:visible;opacity:1;position:fixed;top:0;left:0;width:100%;height:100%;display:flex;z-index:13999998;'
      ),
      document.body.append(o),
      o.attachShadow({ mode: 'open', delegateFocus: !0 });
    let r = document.createElement('template');
    return (
      (r.innerHTML =
        '<div class="atcb-modal-host-initialized" style="translate3D(0, 0, 0);visibility:visible;opacity:1;position:fixed;top:0;left:0;width:100%;height:100%;display:flex;z-index:13999999;"></div>'),
      o.shadowRoot.append(r.content.cloneNode(!0)),
      de(o.shadowRoot, t),
      Me(o.shadowRoot, null, t.buttonStyle, !1, !1, t.customCss),
      o.shadowRoot
    );
  }
  function oa(e, t) {
    let a = Le(e, t);
    return (
      ee(a.querySelector('.atcb-modal-host-initialized')),
      Array.from(e.children).forEach((o) => {
        o.tagName != 'STYLE' &&
          a.querySelector('.atcb-modal-host-initialized').append(o.cloneNode(!0));
      }),
      a.querySelector('button.atcb-button').removeAttribute('id'),
      e.host.classList.add('atcb-shadow-hide'),
      (e.querySelector('.atcb-initialized').style.opacity = '0'),
      rt(e, a),
      window.addEventListener('scroll', le),
      window.addEventListener('resize', le),
      a.querySelector('.atcb-modal-host-initialized')
    );
  }
  function ia(e, t) {
    let a = document.createElement('script');
    if (((a.id = 'atcb-schema-' + e.identifier), t.hasAttribute('cspnonce'))) {
      if (/[`'"()[\]{}<>\s]/.test(t.getAttribute('cspnonce')))
        throw new Error('cspnonce input contains forbidden characters.');
      a.setAttribute('nonce', t.getAttribute('cspnonce'));
    }
    a.type = 'application/ld+json';
    let n = e.name.replace(/\s/g, ''),
      o = [];
    if (e.dates.length > 1) {
      let i = [];
      i.push('"@context":"https://schema.org"'),
        i.push('"@type":"EventSeries"'),
        i.push('"@id":"' + n + '"'),
        i.push('"name":"' + e.name + '",'),
        o.push(
          `{\r
` +
            i.join(`,\r
`) +
            `\r
`
        );
    }
    let r = [];
    for (let i = 0; i < e.dates.length; i++) {
      let l = [];
      l.push('"@context":"https://schema.org"'),
        l.push('"@type":"Event"'),
        e.dates.length > 1 && l.push('"@id":"' + n + '-' + (i + 1) + '"'),
        e.dates[`${i}`].status === 'CANCELLED' &&
          l.push('"eventStatus":"https://schema.org/EventCancelled"'),
        l.push('"name":"' + e.dates[`${i}`].name + '"'),
        e.dates[`${i}`].descriptionHtmlFree &&
          l.push('"description":"' + e.dates[`${i}`].descriptionHtmlFree + '"');
      let c = C(e.dates[`${i}`], 'delimiters', 'general', !0);
      if (
        (l.push('"startDate":"' + c.start + '"'),
        c.duration && l.push('"duration":"' + c.duration + '"'),
        l.push(
          e.dates[`${i}`].onlineEvent
            ? `"eventAttendanceMode":"https://schema.org/OnlineEventAttendanceMode",\r
"location": {\r
"@type":"VirtualLocation",\r
"url":"` +
                e.dates[`${i}`].location +
                `"\r
}`
            : '"location":"' + e.dates[`${i}`].location + '"'
        ),
        e.recurrence && e.recurrence !== ''
          ? l.push(...ra(e, c))
          : l.push('"endDate":"' + c.end + '"'),
        e.dates[`${i}`].organizer && e.dates[`${i}`].organizer !== '')
      ) {
        let g = e.dates[`${i}`].organizer.split('|');
        l.push(
          `"organizer":{\r
"@type":"Person",\r
"name":"` +
            g[0] +
            `",\r
"email":"` +
            g[1] +
            `"\r
}`
        );
      }
      let s = [];
      if (e.images) {
        if (Array.isArray(e.images))
          for (let g = 0; g < e.images.length; g++)
            X(e.images[`${g}`], e.debug) &&
              e.images[`${g}`].startsWith('http') &&
              s.push('"' + e.images[`${g}`] + '"');
      } else
        s.push('"https://add-to-calendar-button.com/demo_assets/img/1x1.png"'),
          s.push('"https://add-to-calendar-button.com/demo_assets/img/4x3.png"'),
          s.push('"https://add-to-calendar-button.com/demo_assets/img/16x9.png"');
      s.length > 0 &&
        l.push(
          `"image":[\r
` +
            s.join(`,\r
`) +
            ']'
        ),
        r.push(
          `{\r
` +
            l.join(`,\r
`) +
            `\r
}`
        );
    }
    e.dates.length > 1
      ? (a.textContent =
          o.join(`,\r
`) +
          `"subEvents":[\r
` +
          r.join(`,\r
`) +
          `\r
]\r
}`)
      : (a.textContent = r[0]),
      document.body.insertBefore(a, document.body.firstChild);
  }
  function ra(e, t) {
    let a = [];
    if (
      (a.push('"eventSchedule": { "@type": "Schedule"'),
      a.push('"scheduleTimezone":"' + e.dates[0].timeZone + '"'),
      e.recurrence_interval &&
        e.recurrence_interval !== '' &&
        e.recurrence_frequency &&
        e.recurrence_frequency !== '')
    ) {
      let n = 'P' + e.recurrence_interval + e.recurrence_frequency.substring(0, 1);
      a.push('"repeatFrequency":"' + n + '"');
    }
    if (e.recurrence_byDay && e.recurrence_byDay !== '') {
      let n = (function () {
        if (/\d/.test(e.recurrence_byDay)) return '"' + e.recurrence_byDay + '"';
        {
          let o = e.recurrence_byDay.split(','),
            r = {
              MO: 'https://schema.org/Monday',
              TU: 'https://schema.org/Tuesday',
              WE: 'https://schema.org/Wednesday',
              TH: 'https://schema.org/Thursday',
              FR: 'https://schema.org/Friday',
              SA: 'https://schema.org/Saturday',
              SU: 'https://schema.org/Sunday',
            },
            i = [];
          for (let l = 0; l < o.length; l++) i.push('"' + r[o[`${l}`]] + '"');
          return '[' + i.join(',') + ']';
        }
      })();
      a.push('"byDay":' + n);
    }
    if (e.recurrence_byMonth && e.recurrence_byMonth !== '') {
      let n = e.recurrence_byMonth.includes(',')
        ? '[' + e.recurrence_byMonth + ']'
        : e.recurrence_byMonth;
      a.push('"byMonth":"' + n + '"');
    }
    if (e.recurrence_byMonthDay && e.recurrence_byMonthDay !== '') {
      let n = e.recurrence_byMonthDay.includes(',')
        ? '[' + e.recurrence_byMonthDay + ']'
        : e.recurrence_byMonthDay;
      a.push('"byMonthDay":"' + n + '"');
    }
    return (
      e.recurrence_count &&
        e.recurrence_count !== '' &&
        a.push('"repeatCount":"' + e.recurrence_count + '"'),
      e.recurrence_until &&
        e.recurrence_until !== '' &&
        a.push('"endDate":"' + e.recurrence_until + '"'),
      e.startTime &&
        e.startTime !== '' &&
        e.endTime &&
        e.endTime !== '' &&
        (a.push('"startTime":"' + e.startTime + ':00"'),
        a.push('"endTime":"' + e.endTime + ':00"'),
        a.push('"duration":"' + t.duration + '"')),
      a.push('"startDate":"' + e.startDate + '" }'),
      a
    );
  }
  function N(e, t, a, n = 'all', o = !1, r = !1, i = !1) {
    let l = t;
    if (
      (t == 'apple' && (l = 'ical'),
      n != 'all' ? (n = parseInt(n) - 1) : a.dates.length == 1 && (n = 0),
      a.subscribe)
    ) {
      ca(e, l, a, o);
      return;
    }
    if (n != 'all') {
      if (a.dates[`${n}`].status == 'CANCELLED' && l != 'ical')
        I(
          e,
          a,
          'warning',
          v('date.status.cancelled', a),
          v('date.status.cancelled.cta', a),
          [],
          [],
          o
        );
      else {
        if (!i && R() && l === 'google') {
          I(
            e,
            a,
            'warning',
            '',
            v('modal.crios.google.text', a),
            [
              { label: v('continue', a), primary: !0, type: '2timeslink' },
              { label: v('cancel', a) },
            ],
            [],
            o,
            { type: t, id: n + 1 }
          );
          return;
        }
        switch (l) {
          case 'ical':
            ot(e, a, n, o);
            break;
          case 'google':
            da(a, a.dates[`${n}`]);
            break;
          case 'msteams':
            ua(a, a.dates[`${n}`]);
            break;
          case 'ms365':
            Pe(a, a.dates[`${n}`]);
            break;
          case 'outlookcom':
            Pe(a, a.dates[`${n}`], 'outlook');
            break;
          case 'yahoo':
            ba(a, a.dates[`${n}`]);
            break;
        }
      }
      let c = document.getElementById(a.identifier + '-modal-host');
      if (c) {
        let g = c.shadowRoot.getElementById(a.identifier + '-' + t + '-' + (n + 1));
        g && g.classList.add('atcb-saved');
      }
      z[`${a.identifier}`][`${t}`][`${n}`]++,
        z[`${a.identifier}`][`${t}`].filter(function (g) {
          return g < 1;
        }).length == 0 && se(e, a, r);
      return;
    }
    la(e, t, l, a, o, r);
  }
  function la(e, t, a, n, o, r) {
    if (
      a == 'ical' &&
      n.dates.every(function (i) {
        return !(i.status == 'CANCELLED' || (i.organizer != null && i.organizer != ''));
      })
    ) {
      ot(e, n, 'all', o);
      for (let i = 0; i < z[`${n.identifier}`][`${t}`].length; i++)
        z[`${n.identifier}`][`${t}`][`${i}`]++;
      se(e, n, r);
      return;
    }
    if (!r) {
      let i = [t];
      for (let l = 0; l < n.dates.length; l++) i.push(l + 1);
      I(e, n, t, v('modal.multidate.h', n), v('modal.multidate.text', n), [], i, o);
    }
  }
  function ca(e, t, a, n) {
    let o = a.icsFile.replace('https://', 'webcal://');
    switch (t) {
      case 'ical':
        if (Se() || a.fakeAndroid) {
          qe(a, a.icsFile);
          break;
        }
        qe(a, o);
        break;
      case 'google':
        sa(a, o);
        break;
      case 'ms365':
        je(a, o, a.name);
        break;
      case 'outlookcom':
        je(a, o, a.name, 'outlook');
        break;
      case 'yahoo':
        if (a.proxy) {
          $(a, 'yahoo', '', !0);
          return;
        }
        Te(a.icsFile),
          I(
            e,
            a,
            'yahoo',
            v('modal.subscribe.yahoo.h', a),
            v('modal.clipboard.text', a) + '<br>' + v('modal.subscribe.yahoo.text', a),
            [
              {
                label: v('modal.subscribe.yahoo.button', a),
                primary: !0,
                type: 'yahoo2nd',
                href: 'https://www.yahoo.com/calendar',
              },
              { label: v('cancel', a) },
            ],
            [],
            n
          );
        return;
      case 'yahoo2nd':
        Te(a.icsFile),
          I(
            e,
            a,
            'yahoo',
            v('modal.subscribe.yahoo.h', a),
            v('modal.clipboard.text', a) + '<br>' + v('modal.subscribe.yahoo.text', a),
            [
              {
                label: v('modal.subscribe.yahoo.button', a),
                type: 'none',
                href: 'https://www.yahoo.com/calendar',
              },
              { label: v('cancel', a) },
            ],
            [],
            n
          );
        return;
    }
    se(e, a);
  }
  function se(e, t, a = !1) {
    let n = e.getElementById(t.identifier);
    n && n.classList.add('atcb-saved'),
      ga(e, t),
      a && e.querySelectorAll('.atcb-modal[data-modal-nr]').length < 2 && L(e, 'close');
  }
  function qe(e, t) {
    $(e, 'ical', t, !0);
  }
  function sa(e, t) {
    let a = 'https://calendar.google.com/calendar/r?cid=',
      n = (function () {
        return /^(https?:\/\/|webcal:\/\/|\/\/)calendar\.google\.com\//.test(t)
          ? t.replace(/^(.)*\?cid=/, '')
          : encodeURIComponent(t);
      })();
    $(e, 'google', a + n, !0);
  }
  function je(e, t, a, n = '365') {
    let o = [],
      r = (function () {
        return n == 'outlook'
          ? 'https://outlook.live.com/calendar/0/addfromweb/?'
          : 'https://outlook.office.com/calendar/0/addfromweb/?';
      })();
    o.push('url=' + encodeURIComponent(t)),
      o.push('name=' + encodeURIComponent(a)),
      $(e, n, r + o.join('&'), !0);
  }
  function da(e, t) {
    let a = [];
    a.push('https://calendar.google.com/calendar/render?action=TEMPLATE');
    let n = C(t, 'clean', 'google');
    a.push('dates=' + encodeURIComponent(n.start) + '%2F' + encodeURIComponent(n.end)),
      t.timeZone != null &&
        t.timeZone != '' &&
        !/(GMT[+|-]\d{1,2}|Etc\/U|Etc\/Zulu|CET|CST6CDT|EET|EST|EST5EDT|MET|MST|MST7MDT|PST8PDT|WET)/i.test(
          t.timeZone
        ) &&
        !n.allday &&
        a.push('ctz=' + t.timeZone),
      t.name != null && t.name != '' && a.push('text=' + encodeURIComponent(t.name));
    let o = [];
    if (
      (t.description != null && t.description != '' && o.push(t.description),
      t.location != null &&
        t.location != '' &&
        (a.push('location=' + encodeURIComponent(t.location)),
        (R() || e.fakeIOS) &&
          (o.length > 0 && o.push('<br><br>'), o.push('&#128205;: ' + t.location))),
      o.length > 0 && a.push('details=' + encodeURIComponent(o.join(''))),
      t.recurrence != null &&
        t.recurrence != '' &&
        a.push('recur=' + encodeURIComponent(t.recurrence)),
      t.availability != null && t.availability != '')
    ) {
      let r = (function () {
        return t.availability == 'free' ? 'crm=AVAILABLE&trp=false' : 'crm=BUSY&trp=true';
      })();
      a.push(r);
    }
    $(e, 'google', a.join('&'));
  }
  function ba(e, t) {
    let a = [];
    a.push('https://calendar.yahoo.com/?v=60');
    let n = C(t, 'clean');
    a.push('st=' + encodeURIComponent(n.start) + '&et=' + encodeURIComponent(n.end)),
      n.allday && a.push('dur=allday'),
      t.name != null && t.name != '' && a.push('title=' + encodeURIComponent(t.name)),
      t.location != null && t.location != '' && a.push('in_loc=' + encodeURIComponent(t.location)),
      t.descriptionHtmlFree != null &&
        t.descriptionHtmlFree != '' &&
        a.push('desc=' + encodeURIComponent(t.descriptionHtmlFree)),
      $(e, 'yahoo', a.join('&'));
  }
  function Pe(e, t, a = '365') {
    let n = [],
      o = (function () {
        return G() || e.fakeMobile
          ? '/calendar/0/deeplink/compose?path=%2Fcalendar%2Faction%2Fcompose&rru=addevent'
          : '/calendar/action/compose?rru=addevent';
      })(),
      r = (function () {
        return a == 'outlook' ? 'https://outlook.live.com' + o : 'https://outlook.office.com' + o;
      })();
    n.push(r);
    let i = C(t, 'delimiters', 'microsoft');
    n.push('startdt=' + i.start),
      n.push('enddt=' + i.end),
      i.allday && n.push('allday=true'),
      t.name != null && t.name != '' && n.push('subject=' + encodeURIComponent(t.name)),
      t.location != null &&
        t.location != '' &&
        n.push('location=' + encodeURIComponent(t.location)),
      t.description != null &&
        t.description != '' &&
        n.push('body=' + encodeURIComponent(t.description)),
      $(e, a, n.join('&'));
  }
  function ua(e, t) {
    let a = [],
      n = 'https://teams.microsoft.com/l/meeting/new?',
      o = C(t, 'delimiters', 'msteams', !0);
    !o.allday || G() || e.fakeMobile
      ? (a.push('startTime=' + encodeURIComponent(o.start)),
        a.push('endTime=' + encodeURIComponent(o.end)))
      : (a.push('startTime=' + o.start), a.push('endTime=' + o.end)),
      t.name != null && t.name != '' && a.push('subject=' + encodeURIComponent(t.name));
    let r = '';
    t.location != null &&
      t.location != '' &&
      ((r = encodeURIComponent(t.location)), a.push('location=' + r), (r += ' // ')),
      t.descriptionHtmlFree != null &&
        t.descriptionHtmlFree != '' &&
        a.push('content=' + r + encodeURIComponent(t.descriptionHtmlFree)),
      $(e, 'msteams', n + a.join('&'));
  }
  function $(e, t, a, n = !1, o = '') {
    if ((o == '' && (o = Ye), X(a))) {
      if (e.proxy && e.proKey && e.proKey != '') {
        let i = n ? 's' : 'o',
          l = a ? '?url=' + encodeURIComponent(a) : '';
        if (((a = 'https://caldn.net/' + e.proKey + '/' + i + '/' + t + l), !X(a))) return;
      }
      let r = window.open(a, o);
      r && r.focus();
    }
  }
  function ot(e, t, a = 'all', n = !1) {
    a != 'all' && (a = parseInt(a));
    let o = ma(t, a),
      r = (function () {
        return a != 'all' && t.dates[`${a}`].icsFile != null && t.dates[`${a}`].icsFile != ''
          ? t.dates[`${a}`].icsFile
          : t.icsFile != null && t.icsFile != ''
          ? t.icsFile
          : '';
      })();
    if (r && r !== '' && t.proxy) {
      $(t, 'ical', r);
      return;
    }
    if (r != '' && (!R() || !ve() || t.bypassWebViewCheck == !0)) {
      if (R() && !xe()) {
        ge(r.replace(/^https?:\/\//, 'webcal://'), o);
        return;
      }
      ge(r, o);
      return;
    }
    let i = new Date(),
      l = ['BEGIN:VCALENDAR', 'VERSION:2.0'];
    l.push('PRODID:-// https://add-to-calendar-pro.com // button v' + Ve + ' //EN'),
      l.push('CALSCALE:GREGORIAN'),
      a == 'all'
        ? l.push('METHOD:PUBLISH')
        : t.dates[`${a}`].status != null && t.dates[`${a}`].status == 'CANCELLED'
        ? l.push('METHOD:CANCEL')
        : t.dates[`${a}`].organizer != null && t.dates[`${a}`].organizer != ''
        ? l.push('METHOD:REQUEST')
        : l.push('METHOD:PUBLISH');
    let c = [],
      s = (function () {
        return a != 'all' ? a : 0;
      })(),
      g = (function () {
        return a != 'all' ? a : t.dates.length - 1;
      })();
    for (let u = s; u <= g; u++) {
      let y = C(t.dates[`${u}`], 'clean', 'ical'),
        m = (function () {
          if (y.allday) return ';VALUE=DATE';
          if (t.dates[`${u}`].timeZone != null && t.dates[`${u}`].timeZone != '') {
            let h = Ue(t.dates[`${u}`].timeZone);
            return (
              c.includes(t.dates[`${u}`].timeZone) || l.push(h[0]),
              c.push(t.dates[`${u}`].timeZone),
              ';' + h[1]
            );
          }
        })();
      if (
        (l.push('BEGIN:VEVENT'),
        l.push('UID:' + t.dates[`${u}`].uid),
        l.push('DTSTAMP:' + _(i, 'clean', !0)),
        l.push('DTSTART' + m + ':' + y.start),
        l.push('DTEND' + m + ':' + y.end),
        l.push('SUMMARY:' + Z(t.dates[`${u}`].name, !0)),
        t.dates[`${u}`].descriptionHtmlFreeICal != null &&
          t.dates[`${u}`].descriptionHtmlFreeICal != '' &&
          l.push('DESCRIPTION:' + Z(t.dates[`${u}`].descriptionHtmlFreeICal, !0)),
        t.dates[`${u}`].description != null &&
          t.dates[`${u}`].description != '' &&
          l.push(
            `X-ALT-DESC;FMTTYPE=text/html:\r
 <!DOCTYPE HTML PUBLIC ""-//W3C//DTD HTML 3.2//EN"">\r
 <HTML><BODY>\r
 ` +
              Z(t.dates[`${u}`].description, !0) +
              `\r
 </BODY></HTML>`
          ),
        t.dates[`${u}`].location != null &&
          t.dates[`${u}`].location != '' &&
          l.push('LOCATION:' + Z(t.dates[`${u}`].location, !0)),
        t.dates[`${u}`].organizer != null && t.dates[`${u}`].organizer != '')
      ) {
        let h = t.dates[`${u}`].organizer.split('|');
        l.push('ORGANIZER;CN="' + Z(h[0], !1, !0) + '":MAILTO:' + h[1]);
      }
      if (t.dates[`${u}`].attendee != null && t.dates[`${u}`].attendee != '') {
        let h = t.dates[`${u}`].attendee.split('|');
        l.push('ATTENDEE;ROLE=REQ-PARTICIPANT;CN="' + Z(h[0], !1, !0) + '":MAILTO:' + h[1]);
      }
      if (
        (t.recurrence != null && t.recurrence != '' && l.push(t.recurrence),
        t.dates[`${u}`].availability != null && t.dates[`${u}`].availability != '')
      ) {
        let h = (function () {
          return t.dates[`${u}`].availability == 'free' ? 'TRANSPARENT' : 'OPAQUE';
        })();
        l.push('TRANSP:' + h);
      }
      l.push('SEQUENCE:' + t.dates[`${u}`].sequence),
        l.push('STATUS:' + t.dates[`${u}`].status),
        l.push('CREATED:' + t.created),
        l.push('LAST-MODIFIED:' + t.updated),
        l.push('END:VEVENT');
    }
    l.push('END:VCALENDAR');
    let b = (function () {
      return r != ''
        ? r
        : 'data:text/calendar;charset=utf-8,' +
            encodeURIComponent(
              l.join(`\r
`)
            );
    })();
    if ((R() && !xe()) || (ve() && (R() || (Se() && xt())))) {
      pa(e, b, t, n);
      return;
    }
    ge(b, o);
  }
  function ma(e, t) {
    let a = (function () {
      return t != 'all' && t != 0 ? '-' + parseInt(t) + 1 : '';
    })();
    if (e.iCalFileName != null && e.iCalFileName != '') return e.iCalFileName + a;
    if (e.icsFile != null && e.icsFile != '') {
      let n = e.icsFile.split('/').pop().split('.')[0];
      if (n != '') return n + a;
    }
    return 'event-to-save-in-my-calendar' + a;
  }
  function pa(e, t, a, n) {
    if ((Te(t), R() && !xe())) {
      I(
        e,
        a,
        'warning',
        v('modal.opensafari.ical.h', a),
        v('modal.opensafari.ical.text', a) +
          '<br>' +
          v('modal.clipboard.text', a) +
          '<br>' +
          v('modal.opensafari.ical.steps', a),
        [],
        [],
        n
      );
      return;
    }
    I(
      e,
      a,
      'warning',
      v('modal.webview.ical.h', a),
      v('modal.webview.ical.text', a) +
        '<br>' +
        v('modal.clipboard.text', a) +
        '<br>' +
        v('modal.webview.ical.steps', a),
      [],
      [],
      n
    );
  }
  function ga(e, t) {
    S('success', t.identifier, t.identifier);
  }
  function ge(e, t) {
    try {
      let a = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
      (a.rel = 'noopener'),
        (a.href = e),
        G() ? (a.target = '_self') : (a.target = '_blank'),
        (a.download = t + '.ics');
      let n = new MouseEvent('click', { view: window, button: 0, bubbles: !0, cancelable: !1 });
      a.dispatchEvent(n), (window.URL || window.webkitURL).revokeObjectURL(a.href);
    } catch (a) {
      console.error(a);
    }
  }
  function C(e, t = 'delimiters', a = 'general', n = !1) {
    if (e.startTime != null && e.startTime != '' && e.endTime != null && e.endTime != '') {
      let o = new Date(e.startDate + 'T' + e.startTime + ':00.000+00:00'),
        r = new Date(e.endDate + 'T' + e.endTime + ':00.000+00:00'),
        i = r - o,
        l = Math.floor(i / 1e3 / 60 / 60),
        c = Math.floor(((i - l * 60 * 60 * 1e3) / 1e3 / 60) % 60),
        s = (function () {
          return l < 10 ? '0' + l + ':' + ('0' + c).slice(-2) : l + ':' + ('0' + c).slice(-2);
        })();
      if (
        a == 'ical' ||
        (a == 'google' &&
          !/(GMT[+|-]\d{1,2}|Etc\/U|Etc\/Zulu|CET|CST6CDT|EET|EST|EST5EDT|MET|MST|MST7MDT|PST8PDT|WET)/i.test(
            e.timeZone
          ))
      )
        return {
          start: _(o, 'clean', !0, !0),
          end: _(r, 'clean', !0, !0),
          duration: s,
          allday: !1,
        };
      let g = ne(e.timeZone, e.startDate, e.startTime),
        b = ne(e.timeZone, e.endDate, e.endTime);
      if (n) {
        let m = g.slice(0, 3) + ':' + g.slice(3),
          h = b.slice(0, 3) + ':' + b.slice(3);
        return {
          start: o.toISOString().replace('.000Z', m),
          end: r.toISOString().replace('.000Z', h),
          duration: s,
          allday: !1,
        };
      }
      let u =
          parseInt(g[0] + 1) *
          -1 *
          ((parseInt(g.substring(1, 3)) * 60 + parseInt(g.substring(3, 5))) * 60 * 1e3),
        y =
          parseInt(b[0] + 1) *
          -1 *
          ((parseInt(b.substring(1, 3)) * 60 + parseInt(b.substring(3, 5))) * 60 * 1e3);
      return (
        o.setTime(o.getTime() + u),
        r.setTime(r.getTime() + y),
        { start: _(o, t), end: _(r, t), duration: s, allday: !1 }
      );
    }
    let o = e.startDate.split('-'),
      r = e.endDate.split('-'),
      i = new Date(Date.UTC(o[0], o[1] - 1, o[2], 12, 0, 0)),
      l = new Date(Date.UTC(r[0], r[1] - 1, r[2], 12, 0, 0));
    if (
      ((a === 'google' || (a === 'microsoft' && !G()) || a === 'msteams' || a === 'ical') &&
        l.setDate(l.getDate() + 1),
      a === 'msteams')
    ) {
      if (G()) {
        let c = i.getTimezoneOffset(),
          s = (function () {
            return c < 0
              ? '+' + ('0' + Math.abs(c / 60)).slice(-2) + ':' + ('0' + Math.abs(c % 60)).slice(-2)
              : '-' + ('0' + Math.abs(c / 60)).slice(-2) + ':' + ('0' + Math.abs(c % 60)).slice(-2);
          })();
        return {
          start: _(i, t, !1, !0) + 'T00:00:00' + s,
          end: _(l, t, !1, !0) + 'T00:00:00' + s,
          allday: !0,
        };
      }
      return { start: _(i, t, !1, !0) + '+00:00', end: _(l, t, !1, !0) + '+00:00', allday: !0 };
    }
    return { start: _(i, t, !1), end: _(l, t, !1), allday: !0 };
  }
  function _(e, t = 'delimiters', a = !0, n = !1) {
    let o = (function () {
      return a
        ? t == 'clean'
          ? /(-|:|(\.\d{3}))/g
          : /(\.\d{3})/g
        : t == 'clean'
        ? /(-|T(\d{2}:\d{2}:\d{2}\.\d{3})Z)/g
        : /T(\d{2}:\d{2}:\d{2}\.\d{3})Z/g;
    })();
    return n ? e.toISOString().replace(o, '').replace('Z', '') : e.toISOString().replace(o, '');
  }
  function P(e, t = !0) {
    let n = (t ? JSON.stringify(e) : e).replace(/(<(?!br)([^>]+)>)/gi, '');
    return t ? JSON.parse(n) : n;
  }
  function X(e, t = !0) {
    return e.match(
      /((\.\.\/)|(\.\.\\)|(%2e%2e%2f)|(%252e%252e%252f)|(%2e%2e\/)|(%252e%252e\/)|(\.\.%2f)|(\.\.%252f)|(%2e%2e%5c)|(%252e%252e%255c)|(%2e%2e\\)|(%252e%252e\\)|(\.\.%5c)|(\.\.%255c)|(\.\.%c0%af)|(\.\.%25c0%25af)|(\.\.%c1%9c)|(\.\.%25c1%259c))/gi
    )
      ? (t &&
          console.error(
            'Seems like the generated URL includes at least one security issue and got blocked. Please check the calendar button parameters!'
          ),
        !1)
      : !0;
  }
  function it(e) {
    return !!/^.{0,70}@.{1,30}\.[a-zA-Z]{2,9}$/.test(e);
  }
  function O(e, t = !1, a = !1) {
    return (
      t
        ? ((e = e.replace(
            /\[(|\/)(url|hr|p|b|strong|u|i|em|li|ul|ol|h\d)\]|((\|.*)\[\/url\])/gi,
            ''
          )),
          (e = e.replace(
            /\{(|\/)(url|hr|p|b|strong|u|i|em|li|ul|ol|h\d)\}|((\|.*)\{\/url\})/gi,
            ''
          )),
          a
            ? (e = e.replace(/(\[br\]|\{br\})/gi, '\\n'))
            : (e = e.replace(/(\[br\]|\{br\})/gi, ' ')),
          (e = e.replace(/&[#a-zA-Z0-9]{1,9};/gi, '')))
        : ((e = e.replace(/\[(\/|)(br|hr|p|b|strong|u|i|em|li|ul|ol|h\d)\]/gi, '<$1$2>')),
          (e = e.replace(/\{(\/|)(br|hr|p|b|strong|u|i|em|li|ul|ol|h\d)\}/gi, '<$1$2>')),
          (e = e.replace(/\[url\]([\w&$+.,:;=~!*'?@^%#|\s\-()/]*)\[\/url\]/gi, function (n, o) {
            return Ge(o);
          })),
          (e = e.replace(/\{url\}([\w&$+.,:;=~!*'?@^%#|\s\-()/]*)\{\/url\}/gi, function (n, o) {
            return Ge(o);
          }))),
      e
    );
  }
  function Ge(e) {
    let t = e.split('|'),
      a = (function () {
        return t.length > 1 && t[1] != '' ? t[1] : t[0];
      })();
    return '<a href="' + t[0] + '" target="' + Ye + '" rel="noopener">' + a + '</a>';
  }
  function Z(e, t = !0, a = !1) {
    return (
      a
        ? (e = e.replace(/"/g, ''))
        : (e = e.replace(/\\/g, '\\\\').replace(/(,|;)/g, '\\$1').replace(/\\\\n/g, '\\n')),
      t &&
        (e = e.replace(
          /.{60}/g,
          `$&\r
 `
        )),
      e
    );
  }
  function fe(e, t, a, n = !1, o = !1) {
    let r = !1,
      i = t;
    t.querySelector('.atcb-dropdown-anchor') !== null &&
      ((t = t.querySelector('.atcb-dropdown-anchor')), (r = !0)),
      (a.style.position = 'relative'),
      (a.style.display = 'inline-block');
    let l = t.getBoundingClientRect(),
      c = i.getBoundingClientRect(),
      s = i.parentNode.getBoundingClientRect(),
      g = document.documentElement.clientHeight;
    if (r === !0 && !a.classList.contains('atcb-dropoverlay')) {
      let u = a.getBoundingClientRect();
      (a.style.width = u.width + 'px'),
        a.classList.contains('atcb-dropup') ||
        (!n && l.top + u.height > g - 20 && 2 * c.top + c.height - l.top - u.height > 20) ||
        o
          ? (i.classList.add('atcb-dropup'),
            a.classList.add('atcb-dropup'),
            (a.style.bottom = s.bottom - c.bottom + (l.top - c.top) + 'px'))
          : ((a.style.top = c.top - s.top + (l.top - c.top) + 'px'),
            i.classList.contains('atcb-dropup') && i.classList.remove('atcb-dropup')),
        (l = t.getBoundingClientRect()),
        (a.style.minWidth = l.width + 'px'),
        ((a.classList.contains('atcb-dropdown') && !a.classList.contains('atcb-style-round')) ||
          a.classList.contains('atcb-style-text') ||
          a.classList.contains('atcb-style-neumorphism')) &&
          (a.style.maxWidth = l.width + 'px'),
        (u = a.getBoundingClientRect()),
        (a.style.left = Math.round(l.left - s.left - (u.width - l.width) / 2) + 'px');
    } else {
      a.style.minWidth = c.width + 20 + 'px';
      let u = a.getBoundingClientRect();
      a.style.width = u.width + 'px';
      let y = Math.round((c.width - u.width) / 4);
      a.style.margin = -Math.round((u.height + c.height) / 2) + 'px ' + y + 'px 0 ' + y + 'px';
    }
    (a.style.position = 'absolute'), (a.style.display = 'block');
    let b = e.querySelector('#add-to-calendar-button-reference');
    b &&
      i.classList.contains('atcb-dropup') &&
      (i.parentNode.parentNode.after(b),
      (b.style.padding = '5px 15px'),
      (b.style.position = 'absolute'),
      (b.style.left = c.left + 'px'));
  }
  function rt(e, t) {
    let a = e.querySelector('.atcb-initialized').getBoundingClientRect(),
      n = t.querySelector('.atcb-initialized');
    (n.style.width = a.width + 'px'),
      (n.style.height = a.height + 'px'),
      (n.style.top = a.top + 'px'),
      (n.style.left = a.left + 'px');
  }
  function le() {
    let e = z.active;
    if (e !== null && e !== '') {
      let t = document.querySelector('add-to-calendar-button[atcb-button-id=' + e + ']').shadowRoot,
        a = document.querySelector('div[atcb-button-id=' + e + ']').shadowRoot;
      rt(t, a);
    }
  }
  function De(e, t = null) {
    let a = (function () {
      if (t != null) return t;
      {
        let o = e.querySelectorAll('.atcb-modal');
        return o.length === 0 ? null : o[o.length - 1];
      }
    })();
    if (a == null) return;
    a.getBoundingClientRect().height + 150 > window.innerHeight
      ? (document.body.classList.add('atcb-modal-no-scroll'),
        document.documentElement.classList.add('atcb-modal-no-scroll'))
      : (document.body.classList.remove('atcb-modal-no-scroll'),
        document.documentElement.classList.remove('atcb-modal-no-scroll'));
  }
  function ee(e) {
    (e.style.width = window.innerWidth + 'px'), (e.style.height = window.innerHeight + 100 + 'px');
  }
  function ce(e, t) {
    e.style.setProperty('--base-font-size-l', t.l + 'px'),
      e.style.setProperty('--base-font-size-m', t.m + 'px'),
      e.style.setProperty('--base-font-size-s', t.s + 'px');
  }
  function lt() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (e) =>
      (e ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (e / 4)))).toString(16)
    );
  }
  function Te(e) {
    let t = document.createElement('input');
    document.body.append(t);
    let a = t.contentEditable,
      n = t.readOnly;
    if (((t.contentEditable = !0), (t.readOnly = !1), (t.value = e), R())) {
      var o = document.createRange();
      o.selectNodeContents(t);
      var r = window.getSelection();
      r.removeAllRanges(), r.addRange(o), t.setSelectionRange(0, 999999);
    } else t.select();
    (t.contentEditable = a), (t.readOnly = n), document.execCommand('copy'), t.remove();
  }
  function q(e, t = 200) {
    let a;
    return (...n) => {
      clearTimeout(a),
        (a = setTimeout(() => {
          e.apply(this, n);
        }, t));
    };
  }
  function U(e, t = 300) {
    let a;
    return (...n) => {
      a || e.apply(this, n),
        clearTimeout(a),
        (a = setTimeout(() => {
          a = void 0;
        }, t));
    };
  }
  function S(e, t, a) {
    let n = (function () {
      let o = document.getElementById(a);
      return o || document.querySelector('[atcb-button-id="' + a + '"]');
    })();
    n && n.setAttribute('atcb-last-event', e + ':' + t), B() && fa(e, t);
  }
  function fa(e, t) {
    let a = '';
    switch (e) {
      case 'initialization':
        a = 'Initialized';
        break;
      case 'openList':
        a = 'Opened';
        break;
      case 'closeList':
        a = 'Closed';
        break;
      case 'openCalendarLink':
        a = 'Opened';
        break;
      case 'openSingletonLink':
        a = 'Opened';
        break;
      case 'openSubEventLink':
        a = 'Opened';
        break;
      case 'success':
        a = 'Saved';
        break;
    }
    (window.dataLayer = window.dataLayer || []).push({
      eventCategory: 'Add-to-Calendar-Button',
      eventAction: a,
      eventLabel: t,
      event: e,
    });
  }
  var ha = ['ar', 'fa'],
    ze = {
      en: {
        'label.addtocalendar': 'Add to Calendar',
        'label.icalfile': 'iCal File',
        close: 'Close',
        'modal.button.default': 'Click me',
        'modal.webview.ical.h': 'Open your browser',
        'modal.webview.ical.text':
          'Unfortunately, in-app browsers have problems with the way we generate the calendar file.',
        'modal.clipboard.text': 'We automatically copied a magical URL into your clipboard.',
        'modal.webview.ical.steps':
          '<ol><li><strong>Open another browser</strong> on your phone, ...</li><li><strong>Paste</strong> the clipboard content and go.</li></ol>',
        'modal.opensafari.ical.h': 'Open Safari',
        'modal.opensafari.ical.text':
          'Unfortunately, iOS has some problems generating and opening the calendar file outside of Safari.',
        'modal.opensafari.ical.steps':
          '<ol><li><strong>Open Safari</strong>, ...</li><li><strong>Paste</strong> the clipboard content and go.</li></ol>',
        'modal.multidate.h': 'This is an event series',
        'modal.multidate.text': 'Add the individual events one by one:',
        'date.status.cancelled': 'This date got cancelled.',
        'date.status.cancelled.cta': 'Please update your calendar!',
        'modal.subscribe.yahoo.h': 'Add Calendar to Yahoo',
        'modal.subscribe.yahoo.text':
          '<ol><li>Open now the Yahoo Calendar.</li><li>Click the "Actions" tab.</li><li>Hit "Follow Other Calendars".</li><li>Set a name and paste the clipboard content into the url field.</li></ol>',
        'modal.subscribe.yahoo.button': 'Open Yahoo Calendar',
        'modal.crios.google.text':
          'If you are using the Google Calendar app and it is not already open in the background, unfortunately, you might need to start this process twice.',
        continue: 'Continue',
        cancel: 'Cancel',
        expired: 'Expired',
        recurring: 'Recurring',
      },
      de: {
        'label.addtocalendar': 'Im Kalender speichern',
        'label.icalfile': 'iCal-Datei',
        close: 'Schlie\xDFen',
        'modal.button.default': 'Klick mich',
        'modal.webview.ical.h': '\xD6ffne deinen Browser',
        'modal.webview.ical.text':
          'Leider haben In-App-Browser Probleme mit der Art, wie wir Kalender-Dateien erzeugen.',
        'modal.clipboard.text':
          'Wir haben automatisch eine magische URL in deine Zwischenablage kopiert.',
        'modal.webview.ical.steps':
          '<ol><li><strong>\xD6ffne einen anderen Browser</strong> auf deinem Smartphone, ...</li><li>Nutze die <strong>Einf\xFCgen</strong>-Funktion, um fortzufahren.</li></ol>',
        'modal.opensafari.ical.h': '\xD6ffne Safari',
        'modal.opensafari.ical.text':
          'Leider hat iOS einige Probleme beim Generieren und \xD6ffnen der Kalenderdatei au\xDFerhalb von Safari.',
        'modal.opensafari.ical.steps':
          '<ol><li><strong>\xD6ffne Safari</strong>, ...</li><li>Nutze die <strong>Einf\xFCgen</strong>-Funktion, um fortzufahren.</li></ol>',
        'modal.multidate.h': 'Dies ist eine Termin-Reihe',
        'modal.multidate.text':
          'F\xFCge die einzelnen Termine der Reihe nach deinem Kalender hinzu:',
        'date.status.cancelled': 'Dieser Termin wurde abgesagt.',
        'date.status.cancelled.cta': 'Bitte aktualisiere deinen Kalender!',
        'modal.subscribe.yahoo.h': 'Kalender zu Yahoo hinzuf\xFCgen',
        'modal.subscribe.yahoo.text':
          '<ol><li>\xD6ffne den Yahoo-Kalender.</li><li>Klicke auf den "Aktionen" Tab.</li><li>W\xE4hle "Weiteren Kalendern folgen".</li><li>W\xE4hle einen Namen und f\xFCge die URL aus deiner Zwischenablage in das URL-Feld ein.</li></ol>',
        'modal.subscribe.yahoo.button': 'Yahoo-Kalender \xF6ffnen',
        'modal.crios.google.text':
          'Wenn du die Google Calendar App verwendest und diese nicht bereits im Hintergrund ge\xF6ffnet ist, musst du diesen Vorgang leider m\xF6glicherweise zweimal starten.',
        continue: 'Weiter',
        cancel: 'Abbrechen',
        expired: 'Abgelaufen',
        recurring: 'Wiederkehrend',
      },
      es: {
        'label.addtocalendar': 'A\xF1adir al Calendario',
        'label.icalfile': 'iCal Ficha',
        close: 'Ci\xE9rralo',
        'modal.button.default': 'Haz clic m\xED',
        'modal.webview.ical.h': 'Abra su browser',
        'modal.webview.ical.text':
          'Lamentablemente, los browsers in-app tienen problemas con la forma en que generamos el archivo del calendario.',
        'modal.clipboard.text':
          'Hemos copiado autom\xE1ticamente una URL m\xE1gica en su portapapeles.',
        'modal.webview.ical.steps':
          '<ol><li><strong>Abre otro browser</strong> en tu smartphone, ...</li><li>Utilice la funci\xF3n de <strong>pegar</strong> para continuar.</li></ol>',
        'modal.opensafari.ical.h': 'Abrir Safari',
        'modal.opensafari.ical.text':
          'Desafortunadamente, iOS tiene algunos problemas para generar y abrir el archivo de calendario fuera de Safari.',
        'modal.opensafari.ical.steps':
          '<ol><li><strong>Abrir Safari</strong>, ...</li><li>Utilice la funci\xF3n de <strong>pegar</strong> para continuar.</li></ol>',
        'modal.multidate.h': 'Esta es una serie de fechas',
        'modal.multidate.text': 'A\xF1ada las fechas individuales a su calendario en orden:',
        'date.status.cancelled': 'Esta fecha fue cancelada.',
        'date.status.cancelled.cta': 'Actualice su calendario!',
        'modal.subscribe.yahoo.h': 'A\xF1adir calendario a Yahoo',
        'modal.subscribe.yahoo.text':
          '<ol><li>Abra el calendario de Yahoo.</li><li>Haga clic en la pesta\xF1a "Acciones".</li><li>Seleccione "Seguir otros calendarios".</li><li>Elige un nombre y pega la URL de tu portapapeles en el campo URL.</li></ol>',
        'modal.subscribe.yahoo.button': 'Abrir calendario de Yahoo',
        'modal.crios.google.text':
          'Si est\xE1s utilizando la aplicaci\xF3n Google Calendar y no est\xE1 abierta en segundo plano, lamentablemente, es posible que necesites iniciar este proceso dos veces.',
        continue: 'Continuar',
        cancel: 'Cancelar',
        expired: 'Caducada',
        recurring: 'Peri\xF3dica',
      },
      pt: {
        'label.addtocalendar': 'Incluir no Calend\xE1rio',
        'label.icalfile': 'Ficheiro iCal',
        close: 'Fechar',
        'modal.button.default': 'Clicar-me',
        'modal.webview.ical.h': 'Abra o seu browser',
        'modal.webview.ical.text':
          'Infelizmente, os navegadores em tampas t\xEAm problemas com a forma como geramos o ficheiro de calend\xE1rio.',
        'modal.clipboard.text':
          'Copi\xE1mos automaticamente um URL m\xE1gico para a sua \xE1rea de transfer\xEAncia.',
        'modal.webview.ical.steps':
          '<ol><li><strong>Abrir outro browser</strong> en tu smartphone, ...</li><li>Use a fun\xE7\xE3o <forte>colar</strong> para continuar.</li></ol>',
        'modal.opensafari.ical.h': 'Safari aberto',
        'modal.opensafari.ical.text':
          'Infelizmente, o iOS tem alguns problemas para gerar e abrir o arquivo de calend\xE1rio fora do Safari.',
        'modal.opensafari.ical.steps':
          '<ol><li><strong>Safari aberto</strong>, ...</li><li>Use a fun\xE7\xE3o <forte>colar</strong> para continuar.</li></ol>',
        'modal.multidate.h': 'Esta \xE9 uma s\xE9rie de datas',
        'modal.multidate.text': 'Adicione as datas individuais ao seu calend\xE1rio, por ordem:',
        'date.status.cancelled': 'Esta data foi cancelada.',
        'date.status.cancelled.cta': 'Actualize o seu calend\xE1rio!',
        'modal.subscribe.yahoo.h': 'Adicionar calend\xE1rio ao Yahoo',
        'modal.subscribe.yahoo.text':
          '<ol><li>Abrir o calend\xE1rio do Yahoo.</li><li>Clique no separador "Ac\xE7\xF5es".</li><li>Seleccione "Seguir outros calend\xE1rios".</li><li>Escolha um nome e cole o URL da sua \xE1rea de transfer\xEAncia no campo URL.</li></ol>',
        'modal.subscribe.yahoo.button': 'Abra o Calend\xE1rio do Yahoo',
        'modal.crios.google.text':
          'Se estiver usando o aplicativo Google Calendar e ele n\xE3o estiver aberto em segundo plano, infelizmente, voc\xEA pode precisar iniciar este processo duas vezes.',
        continue: 'Continuar',
        cancel: 'Cancelar',
        expired: 'Expirada',
        recurring: 'Recorrente',
      },
      fr: {
        'label.addtocalendar': "Ajouter \xE0 l'Agenda",
        'label.icalfile': 'Fichier iCal',
        close: 'Fermer',
        'modal.button.default': 'Cliquez-moi',
        'modal.webview.ical.h': 'Ouvrez votre navigateur',
        'modal.webview.ical.text':
          "Malheureusement, les navigateurs in-app ont des probl\xE8mes avec la mani\xE8re dont nous cr\xE9ons les fichiers d'agenda.",
        'modal.clipboard.text':
          'Nous avons automatiquement copi\xE9 une URL magique dans votre presse-papiers.',
        'modal.webview.ical.steps':
          '<ol><li><strong>Ouvrez un autre navigateur</strong> sur votre smartphone, ...</li><li><strong>Collez</strong> le contenu du presser-papier et continuez.</li></ol>',
        'modal.opensafari.ical.h': 'Ouvrir Safari',
        'modal.opensafari.ical.text':
          'Malheureusement, iOS rencontre des probl\xE8mes pour g\xE9n\xE9rer et ouvrir le fichier de calendrier en dehors de Safari.',
        'modal.opensafari.ical.steps':
          '<ol><li><strong>Ouvrez Safari</strong>, ...</li><li><strong>Collez</strong> le contenu du presse-papier et continuez.</li></ol>',
        'modal.multidate.h': 'Ceci est un \xE9v\xE8nement r\xE9current',
        'modal.multidate.text': 'Ajouter les diff\xE9rents \xE9v\xE8nements un par un:',
        'date.status.cancelled': 'Cette date est annul\xE9e.',
        'date.status.cancelled.cta': 'Actualisez votre agenda!',
        'modal.subscribe.yahoo.h': 'Ajouter un agenda \xE0 Yahoo',
        'modal.subscribe.yahoo.text': `<ol><li>Ouvrez l'Agenda Yahoo.</li><li>Cliquez sur l'onglet "Actions".</li><li>S\xE9lectionnez "Suivre d'autres agendas".</li><li>Choisissez un nom et collez le contenu de votre presse-papiers dans le champ URL.</li></ol>`,
        'modal.subscribe.yahoo.button': 'Ouvrir le calendrier Yahoo',
        'modal.crios.google.text':
          "Si vous utilisez l'application Google Calendar et qu'elle n'est pas d\xE9j\xE0 ouverte en arri\xE8re-plan, malheureusement, il se pourrait que vous deviez lancer ce processus deux fois.",
        continue: 'Continuer',
        cancel: 'Annuler',
        expired: 'Expir\xE9',
        recurring: 'R\xE9currente',
      },
      nl: {
        'label.addtocalendar': 'Opslaan in Agenda',
        'label.icalfile': 'iCal File',
        close: 'Sluiten',
        'modal.button.default': 'Klik me',
        'modal.webview.ical.h': 'Open uw browser',
        'modal.webview.ical.text':
          'Helaas hebben in-app browsers problemen met de manier waarop wij kalenderbestanden maken.',
        'modal.clipboard.text':
          'We hebben automatisch een magische URL naar je klembord gekopieerd.',
        'modal.webview.ical.steps':
          '<ol><li><strong>Open een andere browser</strong> op uw smartphone, ...</li><li>Gebruik de <strong>insert</strong> functie om verder te gaan.</li></ol>',
        'modal.opensafari.ical.h': 'Open Safari',
        'modal.opensafari.ical.text':
          'Helaas heeft iOS enkele problemen met het genereren en openen van het agendabestand buiten Safari.',
        'modal.opensafari.ical.steps':
          '<ol><li><strong>Open Safari</strong>, ...</li><li>Gebruik de <strong>insert</strong> functie om verder te gaan.</li></ol>',
        'modal.multidate.h': 'Dit is een reeks data',
        'modal.multidate.text': 'Voeg de afzonderlijke delen \xE9\xE9n voor \xE9\xE9n toe:',
        'date.status.cancelled': 'Deze datum is geannuleerd.',
        'date.status.cancelled.cta': 'Uw agenda bijwerken!',
        'modal.subscribe.yahoo.h': 'Toevoegen aan Yahoo',
        'modal.subscribe.yahoo.text': `<ol><li>Open de Yahoo calendar.</li><li>Klik op de "Acties" tab.</li><li>Selecteer "Volg Andere Agenda's".</li><li>Kies een naam en plak de URL van uw klembord in het URL-veld.</li></ol>`,
        'modal.subscribe.yahoo.button': 'Open Yahoo Agenda',
        'modal.crios.google.text':
          'Als je de Google Calendar-app gebruikt en deze is niet al geopend op de achtergrond, dan zul je helaas mogelijk dit proces twee keer moeten starten.',
        continue: 'Doorgaan',
        cancel: 'Annuleren',
        expired: 'Verlopen',
        recurring: 'Terugkerend',
      },
      tr: {
        'label.addtocalendar': 'Takvime Ekle',
        'label.icalfile': 'iCal Dosyas\u0131',
        close: 'Kapat',
        'modal.button.default': 'Beni t\u0131klay\u0131n',
        'modal.webview.ical.h': 'Taray\u0131c\u0131n\u0131z\u0131 a\xE7\u0131n',
        'modal.webview.ical.text':
          'Ne yaz\u0131k ki, uygulama i\xE7i taray\u0131c\u0131lar takvim dosyalar\u0131n\u0131 olu\u015Fturma \u015Feklimizle ilgili sorunlar ya\u015F\u0131yor.',
        'modal.clipboard.text': 'Panonuza otomatik olarak sihirli bir URL kopyalad\u0131k.',
        'modal.webview.ical.steps':
          '<ol><li><strong>Ak\u0131ll\u0131 telefonunuzda ba\u015Fka bir taray\u0131c\u0131 a\xE7\u0131n</strong>, ...</li><li>Devam etmek i\xE7in <strong>insert</strong> fonksiyonunu kullan\u0131n.</li></ol>',
        'modal.opensafari.ical.h': 'A\xE7\u0131k Safari',
        'modal.opensafari.ical.text':
          'Ne yaz\u0131k ki iOS, takvim dosyas\u0131n\u0131 Safari d\u0131\u015F\u0131nda olu\u015Ftururken ve a\xE7arken baz\u0131 sorunlar ya\u015F\u0131yor.',
        'modal.opensafari.ical.steps':
          '<ol><li><strong>A\xE7\u0131k Safari</strong>, ...</li><li>Devam etmek i\xE7in <strong>insert</strong> fonksiyonunu kullan\u0131n.</li></ol>',
        'modal.multidate.h': 'Bu bir etkinlik serisidir',
        'modal.multidate.text': 'Par\xE7alar\u0131 teker teker ekleyin:',
        'date.status.cancelled': 'Bu tarih iptal edildi.',
        'date.status.cancelled.cta': 'L\xFCtfen takviminizi g\xFCncelleyin!',
        'modal.subscribe.yahoo.h': "Yahoo'ya takvim ekleme",
        'modal.subscribe.yahoo.text': `<ol><li>Yahoo takvimini a\xE7\u0131n.</li><li>"Eylemler" sekmesine t\u0131klay\u0131n.</li><li>"Di\u011Fer Takvimleri Takip Et" \xF6\u011Fesini se\xE7in.</li><li>Bir ad se\xE7in ve URL'yi panonuzdan URL alan\u0131na yap\u0131\u015Ft\u0131r\u0131n.</li></ol>`,
        'modal.subscribe.yahoo.button': 'Yahoo Takvimini a\xE7',
        'modal.crios.google.text':
          'Google Takvim uygulamas\u0131n\u0131 kullan\u0131yorsan\u0131z ve zaten arka planda a\xE7\u0131k de\u011Filse, ne yaz\u0131k ki bu i\u015Flemi iki kez ba\u015Flatman\u0131z gerekebilir.',
        continue: 'Devam etmek',
        cancel: '\u0130ptal',
        expired: 'G\xFCn\xFC ge\xE7mi\u015F',
        recurring: 'Yinelenen',
      },
      zh: {
        'label.addtocalendar': '\u6DFB\u52A0\u5230\u65E5\u5386',
        'label.icalfile': 'iCal \u6587\u4EF6',
        close: '\u5173',
        'modal.button.default': '\u70B9\u6211',
        'modal.webview.ical.h': '\u6253\u5F00\u6D4F\u89C8\u5668',
        'modal.webview.ical.text':
          '\u4E0D\u5E78\u7684\u662F\uFF0C\u5E94\u7528\u5185\u6D4F\u89C8\u5668\u5728\u6211\u4EEC\u751F\u6210\u65E5\u5386\u6587\u4EF6\u7684\u65B9\u5F0F\u4E0A\u5B58\u5728\u95EE\u9898\u3002',
        'modal.clipboard.text':
          '\u6211\u4EEC\u81EA\u52A8\u5C06\u9B54\u672F URL \u590D\u5236\u5230\u60A8\u7684\u526A\u8D34\u677F\u3002',
        'modal.webview.ical.steps':
          '<ol><li>\u6253\u5F00\u624B\u673A\u4E0A\u7684\u4EFB\u4F55\u5176\u4ED6\u6D4F\u89C8\u5668, ...</li><li>\u7C98\u8D34\u526A\u8D34\u677F\u5185\u5BB9\u5E76\u5F00\u59CB\u3002</li></ol>',
        'modal.opensafari.ical.h': '\u6253\u5F00 Safari',
        'modal.opensafari.ical.text':
          '\u4E0D\u5E78\u7684\u662F\uFF0CiOS \u5728 Safari \u4E4B\u5916\u751F\u6210\u548C\u6253\u5F00\u65E5\u5386\u6587\u4EF6\u65F6\u9047\u5230\u4E00\u4E9B\u95EE\u9898\u3002',
        'modal.opensafari.ical.steps':
          '<ol><li><strong>\u6253\u5F00 Safari</strong>, ...</li><li>\u7C98\u8D34\u526A\u8D34\u677F\u5185\u5BB9\u5E76\u5F00\u59CB\u3002</li></ol>',
        'modal.multidate.h': '\u8FD9\u662F\u4E00\u4E2A\u6D3B\u52A8\u7CFB\u5217',
        'modal.multidate.text': '\u9010\u4E2A\u6DFB\u52A0\u5404\u4E2A\u90E8\u5206:',
        'date.status.cancelled': '\u6B64\u65E5\u671F\u5DF2\u53D6\u6D88\u3002',
        'date.status.cancelled.cta': '\u8BF7\u66F4\u65B0\u60A8\u7684\u65E5\u5386!',
        'modal.subscribe.yahoo.h': '\u5C06\u65E5\u5386\u6DFB\u52A0\u5230 Yahoo',
        'modal.subscribe.yahoo.text':
          '<ol><li>\u6253\u5F00 Yahoo \u65E5\u5386\u3002</li><li>\u70B9\u51FB\u201C\u64CD\u4F5C\u201D\u6807\u7B7E\u3002</li><li>\u9009\u62E9\u201C\u5173\u6CE8\u5176\u4ED6\u65E5\u5386\u201D\u3002</li><li>\u9009\u62E9\u4E00\u4E2A\u540D\u79F0\u5E76\u5C06\u526A\u8D34\u677F\u4E2D\u7684 URL \u7C98\u8D34\u5230 URL \u5B57\u6BB5\u4E2D\u3002</li></ol>',
        'modal.subscribe.yahoo.button': '\u6253\u5F00\u96C5\u864E\u65E5\u5386',
        'modal.crios.google.text':
          '\u5982\u679C\u60A8\u6B63\u5728\u4F7F\u7528 Google \u65E5\u5386\u5E94\u7528\uFF0C\u4E14\u8BE5\u5E94\u7528\u672A\u5728\u540E\u53F0\u6253\u5F00\uFF0C\u5F88\u9057\u61BE\uFF0C\u60A8\u53EF\u80FD\u9700\u8981\u542F\u52A8\u6B64\u8FDB\u7A0B\u4E24\u6B21\u3002',
        continue: '\u7EE7\u7EED',
        cancel: '\u4E2D\u6B62',
        expired: '\u5DF2\u5230\u671F',
        recurring: '\u518D\u6B21\u53D1\u751F\u7684',
      },
      ar: {
        'label.addtocalendar':
          '\u0625\u0636\u0627\u0641\u0629 \u0625\u0644\u0649 \u0627\u0644\u062A\u0642\u0648\u064A\u0645',
        'label.icalfile': '\u0645\u0644\u0641 iCal',
        close: '\u0642\u0631\u064A\u0628',
        'modal.button.default': '\u0627\u0646\u0642\u0631 \u0641\u0648\u0642 \u0644\u064A',
        'modal.webview.ical.h':
          '\u0627\u0641\u062A\u062D \u0627\u0644\u0645\u0633\u062A\u0639\u0631\u0636 \u0627\u0644\u062E\u0627\u0635 \u0628\u0643',
        'modal.webview.ical.text':
          '\u0644\u0633\u0648\u0621 \u0627\u0644\u062D\u0638 \u060C \u062A\u0648\u0627\u062C\u0647 \u0627\u0644\u0645\u062A\u0635\u0641\u062D\u0627\u062A \u062F\u0627\u062E\u0644 \u0627\u0644\u062A\u0637\u0628\u064A\u0642 \u0645\u0634\u0627\u0643\u0644 \u0641\u064A \u0637\u0631\u064A\u0642\u0629 \u0625\u0646\u0634\u0627\u0621 \u0645\u0644\u0641 \u0627\u0644\u062A\u0642\u0648\u064A\u0645.',
        'modal.clipboard.text':
          '\u0642\u0645\u0646\u0627 \u062A\u0644\u0642\u0627\u0626\u064A\u064B\u0627 \u0628\u0646\u0633\u062E \u0639\u0646\u0648\u0627\u0646 URL \u0633\u062D\u0631\u064A \u0625\u0644\u0649 \u0627\u0644\u062D\u0627\u0641\u0638\u0629 \u0627\u0644\u062E\u0627\u0635\u0629 \u0628\u0643.',
        'modal.webview.ical.steps':
          '<ol><li>\u0627\u0641\u062A\u062D \u0623\u064A \u0645\u062A\u0635\u0641\u062D \u0622\u062E\u0631 \u0639\u0644\u0649 \u0647\u0627\u062A\u0641\u0643 \u0627\u0644\u0630\u0643\u064A, ...</li><li>.\u0627\u0644\u0635\u0642 \u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u062D\u0627\u0641\u0638\u0629 \u0648\u0627\u0630\u0647\u0628</li></ol>',
        'modal.opensafari.ical.h': '\u0627\u0641\u062A\u062D Safari',
        'modal.opensafari.ical.text':
          '\u0644\u0633\u0648\u0621 \u0627\u0644\u062D\u0638 \u060C \u064A\u0648\u0627\u062C\u0647 iOS \u0628\u0639\u0636 \u0627\u0644\u0645\u0634\u0643\u0644\u0627\u062A \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0645\u0644\u0641 \u0627\u0644\u062A\u0642\u0648\u064A\u0645 \u0648\u0641\u062A\u062D\u0647 \u062E\u0627\u0631\u062C Safari.',
        'modal.opensafari.ical.steps':
          '<ol><li><strong>\u0627\u0641\u062A\u062D Safari</strong>, ...</li><li>\u0627\u0644\u0635\u0642 \u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u062D\u0627\u0641\u0638\u0629 \u0648\u0627\u0630\u0647\u0628.</li></ol>',
        'modal.multidate.h':
          '\u0647\u0630\u0647 \u0633\u0644\u0633\u0644\u0629 \u0623\u062D\u062F\u0627\u062B',
        'modal.multidate.text':
          '\u0623\u0636\u0641 \u0627\u0644\u0623\u062C\u0632\u0627\u0621 \u0627\u0644\u0641\u0631\u062F\u064A\u0629 \u0648\u0627\u062D\u062F\u0629 \u062A\u0644\u0648 \u0627\u0644\u0623\u062E\u0631\u0649:',
        'date.status.cancelled':
          '\u062A\u0645 \u0625\u0644\u063A\u0627\u0621 \u0647\u0630\u0627 \u0627\u0644\u062A\u0627\u0631\u064A\u062E.',
        'date.status.cancelled.cta':
          '\u0627\u0644\u0631\u062C\u0627\u0621 \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u062A\u0642\u0648\u064A\u0645 \u0627\u0644\u062E\u0627\u0635 \u0628\u0643!',
        'modal.subscribe.yahoo.h':
          '\u0623\u0636\u0641 \u0627\u0644\u062A\u0642\u0648\u064A\u0645 \u0625\u0644\u0649 Yahoo',
        'modal.subscribe.yahoo.text':
          '<ol><li>\u0627\u0641\u062A\u062D \u062A\u0642\u0648\u064A\u0645 Yahoo.</li><li>\u0627\u0646\u0642\u0631 \u0641\u0648\u0642 \u0639\u0644\u0627\u0645\u0629 \u0627\u0644\u062A\u0628\u0648\u064A\u0628 "\u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A".</li><li>\u062D\u062F\u062F "\u0645\u062A\u0627\u0628\u0639\u0629 \u062A\u0642\u0648\u064A\u0645\u0627\u062A \u0623\u062E\u0631\u0649".</li><li>\u0627\u062E\u062A\u0631 \u0627\u0633\u0645\u064B\u0627 \u0648\u0627\u0644\u0635\u0642 \u0639\u0646\u0648\u0627\u0646 URL \u0645\u0646 \u0627\u0644\u062D\u0627\u0641\u0638\u0629 \u0627\u0644\u062E\u0627\u0635\u0629 \u0628\u0643 \u0641\u064A \u062D\u0642\u0644 URL.</li></ol>',
        'modal.subscribe.yahoo.button':
          '\u0627\u0641\u062A\u062D \u062A\u0642\u0648\u064A\u0645 \u064A\u0627\u0647\u0648',
        'modal.crios.google.text':
          '\u0625\u0630\u0627 \u0643\u0646\u062A \u062A\u0633\u062A\u062E\u062F\u0645 \u062A\u0637\u0628\u064A\u0642 Google Calendar \u0648\u0644\u0645 \u064A\u0643\u0646 \u0645\u0641\u062A\u0648\u062D\u064B\u0627 \u0628\u0627\u0644\u0641\u0639\u0644 \u0641\u064A \u0627\u0644\u062E\u0644\u0641\u064A\u0629\u060C \u0641\u0642\u062F \u062A\u062D\u062A\u0627\u062C \u0625\u0644\u0649 \u0628\u062F\u0621 \u0647\u0630\u0647 \u0627\u0644\u0639\u0645\u0644\u064A\u0629 \u0645\u0631\u062A\u064A\u0646 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644.',
        continue: '\u0627\u0633\u062A\u0645\u0631',
        cancel: '\u0625\u062D\u0628\u0627\u0637',
        expired: '\u0645\u0646\u062A\u0647\u064A \u0627\u0644\u0635\u0644\u0627\u062D\u064A\u0629',
        recurring: '\u064A\u062A\u0643\u0631\u0631',
      },
      hi: {
        'label.addtocalendar':
          '\u0915\u0948\u0932\u0947\u0902\u0921\u0930 \u092E\u0947\u0902 \u091C\u094B\u0921\u093C\u0947\u0902',
        'label.icalfile': 'iCal \u092B\u093C\u093E\u0907\u0932',
        close: '\u092C\u0902\u0926 \u0915\u0930\u0928\u093E',
        'modal.button.default':
          '\u092E\u0941\u091D\u0947 \u0915\u094D\u0932\u093F\u0915 \u0915\u0930\u0947\u0902',
        'modal.webview.ical.h':
          '\u0905\u092A\u0928\u093E \u092C\u094D\u0930\u093E\u0909\u091C\u093C\u0930 \u0916\u094B\u0932\u0947\u0902',
        'modal.webview.ical.text':
          '\u0926\u0941\u0930\u094D\u092D\u093E\u0917\u094D\u092F \u0938\u0947, \u0907\u0928-\u0910\u092A \u092C\u094D\u0930\u093E\u0909\u091C\u093C\u0930 \u092E\u0947\u0902 \u0915\u0948\u0932\u0947\u0902\u0921\u0930 \u092B\u093C\u093E\u0907\u0932 \u092C\u0928\u093E\u0928\u0947 \u0915\u0947 \u0924\u0930\u0940\u0915\u0947 \u092E\u0947\u0902 \u0938\u092E\u0938\u094D\u092F\u093E\u090F\u0901 \u0939\u0948\u0902\u0964',
        'modal.clipboard.text':
          '\u0939\u092E\u0928\u0947 \u0906\u092A\u0915\u0947 \u0915\u094D\u0932\u093F\u092A\u092C\u094B\u0930\u094D\u0921 \u092A\u0930 \u0938\u094D\u0935\u091A\u093E\u0932\u093F\u0924 \u0930\u0942\u092A \u0938\u0947 \u090F\u0915 \u091C\u093E\u0926\u0941\u0908 URL \u0915\u0949\u092A\u0940 \u0915\u0930 \u0932\u093F\u092F\u093E \u0939\u0948\u0964',
        'modal.webview.ical.steps':
          '<ol><li>\u0905\u092A\u0928\u0947 \u092B\u093C\u094B\u0928 \u092A\u0930 <strong>\u0926\u0942\u0938\u0930\u093E \u092C\u094D\u0930\u093E\u0909\u091C\u093C\u0930 \u0916\u094B\u0932\u0947\u0902</strong>, ...</li><li>\u0915\u094D\u0932\u093F\u092A\u092C\u094B\u0930\u094D\u0921 \u0938\u093E\u092E\u0917\u094D\u0930\u0940 <strong>\u091A\u093F\u092A\u0915\u093E\u090F\u0902</strong> \u0914\u0930 \u091C\u093E\u090F\u0902\u0964</li></ol>',
        'modal.opensafari.ical.h': '\u0938\u092B\u093E\u0930\u0940 \u0916\u094B\u0932\u0947\u0902',
        'modal.opensafari.ical.text':
          '\u0926\u0941\u0930\u094D\u092D\u093E\u0917\u094D\u092F \u0938\u0947, iOS \u092E\u0947\u0902 \u0938\u092B\u093C\u093E\u0930\u0940 \u0915\u0947 \u092C\u093E\u0939\u0930 \u0915\u0948\u0932\u0947\u0902\u0921\u0930 \u092B\u093C\u093E\u0907\u0932 \u092C\u0928\u093E\u0928\u0947 \u0914\u0930 \u0916\u094B\u0932\u0928\u0947 \u092E\u0947\u0902 \u0915\u0941\u091B \u0938\u092E\u0938\u094D\u092F\u093E\u090F\u0901 \u0939\u0948\u0902\u0964',
        'modal.opensafari.ical.steps':
          '<ol><li><strong>\u0938\u092B\u093E\u0930\u0940 \u0916\u094B\u0932\u0947\u0902</strong>, ...</li><li>\u0915\u094D\u0932\u093F\u092A\u092C\u094B\u0930\u094D\u0921 \u0938\u093E\u092E\u0917\u094D\u0930\u0940 <strong>\u091A\u093F\u092A\u0915\u093E\u090F\u0902</strong> \u0914\u0930 \u091C\u093E\u090F\u0902\u0964</li></ol>',
        'modal.multidate.h':
          '\u092F\u0939 \u090F\u0915 \u0907\u0935\u0947\u0902\u091F \u0938\u0940\u0930\u0940\u091C\u093C \u0939\u0948',
        'modal.multidate.text':
          '\u0905\u0932\u0917-\u0905\u0932\u0917 \u0939\u093F\u0938\u094D\u0938\u094B\u0902 \u0915\u094B \u090F\u0915-\u090F\u0915 \u0915\u0930\u0915\u0947 \u091C\u094B\u0921\u093C\u0947\u0902:',
        'date.status.cancelled':
          '\u092F\u0939 \u0924\u093F\u0925\u093F \u0930\u0926\u094D\u0926 \u0939\u094B \u0917\u0908\u0964',
        'date.status.cancelled.cta':
          '\u0915\u0943\u092A\u092F\u093E \u0905\u092A\u0928\u093E \u0915\u0948\u0932\u0947\u0902\u0921\u0930 \u0905\u092A\u0921\u0947\u091F \u0915\u0930\u0947\u0902!',
        'modal.subscribe.yahoo.h':
          'Yahoo . \u092E\u0947\u0902 \u0915\u0948\u0932\u0947\u0902\u0921\u0930 \u091C\u094B\u0921\u093C\u0947\u0902',
        'modal.subscribe.yahoo.text':
          '<ol><li>Yahoo \u0915\u0948\u0932\u0947\u0902\u0921\u0930 \u0916\u094B\u0932\u0947\u0902\u0964</li><li>"\u0915\u0943\u0924\u0940" \u091F\u0948\u092C \u092A\u0930 \u0915\u094D\u0932\u093F\u0915 \u0915\u0930\u0947\u0902\u0964</li><li>"\u0907\u0924\u0930 \u0915\u0945\u0932\u0947\u0902\u0921\u0930\u094D\u0938\u091A\u0947 \u0905\u0928\u0941\u0938\u0930\u0923 \u0915\u0930\u093E" \u091A\u0941\u0928\u0947\u0902\u0964</li><li>\u090F\u0915 \u0928\u093E\u092E \u091A\u0941\u0928\u0947\u0902 \u0914\u0930 \u0905\u092A\u0928\u0947 \u0915\u094D\u0932\u093F\u092A\u092C\u094B\u0930\u094D\u0921 \u0938\u0947 URL \u0915\u094B URL \u092B\u093C\u0940\u0932\u094D\u0921 \u092E\u0947\u0902 \u092A\u0947\u0938\u094D\u091F \u0915\u0930\u0947\u0902\u0964</li></ol>',
        'modal.subscribe.yahoo.button':
          '\u092F\u093E\u0939\u0942 \u0915\u0948\u0932\u0947\u0902\u0921\u0930 \u0916\u094B\u0932\u0947\u0902',
        'modal.crios.google.text':
          '\u0905\u0917\u0930 \u0906\u092A Google Calendar \u090F\u092A\u094D\u0932\u093F\u0915\u0947\u0936\u0928 \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0915\u0930 \u0930\u0939\u0947 \u0939\u0948\u0902 \u0914\u0930 \u092F\u0939 \u092A\u0939\u0932\u0947 \u0938\u0947 \u0939\u0940 \u092A\u0943\u0937\u094D\u0920\u092D\u0942\u092E\u093F \u092E\u0947\u0902 \u0928\u0939\u0940\u0902 \u0916\u0941\u0932\u093E \u0939\u0948, \u0924\u094B \u0926\u0941\u0916\u0926 \u0939\u0948 \u0915\u093F \u0906\u092A\u0915\u094B \u0936\u093E\u092F\u0926 \u0907\u0938 \u092A\u094D\u0930\u0915\u094D\u0930\u093F\u092F\u093E \u0915\u094B \u0926\u094B \u092C\u093E\u0930 \u0936\u0941\u0930\u0942 \u0915\u0930\u0928\u0947 \u0915\u0940 \u0906\u0935\u0936\u094D\u092F\u0915\u0924\u093E \u0939\u094B \u0938\u0915\u0924\u0940 \u0939\u0948\u0964',
        continue: '\u091C\u093E\u0930\u0940 \u0930\u0916\u0947\u0902',
        cancel: '\u0930\u0926\u094D\u0926 \u0915\u0930\u0928\u093E',
        expired: '\u0916\u0924\u094D\u092E \u0939\u094B \u091A\u0941\u0915\u093E',
        recurring: '\u092A\u0941\u0928\u0930\u093E\u0935\u0930\u094D\u0924\u0940',
      },
      pl: {
        'label.addtocalendar': 'Dodaj do kalendarza',
        'label.icalfile': 'Plik iCal',
        close: 'Zamknij',
        'modal.button.default': 'Kliknij mnie',
        'modal.webview.ical.h': 'Otw\xF3rz przegl\u0105dark\u0119',
        'modal.webview.ical.text':
          'Niestety, przegl\u0105darki in-app maj\u0105 problemy ze sposobem, w jaki generujemy plik kalendarza.',
        'modal.clipboard.text': 'Automatycznie skopiowali\u015Bmy magiczny adres URL do schowka.',
        'modal.webview.ical.steps':
          '<ol><li><strong>Otw\xF3rz inn\u0105 przegl\u0105dark\u0119</strong> w swoim telefonie, ...</li><li><strong>Wklej</strong> zawarto\u015B\u0107 schowka i ruszaj.</li></ol>',
        'modal.opensafari.ical.h': 'Otw\xF3rz Safari',
        'modal.opensafari.ical.text':
          'Niestety iOS ma pewne problemy z generowaniem i otwieraniem pliku kalendarza poza Safari.',
        'modal.opensafari.ical.steps':
          '<ol><li><strong>Otw\xF3rz Safari</strong>, ...</li><li><strong>Wklej</strong> zawarto\u015B\u0107 schowka i ruszaj.</li></ol>',
        'modal.multidate.h': 'To jest cykl imprez',
        'modal.multidate.text': 'Dodawa\u0107 po kolei poszczeg\xF3lne cz\u0119\u015Bci:',
        'date.status.cancelled': 'Ta data zosta\u0142a odwo\u0142ana.',
        'date.status.cancelled.cta': 'Zaktualizuj sw\xF3j kalendarz!',
        'modal.subscribe.yahoo.h': 'Dodaj kalendarz do Yahoo',
        'modal.subscribe.yahoo.text':
          '<ol><li>Otw\xF3rz kalendarz Yahoo.</li><li>Kliknij na zak\u0142adk\u0119 "Czynno\u015Bci".</li><li>Wybierz "Obserwuj inne kalendarze".</li><li>Wybierz nazw\u0119 i wklej adres URL ze schowka w polu URL.</li></ol>',
        'modal.subscribe.yahoo.button': 'Otw\xF3rz kalendarz Yahoo',
        'modal.crios.google.text':
          'Je\u015Bli u\u017Cywasz aplikacji Google Calendar i nie jest ona ju\u017C otwarta w tle, niestety, mo\u017Ce by\u0107 konieczne dwukrotne uruchomienie tego procesu.',
        continue: 'Kontynuowa\u0107',
        cancel: 'Anuluj',
        expired: 'Wygas\u0142y',
        recurring: 'Powtarzaj\u0105cy si\u0119',
      },
      id: {
        'label.addtocalendar': 'Tambahkan ke Kalender',
        'label.icalfile': 'File iCal',
        close: 'Tutup',
        'modal.button.default': 'Klik saya',
        'modal.webview.ical.h': 'Buka browser Anda',
        'modal.webview.ical.text':
          'Sayangnya, browser dalam aplikasi memiliki masalah dengan cara kami menghasilkan file kalender.',
        'modal.clipboard.text': 'Kami telah secara otomatis menyalin URL ajaib ke clipboard Anda.',
        'modal.webview.ical.steps':
          '<ol><li><strong>Buka peramban lain</strong> pada ponsel Anda, ...</li><li>Tempelkan konten clipboard dan pergi.</li></ol>',
        'modal.opensafari.ical.h': 'Buka Safari',
        'modal.opensafari.ical.text':
          'Sayangnya, iOS memiliki beberapa masalah dalam membuat dan membuka file kalender di luar Safari.',
        'modal.opensafari.ical.steps':
          '<ol><li><strong>Buka Safari</strong>, ...</li><li>Tempelkan konten clipboard dan pergi.</li></ol>',
        'modal.multidate.h': 'Ini adalah rangkaian acara',
        'modal.multidate.text': 'Tambahkan masing-masing bagian satu per satu:',
        'date.status.cancelled': 'Tanggal ini dibatalkan.',
        'date.status.cancelled.cta': 'Perbarui kalender Anda!',
        'modal.subscribe.yahoo.h': 'Tambahkan kalender ke Yahoo',
        'modal.subscribe.yahoo.text':
          '<ol><li>Buka kalender Yahoo.</li><li>Klik pada tab "Tindakan".</li><li>Pilih "Ikuti Kalender Lain".</li><li>Pilih nama dan tempelkan URL dari clipboard Anda ke bidang URL.</li></ol>',
        'modal.subscribe.yahoo.button': 'Buka kalender Yahoo',
        'modal.crios.google.text':
          'Jika Anda menggunakan aplikasi Google Calendar dan aplikasi tersebut belum terbuka di latar belakang, sayangnya, Anda mungkin perlu memulai proses ini dua kali.',
        continue: 'Lanjutkan',
        cancel: 'Batal',
        expired: 'Kedaluwarsa',
        recurring: 'Berulang',
      },
      no: {
        'label.addtocalendar': 'Legg til i kalenderen',
        'label.icalfile': 'iCal-fil',
        close: 'Lukk',
        'modal.button.default': 'Klikk p\xE5 meg',
        'modal.webview.ical.h': '\xC5pne nettleseren din',
        'modal.webview.ical.text':
          'Dessverre har nettlesere i appen problemer med m\xE5ten vi genererer kalenderfilen p\xE5.',
        'modal.clipboard.text': 'Vi kopierte automatisk en magisk URL til utklippstavlen din.',
        'modal.webview.ical.steps':
          '<ol><li><strong>\xC5pne en annen nettleser</strong> p\xE5 telefonen, ...</li><li><strong>Lim inn</strong> innholdet p\xE5 utklippstavlen og g\xE5.</li></ol>',
        'modal.opensafari.ical.h': '\xC5pne Safari',
        'modal.opensafari.ical.text':
          'Dessverre har iOS noen problemer med \xE5 generere og \xE5pne kalenderfilen utenfor Safari.',
        'modal.opensafari.ical.steps':
          '<ol><li><strong>\xC5pne Safari</strong>, ...</li><li><strong>Lim inn</strong> innholdet p\xE5 utklippstavlen og g\xE5.</li></ol>',
        'modal.multidate.h': 'Dette er en avtaleserie',
        'modal.multidate.text': 'Legg til de enkelte datoene i kalenderen din i rekkef\xF8lge:',
        'date.status.cancelled': 'Denne datoen ble avlyst.',
        'date.status.cancelled.cta': 'Oppdater kalenderen din!',
        'modal.subscribe.yahoo.h': 'Legg til kalender til Yahoo',
        'modal.subscribe.yahoo.text':
          '<ol><li>\xC5pne Yahoo-kalenderen.</li><li>Klikk p\xE5 \xABHandlinger\xBB-fanen.</li><li>Velg \xABF\xF8lg andre kalendere\xBB.</li><li>Velg et navn og lim inn URL-en fra utklippstavlen i URL-feltet.</li></ol>',
        'modal.subscribe.yahoo.button': '\xC5pne Yahoo-kalenderen',
        'modal.crios.google.text':
          'Hvis du bruker Google Calendar-appen og den ikke allerede er \xE5pen i bakgrunnen, m\xE5 du dessverre kanskje starte denne prosessen to ganger.',
        continue: 'Fortsette',
        cancel: 'Avbryt',
        expired: 'Utl\xF8pt',
        recurring: 'Tilbakevendende',
      },
      fi: {
        'label.addtocalendar': 'Lis\xE4\xE4 kalenteriin',
        'label.icalfile': 'iCal-tiedosto',
        close: 'Sulje',
        'modal.button.default': 'Klikkaa minua',
        'modal.webview.ical.h': 'Avaa selain',
        'modal.webview.ical.text':
          'Valitettavasti sovelluksen sis\xE4isill\xE4 selaimilla on ongelmia kalenteritiedoston luomisessa.',
        'modal.clipboard.text':
          'Olemme automaattisesti kopioineet maagisen URL-osoitteen leikep\xF6yd\xE4llesi.',
        'modal.webview.ical.steps':
          '<ol><li><strong>Avaa toinen selain</strong> puhelimessasi., ...</li><li><strong>liit\xE4</strong> leikep\xF6yd\xE4n sis\xE4lt\xF6 ja l\xE4hde.</li></ol>',
        'modal.opensafari.ical.h': 'Avaa Safari',
        'modal.opensafari.ical.text':
          'Valitettavasti iOS:ll\xE4 on ongelmia kalenteritiedoston luomisessa ja avaamisessa Safarin ulkopuolella.',
        'modal.opensafari.ical.steps':
          '<ol><li><strong>Avaa Safari</strong>, ...</li><li><strong>liit\xE4</strong> leikep\xF6yd\xE4n sis\xE4lt\xF6 ja l\xE4hde.</li></ol>',
        'modal.multidate.h': 'T\xE4m\xE4 on tapahtumasarja',
        'modal.multidate.text': 'Lis\xE4\xE4 yksitt\xE4iset osat yksi kerrallaan:',
        'date.status.cancelled': 'T\xE4m\xE4 p\xE4iv\xE4m\xE4\xE4r\xE4 peruttiin.',
        'date.status.cancelled.cta': 'P\xE4ivit\xE4 kalenterisi!',
        'modal.subscribe.yahoo.h': 'Lis\xE4\xE4 kalenteri Yahoo',
        'modal.subscribe.yahoo.text':
          '<ol><li>Avaa Yahoo-kalenteri.</li><li>Napsauta "Toiminnot"-v\xE4lilehte\xE4.</li><li>Valitse "Seuraa muiden kalentereita".</li><li>Valitse nimi ja liit\xE4 URL-osoite leikep\xF6yd\xE4lt\xE4si URL-kentt\xE4\xE4n.</li></ol>',
        'modal.subscribe.yahoo.button': 'Avaa Yahoo-kalenteri',
        'modal.crios.google.text':
          'Jos k\xE4yt\xE4t Google Kalenteri -sovellusta eik\xE4 se ole jo avoinna taustalla, valitettavasti saatat joutua aloittamaan t\xE4m\xE4n prosessin kahdesti.',
        continue: 'Jatkaa',
        cancel: 'Peruuta',
        expired: 'Vanhentunut',
        recurring: 'Toistuva',
      },
      sv: {
        'label.addtocalendar': 'L\xE4gg till i kalender',
        'label.icalfile': 'iCal-fil',
        close: 'St\xE4ng',
        'modal.button.default': 'Klicka p\xE5 mig',
        'modal.webview.ical.h': '\xD6ppna din webbl\xE4sare',
        'modal.webview.ical.text':
          'Tyv\xE4rr har webbl\xE4sare i appen problem med hur vi genererar kalenderfilen.',
        'modal.clipboard.text': 'Vi har automatiskt kopierat en magisk URL till ditt klippblock.',
        'modal.webview.ical.steps':
          '<ol><li><strong>\xD6ppna en annan webbl\xE4sare</strong> p\xE5 telefonen, ...</li><li><strong>Ins\xE4tt</strong> inneh\xE5llet i klippbordet och k\xF6r.</li></ol>',
        'modal.opensafari.ical.h': '\xD6ppna Safari',
        'modal.opensafari.ical.text':
          'Tyv\xE4rr har iOS vissa problem med att generera och \xF6ppna kalenderfilen utanf\xF6r Safari.',
        'modal.opensafari.ical.steps':
          '<ol><li><strong>\xD6ppna Safari</strong>, ...</li><li><strong>Ins\xE4tt</strong> inneh\xE5llet i klippbordet och k\xF6r.</li></ol>',
        'modal.multidate.h': 'Detta \xE4r en evenemangsserie',
        'modal.multidate.text': 'L\xE4gg till de enskilda delarna en efter en:',
        'date.status.cancelled': 'Detta datum har st\xE4llts in.',
        'date.status.cancelled.cta': 'Uppdatera din kalender!',
        'modal.subscribe.yahoo.h': 'L\xE4gg till kalender i Yahoo',
        'modal.subscribe.yahoo.text':
          '<ol><li>\xD6ppna Yahoo-kalendern.</li><li>Klicka p\xE5 fliken "\xC5tg\xE4rder".</li><li>V\xE4lj "F\xF6lj andra kalendrar".</li><li>V\xE4lj ett namn och klistra in URL:en fr\xE5n klippbordet i URL-f\xE4ltet.</li></ol>',
        'modal.subscribe.yahoo.button': '\xD6ppna Yahoo-kalendern',
        'modal.crios.google.text':
          'Om du anv\xE4nder Google Calendar-appen och den inte redan \xE4r \xF6ppen i bakgrunden, m\xE5ste du tyv\xE4rr kanske starta denna process tv\xE5 g\xE5nger.',
        continue: 'Forts\xE4tta',
        cancel: 'Avbryt',
        expired: 'Utg\xE5nget',
        recurring: '\xC5terkommande',
      },
      cs: {
        'label.addtocalendar': 'P\u0159idat do kalend\xE1\u0159e',
        'label.icalfile': 'Soubor iCal',
        close: 'Zav\u0159\xEDt',
        'modal.button.default': 'Klikn\u011Bte na m\u011B',
        'modal.webview.ical.h': 'Otev\u0159ete prohl\xED\u017Ee\u010D',
        'modal.webview.ical.text':
          'Prohl\xED\u017Ee\u010De v aplikac\xEDch maj\xED bohu\u017Eel probl\xE9my se zp\u016Fsobem generov\xE1n\xED souboru kalend\xE1\u0159e.',
        'modal.clipboard.text':
          'Do schr\xE1nky jsme automaticky zkop\xEDrovali kouzelnou adresu URL.',
        'modal.webview.ical.steps':
          '<ol><li><strong>Otev\u0159en\xED jin\xE9ho prohl\xED\u017Ee\u010De</strong> v telefonu, ...</li><li><strong>Vlo\u017Ete</strong> obsah schr\xE1nky a p\u0159ejd\u011Bte.</li></ol>',
        'modal.opensafari.ical.h': 'Otev\u0159\xEDt Safari',
        'modal.opensafari.ical.text':
          'Bohu\u017Eel m\xE1 iOS n\u011Bjak\xE9 probl\xE9my s generov\xE1n\xEDm a otev\xEDr\xE1n\xEDm souboru kalend\xE1\u0159e mimo Safari.',
        'modal.opensafari.ical.steps':
          '<ol><li><strong>Otev\u0159\xEDt Safari</strong>, ...</li><li><strong>Vlo\u017Ete</strong> obsah schr\xE1nky a p\u0159ejd\u011Bte.</li></ol>',
        'modal.multidate.h': 'Jedn\xE1 se o s\xE9rii ud\xE1lost\xED',
        'modal.multidate.text': 'P\u0159id\xE1vejte jednotliv\xE9 d\xEDly jeden po druh\xE9m:',
        'date.status.cancelled': 'Toto datum bylo zru\u0161eno.',
        'date.status.cancelled.cta': 'Aktualizujte sv\u016Fj kalend\xE1\u0159!',
        'modal.subscribe.yahoo.h': 'P\u0159idat kalend\xE1\u0159 do Yahoo',
        'modal.subscribe.yahoo.text':
          '<ol><li>Otev\u0159ete kalend\xE1\u0159 Yahoo.</li><li>Klikn\u011Bte na kartu "Akce".</li><li>Vyberte mo\u017Enost "Sledovat dal\u0161\xED kalend\xE1\u0159e".</li><li>Vyberte n\xE1zev a vlo\u017Ete adresu URL ze schr\xE1nky do pole URL.</li></ol>',
        'modal.subscribe.yahoo.button': 'Otev\u0159ete kalend\xE1\u0159 Yahoo',
        'modal.crios.google.text':
          'Pokud pou\u017E\xEDv\xE1te aplikaci Google Calendar a nen\xED ji\u017E otev\u0159en\xE1 na pozad\xED, bohu\u017Eel budete pravd\u011Bpodobn\u011B muset tento proces spustit dvakr\xE1t.',
        continue: 'Pokra\u010Dovat',
        cancel: 'Storno',
        expired: 'Platnost vypr\u0161ela',
        recurring: 'Opakuj\xEDc\xED se',
      },
      ja: {
        'label.addtocalendar': '\u30AB\u30EC\u30F3\u30C0\u30FC\u306B\u8FFD\u52A0',
        'label.icalfile': 'iCal\u30D5\u30A1\u30A4\u30EB',
        close: '\u9589\u3058\u308B',
        'modal.button.default': '\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u304F\u3060\u3055\u3044',
        'modal.webview.ical.h': '\u30D6\u30E9\u30A6\u30B6\u3092\u8D77\u52D5\u3059\u308B',
        'modal.webview.ical.text':
          '\u6B8B\u5FF5\u306A\u304C\u3089\u3001\u30A2\u30D7\u30EA\u5185\u30D6\u30E9\u30A6\u30B6\u306F\u3001\u30AB\u30EC\u30F3\u30C0\u30FC\u30D5\u30A1\u30A4\u30EB\u306E\u751F\u6210\u65B9\u6CD5\u306B\u554F\u984C\u304C\u3042\u308A\u307E\u3059\u3002',
        'modal.clipboard.text':
          '\u9B54\u6CD5\u306EURL\u3092\u81EA\u52D5\u7684\u306B\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u306B\u30B3\u30D4\u30FC\u3057\u3066\u3044\u307E\u3059\u3002',
        'modal.webview.ical.steps':
          '<ol><li>\u30B9\u30DE\u30FC\u30C8\u30D5\u30A9\u30F3\u3067\u5225\u306E\u30D6\u30E9\u30A6\u30B6\u3092\u8D77\u52D5\u3059\u308B, ...</li><li>\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u306E\u5185\u5BB9\u3092\u8CBC\u308A\u4ED8\u3051\u3066\u884C\u304F\u3002</li></ol>',
        'modal.opensafari.ical.h': '\u30AA\u30FC\u30D7\u30F3Safari',
        'modal.opensafari.ical.text':
          '\u6B8B\u5FF5\u306A\u304C\u3089\u3001iOS \u3067\u306F\u3001Safari \u306E\u5916\u3067\u30AB\u30EC\u30F3\u30C0\u30FC \u30D5\u30A1\u30A4\u30EB\u3092\u751F\u6210\u3057\u305F\u308A\u958B\u3044\u305F\u308A\u3059\u308B\u969B\u306B\u3044\u304F\u3064\u304B\u306E\u554F\u984C\u304C\u3042\u308A\u307E\u3059\u3002',
        'modal.opensafari.ical.steps':
          '<ol><li><strong>\u30AA\u30FC\u30D7\u30F3Safari</strong>, ...</li><li>\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u306E\u5185\u5BB9\u3092\u8CBC\u308A\u4ED8\u3051\u3066\u884C\u304F\u3002</li></ol>',
        'modal.multidate.h': '\u30A4\u30D9\u30F3\u30C8\u30B7\u30EA\u30FC\u30BA\u3067\u3059',
        'modal.multidate.text':
          '\u500B\u3005\u306E\u30D1\u30FC\u30C4\u3092\u4E00\u3064\u305A\u3064\u8FFD\u52A0\u3057\u3066\u3044\u304F:',
        'date.status.cancelled':
          '\u3053\u306E\u65E5\u306F\u30AD\u30E3\u30F3\u30BB\u30EB\u306B\u306A\u308A\u307E\u3057\u305F\u3002',
        'date.status.cancelled.cta':
          '\u30AB\u30EC\u30F3\u30C0\u30FC\u3092\u66F4\u65B0\u3059\u308B!',
        'modal.subscribe.yahoo.h':
          'Yahoo\u306B\u30AB\u30EC\u30F3\u30C0\u30FC\u3092\u8FFD\u52A0\u3059\u308B',
        'modal.subscribe.yahoo.text':
          '<ol><li>Yahoo\u30AB\u30EC\u30F3\u30C0\u30FC\u3092\u958B\u304F\u3002</li><li>[\u5B9F\u884C] \u30BF\u30D6\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u307E\u3059\u3002</li><li>[\u305D\u306E\u4ED6\u306E\u30AB\u30EC\u30F3\u30C0\u30FC\u306E\u30D5\u30A9\u30ED\u30FC] \u3092\u9078\u629E\u3057\u307E\u3059\u3002</li><li>\u540D\u524D\u3092\u6C7A\u3081\u3066\u3001\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u306B\u3042\u308BURL\u3092URL\u6B04\u306B\u8CBC\u308A\u4ED8\u3051\u307E\u3059\u3002</li></ol>',
        'modal.subscribe.yahoo.button': 'Yahoo\u30AB\u30EC\u30F3\u30C0\u30FC\u3092\u958B\u304F',
        'modal.crios.google.text':
          'Google \u30AB\u30EC\u30F3\u30C0\u30FC\u30A2\u30D7\u30EA\u3092\u4F7F\u7528\u3057\u3066\u304A\u308A\u3001\u305D\u308C\u304C\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\u3067\u65E2\u306B\u958B\u304B\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u3001\u6B8B\u5FF5\u306A\u304C\u3089\u3001\u3053\u306E\u30D7\u30ED\u30BB\u30B9\u30922\u56DE\u958B\u59CB\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u3002',
        continue: '\u7D9A\u3051\u308B',
        cancel: '\u30AD\u30E3\u30F3\u30BB\u30EB',
        expired: '\u671F\u9650\u5207\u308C',
        recurring: '\u7E70\u308A\u8FD4\u3057',
      },
      it: {
        'label.addtocalendar': 'Aggiungi al calendario',
        'label.icalfile': 'File iCal',
        close: 'Chiudere',
        'modal.button.default': 'Clicca su di me',
        'modal.webview.ical.h': 'Aprire il browser',
        'modal.webview.ical.text':
          'Purtroppo i browser in-app hanno problemi con il modo in cui generiamo il file del calendario.',
        'modal.clipboard.text': 'Abbiamo copiato automaticamente un URL magico negli appunti.',
        'modal.webview.ical.steps':
          '<ol><li><strong>Aprire un altro browser</strong> sul cellulare, ...</li><li><strong>Incollare</strong> il contenuto degli appunti e partire.</li></ol>',
        'modal.opensafari.ical.h': 'Aprire Safari',
        'modal.opensafari.ical.text':
          "Sfortunatamente, iOS ha alcuni problemi nella generazione e nell'apertura del file del calendario al di fuori di Safari.",
        'modal.opensafari.ical.steps':
          '<ol><li><strong>Aprire Safari</strong>, ...</li><li><strong>Incollare</strong> il contenuto degli appunti e partire.</li></ol>',
        'modal.multidate.h': 'Questa \xE8 una serie di eventi',
        'modal.multidate.text': 'Aggiungere le singole parti una per una:',
        'date.status.cancelled': 'La data \xE8 stata annullata.',
        'date.status.cancelled.cta': 'Aggiornare il calendario!',
        'modal.subscribe.yahoo.h': 'Aggiungi il calendario a Yahoo',
        'modal.subscribe.yahoo.text': `<ol><li>Aprire il calendario di Yahoo.</li><li>Fare clic sulla scheda "Azioni".</li><li>Selezionare "Segui altri calendari".</li><li>Scegliere un nome e incollare l'URL dagli appunti nel campo URL.</li></ol>`,
        'modal.subscribe.yahoo.button': 'Apri il calendario di Yahoo',
        'modal.crios.google.text':
          "Se stai utilizzando l'applicazione Google Calendar e non \xE8 gi\xE0 aperta in background, purtroppo potrebbe essere necessario avviare questo processo due volte.",
        continue: 'Continuare',
        cancel: 'Annulla',
        expired: 'Scaduta',
        recurring: 'Ricorrente',
      },
      ko: {
        'label.addtocalendar': '\uCE98\uB9B0\uB354\uC5D0 \uCD94\uAC00',
        'label.icalfile': 'iCal \uD30C\uC77C',
        close: '\uB2EB\uB2E4',
        'modal.button.default': '\uD074\uB9AD \uD574\uC8FC\uC138\uC694',
        'modal.webview.ical.h': '\uBE0C\uB77C\uC6B0\uC800 \uC5F4\uAE30',
        'modal.webview.ical.text':
          '\uBD88\uD589\uD788\uB3C4 \uC778\uC571 \uBE0C\uB77C\uC6B0\uC800\uB294 \uCE98\uB9B0\uB354 \uD30C\uC77C\uC744 \uC0DD\uC131\uD558\uB294 \uBC29\uC2DD\uC5D0 \uBB38\uC81C\uAC00 \uC788\uC2B5\uB2C8\uB2E4.',
        'modal.clipboard.text':
          '\uB9E4\uC9C1 URL\uC744 \uD074\uB9BD\uBCF4\uB4DC\uC5D0 \uC790\uB3D9\uC73C\uB85C \uBCF5\uC0AC\uD588\uC2B5\uB2C8\uB2E4.',
        'modal.webview.ical.steps':
          '<ol><li>\uD734\uB300\uC804\uD654\uC5D0\uC11C \uB2E4\uB978 \uBE0C\uB77C\uC6B0\uC800 \uC5F4\uAE30, ...</li><li>\uD074\uB9BD\uBCF4\uB4DC \uB0B4\uC6A9\uC744 \uBD99\uC5EC\uB123\uACE0 \uC774\uB3D9\uD569\uB2C8\uB2E4.</li></ol>',
        'modal.opensafari.ical.h': 'Safari \uC5F4\uAE30',
        'modal.opensafari.ical.text':
          '\uC548\uD0C0\uAE5D\uAC8C\uB3C4 iOS\uC5D0\uB294 Safari \uC678\uBD80\uC5D0\uC11C \uCE98\uB9B0\uB354 \uD30C\uC77C\uC744 \uC0DD\uC131\uD558\uACE0 \uC5EC\uB294 \uB370 \uBA87 \uAC00\uC9C0 \uBB38\uC81C\uAC00 \uC788\uC2B5\uB2C8\uB2E4.',
        'modal.opensafari.ical.steps':
          '<ol><li><strong>Safari \uC5F4\uAE30</strong>, ...</li><li>\uD074\uB9BD\uBCF4\uB4DC \uB0B4\uC6A9\uC744 \uBD99\uC5EC\uB123\uACE0 \uC774\uB3D9\uD569\uB2C8\uB2E4.</li></ol>',
        'modal.multidate.h': '\uC774\uBCA4\uD2B8 \uC2DC\uB9AC\uC988\uC785\uB2C8\uB2E4',
        'modal.multidate.text': '\uAC1C\uBCC4 \uBD80\uD488\uC744 \uD558\uB098\uC529 \uCD94\uAC00:',
        'date.status.cancelled':
          '\uC774 \uB0A0\uC9DC\uB294 \uCDE8\uC18C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.',
        'date.status.cancelled.cta':
          '\uCE98\uB9B0\uB354\uB97C \uC5C5\uB370\uC774\uD2B8\uD558\uC138\uC694!',
        'modal.subscribe.yahoo.h': 'Yahoo\uC5D0 \uCE98\uB9B0\uB354 \uCD94\uAC00',
        'modal.subscribe.yahoo.text':
          '<ol><li>Yahoo \uCE98\uB9B0\uB354\uB97C \uC5FD\uB2C8\uB2E4.</li><li>"\uB3D9\uC791" \uD0ED\uC744 \uD074\uB9AD\uD569\uB2C8\uB2E4.</li><li>"\uB2E4\uB978 \uC77C\uC815\uAD00\uB9AC \uD314\uB85C\uC6B0"\uB97C \uC120\uD0DD\uD569\uB2C8\uB2E4.</li><li>\uC774\uB984\uC744 \uC120\uD0DD\uD558\uACE0 \uD074\uB9BD\uBCF4\uB4DC\uC758 URL\uC744 URL \uD544\uB4DC\uC5D0 \uBD99\uC5EC\uB123\uC2B5\uB2C8\uB2E4.</li></ol>',
        'modal.subscribe.yahoo.button': '\uC57C\uD6C4 \uCE98\uB9B0\uB354 \uC5F4\uAE30',
        'modal.crios.google.text':
          'Google \uCE98\uB9B0\uB354 \uC571\uC744 \uC0AC\uC6A9\uD558\uACE0 \uC788\uACE0 \uC774\uBBF8 \uBC31\uADF8\uB77C\uC6B4\uB4DC\uC5D0\uC11C \uC5F4\uB824 \uC788\uC9C0 \uC54A\uB2E4\uBA74, \uC548\uD0C0\uAE5D\uAC8C\uB3C4 \uC774 \uD504\uB85C\uC138\uC2A4\uB97C \uB450 \uBC88 \uC2DC\uC791\uD574\uC57C \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.',
        continue: '\uACC4\uC18D\uD558\uB2E4',
        cancel: '\uCDE8\uC18C',
        expired: '\uB9CC\uB8CC\uB428',
        recurring: '\uB418\uD480\uC774',
      },
      vi: {
        'label.addtocalendar': 'Th\xEAm v\xE0o L\u1ECBch',
        'label.icalfile': 'T\u1EC7p iCal',
        close: '\u0110\xF3ng',
        'modal.button.default': 'Nh\u1EA5p v\xE0o \u0111\xE2y',
        'modal.webview.ical.h': 'M\u1EDF tr\xECnh duy\u1EC7t c\u1EE7a b\u1EA1n',
        'modal.webview.ical.text':
          'R\u1EA5t ti\u1EBFc, c\xE1c tr\xECnh duy\u1EC7t trong \u1EE9ng d\u1EE5ng g\u1EB7p s\u1EF1 c\u1ED1 v\u1EDBi c\xE1ch ch\xFAng t\xF4i t\u1EA1o t\u1EC7p l\u1ECBch.',
        'modal.clipboard.text':
          'Ch\xFAng t\xF4i \u0111\xE3 t\u1EF1 \u0111\u1ED9ng sao ch\xE9p m\u1ED9t URL ma thu\u1EADt v\xE0o khay nh\u1EDB t\u1EA1m c\u1EE7a b\u1EA1n.',
        'modal.webview.ical.steps':
          '<ol><li><strong> M\u1EDF tr\xECnh duy\u1EC7t kh\xE1c </strong> tr\xEAn \u0111i\u1EC7n tho\u1EA1i c\u1EE7a b\u1EA1n, ...</li><li><strong> D\xE1n </strong> n\u1ED9i dung khay nh\u1EDB t\u1EA1m v\xE0 b\u1EAFt \u0111\u1EA7u.</li></ol>',
        'modal.opensafari.ical.h': 'M\u1EDF Safari',
        'modal.opensafari.ical.text':
          'R\u1EA5t ti\u1EBFc, iOS g\u1EB7p m\u1ED9t s\u1ED1 s\u1EF1 c\u1ED1 khi t\u1EA1o v\xE0 m\u1EDF t\u1EC7p l\u1ECBch b\xEAn ngo\xE0i Safari.',
        'modal.opensafari.ical.steps':
          '<ol><li><strong>M\u1EDF Safari</strong>, ...</li><li><strong> D\xE1n </strong> n\u1ED9i dung khay nh\u1EDB t\u1EA1m v\xE0 b\u1EAFt \u0111\u1EA7u.</li></ol>',
        'modal.multidate.h': '\u0110\xE2y l\xE0 m\u1ED9t chu\u1ED7i s\u1EF1 ki\u1EC7n',
        'modal.multidate.text': 'Th\xEAm t\u1EEBng ph\u1EA7n ri\xEAng l\u1EBB m\u1ED9t:',
        'date.status.cancelled': 'Ng\xE0y n\xE0y \u0111\xE3 b\u1ECB h\u1EE7y.',
        'date.status.cancelled.cta': 'C\u1EADp nh\u1EADt l\u1ECBch c\u1EE7a b\u1EA1n!',
        'modal.subscribe.yahoo.h': 'Th\xEAm l\u1ECBch v\xE0o Yahoo',
        'modal.subscribe.yahoo.text':
          '<ol><li>M\u1EDF L\u1ECBch Yahoo.</li><li>Nh\u1EA5p v\xE0o tab "H\xE0nh \u0111\u1ED9ng".</li><li>Ch\u1ECDn "Theo d\xF5i c\xE1c L\u1ECBch kh\xE1c".</li><li>Ch\u1ECDn t\xEAn v\xE0 d\xE1n URL t\u1EEB khay nh\u1EDB t\u1EA1m c\u1EE7a b\u1EA1n v\xE0o tr\u01B0\u1EDDng URL.</li></ol>',
        'modal.subscribe.yahoo.button': 'M\u1EDF l\u1ECBch Yahoo',
        'modal.crios.google.text':
          'N\u1EBFu b\u1EA1n \u0111ang s\u1EED d\u1EE5ng \u1EE9ng d\u1EE5ng Google Calendar v\xE0 n\xF3 ch\u01B0a m\u1EDF trong n\u1EC1n, th\xEC r\u1EA5t ti\u1EBFc, b\u1EA1n c\xF3 th\u1EC3 c\u1EA7n ph\u1EA3i b\u1EAFt \u0111\u1EA7u quy tr\xECnh n\xE0y hai l\u1EA7n.',
        continue: 'Ti\u1EBFp t\u1EE5c',
        cancel: 'H\u1EE7y b\u1ECF',
        expired: 'H\u1EBFt h\u1EA1n',
        recurring: '\u0110\u1ECBnh k\u1EF3',
      },
      ro: {
        'label.addtocalendar': 'Adauga In Calendar',
        'label.icalfile': 'Fisier iCal',
        close: 'Inchide',
        'modal.button.default': 'Apasa-ma',
        'modal.webview.ical.h': 'Deschide browserul',
        'modal.webview.ical.text':
          'Din pacate, browserele din aplicatie au probleme cu generarea de fisiere pentru calendar.',
        'modal.clipboard.text': 'Ti-am copiat automat un URL magic in clipboard',
        'modal.webview.ical.steps':
          '<ol><li><strong>Deschide un alt browser</strong> pe telefonul tau, ...</li><li><strong>Lipeste</strong> continutul din clipboard si continua.</li></ol>',
        'modal.opensafari.ical.h': 'Deschide Safari',
        'modal.opensafari.ical.text':
          'Din p\u0103cate, iOS are unele probleme la generarea \u0219i deschiderea fi\u0219ierului calendar \xEEn afara Safari.',
        'modal.opensafari.ical.steps':
          '<ol><li><strong>Deschides Safari</strong>, ...</li><li><strong>Lipeste</strong> continutul din clipboard si continua.</li></ol>',
        'modal.multidate.h': 'Aceasta este o serie de evenimente',
        'modal.multidate.text': 'Adauga evenimentele individuale una cate una:',
        'date.status.cancelled': 'Aceasta data a fost anulata.',
        'date.status.cancelled.cta': 'Te rugam sa-ti updatezi calendarul!',
        'modal.subscribe.yahoo.h': 'Adauga Calendar in Yahoo',
        'modal.subscribe.yahoo.text':
          '<ol><li>Deschide acum calendarul Yahoo.</li><li>Apasa pe tab-ul de "Actiuni".</li><li>Apasa "Urmareste alte calendare".</li><li>Seteaza un nume si lipeste continutul din clipboard in casuta cu url.</li></ol>',
        'modal.subscribe.yahoo.button': 'Deschide\u021Bi calendarul Yahoo',
        'modal.crios.google.text':
          'Dac\u0103 utiliza\u021Bi aplica\u021Bia Google Calendar \u0219i aceasta nu este deja deschis\u0103 \xEEn fundal, din p\u0103cate, s-ar putea s\u0103 fie necesar s\u0103 \xEEncepe\u021Bi acest proces de dou\u0103 ori.',
        continue: 'Continua',
        cancel: 'Anuleaza',
        expired: 'Expirat',
        recurring: 'Recurente',
      },
      fa: {
        'label.addtocalendar':
          '\u0627\u0641\u0632\u0648\u062F\u0646 \u0628\u0647 \u062A\u0642\u0648\u06CC\u0645',
        'label.icalfile': '\u067E\u0631\u0648\u0646\u062F\u0647 iCal',
        close: '\u0628\u0633\u062A\u0646',
        'modal.button.default':
          '\u0627\u06CC\u0646\u062C\u0627 \u06A9\u0644\u06CC\u06A9 \u06A9\u0646\u06CC\u062F',
        'modal.webview.ical.h':
          '\u0645\u0631\u0648\u0631\u06AF\u0631 \u062E\u0648\u062F \u0631\u0627 \u0628\u0627\u0632 \u06A9\u0646\u06CC\u062F',
        'modal.webview.ical.text':
          '\u0645\u062A\u0627\u0633\u0641\u0627\u0646\u0647\u060C \u0645\u0631\u0648\u0631\u06AF\u0631\u0647\u0627\u06CC \u062F\u0631\u0648\u0646 \u0628\u0631\u0646\u0627\u0645\u0647\u200C\u0627\u06CC \u0628\u0627 \u0646\u062D\u0648\u0647 \u062A\u0648\u0644\u06CC\u062F \u067E\u0631\u0648\u0646\u062F\u0647 \u062A\u0642\u0648\u06CC\u0645 \u0645\u0634\u06A9\u0644 \u062F\u0627\u0631\u0646\u062F.',
        'modal.clipboard.text':
          '\u0645\u0627 \u0628\u0647 \u0637\u0648\u0631 \u062E\u0648\u062F\u06A9\u0627\u0631 \u06CC\u06A9 \u0646\u0634\u0627\u0646\u06CC \u0627\u06CC\u0646\u062A\u0631\u0646\u062A\u06CC \u062C\u0627\u062F\u0648\u06CC\u06CC \u0631\u0627 \u062F\u0631 \u06A9\u0644\u06CC\u067E\u200C\u0628\u0648\u0631\u062F \u0634\u0645\u0627 \u06A9\u067E\u06CC \u06A9\u0631\u062F\u06CC\u0645.',
        'modal.webview.ical.steps':
          '<ol><li><strong>\u0645\u0631\u0648\u0631\u06AF\u0631 \u062F\u06CC\u06AF\u0631\u06CC \u0631\u0627 </strong> \u062F\u0631 \u06AF\u0648\u0634\u06CC \u062E\u0648\u062F \u0628\u0627\u0632 \u06A9\u0646\u06CC\u062F\u060C ...</li><li>\u0645\u062D\u062A\u0648\u0627\u06CC \u06A9\u0644\u06CC\u067E\u200C\u0628\u0648\u0631\u062F \u0631\u0627 <strong>Paste</strong> \u06A9\u0646\u06CC\u062F \u0648 Go \u0631\u0627 \u0628\u0632\u0646\u06CC\u062F \u06A9\u0647 \u0622\u062F\u0631\u0633 \u0628\u0627\u0632 \u0634\u0648\u062F.</li></ol>',
        'modal.opensafari.ical.h':
          '\u0633\u0627\u0641\u0627\u0631\u06CC \u0631\u0627 \u0628\u0627\u0632 \u06A9\u0646\u06CC\u062F',
        'modal.opensafari.ical.text':
          '\u0645\u062A\u0623\u0633\u0641\u0627\u0646\u0647 iOS \u062F\u0631 \u062A\u0648\u0644\u06CC\u062F \u0648 \u0628\u0627\u0632 \u06A9\u0631\u062F\u0646 \u0641\u0627\u06CC\u0644 \u062A\u0642\u0648\u06CC\u0645 \u062E\u0627\u0631\u062C \u0627\u0632 \u0633\u0627\u0641\u0627\u0631\u06CC \u0645\u0634\u06A9\u0644\u0627\u062A\u06CC \u062F\u0627\u0631\u062F.',
        'modal.opensafari.ical.steps':
          '<ol><li><strong>\u0633\u0627\u0641\u0627\u0631\u06CC \u0631\u0627 \u0628\u0627\u0632 \u06A9\u0646\u06CC\u062F</strong>\u060C ...</li><li>\u0645\u062D\u062A\u0648\u0627\u06CC \u06A9\u0644\u06CC\u067E\u200C\u0628\u0648\u0631\u062F \u0631\u0627 <strong>Paste</strong> \u06A9\u0646\u06CC\u062F \u0648 Go \u0631\u0627 \u0628\u0632\u0646\u06CC\u062F \u06A9\u0647 \u0622\u062F\u0631\u0633 \u0628\u0627\u0632 \u0634\u0648\u062F.</li></ol>',
        'modal.multidate.h':
          '\u0627\u06CC\u0646 \u06CC\u06A9 \u0633\u0631\u06CC \u0631\u0648\u06CC\u062F\u0627\u062F \u0627\u0633\u062A',
        'modal.multidate.text':
          '\u0631\u0648\u06CC\u062F\u0627\u062F\u0647\u0627\u06CC \u0634\u062E\u0635\u06CC \u0631\u0627 \u06CC\u06A9\u06CC \u06CC\u06A9\u06CC \u0627\u0636\u0627\u0641\u0647 \u06A9\u0646\u06CC\u062F:',
        'date.status.cancelled':
          '\u0627\u06CC\u0646 \u062A\u0627\u0631\u06CC\u062E \u0644\u063A\u0648 \u0634\u062F',
        'date.status.cancelled.cta':
          '\u0644\u0637\u0641\u0627 \u062A\u0642\u0648\u06CC\u0645 \u062E\u0648\u062F \u0631\u0627 \u0628\u0647\u200C\u0631\u0648\u0632 \u06A9\u0646\u06CC\u062F!',
        'modal.subscribe.yahoo.h':
          '\u0627\u0641\u0632\u0648\u062F\u0646 \u062A\u0642\u0648\u06CC\u0645 \u0628\u0647 \u06CC\u0627\u0647\u0648',
        'modal.subscribe.yahoo.text':
          '<ol><li>\u0627\u06A9\u0646\u0648\u0646 \u062A\u0642\u0648\u06CC\u0645 \u06CC\u0627\u0647\u0648 \u0631\u0627 \u0628\u0627\u0632 \u06A9\u0646\u06CC\u062F.</li><li>\u0631\u0648\u06CC \u0632\u0628\u0627\u0646\u0647 \xABActions\xBB \u06A9\u0644\u06CC\u06A9 \u06A9\u0646\u06CC\u062F.</li><li>\u0631\u0648\u06CC \xABFollow Other Calendars\xBB \u0636\u0631\u0628\u0647 \u0628\u0632\u0646\u06CC\u062F.</li><li>\u06CC\u06A9 \u0646\u0627\u0645 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F \u0648 \u0645\u062D\u062A\u0648\u0627\u06CC \u06A9\u0644\u06CC\u067E\u200C\u0628\u0648\u0631\u062F \u0631\u0627 \u062F\u0631 \u0642\u0633\u0645\u062A url \u0642\u0631\u0627\u0631 \u062F\u0647\u06CC\u062F.</li></ol>',
        'modal.subscribe.yahoo.button':
          '\u062A\u0642\u0648\u06CC\u0645 \u06CC\u0627\u0647\u0648 \u0631\u0627 \u0628\u0627\u0632 \u06A9\u0646\u06CC\u062F',
        'modal.crios.google.text':
          '\u0627\u06AF\u0631 \u0627\u0632 \u0628\u0631\u0646\u0627\u0645\u0647 Google Calendar \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0645\u06CC\u200C\u06A9\u0646\u06CC\u062F \u0648 \u0622\u0646 \u062F\u0631 \u067E\u0633\u200C\u0632\u0645\u06CC\u0646\u0647 \u0628\u0627\u0632 \u0646\u0634\u062F\u0647 \u0627\u0633\u062A\u060C \u0645\u062A\u0623\u0633\u0641\u0627\u0646\u0647 \u0627\u062D\u062A\u0645\u0627\u0644\u0627\u064B \u0646\u06CC\u0627\u0632 \u0628\u0647 \u062F\u0648 \u0628\u0627\u0631 \u0634\u0631\u0648\u0639 \u0627\u06CC\u0646 \u0641\u0631\u0622\u06CC\u0646\u062F \u062F\u0627\u0631\u06CC\u062F.',
        continue: '\u0627\u062F\u0627\u0645\u0647 \u062F\u0627\u062F\u0646',
        cancel: '\u0644\u063A\u0648',
        expired: '\u0645\u0646\u0642\u0636\u06CC \u0634\u062F\u0647',
      },
      et: {
        'label.addtocalendar': 'Lisa kalendrisse',
        'label.icalfile': 'iCal fail',
        close: 'Sulge',
        'modal.button.default': 'Kliki siia',
        'modal.webview.ical.h': 'Ava oma veebilehitseja',
        'modal.webview.ical.text':
          'Kahjuks on rakendusesisestel veebilehitsejatel probleeme kalendrifailide loomisega.',
        'modal.clipboard.text':
          'Kalendri veebi aadress on automaatselt kopeeritud sinu l\xF5ikelauale.',
        'modal.webview.ical.steps':
          '<ol><li><strong>Ava teine veebilehitseja</strong> oma telefonis, ...</li><li><strong>Kleebi</strong> l\xF5ikelaua sisu ning mine sellele lehele.</li></ol>',
        'modal.opensafari.ical.h': 'Ava Safari',
        'modal.opensafari.ical.text':
          'Kahjuks on iOS-il probleeme kalendrifaili genereerimise ja avamisega v\xE4ljaspool Safarit.',
        'modal.opensafari.ical.steps':
          '<ol><li><strong>Ava Safari</strong>, ...</li><li><strong>Kleebi</strong> l\xF5ikelaua sisu ning mine sellele lehele.</li></ol>',
        'modal.multidate.h': 'See on s\xFCndmuste seeria',
        'modal.multidate.text': 'Ava \xFCksikud s\xFCndmused \xFCkshaaval:',
        'date.status.cancelled': 'See kuup\xE4ev on t\xFChistatud.',
        'date.status.cancelled.cta': 'Palun uuenda oma kalendrit!',
        'modal.subscribe.yahoo.h': 'Lisa kalender Yahoo-sse',
        'modal.subscribe.yahoo.text':
          '<ol><li>Ava oma Yahoo kalender.</li><li>Kliki "Actions" vahelehte.</li><li>Vajuta "Follow Other Calendars".</li><li>M\xE4\xE4ra nimi ning lisa l\xF5ikelaua sisu URL (veebi aadressi) v\xE4ljale.</li></ol>',
        'modal.subscribe.yahoo.button': 'Avage Yahoo kalender',
        'modal.crios.google.text':
          'Kui kasutate rakendust Google Calendar ja see pole taustal juba avatud, siis kahjuks v\xF5ib olla vajalik selle protsessi kahe korra k\xE4ivitamine.',
        continue: 'J\xE4tkama',
        cancel: 'T\xFChista',
        expired: 'Aegunud',
      },
    },
    xa = Object.keys(ze);
  function v(e, t) {
    return t.customLabels != null && t.customLabels[`${e}`] != null && t.customLabels[`${e}`] != ''
      ? O(t.customLabels[`${e}`])
      : va(e, t.language);
  }
  function va(e, t) {
    return t || (t = 'en'), ze[`${t}`][`${e}`] ? ze[`${t}`][`${e}`] : e;
  }
  var Ae = !1,
    ie = 0,
    J = [],
    Ee =
      '<div class="atcb-initialized" style="display:none;position:relative;width:fit-content;"></div>';
  if (B()) {
    class e extends HTMLElement {
      constructor() {
        super();
        let a = document.createElement('template');
        (a.innerHTML = Ee),
          this.attachShadow({ mode: 'open', delegateFocus: !0 }),
          this.shadowRoot.append(a.content.cloneNode(!0)),
          (this.loaded = !1),
          (this.initialized = !1),
          (this.data = {}),
          (this.error = !1);
      }
      async connectedCallback() {
        if (
          ((this.debug = this.hasAttribute('debug')),
          this.getAttribute('proKey') != null &&
            this.getAttribute('proKey') != '' &&
            (this.data = dt(this.getAttribute('proKey'))),
          this.data.name == null || this.data.name == '')
        )
          try {
            this.data = Ke(this);
          } catch (a) {
            this.debug && he(this.shadowRoot, a);
            return;
          } finally {
            (this.data.proKey = ''), (this.loaded = !0);
          }
        this.initButton();
      }
      disconnectedCallback() {
        Qe(this.shadowRoot, this.data),
          this.debug &&
            console.log('Add to Calendar Button "' + this.data.identifier + '" destroyed'),
          document.querySelectorAll('add-to-calendar-button').length == 0 && (ie = 0);
      }
      static get observedAttributes() {
        let a = ['instance'];
        return ye.map((n) => n.toLowerCase()).concat(a);
      }
      attributeChangedCallback(a, n, o) {
        if ((this.data.proKey != null && this.data.proKey != '') || !this.loaded) return;
        this.debug &&
          this.initialized &&
          console.log(`${a}'s value has been changed from ${n} to ${o}`),
          Qe(this.shadowRoot, this.data),
          (this.data = {}),
          this.shadowRoot.querySelector('.atcb-initialized').remove();
        let r = document.createElement('template');
        (r.innerHTML = Ee), this.shadowRoot.append(r.content.cloneNode(!0));
        try {
          this.data = Ke(this);
        } catch (i) {
          this.debug && he(this.shadowRoot, i);
          return;
        }
        this.initButton();
      }
      initButton() {
        this.initialized || ((this.initialized = !0), (ie = ie + 1)),
          this.identifier && this.identifier != ''
            ? (this.data.identifier = this.identifier)
            : (this.data.identifier &&
                this.data.identifier != '' &&
                (/^[\w\-_]+$/.test(this.data.identifier)
                  ? (this.data.identifier = 'atcb-btn-' + this.data.identifier)
                  : ((this.data.identifier = ''),
                    this.debug &&
                      console.warn(
                        'Add to Calendar Button generation: identifier invalid - using auto numbers instead'
                      ))),
              (this.data.identifier == null || this.data.identifier == '') &&
                (this.data.identifier = 'atcb-btn-' + ie),
              (this.identifier = this.data.identifier)),
          this.setAttribute('atcb-button-id', this.data.identifier);
        try {
          (this.style.visibility = 'visible'),
            (this.style.opacity = '1'),
            (this.style.position = 'relative'),
            ya(this.shadowRoot, this.data, this.debug);
        } catch (a) {
          this.debug && he(this.shadowRoot, a);
          return;
        }
      }
    }
    customElements.get('add-to-calendar-button') ||
      customElements.define('add-to-calendar-button', e);
  }
  function Ke(e) {
    let t = {};
    t.hideBranding = !0;
    for (let a = 0; a < ye.length; a++) {
      let n = ye[`${a}`];
      if (e.hasAttribute(`${n}`)) {
        let r = P(e.getAttribute(`${n}`).replace(/(\\r\\n|\\n|\\r)/g, ''), !1),
          i;
        if (ke.includes(n)) r == '' ? (i = !0) : (i = r === 'true');
        else if (Tt.includes(n)) i = JSON.parse(r);
        else if (zt.includes(n)) {
          let l = (function () {
            return r.substring(0, 1) != '[' ? '[' + r + ']' : r;
          })();
          i = JSON.parse(l);
        } else if (At.includes(n)) {
          let l = (function () {
            let c = r;
            return (
              (r.includes('"') || r.includes("'")) &&
                (r.includes('[')
                  ? (c = r.substring(2, r.length - 2))
                  : (c = r.substring(1, r.length - 1))),
              r.includes('|') || (c = c.replace(/\s/g, '')),
              c
            );
          })();
          l.includes("','") ? (i = l.split("','")) : (i = l.split('","'));
        } else i = r;
        t[`${n}`] = i;
      }
      let o = e.getAttribute('identifier');
      o != null && o != '' && (t.identifier = P(o.replace(/(\\r\\n|\\n|\\r)/g, ''), !1));
    }
    if (!Xe(t)) {
      let a = e.innerHTML,
        n = (function () {
          if (a != '')
            try {
              return JSON.parse(P(a.replace(/(\\r\\n|\\n|\\r)/g, ''), !1));
            } catch (o) {
              throw new Error(
                `Add to Calendar Button generation failed: JSON content provided, but badly formatted (in doubt, try some tool like https://jsonformatter.org/ to validate).\r
Error message: ` + o
              );
            }
          return '';
        })();
      if (n.length == 0)
        throw (
          (console.error(t.validationError),
          new Error(
            'Add to Calendar Button generation failed: no data provided or missing required fields - see console logs for details'
          ))
        );
      t = n;
    }
    return t;
  }
  function ya(e, t, a = !1) {
    if (((t = Je(t)), et(t))) {
      let n = e.querySelector('.atcb-initialized');
      de(e, t),
        n.setAttribute('lang', t.language),
        Me(e, n, t.buttonStyle, t.inline, t.buttonsList, t.customCss),
        ct(t),
        bt(e, t),
        st(t.proKey, a),
        t.hidden ||
          (aa(e, n, t, a),
          !t.hideRichData &&
            t.name &&
            t.dates[0].location &&
            t.dates[0].startDate &&
            ia(t, e.host)),
        S('initialization', t.identifier, t.identifier);
    } else if (a) throw (console.error(t.validationError), new Error(t.validationError));
  }
  function Qe(e, t) {
    j(e), za(t.identifier);
    let a = document.getElementById('atcb-schema-' + t.identifier);
    a && a.remove(),
      Array.from(e.querySelectorAll('.atcb-debug-error-msg'))
        .concat(Array.from(e.querySelectorAll('style')))
        .concat(Array.from(e.querySelectorAll('.atcb-button-wrapper')))
        .forEach((n) => n.remove()),
      delete z[`${t.identifier}`];
  }
  function de(e, t) {
    e.host.classList.remove('atcb-dark', 'atcb-light', 'atcb-bodyScheme');
    let a = (function () {
      return t.lightMode == 'bodyScheme'
        ? document.body.classList.contains('atcb-dark') ||
          document.documentElement.classList.contains('atcb-dark')
          ? 'dark'
          : 'light'
        : t.lightMode;
    })();
    e.host.classList.add('atcb-' + a);
  }
  function Me(e, t = null, a = '', n = !1, o = !1, r = '') {
    let i = /[`'"()[\]{}<>\s]/,
      l = (function () {
        if (!e.host.hasAttribute('cspnonce')) return null;
        if (i.test(e.host.getAttribute('cspnonce')))
          throw new Error('cspnonce input contains forbidden characters.');
        return e.host.getAttribute('cspnonce');
      })();
    if (!document.getElementById('atcb-global-style')) {
      let c = document.createElement('style');
      c.id = 'atcb-global-style';
      let s = window.innerWidth - document.documentElement.clientWidth;
      (c.innerText =
        '.atcb-modal-no-scroll { overflow-y: hidden !important; -webkit-overflow-scrolling: touch; } body.atcb-modal-no-scroll { padding-right: ' +
        s +
        'px; }'),
        l && c.setAttribute('nonce', l),
        document.head.append(c);
    }
    if (r != '' && a == 'custom') {
      let c = document.createElement('link');
      if (
        (c.setAttribute('rel', 'stylesheet'),
        c.setAttribute('type', 'text/css'),
        c.setAttribute('href', r),
        l && c.setAttribute('nonce', l),
        t == null)
      )
        (e.host.style.display = 'none'), We(c, e, e.host);
      else {
        let s = document.createElement('div');
        (s.style.cssText =
          'width: 150px; height: 40px; border-radius: 200px; background-color: #777; opacity: .3;'),
          e.prepend(s),
          We(c, e, t, s, n, o);
      }
      return;
    }
    if (a != 'none' && He[`${a}`] != null) {
      let c = document.createElement('style');
      l && c.setAttribute('nonce', l);
      let s = (function () {
          return e.host.hasAttribute('styleLight')
            ? ':host { ' +
                P(e.host.getAttribute('styleLight').replace(/(\\r\\n|\\n|\\r)/g, ''), !1) +
                ' }'
            : '';
        })(),
        g = (function () {
          return e.host.hasAttribute('styleDark')
            ? ':host(.atcb-dark), :host-context(html.atcb-dark):host(.atcb-bodyScheme), :host-context(body.atcb-dark):host(.atcb-bodyScheme) { ' +
                P(e.host.getAttribute('styleDark').replace(/(\\r\\n|\\n|\\r)/g, ''), !1) +
                ' }'
            : '';
        })();
      (c.innerText = He[`${a}`] + s + g), e.prepend(c);
    }
    t != null &&
      (n
        ? (t.style.display = 'inline-block')
        : o
        ? ((t.style.display = 'flex'),
          (t.style.flexWrap = 'wrap'),
          (t.style.justifyContent = 'center'))
        : (t.style.display = 'block'));
  }
  async function We(e, t, a, n = null, o = !1, r = !1) {
    t.prepend(e),
      await new Promise((i) => {
        e.onload = i;
      }),
      n != null && n.remove(),
      o
        ? (a.style.display = 'inline-block')
        : r
        ? ((a.style.display = 'flex'),
          (a.style.flexWrap = 'wrap'),
          (a.style.justifyContent = 'center'))
        : (a.style.display = 'block');
  }
  function he(e, t) {
    if (e.querySelector('.atcb-debug-error-msg')) return;
    let a = document.createElement('div');
    a.classList.add('atcb-debug-error-msg'),
      (a.style.cssText =
        'color: #bf2e2e; font-size: 12px; font-weight: bold; padding: 12px 15px; border: 2px solid #bf2e2e; max-width: 180px; border-radius: 13px;'),
      (a.textContent = t),
      e.append(a);
  }
  function _e(e, t, a = !1) {
    if (!B()) return;
    if (
      ((e = P(e)),
      (e.hideBranding = !0),
      e.proKey != null && e.proKey != '' && (e = dt(e.proKey)),
      (e.debug = e.debug === 'true'),
      !Xe(e))
    ) {
      console.error(e.validationError);
      return;
    }
    e = Je(e);
    let n = document.body;
    if (
      ((e.trigger = 'click'),
      t
        ? ((n = t),
          t.id != null && t.id != ''
            ? (e.identifier = t.id)
            : (e.identifier != null && e.identifier != '' && /^[\w\-_]+$/.test(e.identifier)
                ? (e.identifier = 'atcb-btn-' + e.identifier)
                : (e.identifier = 'atcb-btn-custom'),
              (t.id = e.identifier)),
          (e.listStyle === 'dropdown' ||
            e.listStyle === 'dropdown-static' ||
            e.listStyle === 'dropup-static') &&
            (e.listStyle = 'modal'))
        : ((e.identifier = 'atcb-btn-custom'), (e.listStyle = 'modal')),
      !et(e))
    ) {
      console.error(e.validationError);
      return;
    }
    let o = (function () {
        return e.options.length === 1;
      })(),
      r = document.getElementById('atcb-customTrigger-' + e.identifier + '-host');
    if (
      (r && (j(r.shadowRoot, !1), z[`${z.active}`] && delete z[`${z.active}`], r.remove()),
      S('initialization', e.identifier, e.identifier),
      !e.blockInteraction)
    ) {
      let i = null;
      if (
        !o ||
        (e.options[0] !== 'apple' && e.options[0] !== 'ical') ||
        (e.dates && e.dates.length > 1 && e.dates.organizer) ||
        G()
      ) {
        if (
          ((i = document.createElement('div')),
          (i.id = 'atcb-customTrigger-' + e.identifier + '-host'),
          n == document.body ? document.body.append(i) : n.after(i),
          t)
        ) {
          let s = t.getBoundingClientRect();
          (i.style.position = 'relative'),
            (i.style.left = -s.width + 'px'),
            (i.style.top = s.height + 'px');
        }
        i.setAttribute('atcb-button-id', e.identifier),
          i.attachShadow({ mode: 'open', delegateFocus: !0 });
        let l = document.createElement('template');
        (l.innerHTML = Ee), i.shadowRoot.append(l.content.cloneNode(!0));
        let c = i.shadowRoot.querySelector('.atcb-initialized');
        ct(e),
          de(i.shadowRoot, e),
          i.shadowRoot.querySelector('.atcb-initialized').setAttribute('lang', e.language),
          Me(i.shadowRoot, c, e.buttonStyle, !1, !1, e.customCss),
          bt(i.shadowRoot, e);
      }
      o
        ? (N(i.shadowRoot, e.options[0], e, 'all', a),
          S('openSingletonLink', e.identifier, e.identifier))
        : L(i.shadowRoot, 'open', e, t, a);
    }
    return (
      st(e.proKey, e.debug),
      e.debug && console.log('Add to Calendar Button "' + e.identifier + '" triggered'),
      e.identifier
    );
  }
  function ct(e) {
    let t = [];
    for (let a = 0; a < e.options.length; a++) {
      t[e.options[`${a}`]] = [];
      for (let n = 1; n <= e.dates.length; n++) t[e.options[`${a}`]].push(0);
    }
    z[e.identifier] = t;
  }
  function st(e = '', t = !1) {
    if (!Ae) {
      let a = (function () {
        return t ? ' (version ' + Ve + ')' : '';
      })();
      e != ''
        ? console.log(
            'Add to Calendar PRO script initialized' + a + ' | https://add-to-calendar-pro.com'
          )
        : console.log(
            `%c
Add to Calendar Button script initialized` +
              a +
              `
see https://add-to-calendar-button.com for details.
`,
            'font-weight: bold;'
          ),
        (Ae = !0);
    }
  }
  function dt(e) {
    let t = {};
    return (
      e != null &&
        e != '' &&
        ((t.proKey = e),
        (t.identifier = e),
        console.error('Add to Calendar Button proKey invalid! Falling back to local data...')),
      t
    );
  }
  function bt(e, t) {
    B() &&
      (t.lightMode == 'bodyScheme' &&
        ((J[t.identifier] = new MutationObserver(function (a) {
          a.forEach((n) => {
            n.attributeName === 'class' && de(e, t);
          });
        })),
        J[t.identifier].observe(document.documentElement, { attributes: !0 }),
        J[t.identifier].observe(document.body, { attributes: !0 })),
      Ae ||
        (document.addEventListener('keyup', ka),
        document.addEventListener('keydown', wa),
        window.addEventListener('resize', Ta)));
  }
  function ka(e) {
    let t = (function () {
      let a = document.querySelector('[atcb-button-id="' + z.active + '"]');
      return a ? a.shadowRoot : null;
    })();
    t && e.key === 'Escape' && (S('closeList', 'Ecs Hit', z.active), L(t, 'close', '', '', !0));
  }
  function wa(e) {
    let t = (function () {
      let a = document.querySelector('[atcb-button-id="' + z.active + '"]'),
        n = document.getElementById(z.active + '-modal-host');
      return n ? n.shadowRoot : a ? a.shadowRoot : null;
    })();
    if (
      t &&
      t.querySelector('.atcb-list') &&
      (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Tab')
    ) {
      e.preventDefault();
      let a = 0,
        n = t.activeElement,
        o = t.querySelectorAll('.atcb-list-item').length;
      if (n && n.classList.contains('atcb-list-item'))
        e.key === 'ArrowDown' && n.dataset.optionNumber < o
          ? (a = parseInt(n.dataset.optionNumber) + 1)
          : e.key === 'Tab'
          ? n.dataset.optionNumber < o
            ? (a = parseInt(n.dataset.optionNumber) + 1)
            : (a = 1)
          : e.key === 'ArrowUp' &&
            n.dataset.optionNumber >= 1 &&
            (a = parseInt(n.dataset.optionNumber) - 1),
          a > 0 && t.querySelector('.atcb-list-item[data-option-number="' + a + '"]').focus();
      else
        switch (e.key) {
          default:
            t.querySelector('.atcb-list-item[data-option-number="1"]').focus();
            break;
          case 'ArrowUp':
            t.querySelector('.atcb-list-item[data-option-number="' + o + '"]').focus();
            break;
        }
    }
  }
  function Ta() {
    let e = (function () {
      let t = document.querySelector('[atcb-button-id="' + z.active + '"]'),
        a = document.getElementById(z.active + '-modal-host');
      return a ? a.shadowRoot : t ? t.shadowRoot : null;
    })();
    if (e) {
      let t = e.querySelector('#atcb-bgoverlay');
      t && (ee(t), De(e));
    }
  }
  function za(e) {
    typeof J[`${e}`] !== 'undefined' && J[`${e}`].disconnect();
  }
  function ut(e, t) {
    let a = e.replace(/^RRULE:/, '').split(';'),
      n = a.find((h) => h.startsWith('FREQ=')),
      o = a.find((h) => h.startsWith('INTERVAL=')),
      r = a.find((h) => h.startsWith('BYDAY=')),
      i = a.find((h) => h.startsWith('BYMONTHDAY=')),
      l = a.find((h) => h.startsWith('COUNT=')),
      c = n ? n.split('=')[1] : void 0,
      s = o ? parseInt(o.split('=')[1]) : void 0,
      g = i ? parseInt(i.split('=')[1]) : void 0,
      b = l ? parseInt(l.split('=')[1]) : void 0,
      u;
    r ? (u = r.split('=')[1].split(',')) : (u = void 0);
    let y = new Date(),
      m;
    if (t <= y) {
      if (c === 'WEEKLY') {
        m = new Date(t.getFullYear(), t.getMonth(), t.getDate() - (s ? s * 7 : 1));
        for (let h = 0; m < y; h++) {
          if (
            ((m = new Date(m.getFullYear(), m.getMonth(), m.getDate() + (s ? s * 7 : 1))),
            u != null)
          )
            for (let p = 0; p < u.length; p++) {
              let k = u[p],
                d = m.getDay(),
                x = 1,
                f = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'].indexOf(k),
                w = Math.floor(f / 7),
                A = f % 7;
              A >= d ? (x += A - d) : (x += 7 - (d - A)), (x += w);
              let D = new Date(m.getFullYear(), m.getMonth(), m.getDate() + x);
              if (D >= y && D >= t) {
                m = D;
                break;
              }
            }
          if (b !== void 0 && ((b -= 1), b <= 0)) return { startDate: m, count: b };
        }
        m >= t &&
          (t = new Date(
            m.getFullYear(),
            m.getMonth(),
            m.getDate(),
            t.getUTCHours(),
            t.getUTCMinutes(),
            t.getUTCSeconds()
          ));
      } else if (c === 'MONTHLY') {
        m = new Date(t.getFullYear(), t.getMonth() - (s || 1), t.getDate());
        for (let h = 0; m < y; h++) {
          if (((m = new Date(m.getFullYear(), m.getMonth() + (s || 1), m.getDate())), g != null))
            g === void 0 && (g = t.getDate()), (m = new Date(m.getFullYear(), m.getMonth(), g));
          else if (u != null) {
            for (let p = 0; p < u.length; p++) {
              let k = parseInt(u[p]),
                d = u[p].slice(-2),
                x = `${m.getMonth() + 1}/1/${m.getFullYear()}`,
                f = new Date(x).getDay(),
                w = 1,
                A = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'].indexOf(d);
              if ((A >= f ? (w += A - f) : (w += 7 - (f - A)), k === -1)) {
                let D = new Date(m.getFullYear(), m.getMonth(), 0).getDate(),
                  E = new Date(m.getFullYear(), m.getMonth(), D);
                for (; E.getDay() !== A; ) E.setDate(E.getDate() - 1);
                if (E >= y) {
                  m = E;
                  break;
                }
              } else {
                w += (k - 1) * 7;
                let D = new Date(m.getFullYear(), m.getMonth(), w);
                if (((m = D), D >= y)) break;
              }
            }
            if (b !== void 0 && ((b -= 1), b <= 0)) return m;
          }
          if (m.toString() === y.toString()) break;
        }
      }
    } else m = t;
    return { startDate: m, count: b };
  }
  function mt(e) {
    e = new Date(e);
    let t = e.getFullYear(),
      a = (e.getMonth() + 1).toString().padStart(2, '0'),
      n = e.getDate().toString().padStart(2, '0');
    return `${t}-${a}-${n}`;
  }
  function Aa(e, t) {
    let a = new Date(e),
      n = new Date(t),
      o;
    if (n.getMonth() === a.getMonth()) {
      if (((o = n.getDate() + ', ' + n.getFullYear()), a.getDate() === n.getDate()))
        return (
          (o = n.toLocaleDateString(void 0, {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })),
          o
        );
    } else o = n.toLocaleDateString(void 0, { month: 'long', day: 'numeric', year: 'numeric' });
    return a.toLocaleDateString(void 0, { month: 'long', day: 'numeric' }) + ' - ' + o;
  }
  function pt(e) {
    let t = e.split(':'),
      a = parseInt(t[0]),
      n = parseInt(t[1]),
      o = t[1].slice(-2).toUpperCase();
    o === 'PM' && a !== 12 ? (a += 12) : o === 'AM' && a === 12 && (a = 0);
    let r = a.toString().padStart(2, '0'),
      i = n.toString().padStart(2, '0');
    return r + ':' + i + ':00';
  }
  function Ea(e, t) {
    return e === '' || t === ''
      ? 'All Day'
      : (e.includes('AM') && t.includes('AM') && (e = e.replace(' AM', '')),
        e.includes('PM') && t.includes('PM') && (e = e.replace(' PM', '')),
        e + ' - ' + t);
  }
  var Re = document.querySelector('[data-element="event-data"]'),
    Y,
    K;
  if (Re && Re.textContent)
    try {
      Y = JSON.parse(Re.textContent);
      let t = new URLSearchParams(window.location.search).get('selectedDate'),
        a,
        n,
        o = Y.rruleStr,
        r;
      t === null || isNaN(new Date(t))
        ? o.includes('WEEKLY') || o.includes('MONTHLY')
          ? ((r = ut(Y.rruleStr, new Date(Y.startDate))),
            console.log(r),
            (a = new Date(r.startDate)),
            (n = a))
          : ((a = new Date(Y.startDate)), (n = new Date(Y.endDate)))
        : ((a = new Date(t).toString()), (n = new Date(t).toString())),
        (K = {
          name: Y.title,
          description: Y.description,
          startDate: mt(a),
          endDate: mt(n),
          startTime: null,
          endTime: null,
          recurrence: null,
          iCalFileName: Y.title,
          timeZone: 'America/New_York',
          location: Y.location,
          options: ['Apple', 'Google', 'iCal'],
        }),
        Y.startTime !== '' &&
          Y.endTime !== '' &&
          ((K.startTime = pt(Y.startTime)), (K.endTime = pt(Y.endTime))),
        (o.includes('WEEKLY') || o.includes('DAILY')) && (K.recurrence = o);
      let i = document.getElementById('add-cal-bttn'),
        l = document.getElementById('add-cal-bttn-2');
      i && i.addEventListener('click', () => _e(K, i)),
        l && l.addEventListener('click', () => _e(K, i));
      let c = Aa(a, n),
        s = Ea(Y.startTime, Y.endTime),
        g = document.getElementById('date-text'),
        b = document.getElementById('time-text'),
        u = document.getElementById('directions-bttn');
      g !== null && (g.textContent = c),
        b !== null && (b.textContent = s),
        u !== null &&
          (u.href = 'https://www.google.com/maps/place/' + encodeURIComponent(Y.location)),
        console.log(Y);
      let y = new Date();
      if (new Date(n) < y) {
        let m = document.querySelector('.event-expired'),
          h;
        console.log(r),
          m && ((m.style.display = 'flex'), (h = m.querySelector('.button'))),
          h && r.count === 0 && (h.style.display = 'none');
      }
    } catch (e) {
      console.error('Could not parse JSON', e);
    }
  else console.error('Event Json not found or empty');
  function Sa() {
    let { referrer: e } = document,
      t = window.location.href;
    (t = t.split('?')[0]),
      (e = e.split('?')[0]),
      e === t || !e.includes('app.aspirejax.org')
        ? (window.location.href = 'https://app.aspirejax.org/calendar')
        : window.history.back();
  }
  var gt = document.querySelector('.cms-back-button');
  gt && gt.addEventListener('click', Sa);
})();
/*! Bundled license information:

timezones-ical-library/dist/mjs/index.js:
  (*!
   *  @preserve
   *
   * ++++++++++++++++++++++++++++++++++++++
   * Add to Calendar TimeZones iCal Library
   * ++++++++++++++++++++++++++++++++++++++
   *
   * Version: 1.7.1
   * Creator: Jens Kuerschner (https://jenskuerschner.de)
   * Project: https://github.com/add2cal/timezones-ical-library
   * License: Apache-2.0
   *
   *)

add-to-calendar-button/dist/module/index.js:
  (*!
   *  @preserve
   *
   *  ++++++++++++++++++++++
   *  Add to Calendar Button
   *  ++++++++++++++++++++++
   *
   *  Version: 2.4.1
   *  Creator: Jens Kuerschner (https://jenskuerschner.de)
   *  Project: https://github.com/add2cal/add-to-calendar-button
   *  License: Elastic License 2.0 (ELv2) (https://github.com/add2cal/add-to-calendar-button/blob/main/LICENSE.txt)
   *  Note:    DO NOT REMOVE THE COPYRIGHT NOTICE ABOVE!
   *
   *)
  (*!
   *  @preserve
   *  PER LICENSE AGREEMENT, YOU ARE NOT ALLOWED TO REMOVE OR CHANGE THIS FUNCTION!
   *)
*/
