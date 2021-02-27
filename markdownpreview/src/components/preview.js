import React from 'react'
import Marked from 'marked'

export default function preview(props) {
    return (
        <div id="preview">
            {document.getElementById('preview').innerHTML = `${Marked(props.inputText)}`}
        </div>
    )
}
