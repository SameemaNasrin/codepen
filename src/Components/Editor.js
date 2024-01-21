import React, { useState } from 'react'
import 'codemirror/lib/codemirror.css' //stle related to code editor
import 'codemirror/theme/material.css' //css style for editors
import 'codemirror/mode/xml/xml'                //languages that we 
import 'codemirror/mode/javascript/javascript'  //are going to 
import 'codemirror/mode/css/css'                //use on the editor
import { Controlled as ControlledEditor } from 'react-codemirror2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons'
export default function Editor(props) {
    const {
        language,
        displayName,
        value,
        onChange
    } = props

    function handleChange(editor, data, value) {
        onChange(value)
    }

    const [open, SetOpen] = useState(true);
    return (
        <div className={`editor-container ${open ? '' : 'collapsed'}`}>
            <div className='editor-title'>
                {displayName}
                <button
                    type='buttom'
                    className='expand-collapse-btn'
                    onClick={() => SetOpen(prevOpen => !prevOpen)}>
                    <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
                </button>
            </div>
            <ControlledEditor
                onBeforeChange={handleChange}
                value={value}
                className='code-mirror-wrapper'
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    lineNumbers: true,
                    theme: 'material'
                }}
            />
        </div>
    )
}
