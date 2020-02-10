import React, { FunctionComponent, ReactNode } from "react";
import { Router } from "react-router";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import { createBrowserHistory } from "history";
import styles from "./ButtonLink.module.css";

const cn = classNames.bind(styles);
const history = createBrowserHistory();

interface Props {
  /* Выбор стилизации кнопки (primary или outline ) */
  outline?: boolean;
  /* Адрес по которому нужно перейти */
  to: string;
  children?: Array<ReactNode> | string;
}

export const ButtonLink: FunctionComponent<Props> = ({
  outline,
  to,
  children
}: Props) => {
  const btnStyle = outline ? "btn-outline" : "btn-primary";

  return (
    <Router history={history}>
      <Link to={to} className={cn(btnStyle, "btn")}>
        {children}
      </Link>
    </Router>
  );
};
