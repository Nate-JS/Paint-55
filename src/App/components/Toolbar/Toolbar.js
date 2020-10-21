import React from 'react';
import './Toolbar.css';

// Importing components
import IconButton from './components/IconButton/IconButton';
import InputColor from './components/InputColor/InputColor';
import InputSize from './components/InputSize/InputSize';
import Group from './components/Group/Group';

// Importing icons
import chevronRightIcon from '../../../images/icons/chevron-right.svg';
import chevronLeftIcon from '../../../images/icons/chevron-left.svg';
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
                <IconButton type="standard" icon={chevronLeftIcon} />
                <IconButton type="standard" icon={chevronRightIcon} />
            </Group>

            <Group>
                <IconButton type="exclusive" icon={pencilIcon} active />
                <IconButton type="exclusive" icon={brushIcon} />
                <IconButton type="exclusive" icon={eraserIcon} />
                <IconButton type="exclusive" icon={textIcon} />
                <IconButton type="exclusive" icon={lineIcon} />
                <IconButton type="exclusive" icon={rectangleIcon} />
                <IconButton type="exclusive" icon={circleIcon} />
            </Group>

            <Group>
                <InputSize />
                <InputColor />
            </Group>

            <Group>
                <IconButton type="standard" icon={downloadIcon} />
                <IconButton type="standard" icon={trashIcon} />
                <IconButton type="standard" icon={settingsIcon} />
            </Group>
        </div>
    )
}
