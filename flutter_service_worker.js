'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "37d7033d6c2689cfa4d7de6a4bf640e2",
"version.json": "4d4e80bf5b887d8a6b823a513d9e2b69",
"index.html": "0e957d07cec8a4b29781da3e1366d4a2",
"/": "0e957d07cec8a4b29781da3e1366d4a2",
"main.dart.js": "fa206d35a7fd0b4f4b5187243e040327",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "901d86fb8842ec0d66225a542131d689",
".git/ORIG_HEAD": "cca34ceea5a457c7438a8817e7d124e6",
".git/config": "c9f105114a3cba25a51cbbf22a645e6a",
".git/objects/95/fddbb3f1e9a8af8e09a4f0b8811684ab8e3bb6": "cd0d969cbdad7542050122aa912e4621",
".git/objects/0c/655efce75006fdb80be25d751b2731161d9ba9": "0890838a12cd663f295a5028ccded595",
".git/objects/68/38a4a69fed6457caa92018b1ddac1b247dd98e": "c54503f196eb1c5144b29a777ae1556f",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/57/62c971720ba8353b1de7e78130a7208604ad1e": "e5984c415af5e9a6ebe0db3c2aa080d7",
".git/objects/57/5190c25acb86767395363d98f694e11186ad5e": "2f6599fb98bcfdb9d7332a8dce28776a",
".git/objects/57/7529f25e6defee7e9b4d908de8631dbfa65ed7": "65944f8acdfe61a41cf34bf57c612cf7",
".git/objects/3b/6dcf5005a5c30e323e5c024f61d8687e602811": "c29e59cf6484bd89920687aba5c081c6",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/6f/d7981086f810d05f776ce37eb8cce52b1e9e1e": "c1bd40d474f38dbdcdeaa06a59717644",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/03/3c4b13e71877215040c8a539adc6196b3779a5": "98f7d369f0299606fae577ed03a8becd",
".git/objects/9e/4e1d84e81da0883c325a35b2a2a626fb05c25b": "3645b9871607dc87ccee136afdc0ef58",
".git/objects/04/2be71f672493b56f330088e8d9671fc8b3a1cf": "0fe2a2f201b5ea4803f52b982a81d2d0",
".git/objects/04/15fd3162a66c2067334a554cdf40654df9bdce": "42b2b170b6ea078a3d5785bb6b75a73d",
".git/objects/04/43f5a71bcccf6224532fc8aa06d9d151accfc9": "bb7c26f8e0b5b76501f5efac4e4b4f23",
".git/objects/04/0d898b430e1038a141f963434e0c38a2f9a7ac": "040c29c6dee111a78801913a800cdbbd",
".git/objects/6a/c3412c48b3770b4559c50368b852473a25a1e9": "0bec5baab8288df238b3b4755d919543",
".git/objects/6a/d77a26b0a3adf4499fda198d6371a53351ccba": "42a1bbc92ddb4e6bf5f694962a3ea6ed",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/32/d802e374adba109abe514ae405b78e4c1d046f": "621ce9cda503f67ce9ac86b1df2a8d58",
".git/objects/32/0a1138705cda30fef5ab7e0db46f385a703f6e": "50fe89b16ba3701f76d0e58b6e4e0247",
".git/objects/35/fe9a6cbb24ca8d648f9c33bf0a961c2841df94": "10119d24bd5ec233c70c01c781a5c0c6",
".git/objects/35/4f77e93921b9e549bd240fe4ec6e0d0a7777f3": "b3f7f10712e82171a526281c6f9a9f53",
".git/objects/35/2685e9cfeb77b6fda9e0c8712f0f514ef95fa9": "d91ccf48ad05b251a3df0f8f83e9d426",
".git/objects/69/03c195d30312f4ecf38c477eb477dce8940aff": "d3b28aafe1f85fdc80fabcf203824e08",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/3d/5e5ee351c066b87e9dbf25cfc218849d73bcec": "8ef3a984a0f529d3114369973ced8907",
".git/objects/58/65457e66549f41476677b0d44f6fd70dde8eef": "e9630cac894bba4f1b7d9949bcccf27f",
".git/objects/67/afa4a58714ff5e1ba5396e41dd60dc16a112ae": "b56cc6bff69363e84a5aea412ba37fc9",
".git/objects/0b/075ef76e715949ba10c383aa6e3e271394c589": "ebea05f829ba15cd6e0b230f97574023",
".git/objects/93/041120d2fc1035b95eaa0086034653dc2d8d91": "18a0eaf558131e0e18ca0f3f1bcefe98",
".git/objects/93/d6b27da0c7adfda208c68f28a9b1f101c4da73": "941289c3c16721796874ac37a2cdb3cc",
".git/objects/94/3598e53cf3455e0863939f8d529220ac69319d": "f5114997504bc5f6e981499fb2306e95",
".git/objects/0e/586e0d49a64e5e8ca352c3af2d657c1121a70f": "f2adfdf109dc4dcf4885952d54db5e85",
".git/objects/60/303b381881d13157193d759526f392a7219b57": "e8f8671d3c140a2f9b8cbc7e3e2eb8a3",
".git/objects/60/52c68aef4ce3da796202ec3b62108d6223c74c": "b7400f72427dcf31afd6ffab3cd13376",
".git/objects/34/60ad8a3546746f6ee9ce179893db639aa95e68": "fe2e52b2b37046683c614c7bdc79785d",
".git/objects/33/aed7090b829cf1567469e028bae3c3ab7934c0": "cdcd705433565ed0c9e64805fe22c557",
".git/objects/05/4f046b319d435db70ec144c951cd347544b144": "1cf5b64273c063fbb84bb027d090f12c",
".git/objects/05/2174a3da24aafffeabfdfc8c3e19034711625a": "830c6eabea7a67e0b9b522553f9c3825",
".git/objects/9c/fec1f22eceddbe403c190fdf350228a01e5a34": "1375357eb3e84d9e3da6027ec3130ec7",
".git/objects/9c/edb56eb584b514c4e3d39965b4f0273b957974": "05ea56c06533b599dd25a22648659215",
".git/objects/9c/17db222ccef5348e2a7a9070432a16487c3ada": "1bd8ce8cebd7e42844ba17dc2d934553",
".git/objects/a4/498809ac0a3766dc6a3e0b1c3cba0fd6b2e155": "1a4113e950ec5c33953a6cae084349e5",
".git/objects/a3/4eebd3352bb0d7459287878d44ed4865ce085a": "e123fb381b8eb7186e935e6ba4543aef",
".git/objects/b5/24e333b433766aa96224f435184a7f62c9d0ce": "de19f3e219232aa560fa300c803041c2",
".git/objects/b5/28cdb6c178670d356b3008deb3cbbbbbdfd572": "a52561e39c6b70fd06b83ca96afffd8a",
".git/objects/b2/509a55aaca4b927155442467ad47fbdad235bb": "96ccb1e4716fd2a4116ea7cb70a3a1fe",
".git/objects/d9/1608e4319d1dfbe6411511fb607e9bfee266bc": "0bf12716e4266783c6f38fbf3461774b",
".git/objects/bb/22102385f5414740f2f63a47936bd823328f5f": "c47ddbfb264b9a309dab7f195bc7d277",
".git/objects/bb/ea04599af1cf75a3e0164746a6c63b3d98c3e2": "4cb707a67dd54244901c72046a92a55a",
".git/objects/bb/9ed98ba25c7e1f4591c1e93124993b23cbb422": "cece9584ab6fdc0ca503deebd3c777aa",
".git/objects/d7/79f88c55b0e3e341e4b83b43c64d79bb129c52": "eba418354326ff9906e0cc7347604683",
".git/objects/d7/1622067b87df863ba76e3970723bc9efd01cbf": "2d0c8c808c5a582b2a195b90b3369f74",
".git/objects/d7/43b401bf2982ae397176cb6e94bc5f44d83d31": "be1930ebd27294ac83605f2df615c125",
".git/objects/d0/4bf85c30b89221a1b34cee27ca2f494915d6f9": "ada9f2d5665d01bfa6aadcc26ac5f39c",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/b3/cec84f140df9add3a80f432597005c0f069fcc": "c727556572fe717227a18eb00cac490f",
".git/objects/df/e1f73696834f35fe4aa7ac8095e1ace0e580e6": "1eb549492165d478b3233ab1e49fa319",
".git/objects/da/f08632e3d02b0ffa040f89ae16d3ed8b0dc197": "2fa16425abd1cd7afd51dc16fbe37bf7",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/a2/2f3d72495cc59504c3bb43c03bb72ddcfc6086": "8ada765ffc6984b67d85f48e8393b4f2",
".git/objects/a5/1ddc0acf592ead4daa18f2c85dca8f4bcce363": "84cda2ecaaf2b2e950dbc6704b44e8e6",
".git/objects/a5/1b7bc25257f60e41b81d19892a587c149c7f8f": "a70f60abc7dcc9b1fedfd5614e995fd3",
".git/objects/bd/c7831c2737716e5aef4a8dfd8fb6f5d14cdcc0": "799b573eb59570a27e23309d95a78c51",
".git/objects/d1/564313b7ad67dd4c44cd59eac278246c8977bb": "1b2b062d236e161e98c5d0cd3ddfae7f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/77a7999ecd6a764c292c9f07888b90cba153a3": "0cc7fe739098531657da93e76796c7c8",
".git/objects/bc/342f1c55e059f24bc36eec52e235f3b9fcf7c4": "e9ad23cb8814073257c609b3ff4c13fc",
".git/objects/ae/9f869e8fa2cdc74b0967515c7937a4654990d4": "7ef6ae502ac5b58976ffc193ce7ef17e",
".git/objects/d8/4874e8da33b85b8751b96ed7a5174f6604fc3d": "3afa5ad13ed7ba3b5385533d143a11d6",
".git/objects/d8/a8c18ff0f1bd9716134e8a77bf0c13402880b3": "80bca7667f20e0fef9fee49aa544796c",
".git/objects/ab/053dd204131d617440ee193cc4c7452da7c402": "b85de1a5b76e5feae934ffd70e7f06aa",
".git/objects/ab/0100cf486307873c9c4b1260a57d30b11a7fdd": "09ab9765f811d4df3a5b2054baf98c5f",
".git/objects/ab/cedfc1f29ce1ca15a7637026ba48f44d4fe203": "7a155249fd39f584b8c4beb0fb12a713",
".git/objects/ab/da19c06ee23a6a11635d00529a6d932665b118": "be559050294f00d375f599f47908f0fe",
".git/objects/e5/c3b2ffdd5024432f9a27f60e21cb02ef87004e": "ac9e0350bc1fb2e6f26eae75d7d61ffd",
".git/objects/e5/27ef16bbbcd580492d235b2ee461cc7b0819b4": "24f8a73528ac01d24d34215649b6f8af",
".git/objects/e5/6e3f9591e35ef106b0e1aee419f68e0178b834": "9a3d17fc0b80579e82671079341fc92c",
".git/objects/e2/afd8f626ca9b5622830ad347380210ee2e0e35": "3f5a8d3a0fc393142b20acee4e29c650",
".git/objects/f4/ebae7c665bb7a67425b109dbc6ddaaefb08dfd": "6ab0583ad7c1e28009e53007a23aa22e",
".git/objects/f4/5e3a3d288fc0a769d000a51df026e3f95475fd": "2451eac561e53ff2a237f2d46a98be94",
".git/objects/f3/a75ad6075a8a4bcbaf65babc050335104f2886": "2291bd5ab3876fb8614414780e26c447",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/4bc55635ec320b140aabf51f4e9d543783bcc3": "1dedbf8b1ec54962c564d831ecba53dc",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c0/d1328503799dd1c326ebc1f6ea9a4410561499": "c68eee0effeaca3f85772b61f73c7747",
".git/objects/c0/07b79035b1d7edbd9e794006b507920c39b24d": "a1439f9f3d215fa99873dc215c017913",
".git/objects/c9/48b1eaf3b60bd8af21eb9d7e8bc8812da9d7a8": "95ad6f10f3f270a39bbb8b50519ec8f6",
".git/objects/c9/ebf07564f31bb8dbfa037aeed0289540485a08": "c939aa85cb50739a5a5ad2fb2b533e63",
".git/objects/c9/16835c513af0f53ccb27fe260edca38a6ca4d3": "846f7e5c22ac4db0637595c854d19181",
".git/objects/fd/381033eed7f9913acb7ee4e506b8dbacc9049f": "df9d4a01e3b892d1ae77f0429c3679e0",
".git/objects/f2/d48064d3c38c6578192c5ae948cea28e274c67": "1aa55f180cda966b99a29cac58b8493d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/0b2c533666498d25436de6e03ee7877aa04782": "059d5c736b61c63849990907b3134650",
".git/objects/f2/400ec1b9b177db8bc5a2579bc1244f8c1e4f2a": "14cb35759b84e603824cd784d168a45d",
".git/objects/f5/c66cf256e0e71d060a80273f04c0c72a668d0a": "2a9abb0fa4f599c9fc6ffa24cebfe9ab",
".git/objects/e3/270b98d3576b1558dea2cc424915106ce26818": "4d06fcac85204292c658de2f0d5f39c8",
".git/objects/e3/294c4d56bd6356042b26278491dec61715b110": "eff3d973ed0195dc7f2f54f20dcecd00",
".git/objects/e3/7e5c10ccd0f52fd0d1292272a5ac21046853cb": "8e3df344fe69c87887106e3951507d18",
".git/objects/cf/44a54f30f556c04bbaf4e5908ca3cba7034e14": "aa7db17edde57c2a4d8bedd55d65f4fe",
".git/objects/ca/2b81011365bda678e3c0c4716456fd2ddabf15": "fb1bda505c7ba581582259f455860562",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/fe/aa33ffa72a2eb0b2d292d500cfed770b725ce6": "af0738203e3a02203c1c8c0962c3a9d2",
".git/objects/fb/d63fa8373dd483dea41ad120265cf55521ebc2": "556386e6aa38e401915e09e083d1e651",
".git/objects/c6/433275d6936f3e118deae79d9a8842212a9405": "842e8492f335eafae20266916cfb9520",
".git/objects/c6/94168dee4555e333bdd0889be2f237ba37d3f2": "6bc5defb5322164df9cfa39a162db9d8",
".git/objects/c6/39696f375146ee29a85857722da019e5268da7": "b1856c454db237e03da1f676bc399940",
".git/objects/c6/5a2f00b9d53449b461a9ceea871222ff968a61": "73d9dc11daebbf96ada0f618b1533856",
".git/objects/4e/b5654c80268486100bab971098d27d10999638": "d45252007ed55ac1a31efc7435370711",
".git/objects/20/6aa4ada75714e2df6709c7b51bc1276c191388": "66f3be8d7c9e195e0ac70b5829e68407",
".git/objects/18/5e311145235991922c3d6ad66f1401ff9e8fd1": "26897d4b4e56c53ea54ba8e99ac8a6ef",
".git/objects/27/d6cc018018af419059603127c960635ffde43d": "5912f79225613e8d802ab6670d6930c0",
".git/objects/27/6ebb5c851a0595ea9b039f517b32270f0c351c": "a1761a2fef1f1032612992ba24b0d512",
".git/objects/4b/4b783e9805b78107d9d52d8b08e8ff9f5cd742": "660d5887bb5ca9ea88156c2f2e35a340",
".git/objects/11/1a1b5576bba4dc088bf24018f2a4b7daf769a7": "559242490b7b4e7bd0310fe3a090631f",
".git/objects/29/9c0c7edfb936d2aeb99963a7ef864bb679d3a9": "7dc492fef71414ae0471c5fcdf165e64",
".git/objects/29/9dd5d5823cb439f75d018eca23fe888b79d635": "e7a0b76249828c11a2c119ee734a8f57",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/16/81f6da86e3d5e20c2de023ecbc4fe0283a8fc8": "02d078e9d044d104015c0733ee20aa5b",
".git/objects/16/01d7fef281d5509d95157880d74b7b2457720b": "1f1322241b75b1f484d3500fc455765f",
".git/objects/45/622a40e686eeadfe4e07e5d105153630641a10": "3ae2650e26615d52337f2b7f41a1580b",
".git/objects/1f/cb4cddf29c7eea90f00ea0d4c3ffff060c0abb": "e7ab7ab19b1598ad8396ac892d9c36bd",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/87/ae5f534cb8e95d4291829dd7ab18bb404cd5ac": "c237b4f3b077ac66899ea9a241fdbe79",
".git/objects/87/c8f2eba0233f3d0a92a312ce6aa4da5e9a6aa7": "4320e2addf6e17ad6ea3c2d4f9663776",
".git/objects/74/c7537b1f160720b900cbc60d4debadc2786473": "1c6c3cf4b00d1ae9023089cfb499c0a0",
".git/objects/28/fc4abb74182d52705a85c0879d7d6cd6e5304a": "86be4b60aca24090e54a54199560537e",
".git/objects/8f/f6bf1e29b18902e0ce4a144760304f267376ed": "1b2b704d2518a146e2b64ff290635fab",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8f/ab9f48801889accef56d5c04ef2cca5237aaa7": "6ef97fbdfcba59929b0285a5ab0d77c5",
".git/objects/8a/1227914f6c0c902eedef96d9f426522a64d91d": "9705b2fbd6f747aa3b7643bb32df6905",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/a2b440fd800bde2c3e5979f7688c877963d0f9": "cc5fc03e2ab3a08855f5ce5d91d338f7",
".git/objects/10/5e611e2e209605c60c1b2c8cdaa06770a28164": "1541fd675942f9c7abbb8cc409eb6b32",
".git/objects/10/55b3383e4ea2578610a9addf4cb7434adbc5b6": "23a384697d921a57c9f0e200ea5ca702",
".git/objects/10/8226442c3de01e45ef8bab3672e1ffe0103f0f": "74eae7c064f20b6710c5d14aa1b54463",
".git/objects/19/7c0beecf79f3ccee48efc4bc10d7f38812c6fd": "da87ffc8e71230a36421a95643978f48",
".git/objects/4c/116dc80641216881fcbe655e2e98af41b260b2": "638dd7614db3891a6940d50823a6e3ad",
".git/objects/21/302b472683a9f81dcbe3757ffbb63439118908": "fd4626cbc653457127dc64122f164f11",
".git/objects/4d/fcf92c3c58e9d382fa59df2c31070ed307afa7": "aab46693e81f58398ff136c0327273cf",
".git/objects/75/f76d277521dd54ffea371fa5a440a323f1dff1": "a2206ddcccfd575d382d97a2dea7a23a",
".git/objects/75/296b75c57c28bdf608961b96a23dec17077acc": "b605bb3acb449197443478abd3cb7baf",
".git/objects/81/eb9628e664ecd819438cefc16df0cc6ea96e8f": "1e9b42be994ea8a01461a14967750623",
".git/objects/81/dcae31d68aaaf89594283403057e27b8f8c173": "addacdbe9d3badb399df419acdd9def2",
".git/objects/81/6c01bbafc2100249d334287e4d05691ddf1253": "1431696f61be53977665fe125ee51097",
".git/objects/81/79239ce651c36d6eb6097fa38cf0d3486d906b": "66b501a6dd1c8ced15e6c63c7e151e2e",
".git/objects/86/a90168ae8b5f9ec67e0c5285e171f408039f36": "d4c03b159abffef416278ecd315b22ba",
".git/objects/86/0318343af4e1721693fc5f834a6b9d0b65e085": "fce06c0226def1831fb1bd9c39d0c2fa",
".git/objects/72/cc4dc7308e008d6de64873773692d854934771": "ff809b780e269d1afa6f2b20222408f3",
".git/objects/72/e941a409022c7796c697ee788993a3bf141258": "423d7e4ecaaf918efcc1dcf5c9cf1de5",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/2a/be264d2207515ef7f1a55624ce74dc24f8e0ba": "a6229c01a465c1598e11f8db6c27d65c",
".git/objects/2f/d19e60c5f1ac1d357489f60f34fb94a1360620": "57008c3e097572951e9bbc53b6b2a650",
".git/objects/2f/9e09a18655a13236e0eff8de14239d7d0d731e": "5795ed8673516da75d7bf936b1bf2213",
".git/objects/43/934d89568235d6a405e5bc95bfb558727dd74d": "7d039c17e91b03336f4c01b92002d59d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/27fc1a99f040f6f84f2fc15d6fe47fd7c1aea1": "d66b7c67ba17b3c9d8b732e11c8f4750",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/07/57b50df55d21448f2c5a271c94b5e641a3f5ff": "fa6f10d05c9b2e8c91d5d4df3cdf090e",
".git/objects/38/f72c3b661274731c0dca4263c6147292c3313e": "06ec909689545717240ec77454003efe",
".git/objects/00/b5242e7128985eda7a7bf6e63962c0d902e5c6": "2c751edd6499f5ee814e41705f77f218",
".git/objects/00/50d612d7be9ab75fa7746ec17be64eaa8be9b2": "647598706d17a1dcb4115be31c6a75ff",
".git/objects/9a/bbe99d26922ef56c0c7125865b0dba4431b4fe": "ed1adb6ec4fb81f92f49fb7c5b039346",
".git/objects/36/d7bbf4e2182ffef5834fec10fd207ced1be809": "c2cd4942e147b3c0edded3b64c28f09f",
".git/objects/5c/b88e03dfebe7d81a2c8fa24d164da058283de8": "68004f8de5d106518dee0942461e285f",
".git/objects/5c/a9289abc5b65bcb1cc3a37945b5abe17ad1b82": "20b8c0c71bc4f111bcf077dcd7c46ba5",
".git/objects/09/436aa704ed0fc691e9e35550e6e497847d0be1": "9353a49b89093e0e8af9685c2bb92409",
".git/objects/31/2fe99d4434fa3a8411e898492427653c64b65c": "a7f7538e6342ad39cfd1eff4b3e4427e",
".git/objects/65/32429785893767a8e4e39ae7c9e653fbc93f38": "2dfd9b9e4c3f24f7e5e33b46bce8318f",
".git/objects/65/d5f2482aad3fff208fe83aac59cc17f780b45b": "4137e6cf7024ee682fc0302c30c01dd1",
".git/objects/62/53f820260238c8f35473dc25a0a1aa2f285a63": "5d821b83660b69ca79487219ae708e31",
".git/objects/62/381e906fb21f25c01cb6728d768792afbc989e": "e2ead58348b1e705af212cf73ea72f42",
".git/objects/96/2aad7a13fe1e29bf2748ff175172b94e1ef6b8": "a2e29c5f4895ccc2285ccfa67c514118",
".git/objects/96/e8a79d108dc255d33b3a489349a7083b4e52e0": "903653832196b138d337d5e6aac14800",
".git/objects/3a/52f1b93d9894eeaee1e7903f6097d9873754e1": "5732fbdc7e7cfe179c49aa7eb99e0a79",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/54/5e94905d23eba1080437aed0958f0618adda11": "d63d0a63bf6b69436e978b0da58a1bb9",
".git/objects/98/fb66fa9bb04347fd72e2b9a83c18e401172fe6": "fe5a0173bcd6afc1e2b8d3114fba5ba4",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/30/c328499ca652fec72f223bdc5c838d3684ada0": "acd67f0614ee5c45a65c745f16b5d1d2",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/37/7aade77b56a7d0642ac14f7a2d5e2056470a7b": "a1ecacaa1e97988288d77aab76d60de2",
".git/objects/37/612f3d90f4b40a12c5efa0075b40bebcf8002c": "213a5c6daef5d18fd0150a81649ec8bc",
".git/objects/08/9a7b9919bfa1a71ac646f3ac5c1cf2ba301247": "ac31996ab6b15330748d5a17289fd452",
".git/objects/08/32883f4106ecc57b8117c74397861c6f0364a2": "41bc04ac153bd9742948f95fe8fde876",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/6d/a70df10bce0c0fba35ff28037bf66513c680b7": "9915250e3f95d08c10f24c94769e37f2",
".git/objects/6d/d816e80ad8d4a2d959b9e73f70bedbe8b2bac3": "ba334e14fdd8e711ffdd227db9ec3169",
".git/objects/6d/51827e268f4c2650611f38ce57a784caa364ba": "311c4782c8998e90fea07ec105d9cd96",
".git/objects/01/22a4cf3e070118ea226ef7b32baf577fb13b5c": "a96b2ee1cb810ebd8b7c2c48eb4d2688",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/06/e64b81412d4d806bd876a3d1c1a757c5423143": "208e7f2a2fefae18bca151cc5b459fbc",
".git/objects/06/347fde62761bf315d3e0075bc451612173200a": "c229353b003e5487586c5efc0bb9dceb",
".git/objects/39/d0a8cd8157fa4905974b5c4d162f0ffdaa208f": "7c03bafb4e659eeff638109a08115a32",
".git/objects/52/3150b6ff7ea67afb06e5e838a3c374f3aeba5d": "5427feb0c609d80c9225e1c3a218bafa",
".git/objects/52/f8f82afa84ba7c0674222c24eea9ed562e67ee": "d74eabcd3efb9e2f04bb105144f334c7",
".git/objects/55/53ba773e5b39dc84125f88e41042e08164d4d0": "d6e93f0a40f26d6a3c1f487eab8c506a",
".git/objects/55/8b83a99886f537e133211231d61a25dadeb902": "b9d261f8395db4bbc21621dbc58b7ef4",
".git/objects/63/1e59cfd4776a9824bb92470312cb220b6b3749": "4439e3c7f3362b28beecc4726b4e5afc",
".git/objects/63/605911d79089426d0003a6563ff58a492a0509": "af8360c652a5d83bdd2fd3da304f6958",
".git/objects/0f/06a170c26a46c5d552f0b9c40caec68cf4ae16": "9df82ca9b56fa8319b40ad7f581fbb39",
".git/objects/90/e42eb0dcf8ef3e399a3d32d152b6b588a3a40c": "c37ad889f2e0075c180da8774b8a7715",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/90/546ab7684b399b8fb5c6bc710ef657ee33a69a": "0980462a8ba04c73a7e0d95449a0c3bc",
".git/objects/d3/b3c18390ebd360fa1a58dc5b67b973c4f0bb49": "b39a5a7d6978c7cf94495be30850a543",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/a11a324e4348d43308a3b4e7f5808578946cde": "25ba33cc8859b960a567770cc5cc8436",
".git/objects/ba/dd5449cced1082d92dbdc10311f9d14950e138": "948330748764fc698fc60ceb743f0ae5",
".git/objects/ba/3a97e25d6b328475ebbcbb69b1afb4401b8bd0": "b06fa21a30cff0fa9a39f8a5c2ac1215",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a0/b2f7c9a72e5d741d4542ddb61543f15d4a66fb": "fc94a2155c6ca6b7df2e9142f86fe394",
".git/objects/a7/6c77e9cca33b8ca55374011c7be7871585ca7f": "377a1fb7dd8ad9089b12088117568cf7",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/2e2af1c1f961b0e29ff3a2fda01a445e29fb0f": "25fa899a0428d184137d35101200f524",
".git/objects/dd/018a0580a2b741619d171b15e59fb4b4d9b08e": "21ba3930b9ca72c80f0ce8b6dd251815",
".git/objects/dd/7f36e2b23b397c7826c7d9d6c27c89d9ad9738": "41041fd89aef0ad1d33ee526b7bbaea8",
".git/objects/dc/d20eb7b554461f4bcfd63f88fa2adadc81464b": "610ae6ae13afc97e8d67a2e09abd63c1",
".git/objects/dc/3b3c1eefb3a6c2f2584f48a084752444302748": "b7d4fcd7c3b226a63786435706f8d61a",
".git/objects/b6/28576edadf2ca4839d5cc3718acad53d87f7dc": "b4dcd10c07a7904aadfa02324fb99bd5",
".git/objects/b6/3e2b52844aac4c7c62edc42d30710f922563ce": "02c32945f6cd2f7d645b8bb6b8e7173c",
".git/objects/b6/0946751082c624df40d144a633077882ad0ce4": "9f0e75a15f1943ee057cc0a824980fc3",
".git/objects/d5/a699e027dd06e354590e4d5adf3293fd1db5ce": "a07623a9c9b54b2f9f52d64edf94d5d9",
".git/objects/d2/7ccc7a7edda57c7154be426cb410b941d7f6c9": "88ece07771dc3d4edcca187eb4e7de8c",
".git/objects/d2/5c7892eaf5aecfd1927d45c4f7935b49e6521e": "fc2d5ebc24f62f40c369bdfa6da6a670",
".git/objects/aa/cf8bd92763d6c27faa21f486abf40e28145bd7": "1361972a0b4cd3f5bc725ea446710de8",
".git/objects/aa/991055677141246d9437f3f8f05f4a0fdffadf": "3a0b56f4b1775393191236689cb78787",
".git/objects/af/a10e3061f0c1a00b3ec5c22c9bad0702afa04f": "75bb7fe0d725b19f556bd88f404cbb00",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/8bbb77eaecd3686eecce183a0a862eac101aff": "b14f4fa65d55ba8d384f70e809527a34",
".git/objects/b7/83bcc62a960f1cfeaeec58c766aba1a423f574": "b95f67dc2a48b3d34f189d859069cac8",
".git/objects/db/150c6e3dc0f7eaaf0eba721a1efe272c2cf099": "12cf9194eee7191cb553ce2719f48818",
".git/objects/a8/5a2843d27d83dbbbba145b561cabb74db81fc6": "abcb60250b65974c2cc828742aaca987",
".git/objects/de/6cd85bb7dd3e154313cea0d0d9f0edb2f5ecb8": "1a8c2c749a870273f63ce0db41a0e1fc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/79de5e311a20bb0933c852b779a6b4308897e2": "a47abc00903c90cd222656d52394d7a1",
".git/objects/a1/7c4a03e8953f832396c345715cb5993384f014": "07bd9d940dad653bd43f2c05246deb7f",
".git/objects/c3/bbc52730a2502b818d7995f91c494f1b9e1112": "abc62612b2dab5008856ae8d10efb689",
".git/objects/c3/4638d1467607bd812b9b4e77f3da5cc85810b8": "c2b010183ca4e558c13c5c0607ab602c",
".git/objects/ea/60ef795ae585c5661ca0067699b9e6558886f1": "7d275323fb454e749fc8fa3873fce9dd",
".git/objects/ea/eb99866d379855e1beaedf453022705275b52f": "603f13fcb5e95cdf826a1adcbb5922a0",
".git/objects/cc/7e6ba91aef98bef2be77765bd510834601fbd5": "a292ce9e0843b2ffefe17f87c3f3bd47",
".git/objects/e6/5e5e059f2b21f66aa48d8b9a34ea0731ca638b": "20a4483f9d8d4c13c3a5c61ca9afd641",
".git/objects/f9/b084b44253b10a3ef6d2fe02eb6f3cf8866474": "0344ae844cabd9536309f4d3f963911f",
".git/objects/f9/a3741304b5e4c8ffdfcc6fb6eba3d40b0a9292": "c472358ef154e2f5c7123b158a526270",
".git/objects/f7/65abf38bebd43844c9c96b8f1c0d924f471668": "63e8f88b4b5bc8ed11dd75aace0415c7",
".git/objects/fa/9d76462da98178de52713aea68b8f6360948ae": "58f5f22f605af4c1a753ef182adadf24",
".git/objects/c2/49053466672b06f9d1bc342567572c726c1b39": "d49eaeb8a258471426e4973381ef7466",
".git/objects/c2/474a77f3e796ad6e573bdddbd9f6af6b21883b": "d897e4b132b24617a22aff7c85d62db0",
".git/objects/f6/75341b619b149e5da23ca5bae1fa8efda9bc83": "c5635dbc7bda0131f25c09a041448452",
".git/objects/f6/ea2de108dbc3016cd9af71cb174e35e2dc0c71": "40f78e30a807d08c034211eff39a6edc",
".git/objects/e9/d8f98c38e8fbd3e78de5b8d3459ab966108c66": "465bb839cfbd37c422fa9ba5d6c9a8f0",
".git/objects/e9/a8d84988cc803b9dcb6045d8f71c735497ebb1": "96c230d3727a979df665461ead7c0720",
".git/objects/e9/843e544f46e8b627935bbc01a98bb4696c6923": "5f8487be1ba701e176960b6e443f7f84",
".git/objects/f1/752f03ac401a1057cf782271dd0cc8b1f1f4c9": "8518519a790d644012f021ecb8071801",
".git/objects/e7/a1f567ea9b149ecab10098e979df736298d7aa": "a4b9cdf652d26454800f516a06b81851",
".git/objects/e7/411fe1887de44754b766aee0abd1a6788af6e0": "a08c9fbc7b3a0d0d8fdb64bdfcebb0a8",
".git/objects/f8/7a9266066c5ced6d8bba2a217e025f460d2031": "e8d2c33326d31ab5a37bc12ce2e929d0",
".git/objects/f8/7753d07eb9fc4e83611896874777035de4222f": "becb0dde4036ff29585dd17a6680c77c",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/ce/aa6381478b4158f1c917c4df6ffe374355ab74": "ce2479f67df51bc62dd58676d658780b",
".git/objects/e0/05b1edc0de3432ca73bbcf3d1e5e9b542ea4d5": "b9e50dfc90c41ed44fcc8faa1920609f",
".git/objects/e0/5aa482c6280b2aead781a89127aeb26990b97c": "70219427c498757e856e6ce030ff2c12",
".git/objects/46/822d05bb08ff1982dd749c1ae9528037071a93": "fcc2a8b29241446faba904b37a9c1b27",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/d0d7dce74d0174e26ce9fa32a3bdef61628de4": "0782d4f91f91cb04d57cc83d9a421c15",
".git/objects/2c/5816bc6d4208475fc7b0606b209c345885c19a": "1eefff1550a726656239a9f36611bc9d",
".git/objects/79/b5d40710a117ba1a3c52e2aa1aa797035d0cd2": "fac632aedffa93dbc285285b1128ff4b",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/41/7bba72dbc3cbddfbdf0374dba5859e7dde1841": "c04f722f6346e28366f2693fd42c4035",
".git/objects/83/01f48bc3a0af7b24304a965ad166ea8b96a875": "f0d2563b8f6ac7d52e6b158f47fecafa",
".git/objects/83/22d13e6a6b52fc68afc38c4f305f83e08904c3": "45d549efc44259836c1ef79bfda16bd6",
".git/objects/83/506c8d8006b1501bedea6b07434df178bc4e6c": "bc363d15231163965e79de2842f671a9",
".git/objects/83/48407dd8ce176c7d53c5e526dad95ba093a93f": "5665d3c36e58c6fd30129117c32d3d31",
".git/objects/77/cc9cc997f043e4a08b36ac91a07c54855b0d70": "ae495656cb43a3e876282e0c16765aec",
".git/objects/70/f4b47ec3a3741330d1c2b9d5918d5bc72f8442": "602d31382b9e8b80f0449828d1e16cd1",
".git/objects/70/970b69ff8bf31c5aac0c0c4915fc66e040ecd0": "58d61badf77b57141caec38bc4b0e8f7",
".git/objects/70/9808f9bf74b25d00d2bc0eec13d7783544a3ba": "012210e5568df4009c70da73399e741c",
".git/objects/70/28040bcd9dfdd29fc8b6aeb1214cf2fb74f7ef": "2c55ea59cf1e5dff2e02f694d4ee58e4",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/23/040c627a8f439b886262909c7db7abab4b816e": "0efb1a73f424d8c61f27c864f3248fe9",
".git/objects/23/4cc6cd776a681d90596751f25b4f44d046a1f0": "41e10f00aff263d330543549540f51c1",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/4f/615f6f7752a81e907f5e1296b998fd147d791e": "ae465a4dcd6d03b0ef81345797cd0f94",
".git/objects/4f/0fded00838027c528601a93cb15af1e0e548cc": "7f243842e48394a87405bca35b176ab2",
".git/objects/15/926e64c2a98ccbaa0c95d5595f0c58e182345a": "eff8875808350d47ce16eea06d530b92",
".git/objects/15/5c51c5e9e76ea352bf684026bdef27bfaf902d": "22e9c6afa240b17b3363c3d89b4bed35",
".git/objects/15/fdc4c771977b9ff553d3ff8b6a1a61f83dcb3b": "1cd7015bef2979a6ff9813fd7f6a18ca",
".git/objects/8c/653d7f31df1710ce7e01bc5219d2af621bc2c6": "9450e032cbd5129e9fb9ecb6700ce6b8",
".git/objects/85/0f742b7040a4caba92725bd2bb4fc0d08d53ee": "33fc5facc6e822825560aff2c6b96303",
".git/objects/85/850f306bc46df38f5c40bb9fbf11e918845f16": "ffd7ddac5aadbcd0700fc45335fec19f",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1d/965d1c74e7a04e4debbc7da8a63e32e42d67c3": "c2533f1e7929fed125e09e322129634e",
".git/objects/71/7bc48f79d60c50161187b4870c9b5912096d50": "7a6d6f66e670b0f8023c20df71321de0",
".git/objects/71/3d486964e0ccc673dafb49aa626625bd560474": "f1a733e417796fdf0d532c2150cd50da",
".git/objects/71/b7bfc04eca497bb06c5e38c8b5cf5c1c56d797": "a5a06367928edaa2c8f8f3a9877be99b",
".git/objects/76/f4d366445dd5e342db671ae27ccd77fac42f58": "95448906c0d8e7d5c8a153438f74112a",
".git/objects/1c/44fb1b19fd10f9d91fa59713864988c4f2a950": "d1f70f179115e7955ba61c930a541bb7",
".git/objects/1c/680921f31518ac897189cc76e9b089ce6b4110": "fe5b9a630fc5f888d38ffe6f46ebfdc3",
".git/objects/82/b03d3779a163912365e5b5d417ea7eada904a7": "ef7ec7571702f3ba80b89f202b592cc2",
".git/objects/49/93951bf6befee8d36b842c7358249a3dbb85bd": "95d4dd7aaf0164f21a807fc69f70c8bb",
".git/objects/49/16c7e990e6dd96f781d59fef8cf33801a37ad4": "553084a1b3d0b35b1c5cf1bda78ac645",
".git/objects/40/08077cb759f43e0d00fac65362da7995438b29": "99b4c18670f9a0d94ff8a20971d83928",
".git/objects/40/0176ce5dfb8e5ac54ff062588726ada90d6aea": "4b41a5d0820881b375ea34fef38bad2d",
".git/objects/2e/a6403c2a5791fe307295d0cff15dca813fd6fc": "7d6bbddb625e9463a740d627ca08644c",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/47/ca523e0d4a24be2457a55fd60fbe57d0a50c6f": "60973a9086b29c6020abb16357a301cf",
".git/objects/8b/a0d9e81a51f4bc63cb470fea04a9b6e0a86531": "be4f61af8316f1136a7cb8a80a3a3184",
".git/objects/8b/286bada2bce0174b57b8d3f10501bd4244e5fa": "70c3e17195e224aed10e44a07aff8453",
".git/objects/13/61751fd5a95e9e281d690742e8bf03e670d3ef": "c9caa1b03d9703b91d37d8b28c1da64e",
".git/objects/13/214e006c0c6e5f0173d8cfcbe0503eb6408a58": "67a1dd571a99c7710cec0790ada0ac46",
".git/objects/7a/991120f491116baf3a35f444e586cda21f5755": "396d75c454d5442f18322baf0ea9ae43",
".git/objects/14/0f0a0426f9c8bc6014e8e0dbb5598e2b591f03": "bb14663885549d6ce7ba392b36bcba0b",
".git/objects/14/77ccbfd6931f61b233f4c5a9d46bccdb0e8ae4": "f9384e8a590c214cf12a5ae5171512d7",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/25/6395932764f7212e2dcac033384e6b198790a0": "dc245e84dd2e7de254e2bc77a6014109",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "06de9d82458a3180ef85a16bcf3019e4",
".git/logs/refs/heads/main": "06de9d82458a3180ef85a16bcf3019e4",
".git/logs/refs/remotes/origin/main": "e127008345c64443195436185359290b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "cca34ceea5a457c7438a8817e7d124e6",
".git/refs/remotes/origin/main": "cca34ceea5a457c7438a8817e7d124e6",
".git/index": "1d436b5c64e60002dcb32ba5da0b9f03",
".git/COMMIT_EDITMSG": "615a18116ee11cae85dfd2b37da5a247",
".git/FETCH_HEAD": "163c7cc5d5b35adaf13ed0a375a61fe6",
"assets/AssetManifest.json": "68a87d8d775fd91799b10333c3cde9fe",
"assets/NOTICES": "4f004dd383f74367172b87cf35908230",
"assets/FontManifest.json": "5e4fae4c80d30a4a17969bb4ed7b6b12",
"assets/AssetManifest.bin.json": "bc0d14aa9ff1304200c18cb9ec695585",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "af14fbd71561c1787c35db2030c01f03",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "e5acad22e9c881af44537e6cce130ba4",
"assets/fonts/MaterialIcons-Regular.otf": "d9b89054f47852048bbbed6db21de09a",
"assets/assets/gecko18.jpeg": "1ae55e163cca022810f51d6c1a516a87",
"assets/assets/gecko2.jpeg": "46e9d2a20ab1988b3b7abd80ef65f301",
"assets/assets/plant7.jpeg": "2e96dba97ab08a5774b44d1074c2e438",
"assets/assets/gecko14.jpeg": "9d2c82b9ed52b150e72ffebb4f0cf058",
"assets/assets/owner.png": "8efe6baa5b5706eab2c20d85ed650016",
"assets/assets/fly.png": "041ee41927d39aa6ea8498c568ab9e7b",
"assets/assets/plant6.jpeg": "4f4fd2968ae2ded347c86aa1c7312d58",
"assets/assets/gecko15.jpeg": "10ed0a08600c53e5869da50c1a2ad258",
"assets/assets/lanjin2.jpeg": "0e3ebf00140b9106febaa8aaf2b2fe32",
"assets/assets/gecko3.jpeg": "c0fec5bf6bc395b03bac50ea6567ac76",
"assets/assets/gecko19.jpeg": "17869b359bf324bc92dfb4dca2af5fa7",
"assets/assets/gecko12.jpeg": "de25dd1671b299825d387c073b2d9dac",
"assets/assets/gecko8.jpeg": "addc997cdbfaa428395a19deee1672d5",
"assets/assets/warrior.jpg": "de9e5e6ea067a4522b51e3ebeb33b6bc",
"assets/assets/gecko4.jpeg": "68efda2b830e1861a450f9faad1d5214",
"assets/assets/plant10.jpeg": "14ff09e01c4fb94ab099ea90609cf3d0",
"assets/assets/stand.png": "a27f341f54100cb73637531fbe6a0935",
"assets/assets/plant11.jpeg": "5dfdfbcdd754b1a546c4d97baa84bc38",
"assets/assets/gecko5.jpeg": "670f2aefa5f473e74e25ec63ec1f17f9",
"assets/assets/magic.jpeg": "c9f83df21eca1d9cdbaa368b3392e254",
"assets/assets/gecko9.jpeg": "384731e482499cba7890c0de0b6d9dcb",
"assets/assets/half_stand.png": "95818730c0a6fb65ae7133b3aba30ebd",
"assets/assets/gecko13.jpeg": "b30829562101c463f87f0471249394f7",
"assets/assets/plant3.jpeg": "02166b2ab6cc829d0249f7ffb6e782b9",
"assets/assets/gecko10.jpeg": "d81b0fa4353260f1ae17db75985b8182",
"assets/assets/sit.png": "8e216310602c56c5a342f27114392a37",
"assets/assets/plant12.jpeg": "128ae8fc82ddcdf400a3431f62e9d37d",
"assets/assets/gecko6.jpeg": "78f685f4e6d6705cf0c4bc9deb48fe52",
"assets/assets/gecko7.jpeg": "10ca60c52bd45d66cd5248fc73a69924",
"assets/assets/think2.jpg": "7455ac77c4edc86983aa35288eed0e24",
"assets/assets/think3.jpg": "fe372d702890f0b370ee80598f7eb2ec",
"assets/assets/plant13.jpeg": "c45a38cd88a2321edbae15e059c6a840",
"assets/assets/plant2.jpeg": "39d6635569e1da702029341515133faf",
"assets/assets/gecko11.jpeg": "895322f8068814acbc466cdf6519eba1",
"assets/assets/think.png": "903dfac6e5f209f0a3efd205ff91ed40",
"assets/assets/gecko.jpeg": "66a5562f1ac7110e6d8440dd66ace6f2",
"assets/assets/plant.jpeg": "1375fe27b385cdeaafbdfc0f8907a0d1",
"assets/assets/plant9.jpeg": "4efec455dc5f9c764447b96842d71bc4",
"assets/assets/font/LXGWWenKaiTC-Bold.ttf": "c1b965305b948ab477c735a7c18ac551",
"assets/assets/font/LXGWWenKaiTC-Light.ttf": "079a243778cbdd44194b69f22ff2e502",
"assets/assets/font/LXGWWenKaiTC-Regular.ttf": "0b1363fa1f784e22d6158ab13bc196e9",
"assets/assets/gecko16.jpeg": "2149c0c071964db153927527122baeca",
"assets/assets/plant5.jpeg": "d04659450bade04a277782f3499de920",
"assets/assets/gecko17.jpeg": "1fba41bda359f007b420600615e076c7",
"assets/assets/plant4.jpeg": "cc5e4ee361a0258033ac1a0de3fdfade",
"assets/assets/lanjin.jpeg": "7eaeed8f1fe4d91a0ff07141f9b6a903",
"assets/assets/torger.jpeg": "9a30b4bae7ab57e6cbdce057d5fcb938",
"assets/assets/plant8.jpeg": "18475613b6f724c2c77bbe7e45ca8448",
"assets/assets/sit2.png": "c4105bd45ac7eae309f0eea94ee85533",
"assets/assets/gecko1.jpeg": "5ed3a79b52dbad0c3281754111025701",
"assets/assets/sit3.png": "aa95a29a07b7078a676b738b0509c5af",
"assets/assets/bottle_dog.jpg": "11f31805d9295fe8dde5c7d69c63a860",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
