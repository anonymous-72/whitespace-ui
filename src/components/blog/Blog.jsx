import { Col, Container, Row } from 'react-bootstrap'
import styles from './Blog.module.scss'
import SectionHeaderSuptitle from '../section-header-suptitle/SectionHeaderSuptitle'
import SectionHeader from '../section-header/SectionHeader'
import BlogCard from '../blog-card/BlogCard'
import news01Img from './../../img/news/news-01.png'
import news02Img from './../../img/news/news-02.png'
import news03Img from './../../img/news/news-03.png'
import avatarImg from './../../img/icons/avatar.png'
import Buttons from '../button/Buttons'

const Blog = () => {
    return (
        <section className={styles.blog}>
            <Container>
                <Row>
                    <Col className="d-flex flex-column align-items-center mx-auto">
                        <div className={styles.blog__header}>
                            <SectionHeaderSuptitle suptitle={"Blog"} />
                            <SectionHeader 
                                title={"Our fresh news"}
                                subtitle={"Our blog is more than just a collection of articles - it's a hub of ideas, inspiration, and thought-provoking discussions."}
                            />
                        </div>
                        <Col className="d-flex justify-content-center flex-wrap">
                            <Col xl="4" md="12" sm="12">                                    
                                <BlogCard 
                                    img={news01Img}
                                    avatar={avatarImg}
                                    name={"Jenny Wilson"}
                                    date={"May 9, 2023"}
                                    title={"Meet an web designer in his studio in Amsterdam"}
                                    subtitle={"We'll get to know the designer and their design philosophy, as well as take a look..."}
                                    job1={"UI/UX"}
                                    job2={"Studio"}
                                    job3={"Web Design"}
                                />
                            </Col>
                            <Col xl="4" md="12" sm="12">
                                <BlogCard 
                                    img={news02Img}
                                    avatar={avatarImg}
                                    name={"Jenny Wilson"}
                                    date={"May 9, 2023"}
                                    title={"The Evolution of UI/UX Design: From Skeuomorphism to Flat Design"}
                                    subtitle={"Discussing the shift from realistic designs to minimalistic, flat designs."}
                                    job1={"UI/UX"}
                                    job2={"Studio"}
                                    job3={"Web Design"}
                                />
                            </Col>
                            <Col xl="4" md="12" sm="12">
                                <BlogCard 
                                    img={news03Img}
                                    avatar={avatarImg}
                                    name={"Jenny Wilson"}
                                    date={"May 9, 2023"}
                                    title={"The Importance of User-Centered Design in IT Projects"}
                                    subtitle={"Exploring the significance of putting the user first in IT projects"}
                                    job1={"UI/UX"}
                                    job2={"Studio"}
                                    job3={"Web Design"}
                                />
                            </Col>
                        </Col>
                        <Buttons title={"Load more"} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
 
export default Blog