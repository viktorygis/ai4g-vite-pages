import"./main-DdTQBruB.js";import{t as e}from"./technics-nqLxC9ju.js";document.addEventListener(`DOMContentLoaded`,()=>{let t=document.querySelector(`.sort__dropdown`),n=document.querySelector(`.technics-main__body`),r=document.getElementById(`no-cards-placeholder`);if(!t||!n){console.warn(`Не найдены необходимые элементы`);return}let i=t.querySelector(`.sort__selected`),a=t.querySelector(`.sort__selected-arrow`),o=t.querySelector(`.sort__options`),s=t.querySelectorAll(`.sort__option`),c=null,l=null,u=`default`,d=new URLSearchParams(window.location.search),f=d.get(`category`),p=d.get(`time`);c=f&&f!==`all`?f:null,l=p&&p!==`all`?p:null;function m(e,t){t.forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`),h(e)}function h(e){let t=i?.querySelector(`span`);t&&(t.textContent=e.querySelector(`span`)?.textContent||`По умолчанию`);let n=e.dataset.value;a&&(a.style.display=n===`default`?`none`:`inline-block`,a.classList.toggle(`sort__option_02`,n===`desc`))}function g(e){let t=parseInt(e,10);return t<10?`lt10`:t>=10&&t<30?`10-30`:t>=30&&t<60?`30-60`:`60+`}function _(){let e=new URLSearchParams;c&&e.set(`category`,c),l&&e.set(`time`,l);let t=e.toString()?`${window.location.pathname}?${e.toString()}`:window.location.pathname;history.replaceState(null,``,t)}function v(){let e=document.querySelector(`.reset-filter[data-reset="all"]`);e&&(e.style.display=c||l?`inline-block`:`none`)}function y(){let e=document.querySelectorAll(`.card`),t=!1;if(document.querySelectorAll(`.filter__btn`).forEach(e=>e.classList.remove(`active`)),c){let e=document.querySelector(`.filter__btn[data-category="${c}"]`);e&&e.classList.add(`active`)}if(l){let e=document.querySelector(`.filter__btn[data-time="${l}"]`);e&&e.classList.add(`active`)}e.forEach(e=>{let n=e.dataset.tag,r=e.dataset.time;(!c||n===c)&&(!l||r===l)?(e.classList.remove(`hidden`),t=!0):e.classList.add(`hidden`)}),r&&(r.style.display=t?`none`:`block`),_(),v()}function b(){let e=Array.from(n.querySelectorAll(`.card:not(.hidden)`));u===`default`?e.sort((e,t)=>parseInt(e.dataset.index,10)-parseInt(t.dataset.index,10)):e.sort((e,t)=>{let n=e.querySelector(`.card__subtitle`)?.textContent.trim().toLowerCase()||``,r=t.querySelector(`.card__subtitle`)?.textContent.trim().toLowerCase()||``;return u===`asc`?n.localeCompare(r):r.localeCompare(n)}),e.forEach(e=>n.appendChild(e))}function x(){y(),b()}function S(){n.innerHTML=`<div class="loading">Загрузка...</div>`;try{let r=e;if(n.innerHTML=``,!r.length){n.innerHTML=`<p>Нет данных</p>`;return}r.forEach((e,t)=>{let r=document.createElement(`div`);r.className=`card`,r.dataset.tag=e.tag||``,r.dataset.time=g(e.time),r.dataset.index=t,r.innerHTML=`
        <div class="card__body">
          <div class="card__top">
            <div class="card__img">
              <img src="/${e.image}" alt="${e.subtitle||``}">
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

         <a href="/technics/${e.slug}.html" class="card__link">
            Подробнее
          </a>
        </div>
      `,n.appendChild(r)}),x();let i=t.querySelector(`.sort__option[data-value="default"]`);i&&m(i,s)}catch(e){console.error(`Ошибка загрузки:`,e),n.innerHTML=`<div class="error">Ошибка загрузки данных</div>`}}i.addEventListener(`click`,e=>{e.stopPropagation(),o.style.display=o.style.display===`block`?`none`:`block`}),document.addEventListener(`click`,()=>{o.style.display=`none`}),s.forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.value;if(t===u){o.style.display=`none`;return}u=t,m(e,s),b(),o.style.display=`none`})}),document.querySelectorAll(`.filter__btn`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.category,n=e.dataset.time;t&&t!==`all`?c=c===t?null:t:t===`all`&&(c=null),n&&n!==`all`?l=l===n?null:n:n===`all`&&(l=null),x()})});let C=document.querySelector(`.reset-filter[data-reset="all"]`);C&&C.addEventListener(`click`,()=>{c=null,l=null,u=`default`;let e=t.querySelector(`.sort__option[data-value="default"]`);e&&m(e,s),x()}),S()});