
import image3 from './icon/513049 PI8X2J 876.png'
function Register() {
    return (
      <div className='page'>
        <div className='signup_header'>
          <div className='signup_header_content'>
        Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
        </div>
        </div>
        <div className='Create_Accout_2'>
          <div className='Create_Accout_2a'>
          Create Account
          </div>
          <div className='Create_Accout_2b'>
          Already have an account? <a href="/Login">Sign In</a>
          </div>
        </div>
        <div className='signin_box'>
          <div>
        <div>
        <input class="Name" type="text" name="first_name" placeholder="First Name"/>
        <input class="Name" type="text" name="last_name" placeholder="LastName"/>
        </div>
        <div>
        <input class="Email" type="Email" name="Email" placeholder="Email"/>
        </div>
        <div>
        <input class="password" type="password" name="password" placeholder="password"/>
        </div>
        <div>
        <input class="password" type="password" name="password" placeholder="confirm password"/>
        </div>
        <div>
          <div class="Create_Account"><button className='submit btncreateaccount' type="submit">Create Account</button></div>
        </div>
        <div >
        <div class="Facebook"><button className='submit' type="submit">Sign up with Facebook</button></div>
        </div>
        <div >
        <div class="Gmail"><button className='submit' type="submit">Sign up with Gmail</button></div>
        </div>
        </div>
        <div>
        <img src={image3} alt="" />
        </div>
        </div>
      </div>

    );
  }
  
  export default Register;
  