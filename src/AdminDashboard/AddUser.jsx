import React from "react";
import { useHistory } from "react-router";
import AdminPanel from "./AdminPanel";
import dp from "../components/images/user/11.png";
export default function AddUser() {
  let history = useHistory();
  return (
    <>
      <div id="content-page" class="content-page">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-3">
              <div class="iq-card">
                <div class="iq-card-header d-flex justify-content-between">
                  <div class="iq-header-title">
                    <h4 class="card-title">Add New User</h4>
                  </div>
                </div>
                <div class="iq-card-body">
                  <form>
                    <div class="form-group">
                      <div class="add-img-user profile-img-edit">
                        <img
                          class="profile-pic img-fluid"
                          src={dp}
                          alt="profile-pic"
                        />
                        <div class="p-image">
                          <a
                            href="javascript:void();"
                            class="upload-button btn iq-bg-primary"
                          >
                            File Upload
                          </a>
                          <input
                            class="file-upload"
                            type="file"
                            accept="image/*"
                          />
                        </div>
                      </div>
                      <div class="img-extension mt-3">
                        <div class="d-inline-block align-items-center">
                          <span>Only</span>
                          <a href="javascript:void();">.jpg</a>
                          <a href="javascript:void();">.png</a>
                          <a href="javascript:void();">.jpeg</a>
                          <span>allowed</span>
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <label>User Role:</label>
                      <select class="form-control" id="selectuserrole">
                        <option>Select</option>
                        <option>Admin</option>
                        <option>Astrologer</option>
                        <option>User</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="furl">Facebook Url:</label>
                      <input
                        type="text"
                        class="form-control"
                        id="furl"
                        placeholder="Facebook Url"
                      />
                    </div>
                    <div class="form-group">
                      <label for="turl">Twitter Url:</label>
                      <input
                        type="text"
                        class="form-control"
                        id="turl"
                        placeholder="Twitter Url"
                      />
                    </div>
                    <div class="form-group">
                      <label for="instaurl">Instagram Url:</label>
                      <input
                        type="text"
                        class="form-control"
                        id="instaurl"
                        placeholder="Instagram Url"
                      />
                    </div>
                    <div class="form-group">
                      <label for="lurl">Linkedin Url:</label>
                      <input
                        type="text"
                        class="form-control"
                        id="lurl"
                        placeholder="Linkedin Url"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-lg-9">
              <div class="iq-card">
                <div class="iq-card-header d-flex justify-content-between">
                  <div class="iq-header-title">
                    <h4 class="card-title">New User Information</h4>
                  </div>
                </div>
                <div class="iq-card-body">
                  <div class="new-user-info">
                    <form>
                      <div class="row">
                        <div class="form-group col-md-6">
                          <label for="fname">First Name:</label>
                          <input
                            type="text"
                            class="form-control"
                            id="firstName"
                            placeholder="First Name"
                          />
                        </div>
                        <div class="form-group col-md-6">
                          <label for="lname">Last Name:</label>
                          <input
                            type="text"
                            class="form-control"
                            id="lastName"
                            placeholder="Last Name"
                          />
                        </div>
                        <div class="form-group col-sm-12">
                          <label>Zodiac:</label>
                          <select
                            style={{ height: "43px" }}
                            class="form-control"
                            id="selectzodiac"
                          >
                            <option>Select Zodiac</option>
                            <option>Aries (Ram)</option>
                            <option>Taurus (Bull)</option>
                            <option>Gemini (Twins)</option>
                            <option>Cancer (Crab)</option>
                            <option>Leo (Lion)</option>
                            <option>Virgo (Virgin)</option>
                            <option>Libra (Balance)</option>
                            <option>Scorpius (Scorpion)</option>
                            <option>Sagittarius (Archer)</option>
                            <option>Capricornus (Goat)</option>
                            <option>Aquarius (Water Bearer)</option>
                            <option>Pisces (Fish)</option>
                          </select>
                        </div>
                        <div class="form-group col-md-6">
                          <label for="add1">Street Address 1:</label>
                          <input
                            type="text"
                            class="form-control"
                            id="add1"
                            placeholder="Street Address 1"
                          />
                        </div>
                        <div class="form-group col-md-6">
                          <label for="add2">Street Address 2:</label>
                          <input
                            type="text"
                            class="form-control"
                            id="add2"
                            placeholder="Street Address 2"
                          />
                        </div>
                        <div class="form-group col-md-12">
                          <label for="city">Town/City:</label>
                          <input
                            type="text"
                            class="form-control"
                            id="city"
                            placeholder="Town/City"
                          />
                        </div>
                        <div class="form-group col-sm-12">
                          <label>Country:</label>
                          <select
                            style={{ height: "43px" }}
                            class="form-control"
                            id="selectcountry"
                          >
                            <option>Select Country</option>
                            <option>Canada</option>
                            <option>Dubai</option>
                            <option>USA</option>
                            <option>India</option>
                            <option>Africa</option>
                          </select>
                        </div>
                        <div class="form-group col-md-6">
                          <label for="mobno">Mobile Number:</label>
                          <input
                            type="text"
                            class="form-control"
                            id="mobno"
                            placeholder="Mobile Number"
                          />
                        </div>
                        <div class="form-group col-md-6">
                          <label for="altconno">Alternate Contact:</label>
                          <input
                            type="text"
                            class="form-control"
                            id="altconno"
                            placeholder="Alternate Contact"
                          />
                        </div>
                        <div class="form-group col-md-6">
                          <label for="email">Email:</label>
                          <input
                            type="email"
                            class="form-control"
                            id="email"
                            placeholder="Email"
                          />
                        </div>
                        <div class="form-group col-md-6">
                          <label for="pno">Pin Code:</label>
                          <input
                            type="text"
                            class="form-control"
                            id="pno"
                            placeholder="Pin Code"
                          />
                        </div>
                      </div>
                      <br></br>
                      <button
                        style={{ padding: " 5px 14px" }}
                        class="btn btn-primary"
                      >
                        Add New User
                      </button>
                      <button
                        onClick={() => history.push("/AdminPanel/UserTable")}
                        style={{
                          marginLeft: "15px",
                          padding: " 5px 14px",
                        }}
                        class="btn iq-bg-danger"
                      >
                        Cancel
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
