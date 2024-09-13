import styles from './About.module.css';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import { useEffect, useState } from 'react';

function About() {
    
    const [banner, setBanner] = useState("")

    useEffect(() => {
        const getBanner = async () => {
            const response = await fetch("http://localhost:3000/banner")
            const data = await response.json()
            setBanner(data.about)
        }
        getBanner()
    }, [])

    return (
        <>
        <Header />
        <Banner image={banner} title="About"/>
        <Container title="Studio Ghibli">

            <div className={styles.text}>
                <div className={styles.part1}>
                    <p>Studio Ghibli is a highly acclaimed Japanese animation studio known for its enchanting and visually stunning films. It was founded in 1985 by two prominent directors, Hayao Miyazaki and Isao Takahata, following the success of Miyazaki&apos;s film &quot;Nausicaä of the Valley of the Wind&quot;.</p> 
                    <br />
                    <p>Studio Ghibli is renowned for its beautifully detailed animations and imaginative worlds. Some of its most famous films include:</p> 
                    <br /> <ul>
                        <li>&quot;My Neighbor Totoro&quot; (1988): A heartwarming film about two young sisters who move to the countryside and encounter a forest spirit named Totoro.</li>
                        <li>&quot;Spirited Away&quot; (2001): This critically acclaimed film follows a young girl who becomes trapped in a magical world and must find a way to save her parents and return home. It won the Academy Award for Best Animated Feature and remains one of the studio&apos;s most celebrated works.</li>
                        <li>&quot;Princess Mononoke&quot; (1997): An epic story that explores the conflict between nature and industrialization, featuring complex characters and a richly developed world.
                        Studio Ghibli&apos;s films often combine elements of fantasy with deep, thought-provoking themes. The studio is also famous for its meticulous animation style, which has garnered a global fanbase.</li>
                    </ul> <br />
                    <p>In addition to its films, Studio Ghibli operates a museum in Mitaka, Japan, which offers a unique and immersive experience into the world of Ghibli&apos;s creations.</p>

                    <h2>Founding and Early Years</h2>
                    <ul>
                        <li>
                            <p>Founders: Hayao Miyazaki and Isao Takahata, who were influential in the Japanese animation industry even before founding Ghibli. Their collaboration brought a unique vision to the studio.</p>
                        </li>
                        <li>
                            <p>Name: The name &quot;Ghibli&quot; was inspired by the Italian word for a hot desert wind and was chosen by Miyazaki. The name symbolizes a &quot;new wind&quot; in the animation world, reflecting their aim to bring fresh and innovative ideas to the industry.</p>
                        </li>
                    </ul>
                    <h2>Artistic Style and Themes</h2>
                    <ul>
                        <li>
                            <p>Animation Quality: Studio Ghibli is renowned for its hand-drawn animation techniques, which give their films a distinct, lush, and detailed aesthetic. The studio emphasizes traditional animation methods, despite the rise of digital techniques.</p>
                            <p>Themes: Their films often address environmentalism, pacifism, feminism, and the struggles of growing up. They blend whimsical fantasy with serious themes, creating stories that are both entertaining and thought-provoking.</p>
                        </li>
                    </ul>
                </div>

                <div className={styles.part2}>

                    <h2>Cultural and Global Influence</h2>
                    <ul>
                        <li>
                            <p>International Recognition: Studio Ghibli&apos;s films have had a significant impact worldwide, receiving critical acclaim and building a global fanbase. &quot;Spirited Away,&quot; in particular, has become a cultural touchstone and introduced many to Japanese animation.</p>
                        </li>
                        <li>
                            <p>Cultural Impact: The studio has influenced a wide range of media and artists, from Western animation studios to independent filmmakers. Their films are often praised for their complex characters and strong narratives.</p>
                        </li>
                    </ul>

                    <h2>Museum and Studio Tours</h2>
                    <ul>
                        <li>
                            <p>Ghibli Museum: Located in Mitaka, Tokyo, this museum showcases the studio&apos;s films and provides an immersive experience into the world of Ghibli. It features exhibitions, a replica of the Catbus from &quot;My Neighbor Totoro&quot;, and a small theater showing exclusive short films.</p>
                        </li>
                        <li>
                            <p>Studio Tours: While Studio Ghibli&apos;s actual studio is not open to the public, visitors to the museum can experience a bit of the magic behind the scenes.</p>
                        </li>
                    </ul>

                    <h2>Recent Developments</h2>
                    <ul>
                        <li>
                            <p>Ghibli Park: Opened in 2022 in Aichi Prefecture, Japan, this theme park brings the worlds of Ghibli films to life with various themed areas based on their movies, allowing fans to explore settings from their favorite films in an interactive way.</p>
                        </li>
                    </ul>
                    <br />
                    <p>Studio Ghibli&quot;s influence continues to be profound, shaping both the animation industry and popular culture globally. Their films offer a blend of beautiful animation, imaginative storytelling, and deep themes that resonate with audiences of all ages.</p>                        
                </div>                
            </div>

        </Container>
        <Footer />
        </>

    );
}

export default About
