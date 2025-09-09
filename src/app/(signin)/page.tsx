import Form from "@/components/signin/Form";
import DotPattern from "../../components/signin/DotPattern";
import DataReportSVG from "../../../public/svgs/DataReportSVG";

export default async function SignIn() {
  return (
    <div className="flex flex-row w-full h-screen justify-center items-center">
      <div className="w-1/2 h-full flex flex-col justify-center items-center">
        <div>
          <div className="flex flex-col gap-4">
            <p className="font-semibold text-4xl">Sign in</p>
            <p className="text-lg font-light">Enter your username and password</p>
          </div>

          <Form />
        </div>
      </div>

      <div className="w-[3px] h-[95%] bg-gradient-to-b from-transparent via-primary to-transparent" />

      <div className="relative w-1/2 h-full">
        <DotPattern bigSize={24} smallSize={14} spacing={60} color="#9E1E2207" />

        <div className="absolute top-0 start-0 w-full h-full p-28">
          <DataReportSVG className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}
