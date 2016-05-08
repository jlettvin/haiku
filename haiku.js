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
            "Moishe|מוישה": HAIKU(function() {/*
== Moishe's haiku ==
 !/Wiki output here./!
 Do you see its !=usefulness?=!
 Markdown in !_HEREDOC_!.
*/}),  //______________________________________________________________________

            "Markup|Enhance": HAIKU(function() {/*
=== FONT EFFECTS ===
!=Bold=!, !/italic/!, !_underline_!, !-strike-!.
*/}),  //______________________________________________________________________

//"Markup|Equations": HAIKU(function() {/*
//=== MATH ===
//$$e^{i \pi} + 1 = 0$$
//*/}),  //______________________________________________________________________

//"Lists|Markup": HAIKU(function() {/*
//=== LISTS ===
//*bullet 1
//*bullet 2
//#number 1
//#number 2
//*/}),  //______________________________________________________________________

//"Tables|Markup": HAIKU(function() {/*
//=== TABLES ===
//|Breakfast|$5.08
//|Lunch|$7.25
//|Dinner|$13.59
//|Total|$25.92
//*/}),  //______________________________________________________________________

            "Afrikaans|Afrikaans": HAIKU(function() {/*
 Te oordeel sonde is sonde.
 God oordeel ons gou genoeg nie.
 Kom ons wees vriende tot dan.
*/}),  //______________________________________________________________________
            "Albanian|Shqiptar": HAIKU(function() {/*
 Duke gjykuar mëkatin është mëkat.
 Perëndia na gjykon mjaft shpejt.
 Le të jenë miqtë deri atëherë.
*/}),  //______________________________________________________________________
            "Amharic|አማርኛ": HAIKU(function() {/*
 ኃጢአት ላይ ከመፍረድ ኃጢአት ነው.
 አምላክ በቅርቡ በቂ ይፈርዳል.
 የአምላክ በዚያን ጊዜ ድረስ ጓደኞች እንሁን.
*/}),  //______________________________________________________________________
            "Arabic|العربية": HAIKU(function() {/*
 الحكم على الخطيئة هي الخطيئة.
 الله يحكم لنا قريبا بما فيه الكفاية.
 دعنا نكون أصدقاء حتى ذلك الحين.
*/}),  //______________________________________________________________________
            "Armenian|հայերեն": HAIKU(function() {/*
 Դատելով մեղքը մեղք է:
 Աստված դատում մեզ շուտով բավարար.
 Եկեք լինի Ընկերներ մինչ այդ:
*/}),  //______________________________________________________________________
            "Azerbaijani|Azərbaycan": HAIKU(function() {/*
 günah Münsiflər günahdır.
 Allah bizə tezliklə kifayət qədər hökm.
 ardından qədər dost olsun.
*/}),  //______________________________________________________________________
            "Basque|Euskal": HAIKU(function() {/*
 sin ikusita sin da.
 Jainkoak epaitu digu bezain azkar.
 Izan gaitezen lagun ordura arte.
*/}),  //______________________________________________________________________
            "Belarusian|беларускі": HAIKU(function() {/*
 Калі судзіць грэх з'яўляецца грахом.
 Бог судзіць нас дастаткова хутка.
 Давайце будзем сябрамі, пакуль пазней.
*/}),  //______________________________________________________________________
            "Bengali|বাঙালি": HAIKU(function() {/*
 পাপ বিচার পাপ নেই.
 ঈশ্বর আমাদের শীঘ্রই পর্যাপ্ত ফয়সালা করেন.
 আমাদের তখন পর্যন্ত বন্ধুদের হউক.
*/}),  //______________________________________________________________________
            "Bosnian|Bosanski": HAIKU(function() {/*
 potreban prevod.
*/}),  //______________________________________________________________________
            "Bulgarian|български": HAIKU(function() {/*
 Превод необходимо.
*/}),  //______________________________________________________________________
            "Catalan|Català": HAIKU(function() {/*
 La traducció necessària.
*/}),  //______________________________________________________________________
            "Cebuano|Cebuano": HAIKU(function() {/*
 gikinahanglan sa paghubad.
*/}),  //______________________________________________________________________
            "Chichewa|Chichewa": HAIKU(function() {/*
 Translation zofunika.
*/}),  //______________________________________________________________________
            "Chinese|中文": HAIKU(function() {/*
 翻譯需要。
*/}),  //______________________________________________________________________
            "Corsican|Corsu": HAIKU(function() {/*
 Traduzione bisognu.
*/}),  //______________________________________________________________________
            "Croatian|Hrvatski": HAIKU(function() {/*
 Prevođenje potrebno.
*/}),  //______________________________________________________________________
            "Czech|čeština": HAIKU(function() {/*
 Překlad potřeba.
*/}),  //______________________________________________________________________
            "Danish|Dansk": HAIKU(function() {/*
 Oversættelse nødvendig.
*/}),  //______________________________________________________________________
            "Dutch|Nederlands": HAIKU(function() {/*
 Vertaling nodig.
*/}),  //______________________________________________________________________
            "English|English": HAIKU(function() {/*
 'Tis sin to judge sin.
 God sorts us out soon enough.
 Let's be friends 'til then.
*/}),  //______________________________________________________________________
            "Esperanto|Esperanto": HAIKU(function() {/*
 Translation bezonis.
*/}),  //______________________________________________________________________
            "Estonian|Eesti": HAIKU(function() {/*
 Tõlge vaja.
*/}),  //______________________________________________________________________
            "Filipino|Pilipino": HAIKU(function() {/*
 kailangan Translation.
*/}),  //______________________________________________________________________
            "Finnish|Suomalainen": HAIKU(function() {/*
 Käännös tarvitaan.
*/}),  //______________________________________________________________________
            "French|Français": HAIKU(function() {/*
 Traduction nécessaire.
*/}),  //______________________________________________________________________
            "Frisian|Frysk": HAIKU(function() {/*
 Oersetting nedich.
*/}),  //______________________________________________________________________
            "Galician|Galego": HAIKU(function() {/*
 Tradución necesario.
*/}),  //______________________________________________________________________
            "Georgian|ქართული": HAIKU(function() {/*
 თარგმანი საჭირო.
*/}),  //______________________________________________________________________
            "German|Deutsche": HAIKU(function() {/*
 Übersetzung benötigt.
*/}),  //______________________________________________________________________
            "Greek|ελληνικά": HAIKU(function() {/*
 χρειάζεται μετάφραση.
*/}),  //______________________________________________________________________
            "Gujarati|ગુજરાતી": HAIKU(function() {/*
 અનુવાદ જરૂર છે.
*/}),  //______________________________________________________________________
            "Haitian Creole|Kreyòl ayisyen": HAIKU(function() {/*
 Tradiksyon nesesè.
*/}),  //______________________________________________________________________
            "Hausa|Hausa": HAIKU(function() {/*
 Translation da ake bukata.
*/}),  //______________________________________________________________________
            "Hawaiian|ʻŌlelo Hawaiʻi": HAIKU(function() {/*
 Translation pono.
*/}),  //______________________________________________________________________
            "Hebrew|עִברִית": HAIKU(function() {/*
 תרגום הצורך.
*/}),  //______________________________________________________________________
            "Hindi|हिंदी": HAIKU(function() {/*
 अनुवाद की जरूरत है।
*/}),  //______________________________________________________________________
            "Hmong|Hmong": HAIKU(function() {/*
 Neeg txhais lus yuav tsum tau.
*/}),  //______________________________________________________________________
            "Hungarian|Magyar": HAIKU(function() {/*
 Fordítás szükséges.
*/}),  //______________________________________________________________________
            "Icelandic|Icelandic": HAIKU(function() {/*
 Þýðing þörf.
*/}),  //______________________________________________________________________
            "Igbo|Igbo": HAIKU(function() {/*
 Translation mkpa.
*/}),  //______________________________________________________________________
            "Indonesian|Bahasa Indonesia": HAIKU(function() {/*
 Terjemahan diperlukan.
*/}),  //______________________________________________________________________
            "Irish|Gaeilge": HAIKU(function() {/*
 Aistriúchán teastáil.
*/}),  //______________________________________________________________________
            "Italian|Italiano": HAIKU(function() {/*
 Traduzione necessario.
*/}),  //______________________________________________________________________
            "Japanese|日本語": HAIKU(function() {/*
 翻訳が必要。
*/}),  //______________________________________________________________________
            "Javanese|Jawa": HAIKU(function() {/*
*/}),  //______________________________________________________________________
            "Kannada|ಕನ್ನಡ": HAIKU(function() {/*
 ಅನುವಾದ ಅಗತ್ಯ.
*/}),  //______________________________________________________________________
            "Kazakh|Қазақ": HAIKU(function() {/*
 Аударма қажет.
*/}),  //______________________________________________________________________
            "Khmer|ភាសាខ្មែរ": HAIKU(function() {/*
 ការបកប្រែត្រូវការជាចាំបាច់។
*/}),  //______________________________________________________________________
            "Korean|한국어": HAIKU(function() {/*
 번역이 필요합니다.
*/}),  //______________________________________________________________________
            "Kurdish (Kurmanji)|Kurdî (kurmancî)": HAIKU(function() {/*
 Werger pêwîst.
*/}),  //______________________________________________________________________
            "Kyrgyz|Кыргызча": HAIKU(function() {/*
 Котормо керек.
*/}),  //______________________________________________________________________
            "Lao|ລາວ": HAIKU(function() {/*
 ການແປພາສາທີ່ຈໍາເປັນ.
*/}),  //______________________________________________________________________
            "Latin|Latinae": HAIKU(function() {/*
*/}),  //______________________________________________________________________
            "Latvian|Latvijas": HAIKU(function() {/*
 Tulkošana nepieciešams.
*/}),  //______________________________________________________________________
            "Lithuanian|Lietuvos": HAIKU(function() {/*
 Vertimas reikia.
*/}),  //______________________________________________________________________
            "Lexembourgish|Lëtzebuergesch": HAIKU(function() {/*
 Iwwersetzung waren.
*/}),  //______________________________________________________________________
            "Macedonian|Македонски": HAIKU(function() {/*
 Превод е потребно.
*/}),  //______________________________________________________________________
            "Malagasy|Malagasy": HAIKU(function() {/*
 Translation ilaina.
*/}),  //______________________________________________________________________
            "Malay|Malay": HAIKU(function() {/*
 Terjemahan diperlukan.
*/}),  //______________________________________________________________________
            "Malayalam|മലയാളം": HAIKU(function() {/*
 പരിഭാഷ ആവശ്യമായിരുന്നു.
*/}),  //______________________________________________________________________
            "Maltese|Malti": HAIKU(function() {/*
 Traduzzjoni meħtieġa.
*/}),  //______________________________________________________________________
            "Maori|Maori": HAIKU(function() {/*
 Translation hiahiatia.
*/}),  //______________________________________________________________________
            "Marathi|मराठी": HAIKU(function() {/*
 भाषांतर करणे आवश्यक आहे.
*/}),  //______________________________________________________________________
            "Mongolian|Монгол": HAIKU(function() {/*
 Орчуулга хэрэгтэй.
*/}),  //______________________________________________________________________
            "Myanmar (Burmese)|မြန်မာ (ဗမာ)": HAIKU(function() {/*
 ဘာသာပြန်ချက်လိုအပ်ခဲ့ပါတယ်။
*/}),  //______________________________________________________________________
            "Nepali|नेपाली": HAIKU(function() {/*
 अनुवाद आवश्यक।
*/}),  //______________________________________________________________________
            "Norwegian|Norsk": HAIKU(function() {/*
 Oversettelse nødvendig.
*/}),  //______________________________________________________________________
            "Pashto|پښتو": HAIKU(function() {/*
 ژباړه ته اړتیا لري.
*/}),  //______________________________________________________________________
            "Persian|فارسی": HAIKU(function() {/*
 ترجمه مورد نیاز است.
*/}),  //______________________________________________________________________
            "Polish|Polskie": HAIKU(function() {/*
 Tłumaczenie potrzebne.
*/}),  //______________________________________________________________________
            "Portuguese|Português": HAIKU(function() {/*
 Tradução necessário.
*/}),  //______________________________________________________________________
            "Punjabi|ਪੰਜਾਬੀ ਦੇ": HAIKU(function() {/*
 ਅਨੁਵਾਦ ਦੀ ਲੋੜ ਸੀ.
*/}),  //______________________________________________________________________
            "Romanian|Română": HAIKU(function() {/*
 E nevoie de traducere.
*/}),  //______________________________________________________________________
            "Russian|Русский": HAIKU(function() {/*
 E nevoie de traducere.
*/}),  //______________________________________________________________________
            "Samoan|Samoa": HAIKU(function() {/*
 manaomia Faaliliuga.
*/}),  //______________________________________________________________________
            "Scots Gaelic|Gàidhlig": HAIKU(function() {/*
 Eadar-theangachadh a dhìth.
*/}),  //______________________________________________________________________
            "Serbian|Српски": HAIKU(function() {/*
 потребан превод.
*/}),  //______________________________________________________________________
            "Sesotho|Sesotho": HAIKU(function() {/*
 Phetolelo e hlokahalang.
*/}),  //______________________________________________________________________
            "Shona|Shona": HAIKU(function() {/*
 Translation inodiwa.
*/}),  //______________________________________________________________________
            "Sindhi|سنڌي": HAIKU(function() {/*
 ترجمو جي ضرورت آهي.
*/}),  //______________________________________________________________________
            "Sinhala|සිංහල": HAIKU(function() {/*
 පරිවර්තනය අවශ්ය විය.
*/}),  //______________________________________________________________________
            "Slovak|Slovenský": HAIKU(function() {/*
 Preklad potreba.
*/}),  //______________________________________________________________________
            "Slovenian|Slovenski": HAIKU(function() {/*
 Prevajanje potrebna.
*/}),  //______________________________________________________________________
            "Somali|Soomaali": HAIKU(function() {/*
 Translation loo baahan yahay.
*/}),  //______________________________________________________________________
            "Spanish|Español": HAIKU(function() {/*
 La traducción necesaria.
*/}),  //______________________________________________________________________
            "Sundanese|Sunda": HAIKU(function() {/*
 Tarjamahan diperlukeun.
*/}),  //______________________________________________________________________
            "Swahili|Kiswahili": HAIKU(function() {/*
 Tafsiri inahitajika.
*/}),  //______________________________________________________________________
            "Swedish|Svensk": HAIKU(function() {/*
 Översättning behövs.
*/}),  //______________________________________________________________________
            "Tajik|Тоҷикистон": HAIKU(function() {/*
 Тарҷумаи лозим.
*/}),  //______________________________________________________________________
            "Tamil|தமிழ்": HAIKU(function() {/*
 மொழிபெயர்ப்பு தேவை.
*/}),  //______________________________________________________________________
            "Telugu|తెలుగు": HAIKU(function() {/*
 అనువాద అవసరమైన.
*/}),  //______________________________________________________________________
            "Thai|ไทย": HAIKU(function() {/*
 แปลจำเป็น
*/}),  //______________________________________________________________________
            "Turkish|Türk": HAIKU(function() {/*
 Çeviri gerekli.
*/}),  //______________________________________________________________________
            "Ukrainian|Український": HAIKU(function() {/*
 потрібен переклад.
*/}),  //______________________________________________________________________
            "Urdu|اردو": HAIKU(function() {/*
 ہے.ترجمے کی ضرورت.
*/}),  //______________________________________________________________________
// Uzbek English|dialect label breaks javascript
// "Uzbek|O'zbekiston": HAIKU(function() {/*
//Tarjima zarur.
//*/}),  //______________________________________________________________________
            "Vietnamese|Tiếng Việt": HAIKU(function() {/*
 Dịch cần thiết.
*/}),  //______________________________________________________________________
            "Welsh|Cymraeg": HAIKU(function() {/*
 angen cyfieithiad.
*/}),  //______________________________________________________________________
            "Xhosa|isiXhosa": HAIKU(function() {/*
 Translation ezifunekayo.
*/}),  //______________________________________________________________________
            "Yiddish|ייִדיש": HAIKU(function() {/*
 דזשאַדזשינג זינד איז זינד.
 גאָט סאָרץ אונדז אויס באַלד גענוג.
 זאל ס זיין קאַמראַדז ביז דעמאָלט.
*/}),  //______________________________________________________________________
            "Yoruba|Yorùbá": HAIKU(function() {/*
 Translation ti nilo.
*/}),  //______________________________________________________________________
            "Zulu|Zulu": HAIKU(function() {/*
 Labahumushi lalidinga abantu.
*/}),  //______________________________________________________________________
        },
    },
}
});
