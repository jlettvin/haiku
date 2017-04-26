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
        "Nickname": {
//            "Moishe|מוישה": HAIKU(function() {/*
//*/}),  //______________________________________________________________________
//            "Markup|Enhance": HAIKU(function() {/*
//*/}),  //______________________________________________________________________
//"Markup|Equations": HAIKU(function() {/*
//*/}),  //______________________________________________________________________
//"Lists|Markup": HAIKU(function() {/*
//*/}),  //______________________________________________________________________
//"Tables|Markup": HAIKU(function() {/*
//*/}),  //______________________________________________________________________
            "Afrikaans|Afrikaans": HAIKU(function() {/*
 Ek het 'n bynaam.
 Dwase ou man verskuif berg.
 Wat is jou bynaam?
*/}),  //______________________________________________________________________
// Old Albanian (bad) translation.
// Unë kam një pseudonim.
// Budallai i vjetër ndërrime mal.
            "Albanian|Shqiptar": HAIKU(function() {/*
 Pseudonimi im është.
 Budallai i moshuar lëviz malet.
 Çfarë është pseudonimi juaj?
*/}),  //______________________________________________________________________
            "Amharic|አማርኛ": HAIKU(function() {/*
 እኔ ቅጽል ስም አለኝ.
 ሞኝ አሮጌውን ሰው ተራራ ይናገራቸዋል.
 የእርስዎ ቅጽል ምንድን ነው?
*/}),  //______________________________________________________________________
            "Arabic|العربية": HAIKU(function() {/*
 لدي كنية.
 رجل يبلغ من العمر أحمق التحولات الجبل.
 ما هو لقبك؟
*/}),  //______________________________________________________________________
            "Armenian|հայերեն": HAIKU(function() {/*
 Ես ունեմ մականունը:
 Անխելք ամյա տղամարդը տեղաշարժեր սարը.
 Որն է ձեր մականունը:
*/}),  //______________________________________________________________________
            "Azerbaijani|Azərbaycan": HAIKU(function() {/*
 Mən bir ləqəb var.
 Foolish qoca dağ asılıdır.
 Sizin ləqəb nədir?
*/}),  //______________________________________________________________________
            "Basque|Euskal": HAIKU(function() {/*
 ezizen bat daukat.
 Erhoá zaharra mendian dabilen.
 Zein da zure ezizena?
*/}),  //______________________________________________________________________
            "Belarusian|беларускі": HAIKU(function() {/*
 У мяне ёсць мянушка.
 Дурны стары зрушвае горы.
 Што такое ваш нік?
*/}),  //______________________________________________________________________
            "Bengali|বাঙালি": HAIKU(function() {/*
 আমি একটি ডাকনাম আছে.
 বোকা স্বামী পর্বত বদল.
 আপনার ডাকনাম কি?
*/}),  //______________________________________________________________________
            "Bosnian|Bosanski": HAIKU(function() {/*
 Imam nadimak.
 Budalasti starac pomera planine.
 Koji je tvoj nadimak?
*/}),  //______________________________________________________________________
            "Bulgarian|български": HAIKU(function() {/*
 Имам псевдоним.
 Стар глупак измества планина.
 Какъв е твоя прякор?
*/}),  //______________________________________________________________________
            "Catalan|Català": HAIKU(function() {/*
 Tinc un sobrenom.
 vell ximple desplaça muntanya.
 Quin és el teu sobrenom?
*/}),  //______________________________________________________________________
            "Cebuano|Cebuano": HAIKU(function() {/*
 Ako adunay usa ka angga.
 Buang-buang tigulang nga tawo mobalhin bukid.
 Unsa ang imong angga?
*/}),  //______________________________________________________________________
            "Chichewa|Chichewa": HAIKU(function() {/*
 Ndili ndi dzina.
 Wopusa nkhalamba akugwiritsa phiri.
 dzina lako ndani?
*/}),  //______________________________________________________________________
            "Chinese|中文": HAIKU(function() {/*
 我有一个绰号。
 愚公移山。
 什么是您的昵称？
*/}),  //______________________________________________________________________
            "Corsican|Corsu": HAIKU(function() {/*
 Mi pirmittissi 'na cosa tua.
 Suite omu vecchiu spicciava muntagna.
 Cosa hè cosa tua?
*/}),  //______________________________________________________________________
            "Croatian|Hrvatski": HAIKU(function() {/*
 Imam nadimak.
 Glupo starac pomiče planine.
 Koji je tvoj nadimak?
*/}),  //______________________________________________________________________
            "Czech|čeština": HAIKU(function() {/*
 Mám přezdívku.
 Pošetilý stařík posune horu.
 Jaká je tvá přezdívka?
*/}),  //______________________________________________________________________
            "Danish|Dansk": HAIKU(function() {/*
 Jeg har et kaldenavn.
 Tåbelige gamle mand skifter bjerget.
 Hvad er dit kælenavn?
*/}),  //______________________________________________________________________
            "Dutch|Nederlands": HAIKU(function() {/*
 Ik heb een bijnaam.
 Dwaze oude man verschuift de bergen.
 Wat is je bijnaam?
*/}),  //______________________________________________________________________
            "English|English": HAIKU(function() {/*
 I have a nickname.
 Foolish old man moves mountain.
 What is your nickname?
*/}),  //______________________________________________________________________
            "Esperanto|Esperanto": HAIKU(function() {/*
 Ik heb een bijnaam.
 Dwaze oude man verschuift de bergen.
 Wat is je bijnaam?...
*/}),  //______________________________________________________________________
            "Estonian|Eesti": HAIKU(function() {/*
 Mul on hüüdnime.
 Rumal mees nihutab mägi.
 Mis on su hüüdnimi?
*/}),  //______________________________________________________________________
            // New translation by Michael Palmon at Deltak
            "Filipino|Pilipino": HAIKU(function() {/*
 Mayroon akong palayaw.
 Matandang tangang lalake na tumutulak ng bundok.
 Ano ang iyong palayaw.
*/}),  //______________________________________________________________________
 // Old Filibino translation.
 // Mayroon akong isang palayaw.
 // Foolish gulang Lalaki shifts bundok.
 // Ano ang iyong palayaw?
            "Finnish|Suomalainen": HAIKU(function() {/*
 Olen lempinimi.
 Tyhmät vanhus siirtyy vuori.
 Mikä on lempinimesi?
*/}),  //______________________________________________________________________
            "French|Français": HAIKU(function() {/*
 J'ai un surnom.
 Fou vieil homme qui portait une montagne.
 Quel est votre surnom?
*/}),  //______________________________________________________________________
            "Frisian|Frysk": HAIKU(function() {/*
 Ik haw in bynamme.
 Foolish âldman ferskoot berch.
 Wat is dyn bynamme?
*/}),  //______________________________________________________________________
            "Galician|Galego": HAIKU(function() {/*
 Eu teño un apelido.
 vello tolo despraza montaña.
 Cal é o seu apelido?
*/}),  //______________________________________________________________________
            "Georgian|ქართული": HAIKU(function() {/*
 მაქვს ზედმეტსახელი.
 სულელური მოხუცი გადადის მთის.
 რა არის შენი მეტსახელი?
*/}),  //______________________________________________________________________
            "German|Deutsche": HAIKU(function() {/*
 Ich habe einen Spitznamen.
 Yü verschiebt Berg.
 Was ist dein Username?
*/}),  //______________________________________________________________________
            "Greek|ελληνικά": HAIKU(function() {/*
 Έχω ένα ψευδώνυμο.
 Ανόητο γέρο μετατοπίζεται στο βουνό.
 Ποιο είναι το παρατσούκλι σου?
*/}),  //______________________________________________________________________
            "Gujarati|ગુજરાતી": HAIKU(function() {/*
 હું એક ઉપનામ છે.
 મૂર્ખ જૂના માણસ પર્વત લઇ જાય છે.
 તમારા ઉપનામ શું છે?
*/}),  //______________________________________________________________________
            "Haitian Creole|Kreyòl ayisyen": HAIKU(function() {/*
 Mwen gen yon tinon.
 Tèt chaje vye granmoun gason orè mòn.
 Ki sa ki se tinon ou a?
*/}),  //______________________________________________________________________
            "Hausa|Hausa": HAIKU(function() {/*
 Ina da wani sunan barkwanci.
 Wauta tsohon mutum canjawa dutsen.
 Mene ne sunan barkwanci?
*/}),  //______________________________________________________________________
            "Hawaiian|ʻŌlelo Hawaiʻi": HAIKU(function() {/*
 I loaa he inoa kapakapa.
 Lapuwale elemakule kanaka i hoʻololi mauna.
 He aha kou inoa kapakapa?
*/}),  //______________________________________________________________________
            "Hebrew|עִברִית": HAIKU(function() {/*
 יש לי כינוי.
 זקן שוטה משמרות ההר.
 מה הכינוי שלך?
*/}),  //______________________________________________________________________
            "Hindi|हिंदी": HAIKU(function() {/*
 मैं एक उपनाम है।
 मूर्ख बूढ़े आदमी पहाड़ पाली।
 आपका उपनाम क्या है?
*/}),  //______________________________________________________________________
            "Hmong|Hmong": HAIKU(function() {/*
 Kuv muaj ib tug npe menyuam yaus.
 Ruam txiv neej laus laus shifts roob.
 Yuav ua li cas yog koj lub npe menyuam yaus?
*/}),  //______________________________________________________________________
            "Hungarian|Magyar": HAIKU(function() {/*
 Van egy becenevet.
 Bolond öreg eltolódik hegyen.
 Mi a beceneved?
*/}),  //______________________________________________________________________
            "Icelandic|Icelandic": HAIKU(function() {/*
 Ég er með gælunafn.
 Heimskur maður gamall vaktir fjall.
 Hvað er gælunafnið þitt?
*/}),  //______________________________________________________________________
            "Igbo|Igbo": HAIKU(function() {/*
 M nwere a aha otutu.
 Nzuzu agadi nwoke akọwa ugwu.
 Gịnị bụ gị aha otutu?
*/}),  //______________________________________________________________________
            "Indonesian|Bahasa Indonesia": HAIKU(function() {/*
 Saya punya julukan.
 Orang tua bodoh menggeser gunung.
 Apa nama panggilanmu?
*/}),  //______________________________________________________________________
            "Irish|Gaeilge": HAIKU(function() {/*
 Tá mé leasainm.
 shifts fear foolish sean sléibhe.
 Cad é do leasainm?
*/}),  //______________________________________________________________________
            "Italian|Italiano": HAIKU(function() {/*
 Ho un soprannome.
 Foolish vecchio si sposta in montagna.
 Qual è il tuo soprannome?
*/}),  //______________________________________________________________________
            "Japanese|日本語": HAIKU(function() {/*
 私はニックネームを持っています。
 愚かな老人が山を移します。
 あなたのニックネームは何ですか？
*/}),  //______________________________________________________________________
            "Javanese|Jawa": HAIKU(function() {/*
 Aku duwe celukan.
 wong lawas Gemblung shifts gunung.
 Apa julukan Panjenengan?
*/}),  //______________________________________________________________________
            "Kannada|ಕನ್ನಡ": HAIKU(function() {/*
 ನಾನು ಅಡ್ಡಹೆಸರು ಹೊಂದಿವೆ.
 ಮೂರ್ಖ ಯಜಮಾನ ಪರ್ವತ ಬದಲಿಸುತ್ತದೆ.
 ನಿಮ್ಮ ಅಡ್ಡಹೆಸರು ಏನು?
*/}),  //______________________________________________________________________
            "Kazakh|Қазақ": HAIKU(function() {/*
 Мен лақап бар.
 Ақымақ жастағы ер тауға жылжытады.
 Сіздің лақап қандай?
*/}),  //______________________________________________________________________
            "Khmer|ភាសាខ្មែរ": HAIKU(function() {/*
 ខ្ញុំមានឈ្មោះហៅក្រៅ។
 បុរសម្នាក់អាយុល្ងង់ផ្លាស់ប្តូភ្នំ។
 តើ​អ្វី​ទៅ​ជា​ឈ្មោះ​ហៅ​ក្រៅ​របស់​អ្នក?
*/}),  //______________________________________________________________________
            "Korean|한국어": HAIKU(function() {/*
 나는 별명을 가지고있다.
 어리석은 노인이 산을 이동합니다.
 닉네임은 무엇입니까?
*/}),  //______________________________________________________________________
            "Kurdish (Kurmanji)|Kurdî (kurmancî)": HAIKU(function() {/*
 Ez xwedî nickname.
 wî mirovê bêaqil e old çiyayê pîroz.
 Navê xwe çi ye?
*/}),  //______________________________________________________________________
            "Kyrgyz|Кыргызча": HAIKU(function() {/*
 Мен ылакап бар.
 Акылсыз абышка тоого алмаштырат.
 Сиздин ник?
*/}),  //______________________________________________________________________
            "Lao|ລາວ": HAIKU(function() {/*
 ຂ້າພະເຈົ້າມີຊື່ຫນຶ່ງ.
 ຜູ້ຊາຍອາຍຸ Foolish shifts ພູເຂົາ.
 ຊື່ຂອງທ່ານແມ່ນຫຍັງ?
*/}),  //______________________________________________________________________
            "Latin|Latinae": HAIKU(function() {/*
 Habere cognomen.
 Stultus senex monte micant.
 Quid est cognomen?
*/}),  //______________________________________________________________________
            "Latvian|Latvijas": HAIKU(function() {/*
 Man ir segvārdu.
 Muļķīgi vecs vīrietis maiņās kalnu.
 Kāda ir tava iesauka?
*/}),  //______________________________________________________________________
            "Lithuanian|Lietuvos": HAIKU(function() {/*
 Turiu slapyvardį.
 Kvailas vyras pastumia kalną.
 Kokia tavo pravardė?
*/}),  //______________________________________________________________________
            "Lexembourgish|Lëtzebuergesch": HAIKU(function() {/*
 Ech hunn e Spëtznumm.
 Dommen ale Mann unzepassen Bierg.
 Wat ass Äre Spëtznumm?
*/}),  //______________________________________________________________________
            "Macedonian|Македонски": HAIKU(function() {/*
 Имам прекар.
 Глупави старец смени планината.
 Што е вашиот прекар?
*/}),  //______________________________________________________________________
            "Malagasy|Malagasy": HAIKU(function() {/*
 Manana anaram-bositra.
 Adala lahiantitra mpiasa miasa an-tendrombohitra.
 Inona no anaram-bositra?
*/}),  //______________________________________________________________________
            "Malay|Malay": HAIKU(function() {/*
 Saya mempunyai nama samaran.
 lelaki tua bodoh beralih gunung.
 Apakah nama panggilan kamu?
*/}),  //______________________________________________________________________
            "Malayalam|മലയാളം": HAIKU(function() {/*
 ഞാൻ ഒരു വിളിപ്പേര് ഉണ്ട്.
 ഓൾഡ് പർവ്വതം മാറ്റുകയും ചെയ്യുന്നു.
 നിങ്ങളുടെ ഇരട്ടപ്പേര് എന്താണ്?
*/}),  //______________________________________________________________________
            "Maltese|Malti": HAIKU(function() {/*
 I jkollhom laqam.
 raġel xiħ foolish xiftijiet muntanji.
 X'inhi l-laqam tiegħek?
*/}),  //______________________________________________________________________
            "Maori|Maori": HAIKU(function() {/*
 E ahau he īngoa.
 tangata tawhito wairangi te hünuku maunga.
 He aha te mea koutou īngoa?
*/}),  //______________________________________________________________________
            "Marathi|मराठी": HAIKU(function() {/*
 मी एक टोपणनाव आहे.
 मूर्ख म्हातारा माणूस डोंगरावर बदल.
 आपले टोपणनाव काय आहे?
*/}),  //______________________________________________________________________
            "Mongolian|Монгол": HAIKU(function() {/*
 Би хоч байдаг.
 Мунхаг өвгөн уул шилжуулж байна.
 Таны хоч нь юу вэ?
*/}),  //______________________________________________________________________
            "Myanmar (Burmese)|မြန်မာ (ဗမာ)": HAIKU(function() {/*
 ငါသည်တအမည်ပြောင်ရှိသည်။
 မိုက်မဲသောလူဟောင်းကိုတောငျကိုပြောင်းရွှေ့ရသည်။
 သင့်ရဲ့အမည်ပြောင်ကဘာလဲ?
*/}),  //______________________________________________________________________
            "Nepali|नेपाली": HAIKU(function() {/*
 म एउटा उपनाम छ।
 मूर्ख पुरानो मानिस पहाड फेरबदल।
 आफ्नो उपनाम के हो?
*/}),  //______________________________________________________________________
            "Norwegian|Norsk": HAIKU(function() {/*
 Jeg har et kallenavn.
 Tåpelig gammel mann skifter fjellet.
 Hva er kallenavnet ditt?
*/}),  //______________________________________________________________________
            "Pashto|پښتو": HAIKU(function() {/*
 زه يو مستعار نوم لري.
 ناپوه کلن سړي ته داخليږی غره.
 ستاسو د مستعار نوم څه شی دی؟
*/}),  //______________________________________________________________________
            "Persian|فارسی": HAIKU(function() {/*
 من یک نام مستعار.
 مردی نادان قدیمی کوه شیفت.
 نام مستعار شما چیست؟
*/}),  //______________________________________________________________________
            "Polish|Polskie": HAIKU(function() {/*
 Mam pseudonim.
 Foolish staruszek przenosi góry.
 Jaki jest Twój pseudonim?
*/}),  //______________________________________________________________________
            "Portuguese|Português": HAIKU(function() {/*
 Eu tenho um apelido.
 velho tolo desloca montanha.
 Qual o seu apelido?
*/}),  //______________________________________________________________________
            "Punjabi|ਪੰਜਾਬੀ ਦੇ": HAIKU(function() {/*
 ਮੈਨੂੰ ਇੱਕ ਉਪਨਾਮ ਹੈ.
 ਮੂਰਖ ਉਮਰ ਦੇ ਆਦਮੀ ਨੂੰ ਪਹਾੜ ਵਾਰੀ.
 ਆਪਣੇ ਉਪਨਾਮ ਕੀ ਹੈ?
*/}),  //______________________________________________________________________
            "Romanian|Română": HAIKU(function() {/*
 Am un pseudonim.
 om bătrân nechibzuit schimburi de munte.
 Care e porecla ta?
*/}),  //______________________________________________________________________
            "Russian|Русский": HAIKU(function() {/*
 У меня есть прозвище.
 Глупый старик сдвигает горы.
 Какое у тебя прозвище?
*/}),  //______________________________________________________________________
            "Samoan|Samoa": HAIKU(function() {/*
 Ou maua se igoa tauvalaau.
 Valea toeaina suiga mauga.
 O le a lou igoa tauvalaau?
*/}),  //______________________________________________________________________
            "Scots Gaelic|Gàidhlig": HAIKU(function() {/*
 Tha mi a 'fhar-ainm.
 Foolish bodach atharrachadh bheinn.
 Dè am far-ainm a th 'agaibh?
*/}),  //______________________________________________________________________
            "Serbian|Српски": HAIKU(function() {/*
 Имам надимак.
 Будаласт стари помера планине.
 Шта је ваш надимак?
*/}),  //______________________________________________________________________
            "Sesotho|Sesotho": HAIKU(function() {/*
 Ke na le boswaswi.
 Leoatla monna-moholo lichifi thabeng.
 boswaswi oa hao ke eng?
*/}),  //______________________________________________________________________
            "Shona|Shona": HAIKU(function() {/*
 Ndine remadunhu-.
 Mapenzi harahwa vachambokanganwa gomo.
 Chii zita remadunhurirwa rokuti rako?
*/}),  //______________________________________________________________________
            "Sindhi|سنڌي": HAIKU(function() {/*
 مون کي هڪ لقب آهي.
 بيوقوف پراڻي انسان جبل shifts.
 توهان جو لقب ڇا آهي؟
*/}),  //______________________________________________________________________
            "Sinhala|සිංහල": HAIKU(function() {/*
 මම සුරතල් නම තියෙනවා.
 මෝඩ මහලු මිනිසා කන්ද මාරු කර ඇත.
 ඔබගේ නම කුමක්ද?
*/}),  //______________________________________________________________________
            "Slovak|Slovenský": HAIKU(function() {/*
 Mám prezývku.
 Pochabý starček posunie horu.
 Aká je tvoja prezývka?
*/}),  //______________________________________________________________________
            "Slovenian|Slovenski": HAIKU(function() {/*
 Imam vzdevek.
 Neumni starec premika gore.
 Kaj je tvoj vzdevek?
*/}),  //______________________________________________________________________
            "Somali|Soomaali": HAIKU(function() {/*
 Waxaan leeyahay naaneesta ah.
 oday nacas buurta isbeddelka.
 Waa maxay naaneesta?
*/}),  //______________________________________________________________________
            "Spanish|Español": HAIKU(function() {/*
 Tengo un apodo.
 viejo tonto desplaza montaña.
 ¿Cual es su apodo?
*/}),  //______________________________________________________________________
            "Sundanese|Sunda": HAIKU(function() {/*
 Kuring geus nickname a.
 man heubeul Foolish shifts gunung.
 What is nickname anjeun?
*/}),  //______________________________________________________________________
            "Swahili|Kiswahili": HAIKU(function() {/*
 Nina jina la utani.
 Mzee mjinga aliyesongesha mlima.
 Jina lako la utani ni lipi?
*/}),  //______________________________________________________________________
            "Swedish|Svensk": HAIKU(function() {/*
 Nina jina la utani.
 Foolish mzee mabadiliko ya mlima.
 jina la utani wako ni nini?...
*/}),  //______________________________________________________________________
            "Tajik|Тоҷикистон": HAIKU(function() {/*
 Jag har ett smeknamn.
 Dåraktig gubben skiftar berget.
 Vad är ditt smeknamn?
*/}),  //______________________________________________________________________
            "Tamil|தமிழ்": HAIKU(function() {/*
 நான் ஒரு புனைப்பெயர் வேண்டும்.
 ஒரு மலை மேற்கொள்ளப்பட்ட யார் முட்டாள் பழைய மனிதன்.
 உங்கள் புனைப்பெயர் என்ன?
*/}),  //______________________________________________________________________
            "Telugu|తెలుగు": HAIKU(function() {/*
 నేను మారుపేరు కలిగి.
 మూర్ఖు పాత మనిషి పర్వత శ్రేష్టమైన.
 మీ మారుపేరు ఏమిటి?
*/}),  //______________________________________________________________________
            "Thai|ไทย": HAIKU(function() {/*
 ฉันมีชื่อเล่น
 ชายชราโง่กะภูเขา
 ชื่อเล่นของคุณคืออะไร?
*/}),  //______________________________________________________________________
            "Turkish|Türk": HAIKU(function() {/*
 Ben bir takma var.
 Foolish yaşlı adam dağ kaydırır.
 Takma adınız nedir?
*/}),  //______________________________________________________________________
            "Ukrainian|Український": HAIKU(function() {/*
 У мене є прізвисько.
 Дурний старий зрушує гори.
 Що таке ваш нік?
*/}),  //______________________________________________________________________
            "Urdu|اردو": HAIKU(function() {/*
 میں نے ایک مختصر نام ہے.
 بیوقوف بوڑھے آدمی پہاڑ شفٹوں.
 آپ عرفیت کیا ہے؟
*/}),  //______________________________________________________________________
// "Uzbek|O'zbekiston": HAIKU(function() {/*
// Men bir taxallusni bor.
// Ahmoq chol tog'ni o'zgartiradi.
// Sizning laqabi nima?
//*/}),  //______________________________________________________________________
            "Vietnamese|Tiếng Việt": HAIKU(function() {/*
 Tôi có một biệt danh.
 ông già Foolish chuyển núi.
 Biệt danh của bạn là gì?
*/}),  //______________________________________________________________________
            "Welsh|Cymraeg": HAIKU(function() {/*
 Mae gen i llysenw.
 hen ddyn ffôl sifftiau mynydd.
 Beth yw eich ffugenw?
*/}),  //______________________________________________________________________
            "Xhosa|isiXhosa": HAIKU(function() {/*
 Ndingayifumana isiqhulo.
 umntu omdala esisidenge kweenguqu entabeni.
 Yintoni igama lakho?
*/}),  //______________________________________________________________________
            "Yiddish|ייִדיש": HAIKU(function() {/*
 איך האָבן אַ צונעמעניש.
 נאַריש אַלט מענטש שיפץ באַרג.
 וואָס איז דיין צונעמעניש?
*/}),  //______________________________________________________________________
            "Yoruba|Yorùbá": HAIKU(function() {/*
 Mo ni a apeso.
 Òmùgọ atijọ eniyan iṣinipo oke.
 Ohun ti o jẹ rẹ apeso?
*/}),  //______________________________________________________________________
            "Zulu|Zulu": HAIKU(function() {/*
 Nginesifo isidlaliso.
 Foolish indoda endala usekhuluma entabeni.
 Kuyini isidlaliso yakho?
*/}),  //______________________________________________________________________
        },

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
