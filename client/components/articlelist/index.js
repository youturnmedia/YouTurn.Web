import React, {Component} from 'react';
import ArticleListItem from './ArticleListItem';

export default class ArticleList extends Component{
    render(){
        return(
            <div>
                <ArticleListItem content="380 டாடா சுமோ கார்களை வாங்குவதற்காக டாடா மோட்டார்ஸ் நிறுவனத்தை அணுகியது பாகிஸ்தான் அரசு. ஆனால், அதற்கு ரத்தன் டாடா மறுப்பு தெரிவித்துள்ளார்." title="பாகிஸ்தான் அரசின் ஆர்டரை ரத்தன் டாடா நிராகரித்தாரா ?" imageurl="http://youturn.in/sites/default/files/storypictures/tata%20sumo.jpg" />
                <ArticleListItem content="இரு கடல்கள் என்று கூறுவதே தவறானது ஆகும். கடலில் காணப்படும் இத்தகைய மாற்றத்திற்கு, அப்பகுதியில் உள்ள பனிப்பாறை ஆறுகளில் இருந்து கடலில் கலக்கும் நீரில் உள்ள மண் படிவங்கள் மற்றும் அதனுள் இருக்கும் இரும்பு தாதுக்களின் தன்மையினால் வேறுபட்டு " title="அலாஸ்கா வளைகுடாவில் ஒன்று சேராமல் இருக்கும் இரு கடல்கள்.?" imageurl="http://youturn.in/sites/default/files/storypictures/alaska%201.jpg" />
                <ArticleListItem content="சர்வதேச பொருளாதார மையத்தின் சார்பில் வாழ்க்கை தரம், சுற்றுச்சூழல் பாதுகாப்பு, வருங்கால தலைமுறைக்கான திட்டம் உள்ளிட்டவற்றை அடிப்படையாக கொண்டு தயாரிக்கப்பட்ட வளரும் பொருளாதார நாடுகள் பட்டியலில் இந்தியா 62வது இடத்தில்" title="வளரும் நாடுகள் பட்டியலில் பின்தங்கியது இந்தியா." imageurl="http://youturn.in/sites/default/files/storypictures/wef.jpg" />
            </div>
        )
    }
}