import React, {useState} from 'react';
import URLshortner from './URLshortner';
import Input from './urlInput';
import Footer from './Footer';
import URLList from './UrlList';


function App() {

    const [Url, setUrl] = useState('')

    function handleUrlChange(e){
        setUrl(e);
    }

    return (
        <div className='container'>
            <Input urlfunc={handleUrlChange}/>
            <URLshortner url={Url}/>
            <URLList/>
            <Footer/>
        </div>
    );
}

export default App;
