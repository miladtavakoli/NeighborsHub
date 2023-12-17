"use client";
import { useMemo, useState } from "react";
import GetEmailPhoneNumber from "components/signin/getEmailPhoneNumber";
import OtpChecking from "components/signin/otpChecking";
import PasswordChecking from "components/signin/passwordChecking";
import STATUS from "components/signin/status";
import { useInputHandler } from "hooks/useInputHandler";

const Signup = () => {
  const [currentState, setCurrentState] = useState(STATUS.GET_EMAIL_MOBILE);

  const emailPhoneNumber = useInputHandler("");
  const otp = useInputHandler("");
  const password = useInputHandler("");

  const state = {
    [STATUS.GET_EMAIL_MOBILE]: (
      <GetEmailPhoneNumber
        emailPhoneNumber={emailPhoneNumber}
        setCurrentState={setCurrentState}
      />
    ),
    [STATUS.OTP_CHECKING]: (
      <OtpChecking
        setCurrentState={setCurrentState}
        otp={otp}
        emailPhoneNumber={emailPhoneNumber}
      />
    ),
    [STATUS.PASSWORD_CHECKING]: (
      <PasswordChecking
        setCurrentState={setCurrentState}
        otp={otp}
        emailPhoneNumber={emailPhoneNumber}
        password={password}
      />
    ),
  };

  return state[currentState];
};

export default Signup;
