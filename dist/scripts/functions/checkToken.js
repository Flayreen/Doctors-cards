
import { btnLogin, btnCreate, btnOut,headerLogoExit,mainBlock,getVisits, TOKEN_FROM_LOCALSTORAGE } from "../script.js";

function checkToken({status}) {
    try{
        if (status === 200) {
            btnLogin.style.display = "none";
            btnCreate.style.display = "flex";
            btnOut.style.display = "flex";
            headerLogoExit.style.display = "block";
            mainBlock.style.display = "grid";
        } else {
            localStorage.clear();
            btnLogin.style.display = "flex";
            btnOut.style.display = "none";
            btnCreate.style.display = "none";
            headerLogoExit.style.display = "none";
            mainBlock.style.display = "none";
        }
    } catch (error){
            console.log(error)}

  }
export default checkToken;