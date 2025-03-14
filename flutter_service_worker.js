'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "7be34cd7ad18eca745fb9736e1a12b08",
"version.json": "4d4e80bf5b887d8a6b823a513d9e2b69",
"index.html": "0e957d07cec8a4b29781da3e1366d4a2",
"/": "0e957d07cec8a4b29781da3e1366d4a2",
"main.dart.js": "43cc63ad01663d824e096b970ddaa3ca",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "901d86fb8842ec0d66225a542131d689",
".git/ORIG_HEAD": "6d84f443a4109437c2264ea101b5f7b0",
".git/config": "c9f105114a3cba25a51cbbf22a645e6a",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/57/62c971720ba8353b1de7e78130a7208604ad1e": "e5984c415af5e9a6ebe0db3c2aa080d7",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9e/4e1d84e81da0883c325a35b2a2a626fb05c25b": "3645b9871607dc87ccee136afdc0ef58",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/35/4f77e93921b9e549bd240fe4ec6e0d0a7777f3": "b3f7f10712e82171a526281c6f9a9f53",
".git/objects/69/03c195d30312f4ecf38c477eb477dce8940aff": "d3b28aafe1f85fdc80fabcf203824e08",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/0b/075ef76e715949ba10c383aa6e3e271394c589": "ebea05f829ba15cd6e0b230f97574023",
".git/objects/94/3598e53cf3455e0863939f8d529220ac69319d": "f5114997504bc5f6e981499fb2306e95",
".git/objects/0e/586e0d49a64e5e8ca352c3af2d657c1121a70f": "f2adfdf109dc4dcf4885952d54db5e85",
".git/objects/60/303b381881d13157193d759526f392a7219b57": "e8f8671d3c140a2f9b8cbc7e3e2eb8a3",
".git/objects/34/60ad8a3546746f6ee9ce179893db639aa95e68": "fe2e52b2b37046683c614c7bdc79785d",
".git/objects/05/2174a3da24aafffeabfdfc8c3e19034711625a": "830c6eabea7a67e0b9b522553f9c3825",
".git/objects/9c/fec1f22eceddbe403c190fdf350228a01e5a34": "1375357eb3e84d9e3da6027ec3130ec7",
".git/objects/9c/edb56eb584b514c4e3d39965b4f0273b957974": "05ea56c06533b599dd25a22648659215",
".git/objects/9c/17db222ccef5348e2a7a9070432a16487c3ada": "1bd8ce8cebd7e42844ba17dc2d934553",
".git/objects/a4/498809ac0a3766dc6a3e0b1c3cba0fd6b2e155": "1a4113e950ec5c33953a6cae084349e5",
".git/objects/a3/4eebd3352bb0d7459287878d44ed4865ce085a": "e123fb381b8eb7186e935e6ba4543aef",
".git/objects/d7/1622067b87df863ba76e3970723bc9efd01cbf": "2d0c8c808c5a582b2a195b90b3369f74",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/da/f08632e3d02b0ffa040f89ae16d3ed8b0dc197": "2fa16425abd1cd7afd51dc16fbe37bf7",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/a2/2f3d72495cc59504c3bb43c03bb72ddcfc6086": "8ada765ffc6984b67d85f48e8393b4f2",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/77a7999ecd6a764c292c9f07888b90cba153a3": "0cc7fe739098531657da93e76796c7c8",
".git/objects/d8/4874e8da33b85b8751b96ed7a5174f6604fc3d": "3afa5ad13ed7ba3b5385533d143a11d6",
".git/objects/ab/0100cf486307873c9c4b1260a57d30b11a7fdd": "09ab9765f811d4df3a5b2054baf98c5f",
".git/objects/e5/c3b2ffdd5024432f9a27f60e21cb02ef87004e": "ac9e0350bc1fb2e6f26eae75d7d61ffd",
".git/objects/e5/6e3f9591e35ef106b0e1aee419f68e0178b834": "9a3d17fc0b80579e82671079341fc92c",
".git/objects/f4/ebae7c665bb7a67425b109dbc6ddaaefb08dfd": "6ab0583ad7c1e28009e53007a23aa22e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c9/16835c513af0f53ccb27fe260edca38a6ca4d3": "846f7e5c22ac4db0637595c854d19181",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/0b2c533666498d25436de6e03ee7877aa04782": "059d5c736b61c63849990907b3134650",
".git/objects/f5/c66cf256e0e71d060a80273f04c0c72a668d0a": "2a9abb0fa4f599c9fc6ffa24cebfe9ab",
".git/objects/e3/270b98d3576b1558dea2cc424915106ce26818": "4d06fcac85204292c658de2f0d5f39c8",
".git/objects/e3/294c4d56bd6356042b26278491dec61715b110": "eff3d973ed0195dc7f2f54f20dcecd00",
".git/objects/e3/7e5c10ccd0f52fd0d1292272a5ac21046853cb": "8e3df344fe69c87887106e3951507d18",
".git/objects/ca/2b81011365bda678e3c0c4716456fd2ddabf15": "fb1bda505c7ba581582259f455860562",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/c6/433275d6936f3e118deae79d9a8842212a9405": "842e8492f335eafae20266916cfb9520",
".git/objects/c6/94168dee4555e333bdd0889be2f237ba37d3f2": "6bc5defb5322164df9cfa39a162db9d8",
".git/objects/c6/5a2f00b9d53449b461a9ceea871222ff968a61": "73d9dc11daebbf96ada0f618b1533856",
".git/objects/4e/b5654c80268486100bab971098d27d10999638": "d45252007ed55ac1a31efc7435370711",
".git/objects/20/6aa4ada75714e2df6709c7b51bc1276c191388": "66f3be8d7c9e195e0ac70b5829e68407",
".git/objects/29/9c0c7edfb936d2aeb99963a7ef864bb679d3a9": "7dc492fef71414ae0471c5fcdf165e64",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/45/622a40e686eeadfe4e07e5d105153630641a10": "3ae2650e26615d52337f2b7f41a1580b",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/87/c8f2eba0233f3d0a92a312ce6aa4da5e9a6aa7": "4320e2addf6e17ad6ea3c2d4f9663776",
".git/objects/74/c7537b1f160720b900cbc60d4debadc2786473": "1c6c3cf4b00d1ae9023089cfb499c0a0",
".git/objects/8f/f6bf1e29b18902e0ce4a144760304f267376ed": "1b2b704d2518a146e2b64ff290635fab",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/1227914f6c0c902eedef96d9f426522a64d91d": "9705b2fbd6f747aa3b7643bb32df6905",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/7c0beecf79f3ccee48efc4bc10d7f38812c6fd": "da87ffc8e71230a36421a95643978f48",
".git/objects/81/eb9628e664ecd819438cefc16df0cc6ea96e8f": "1e9b42be994ea8a01461a14967750623",
".git/objects/86/a90168ae8b5f9ec67e0c5285e171f408039f36": "d4c03b159abffef416278ecd315b22ba",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/2f/d19e60c5f1ac1d357489f60f34fb94a1360620": "57008c3e097572951e9bbc53b6b2a650",
".git/objects/2f/9e09a18655a13236e0eff8de14239d7d0d731e": "5795ed8673516da75d7bf936b1bf2213",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/27fc1a99f040f6f84f2fc15d6fe47fd7c1aea1": "d66b7c67ba17b3c9d8b732e11c8f4750",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/07/57b50df55d21448f2c5a271c94b5e641a3f5ff": "fa6f10d05c9b2e8c91d5d4df3cdf090e",
".git/objects/38/f72c3b661274731c0dca4263c6147292c3313e": "06ec909689545717240ec77454003efe",
".git/objects/00/b5242e7128985eda7a7bf6e63962c0d902e5c6": "2c751edd6499f5ee814e41705f77f218",
".git/objects/31/2fe99d4434fa3a8411e898492427653c64b65c": "a7f7538e6342ad39cfd1eff4b3e4427e",
".git/objects/96/e8a79d108dc255d33b3a489349a7083b4e52e0": "903653832196b138d337d5e6aac14800",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/30/c328499ca652fec72f223bdc5c838d3684ada0": "acd67f0614ee5c45a65c745f16b5d1d2",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/37/612f3d90f4b40a12c5efa0075b40bebcf8002c": "213a5c6daef5d18fd0150a81649ec8bc",
".git/objects/08/32883f4106ecc57b8117c74397861c6f0364a2": "41bc04ac153bd9742948f95fe8fde876",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/39/d0a8cd8157fa4905974b5c4d162f0ffdaa208f": "7c03bafb4e659eeff638109a08115a32",
".git/objects/52/f8f82afa84ba7c0674222c24eea9ed562e67ee": "d74eabcd3efb9e2f04bb105144f334c7",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/dd5449cced1082d92dbdc10311f9d14950e138": "948330748764fc698fc60ceb743f0ae5",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a0/b2f7c9a72e5d741d4542ddb61543f15d4a66fb": "fc94a2155c6ca6b7df2e9142f86fe394",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/dc/3b3c1eefb3a6c2f2584f48a084752444302748": "b7d4fcd7c3b226a63786435706f8d61a",
".git/objects/b6/3e2b52844aac4c7c62edc42d30710f922563ce": "02c32945f6cd2f7d645b8bb6b8e7173c",
".git/objects/d5/a699e027dd06e354590e4d5adf3293fd1db5ce": "a07623a9c9b54b2f9f52d64edf94d5d9",
".git/objects/d2/7ccc7a7edda57c7154be426cb410b941d7f6c9": "88ece07771dc3d4edcca187eb4e7de8c",
".git/objects/aa/cf8bd92763d6c27faa21f486abf40e28145bd7": "1361972a0b4cd3f5bc725ea446710de8",
".git/objects/af/a10e3061f0c1a00b3ec5c22c9bad0702afa04f": "75bb7fe0d725b19f556bd88f404cbb00",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/83bcc62a960f1cfeaeec58c766aba1a423f574": "b95f67dc2a48b3d34f189d859069cac8",
".git/objects/db/150c6e3dc0f7eaaf0eba721a1efe272c2cf099": "12cf9194eee7191cb553ce2719f48818",
".git/objects/a8/5a2843d27d83dbbbba145b561cabb74db81fc6": "abcb60250b65974c2cc828742aaca987",
".git/objects/de/6cd85bb7dd3e154313cea0d0d9f0edb2f5ecb8": "1a8c2c749a870273f63ce0db41a0e1fc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/bbc52730a2502b818d7995f91c494f1b9e1112": "abc62612b2dab5008856ae8d10efb689",
".git/objects/ea/eb99866d379855e1beaedf453022705275b52f": "603f13fcb5e95cdf826a1adcbb5922a0",
".git/objects/cc/7e6ba91aef98bef2be77765bd510834601fbd5": "a292ce9e0843b2ffefe17f87c3f3bd47",
".git/objects/f7/65abf38bebd43844c9c96b8f1c0d924f471668": "63e8f88b4b5bc8ed11dd75aace0415c7",
".git/objects/fa/9d76462da98178de52713aea68b8f6360948ae": "58f5f22f605af4c1a753ef182adadf24",
".git/objects/e7/a1f567ea9b149ecab10098e979df736298d7aa": "a4b9cdf652d26454800f516a06b81851",
".git/objects/e7/411fe1887de44754b766aee0abd1a6788af6e0": "a08c9fbc7b3a0d0d8fdb64bdfcebb0a8",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/ce/aa6381478b4158f1c917c4df6ffe374355ab74": "ce2479f67df51bc62dd58676d658780b",
".git/objects/e0/05b1edc0de3432ca73bbcf3d1e5e9b542ea4d5": "b9e50dfc90c41ed44fcc8faa1920609f",
".git/objects/46/822d05bb08ff1982dd749c1ae9528037071a93": "fcc2a8b29241446faba904b37a9c1b27",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/d0d7dce74d0174e26ce9fa32a3bdef61628de4": "0782d4f91f91cb04d57cc83d9a421c15",
".git/objects/79/b5d40710a117ba1a3c52e2aa1aa797035d0cd2": "fac632aedffa93dbc285285b1128ff4b",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/41/7bba72dbc3cbddfbdf0374dba5859e7dde1841": "c04f722f6346e28366f2693fd42c4035",
".git/objects/83/22d13e6a6b52fc68afc38c4f305f83e08904c3": "45d549efc44259836c1ef79bfda16bd6",
".git/objects/70/f4b47ec3a3741330d1c2b9d5918d5bc72f8442": "602d31382b9e8b80f0449828d1e16cd1",
".git/objects/70/9808f9bf74b25d00d2bc0eec13d7783544a3ba": "012210e5568df4009c70da73399e741c",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/23/040c627a8f439b886262909c7db7abab4b816e": "0efb1a73f424d8c61f27c864f3248fe9",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/4f/615f6f7752a81e907f5e1296b998fd147d791e": "ae465a4dcd6d03b0ef81345797cd0f94",
".git/objects/4f/0fded00838027c528601a93cb15af1e0e548cc": "7f243842e48394a87405bca35b176ab2",
".git/objects/15/926e64c2a98ccbaa0c95d5595f0c58e182345a": "eff8875808350d47ce16eea06d530b92",
".git/objects/15/fdc4c771977b9ff553d3ff8b6a1a61f83dcb3b": "1cd7015bef2979a6ff9813fd7f6a18ca",
".git/objects/8c/653d7f31df1710ce7e01bc5219d2af621bc2c6": "9450e032cbd5129e9fb9ecb6700ce6b8",
".git/objects/85/0f742b7040a4caba92725bd2bb4fc0d08d53ee": "33fc5facc6e822825560aff2c6b96303",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1d/965d1c74e7a04e4debbc7da8a63e32e42d67c3": "c2533f1e7929fed125e09e322129634e",
".git/objects/76/f4d366445dd5e342db671ae27ccd77fac42f58": "95448906c0d8e7d5c8a153438f74112a",
".git/objects/1c/680921f31518ac897189cc76e9b089ce6b4110": "fe5b9a630fc5f888d38ffe6f46ebfdc3",
".git/objects/40/08077cb759f43e0d00fac65362da7995438b29": "99b4c18670f9a0d94ff8a20971d83928",
".git/objects/2e/a6403c2a5791fe307295d0cff15dca813fd6fc": "7d6bbddb625e9463a740d627ca08644c",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/13/61751fd5a95e9e281d690742e8bf03e670d3ef": "c9caa1b03d9703b91d37d8b28c1da64e",
".git/objects/13/214e006c0c6e5f0173d8cfcbe0503eb6408a58": "67a1dd571a99c7710cec0790ada0ac46",
".git/objects/7a/991120f491116baf3a35f444e586cda21f5755": "396d75c454d5442f18322baf0ea9ae43",
".git/objects/14/77ccbfd6931f61b233f4c5a9d46bccdb0e8ae4": "f9384e8a590c214cf12a5ae5171512d7",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/25/6395932764f7212e2dcac033384e6b198790a0": "dc245e84dd2e7de254e2bc77a6014109",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cc2e786f12eccd2d9d65afad276b3231",
".git/logs/refs/heads/main": "cc2e786f12eccd2d9d65afad276b3231",
".git/logs/refs/remotes/origin/main": "ba24e58850e98f8612b880833516602a",
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
".git/refs/heads/main": "6d84f443a4109437c2264ea101b5f7b0",
".git/refs/remotes/origin/main": "6d84f443a4109437c2264ea101b5f7b0",
".git/index": "37d685baf244df9c31b880813e9e23be",
".git/COMMIT_EDITMSG": "329f4e94fd9e7a0ceec83b4a2fc5439e",
".git/FETCH_HEAD": "4cc0bac857ab15fec62e9cb0bba42839",
"assets/AssetManifest.json": "95507672346e1b16eb46a90b0d25a7a0",
"assets/NOTICES": "2aeacfebcf9a3da824dcd2b4a3b48245",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "752849d6980bb9631ed16a1457f9433d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "cb3d83b17fbb47304c97ff05591690d5",
"assets/fonts/MaterialIcons-Regular.otf": "7ad08c2b0805de6cd4de5323e82bfa4f",
"assets/assets/owner.png": "8efe6baa5b5706eab2c20d85ed650016",
"assets/assets/fly.png": "041ee41927d39aa6ea8498c568ab9e7b",
"assets/assets/warrior.jpg": "de9e5e6ea067a4522b51e3ebeb33b6bc",
"assets/assets/stand.png": "a27f341f54100cb73637531fbe6a0935",
"assets/assets/half_stand.png": "95818730c0a6fb65ae7133b3aba30ebd",
"assets/assets/sit.png": "8e216310602c56c5a342f27114392a37",
"assets/assets/think2.jpg": "7455ac77c4edc86983aa35288eed0e24",
"assets/assets/think3.jpg": "fe372d702890f0b370ee80598f7eb2ec",
"assets/assets/think.png": "903dfac6e5f209f0a3efd205ff91ed40",
"assets/assets/lanjin.jpeg": "7eaeed8f1fe4d91a0ff07141f9b6a903",
"assets/assets/torger.jpeg": "9a30b4bae7ab57e6cbdce057d5fcb938",
"assets/assets/sit2.png": "c4105bd45ac7eae309f0eea94ee85533",
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
