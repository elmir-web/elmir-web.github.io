import "./Landing-Four.scss";

import MailImg from "./assets/email_14410.png";
import MobileImg from "./assets/mobile_phone_14388.png";
import TelegramImg from "./assets/telegram_icon-icons.com_72055.png";
import VKImg from "./assets/vk_icon-icons.com_66102.png";
import WTImg from "./assets/whatsapp_logo_icon_154480.png";

function LandingFour() {
  function PushEmail(e) {
    e.preventDefault();

    window.alert("Пока что не как:)");
  }

  return (
    <div className="Landing-Four">
      <header>
        <nav>
          <a href="#" className="selected-a">
            Главная
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();

              window.location = `${window.location.href}summary`;
            }}
          >
            Резюме
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();

              window.location = `${window.location.href}portfolio`;
            }}
          >
            портфолио
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();

              window.location = `${window.location.href}interests`;
            }}
          >
            интересы
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();

              window.location = `${window.location.href}about`;
            }}
          >
            О сайте
          </a>
        </nav>
      </header>
      <main>
        <div className="create-email">
          <p>Напиши мне на почту</p>
          <form name="email-form">
            <input
              name="user-name"
              type="text"
              placeholder="Как к тебе обращаться?"
              required="required"
            />
            <input
              name="user-email"
              type="text"
              placeholder="Твоя почта?"
              required="required"
            />
            <input
              name="user-subject"
              type="text"
              placeholder="Тема обращения ко мне?"
              required="required"
            />
            <textarea
              name="message"
              required="required"
              placeholder="Твой текст для меня?"
            />
            <button id="push-email" onClick={PushEmail}>
              Отправить письмо
            </button>
          </form>
        </div>
        <span className="alternative-socials">Попробуй другие способы</span>
        <div className="social-links">
          <div className="social-mail">
            <a href="mailto:elmir.web@gmail.com">
              <img src={MailImg} className="social-img" />
              <span>На почту с клиента</span>
            </a>
          </div>
          <div className="social-phone">
            <a href="tel:89867784101">
              <img className="social-img" src={MobileImg} />
              <span>Позвонить</span>
            </a>
          </div>
          <div className="social-telegram">
            <a href="https://t.me/elmir_web">
              <img className="social-img" src={TelegramImg} />
              <span>Telegram</span>
            </a>
          </div>
          <div className="social-vk">
            <a href="https://vk.com/elmir_web">
              <img className="social-img" src={VKImg} />
              <span>ВКонтакте</span>
            </a>
          </div>
          <div className="social-wt">
            <a href="https://wa.me/79867784101">
              <img className="social-img" src={WTImg} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default LandingFour;
