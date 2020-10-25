import React from "react";
import "./Toolbar.css";

import config from "components/App/App.config";

// Importing components
import SimpleIconButton from "components/SimpleIconButton/SimpleIconButton";
import IndicatorIconButton from "components/IndicatorIconButton/IndicatorIconButton";
import InputColor from "components/InputColor/InputColor";
import InputSize from "components/InputSize/InputSize";
import Group from "components/Group/Group";

// Importing icons
import pencilIcon from "icons/pencil.svg";
import brushIcon from "icons/brush.svg";
import eraserIcon from "icons/eraser.svg";
import lineIcon from "icons/line.svg";
import rectangleIcon from "icons/rectangle.svg";
import circleIcon from "icons/circle.svg";
import downloadIcon from "icons/download.svg";
import trashIcon from "icons/trash.svg";

export default function Toolbar() {
  return (
    <>
      <div className="toolbar">
        <Group>
          <IndicatorIconButton id={config.items.pencil.id} icon={pencilIcon} />
          <IndicatorIconButton id={config.items.brush.id} icon={brushIcon} />
          <IndicatorIconButton id={config.items.eraser.id} icon={eraserIcon} />
          <IndicatorIconButton id={config.items.line.id} icon={lineIcon} />
          <IndicatorIconButton id={config.items.rectangle.id} icon={rectangleIcon} dropup />
          <IndicatorIconButton id={config.items.circle.id} icon={circleIcon} dropup />
        </Group>
        <Group>
          <InputSize id="input-size" />
          <InputColor id="input-color" />
        </Group>
        <Group>
          <SimpleIconButton id="simpleIconButton-download" icon={downloadIcon} />
          <SimpleIconButton id="simpleIconButton-trash" icon={trashIcon} />
        </Group>
      </div>
    </>
  );
}
