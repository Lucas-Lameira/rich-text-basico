import React, {useMemo, useState, useCallback} from 'react';

import {createEditor, Transforms, Editor} from 'slate'
import {Slate, Editable, withReact} from 'slate-react'

function App() {
  
  const editor = useMemo(() => withReact(createEditor()), []);

  const [value, setValue] = useState([
    {
      type: 'paragraph',
      children: [
        {
          text:'Texto Editavel'
        }
      ],
    },
  ]);
  
  return(
  <Slate editor={editor} value={value} onChange={value => setValue(value)}>
    <Editable         
    
    onKeyDown={event => {
      if(!event.ctrlKey) return console.log(event.key);      
    }}/>
  </Slate>  
  )
}

export default App;

