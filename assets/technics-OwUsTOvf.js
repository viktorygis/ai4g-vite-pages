import{d as e,t}from"./main-H_sd6AEc.js";import{n,t as r}from"./technics-CD6eWj4z.js";var i=e((()=>{r(),document.addEventListener(`DOMContentLoaded`,()=>{let e=document.querySelector(`.sort__dropdown`),t=document.querySelector(`.technics-main__body`),r=document.getElementById(`no-cards-placeholder`);if(!e||!t){console.warn(`Не найдены необходимые элементы`);return}let i=e.querySelector(`.sort__selected`),a=e.querySelector(`.sort__selected-arrow`),o=e.querySelector(`.sort__options`),s=e.querySelectorAll(`.sort__option`),c=null,l=null,u=`default`,d=new URLSearchParams(window.location.search),f=d.get(`category`),p=d.get(`time`);c=f&&f!==`all`?f:null,l=p&&p!==`all`?p:null;function m(e,t){t.forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`),h(e)}function h(e){let t=i?.querySelector(`span`);t&&(t.textContent=e.querySelector(`span`)?.textContent||`По умолчанию`);let n=e.dataset.value;a&&(a.style.display=n===`default`?`none`:`inline-block`,a.classList.toggle(`sort__option_02`,n===`desc`))}function g(e){let t=parseInt(e,10);return t<10?`lt10`:t>=10&&t<30?`10-30`:t>=30&&t<60?`30-60`:`60+`}function _(){let e=new URLSearchParams;c&&e.set(`category`,c),l&&e.set(`time`,l);let t=e.toString()?`${window.location.pathname}?${e.toString()}`:window.location.pathname;history.replaceState(null,``,t)}function v(){let e=document.querySelector(`.reset-filter[data-reset="all"]`);e&&(e.style.display=c||l?`inline-block`:`none`)}function y(){let e=document.querySelectorAll(`.card`),t=!1;if(document.querySelectorAll(`.filter__btn`).forEach(e=>e.classList.remove(`active`)),c){let e=document.querySelector(`.filter__btn[data-category="${c}"]`);e&&e.classList.add(`active`)}if(l){let e=document.querySelector(`.filter__btn[data-time="${l}"]`);e&&e.classList.add(`active`)}e.forEach(e=>{let n=e.dataset.tag,r=e.dataset.time;(!c||n===c)&&(!l||r===l)?(e.classList.remove(`hidden`),t=!0):e.classList.add(`hidden`)}),r&&(r.style.display=t?`none`:`block`),_(),v()}function b(){let e=Array.from(t.querySelectorAll(`.card:not(.hidden)`));u===`default`?e.sort((e,t)=>parseInt(e.dataset.index,10)-parseInt(t.dataset.index,10)):e.sort((e,t)=>{let n=e.querySelector(`.card__subtitle`)?.textContent.trim().toLowerCase()||``,r=t.querySelector(`.card__subtitle`)?.textContent.trim().toLowerCase()||``;return u===`asc`?n.localeCompare(r):r.localeCompare(n)}),e.forEach(e=>t.appendChild(e))}function x(){y(),b()}function S(){t.innerHTML=`<div class="loading">Загрузка...</div>`;try{let r=n;if(t.innerHTML=``,!r.length){t.innerHTML=`<p>Нет данных</p>`;return}r.forEach((e,n)=>{let r=document.createElement(`div`);r.className=`card`,r.dataset.tag=e.tag||``,r.dataset.time=g(e.time),r.dataset.index=n,r.innerHTML=`
        <div class="card__body">
          <div class="card__top">
            <div class="card__img">
              <img src="/ai4g-vite-pages/${e.image}" alt="${e.subtitle||``}">
            </div>

            <h3 class="card__subtitle">${e.subtitle||``}</h3>

            <div class="card__description">
              ${e.description||``}
            </div>

            <div class="card__category ${e.tag||``}">
              ${e.category||``}
            </div>
          </div>

          <div class="card__time">
            ${e.time||0} мин
          </div>

          <a href="/ai4g-vite-pages/technic.html?slug=${e.slug}" class="card__link">
            Подробнее
          </a>
        </div>
      `,t.appendChild(r)}),x();let i=e.querySelector(`.sort__option[data-value="default"]`);i&&m(i,s)}catch(e){console.error(`Ошибка загрузки:`,e),t.innerHTML=`<div class="error">Ошибка загрузки данных</div>`}}i.addEventListener(`click`,e=>{e.stopPropagation(),o.style.display=o.style.display===`block`?`none`:`block`}),document.addEventListener(`click`,()=>{o.style.display=`none`}),s.forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.value;if(t===u){o.style.display=`none`;return}u=t,m(e,s),b(),o.style.display=`none`})}),document.querySelectorAll(`.filter__btn`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.category,n=e.dataset.time;t&&t!==`all`?c=c===t?null:t:t===`all`&&(c=null),n&&n!==`all`?l=l===n?null:n:n===`all`&&(l=null),x()})});let C=document.querySelector(`.reset-filter[data-reset="all"]`);C&&C.addEventListener(`click`,()=>{c=null,l=null,u=`default`;let t=e.querySelector(`.sort__option[data-value="default"]`);t&&m(t,s),x()}),S()})}));t(),i();