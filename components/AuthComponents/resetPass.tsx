"use client";
import {
  verifyEmail_sendCode,
  verify_PinCode,
} from "@/lib/AuthActions/resetAction";
import { EnvelopeClosedIcon, CheckIcon } from "@radix-ui/react-icons";
import {
  Card,
  Container,
  Flex,
  Text,
  TextArea,
  Button,
  TextField,
  Badge,
  Box,
} from "@radix-ui/themes";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useState } from "react";
import Link from "next/link";
import Password_change from "./changePassword";

const ResetPassword = () => {


  // for handling email verification
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [Email_verified, setEmail_Verified] = useState(false);

  // for handling pin verification
  const [pin, setPin] = useState<string>();
  const [pinButton, setPinButton] = useState(false);
  const [pinError, setPinError] = useState("");
  const [Pin_verified, setPin_Verified] = useState(false);
  
  // user ID;
  const [userID , setUserID] = useState('');

  const [loading, setLoading] = useState(false);

  async function checkEmail() {
    setEmailError("");
    setEmail_Verified(false);
    setLoading(true);
    try {
      const user = await verifyEmail_sendCode(email);
      
      if (!user) {
        setEmailError("Email Doesnt Exist");
        setLoading(false);
        return;
      }
      
      setEmail_Verified(true);
      setPinButton(true);
      setLoading(false);
      
      // setting returned user ID for passing to find token
      setUserID(user);

    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  async function verifyPin() {
    setPinError("");
    setLoading(true);
    setPin_Verified(false);
    try {
      const verify = await verify_PinCode(pin!,userID!);
      if (!verify) {
        setPinError("Invalid Pin, Try Reseting Again");

      } else {
        setPin_Verified(true);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  const handlePinChange = (newPin: any) => {
    setPin(newPin);
  };

  return (
    <Box maxWidth={"lg:560px"} pt={"5"}>
      <Flex className="flex flex-col items-center justify-center gap-[25px] p-[30px]">
        <Card className="w-[300px]">
          <Text
            className=" flex items-center justify-center"
            weight={"bold"}
            size={"3"}
            >
            Reset Password
          </Text>
        </Card>

        
        {/* Email Field */}
        { !Pin_verified ? 
        <>
        <Flex direction={"column"} gap={"2"}>
          <Text size={"2"}>Enter your email address</Text>
          <TextField.Root
            type="email"
            className="w-[300px]"
            name="email"
            value={email}
            disabled={Email_verified}
            onChange={(e: any) => setEmail(e.target.value)}
            >
            <TextField.Slot side="left">
              <EnvelopeClosedIcon />
            </TextField.Slot>

            {Email_verified && (
              <TextField.Slot side="right">
                <CheckIcon />
              </TextField.Slot>
            )}
          </TextField.Root>
        </Flex>
        {emailError && (
          <Badge size={"1"} color="red">
            {" "}
            {emailError}{" "}
          </Badge>
        )}
        {Email_verified && (
          <Badge
          size={"1"}
          className="w-[300px] flex items-center justify-center"
            color="green"
            >
            {" "}
            Check your email for code{" "}
          </Badge>
        )}

        {Email_verified && (
          <>
            {/* InputOTP component for entering the PIN */}
            <InputOTP
              maxLength={6}
              pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
              onChange={handlePinChange} // This will call handlePinChange with the new PIN
              >
              <InputOTPGroup>
                {[...Array(6)].map((_, index) => (
                  <InputOTPSlot key={index} index={index} />
                ))}
              </InputOTPGroup>
            </InputOTP>
          </>
        )}
        {!pinButton && (
          <Flex className="flex items-center justify-center gap-[20px]">
            <Button
              style={{ width: "140px", cursor: "pointer" }}
              onClick={checkEmail}
              loading={loading}
            >
              Send Code
            </Button>

            <Link href={"/sign-in"}>
              <Button style={{ width: "200", cursor: "pointer" }}>
                Go Back
              </Button>
            </Link>
          </Flex>
        )}

        {pinButton && (
          <Button
          style={{ width: "300px", cursor: "pointer" }}
          loading={loading}
          onClick={verifyPin}
          >
            Verify
          </Button>
        )}

        {pinError && (
          <Badge size={"1"} color="red">
            {" "}
            {pinError}{" "}
          </Badge>
        )}
        </>
        :
        <Password_change email={email} />
        }

      </Flex>
    </Box>
  );
};

export default ResetPassword;
