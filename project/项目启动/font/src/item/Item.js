import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {WhiteSpace, WingBlank} from 'antd-mobile';
import './item.css'
export default class Item extends Component {
    render() {
        return (
            <div style={{height:'100%',width:'100%',}}>
                <div style={{display:'flex',textAlign:'center',background:'linear-gradient(to right,#F55E7E, #F47B87, #F58B7F)',lineHeight:2}}>
                    <Link to='/appTaber'>
                        <img src={require('./images/return.png')} style={{width:30,height:30,paddingTop:10}}/>
                    </Link>
                    <span style={{margin:'0 auto',fontSize:25,color:'white'}}>
                        认证条款
                    </span>
               </div>
               <WhiteSpace />
                <WhiteSpace />
               <WingBlank>
                   <div style={{border:'1px solid grey',height:400,overflow:'scroll',}} className='b1'>
                        <h2 style={{textAlign:'center'}}>条款</h2>
                        <p>在申请实名认证服务（以下简称“认证”）前，请详细阅读本协议的所有内容。若您开始认证流程，即表示您充分理解并同意接受本协议的全部内容。</p>
                        <p>为了提高信用信息访问及查询的安全性和用户身份的可信性，义乌市信用信息核查平台向您提供认证服务。在您申请认证前，您必须先注册成为信用信息核查平台用户。本平台有权采取各种认为必要的手段对用户身份进行识别，并有权记录并保存您完成以上程序提供的信息。但是，本平台所能采取的认证方法有限，在线上进行身份验证也存在一定困难。因此，本平台对完成认证的用户身份的准确性和绝对真实性不做任何保证。</p>
                        <h3>一、服务内容</h3>
                        <p>本平台向您提供个人实名认证服务。个人实名认证服务指信用信息核查平台用户签署了实名认证服务协议，采用身份证实名认证或使用义乌市社会保险个人信息查询系统的登录方式进行认证。经信用信息核查平台核实有效后，给与用户个人实名认证标识的服务。完成实名认证的用户，方可查询自身信用信息。</p>
                        <h3>二、 适用范围</h3>
                        <p>实名认证服务适用于信用信息核查平台的所有个人用户。</p>
                        <h3>三、认证流程</h3>
                        <h4>1.身份证实名认证：</h4>
                        <p>1）用户在实名认证申请页面填写真实姓名、证件号码，上传身份证照片。身份证照片要求为彩色、完整的原件(正面和反面)扫描或照片，能够清晰辨识证件图案和文字内容；</p>
                        <p>2）信用信息核查平台在收到认证申请后，2个工作日返回通过或未通过认证的结果。</p>
                        <h4>2.使用义乌市社会保险个人信息查询系统登录认证（仅限于在义乌市缴纳社保的用户）：</h4>
                        <p>1）用户填写身份证号，系统会向用户办理社保时预留的手机号发送一条短信验证码。</p>
                        <p>2）用户输入验证码，系统会对验证码进行验证，验证通过，系统自动获取用户的个人实名信息，并把用户标识为实名认证用户。</p>
                        <h4>3.通过实名认证的信用信息核查平台用户不能自行修改已经认证的信息，包括但不限于个人姓名以及身份证件号码等。</h4>
                        <h3>四、隐私保护</h3>
                        <h4>1.您在认证时提交给本平台的认证资料，即不可撤销的授权由本平台保留。本平台承诺除法定或约定的事由外，不公开或编辑或透露您的认证资料及保存在本平台的非公开内容用于商业目的，但下列情况除外：</h4>
                        <p>1) 您授权本平台透露的相关信息；</p>
                        <p>2) 本平台向国家司法及行政机关提供；</p>
                        <p>3) 第三方和本平台一起为用户提供服务时，该第三方向您提供服务所需的相关信息。</p>
                        <h4>2.我们将采取合理的方式以保护您个人资料的安全。我们将使用必要的可以获得的安全技术和程序来保护您的个人资料不被未经授权的访问、使用或泄漏。</h4>
                        <h3>五、免责条款</h3>
                        <h4>下列情况时本平台无需承担任何责任：</h4>
                        <p>1.由于您将信用信息核查平台账户密码告知他人或未保管好自己的密码或与他人共享信用信息核查平台账户或任何其他非本平台的过错，导致您的个人资料泄露。</p>
                        <p>2.由于不可抗力，例如出现故障、火灾、水灾、雷击、地震、洪水、台风、龙卷风、火山爆发、瘟疫和传染病流行、罢工、战争或暴力行为或类似事件等及其他非因本平台过错而造成的认证信息泄露、丢失、被盗用或被篡改等。</p>
                        <p>3.任何信用信息核查平台用户（包括未成年人用户）向本平台提供错误、不完整、不实信息等造成不能通过认证或遭受任何其他损失。</p>
                        <h3>六、修改和解释权</h3>
                        <p>1.本平台有权单方随时修改或变更本协议内容，并通过信用信息核查平台公告变更后的协议文本，无需单独通知您。本协议进行任何修改或变更后，您还继续使用实名认证服务的，即代表您已阅读、了解并同意接受变更后的协议内容，且不得因此而要求任何补偿或赔偿；您如果不同意变更后的协议内容，可停止使用我们所提供的服务。</p>
                        <p>2.我们保留对本协议条款、产品和服务以及我们所提供的产品和服务的相关官方网站的最终解释权。</p> 
                    </div>
               </WingBlank>
               <WhiteSpace />
                <WhiteSpace />
                <WhiteSpace />
                <WhiteSpace />
               <div style={{margin:'0 auto',textAlign:'center'}}>
                   <form action='/' method='POST'>
                        <span>不同意</span>
                        <Link to='/appTaber'><input name="checkbox" type="radio" value="checkbox" /></Link>
                        <span style={{marginLeft:20}} >同意</span>
                        <Link to='/realName'><input name="checkbox" type="radio" value="checkbox"/></Link>
                   </form>
                    
               </div>
            </div>
        )
    }
}
