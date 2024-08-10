
import Reset from '../../../components/reset/Reset'
export default function Page({ params }: { params: { reset_token: string } }) {
    return(
        <div className=' w-full bg-[#080525]'>
            <Reset params={params}/>
        </div>
    )
}