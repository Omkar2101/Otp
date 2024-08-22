import { useState } from 'react';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from './firebase/setup';
import OtpInput from "otp-input-react"

function App() {
  const [phone, setPhone] = useState('');
  const [user,setUser] =useState(null)
  const [otp,setOtp] = useState("")

  // const sendOtp = async () => {
  //   try {
  //     const recaptcha = new RecaptchaVerifier(auth,'recaptcha', {
  //       // size: 'invisible', // Keeps it invisible until needed
  //     });
  //     const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha);
  //     console.log(confirmation);
  //     setUser(confirmation);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  function onCaptchVerify(){
    if(!window.recaptchaVerifier){
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        'size': 'invisible',
        'callback': (response) => {
          
        },
        'expired-callback': () => {
          // Response expired. Ask user to solve reCAPTCHA again.
          // ...
        }
      });

    }
  }

  function onSignup(){
    onCaptchVerify()
    const appVerifier = window.recaptchaVerifier
    const formatPh = '+' + phone
    signInWithPhoneNumber(auth, formatPh, appVerifier)
    .then((confirmationResult) => {
      
      window.confirmationResult = confirmationResult;
      // ...
    }).catch((error) => {
      // Error; SMS not sent
      // ...
      console.log(error);
      
    });
  }

  function onOTPVerify(){
    window.confirmationResult.confirm(otp).then(async(res)=>{
      console.log(res);
      setUser(res.user)
      
    }).catch(err=>{
      console.log(err);
      
    })
  }

  // const verifyOtp = async (otp) => {
  //   try {
  //     const data=await user.confirm(otp)
  //     console.log(data);
      
  //   } catch (error) {
  //     console.log(error);
      
  //   }
    
  // }
  

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Phone Sign-In
          </h2>
          <div className="mb-4">
            <PhoneInput
              country={'in'}
              value={phone}
              onChange={setPhone}
              inputClass="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              containerClass="w-full"
            />
          </div>
          <button
            onClick={onSignup}
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Send OTP
          </button>
          <div id="recaptcha-container" className="mt-4"></div>
        </div>
        <div className="mt-6 w-full max-w-md">
          {/* <input
          onChange={(e)=>setOtp(e.target.value)}
            type="text"
            name="otp"
            placeholder="Enter OTP"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          /> */}
          
          <OtpInput OTPLength={6} onChange={setOtp} value={otp} otpType="number" disabled={false} autoFocus></OtpInput>
          <button onClick={onOTPVerify} className="w-full bg-green-500 text-white py-2 mt-4 rounded-md hover:bg-green-600 transition-colors duration-300">
            Verify OTP
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
