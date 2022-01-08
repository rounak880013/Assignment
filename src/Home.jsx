import Register from './Register';
import {Link} from 'react-router-dom'
import recommendation_list1 from './recommendation_list1.png'
import like_Vector from './like_Vector.png'
import exclaim from './exclaim.png';
import pen_Vector from './pen_Vector.png';
import location_Vector from './location_Vector.png';
import dot2 from './Triple_dot_vector.png';
import image1 from './Rectangle 5.png'
import Article from './Article.png'
import user1 from './user_1.png'
import eyedot from './icon/action/icon/action/visibility_24px.png'
import share_icon from './share_icon.png'
import imagesearch from './img/search.png'
import imageVector from './img/Vector.png'
import imageR from './img/R.png'
import imageL from './img/L.png'
import imageW from './img/W.png'
import imageD from './img/D.png'
import imageG from './img/G.png'
import imageT from './img/T.png'
import imageA from './img/Path 963.png'
import image from './img/Union 1.png'
import dot from './img/dot.png'
import './App.css';
///////
import image2 from './img/image2.png'
import Education from './img/Education.png'
import user2 from './img/user2.png';
//////////
import image3 from './img/image3.png'
import Meetup from './img/Meetup.png'
import user3 from './img/user3.png'
import calender from './img/calender.png'
/////////////////
import Job from './img/Job.png'
import Jobbox from './img/Jobbox.png'
import user4 from './img/user4.png'
function Home() {
  return (
    <div className="asd">
    
    <div className="Rectangle">
      <div className="whole">
        <div className="Group_65A"><img src={imageA} alt="" /></div>
        <div className="Group_65T"><img src={imageT} alt="" /></div>
        <div className="Group_65G"><img src={imageG} alt="" /></div>
        <div className="Group_65dot"><img src={dot} alt="" /></div>
        <div className="Group_65W"><img src={imageW} alt="" /></div>
        <div className="logo"><img src={image} alt="" /></div>
        <div className="Group_65R"><img src={imageR} alt="" /></div>
        <div className="Group_65L"><img src={imageL} alt="" /></div>
        <div className="Group_65D"><img src={imageD} alt="" /></div>
      </div>
      <div className="search">
        <div className="search_icon"><img src={imagesearch} alt="" /></div>
      </div>
      <input className="search-box" placeholder="Email"/>
      <div className="left_box">
      <div className="Create-account"><a href="/Register">Create_Account</a>. It's free</div>
      <div className="Arrow"><img src={imageVector} alt="" /></div>
      </div>
    </div>
    <div className="Middle">
    <div className="background">
      <div className="qwerty">
      <div className="Computer_Engineering">
      Computer Engineering
      </div>
      <div className="Computer_Engineering2">
        142,765 Computer Engineers follow this
      </div></div>
    </div>
    </div>
    <div className='lower'>
      <div className="qqqqqqqq">
    <div className="Group_34">
      <div className="All_Posts">All Posts</div>
      <div className="All_Posts1">Articles</div>
      <div className="All_Posts1">Events</div>
      <div className="All_Posts1">Education</div>
      <div className="All_Posts1">Job</div>
    </div>
    <div className="pgbox">
    <div className='write_a_post'>
        Write a Post
    </div>

    <div className='join_group'>
      Join Group
    </div>
    </div>
    </div>
      <div className='lower_lower'>
        
        <div>
        <div className='post'>
          <div className="image">
          <div className="logo"><img src={image1} className='post_img' alt="" /></div>
          </div>
          <div className='post_type'>
            <div>
              <img src={Article} alt="" />
            </div>
          </div>
          <div className='post_title'>
            <div className='post_title_data'>What if famous brands had regular fonts? Meet RegulaBrands!</div>
            <div><img src={dot2} className='Triple_dot_vector' alt="" /></div>
          </div>
          <div className='post_content'>
          I've worked in UX for the better part of a decade. From now on, I plan to rei…
          </div>
        <div className='user'>
          <div className='user_data'>
          <img src={user1} alt="" />
          <div className='user_name'>Sarthak Kamra</div>
          </div>
          <div className='like_share'>
            <div><img src={eyedot} alt="" /></div>
            <div className='likes_no'>1.4k views</div>
            <div className='share_icon'><div className='Share_icon_align'><img src={share_icon} alt="" /></div></div>
          </div>
        </div>
        </div>
        <div className='post'>
          <div className="image">
          <div className="logo"><img src={image2} className='post_img' alt="" /></div>
          </div>
          <div className='post_type'>
            <div>
              <img src={Education} alt="" />
            </div>
          </div>
          <div className='post_title'>
            <div className='post_title_data'>Tax Benefits for Investment under National Pension Scheme launched by Government</div>
            <div><img src={dot2} className='Triple_dot_vector' alt="" /></div>
          </div>
          <div className='post_content'>
          I’ve worked in UX for the better part of a decade. From now on, I plan to rei…
          </div>
        <div className='user'>
          <div className='user_data'>
          <img src={user2} alt="" />
          <div className='user_name'>Sarah West</div>
          </div>
          <div className='like_share'>
            <div><img src={eyedot} alt="" /></div>
            <div className='likes_no'>1.4k views</div>
            <div className='share_icon'><div className='Share_icon_align'><img src={share_icon} alt="" /></div></div>
          </div>
        </div>
        </div>
        <div className='post'>
          <div className="image">
          <div className="logo"><img src={image3} className='post_img' alt="" /></div>
          </div>
          <div className='post_type'>
            <div>
              <img src={Meetup} alt="" />
            </div>
          </div>
          <div className='post_title'>
            <div className='post_title_data'>Finance & Investment Elite Social Mixer @Lujiazui</div>
            <div><img src={dot2} className='Triple_dot_vector' alt="" /></div>
          </div>
          <div className="DL">
            <div className="Date">
            <img src={calender} alt="" />
            Fri, 12 Oct, 2018
            </div>
            <div className="DLoc">
            <div className='locatio'> 
          <div><img src={location_Vector} alt="" /></div>
          <div className='location_Name'>Ahmedabad, India</div>
          </div>
            </div>
          </div> 
            <div className='Visit_Website'>Visit Website</div>
        <div className='user'>
          <div className='user_data'>
          <img src={user3} alt="" />
          <div className='user_name'>Sarah West</div>
          </div>
          <div className='like_share'>
            <div><img src={eyedot} alt="" /></div>
            <div className='likes_no'>1.4k views</div>
            <div className='share_icon'><div className='Share_icon_align'><img src={share_icon} alt="" /></div></div>
          </div>
        </div>
        </div>
        <div className='post'>
          
          <div className='post_type'>
            <div>
              <img src={Job} alt="" />
            </div>
          </div>
          <div className='post_title'>
            <div className='post_title_data'>Software Developer</div>
            <div><img src={dot2} className='Triple_dot_vector' alt="" /></div>
          </div>
          <div className="DL">
            <div className="Date">
            <img src={Jobbox} alt="" />
            Innovaccer Analytics Private Ltd.
            </div>
            <div className="DLoc">
            <div className='locatio'>
          <div><img src={location_Vector} alt="" /></div>
          <div className='location_Name'>Noida, India</div>
          </div>
            </div>
          </div>
        <div className='user'>
          <div className='user_data'>
          <img src={user4} alt="" />
          <div className='user_name'>Sarah West</div>
          </div>
          <div className='like_share'>
            <div><img src={eyedot} alt="" /></div>
            <div className='likes_no'>1.4k views</div>
            <div className='share_icon'><div className='Share_icon_align'><img src={share_icon} alt="" /></div></div>
          </div>
        </div>
        </div>
        </div>
        <div className='lower_left'>
          <div className='location'>
          <div><img src={location_Vector} alt="" /></div>
          <div className='location_Name'>Noida, India</div>
          <div className='pen_Vector'><img src={pen_Vector} alt="" /></div>
          </div>
          <div className='location_suggestion'>
          <div><img src={exclaim} alt="" /></div>
          Your location will help us serve better and extend a personalised experience.
          </div>
          <div className='recommend'>
        <div><img src={like_Vector} alt="" /></div>
        <div className='Recommended_Groups'>Recommended Groups</div>
        </div>
        <div className='recommendation_list'>
          < div className='recomendation_list_item1'>
          <div><img src={recommendation_list1} alt="" /></div>
          <div className='recommendation_text'>Leisure</div>
          <div className='follow'> follow</div>
          </div>
          </div>
        </div>
        </div>
        </div>
        
    </div>
  );
}

export default Home;
