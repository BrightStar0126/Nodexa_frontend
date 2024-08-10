
import Activate from "../../../components/activate/Activate";
export default function Page({ params }: { params: { activation_token: string } }) {
    return(
        <div className=' w-full bg-[#080525]'>
            <Activate params={params}/>
        </div>
    )
}