import react, { useState, useEffect } from 'react';
import Marked from 'marked'
import './css/App.css';

function App() {


  const [inputText, setInputText] = useState('');
  const [loadingSwitch, setLoadingSwitch] = useState(false);
  let placeholder = '# This is a Heading\n ## Subheading\n ### subsubheading\n Heres some tags, `<div></div>`, between 2 backticks\n\n```for(let i = 0; i < arr.length; i++) {console.log(counter)}```\n\nYou can also make text **BOLD**... whoa!\n\n or _italic_.\n\n or **_BOTH_**\n\ncan cross stuff out ~~crossed out~~\n\n\n\nTheres also [links](https://www.freecodecamp.org), and\n\n> Block Quotes!\n\nAnd tables:\n\nWild Header | Crazy Header| Another header?\n\n------------ | ------------- | -------------\n\nContent can | be here, and it | can be here..\n\n and ehre | okay | we get it\n\n- And of course there are lists.\n\n  - Some are bulleted.\n\n    - With different indentation levels.\n\n      - That look like this.\n\n\n\n1. And numbered lists\n\n1. use 1s if you want\n\n\n\nlast thing is embedded images:\n\n\n\n ![React Logo w/ Text](https://goo.gl/Umyytc) '
  useEffect(() => {
    setLoadingSwitch(!loadingSwitch);
    document.getElementById('preview').innerHTML = Marked(placeholder)
  }, [])

  return (
    <div className="App">
        <div id="editor-container">
          <textarea id="editor" placeholder={placeholder} onChange={(e) => {
            setInputText(e.target.value)


          }  
          } ></textarea>
        </div>
        <div id="preview">
          {inputText === '' ? Marked(placeholder) : document.getElementById('preview').innerHTML= Marked(inputText)}
        </div>
    </div>
  );
}

export default App;
