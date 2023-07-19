import style from './assessment.module.css'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

export default function Assessment(){

    return(
        <>
            <main className={style.assessment}>
                <div className={style.headContains}>
                    <h1>Assessment</h1>
                    <p className={style.para1}>My Assessments</p>
                </div>
                <PhoneAndroidIcon className={style.icon}/>
            </main>
        </>
    )
}