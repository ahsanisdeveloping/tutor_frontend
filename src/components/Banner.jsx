import bannerleft from '../assets/images/banner/bannerleft.png'
import avatar1 from '../assets/images/banner/avatar1.png'
import avatar2 from '../assets/images/banner/avatar2.png'
import avatar3 from '../assets/images/banner/avatar3.png'
import { useTranslation } from "react-i18next";

const Banner = () => {
    const {t} = useTranslation("banner");
    return ( 
        <div className='flex justify-between p-10'>
            <div className='w-[50%]'>
                <div className='flex  items-center gap-2'>
                    <div className='h-[2px] w-[80px] bg-black'>
                        
                    </div>
                <p className='font-clash text-2xl   '>{t("heading1")}</p>

                </div>
                <div className='flex items-center gap-2'>
                    <span className='font-clash text-[50px]'>
                        {t("heading2i")}
                    </span>
                    <div className='flex h-[50px]'>

                    <img src={avatar1} className='border-2 border-white rounded-full' alt="" />
                    <img src={avatar2}  className='border-2 border-white rounded-full relative left-[-10px]' alt="" />
                    <img src={avatar3} className='border-2 border-white rounded-full relative left-[-20px]' alt="" />   
                    </div>
                </div>
                <p className='font-clash text-[50px]'>{t("heading2ii")}</p>
                <p className='font-clash text-[30px]'>{t("para1")}</p>
                <div className='flex gap-2 my-2'>
                    <button className='btn font-bold bg-[#074226] h-[60px] text-white  px-10'>{t("getstarted")}</button>
                    <button className='btn font-bold  h-[60px] border-[#074226] px-10'>{t("learnmore")}</button>
                    
                </div>
                <div className='bg-[#D1BF8FB8] flex p-3 rounded-[10px] justify-between  text-black my-5 w-[402px] gap-2'>
                        <div>
                            <span className='font-bold text-[13px] '>{t("morethan")}</span>
                            <p className='font-bold text-[53px]'>500+</p>
                            <p className='font-bold text-[13px]'>{t("tutors")}</p>
                        </div>
                        <div>
                            <p className='font-bold text-[13x]'>{t("morethan")}</p>
                            <p className='font-bold text-[53px]'>1500+</p>
                            <p className='font-bold text-[13px]'>{t("students")}</p>
                        </div>
                    </div>
            </div>
            <div className='w-[50%] '>
                <img  src={bannerleft} alt="" className='m-auto'/>
            </div>
        </div>
     );
}
 
export default Banner;