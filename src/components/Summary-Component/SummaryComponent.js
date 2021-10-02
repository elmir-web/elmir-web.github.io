import "./SummaryComponent.scss";

import Navigation from "./../Navigation/Navigation";

function SummaryComponent() {
  return (
    <div className="Summary-Component">
      <header>
        <div className="Summary-Left">
          <div className="Hello-World">
            Hello
            <br />
            I am Elmir
            <br />
            Web.
            <br />
            <br />
            It is my summary.
          </div>
        </div>
        <div className="Summary-Right">photo{/* картинка */}</div>
      </header>

      <main>
        <nav className="nav">
          <Navigation className="Navigation" selectedPage="2" />
        </nav>
        <section className="skills">
          <h2>Способности</h2>
          <article>
            <div className="icon-skill">
              <p>
                <span>Figma</span>
              </p>
            </div>
            <div className="desc-skill">
              <p>
                Умею работать с Figma на уровне верстальщика. Так скажем, своими
                словами, вижу где в макете блочный элемент, а где строчный.
                Проще говоря, читаю макеты:)
              </p>
            </div>
          </article>

          <article>
            <div className="desc-skill">
              <p>
                Знаю и использую большинство используемых HTML-тегов, их
                атрибутов. Создаю или меняю разметку на семантическую.
              </p>
            </div>
            <div className="icon-skill">
              <p>
                <span>HTML</span>
              </p>
            </div>
          </article>

          <article>
            <div className="icon-skill">
              <p>
                <span>CSS/SCSS</span>
              </p>
            </div>
            <div className="desc-skill">
              <p>
                Использую flex, адаптивную верстку, позиционирование. Верстаю
                макеты средние и легкие по сложности. Предпочитаю работать с
                SCSS.
              </p>
            </div>
          </article>

          <article>
            <div className="desc-skill">
              <p>Работаю с JavaScript на уровне ECMAScript 6 (Trainee).</p>
            </div>
            <div className="icon-skill">
              <p>
                <span>JavaScript</span>
              </p>
            </div>
          </article>

          <article>
            <div className="icon-skill">
              <p>
                <span>Angular</span>
              </p>
            </div>
            <div className="desc-skill">
              <p>
                Работаю с JavaScripts фреймворком на Angular на уровне верстки,
                разбития на компоненты, работаю с диррективами.
              </p>
            </div>
          </article>

          <article>
            <div className="desc-skill">
              <p>
                Изучаю React. Текущий сайт создан средствами JavaScript
                библиотеки React. Использую компоненты (+ пропсы), роутинг.
              </p>
            </div>
            <div className="icon-skill">
              <p>
                <span>React</span>
              </p>
            </div>
          </article>

          <article>
            <div className="icon-skill">
              <p>
                <span>NodeJS</span>
              </p>
            </div>
            <div className="desc-skill">
              <p>
                Работаю с NodeJS для Frontend-разработки. Так называемый
                Backend-For-Frontend. Использую Node Packages Manager.
              </p>
            </div>
          </article>

          <article>
            <div className="desc-skill">
              <p>
                Работаю с NodeJS фреймворком Electron JS, позволяющем со
                знаниями HTML, CSS, JavaScript, NodeJS создавать
                кроссплат-форменные Desktop-приложения.
              </p>
            </div>
            <div className="icon-skill">
              <p>
                <span>Electron</span>
              </p>
            </div>
          </article>

          <article>
            <div className="icon-skill">
              <p>
                <span>Git</span>
              </p>
            </div>
            <div className="desc-skill">
              <p>
                Работаю с системой контроля версий Git, кроме Pull & Merge
                Request использую все возможности Git - работа с удаленными
                репозиториями, pull, commit, push. Etc.
              </p>
            </div>
          </article>
        </section>

        <section className="work">
          <h2>Опыт работы</h2>
          {/* <article className="work-in-history">
            <div className="left-name-age">
              <h3>Название компании</h3>
              <p>Декабрь 2015 - Декабрь 2016</p>
            </div>
            <div className="right-desc-tech">
              <p>
                Workplace platform mobile app designed to provide long lasting
                feature.
              </p>
              <p>
                <span className="tech-label">Html</span>
                <span className="tech-label">Css</span>
                <span className="tech-label">js</span>
              </p>
            </div>
          </article> */}

          <article className="job-search">
            <p>Коммерческий отыт работы в сфере IT-разработки отсутствует.</p>
          </article>
        </section>
      </main>
    </div>
  );
}

export default SummaryComponent;
