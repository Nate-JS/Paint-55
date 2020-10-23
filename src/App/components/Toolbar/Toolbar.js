import React from 'react';
import './Toolbar.css';

// Importing components
import SimpleIconButton from './components/SimpleIconButton/SimpleIconButton';
import IndicatorIconButton from './components/IndicatorIconButton/IndicatorIconButton';
import InputColor from './components/InputColor/InputColor';
import InputSize from './components/InputSize/InputSize';
import Group from './components/Group/Group';

// Importing icons
import favicon from '../../../images/icons/favicon.svg';
import pencilIcon from '../../../images/icons/pencil.svg';
import brushIcon from '../../../images/icons/brush.svg';
import eraserIcon from '../../../images/icons/eraser.svg';
import textIcon from '../../../images/icons/text.svg';
import lineIcon from '../../../images/icons/line.svg';
import rectangleIcon from '../../../images/icons/rectangle.svg';
import circleIcon from '../../../images/icons/circle.svg';
import downloadIcon from '../../../images/icons/download.svg';
import trashIcon from '../../../images/icons/trash.svg';
import settingsIcon from '../../../images/icons/settings.svg';


export default function Toolbar() {
    return (
        <div className="toolbar">
            <Group>
                <SimpleIconButton id="simpleIconButton-chevron-left" icon={favicon} disabled />
            </Group>
            <Group>
                <IndicatorIconButton id="indicatorIconButton-pencil" icon={pencilIcon} />
                <IndicatorIconButton id="indicatorIconButton-brush" icon={brushIcon} />
                <IndicatorIconButton id="indicatorIconButton-eraser" icon={eraserIcon} />
                <IndicatorIconButton id="indicatorIconButton-text" icon={textIcon} />
                <IndicatorIconButton id="indicatorIconButton-line" icon={lineIcon} />
                <IndicatorIconButton id="indicatorIconButton-rectangle" icon={rectangleIcon} />
                <IndicatorIconButton id="indicatorIconButton-circle" icon={circleIcon} />
            </Group>
            <Group>
                <InputSize id="input-size" />
                <InputColor id="input-color" />
            </Group>
            <Group>
                <SimpleIconButton id="simpleIconButton-download" icon={downloadIcon} />
                <SimpleIconButton id="simpleIconButton-trash" icon={trashIcon} />
                <SimpleIconButton id="simpleIconButton-settings" icon={settingsIcon} />
            </Group>
        </div>
    )
}
