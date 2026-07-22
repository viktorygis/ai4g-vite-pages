import"./main-CURaMoVQ.js";import{t as e}from"./technics-C1uQ0Wqu.js";document.addEventListener(`DOMContentLoaded`,async()=>{let t=document.getElementById(`technic-page`);if(!t)return;let n=window.location.pathname.split(`/`).filter(Boolean).pop().replace(`.html`,``);if(!n){i(`Техника не найдена`);return}try{let t=e.find(e=>e.slug===n);if(!t){i(`Техника не найдена`);return}r(t)}catch(e){console.error(e),i(`Ошибка загрузки данных`)}function r(e){document.title=e.title||e.subtitle||`Техника развития`;function n(e){return!e||!e.length?``:`
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
      `).join(` `)}t.innerHTML=`
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
              ${e.title||e.subtitle||``}
            </li>
          </ul>

          <!-- Контент -->

          <div class="technics__body">

            <!-- Верх -->

            <div class="technics__top">

              <h1 class="technics__title">
                ${e.title||e.subtitle||``}
              </h1>

              <div class="technics__img">
                <img
                  src="/ai4g-vite-pages/${e.image}"
                  alt="${e.title||e.subtitle||``}"
                >
              </div>

            </div>

            <!-- Описание -->

            ${e.description?`
              <div>

                <h2 class="technics__label label">
                  Описание:
                </h2>

                <p>
                  ${e.description}
                </p>

              </div>
            `:``}

            <!-- Категория -->

            ${e.category?`
              <div>

                <h2 class="technics__label label">
                  Категория техники:
                </h2>

                <p>
                  ${e.category}
                </p>

              </div>
            `:``}

            <!-- Время -->

            ${e.time||e.duration?`
              <div>

                <h2 class="technics__label label">
                  Время:
                </h2>

                <p>
                  ${e.time?`${e.time} минут`:e.duration}
                </p>

              </div>
            `:``}

            <!-- Зачем -->

            ${e.why?`
              <div>

                <h2 class="technics__label label">
                  Зачем:
                </h2>

                <div class="technics__content">
                  <p>
                    ${e.why}
                  </p>
                </div>

              </div>
            `:``}

            <!-- Как работает -->

            ${e.howWorks?`
              <div>

                <h2 class="technics__label label">
                  Как это работает:
                </h2>

                <div class="technics__content">
                  <p>
                    ${e.howWorks}
                  </p>
                </div>

              </div>
            `:``}

            <!-- Шаги -->

            ${e.steps?`
              <div>

                <h2 class="technics__label label">
                  Алгоритм выполнения:
                </h2>

                ${r(e.steps)}

              </div>
            `:``}

            <!-- Доп упражнения -->

            ${e.extraExercises?`
              <div>

                <h2 class="technics__label label">
                  Дополнительные упражнения:
                </h2>

                <div class="technics__content">
                  ${n(e.extraExercises)}
                </div>

              </div>
            `:``}

            <!-- Литература -->

            ${e.literature?`
              <div class="technics__catalog">

                <div class="technics__label label">
                  Почитать больше о технике:
                </div>

                ${n(e.literature)}

              </div>
            `:``}

            <!-- Рекомендуем -->

            ${e.recommendedReading?`
              <div class="technics__catalog">

                <div class="technics__label label">
                  Рекомендуем прочитать:
                </div>

                ${n(e.recommendedReading)}

              </div>
            `:``}

            <!-- Хештеги -->

            <div class="technics__links">

              ${e.category?`
                <a href="/technics.html?category=${e.tag}">
                  #${e.category}
                </a>
              `:``}

              ${i(e.hashtags)}

            </div>

          </div>

        </div>

      </section>
    `}function i(e){t.innerHTML=`
      <section class="technic-error">

        <div class="technics__container">

          <h1>
            ${e}
          </h1>

          <a href="/technics.html">
            ← Вернуться к техникам
          </a>

        </div>

      </section>
    `}});