import Image from "next/image"
import Link from 'next/link'
import styles from '../../css/aboutme.module.css'

export default function AboutMe(){
    return(
        <div className={styles.container}>
            <Image 
                src='/images/profile.png'
                width={500}
                height={100}
                alt="profile"
            />
            <div className={styles.rightcontainer}>
                <h3 className ={styles.title}>ABOUT ME</h3>
                <div className ={styles.detail}>
                    <span className={styles.label}> 이름 </span>
                    <span className={styles.info}> 엄혜원 </span>
                    <span className={styles.label}> 학과 </span>
                    <span className={styles.info}> 자율전공 </span>
                    <span className={styles.label}> 나이 </span>
                    <span className={styles.info}> 22 </span>
                </div>
            </div>
                
            <Link href ='/'>홈으로 가기</Link>
        </div>
    )
}