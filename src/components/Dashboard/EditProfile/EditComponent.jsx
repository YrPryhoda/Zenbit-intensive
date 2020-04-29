import React from "react";
import { Layout } from "antd";
const EditComponent = ({
  eventMsg,
  onChangeInput,
  onSetForm,
  currentUser: { name, email, phone },
}) => (
  <Layout className="login-form">
    <form className="form-form" onSubmit={(e) => onSetForm(e)}>
      <h2 className="large-h2"> Редактировать данные</h2>
      <div className="error-div">
        {!!eventMsg.length && (
          <p className={`${eventMsg[eventMsg.length - 1].type}-msg`}>
            {eventMsg[eventMsg.length - 1].message}
          </p>
        )}
      </div>
      <div className="form-info"></div>
      <div className="form-field">
        <label htmlFor="name" className="form-label">
          {" "}
          Ваше имя{" "}
        </label>
        <input
          type="text"
          name="name"
          className="form-input input-login"
          value={name}
          placeholder="Укажите свое имя"
          onChange={(e) => onChangeInput(e)}
        />
      </div>
      <div className="form-field">
        <label htmlFor="phone" className="form-label">
          {" "}
          Номер телефона{" "}
        </label>
        <input
          type="text"
          name="phone"
          className="form-input input-login"
          value={phone}
          placeholder="Укажите свой контактный номер"
          onChange={(e) => onChangeInput(e)}
        />
      </div>
      <div className="form-field">
        <label htmlFor="email" className="form-label">
          {" "}
          Электронная почта{" "}
        </label>
        <input
          type="text"
          name="email"
          className="form-input input-login"
          value={email}
          placeholder="Укажите свой e-mail"
          onChange={(e) => onChangeInput(e)}
        />
      </div>
      <div className="form-field">
        <input
          type="submit"
          value="Подтвердить"
          className="button button-submit"
        />
      </div>
    </form>
  </Layout>
);

export default EditComponent;
