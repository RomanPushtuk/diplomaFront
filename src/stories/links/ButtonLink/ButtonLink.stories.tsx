import React from "react";
import { ButtonLink } from "../../../modules/links";

export default {
  title: "Links/ButtonLink",
  component: ButtonLink
};

export const ButtonLinkPrimary = () => (
  <>
    <p>ButtonLink primary</p>
    <ButtonLink to="#">Перейти</ButtonLink>
  </>
);

export const ButtonLinkOutline = () => (
  <>
    <p>ButtonLink outline</p>
    <ButtonLink to="#" outline>
      Перейти
    </ButtonLink>
  </>
);
