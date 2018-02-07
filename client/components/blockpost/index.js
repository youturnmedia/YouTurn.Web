import React,{Component} from 'react'
import {Image,Col,Row,Glyphicon} from 'react-bootstrap' 
import {burningicon,headerblockimage,headerblockimagecontainer,headerpostcontent,headertitle,headercontent,headerpostcontainer,headercontentfooter} from './styles'

export default class BlockPost extends Component{
    render(){
       return(
           <Row className={headerpostcontainer}>           
            <Col md={6} lg={6}> 
                <div className={headerblockimagecontainer}>          
                    <Image className={headerblockimage} src="https://scontent.fmaa1-1.fna.fbcdn.net/v/t1.0-9/26804820_941403162692482_529208040695746276_n.png?oh=12267c686d4883b9facc422516b77131&oe=5AE5B10D" />           
                </div>
            </Col>
            <Col md={6} lg={6} >
                <div className={headerpostcontent}>
                    <div className={burningicon}>  <Glyphicon glyph="fire" /> Burning</div>
                    <div><h1 className={headertitle}>சென்னை மீம்ஸ் மற்றும் edudharma சர்ச்சையும், வேலைக்காரன் படம் பாணியில் கார்ப்ரேட் தந்திரமும்</h1></div>
                    <div className={headercontent}>சென்னை மீம்ஸ் செய்த SAVE FARMERS CAMPAIGN-ல் நமக்கு தேவை மக்கள் பணம் மக்களுக்கே சரியாக சென்றடைவது தான். சமூக வலைதளத்தில் கேலி, கிண்டல் என்பதையும் தாண்டி பல தகாத வார்த்தைகளையும் பயன்படுத்தி பலரும் அவர்களை திட்டுவதை கவனிக்க முடிகிறது. அதில், நமக்கு கொஞ்சமும் விருப்பம் இல்லை. கேள்வி எழுப்புவதும், கணக்கு கேட்பதும், அந்த பணத்தை சரியானவரிடம் சேர்க்க அறிவுறுத்துவதும் நமது உரிமை என்ற அளவில் இதனை நாங்கள் புரிந்து வைத்துள்ளோம் ...</div>
                    <div className={headercontentfooter}>
                        Readmore
                    </div>
                </div>
            </Col>
           </Row>
        )
    }
}