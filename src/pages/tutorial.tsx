import React from 'react';
import styles from './tutorial.module.scss'
const HTMLComponent = () => {

  try {
    const htmlContent = `
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>РИТМИК</title>
    <link rel="stylesheet" href="style.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Gudea:wght@400;700&family=Handjet:wght@400;700&family=Balsamiq+Sans:wght@400;700&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <header class="main-header">
    <div class="nav-container">
        <nav>
            <ul>
                <li><a href="#about">О НАС</a></li>
                <li><a href="#teach">ОБУЧЕНИЕ</a></li>
                <li><a href="#description">ОПИСАНИЕ</a></li>
                <li><a href="#game">ПРОБНАЯ ВЕРСИЯ</a></li>
                <li><a href="https://www.rustore.ru/catalog/app/ru.oneme.app">СКАЧАТЬ МАКС</a></li>
            </ul>
        </nav>
    </div>
</header>
    <main>
      <section id="Hello" class="first">
        <div class="big-frame1">
          <div class="left-section">
            <img src="ROBOT.png" alt="ritmik" class="img-frame1" />
            <div class="text-overlay">РИТМИК</div>
          </div>
          <div class="right-section">
            <div class="hello-text">
              <p>Цифровой питомец ждет в чате. Зайди поздороваться!</p>
            </div>
            <div class="hello-button">
              <div class="card-btn">ПРИВЕТ!</div>
            </div>
          </div>
        </div>
        <div class="Function">
          <button data-scroll="teach">ОБУЧЕНИЕ</button>
          <button data-scroll="description">ФУНКЦИИ</button>
          <button data-scroll="game">ПОПРОБУЙ</button>
        </div>
      </section>
      <section id="MAX" class="second">
        <div class="big-frame2">
          <div class="left-section2">
            <img src="S.png" alt="фон" />
          </div>
          <div class="S">
            <img src="image 7.png" alt="поверх" />
          </div>
          <div class="text-con">
            Российский мессенджер
            <div>MAX</div>
          </div>
          <div class="right-section2">
            <p>
              MAX — современный мессенджер, разработанный в России. Платформа
              объединяет текстовые сообщения, голосовые и видеозвонки с
              познавательными и развлекательными функциями.
            </p>
          </div>
        </div>
      </section>
      <section id="about" class="third">
        <div class="big-frame3">
          <img src="Ellipse 37.png" alt=" " class="circle circle-top-right" />
          <img src="Ellipse 38.png" alt=" " class="circle circle-bottom-left" />
          <img src="ROBOT.png" alt=" " class="robot-main" />
          <img src="mini_ritmik.png" alt=" " class="robot-main2" />
          <div class="text-overlay3">РИТМИК</div>
          <div class="text1">
            Привет! Я — Ритмик, и я душа твоего чата в образе цифрового питомца!
          </div>
          <div class="text3">
            Со мной чат становится уютнее, веселее и живее!
          </div>
          <div class="invite">Давай сделаем твой чат именно таким?</div>
        </div>
      </section>
      <section id="teach" class="fourth">
        <div class="big-frame4">
          <img class="background-image4" src="FRAME1.png" alt=" " />
          <div class="dark"></div>
          <button class="overlay-button">ОБУЧЕНИЕ</button>
        </div>
      </section>
      <section id="description" class="fifth">
        <div class="big-frame5">
          <img src="Ellipse 39.png" alt=" " class="circle circle-top-right" />
          <img src="Ellipse 40.png" alt=" " class="circle circle-middle-left" />
          <img
            src="Ellipse 41.png"
            alt=" "
            class="circle circle-bottom-right"
          />

          <img src="robot1.png" alt=" " class="robot robot-1" />
          <img src="robot2.png" alt=" " class="robot robot-2" />
          <img src="robot3.png" alt=" " class="robot robot-3" />
          <div class="a">Смена скинов позволяет менять настроение Ритмика.</div>
          <div class="b">
            Пользователь выбирает эмоции, цвет и стиль, делая мессенджер ярче и
            интереснее.
          </div>
          <div class="c">Приветик!</div>
          <div class="d">
            Обожаю заботиться обо всех и наводить красоту. Ты грустишь? Я всегда
            выслушаю и поддержу. Давай обсудим что-нибудь!
          </div>
          <div class="e">Привет. Давай сразу к делу.</div>
          <div class="f">
            Если возникла проблема — я её уже решаю. Люблю дела, а не слова. Да,
            я резковат, но зато на меня можно положиться. Не тормози — погнали.
          </div>
          <div class="g">О... привет. Я не помешал?</div>
          <div class="h">
            Мне тишина и разговоры по душам ближе, чем шумные компании. Но с
            тобой мне как-то... спокойно. Я много думаю, иногда грущу, но я
            искренне рад нашему общению!
          </div>
        </div>
      </section>
      <section id="game" class="sixth">
        <div class="big-frame6">
          <img class="background-image4" src="FRAME1.png" alt=" " />
          <div class="dark"></div>
          <a href="/login" class="overlay-button">ПОПРОБОВАТЬ</a>
        </div>
        </div>
      </section>
    </main>
    <script src="script.js"></script>
    <footer class="main-footer">
      <div class="footer-content">
        <!--
        <div class="footer-logo">
            <h3>РИТМИК</h3>
            <p>Твой цифровой спутник</p>
        </div>
        
        <div class="footer-links">
            <a href="#about">О проекте</a>
            <a href="#teach">Обучение</a>
            <a href="#description">Функции</a>
        </div>
        
        <div class="footer-social">
            <p>Следите за обновлениями</p>
            <div class="social-icons">
                <a href="#">VK</a>
                <a href="#">Telegram</a>
                <a href="#">YouTube</a>
            </div>
        </div>-->
      </div>
    </footer>
  </body>
</html>
    `

    return (
      <iframe srcDoc={ htmlContent } className={styles.ifr}/>
    );
  } catch (err) {
    console.error(`Error reading file: ${err}`);
  }
 
};

export default HTMLComponent;