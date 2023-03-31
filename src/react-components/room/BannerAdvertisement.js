import React from "react";
import classNames from "classnames";
import styles from "./BannerAdvertisement.scss";
// import { useIntl, defineMessage } from "react-intl";

export function BannerAdvertisementBox() {
  return (
    <img
      src="https://samplelib.com/lib/preview/png/sample-boat-400x300.png"
      className={classNames(styles.bannerAdvertisementBox)}
    />
  );
}
