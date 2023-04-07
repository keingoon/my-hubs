import React, { Component } from "react";
import PropTypes from "prop-types";
import className from "classnames";
import styles from "../assets/stylesheets/custom-switch-person-view-button.scss";
import { FormattedMessage } from "react-intl";
import { ReactComponent as CubeIcon } from "./icons/Cube.svg";
import { CAMERA_MODE_THIRD_PERSON_VIEW, CAMERA_MODE_FIRST_PERSON } from "../systems/camera-system";

export class CustomSwitchPersonViewButton extends Component {
  static propTypes = {
    store: PropTypes.object,
    scene: PropTypes.object
  };

  constructor() {
    // TODO: When this component is recreated it clears its state.
    // This happens several times as the page is loading.
    // We should either avoid remounting or persist the category somewhere besides state.
    super();

    this.storeUpdated = this.storeUpdated.bind(this);
  }

  componentDidMount() {
    this.props.store.addEventListener("statechanged", this.storeUpdated);
  }

  componentWillUnmount() {
    this.props.store.removeEventListener("statechanged", this.storeUpdated);
  }

  storeUpdated() {
    const { enableThirdPersonView } = this.props.store.state.preferences;
    this.props.scene.systems["hubs-systems"].cameraSystem.setMode(
      enableThirdPersonView ? CAMERA_MODE_THIRD_PERSON_VIEW : CAMERA_MODE_FIRST_PERSON
    );
  }

  render() {
    const store = this.props.store;
    const storeKey = "enableThirdPersonView";
    const value = store.state.preferences[storeKey];
    const setValue = v => {
      store.update({ preferences: { [storeKey]: v } });
    };
    return (
      <label className={className(styles.switchPersonViewBox)}>
        <CubeIcon />
        <span>
          <FormattedMessage id="content-menu.custom-switch-person-view-button" defaultMessage="3人称視点切り替え" />
        </span>
        <input
          className={className(styles.switchPersonViewButton)}
          tabIndex="0"
          type="checkbox"
          checked={value}
          onChange={() => {
            setValue(!value);
          }}
        />
      </label>
    );
  }
}
