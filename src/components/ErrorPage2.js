
import img from "./images/error/404.png"
import { Link } from "react-router-dom";
export default function ErrorPage2() {
  return (
    <>
           <div class="content-page" id="content-page">
                <div class="row no-gutters height-self-center">
                    <div class="col-sm-12 text-center align-self-center">
                        <div class="iq-error position-relative">
                            <img src={img} class="img-fluid iq-error-img" alt=""/>
                            <h2 class="mb-0 mt-4">Oops! This Page is Not Found.</h2>
                            <p>The requested page dose not exist.</p>
                           <Link to="/AdminPanel"> <a class="btn btn-primary mt-3" href="index-2.html"><i class="ri-home-4-line"></i>Back to Home</a> </Link>                           
                        </div>
                </div>
            </div>
        </div>
    </>
  );
}
