import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Mainheading from "../components/Mainheading";
import Buttton from "../components/Buttton";
import Notification from "../components/Notification";
import { Eye, EyeOff } from "lucide-react";
import client_img from "../img/Group-425.png"
import company_img from "../img/image-22.png"
import Swal from 'sweetalert2'

function Signup() {
  const [token, setToken] = useState(null);
  const [type, setType] = useState("password");
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const Swal = require('sweetalert2')

  const handleToggle = () => {
    setIsVisible(!isVisible);
    setType(isVisible ? "password" : "text");
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (!storedToken) {
      navigate("");
    } else {
      setToken(storedToken);
    }
  }, [navigate]);

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [joinas, setJoinas] = useState("");

  const handleSubmit = () => {
    console.log(name, email, password, country, joinas);
    
    axios
      .post("https://ubm.annapurnadhamagro.com/api/register", {
        name: name,
        email: email,
        password: password,
        c_password: password,
        country: country,
        joinas: joinas, 
      })

      .then((result) => {
        Swal.fire({
          title: 'Success!',
          text: 'Successful register please continue ',
          icon: 'success',
          confirmButtonText: 'Cool'
        });
        <Notification value_data="success" />;

        localStorage.setItem("token", result.data.data.token);
        navigate("/EmailVarfy");
      })

      .catch((err) => {
        console.log(err);
        if (err.response) {
          // Server responded with a status other than 200 range(err.response.data.message || err.response.statusText)
          Swal.fire({
            title: 'Error!',
            text: 'plese check your email and password',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
        } else if (err.request) {
          // Request was made but no response received
          alert("Message: No response from server. Please try again later.");
        } else {
          // Something happened in setting up the request
          alert("Message: " + err.message);
        }
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const nextStep = () => {
    setStep(step + 1);
    // alert(joinas);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <>
      <section id="signup-container" className="signup-container-box">
        <div className="container" id="grad1">
          <div className="row justify-content-center mt-0">
            <div className="col-md-12">

              {step === 1 && (
                <fieldset>
                  <div className="container shadow" data-aos="fade-up">
                    <div className="row">
                      <div className="col-lg-6 py-5 d-flex justify-content-center flex-column ">
                        <Mainheading
                          title="Join as a client or Company"
                          color="#000000"
                          textalign="center"
                          size="32px"
                        />
                        <p className="text-center">
                          Please select the option to go ahead.
                        </p>

                        <div className="row">
                          <div className="col-md-12">
                            <div className="row my-5">
                              <div className="col-6">
                                <div className=" rounded border signup-input">
                                  <div className="card-body">
                                    <img src={client_img} className="rounded py-2" width="35%" height="35%" />
                                    <br />
                                    <div className="form-check">
                                      <input
                                        className="form-check-input"
                                        type="radio"
                                        name="joinas"
                                        id="client"
                                        value="Client"
                                        checked={joinas === "Client"}
                                        onChange={(e) =>
                                          setJoinas(e.target.value)
                                        }
                                      />

                                      <label
                                        className="form-check-label"
                                        htmlFor="client"
                                        style={{
                                          fontSize: "15px",
                                        }}
                                      >
                                        <b>am a client, hiring for a project</b>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="col-6">
                                <div className="signup-input-others rounded border">
                                  <div className="card-body">
                                  <img src={company_img} className="p-2 rounded " width="45%" height="45%"/>
                                    <br />
                                    <div className="form-check">
                                      <input
                                        className="form-check-input"
                                        type="radio"
                                        name="joinas"
                                        id="company"
                                        value="Company"
                                        checked={joinas === "Company"}
                                        onChange={(e) =>
                                          setJoinas(e.target.value)
                                        }
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="company"
                                        style={{
                                          fontSize: "15px",
                                        }}
                                      >
                                        <b>am a company, looking for work</b>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                             
                            <center>
                              <Buttton
                                title="Create Account"
                                classname="freelancer-dark-btn px-5 p-0 shadow w-100 h6 font-weight-bold"
                                onclick={nextStep}
                              />

                              <p>
                                Don’t have an account?{" "}
                                <Link to="/login">Log In</Link>
                              </p>
                            </center>
                            {/* </form> */}
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6 p-0 left-signup-box">
                      </div>
                    </div>
                  </div>
                </fieldset>
              )}
              {step === 2 && (
                <fieldset>
                  <div className="container mb-5 shadow" data-aos="fade-up">
                    <div className="row">
                      <div className="col-lg-6 p-0 ">
                        <div className="card-body h-100 w-100 flex-column d-flex justify-content-center">
                          <Mainheading
                            title=" Sign up to hire talent"
                            color="#000000"
                            textalign="center"
                            size="32px"
                          />
                          <p>
                            Please help us with below details to onboard you to
                            our platform.
                          </p>
                          <div className="w-100 d-flex justify-content-center">
                            <span className="d-flex justify-content-center rounded align-items-center border border-2 w-50">
                              <a href="" className="px-2 py-2">
                                <img
                                  src="https://ouch-cdn2.icons8.com/VGHyfDgzIiyEwg3RIll1nYupfj653vnEPRLr0AeoJ8g/rs:fit:456:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvODg2/LzRjNzU2YThjLTQx/MjgtNGZlZS04MDNl/LTAwMTM0YzEwOTMy/Ny5wbmc.png"
                                  style={{ width: "40px" }}
                                />
                              </a>
                              Google
                            </span>
                          </div>

                          <div>
                            <div class="divider">
                              <span class="divider-text">Or continue with</span>
                            </div>
                          </div>

                          {/* <form> */}
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                              placeholder="Full name"
                              onChange={(e) => {
                                setName(e.target.value);
                              }}
                              value={name}
                            />
                          </div>

                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              id=""
                              aria-describedby=""
                              placeholder="Work email address"
                              onChange={(e) => {
                                setEmail(e.target.value);
                              }}
                              value={email}
                            />
                          </div>

                          <div className="form-group input-password">
                            <input
                              type={type}
                              className="form-control"
                              id="exampleInputPassword1"
                              placeholder="Password"
                              autoComplete="current-password"
                              onChange={(e) => {
                                setPassword(e.target.value);
                              }}
                              value={password}
                            />
                            <span
                              className="px-3 py-2 bg-gray-100 cursor-pointer psd-icon "
                              onClick={handleToggle}
                            >
                              {isVisible ? (
                                <Eye size={24} />
                              ) : (
                                <EyeOff size={24} />
                              )}
                            </span>
                          </div>

                          <div className="form-group input-password">
                            <input
                              type={type}
                              className="form-control"
                              id="exampleInputPassword1"
                              placeholder="Confirm Password"
                              autoComplete="current-password"
                              onChange={(e) => {
                                setPassword(e.target.value);
                              }}
                              value={password}
                            />
                            <span
                              className="px-3 py-2 bg-gray-100 cursor-pointer psd-icon "
                              onClick={handleToggle}
                            >
                              {isVisible ? (
                                <Eye size={24} />
                              ) : (
                                <EyeOff size={24} />
                              )}
                            </span>
                          </div>

                          <div className="form-group">
                            <select
                              id="country"
                              name="country"
                              className="form-control"
                              onChange={(e) => {
                                setCountry(e.target.value);
                              }}
                              value={country}
                            >
                              <option value="Country">Country</option>
                              <option value="Afghanistan">Afghanistan</option>
                              <option value="Åland Islands">
                                Åland Islands
                              </option>
                              <option value="Albania">Albania</option>
                              <option value="Algeria">Algeria</option>
                              <option value="American Samoa">
                                American Samoa
                              </option>
                              <option value="Andorra">Andorra</option>
                              <option value="Angola">Angola</option>
                              <option value="Anguilla">Anguilla</option>
                              <option value="Antarctica">Antarctica</option>
                              <option value="Antigua and Barbuda">
                                Antigua and Barbuda
                              </option>
                              <option value="Argentina">Argentina</option>
                              <option value="Armenia">Armenia</option>
                              <option value="Aruba">Aruba</option>
                              <option value="Australia">Australia</option>
                              <option value="Austria">Austria</option>
                              <option value="Azerbaijan">Azerbaijan</option>
                              <option value="Bahamas">Bahamas</option>
                              <option value="Bahrain">Bahrain</option>
                              <option value="Bangladesh">Bangladesh</option>
                              <option value="Barbados">Barbados</option>
                              <option value="Belarus">Belarus</option>
                              <option value="Belgium">Belgium</option>
                              <option value="Belize">Belize</option>
                              <option value="Benin">Benin</option>
                              <option value="Bermuda">Bermuda</option>
                              <option value="Bhutan">Bhutan</option>
                              <option value="Bolivia">Bolivia</option>
                              <option value="Bosnia and Herzegovina">
                                Bosnia and Herzegovina
                              </option>
                              <option value="Botswana">Botswana</option>
                              <option value="Bouvet Island">
                                Bouvet Island
                              </option>
                              <option value="Brazil">Brazil</option>
                              <option value="British Indian Ocean Territory">
                                British Indian Ocean Territory
                              </option>
                              <option value="Brunei Darussalam">
                                Brunei Darussalam
                              </option>
                              <option value="Bulgaria">Bulgaria</option>
                              <option value="Burkina Faso">Burkina Faso</option>
                              <option value="Burundi">Burundi</option>
                              <option value="Cambodia">Cambodia</option>
                              <option value="Cameroon">Cameroon</option>
                              <option value="Canada">Canada</option>
                              <option value="Cape Verde">Cape Verde</option>
                              <option value="Cayman Islands">
                                Cayman Islands
                              </option>
                              <option value="Central African Republic">
                                Central African Republic
                              </option>
                              <option value="Chad">Chad</option>
                              <option value="Chile">Chile</option>
                              <option value="China">China</option>
                              <option value="Christmas Island">
                                Christmas Island
                              </option>
                              <option value="Cocos (Keeling) Islands">
                                Cocos (Keeling) Islands
                              </option>
                              <option value="Colombia">Colombia</option>
                              <option value="Comoros">Comoros</option>
                              <option value="Congo">Congo</option>
                              <option value="Congo, The Democratic Republic of The">
                                Congo, The Democratic Republic of The
                              </option>
                              <option value="Cook Islands">Cook Islands</option>
                              <option value="Costa Rica">Costa Rica</option>
                              <option value="Cote D'ivoire">
                                Cote D'ivoire
                              </option>
                              <option value="Croatia">Croatia</option>
                              <option value="Cuba">Cuba</option>
                              <option value="Cyprus">Cyprus</option>
                              <option value="Czech Republic">
                                Czech Republic
                              </option>
                              <option value="Denmark">Denmark</option>
                              <option value="Djibouti">Djibouti</option>
                              <option value="Dominica">Dominica</option>
                              <option value="Dominican Republic">
                                Dominican Republic
                              </option>
                              <option value="Ecuador">Ecuador</option>
                              <option value="Egypt">Egypt</option>
                              <option value="El Salvador">El Salvador</option>
                              <option value="Equatorial Guinea">
                                Equatorial Guinea
                              </option>
                              <option value="Eritrea">Eritrea</option>
                              <option value="Estonia">Estonia</option>
                              <option value="Ethiopia">Ethiopia</option>
                              <option value="Falkland Islands (Malvinas)">
                                Falkland Islands (Malvinas)
                              </option>
                              <option value="Faroe Islands">
                                Faroe Islands
                              </option>
                              <option value="Fiji">Fiji</option>
                              <option value="Finland">Finland</option>
                              <option value="France">France</option>
                              <option value="French Guiana">
                                French Guiana
                              </option>
                              <option value="French Polynesia">
                                French Polynesia
                              </option>
                              <option value="French Southern Territories">
                                French Southern Territories
                              </option>
                              <option value="Gabon">Gabon</option>
                              <option value="Gambia">Gambia</option>
                              <option value="Georgia">Georgia</option>
                              <option value="Germany">Germany</option>
                              <option value="Ghana">Ghana</option>
                              <option value="Gibraltar">Gibraltar</option>
                              <option value="Greece">Greece</option>
                              <option value="Greenland">Greenland</option>
                              <option value="Grenada">Grenada</option>
                              <option value="Guadeloupe">Guadeloupe</option>
                              <option value="Guam">Guam</option>
                              <option value="Guatemala">Guatemala</option>
                              <option value="Guernsey">Guernsey</option>
                              <option value="Guinea">Guinea</option>
                              <option value="Guinea-bissau">
                                Guinea-bissau
                              </option>
                              <option value="Guyana">Guyana</option>
                              <option value="Haiti">Haiti</option>
                              <option value="Heard Island and Mcdonald Islands">
                                Heard Island and Mcdonald Islands
                              </option>
                              <option value="Holy See (Vatican City State)">
                                Holy See (Vatican City State)
                              </option>
                              <option value="Honduras">Honduras</option>
                              <option value="Hong Kong">Hong Kong</option>
                              <option value="Hungary">Hungary</option>
                              <option value="Iceland">Iceland</option>
                              <option value="India">India</option>
                              <option value="Indonesia">Indonesia</option>
                              <option value="Iran, Islamic Republic of">
                                Iran, Islamic Republic of
                              </option>
                              <option value="Iraq">Iraq</option>
                              <option value="Ireland">Ireland</option>
                              <option value="Isle of Man">Isle of Man</option>
                              <option value="Israel">Israel</option>
                              <option value="Italy">Italy</option>
                              <option value="Jamaica">Jamaica</option>
                              <option value="Japan">Japan</option>
                              <option value="Jersey">Jersey</option>
                              <option value="Jordan">Jordan</option>
                              <option value="Kazakhstan">Kazakhstan</option>
                              <option value="Kenya">Kenya</option>
                              <option value="Kiribati">Kiribati</option>
                              <option value="Korea, Democratic People's Republic of">
                                Korea, Democratic People's Republic of
                              </option>
                              <option value="Korea, Republic of">
                                Korea, Republic of
                              </option>
                              <option value="Kuwait">Kuwait</option>
                              <option value="Kyrgyzstan">Kyrgyzstan</option>
                              <option value="Lao People's Democratic Republic">
                                Lao People's Democratic Republic
                              </option>
                              <option value="Latvia">Latvia</option>
                              <option value="Lebanon">Lebanon</option>
                              <option value="Lesotho">Lesotho</option>
                              <option value="Liberia">Liberia</option>
                              <option value="Libyan Arab Jamahiriya">
                                Libyan Arab Jamahiriya
                              </option>
                              <option value="Liechtenstein">
                                Liechtenstein
                              </option>
                              <option value="Lithuania">Lithuania</option>
                              <option value="Luxembourg">Luxembourg</option>
                              <option value="Macao">Macao</option>
                              <option value="Macedonia, The Former Yugoslav Republic of">
                                Macedonia, The Former Yugoslav Republic of
                              </option>
                              <option value="Madagascar">Madagascar</option>
                              <option value="Malawi">Malawi</option>
                              <option value="Malaysia">Malaysia</option>
                              <option value="Maldives">Maldives</option>
                              <option value="Mali">Mali</option>
                              <option value="Malta">Malta</option>
                              <option value="Marshall Islands">
                                Marshall Islands
                              </option>
                              <option value="Martinique">Martinique</option>
                              <option value="Mauritania">Mauritania</option>
                              <option value="Mauritius">Mauritius</option>
                              <option value="Mayotte">Mayotte</option>
                              <option value="Mexico">Mexico</option>
                              <option value="Micronesia, Federated States of">
                                Micronesia, Federated States of
                              </option>
                              <option value="Moldova, Republic of">
                                Moldova, Republic of
                              </option>
                              <option value="Monaco">Monaco</option>
                              <option value="Mongolia">Mongolia</option>
                              <option value="Montenegro">Montenegro</option>
                              <option value="Montserrat">Montserrat</option>
                              <option value="Morocco">Morocco</option>
                              <option value="Mozambique">Mozambique</option>
                              <option value="Myanmar">Myanmar</option>
                              <option value="Namibia">Namibia</option>
                              <option value="Nauru">Nauru</option>
                              <option value="Nepal">Nepal</option>
                              <option value="Netherlands">Netherlands</option>
                              <option value="Netherlands Antilles">
                                Netherlands Antilles
                              </option>
                              <option value="New Caledonia">
                                New Caledonia
                              </option>
                              <option value="New Zealand">New Zealand</option>
                              <option value="Nicaragua">Nicaragua</option>
                              <option value="Niger">Niger</option>
                              <option value="Nigeria">Nigeria</option>
                              <option value="Niue">Niue</option>
                              <option value="Norfolk Island">
                                Norfolk Island
                              </option>
                              <option value="Northern Mariana Islands">
                                Northern Mariana Islands
                              </option>
                              <option value="Norway">Norway</option>
                              <option value="Oman">Oman</option>
                              <option value="Pakistan">Pakistan</option>
                              <option value="Palau">Palau</option>
                              <option value="Palestinian Territory, Occupied">
                                Palestinian Territory, Occupied
                              </option>
                              <option value="Panama">Panama</option>
                              <option value="Papua New Guinea">
                                Papua New Guinea
                              </option>
                              <option value="Paraguay">Paraguay</option>
                              <option value="Peru">Peru</option>
                              <option value="Philippines">Philippines</option>
                              <option value="Pitcairn">Pitcairn</option>
                              <option value="Poland">Poland</option>
                              <option value="Portugal">Portugal</option>
                              <option value="Puerto Rico">Puerto Rico</option>
                              <option value="Qatar">Qatar</option>
                              <option value="Reunion">Reunion</option>
                              <option value="Romania">Romania</option>
                              <option value="Russian Federation">
                                Russian Federation
                              </option>
                              <option value="Rwanda">Rwanda</option>
                              <option value="Saint Helena">Saint Helena</option>
                              <option value="Saint Kitts and Nevis">
                                Saint Kitts and Nevis
                              </option>
                              <option value="Saint Lucia">Saint Lucia</option>
                              <option value="Saint Pierre and Miquelon">
                                Saint Pierre and Miquelon
                              </option>
                              <option value="Saint Vincent and The Grenadines">
                                Saint Vincent and The Grenadines
                              </option>
                              <option value="Samoa">Samoa</option>
                              <option value="San Marino">San Marino</option>
                              <option value="Sao Tome and Principe">
                                Sao Tome and Principe
                              </option>
                              <option value="Saudi Arabia">Saudi Arabia</option>
                              <option value="Senegal">Senegal</option>
                              <option value="Serbia">Serbia</option>
                              <option value="Seychelles">Seychelles</option>
                              <option value="Sierra Leone">Sierra Leone</option>
                              <option value="Singapore">Singapore</option>
                              <option value="Slovakia">Slovakia</option>
                              <option value="Slovenia">Slovenia</option>
                              <option value="Solomon Islands">
                                Solomon Islands
                              </option>
                              <option value="Somalia">Somalia</option>
                              <option value="South Africa">South Africa</option>
                              <option value="South Georgia and The South Sandwich Islands">
                                South Georgia and The South Sandwich Islands
                              </option>
                              <option value="Spain">Spain</option>
                              <option value="Sri Lanka">Sri Lanka</option>
                              <option value="Sudan">Sudan</option>
                              <option value="Suriname">Suriname</option>
                              <option value="Svalbard and Jan Mayen">
                                Svalbard and Jan Mayen
                              </option>
                              <option value="Swaziland">Swaziland</option>
                              <option value="Sweden">Sweden</option>
                              <option value="Switzerland">Switzerland</option>
                              <option value="Syrian Arab Republic">
                                Syrian Arab Republic
                              </option>
                              <option value="Taiwan">Taiwan</option>
                              <option value="Tajikistan">Tajikistan</option>
                              <option value="Tanzania, United Republic of">
                                Tanzania, United Republic of
                              </option>
                              <option value="Thailand">Thailand</option>
                              <option value="Timor-leste">Timor-leste</option>
                              <option value="Togo">Togo</option>
                              <option value="Tokelau">Tokelau</option>
                              <option value="Tonga">Tonga</option>
                              <option value="Trinidad and Tobago">
                                Trinidad and Tobago
                              </option>
                              <option value="Tunisia">Tunisia</option>
                              <option value="Turkey">Turkey</option>
                              <option value="Turkmenistan">Turkmenistan</option>
                              <option value="Turks and Caicos Islands">
                                Turks and Caicos Islands
                              </option>
                              <option value="Tuvalu">Tuvalu</option>
                              <option value="Uganda">Uganda</option>
                              <option value="Ukraine">Ukraine</option>
                              <option value="United Arab Emirates">
                                United Arab Emirates
                              </option>
                              <option value="United Kingdom">
                                United Kingdom
                              </option>
                              <option value="United States">
                                United States
                              </option>
                              <option value="United States Minor Outlying Islands">
                                United States Minor Outlying Islands
                              </option>
                              <option value="Uruguay">Uruguay</option>
                              <option value="Uzbekistan">Uzbekistan</option>
                              <option value="Vanuatu">Vanuatu</option>
                              <option value="Venezuela">Venezuela</option>
                              <option value="Viet Nam">Viet Nam</option>
                              <option value="Virgin Islands, British">
                                Virgin Islands, British
                              </option>
                              <option value="Virgin Islands, U.S.">
                                Virgin Islands, U.S.
                              </option>
                              <option value="Wallis and Futuna">
                                Wallis and Futuna
                              </option>
                              <option value="Western Sahara">
                                Western Sahara
                              </option>
                              <option value="Yemen">Yemen</option>
                              <option value="Zambia">Zambia</option>
                              <option value="Zimbabwe">Zimbabwe</option>
                            </select>
                          </div>

                          <center>
                            <Buttton
                              title="SignUp"
                              classname="freelancer-dark-btn"
                              onclick={handleSubmit}
                            />
                          </center>
                          {/* </form> */}
                        </div>
                      </div>

                      <div className="col-lg-6 p-0 left-signup-box">
                        
                      </div>
                    </div>
                  </div>
                </fieldset>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signup;
