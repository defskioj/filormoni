/* ============================================================
   ОБЩИЙ СКРИПТ: Переключение языков + Хедер + Футер
   Подключать: <script src="shared.js"></script>
   ============================================================ */

// --- ОБЩИЙ СЛОВАРЬ (nav, footer) ---
const sharedTranslations = {
  en: {
    'nav-concerts':'Concerts','nav-ensemble':'Ensemble','nav-repertoire':'Repertoire',
    'nav-heritage':'Heritage','nav-media':'Media','nav-tickets':'Acquire Tickets',
    'footer-brand':'National Qazaq Philharmonic',
    'footer-about':'The guardian of Kazakhstan\'s musical soul since 1934.',
    'footer-col1':'Concerts','footer-season':'2024–25 Season','footer-gala':'Gala Events',
    'footer-chamber':'Chamber Series','footer-archive':'Archive',
    'footer-col2':'Ensemble','footer-conductors':'Conductors','footer-artists':'Principal Artists',
    'footer-soloists':'Guest Soloists','footer-education':'Education',
    'footer-col3':'Visit','footer-venue':'Abay Opera House','footer-tickets':'Tickets',
    'footer-contact':'Contact','footer-press':'Press',
    'footer-copy':'© 2025 National Qazaq Philharmonic · Almaty, Kazakhstan',
    'footer-privacy':'Privacy','footer-terms':'Terms','footer-access':'Accessibility',
  },
  ru: {
    'nav-concerts':'Афиша','nav-ensemble':'Оркестр','nav-repertoire':'Репертуар',
    'nav-heritage':'Наследие','nav-media':'Медиа','nav-tickets':'Купить билеты',
    'footer-brand':'Национальная Казахская Филармония',
    'footer-about':'Хранитель музыкальной души Казахстана с 1934 года.',
    'footer-col1':'Афиша','footer-season':'Сезон 2024–25','footer-gala':'Гала-концерты',
    'footer-chamber':'Камерная серия','footer-archive':'Архив',
    'footer-col2':'Оркестр','footer-conductors':'Дирижёры','footer-artists':'Ведущие артисты',
    'footer-soloists':'Приглашённые солисты','footer-education':'Просветительство',
    'footer-col3':'Посещение','footer-venue':'Театр им. Абая','footer-tickets':'Билеты',
    'footer-contact':'Контакты','footer-press':'Пресса',
    'footer-copy':'© 2025 Национальная Казахская Филармония · Алматы',
    'footer-privacy':'Конфиденциальность','footer-terms':'Условия','footer-access':'Доступность',
  },
  kz: {
    'nav-concerts':'Афиша','nav-ensemble':'Оркестр','nav-repertoire':'Репертуар',
    'nav-heritage':'Мұра','nav-media':'Медиа','nav-tickets':'Билет сатып алу',
    'footer-brand':'Ұлттық Қазақ Филармониясы',
    'footer-about':'1934 жылдан бері Қазақстанның музыкалық жанының сақшысы.',
    'footer-col1':'Афиша','footer-season':'2024–25 маусымы','footer-gala':'Гала концерттер',
    'footer-chamber':'Камералық сериясы','footer-archive':'Мұрағат',
    'footer-col2':'Оркестр','footer-conductors':'Дирижерлар','footer-artists':'Жетекші артистер',
    'footer-soloists':'Шақырылған солистер','footer-education':'Ағарту',
    'footer-col3':'Барыс','footer-venue':'Абай атындағы театр','footer-tickets':'Билеттер',
    'footer-contact':'Байланыс','footer-press':'Баспасөз',
    'footer-copy':'© 2025 Ұлттық Қазақ Филармониясы · Алматы',
    'footer-privacy':'Құпиялылық','footer-terms':'Шарттар','footer-access':'Қолжетімділік',
  }
};

// --- ПЕРЕКЛЮЧЕНИЕ ЯЗЫКОВ ---
// Принимает страничный словарь pageTranslations (опционально)
function changeLanguage(lang, btn, pageTranslations) {
  const shared = sharedTranslations[lang] || {};
  const page   = (pageTranslations && pageTranslations[lang]) || {};
  const dict   = Object.assign({}, shared, page);

  document.querySelectorAll('[data-key]').forEach(el => {
    const k = el.getAttribute('data-key');
    if (dict[k] !== undefined) el.innerHTML = dict[k];
  });

  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  document.documentElement.lang = lang === 'kz' ? 'kk' : lang;

  // Сохраняем выбор в localStorage
  localStorage.setItem('philLang', lang);
}

// --- ИНИЦИАЛИЗАЦИЯ: восстанавливаем язык из localStorage ---
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('philLang') || 'en';
  const btn = document.querySelector(`.lang-btn[data-lang="${saved}"]`);
  if (window._pageTranslations) {
    changeLanguage(saved, btn, window._pageTranslations);
  } else {
    changeLanguage(saved, btn);
  }
});
