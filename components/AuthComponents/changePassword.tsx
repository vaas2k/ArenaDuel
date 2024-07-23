import { newPassword } from "@/lib/AuthActions/resetAction";
import { LockClosedIcon, EyeOpenIcon, EyeClosedIcon } from "@radix-ui/react-icons"
import { Flex, TextField, Button,Text,Badge } from "@radix-ui/themes"
import { useRouter } from "next/navigation";
import { useState } from "react"


const Password_change = ({ email } : {email :string} )  => {


    const router = useRouter();
    const [loading , setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState<any>({
        password: false,
        confirm_password: false,
        passwordFormatError: false,
    });

    const [form, setForm] = useState<{email:string ,password:string,confirm_password:string}>({
        email : email,
        password: "",
        confirm_password: "", 
    });


    const handleError = (field:any) => error[field];

    async function onSubmit(e:any) {
        e.preventDefault();
        setLoading(true);
        setError({});

        setError({ ...error, password: !form.password, confirm_password: !form.confirm_password });
        if ( !form.password || !form.confirm_password) {
            setLoading(false);
            return;
        }
        if (form.password !== form.confirm_password) {
            setError({ ...error, password: true, confirm_password: true });
            setLoading(false);
            return;
        }
        if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(form.password)) {
            setError({ passwordFormatError: true });
            setLoading(false);
            return;
        } 
        try {

            const res = await newPassword(form!);
            if(!res){
                alert('internl server error')
                setLoading(false);
                return;
            }

            setLoading(false);
            router.push('/');
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>

        
        <Flex direction={"column"} gap={"2"}>
            <Text className="pb-[20px]" weight={'bold'} align={'center'}>Enter your new Password ! </Text>
                    <TextField.Root
                        type={showPassword ? "text" : "password"}
                        className="w-[250px]"
                        placeholder={handleError("password") ? "Password required" : "Password"}
                        color={handleError("password") && "red"}
                        variant={handleError("password") && "soft"}
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                    >
                        <TextField.Slot side="left">
                            <LockClosedIcon />
                        </TextField.Slot>
                        <TextField.Slot side="right">
                            <Button variant="ghost" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? "Hide password" : "Show password"}>
                                {showPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
                            </Button>
                        </TextField.Slot>
                    </TextField.Root>
                </Flex>
                {error.passwordFormatError && <Badge className="flex flex-wrap" size={'1'} color="red" variant='soft'>Minimum eight characters, at least one letter and one number</Badge>}

                {/* Confirm Password Field */}
                <Flex direction={"column"} gap={"2"}>
                    <TextField.Root
                        type={showPassword ? "text" : "password"}
                        className="w-[250px]"
                        placeholder={handleError("confirm_password") ? "Confirm Password required" : "Confirm Password"}
                        color={handleError("confirm_password") && "red"}
                        variant={handleError("confirm_password") && "soft"}
                        onChange={(e) => setForm({ ...form, confirm_password: e.target.value })}
                    >
                        <TextField.Slot side="left">
                            <LockClosedIcon />
                        </TextField.Slot>
                    </TextField.Root>
                    {error.confirm_password && <Text color="red" size="1">Passwords do not match</Text>}
                </Flex>

                {/* Submit Button */}
                <Button
                    style={{ width: "250px", cursor: "pointer" }}
                    onClick={onSubmit}
                    loading={loading}
                >
                    Continue
                </Button>
        </>
    )

}

export default Password_change;