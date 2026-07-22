import{d as e,t}from"./main-Cx8IBN6I.js";var n=e((()=>{document.addEventListener(`DOMContentLoaded`,async()=>{let e=document.getElementById(`technic-page`);if(!e)return;let t=new URLSearchParams(window.location.search).get(`slug`);if(!t){r(`Техника не найдена`);return}try{let e=await fetch(`data/technics.json`);if(!e.ok)throw Error(`Ошибка загрузки JSON: ${e.status}`);let i=(await e.json()).find(e=>e.slug===t);if(!i){r(`Техника не найдена`);return}n(i)}catch(e){console.error(e),r(`Ошибка загрузки страницы`)}function n(t){document.title=t.title||t.subtitle||`Техника развития`;function n(e){return!e||!e.length?``:`
        <ul>
          ${(Array.isArray(e)?e:e.split(`
`).filter(Boolean)).map(e=>`<li>${e.trim()}</li>`).join(``)}
        </ul>
      `}function r(e){return!e||!e.length?``:`
        <ol class="technics__steps">

          ${e.map(e=>`
            <li>

              <div class="technics__step-text">
                ${e.text}
              </div>

              ${e.example?`
                <div class="technics__example">
                  <strong>Пример:</strong>

                  <p>
                    ${e.example}
                  </p>
                </div>
              `:``}

            </li>
          `).join(``)}

        </ol>
      `}function i(e){return!e||!e.length?``:e.map(e=>`
        <a href="/technics.html?search=${encodeURIComponent(e)}">
          #${e}
        </a>
      `).join(` `)}e.innerHTML=`
      <section class="technics" id="top">

        <div class="technics__container">

          <!-- Хлебные крошки -->

          <ul class="technics__bread-crumbs">
            <li>
              <a href="../index.html">
                Главная
              </a>
            </li>

            <li>
              <a href="../technics.html">
                Техники
              </a>
            </li>

            <li>
              ${t.title||t.subtitle||``}
            </li>
          </ul>

          <!-- Контент -->

          <div class="technics__body">

            <!-- Верх -->

            <div class="technics__top">

              <h1 class="technics__title">
                ${t.title||t.subtitle||``}
              </h1>

              <div class="technics__img">
                <img
                  src="${t.image}"
                  alt="${t.title||t.subtitle||``}"
                >
              </div>

            </div>

            <!-- Описание -->

            ${t.description?`
              <div>

                <h2 class="technics__label label">
                  Описание:
                </h2>

                <p>
                  ${t.description}
                </p>

              </div>
            `:``}

            <!-- Категория -->

            ${t.category?`
              <div>

                <h2 class="technics__label label">
                  Категория техники:
                </h2>

                <p>
                  ${t.category}
                </p>

              </div>
            `:``}

            <!-- Время -->

            ${t.time||t.duration?`
              <div>

                <h2 class="technics__label label">
                  Время:
                </h2>

                <p>
                  ${t.time?`${t.time} минут`:t.duration}
                </p>

              </div>
            `:``}

            <!-- Зачем -->

            ${t.why?`
              <div>

                <h2 class="technics__label label">
                  Зачем:
                </h2>

                <div class="technics__content">
                  <p>
                    ${t.why}
                  </p>
                </div>

              </div>
            `:``}

            <!-- Как работает -->

            ${t.howWorks?`
              <div>

                <h2 class="technics__label label">
                  Как это работает:
                </h2>

                <div class="technics__content">
                  <p>
                    ${t.howWorks}
                  </p>
                </div>

              </div>
            `:``}

            <!-- Шаги -->

            ${t.steps?`
              <div>

                <h2 class="technics__label label">
                  Алгоритм выполнения:
                </h2>

                ${r(t.steps)}

              </div>
            `:``}

            <!-- Доп упражнения -->

            ${t.extraExercises?`
              <div>

                <h2 class="technics__label label">
                  Дополнительные упражнения:
                </h2>

                <div class="technics__content">
                  ${n(t.extraExercises)}
                </div>

              </div>
            `:``}

            <!-- Литература -->

            ${t.literature?`
              <div class="technics__catalog">

                <div class="technics__label label">
                  Почитать больше о технике:
                </div>

                ${n(t.literature)}

              </div>
            `:``}

            <!-- Рекомендуем -->

            ${t.recommendedReading?`
              <div class="technics__catalog">

                <div class="technics__label label">
                  Рекомендуем прочитать:
                </div>

                ${n(t.recommendedReading)}

              </div>
            `:``}

            <!-- Хештеги -->

            <div class="technics__links">

              ${t.category?`
                <a href="/technics.html?category=${t.tag}">
                  #${t.category}
                </a>
              `:``}

              ${i(t.hashtags)}

            </div>

          </div>

        </div>

      </section>
    `}function r(t){e.innerHTML=`
      <section class="technic-error">

        <div class="technics__container">

          <h1>
            ${t}
          </h1>

          <a href="/technics.html">
            ← Вернуться к техникам
          </a>

        </div>

      </section>
    `}})}));t(),n();