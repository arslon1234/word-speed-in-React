import './login.scss'
import goggle from '../../assets/go.png'
export default function Login() {
       return (
              <div className="login">
                     <div className="loginItem">
                            <div className="itemHeader">
                                   <span>Login</span>
                                   <span>Create Account</span>
                            </div>
                            <div className="itemBody">
                                   <div className="bodyleft">
                                          <span>1-Click-Login</span>
                                          <span></span>
                                          <button>
                                          <i class="fa-brands fa-facebook-f"></i>
                                          <span>Facebook Login</span>
                                          </button>
                                          <button>
                                          <img src={goggle} alt="" />
                                         <span> Google Login</span>
                                          </button>
                                   </div>
                                   <div className="bodyright">
                                   <span>Email Login</span>
                                   <span></span>
                                   <label htmlFor="email">Email</label>
                                   <input className=" form-control" id="email" type="text" placeholder="Email..." autocomplete="on" required />
                                   <label htmlFor="password">Password</label>
                                   <input className=" form-control" id="password" type="password" placeholder="Password..." autocomplete="on" required />
                                   <button>Login</button>
                                   <span>Forgot your Password ?</span>
                                   </div>
                            </div>
                     </div>
              </div>
       )
}
