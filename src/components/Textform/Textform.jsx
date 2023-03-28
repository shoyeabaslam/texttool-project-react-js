import React , {useState} from 'react'


const Textform = () => {
  const [text,setText] = useState('');


  const changeTextArea = (event)=>{
      setText(event.target.value);
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };
  const handleClear = () => {
    setText('');
  };
  const handleUpper = (e) => {
    setText(text.toUpperCase());
  };
  const handleLower = () => {
    setText(text.toLowerCase());
  };
  const handleSpaces = () => {
    setText(text.trim().replace(/\s+/g, ' '));
  };
  return (
    <div className="form-floating">
      <textarea value={text} className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height:'200px'}} onChange = {changeTextArea}></textarea>
      <label htmlFor="floatingTextarea2">Enter Your Text</label>
      <div className='container my-4'>
      <button type="button" className="btn btn-primary m-2" onClick={handleUpper}>UPPERCASE</button>
      <button type="button" className="btn btn-primary m-2" onClick={handleLower}>LOWERCASE</button>
      <button type="button" className="btn btn-primary m-2" onClick={handleSpaces}>REMOVE EXTRA SPACES</button>
      <button type="button" className="btn btn-primary m-2" onClick={handleCopy}>COPY</button>
      <button type="button" className="btn btn-primary m-2" onClick={handleClear}>CLEAR</button>
      </div>
  </div>
  )
}

export default Textform