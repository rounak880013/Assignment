
import image3 from './icon/513049 PI8X2J 876.png'
import './App.css';
let App = () => {
    let o=0;
    return(
      <div className='page'>
        <div className='signup_header'>
          <div className='signup_header_content'>
        Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
        </div>
        </div>
        <div className='Create_Accout_2'>
          <div className='Create_Accout_2a'>
          Sign In
          </div>
          <div className='Create_Accout_2b'>
          Don’t have an account yet? <a href="/Register">Create_Account</a> for free!
          </div>
        </div>
        <div className='signin_box'>
          <div className='incresing'>
        <div>
        <input class="Email" type="Email" name="Email" placeholder="Email"/>
        </div>
        <div>
        <input class="password" type="password" name="password" placeholder="password"/>
        </div>
        <div>
          <div class="Create_Account"><button className='submit btncreateaccount' type="submit">Sign In</button></div>
        </div>
        <div >
        <div class="Facebook"><button className='submit' type="submit">Sign up with Facebook</button></div>
        </div>
        <div >
        <div class="Gmail"><button className='submit' type="submit">Sign up with Gmail</button></div>
        </div>
        <div >
        <div class="Gmail Forget_password"><button className='submit' type="submit">Forget Password</button></div>
        </div>
        </div>
        <div className='hide_img'>
        <img src={image3} alt="" />
        </div>
        </div>
      </div>
    )
  }
  export default App;