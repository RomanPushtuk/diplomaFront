import React, { Component } from "react";
import { Link } from "react-router-dom";

import americanEx from "../../../images/payments/american-ex.png";
import discover from "../../../images/payments/discover.png";
import masterCard from "../../../images/payments/master-card.png";
import paypal from "../../../images/payments/paypal.png";
import visa from "../../../images/payments/visa.png";

export class Footer extends Component {
  render() {
    return (
      <>
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                <Link className="logo-footer" to="/">
                  LearnElectronic<span className="text-primary">.</span>
                </Link>
                <p className="mt-4">
                  Начните изучать электронику вместе с нашим интерактивным
                  учебником.
                </p>
                <ul className="list-unstyled social-icon social mb-0 mt-4">
                  <li className="list-inline-item">
                    <Link to="#" className="rounded mr-1">
                      <i className="mdi mdi-facebook" title="Facebook" />
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#" className="rounded mr-1">
                      <i className="mdi mdi-instagram" title="Instagram" />
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#" className="rounded">
                      <i className="mdi mdi-twitter" title="Twitter" />
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <h4 className="text-light footer-head">Проект</h4>
                <ul className="list-unstyled footer-list mt-4">
                  <li>
                    <Link to="#" className="text-foot">
                      <i className="mdi mdi-chevron-right mr-1" /> О нас
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-foot">
                      <i className="mdi mdi-chevron-right mr-1" /> Услуги
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-foot">
                      <i className="mdi mdi-chevron-right mr-1" /> Команда
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-foot">
                      <i className="mdi mdi-chevron-right mr-1" /> Тарифы
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-foot">
                      <i className="mdi mdi-chevron-right mr-1" /> Развитие
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-foot">
                      <i className="mdi mdi-chevron-right mr-1" /> FAQ
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog" className="text-foot">
                      <i className="mdi mdi-chevron-right mr-1" /> Блог
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <h4 className="text-light footer-head">Полезные ссылки</h4>
                <ul className="list-unstyled footer-list mt-4">
                  <li>
                    <Link to="#" className="text-foot">
                      <i className="mdi mdi-chevron-right mr-1" />
                      Конфиденциальность
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-foot">
                      <i className="mdi mdi-chevron-right mr-1" />
                      Безопасные платежи
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-foot">
                      <i className="mdi mdi-chevron-right mr-1" /> Документация
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <h4 className="text-light footer-head">Новостная рассылка</h4>
                <p className="mt-4">
                  Получайте самые свежие новости на свой email
                </p>
                <form>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="foot-subscribe form-group position-relative">
                        <label>
                          Ведите ваш email{" "}
                          <span className="text-danger">*</span>
                        </label>
                        <i className="mdi mdi-email ml-3 icons" />
                        <input
                          type="email"
                          name="email"
                          id="emailsubscribe"
                          className="form-control pl-5 rounded"
                          placeholder="Ваш email : "
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <input
                        type="submit"
                        id="submitsubscribe"
                        name="send"
                        className="btn btn-primary w-100"
                        value="Подписаться"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </footer>
        <hr />
        <footer className="footer footer-bar">
          <div className="container text-center">
            <div className="row align-items-center">
              <div className="col-sm-6">
                <div className="text-sm-left">
                  <p className="mb-0">
                    © {new Date().getFullYear()} LearnElectronic
                  </p>
                </div>
              </div>
              <div className="col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <ul className="list-unstyled payment-cards text-sm-right mb-0">
                  <li className="list-inline-item mr-1">
                    <Link to="#">
                      <img src={americanEx} title="American Express" alt="" />
                    </Link>
                  </li>
                  <li className="list-inline-item mr-1">
                    <Link to="#">
                      <img src={discover} title="Discover" alt="" />
                    </Link>
                  </li>
                  <li className="list-inline-item mr-1">
                    <Link to="#">
                      <img src={masterCard} title="Master Card" alt="" />
                    </Link>
                  </li>
                  <li className="list-inline-item mr-1">
                    <Link to="#">
                      <img src={paypal} title="Paypal" alt="" />
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#">
                      <img src={visa} title="Visa" alt="" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}
