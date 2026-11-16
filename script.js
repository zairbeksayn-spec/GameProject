const devices = [
  {id:'steam-deck-oled',category:'Портативные ПК',name:'Steam Deck OLED',edition:'512 ГБ · OLED',price:59990,oldPrice:69990,rating:4.9,reviews:86,emoji:'🎮',image:'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80',tags:['Steam','OLED','AAA'],description:'Портативный игровой ПК с библиотекой Steam, OLED-экраном и удобным управлением. Подходит для поездок и игр на диване; перед покупкой проверяй совместимость каждой игры в Steam.',pros:['Большая библиотека Steam и поддержка других магазинов','Яркий OLED-экран с насыщенными цветами','Можно подключить к монитору, клавиатуре и мыши'],cons:['Требует настройки в некоторых играх','Не каждая игра совместима или работает идеально','Для тяжёлых игр важны настройки графики']},
  {id:'steam-deck-lcd-used',category:'Портативные ПК',name:'Steam Deck LCD',edition:'64–256 ГБ · б/у ориентир',price:24990,oldPrice:29990,rating:4.6,reviews:54,emoji:'🕹️',image:'https://images.unsplash.com/photo-1592840496694-26d035b52b48?auto=format&fit=crop&w=800&q=80',tags:['Steam','Бюджет','б/у'],description:'Более доступный способ попробовать портативный ПК и библиотеку Steam. Цена указана как примерный ориентир для устройства с рук: проверяй состояние стиков, аккумулятора, экрана и зарядки.',pros:['Доступ к библиотеке Steam','Игры для ПК в портативном формате','Можно подключить периферию и монитор'],cons:['Устройство с рук может иметь износ','Экран LCD не такой контрастный, как OLED','До 15 000 ₽ обычно можно найти только очень старый вариант или лот с риском']},
  {id:'switch-oled',category:'Игровые приставки',name:'Nintendo Switch OLED',edition:'64 ГБ · белый комплект',price:29990,oldPrice:34990,rating:4.8,reviews:103,emoji:'🟥',image:'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?auto=format&fit=crop&w=800&q=80',tags:['Nintendo','OLED','семейная'],description:'Гибридная консоль для игр дома на телевизоре и в портативном режиме. Сильная сторона Switch — игры Nintendo и простой совместный мультиплеер. Она не запускает игры Windows или Steam.',pros:['Эксклюзивные игры Nintendo, включая Mario и Zelda','Можно играть на ТВ и в портативном режиме','Съёмные Joy-Con удобны для локальной игры вдвоём'],cons:['Не запускает GTA V и RDR 2','Производительность ниже современных ПК-консолей','Онлайн-функции и игры могут требовать отдельной подписки']},
  {id:'switch-lite-used',category:'Игровые приставки',name:'Nintendo Switch Lite',edition:'32 ГБ · б/у ориентир',price:14990,oldPrice:17990,rating:4.5,reviews:72,emoji:'🟦',image:'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?auto=format&fit=crop&w=800&q=80',tags:['Nintendo','до 15к*','б/у'],description:'Компактная портативная Nintendo-консоль. На вторичном рынке цена иногда приближается к 15 тысячам рублей. Перед покупкой проверь стики на дрифт, заряд, экран, кнопки и возможность возврата.',pros:['Компактная и удобная в дороге','Доступ к портативным играм Nintendo','Простая в использовании'],cons:['Не подключается к телевизору','Контроллеры встроены и не снимаются','GTA V и RDR 2 не поддерживаются']},
  {id:'ps4-slim-used',category:'Игровые приставки',name:'PlayStation 4 Slim',edition:'500 ГБ · б/у ориентир',price:16990,oldPrice:19990,rating:4.6,reviews:94,emoji:'🎮',image:'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80',tags:['PlayStation','GTA V','б/у'],description:'Домашняя консоль предыдущего поколения с большой библиотекой игр. На ней есть версии GTA V и Red Dead Redemption 2 для PS4. Цена и состояние на вторичном рынке сильно различаются.',pros:['GTA V и RDR 2 имеют версии для PS4','Большой выбор недорогих игр на дисках','Простой старт без сборки ПК'],cons:['Покупка с рук — проверяй перегрев, шум и дисковод','Это предыдущее поколение консолей','Новые релизы могут не выходить для PS4']},
  {id:'ps5-slim',category:'Игровые приставки',name:'PlayStation 5 Slim',edition:'1 ТБ · версия с дисководом',price:56990,oldPrice:64990,rating:4.9,reviews:118,emoji:'🎮',image:'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80',tags:['PlayStation','4K','GTA V'],description:'Современная домашняя PlayStation с быстрым SSD, играми PS5 и поддержкой многих игр PS4. GTA V и RDR 2 доступны как игры поколений PlayStation 4; особенности изображения зависят от редакции игры.',pros:['Быстрые загрузки благодаря SSD','Игры PS5 и совместимые игры PS4','Дисковод позволяет играть с дисков и смотреть Blu-ray'],cons:['Стоимость заметно выше лимита 15 000 ₽','Крупнее портативных устройств','Для онлайна отдельные игры требуют подписки']},
  {id:'xbox-series-s',category:'Игровые приставки',name:'Xbox Series S',edition:'512 ГБ · белая',price:32990,oldPrice:37990,rating:4.7,reviews:91,emoji:'🟩',image:'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&w=800&q=80',tags:['Xbox','Game Pass','GTA V'],description:'Компактная цифровая консоль для игр Xbox текущего поколения. Поддерживает версии GTA V для Xbox One и Series X|S; уточняй издание и доступность игры в своём регионе.',pros:['Компактная и тихая домашняя консоль','Доступ к подписочному каталогу Xbox при наличии подписки','GTA V поддерживается на семействе Xbox One/Series'],cons:['Нет дисковода — игры приобретаются цифровым способом','Накопитель ограничен; часть места занимает система','Подписка оплачивается отдельно']},
  {id:'gaming-pc-used',category:'Игровые ПК',name:'Игровой ПК начального уровня',edition:'Ryzen 5 · GTX 1660 · б/у ориентир',price:34990,oldPrice:41990,rating:4.4,reviews:38,emoji:'🖥️',image:'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80',tags:['ПК','GTA V','б/у'],description:'Компьютер с видеокартой уровня GTX 1660 подходит для многих игр в Full HD и имеет PC-версии GTA V и RDR 2. Перед покупкой компьютера с рук проверь модель видеокарты, температуры и блок питания.',pros:['Большая библиотека ПК-игр','Можно обновлять память и комплектующие','Поддерживает моды и клавиатуру с мышью'],cons:['Цена ориентировочная и зависит от комплектации','С рук нужно проверять комплектующие под нагрузкой','Нет портативности консоли']},
  {id:'android-phone-used',category:'Смартфоны',name:'Android-смартфон среднего класса',edition:'128 ГБ · пример б/у сегмента',price:13990,oldPrice:16990,rating:4.3,reviews:67,emoji:'📱',image:'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',tags:['Android','до 15к','облако'],description:'Недорогой смартфон удобен для мобильных игр, эмуляторов поддерживаемых платформ и облачного стриминга. GTA V и RDR 2 не имеют обычных Android-версий для запуска на телефоне: для них нужна трансляция с ПК/консоли или облачный сервис, доступность которого зависит от региона.',pros:['Карманный формат для мобильных игр','Подходит для видеосвязи, приложений и облачного стриминга','Большой выбор моделей на вторичном рынке'],cons:['Не запускает GTA V или RDR 2 нативно','Для облака нужны быстрый интернет и совместимый сервис','Смартфон б/у проверяй на износ батареи и блокировки']},
  {id:'ps-vita-used',category:'Портативные консоли',name:'PlayStation Vita',edition:'Slim · б/у ориентир',price:12990,oldPrice:15990,rating:4.4,reviews:42,emoji:'🎮',image:'https://images.unsplash.com/photo-1592840496694-26d035b52b48?auto=format&fit=crop&w=800&q=80',tags:['портативная','до 15к*','б/у'],description:'Портативная консоль для игр эпохи PS Vita и части совместимых цифровых релизов. Это устройство для классики и инди-игр, а не для GTA V или RDR 2. Доступность игр и сервисов проверяй заранее.',pros:['Небольшой вес и удобный портативный формат','Хорошая библиотека классических портативных игр','Иногда встречается дешевле 15 000 ₽ на вторичном рынке'],cons:['Старая платформа и ограниченная доступность новых игр','GTA V и RDR 2 не поддерживаются','Б/у экземпляры требуют проверки аккумулятора и стиков']},
  {id:'logitech-g-cloud',category:'Портативные консоли',name:'Портативное устройство для облачного гейминга',edition:'Android · Wi-Fi · ориентир',price:29990,oldPrice:34990,rating:4.2,reviews:25,emoji:'☁️',image:'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80',tags:['облако','портативная','интернет'],description:'Устройство этого класса стримит игры из облака или с собственной консоли/ПК. Перед покупкой проверь поддержку нужного сервиса в своей стране: сам экран не запускает PC-игры вроде RDR 2 без источника трансляции.',pros:['Удобный экран и контроллеры в одном корпусе','Можно продолжать игру с домашней консоли через сеть','Подходит для доступных Android-приложений'],cons:['Работа облака зависит от страны и сервиса','Нужен хороший стабильный Wi-Fi','Это не самостоятельная замена мощному игровому ПК']},
];

const gameLibrary = [
  {aliases:['rdr 2','rdr2','red dead redemption 2','ред дед 2','ред дед редемпшн 2'],name:'Red Dead Redemption 2',results:[
    ['ПК Windows','Нативно','Играйте через ПК-версию. Для комфортной графики важны видеокарта, память и свободное место.'],
    ['Steam Deck / SteamOS','Играбельно*','Играют через PC-версию; возможны нюансы с Rockstar Launcher, настройками и совместимостью. Проверяйте актуальный статус Steam Deck Verified.'],
    ['PlayStation 4','Нативно','Есть отдельная версия для PS4.'],
    ['PlayStation 5','Через версию PS4','Запускается благодаря обратной совместимости; отдельной нативной версии PS5 у игры нет.'],
    ['Xbox One','Нативно','Есть версия для Xbox One.'],
    ['Xbox Series X|S','Через версию Xbox One','Работает по обратной совместимости; проверьте издание и доступность в магазине.'],
    ['Nintendo Switch','Не поддерживается','Официальной версии RDR 2 для Switch нет.'],
    ['Android / iPhone','Только трансляция','Нативной мобильной версии нет. Возможен стриминг с совместимого ПК/консоли или из доступного облачного сервиса.']
  ]},
  {aliases:['gta 5','gta5','gta v','grand theft auto v','гта 5','гта5'],name:'Grand Theft Auto V',results:[
    ['ПК Windows','Нативно','Есть PC-версия. Производительность зависит от видеокарты, процессора, памяти и выбранных настроек.'],
    ['Steam Deck / SteamOS','Играбельно*','PC-версию можно запускать на Steam Deck; актуальный статус совместимости и нюансы Rockstar Launcher проверяйте перед покупкой.'],
    ['PlayStation 4','Нативно','Есть версия GTA V для PS4.'],
    ['PlayStation 5','Версия PS5 или PS4','Доступны редакции для PS5 и обратная совместимость с PS4; функции зависят от издания.'],
    ['Xbox One','Нативно','Есть версия GTA V для Xbox One.'],
    ['Xbox Series X|S','Версия Series X|S или Xbox One','Поддерживается семейством Xbox; возможности зависят от редакции и поколения игры.'],
    ['Nintendo Switch','Не поддерживается','Официальной версии GTA V для Nintendo Switch нет.'],
    ['Android / iPhone','Только трансляция','Официальной нативной мобильной версии GTA V нет. Для телефона нужна трансляция с ПК/консоли или облачный сервис.']
  ]},
  {aliases:['cyberpunk 2077','киберпанк'],name:'Cyberpunk 2077',results:[
    ['ПК Windows','Нативно','Есть PC-версия; рекомендуемые настройки зависят от видеокарты и включённых эффектов.'],
    ['Steam Deck / SteamOS','Играбельно*','Запускается через Steam Deck с подходящими настройками; производительность может различаться.'],
    ['PlayStation 4','Ограниченная поддержка','Версия PS4 существует, но обновления и функции отличаются от PS5; проверь актуальные ограничения издателя.'],
    ['PlayStation 5','Нативно','Есть версия для PS5 с функциями текущего поколения.'],
    ['Xbox One','Ограниченная поддержка','Версия Xbox One отличается от актуальных версий Series X|S.'],
    ['Xbox Series X|S','Нативно','Есть версия для Series X|S.'],
    ['Nintendo Switch','Не поддерживается','Официальной версии для Switch нет.'],
    ['Android / iPhone','Только трансляция','Нативной мобильной версии нет; возможен стриминг с совместимого устройства/сервиса.']
  ]},
  {aliases:['minecraft','майнкрафт'],name:'Minecraft',results:[
    ['ПК Windows / Mac / Linux','Нативно','Доступны разные издания и версии — выбирайте подходящее для совместной игры с друзьями.'],
    ['Steam Deck / SteamOS','Нативно*','Возможна установка PC-версий; удобство зависит от издания и способа установки.'],
    ['PlayStation 4 / 5','Нативно','Есть версии для консолей PlayStation.'],
    ['Xbox One / Series X|S','Нативно','Есть консольная версия Minecraft.'],
    ['Nintendo Switch','Нативно','Есть версия Minecraft для Nintendo Switch.'],
    ['Android / iPhone','Нативно','Есть мобильная версия; управление сенсорное, часть устройств поддерживает контроллеры.']
  ]}
];

const categoryNames=['Все устройства','Игровые приставки','Портативные ПК','Портативные консоли','Игровые ПК','Смартфоны'];
const state={category:'Все устройства',search:'',favorites:new Set(),quizStep:0,quizAnswers:{}};
const $=selector=>document.querySelector(selector);
const escapeHTML=value=>String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const cash=value=>`${Number(value).toLocaleString('ru-RU')} ₽`;
const norm=value=>String(value).toLocaleLowerCase('ru').replace(/ё/g,'е').replace(/[^a-zа-я0-9]+/g,' ').trim();
const percentOff=item=>item.oldPrice?Math.round((1-item.price/item.oldPrice)*100):0;

try{state.favorites=new Set(JSON.parse(localStorage.getItem('igroteka-favorites')||'[]'))}catch(error){console.warn('Избранное недоступно в браузере.',error)}
function saveFavorites(){try{localStorage.setItem('igroteka-favorites',JSON.stringify([...state.favorites]))}catch(error){console.warn('Не удалось сохранить избранное.',error)}}

function renderFilters(){
  $('#device-filters').innerHTML=categoryNames.map(name=>`<button type="button" class="filter-chip ${state.category===name?'active':''}" data-category="${escapeHTML(name)}">${escapeHTML(name)}</button>`).join('');
}
function renderDevices(){
  const query=norm(state.search);
  const list=devices.filter(item=>(state.category==='Все устройства'||item.category===state.category)&&(!query||norm(`${item.name} ${item.edition} ${item.tags.join(' ')}`).includes(query)));
  $('#device-grid').innerHTML=list.map((item,index)=>`<article class="device-card" style="animation-delay:${Math.min(index,8)*45}ms">
    <div class="device-image" data-device="${item.id}"><img src="${item.image}" alt="${escapeHTML(item.name)}" loading="lazy"><span class="device-emoji" hidden>${item.emoji}</span><span class="device-label ${item.oldPrice?'deal':''}">${item.oldPrice?`−${percentOff(item)}%`:'ОБЗОР'}</span></div>
    <div class="device-info"><h3>${escapeHTML(item.name)}</h3><div class="device-edition">${escapeHTML(item.edition)}</div>    <div class="device-rating">★★★★★ <span>${item.rating} · демо-оценка гида</span></div>
    <p class="device-summary">${escapeHTML(item.description.slice(0,104))}…</p><div class="device-meta">${item.tags.map(tag=>`<span>${escapeHTML(tag)}</span>`).join('')}</div>
    <div class="device-price"><strong>${cash(item.price)}</strong>${item.oldPrice?`<del>${cash(item.oldPrice)}</del>`:''}</div>
    <div class="device-actions"><button type="button" data-details="${item.id}">Обзор</button><button type="button" data-favorite="${item.id}">${state.favorites.has(item.id)?'♥ В избранном':'♡ В избранное'}</button></div></div></article>`).join('');
  if(list.length===0)$('#device-grid').innerHTML='<p class="empty-message">Ничего не нашлось. Попробуй другую категорию или название.</p>';
  const images=$$('.device-image img');
  images.forEach(image=>image.addEventListener('error',()=>{image.hidden=true;const emoji=image.parentElement.querySelector('.device-emoji');emoji.hidden=false},{once:true}));
}
function $$(selector){return [...document.querySelectorAll(selector)]}

function showToast(message){
  const toast=$('#toast');toast.textContent=message;toast.classList.add('show');
  clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>toast.classList.remove('show'),2800);
}
function openAssistant(message=''){
  $('#assistant').scrollIntoView({behavior:'smooth'});
  if(message){$('#chat-input').value=message;$('#chat-form').requestSubmit()}
  else setTimeout(()=>$('#chat-input').focus(),350);
}
function deviceDetails(id){
  const item=devices.find(device=>device.id===id);if(!item)return;
  const html=`<span class="kicker">${escapeHTML(item.category).toLocaleUpperCase('ru')} / ОБЗОР</span><h3>${escapeHTML(item.name)}</h3><div class="detail-edition">${escapeHTML(item.edition)}</div>
    <div class="detail-rating">★★★★★ <span>${item.rating} из 5 · демонстрационная оценка гида</span></div>
    <p>${escapeHTML(item.description)}</p><div class="detail-price"><strong>${cash(item.price)}</strong>${item.oldPrice?`<del>${cash(item.oldPrice)}</del><span>−${percentOff(item)}%</span>`:''}</div>
    <h4>Что понравится</h4><ul>${item.pros.map(text=>`<li>${escapeHTML(text)}</li>`).join('')}</ul>
    <h4>Что учесть перед покупкой</h4><ul>${item.cons.map(text=>`<li>${escapeHTML(text)}</li>`).join('')}</ul>
    <p class="detail-note">* Цены ориентировочные, особенно для устройств с пометкой «б/у». Проверяй состояние, комплект, актуальную цену и условия возврата у продавца.</p>
    <button class="button button-lime detail-ask" data-ask-device="${item.name}">Спросить помощника об устройстве <span>→</span></button>`;
  const dialog=document.createElement('dialog');dialog.className='device-dialog';dialog.innerHTML=`<button class="dialog-close" aria-label="Закрыть">×</button>${html}`;
  document.body.append(dialog);dialog.showModal();
  dialog.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close()});
  dialog.addEventListener('close',()=>dialog.remove(),{once:true});
  dialog.querySelector('[data-ask-device]').addEventListener('click',()=>{dialog.close();openAssistant(`Расскажи про ${item.name}`)});
}

function normalGameName(input){
  const query=norm(input);
  return gameLibrary.find(game=>game.aliases.some(alias=>query===norm(alias)||query.includes(norm(alias))))||null;
}
function checkGame(input){
  const query=input.trim();if(!query){showToast('Напиши название игры, например GTA 5');$('#game-search').focus();return}
  const game=normalGameName(query);
  const result=$('#compat-result');result.replaceChildren();
  if(!game){const message=document.createElement('p');message.className='compat-empty';message.textContent=`Пока нет точной карточки для «${query}». Сейчас в базе есть RDR 2, GTA V, Cyberpunk 2077 и Minecraft.`;result.append(message);return}
  const title=document.createElement('div');title.className='compat-intro';
  const heading=document.createElement('h3');heading.textContent=game.name;
  const count=document.createElement('span');count.textContent=`${game.results.length} вариантов игры`;
  title.append(heading,count);result.append(title);
  const grid=document.createElement('div');grid.className='compat-grid';
  for(const [platform,status,description] of game.results){
    const card=document.createElement('article');card.className='compat-card';
    const name=document.createElement('strong');name.textContent=platform;
    const badge=document.createElement('span');badge.className=status.includes('трансляция')?'cloud':'';badge.textContent=status;
    const note=document.createElement('p');note.textContent=description;
    card.append(name,badge,note);grid.append(card);
  }
  result.append(grid);
  result.scrollIntoView({behavior:'smooth',block:'nearest'});
}

function compareSummary(){
  return 'Коротко: Nintendo Switch OLED бери ради эксклюзивов Nintendo, простого старта и игры вдвоём. Steam Deck OLED — если важна библиотека Steam, PC-игры и возможность менять настройки. GTA V доступна на Deck через PC-версию, но не на Switch. RDR 2 тоже можно запускать на Deck с оговорками по совместимости; Switch официально не поддерживается. Если нужен только Mario и Zelda — Switch. Если хочется ПК-игры в руках — Deck. Проверяй конкретные версии игр перед покупкой.';
}
function budgetAdvice(){
  return 'Если лимит ровно 15 000 ₽, я бы сначала смотрел проверенную б/у Nintendo Switch Lite или PlayStation Vita для портативной игры — но не для GTA V/RDR 2. Для GTA V/RDR 2 с таким бюджетом лучше поискать б/у PS4, однако исправная консоль может стоить выше лимита. Steam Deck обычно существенно дороже 15 тысяч; подозрительно дешёвые объявления требуют особенно тщательной проверки. На телефоне эти игры нативно не запускаются — только трансляция с доступного ПК/сервиса и хороший интернет. Перед покупкой б/у проверь стики, аккумулятор, экран, перегрев, аккаунт, комплект и возможность возврата.';
}
function answerAssistant(input){
  const text=norm(input);
  if(text.includes('switch')||text.includes('стим дек')||text.includes('steam deck')||text.includes('сравн')){
    if(text.includes('сравн')||text.includes('лучше')||text.includes('или')||text.includes('switch')||text.includes('steam deck'))return compareSummary();
  }
  if(text.includes('15')||text.includes('бюджет')||text.includes('купить')||text.includes('тысяч'))return budgetAdvice();
  const game=normalGameName(input);
  if(game)return `${game.name}: открой раздел «Проверить игру» — там собраны платформы и отдельно отмечено, где игра запускается напрямую, а где только транслируется. ${game.results.some(item=>item[0].includes('Android'))?'На телефоне нативной версии нет; понадобится стриминг.':''}`;
  const found=devices.find(item=>text.includes(norm(item.name))||text.includes(norm(item.edition)));
  if(found)return `${found.name} (${found.edition}): ${found.description} Сильные стороны: ${found.pros.slice(0,2).join('; ')}. Что учесть: ${found.cons[0]}. Ориентир цены — ${cash(found.price)}.`;
  if(text.includes('добр')||text.includes('привет'))return 'Привет! Могу сравнить Nintendo Switch и Steam Deck, подсказать устройство до 15 000 ₽ или проверить RDR 2 и GTA V. Какой у тебя сценарий?';
  return 'Могу помочь с выбором по бюджету, сравнить Switch и Steam Deck или проверить RDR 2, GTA V, Cyberpunk 2077 и Minecraft. Напиши, что для тебя важнее: цена, конкретная игра или портативность.';
}
function appendMessage(text,from='user'){
  const row=document.createElement('div');row.className=`chat-message ${from==='user'?'user-message':'bot-message'}`;
  if(from==='bot'){const avatar=document.createElement('span');avatar.className='message-avatar';avatar.textContent='ИИ';row.append(avatar)}
  const body=document.createElement('div');body.textContent=text;row.append(body);
  $('#chat-messages').append(row);$('#chat-messages').scrollTop=$('#chat-messages').scrollHeight;
}

function updateQuiz(){
  $$('.quiz-question').forEach((section,index)=>section.hidden=index!==state.quizStep);
  $('#quiz-step-label').textContent=`ВОПРОС ${state.quizStep+1} ИЗ 3`;
  $('#quiz-progress-bar').style.width=`${((state.quizStep+1)/3)*100}%`;
  $('#quiz-back').hidden=state.quizStep===0;
  $('#quiz-next').textContent=state.quizStep===2?'Показать подбор →':'Дальше →';
  $('#quiz-hint').textContent=state.quizStep===2?'Последний вопрос — и покажем варианты':'Можно начать с бюджета до 15 000 ₽';
}
function getQuizRecommendation(){
  const {place,games,priority}=state.quizAnswers;
  if(games==='big'){
    const match=devices.find(item=>item.id==='ps4-slim-used');
    return {item:match,title:'Хочешь именно GTA V или RDR 2?',description:'Ищи проверенную PS4 с рук и старайся найти вариант около своего лимита. Если подходящей консоли за 15 000 ₽ нет — не бери сомнительный лот: лучше немного подкопить. Switch Lite, Vita и обычный телефон эти игры нативно не запускают.'};
  }
  if(games==='nintendo'){
    const match=devices.find(item=>item.id==='switch-lite-used');
    return {item:match,title:'Твой матч — Nintendo Switch Lite с рук',description:'Хороший вариант для Mario, Zelda и портативных Nintendo-игр, если найдёшь живой экземпляр примерно до 15 000 ₽. Она не подключается к телевизору и не запускает GTA V или RDR 2.'};
  }
  if(place==='pc'||games==='competitive'){
    const match=devices.find(item=>item.id==='steam-deck-lcd-used');
    return {item:match,title:'Сначала присмотрись к Steam Deck LCD с рук',description:'Подойдёт для Steam и многих PC-игр, но типичная цена выше 15 000 ₽. Проверь совместимость любимых игр и не покупай устройство с рук без проверки стиков, батареи, экрана и охлаждения.'};
  }
  if(place==='phone'){
    const match=devices.find(item=>item.id==='android-phone-used');
    return {item:match,title:'Телефон — универсальный вариант, но не для нативной RDR 2',description:'До 15 000 ₽ можно подобрать Android-смартфон для мобильных игр. GTA V и RDR 2 на Android напрямую не запускаются; только стриминг при наличии доступного сервиса или собственного ПК/консоли.'};
  }
  if(priority==='simple'||place==='tv'){
    const match=devices.find(item=>item.id==='ps-vita-used');
    return {item:match,title:'Компактная классика — PS Vita с рук',description:'Портативный формат и простой старт, если хочется играть в классику. Для GTA V и RDR 2 она не подходит. Перед покупкой проверь аккумулятор, стики и экран; приоритет «домашний ТВ» лучше совместить с большим бюджетом на PS4.'};
  }
  return {item:devices.find(item=>item.id==='switch-lite-used'),title:'Самый реалистичный игровой вариант около 15 000 ₽ — Switch Lite с рук',description:'Проверь объявления в своём городе и обязательно осмотри консоль. Если важны именно GTA V или RDR 2 — ищи PS4 и будь готов увеличить бюджет; дешёвые объявления проверяй особенно внимательно.'};
}
function finishQuiz(){
  const result=getQuizRecommendation();const box=$('#quiz-result');
  box.innerHTML=`<span class="kicker">ТВОЙ РЕЗУЛЬТАТ</span><h4>${escapeHTML(result.title)}</h4><p>${escapeHTML(result.description)}</p><strong class="quiz-price">${cash(result.item.price)} <small>— ориентир</small></strong><div><button type="button" data-quiz-details="${result.item.id}">Посмотреть обзор</button> <button type="button" id="quiz-restart">Пройти ещё раз</button></div>`;
  box.hidden=false;$('#quiz-next').hidden=true;$('#quiz-hint').textContent='Подбор готов — решать всё равно тебе';
}
function startSplash(){
  let seen=false;
  try{seen=sessionStorage.getItem('lesson13-playstation-splash')==='seen'}catch(error){console.warn('Не удалось сохранить состояние заставки.',error)}
  if(seen)return;
  const splash=document.createElement('section');splash.className='splash';splash.setAttribute('role','dialog');splash.setAttribute('aria-label','Игровая заставка');
  splash.innerHTML=`<button class="splash-skip" type="button">Пропустить</button><div class="splash-inner"><div class="splash-copy"><span class="splash-kicker">ВКЛЮЧАЙ РЕЖИМ ИГРЫ</span><h2>ИГРОТЕКА<span>GG.</span></h2><p>Сначала выбери игру. Потом найдём устройство, на котором она действительно работает.</p><a class="button button-lime" href="#devices">Погнали выбирать <span>→</span></a></div><div class="splash-product"><div class="splash-glow"></div><img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=1100&q=85" alt="Игровая приставка с контроллером" onerror="this.hidden=true"><div class="ps5-shape" aria-hidden="true"><i class="ps5-wing left"></i><i class="ps5-wing right"></i><i class="ps5-center"></i><i class="ps5-light"></i></div></div></div><div class="splash-progress"><span></span></div>`;
  document.body.append(splash);
  document.body.classList.add('modal-open');
  const dismiss=()=>{splash.classList.add('out');document.body.classList.remove('modal-open');try{sessionStorage.setItem('lesson13-playstation-splash','seen')}catch(error){console.warn('Не удалось запомнить показ заставки.',error)}setTimeout(()=>splash.remove(),700)};
  splash.querySelector('.splash-skip').addEventListener('click',dismiss);
  splash.querySelector('a').addEventListener('click',dismiss);
  setTimeout(()=>{if(splash.isConnected)dismiss()},6500);
}

document.addEventListener('click',event=>{
  const target=event.target;
  if(!(target instanceof Element))return;
  const category=target.closest('[data-category]');
  if(category){state.category=category.dataset.category;renderFilters();renderDevices();return}
  const details=target.closest('[data-details],[data-device]');
  if(details){deviceDetails(details.dataset.details||details.dataset.device);return}
  const favorite=target.closest('[data-favorite]');
  if(favorite){
    const id=favorite.dataset.favorite;
    if(state.favorites.has(id))state.favorites.delete(id);else state.favorites.add(id);
    try{localStorage.setItem('igroteka-favorites',JSON.stringify([...state.favorites]))}catch(error){console.warn('Не удалось сохранить избранное.',error)}
    renderDevices();showToast(state.favorites.has(id)?'Сохранил в избранное':'Убрал из избранного');return;
  }
  const example=target.closest('[data-game]');
  if(example){$('#game-search').value=example.dataset.game;checkGame(example.dataset.game);return}
  const prompt=target.closest('[data-prompt]');
  if(prompt){appendMessage(prompt.dataset.prompt,'user');appendMessage(answerAssistant(prompt.dataset.prompt),'bot');return}
  const ask=target.closest('[data-ask-device]');
  if(ask){appendMessage(`Расскажи про ${ask.dataset.askDevice}`,'user');appendMessage(answerAssistant(`Расскажи про ${ask.dataset.askDevice}`),'bot');$('#assistant').scrollIntoView({behavior:'smooth'});return}
  const quizDetails=target.closest('[data-quiz-details]');
  if(quizDetails){deviceDetails(quizDetails.dataset.quizDetails);return}
  if(target.closest('#quiz-restart')){
    state.quizStep=0;state.quizAnswers={};$('#quiz-result').hidden=true;$('#quiz-next').hidden=false;$('#quiz-form').reset();updateQuiz();return;
  }
  if(target.closest('#compare-button')){
    appendMessage('Что лучше: Nintendo Switch или Steam Deck?','user');appendMessage(compareSummary(),'bot');openAssistant();return;
  }
  if(target.closest('#open-assistant')){openAssistant();return}
  if(target.closest('#clear-chat')){
    $('#chat-messages').innerHTML='<div class="chat-message bot-message"><span class="message-avatar">ИИ</span><div>Чат очищен! Спроси, например: <b>«Что лучше — Switch или Steam Deck?»</b> или <b>«Что купить за 15 тысяч?»</b></div></div>';return;
  }
});

$('#game-search-button').addEventListener('click',()=>checkGame($('#game-search').value));
$('#game-search').addEventListener('keydown',event=>{if(event.key==='Enter'){event.preventDefault();checkGame(event.currentTarget.value)}});
$('#device-grid').addEventListener('error',event=>{
  if(!(event.target instanceof HTMLImageElement))return;
  event.target.hidden=true;
  const emoji=event.target.parentElement.querySelector('.device-emoji');
  if(emoji)emoji.hidden=false;
},{capture:true});
$('#quiz-form').addEventListener('change',event=>{
  if(!(event.target instanceof HTMLInputElement)||event.target.type!=='radio')return;
  state.quizAnswers[event.target.name]=event.target.value;
});
$('#quiz-next').addEventListener('click',()=>{
  const current=$(`.quiz-question[data-question="${state.quizStep}"]`);
  if(!current.querySelector('input:checked')){showToast('Выбери один вариант — так подбор будет точнее');return}
  if(state.quizStep<2){state.quizStep++;updateQuiz();return}
  finishQuiz();
});
$('#quiz-back').addEventListener('click',()=>{if(state.quizStep>0){state.quizStep--;updateQuiz()}});
$('#chat-form').addEventListener('submit',event=>{
  event.preventDefault();
  const input=$('#chat-input'),message=input.value.trim();if(!message)return;
  appendMessage(message,'user');input.value='';
  const response=answerAssistant(message);
  setTimeout(()=>appendMessage(response,'bot'),220);
});
$$('[data-plan]').forEach(button=>button.addEventListener('click',()=>showToast(`${button.dataset.plan} — ${button.dataset.price} ₽. Оплата пока демонстрационная, деньги не списываются.`)));

renderFilters();renderDevices();updateQuiz();startSplash();
