/**
 * @file Contains a dictionary of translations by language.
 * @since 0.0.1
 * @module haiku.js
 * @version 0.0.1
 * @author Jonathan D. Lettvin <jlettvin@gmail.com>
 * @license GPL-3.0
 *
 * @todo refactor to enable loading different translation collections.
 *
 * jsdoc  haiku.js
 * jshint haiku.js
 */

$(document).ready(function () {
/**
 * @function HAIKU
 * @param {function} f - A function to lex for text content in a comment.
 * @returns unicode normalization form C representation of translation.
 *
 * PHP-style HEREDOC enabling multi-line text fields.
 */
function HAIKU(f) {
    var txt = f.toString().split('\n').slice(1,-1).join('\n').normalize('NFC');
    return document.wiki.markdown(txt);
}

/**
 * @var document.haiku
 *
 * Dictionary of translations keyed by language.
 * The key is composed from two parts separated by the vertical bar character:
 * 1. Dialect name in English
 * 2. Dialect name in dialect (unicode)
 */
document.haiku = {
    "JLettvin": {
        "Sin": {
"Afrikaans|Afrikaans": HAIKU(function() {/*
 Te oordeel sonde is sonde.
 God oordeel ons gou genoeg nie.
 Kom ons wees vriende tot dan.
*/}),
 "Albanian|Shqiptar": HAIKU(function() {/*
 Duke gjykuar mëkatin është mëkat.
 Perëndia na gjykon mjaft shpejt.
 Le të jenë miqtë deri atëherë.
*/}),
 "Amharic|አማርኛ": HAIKU(function() {/*
 ኃጢአት ላይ ከመፍረድ ኃጢአት ነው.
 አምላክ በቅርቡ በቂ ይፈርዳል.
 የአምላክ በዚያን ጊዜ ድረስ ጓደኞች እንሁን.
*/}),
 "Arabic|العربية": HAIKU(function() {/*
 الحكم على الخطيئة هي الخطيئة.
 الله يحكم لنا قريبا بما فيه الكفاية.
 دعنا نكون أصدقاء حتى ذلك الحين.
*/}),
 "Armenian|հայերեն": HAIKU(function() {/*
 Դատելով մեղքը մեղք է:
 Աստված դատում մեզ շուտով բավարար.
 Եկեք լինի Ընկերներ մինչ այդ:
*/}),
 "Azerbaijani|Azərbaycan": HAIKU(function() {/*
 günah Münsiflər günahdır.
 Allah bizə tezliklə kifayət qədər hökm.
 ardından qədər dost olsun.
*/}),
 "Basque|Euskal": HAIKU(function() {/*
 sin ikusita sin da.
 Jainkoak epaitu digu bezain azkar.
 Izan gaitezen lagun ordura arte.
*/}),
 "Belarusian|беларускі": HAIKU(function() {/*
 Калі судзіць грэх з'яўляецца грахом.
 Бог судзіць нас дастаткова хутка.
 Давайце будзем сябрамі, пакуль пазней.
*/}),
 "Bengali|বাঙালি": HAIKU(function() {/*
 পাপ বিচার পাপ নেই.
 ঈশ্বর আমাদের শীঘ্রই পর্যাপ্ত ফয়সালা করেন.
 আমাদের তখন পর্যন্ত বন্ধুদের হউক.
*/}),
 "Bosnian|Bosanski": HAIKU(function() {/*
 potreban prevod.
*/}),
 "Bulgarian|български": HAIKU(function() {/*
 Превод необходимо.
*/}),
 "Catalan|Català": HAIKU(function() {/*
 La traducció necessària.
*/}),
 "Cebuano|Cebuano": HAIKU(function() {/*
 gikinahanglan sa paghubad.
*/}),
 "Chichewa|Chichewa": HAIKU(function() {/*
 Translation zofunika.
*/}),
 "Chinese|中文": HAIKU(function() {/*
 翻譯需要。
*/}),
 "Corsican|Corsu": HAIKU(function() {/*
 Traduzione bisognu.
*/}),
 "Croatian|Hrvatski": HAIKU(function() {/*
 Prevođenje potrebno.
*/}),
 "Czech|čeština": HAIKU(function() {/*
 Překlad potřeba.
*/}),
 "Danish|Dansk": HAIKU(function() {/*
 Oversættelse nødvendig.
*/}),
 "Dutch|Nederlands": HAIKU(function() {/*
 Vertaling nodig.
*/}),
 "English|English": HAIKU(function() {/*
 'Tis sin to judge sin.
 God sorts us out soon enough.
 Let's be friends 'til then.
*/}),
 "Esperanto|Esperanto": HAIKU(function() {/*
 Translation bezonis.
*/}),
 "Estonian|Eesti": HAIKU(function() {/*
 Tõlge vaja.
*/}),
 "Filipino|Pilipino": HAIKU(function() {/*
 kailangan Translation.
*/}),
 "Finnish|Suomalainen": HAIKU(function() {/*
 Käännös tarvitaan.
*/}),
 "French|Français": HAIKU(function() {/*
 Traduction nécessaire.
*/}),
 "Frisian|Frysk": HAIKU(function() {/*
 Oersetting nedich.
*/}),
 "Galician|Galego": HAIKU(function() {/*
 Tradución necesario.
*/}),
 "Georgian|ქართული": HAIKU(function() {/*
 თარგმანი საჭირო.
*/}),
 "German|Deutsche": HAIKU(function() {/*
 Übersetzung benötigt.
*/}),
 "Greek|ελληνικά": HAIKU(function() {/*
 χρειάζεται μετάφραση.
*/}),
 "Gujarati|ગુજરાતી": HAIKU(function() {/*
 અનુવાદ જરૂર છે.
*/}),
 "Haitian Creole|Kreyòl ayisyen": HAIKU(function() {/*
 Tradiksyon nesesè.
*/}),
 "Hausa|Hausa": HAIKU(function() {/*
 Translation da ake bukata.
*/}),
 "Hawaiian|ʻŌlelo Hawaiʻi": HAIKU(function() {/*
 Translation pono.
*/}),
 "Hebrew|עִברִית": HAIKU(function() {/*
 תרגום הצורך.
*/}),
 "Hindi|हिंदी": HAIKU(function() {/*
 अनुवाद की जरूरत है।
*/}),
 "Hmong|Hmong": HAIKU(function() {/*
 Neeg txhais lus yuav tsum tau.
*/}),
 "Hungarian|Magyar": HAIKU(function() {/*
 Fordítás szükséges.
*/}),
 "Icelandic|Icelandic": HAIKU(function() {/*
 Þýðing þörf.
*/}),
 "Igbo|Igbo": HAIKU(function() {/*
 Translation mkpa.
*/}),
 "Indonesian|Bahasa Indonesia": HAIKU(function() {/*
 Terjemahan diperlukan.
*/}),
 "Irish|Gaeilge": HAIKU(function() {/*
 Aistriúchán teastáil.
*/}),
 "Italian|Italiano": HAIKU(function() {/*
 Traduzione necessario.
*/}),
 "Japanese|日本語": HAIKU(function() {/*
 翻訳が必要。
*/}),
 "Javanese|Jawa": HAIKU(function() {/*
*/}),
 "Kannada|ಕನ್ನಡ": HAIKU(function() {/*
 ಅನುವಾದ ಅಗತ್ಯ.
*/}),
 "Kazakh|Қазақ": HAIKU(function() {/*
 Аударма қажет.
*/}),
 "Khmer|ភាសាខ្មែរ": HAIKU(function() {/*
 ការបកប្រែត្រូវការជាចាំបាច់។
*/}),
 "Korean|한국어": HAIKU(function() {/*
 번역이 필요합니다.
*/}),
 "Kurdish (Kurmanji)|Kurdî (kurmancî)": HAIKU(function() {/*
 Werger pêwîst.
*/}),
 "Kyrgyz|Кыргызча": HAIKU(function() {/*
 Котормо керек.
*/}),
 "Lao|ລາວ": HAIKU(function() {/*
 ການແປພາສາທີ່ຈໍາເປັນ.
*/}),
 "Latin|Latinae": HAIKU(function() {/*
*/}),
 "Latvian|Latvijas": HAIKU(function() {/*
 Tulkošana nepieciešams.
*/}),
 "Lithuanian|Lietuvos": HAIKU(function() {/*
 Vertimas reikia.
*/}),
 "Lexembourgish|Lëtzebuergesch": HAIKU(function() {/*
 Iwwersetzung waren.
*/}),
 "Macedonian|Македонски": HAIKU(function() {/*
 Превод е потребно.
*/}),
 "Malagasy|Malagasy": HAIKU(function() {/*
 Translation ilaina.
*/}),
 "Malay|Malay": HAIKU(function() {/*
 Terjemahan diperlukan.
*/}),
 "Malayalam|മലയാളം": HAIKU(function() {/*
 പരിഭാഷ ആവശ്യമായിരുന്നു.
*/}),
 "Maltese|Malti": HAIKU(function() {/*
 Traduzzjoni meħtieġa.
*/}),
 "Maori|Maori": HAIKU(function() {/*
 Translation hiahiatia.
*/}),
 "Marathi|मराठी": HAIKU(function() {/*
 भाषांतर करणे आवश्यक आहे.
*/}),
 "Mongolian|Монгол": HAIKU(function() {/*
 Орчуулга хэрэгтэй.
*/}),
 "Myanmar (Burmese)|မြန်မာ (ဗမာ)": HAIKU(function() {/*
 ဘာသာပြန်ချက်လိုအပ်ခဲ့ပါတယ်။
*/}),
 "Nepali|नेपाली": HAIKU(function() {/*
 अनुवाद आवश्यक।
*/}),
 "Norwegian|Norsk": HAIKU(function() {/*
 Oversettelse nødvendig.
*/}),
 "Pashto|پښتو": HAIKU(function() {/*
 ژباړه ته اړتیا لري.
*/}),
 "Persian|فارسی": HAIKU(function() {/*
 ترجمه مورد نیاز است.
*/}),
 "Polish|Polskie": HAIKU(function() {/*
 Tłumaczenie potrzebne.
*/}),
 "Portuguese|Português": HAIKU(function() {/*
 Tradução necessário.
*/}),
 "Punjabi|ਪੰਜਾਬੀ ਦੇ": HAIKU(function() {/*
 ਅਨੁਵਾਦ ਦੀ ਲੋੜ ਸੀ.
*/}),
 "Romanian|Română": HAIKU(function() {/*
 E nevoie de traducere.
*/}),
 "Russian|Русский": HAIKU(function() {/*
 E nevoie de traducere.
*/}),
 "Samoan|Samoa": HAIKU(function() {/*
 manaomia Faaliliuga.
*/}),
 "Scots Gaelic|Gàidhlig": HAIKU(function() {/*
 Eadar-theangachadh a dhìth.
*/}),
 "Serbian|Српски": HAIKU(function() {/*
 потребан превод.
*/}),
 "Sesotho|Sesotho": HAIKU(function() {/*
 Phetolelo e hlokahalang.
*/}),
 "Shona|Shona": HAIKU(function() {/*
 Translation inodiwa.
*/}),
 "Sindhi|سنڌي": HAIKU(function() {/*
 ترجمو جي ضرورت آهي.
*/}),
 "Sinhala|සිංහල": HAIKU(function() {/*
 පරිවර්තනය අවශ්ය විය.
*/}),
 "Slovak|Slovenský": HAIKU(function() {/*
 Preklad potreba.
*/}),
 "Slovenian|Slovenski": HAIKU(function() {/*
 Prevajanje potrebna.
*/}),
 "Somali|Soomaali": HAIKU(function() {/*
 Translation loo baahan yahay.
*/}),
 "Spanish|Español": HAIKU(function() {/*
 La traducción necesaria.
*/}),
 "Sundanese|Sunda": HAIKU(function() {/*
 Tarjamahan diperlukeun.
*/}),
 "Swahili|Kiswahili": HAIKU(function() {/*
 Tafsiri inahitajika.
*/}),
 "Swedish|Svensk": HAIKU(function() {/*
 Översättning behövs.
*/}),
 "Tajik|Тоҷикистон": HAIKU(function() {/*
 Тарҷумаи лозим.
*/}),
 "Tamil|தமிழ்": HAIKU(function() {/*
 மொழிபெயர்ப்பு தேவை.
*/}),
 "Telugu|తెలుగు": HAIKU(function() {/*
 అనువాద అవసరమైన.
*/}),
 "Thai|ไทย": HAIKU(function() {/*
 แปลจำเป็น
*/}),
 "Turkish|Türk": HAIKU(function() {/*
 Çeviri gerekli.
*/}),
 "Ukrainian|Український": HAIKU(function() {/*
 потрібен переклад.
*/}),
 "Urdu|اردو": HAIKU(function() {/*
 ہے.ترجمے کی ضرورت.
*/}),
// Uzbek English|dialect label breaks javascript
// "Uzbek|O'zbekiston": HAIKU(function() {/*
//Tarjima zarur.
//*/}),
 "Vietnamese|Tiếng Việt": HAIKU(function() {/*
 Dịch cần thiết.
*/}),
 "Welsh|Cymraeg": HAIKU(function() {/*
 angen cyfieithiad.
*/}),
 "Xhosa|isiXhosa": HAIKU(function() {/*
 Translation ezifunekayo.
*/}),
 "Yiddish|ייִדיש": HAIKU(function() {/*
 דזשאַדזשינג זינד איז זינד.
 גאָט סאָרץ אונדז אויס באַלד גענוג.
 זאל ס זיין קאַמראַדז ביז דעמאָלט.
*/}),
 "Yoruba|Yorùbá": HAIKU(function() {/*
 Translation ti nilo.
*/}),
 "Zulu|Zulu": HAIKU(function() {/*
 Labahumushi lalidinga abantu.
*/}),
        },
    },
}
});
