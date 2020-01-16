let lang = {
    uk: {
        MAIN_HEADER: 'ДРУГЕ <span class="light">ЖИТТЯ ОДЯГУ</span><br> У <span class="dark">INSTAGRAM</span>',
        JOIN: "ДОЛУЧИТИСЬ",
        ABOUT_US_P1: "Бажання творити добро та приносити користь планеті в <span class='mary'>Марії</span> зародилося ще багато років тому.",
        ABOUT_US_P2: "Її потенціал та внутрішній вогонь надихають створювати проекти, які роблять наш світ краще.",
        ABOUT_US_P3: 'Забруднення навколишнього середовища через текстильні відходи - найважливіша причина, чому з’явився <span class="span2">VINTAGE BAZAAAR</span>, новаторський магазин на платформі еко-блогу.',
        MAIN_GOAL: 'Головна мета бренду - дати другий шанс речам, які, рано чи пізно, будуть на смітнику. Тому віднині, вони, разом з вами, розвантажать ваш гардероб та допоможуть дати нове життя старому одягу!',
        ECO_GOAL: 'У <span class="span2">VINTAGE BAZAAAR</span> Ви зрозумієте, що таке свідоме споживання та як його застосовувати у світі швидкої моди. Ви відчуєте, що таке справжній стиль з турботою про навколишнє середовище.',
        STYLE: 'Найголовніше – Ви можете продати свій одяг або придбати бажану річ гарної якості в онлайн-магазині @vintage_bazaaar, щоб не викидати тисячі гривень у смітник.',
        CONTACTS1: 'Долучитись до нас в <span>Instagram</span>',
        OR: 'або',
        TEXT_US: 'Напишіть нам',
        NAME: 'ВАШЕ ІМ’Я',
        MESSAGE: 'ВАШЕ ПОВІДОМЛЕННЯ',
        SUBMIT: 'НАДІСЛАТИ',
    },
    ru: {
        MAIN_HEADER: "ВТОРАЯ<span class='light'> ЖИЗНЬ ОДЕЖДЫ</span><br> В <span class='dark'>INSTAGRAM</span>",
        JOIN: "ПОДПИСАТЬСЯ",
        ABOUT_US_P1: "<span class='mary'>Мария</span>, девушка с большим желанием приносить пользу нашей планете и Елена, фешн-блогер, который всегда в курсе последних новинок в мире моды, решили объединиться воедино ради одной цели. ",
        ABOUT_US_P2: "",
        ABOUT_US_P3: 'Загрязнения окружающей среды из-за текстильных отходов - важнейшая причина, почему зародился <span class="span2">VINTAGE BAZAAAR</span>, новаторский магазин на платформе экоблога. ',
        MAIN_GOAL: 'Главная цель бренда - дать второй шанс вещам, которые, рано или поздно, окажутся на помойке. ',
        ECO_GOAL: 'У <span class="span2">VINTAGE BAZAAAR</span> Вы поймёте, что такое сознательное потребления и как им пользоваться в мире быстрой моды. Вы почувствуете, что такое настоящий стиль с заботой о нашей среде. ',
        STYLE: 'Поэтому отныне, они, вместе с Вами, разгрузят ваш гардероб и помогут подарить вторую жизнь вашей одежде.',
        CONTACTS1: 'Присоедениться к нам в <span>Instagram</span>',
        OR: 'или',
        TEXT_US: 'Напишите нам',
        NAME: 'ВАШЕ ИМЯ',
        MESSAGE: 'ВАШЕ СООБЩЕНИЕ',
        SUBMIT: 'ОТОСЛАТЬ',
    },
    en: {
        MAIN_HEADER: 'THE SECOND <span class="light">LIFE OF CLOTHING</span><br> IN <span class="dark">INSTAGRAM</span>',
        JOIN: "JOIN US",
        ABOUT_US_P1: "<span class='mary'>Maria</span>, a girl with a great desire to help the planet and Helen, a fashion blogger who is always aware of the latest world fashion trends , brought together for one purpose.",
        ABOUT_US_P2: "",
        ABOUT_US_P3: 'Textile pollution is the most important reason why <span class="span2">VINTAGE BAZAAAR</span>an innovative shop on the eco - blog platform appeared.',
        MAIN_GOAL: 'The main goal of the brand is to give a second chance to clothes that, sooner or later, will be in the dump.',
        ECO_GOAL: 'With <span class="span2">VINTAGE BAZAAAR</span> you will understand what conscious consumption is and how to deal with it in the world of fast fashion . You will feel what the true style with caring about the environment is.',
        STYLE: 'The most important thing is that you can sell your own cloth or buy the desired, good quality item in the online store @ vintage _ bazaaar, in order not to waste money.',
        CONTACTS1: 'Join us on Instagram',
        OR: 'or',
        TEXT_US: 'Message us',
        NAME: 'YOUR NAME',
        MESSAGE: 'YOUR MESSAGE',
        SUBMIT: 'SUBMIT',
    },
}
function changeLanguage(code) {
    window.localStorage.setItem("lang", code);
    document.location.reload();
}
function getLanguage() {
    let langCode = window.localStorage.getItem("lang");
    if (!langCode) {
        langCode = "uk";
        changeLanguage("uk");
    }

    return langCode;
}
function __(key) {
    document.write(lang[getLanguage()][key]);
}