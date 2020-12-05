import React from 'react';
import { useSelector } from 'react-redux';


const ShowLang = () => {

    const language = useSelector(state => state.changeLanguage.language);

    return (
        <div>
            {language === 'vi' ?
                <div>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/300px-Flag_of_Vietnam.svg.png'
                        alt='Mountain View'
                        width='300px'
                        height='200px'
                    />

                    <h1 className='language-vi'>
                        XIN CHAO
                    </h1>
                </div>


                :
                <div>
                    <img src='data:image/png;base64,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'
                        alt='Mountain View'
                        width='300px'
                        height='200px'
                    />

                    <h1 className='language-eng'>
                        HELLO
                    </h1>
                </div>
            }
        </div>
    );
}

export default ShowLang;