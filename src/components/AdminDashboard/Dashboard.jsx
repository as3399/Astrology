import React from "react";
export default function Dashboard() {
  return (
    <>
      <div class="wrapper">
        <div id="content-page" class="content-page">
          <div class="container-fluid">
            <div class="row content-body">
              <div class="col-lg-9">
                <div class="iq-card iq-card-block iq-card-stretch iq-card-height  iq-bg-danger">
                  <div class="iq-card-body box iq-box-relative rounded float-left w-100">
                    <div class="box-image1 float-left">
                      <img
                        class="rounded img-fluid"
                        src="images/page-img/39.png"
                        alt="profile"
                      />
                    </div>
                    <div class="welcome-right">
                      <h4 class="d-block mb-3 text-black">
                        Get The Best Experience
                      </h4>
                      <p class="d-inline-block text-black">
                        Lorem Ipusm is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                      <div class="d-block">
                        <a href="#" class="btn btn-danger d-inline-block mb-0">
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
                  <div class="iq-card-body ethernet-content">
                    <div class="d-flex align-items-center">
                      <h1 class="mr-5">18.2</h1>
                      <div class="float-right">
                        <h5 class="pt-3">Ethernet</h5>
                        <p>+2.64%</p>
                      </div>
                    </div>
                    <div id="ethernet-chart"></div>
                    <div class="ethernet-text text-danger font-weight-600">
                      +18%
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-12 row m-0 p-0 iq-duration-block">
                <div class="col-sm-6 col-md-2 col-lg-2">
                  <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
                    <div class="iq-card-body">
                      <div class="icon iq-icon-box iq-bg-primary rounded">
                        <i class="ri-drag-move-2-fill"></i>
                      </div>
                      <div class="mt-4">
                        <h2>2.14s</h2>
                        <p>Frontend time</p>
                      </div>
                      <div id="ethernet-chart-01"></div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-md-2 col-lg-2">
                  <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
                    <div class="iq-card-body">
                      <div
                        class="icon iq-icon-box iq-bg-success rounded"
                        data-wow-delay="0.2s"
                      >
                        <i class="ri-artboard-2-line"></i>
                      </div>
                      <div class="mt-4">
                        <h2>1.05s</h2>
                        <p>Backtend time</p>
                      </div>
                      <div id="ethernet-chart-02"></div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-md-2 col-lg-2">
                  <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
                    <div class="iq-card-body">
                      <div
                        class="icon iq-icon-box iq-bg-danger rounded"
                        data-wow-delay="0.2s"
                      >
                        <i class="ri-map-pin-time-line"></i>
                      </div>
                      <div class="mt-4">
                        <h2>0.25s</h2>
                        <p>Loacal time</p>
                      </div>
                      <div id="ethernet-chart-03"></div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-md-2 col-lg-2">
                  <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
                    <div class="iq-card-body">
                      <div
                        class="icon iq-icon-box bg-primary rounded"
                        data-wow-delay="0.2s"
                      >
                        <i class="ri-timer-line"></i>
                      </div>
                      <div class="mt-4">
                        <h2>3.07s</h2>
                        <p>Processing time</p>
                      </div>
                      <div id="ethernet-chart-04"></div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-lg-4">
                  <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
                    <div class="iq-card-body">
                      <h4 class="text-uppercase text-black mb-0">
                        Session(Now)
                      </h4>
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="font-size-80 text-black">12</div>
                        <div class="text-left">
                          <p class="m-0 text-uppercase font-size-12">
                            1 Hours Ago
                          </p>
                          <div class="mb-1 text-black">
                            1500
                            <span class="text-danger">
                              <i class="ri-arrow-down-s-fill"></i>3.25%
                            </span>
                          </div>
                          <p class="m-0 text-uppercase font-size-12">
                            1 Day Ago
                          </p>
                          <div class="mb-1 text-black">
                            1890
                            <span class="text-success">
                              <i class="ri-arrow-down-s-fill"></i>1.00%
                            </span>
                          </div>
                          <p class="m-0 text-uppercase font-size-12">
                            1 Week Ago
                          </p>
                          <div class="text-black">
                            1260
                            <span class="text-danger">
                              <i class="ri-arrow-down-s-fill"></i>9.87%
                            </span>
                          </div>
                        </div>
                      </div>
                      <div id="wave-chart-7"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-8">
                <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
                  <div class="iq-card-header d-flex justify-content-between">
                    <div class="iq-header-title">
                      <h4 class="card-title">Load Time - Last 24 hours</h4>
                    </div>
                    <div class="mt-1">
                      <div class="d-flex align-items-center justify-content-between">
                        <a
                          href="javascript:void();"
                          class="d-flex align-items-center mr-4"
                        >
                          <span class="bg-primary p-1 rounded mr-2"></span>
                          <p class="text-primary mb-0">Lowest Speed </p>
                        </a>
                        <a
                          href="javascript:void();"
                          class="d-flex align-items-center"
                        >
                          <span class="bg-danger p-1 rounded mr-2"></span>
                          <p class="text-danger mb-0">Highest Speed</p>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="iq-card-body">
                    <div id="chart-001"></div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-12">
                <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
                  <div class="iq-card-header d-flex justify-content-between">
                    <div class="iq-header-title">
                      <h4 class="card-title">Active Instances</h4>
                    </div>
                    <div class="iq-card-header-toolbar d-flex align-items-center">
                      <div class="dropdown">
                        <span
                          class="dropdown-toggle text-primary"
                          id="dropdownMenuButton1"
                          data-toggle="dropdown"
                        >
                          <i class="ri-more-2-fill"></i>
                        </span>
                        <div
                          class="dropdown-menu dropdown-menu-right"
                          aria-labelledby="dropdownMenuButton1"
                        >
                          <a class="dropdown-item" href="#">
                            <i class="ri-eye-fill mr-2"></i>View
                          </a>
                          <a class="dropdown-item" href="#">
                            <i class="ri-delete-bin-6-fill mr-2"></i>Delete
                          </a>
                          <a class="dropdown-item" href="#">
                            <i class="ri-pencil-fill mr-2"></i>Edit
                          </a>
                          <a class="dropdown-item" href="#">
                            <i class="ri-printer-fill mr-2"></i>Print
                          </a>
                          <a class="dropdown-item" href="#">
                            <i class="ri-file-download-fill mr-2"></i>Download
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="iq-card-body">
                    <div id="httperror-chart"></div>
                    <div class="row mt-3 error-detail">
                      <div class="col-6">
                        <div class="title position-relative pl-3">
                          <span class="bg-danger rounded"></span>
                          <h6>HTTP Error</h6>
                          <p class="mb-0">500</p>
                        </div>
                      </div>
                      <div class="col-6">
                        <div class="title position-relative pl-3">
                          <span class="bg-warning rounded"></span>
                          <h6>HTTP Error</h6>
                          <p class="mb-0">403</p>
                        </div>
                      </div>
                      <div class="col-6 mt-3">
                        <div class="title position-relative pl-3">
                          <span class="bg-success rounded"></span>
                          <h6>HTTP Error</h6>
                          <p class="mb-0">404</p>
                        </div>
                      </div>
                      <div class="col-6 mt-3">
                        <div class="title position-relative pl-3">
                          <span class="bg-primary rounded"></span>
                          <h6>HTTP Error</h6>
                          <p class="mb-0">400</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
                  <div class="iq-card-header d-flex justify-content-between">
                    <div class="iq-header-title">
                      <h4 class="card-title">Daily Traffic Overview</h4>
                    </div>
                    <div class="mt-1">
                      <div class="d-flex align-items-center justify-content-between">
                        <a
                          href="javascript:void();"
                          class="d-flex align-items-center mr-4"
                        >
                          <span class="bg-primary p-1 rounded mr-2"></span>
                          <p class="text-primary mb-0">Upload</p>
                        </a>
                        <a
                          href="javascript:void();"
                          class="d-flex align-items-center"
                        >
                          <span class="bg-danger p-1 rounded mr-2"></span>
                          <p class="text-danger mb-0">Download</p>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="iq-card-body">
                    <div class="d-flex align-items-center justify-content-between">
                      <div class="col-md-3">
                        <div class="chart-data-block">
                          <div class="mb-4">
                            <div class="d-flex">
                              <h2 class="line-height-4 mb-1">8.27</h2>
                              <p>/20GB</p>
                            </div>
                            <span class="text-danger font-size-12 font-weight-500">
                              Daily Traffic
                            </span>
                          </div>
                          <div class="mb-0">
                            <div class="d-flex">
                              <h2 class="line-height-4 mb-1">2.56</h2>
                              <p>/5GB</p>
                            </div>
                            <span class="text-danger font-size-12 font-weight-500">
                              Hourly Traffic
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-9 pr-0">
                        <div id="trafic-chart"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
                  <div class="iq-card-header d-flex justify-content-between border-none">
                    <div class="iq-header-title">
                      <h5 class="card-title">Load time by country</h5>
                    </div>
                    <div class="d-flex align-items-center justify-content-between">
                      <a
                        href="javascript:void();"
                        class="d-flex align-items-center mr-2"
                      >
                        <span class="bg-primary p-1 rounded mr-2"></span>
                        <p class="text-primary mb-0">Selected server</p>
                      </a>
                      <a
                        href="javascript:void();"
                        class="d-flex align-items-center"
                      >
                        <span class="bg-danger p-1 rounded mr-2"></span>
                        <p class="text-danger mb-0">Available server</p>
                      </a>
                    </div>
                  </div>
                  <div class="iq-card-body">
                    {/* <div id="world-map" style="height: 250px;"></div> */}
                  </div>
                </div>
              </div>
              <div class="col-lg-9">
                <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
                  <div class="iq-card-header d-flex justify-content-between">
                    <div class="iq-header-title">
                      <h4 class="card-title">Latest Browser Check</h4>
                    </div>
                    <div class="iq-card-header-toolbar d-flex align-items-center">
                      <div class="dropdown">
                        <span
                          class="dropdown-toggle text-primary"
                          id="dropdownMenuButton2"
                          data-toggle="dropdown"
                        >
                          <i class="ri-more-2-fill"></i>
                        </span>
                        <div
                          class="dropdown-menu dropdown-menu-right"
                          aria-labelledby="dropdownMenuButton2"
                        >
                          <a class="dropdown-item" href="#">
                            <i class="ri-eye-fill mr-2"></i>View
                          </a>
                          <a class="dropdown-item" href="#">
                            <i class="ri-delete-bin-6-fill mr-2"></i>Delete
                          </a>
                          <a class="dropdown-item" href="#">
                            <i class="ri-pencil-fill mr-2"></i>Edit
                          </a>
                          <a class="dropdown-item" href="#">
                            <i class="ri-printer-fill mr-2"></i>Print
                          </a>
                          <a class="dropdown-item" href="#">
                            <i class="ri-file-download-fill mr-2"></i>Download
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="iq-card-body">
                    <div class="table-responsive">
                      <table class="table mb-0 table-borderless">
                        <thead>
                          <tr>
                            <th scope="col">url</th>
                            <th scope="col">Size</th>
                            <th>
                              <div class="d-flex justify-content-between">
                                <span>0.00s</span>
                                <span>0.50s</span>
                                <span>1.00s</span>
                                <span>1.50s</span>
                              </div>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>http://gatagescar/foremon...</td>
                            <td>7.2kb</td>
                            <td>
                              <div
                                class="progress m-2"
                                style={{ height: "8px" }}
                              >
                                <div
                                  class="progress-bar bg-primary rounded"
                                  role="progressbar"
                                  style={{ width: "50%", height: "8px" }}
                                  aria-valuenow="15"
                                  aria-valuemin="50"
                                  aria-valuemax="100"
                                ></div>
                                <div
                                  class="progress-bar bg-danger rounded-right position-relative"
                                  role="progressbar"
                                  style={{ width: " 30%", height: "8px" }}
                                  aria-valuenow="30"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                                <div
                                  class="progress-bar bg-success rounded-right position-relative"
                                  role="progressbar"
                                  style={{ width: " 20%", height: "8px" }}
                                  aria-valuenow="20"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>http://harianlo.carrilo.com</td>
                            <td>1.5kb</td>
                            <td>
                              {/* <div class="progress m-2" style={{height: "8px"}}>
                                             <div class="progress-bar bg-primary rounded" role="progressbar" style={{width: "10%", height: "8px"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                             <div class="progress-bar bg-danger rounded-right position-relative" role="progressbar" style={{width: "18%", height: "8px"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                             <div class="progress-bar bg-success rounded-right position-relative" role="progressbar" style={{width: "8px", height: "9%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                          </div> */}
                            </td>
                          </tr>
                          <tr>
                            <td>http://narida/mkor451das47...</td>
                            <td>5.36kb</td>
                            <td>
                              <div
                                class="progress m-2"
                                style={{ height: "8px" }}
                              >
                                <div
                                  class="progress-bar bg-primary rounded"
                                  role="progressbar"
                                  style={{ width: "23%", height: "8px" }}
                                  aria-valuenow="15"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                                <div
                                  class="progress-bar bg-danger rounded-right position-relative"
                                  role="progressbar"
                                  style={{ width: "7%", height: "8px" }}
                                  aria-valuenow="30"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                                <div
                                  class="progress-bar bg-success rounded-right position-relative"
                                  role="progressbar"
                                  style={{ width: "18%", height: "8px" }}
                                  aria-valuenow="20"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>http://sayila.faron.com</td>
                            <td>8.28kb</td>
                            <td>
                              <div
                                class="progress m-2"
                                style={{ height: "8px" }}
                              >
                                <div
                                  class="progress-bar bg-primary rounded"
                                  role="progressbar"
                                  style={{ width: "10%", height: "8px" }}
                                  aria-valuenow="15"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                                {/* <div class="progress-bar bg-danger rounded-right position-relative" role="progressbar" style="width: 20%; height: 8px;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div> */}
                                {/* <div class="progress-bar bg-success rounded-right position-relative" role="progressbar" style="width: 5%; height: 8px;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div> */}
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>http://janifarwildon/456123...</td>
                            <td>2.65kb</td>
                            <td>
                              {/* <div class="progress m-2" style="height: 8px;">
                                             <div class="progress-bar bg-primary rounded" role="progressbar" style="width: 50%; height: 8px;" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                             <div class="progress-bar bg-danger rounded-right position-relative" role="progressbar" style="width: 23%; height: 8px;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                             <div class="progress-bar bg-success rounded-right position-relative" role="progressbar" style="width: 10%; height: 8px;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                          </div> */}
                            </td>
                          </tr>
                          <tr>
                            <td>http://facebook.com</td>
                            <td>4.21kb</td>
                            <td>
                              {/* <div class="progress m-2" style="height: 8px;">
                                             <div class="progress-bar bg-primary rounded" role="progressbar" style="width: 25%; height: 8px;" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                             <div class="progress-bar bg-danger rounded-right position-relative" role="progressbar" style="width: 15%; height: 8px;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                             <div class="progress-bar bg-success rounded-right position-relative" role="progressbar" style="width: 35%; height: 8px;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                          </div> */}
                            </td>
                          </tr>
                          <tr>
                            <td>http://google.com</td>
                            <td>6.23kb</td>
                            <td>
                              {/* <div class="progress m-2" style="height: 8px;">
                                             <div class="progress-bar bg-primary rounded" role="progressbar" style="width: 20%; height: 8px;" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                             <div class="progress-bar bg-danger rounded-right position-relative" role="progressbar" style="width: 35%; height: 8px;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                             <div class="progress-bar bg-success rounded-right position-relative" role="progressbar" style="width: 18%; height: 8px;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                          </div> */}
                            </td>
                          </tr>
                          <tr>
                            <td>http://youtube.com</td>
                            <td>4.31kb</td>
                            <td>
                              {/* <div class="progress m-2" style="height: 8px;">
                                             <div class="progress-bar bg-primary rounded" role="progressbar" style="width: 27%; height: 8px;" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                             <div class="progress-bar bg-danger rounded-right position-relative" role="progressbar" style="width: 13%; height: 8px;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                             <div class="progress-bar bg-success rounded-right position-relative" role="progressbar" style="width: 25%; height: 8px;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                          </div> */}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="iq-card iq-card-block iq-card-stretch iq-card-height-third">
                  <div class="iq-card-body">
                    <div class="row">
                      <div class="col-lg-12 text-center position-relative">
                        <div class="icon avatar-70 m-auto bg-success iq-border-success rounded-circle line-height-7 text-center">
                          <i class="ri-check-line"></i>
                        </div>
                      </div>
                      <div class="col-lg-12 mt-3 text-center">
                        <h5>Homepage</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="iq-card iq-card-block iq-card-stretch iq-card-height-third">
                  <div class="iq-card-body">
                    <div class="row">
                      <div class="col-lg-12 text-center position-relative">
                        <div class="icon avatar-70 m-auto bg-success iq-border-success rounded-circle line-height-7 text-center">
                          <i class="ri-check-line"></i>
                        </div>
                      </div>
                      <div class="col-lg-12 mt-3 text-center">
                        <h5>Stock Apl</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="iq-card iq-card-block iq-card-stretch iq-card-height-third">
                  <div class="iq-card-body">
                    <div class="row">
                      <div class="col-lg-12 text-center position-relative">
                        <div class="icon avatar-70 m-auto bg-close iq-border-close rounded-circle line-height-7 text-center">
                          <i class="ri-close-line"></i>
                        </div>
                      </div>
                      <div class="col-lg-12 mt-3 text-center">
                        <h5>Order Process</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer class="iq-footer">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-6">
              <ul class="list-inline mb-0">
                <li class="list-inline-item">
                  <a href="privacy-policy.html">Privacy Policy</a>
                </li>
                <li class="list-inline-item">
                  <a href="terms-of-service.html">Terms of Use</a>
                </li>
              </ul>
            </div>
            <div class="col-lg-6 text-right">
              Copyright 2020 <a href="#">Server360</a> All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
      <div class="iq-colorbox color-fix">
        <div class="buy-button">
          {" "}
          <a class="color-full" href="#">
            <i class="fa fa-spinner fa-spin"></i>
          </a>{" "}
        </div>
        <div id="right-sidebar-scrollbar" class="iq-colorbox-inner">
          <div class="clearfix color-picker">
            <h3 class="iq-font-black">Server360 Awesome Color</h3>
            <p>
              This color combo available inside whole template. You can change
              on your wish, Even you can create your own with limitless
              possibilities!{" "}
            </p>
            {/* <ul class="iq-colorselect clearfix">
                  <li class="color-1 iq-colormark" data-style="color-1"></li>
                  <li class="color-2" data-style="iq-color-2"></li>
                  <li class="color-3" data-style="iq-color-3"></li>
                  <li class="color-4" data-style="iq-color-4"></li>
                  <li class="color-5" data-style="iq-color-5"></li>
                  <li class="color-6" data-style="iq-color-6"></li>
                  <li class="color-7" data-style="iq-color-7"></li>
                  <li class="color-8" data-style="iq-color-8"></li>
                  <li class="color-9" data-style="iq-color-9"></li>
                  <li class="color-10" data-style="iq-color-10"></li>
                  <li class="color-11" data-style="iq-color-11"></li>
                  <li class="color-12" data-style="iq-color-12"></li>
                  <li class="color-13" data-style="iq-color-13"></li>
                  <li class="color-14" data-style="iq-color-14"></li>
                  <li class="color-15" data-style="iq-color-15"></li>
                  <li class="color-16" data-style="iq-color-16"></li>
                  <li class="color-17" data-style="iq-color-17"></li>
                  <li class="color-18" data-style="iq-color-18"></li>
                  <li class="color-19" data-style="iq-color-19"></li>
                  <li class="color-20" data-style="iq-color-20"></li>
               </ul> */}
            <a target="_blank" class="btn btn-primary d-block mt-3" href="#">
              Purchase Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
