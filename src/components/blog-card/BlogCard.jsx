import styles from './BlogCard.module.scss'

const BlogCard = (props) => {
    const {img, avatar, name, date, title, subtitle, job1, job2, job3} = props

    return (
        <div className={styles.blogCard}>
            <img src={img} alt="" className={styles.blogCard__img}/>
            <div className={styles.blogCard__user}>
                <img src={avatar} alt="" />
                <div className={styles.bloCard__userInfo}>
                    <h5>{name}</h5>
                    <div className={styles.blogCard__userInfoDate}>{date}</div>
                </div>
            </div>
            <div className={styles.blogCard__title}>
                <h3>{title}</h3>
            </div>
            <div className={styles.blogCard__subtitle}>
                <p>{subtitle}</p>
            </div>
            <div className={styles.blogCard__jobs}>
                <a href="#!" className={styles.blogCard__link1}>{job1}</a>
                <a href="#!" className={styles.blogCard__link2}>{job2}</a>
                <a href="#!" className={styles.blogCard__link3}>{job3}</a>
                <a href="#!" className={styles.blogCard__link4}>+2</a>
            </div>
        </div>
    )
}
 
export default BlogCard