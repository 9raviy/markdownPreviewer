import './App.css';
import React from 'react'
import marked from 'marked'

const placeholder=  "# React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n  \nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n  \nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | ------------- \nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want! \n1. But the list goes on...\n- Even if you use dashes or asterisks.\n* And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)\n";

class App extends React.Component {
  constructor(props){
    super(props);
    this.handleChange=this.handleChange.bind(this);
    this.state=({
      input:placeholder
    })
  }

  handleChange(e){
   this.setState(
     {input:e.target.value })
  }

  render(){
    const render=new marked.Renderer();
  return (
    <div className="App">

        <header>
            <h2>Welcome to React MarkDown Previewer</h2> 
        </header>
          <div className="top-container">
            <div className="box1">
                <div className="editorTitle"><h3>Editor</h3></div> 
                <div className="editorContent">
                <textarea id="editor" placeholder="Enter element here" value={this.state.input} onChange={this.handleChange}></textarea>
                </div>
            </div>
            <div className="box2">
                <div className="previewTitle"><h3>Markdown Previewer</h3></div> 
                <div className="previewContent">
                <div id="preview" placeholder="Preview generated here" dangerouslySetInnerHTML={{__html:marked(this.state.input,{renderer:render})}} ></div>
                </div>
            </div>
    </div>
    </div>
  )}
}

export default App;
