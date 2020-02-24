import React, { FunctionComponent, ReactNode } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./ButtonLink.module.css";

const cn = classNames.bind(styles);

interface Props {
  /* Выбор стилизации кнопки (primary или outline ) */
  outline?: boolean;
  /* Адрес по которому нужно перейти */
  to: string;
  /* Контент внури кнопки */
  children?: Array<ReactNode> | string;
}

export const ButtonLink: FunctionComponent<Props> = ({
  outline,
  to,
  children
}: Props) => {
  const btnStyle = outline ? "btn-outline" : "btn-primary";

  return (
    <Link to={to} className={cn(btnStyle, "btn")}>
      {children}
    </Link>
  );
};
