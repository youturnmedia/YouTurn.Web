import React,{Component} from 'react';
import MiniListItem from './minilistitem'

export default class MiniList extends Component{
    render(){
        return(
            <div>
                <MiniListItem imageurl="http://youturn.in/sites/default/files/styles/news/public/storypictures/india%20air.jpg?itok=wB9n_A1J" title="பசுமை நாடுகள் பட்டியலில் கிட்டத்தட்ட கடைசி இடத்தில் இந்தியா!"  />
                <MiniListItem imageurl="http://youturn.in/sites/default/files/styles/news/public/storypictures/modii.jpg?itok=5I29FAoN" title="600 கோடி வாக்காளர்கள் பிஜேபி-க்கு வாக்களித்ததாகக் கூறிய பிரதமர் மோடி."  />
                <MiniListItem imageurl="http://youturn.in/sites/default/files/styles/news/public/storypictures/nose.jpg?itok=YWLlHJud" title="Joy Sticks பட்டன்கள் தயாரிப்பதற்காக வருடத்திற்கு 10 மில்லியன் நாய்கள் கொலையா ?"  />
                <MiniListItem imageurl="http://youturn.in/sites/default/files/styles/news/public/storypictures/USB.png?itok=1Y5xtc2j" title="லேப்டாப் கருவியை கண்டுபிடித்தது தமிழர்கள்.. கல்வெட்டு ஆதாரம் உண்மையா ?"  />
                <MiniListItem imageurl="http://youturn.in/sites/default/files/styles/news/public/storypictures/wine.jpg?itok=qcza8r6G" title="2700 ஆண்டுகள் பழமையான உலகின் முதல் கண்ணாடி பாட்டிலா ?"  />
                <MiniListItem imageurl="http://youturn.in/sites/default/files/styles/news/public/storypictures/%E0%AE%9A%E0%AF%82%E0%AE%AA%E0%AF%8D%E0%AE%AA%E0%AE%B0%E0%AF%8D%20%E0%AE%AE%E0%AF%82%E0%AE%A9%E0%AF%8D.jpg?itok=xKza_4BO" title="150 ஆண்டுகளுக்கு பிறகு மீண்டும் தோன்றும் super blue blood moon."  />
                <MiniListItem imageurl="http://youturn.in/sites/default/files/styles/news/public/storypictures/PARACETAMOL.jpg?itok=NGMWLajj" title="பராசிட்டமல் மாத்திரைகளால் வைரஸ் பாதிப்பு ஏற்படுகிறதா ?"  />
            </div>
        )
    }
}