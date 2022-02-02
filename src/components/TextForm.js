import React, {useState} from 'react';


export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Uppercase button was clicked "+text);
        // setText("changed");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase.", "success");
    };

    const handleLoClick = () => {
        console.log("Uppercase button was clicked "+text);
        // setText("changed");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase.", "success");
    };

    const handleClearClick = () => {
        console.log("Clear button was clicked "+text);
        // setText("changed");
        setText("");
        props.showAlert("Text has been cleared.", "success");
    };
    
    const handleCopyClick = () => {
        console.log("Copy button was clicked "+text);
        let tempText = document.getElementById("myBox");
        // setText("changed");
        tempText.select();
        navigator.clipboard.writeText(tempText.value);
        props.showAlert("Text has been copied to clipboard.", "success");
    };

    const handleExtraSpaceClick = () => {
        console.log("Clear extra space button was clicked "+text);
        let newText = text.replace(/(^\s*)|(\s*$)/gi,"");
        newText = newText.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces removed.", "success");
    };

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    };

    const wordCount = (value) => {
        if(value ===""){
            return 0;
        }
        value = value.replace(/(^\s*)|(\s*$)/gi,"");
        value = value.replace(/\n/g," ");
        value = value.replace(/[ ]{2,}/gi," ");
        return value.split(' ').length;
    }

    // const wordCount = (value) => {
    //     return value.replace(/\./g, '')
    //         .split(' ')
    //         .filter(str => { return str !== '' })
    //         .length;
    // };

    const [text, setText] = useState('');
    // text = "dfs"; not allowed
    return (
        <>
        <div className='container'>
            <div className="mb-3">
                <h1 className='mb-5' style={{color: props.mode==='dark' ? 'white': props.mode === 'light' ? 'black' : 'red'}}>{props.heading}</h1>

                <textarea style={{backgroundColor: 'transparent', color: props.mode==='dark' ? 'white':'black'}} className="form-control" id="myBox" onChange={handleOnChange} value={text} rows="8"></textarea>
            </div>

            <button className={`btn btn-${props.mode==='light' ? 'primary':'light'}`} onClick={handleUpClick} >Convert to UpperCase</button>
            
            <button className={`btn mx-5 btn-${props.mode==='light' ? 'primary':'light'}`} onClick={handleLoClick} >Convert to LowerCase</button>

            <button className={`btn mx-5 btn-${props.mode==='light' ? 'primary':'light'}`} onClick={handleClearClick} >Clear Text</button>

            <button className={`btn mx-5 btn-${props.mode==='light' ? 'primary':'light'}`} onClick={handleCopyClick} >Copy Text</button>

            <button className={`btn mx-5 btn-${props.mode==='light' ? 'primary':'light'}`} onClick={handleExtraSpaceClick} >Clear Extra Spaces</button>

        </div>
        <div className="container my-5">
            <h2 className='my-4' style={{color: props.mode==='dark' ? 'white':'black'}}>Text Summary</h2>
            <p style={{color: props.mode==='dark' ? 'white':'black'}}>It contains {wordCount(text)}  words and {text.length} characters.</p>
            <p style={{color: props.mode==='dark' ? 'white':'black'}}>time to read it {0.008 * text.split(" ").length} mins</p>
        </div>
        
        <div className="container my-5">
            <h2 className='mt-5' style={{color: props.mode==='dark' ? 'white':'black'}}>Preview</h2>
            <p style={{color: props.mode==='dark' ? 'white':'black'}}>{text.length>0 ? text:"Enter text to check its preview"}</p>
        </div>
        </>
    );
}
