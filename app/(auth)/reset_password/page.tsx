import dynamic from "next/dynamic";

const ResetPassword = dynamic(() => import('@/components/AuthComponents/resetPass'), { ssr: false });


const PassReset = () => {

  return(

    <div className="flex items-center justify-center">
      <ResetPassword />
    </div>
  )

}
export default PassReset;