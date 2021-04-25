import React, { useLayoutEffect, useRef, useState } from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import styles from './styles.module.css'
import {Container, List,Segment,Card, Grid, Header, Divider} from "semantic-ui-react";
const CreativeFormHome = () => {
    return (
        <div>
           <div className={styles.homebackgroundImage}>
            <Head />

            <Container className={styles.subText}>
              Create Your Own Forms
            </Container>
           </div>
            <Features/>
            <div style={{marginTop:50}}>
            <ContentOne/>
            <ContentTwo/>
            <ContentThree/>
            </div>
            <MoreInfo/>
        </div>
    );
};

export default CreativeFormHome;


const Head=()=>{
    return(
        <ScrollAnimation animateIn='flipInY'  animateOut='flipOutY'>
            <h1 className={styles.charFade}>
              Creative Forms
            </h1>

        </ScrollAnimation>

    )
}

const Features=()=>{

    return(
        <ScrollAnimation animateIn='slideInRight'  animateOut='slideOutLeft'>
        <Grid  style={{marginTop:10,height:400}}>
            <Grid.Row style={{marginLeft:60}} columns={3} textAlign="center" verticalAlign="middle">

                <Grid.Column  >
                    <Card   color={"blue"}>
                        <Card.Content className={styles.gradientCard}>
                     <Card.Header  >
                         Future Design
                         <Divider/>
                     </Card.Header>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce odio diam, fermentum ut consectetur id, dignissim vel erat. Aenean orci est, dignissim sed pellentesque fringilla, tincidunt et felis. Vestibulum rhoncus aliquet nulla a vehicula. Donec dignissim lobortis est, ac malesuada sapien pulvinar non
                     </Card.Content>
                    </Card>
                </Grid.Column>

                <Grid.Column>
                    <Card inverted>
                        <Card.Content  className={styles.gradientCard}>
                            <Card.Header style={{backgroundColor:"#333",color:"white"}} >
                                Simple and Elegant
                                <Divider/>
                            </Card.Header>

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce odio diam, fermentum ut consectetur id, dignissim vel erat. Aenean orci est, dignissim sed pellentesque fringilla, tincidunt et felis. Vestibulum rhoncus aliquet nulla a vehicula. Donec dignissim lobortis est, ac malesuada sapien pulvinar non
                        </Card.Content>
                    </Card>
                </Grid.Column>
                <Grid.Column>
                    <Card color={"blue"} >
                        <Card.Content  className={styles.gradientCard}>
                            <Card.Header>
                                Faster and Better
                                <Divider/>
                            </Card.Header>

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce odio diam, fermentum ut consectetur id, dignissim vel erat. Aenean orci est, dignissim sed pellentesque fringilla, tincidunt et felis. Vestibulum rhoncus aliquet nulla a vehicula. Donec dignissim lobortis est, ac malesuada sapien pulvinar non
                        </Card.Content>
                    </Card>
                </Grid.Column>
            </Grid.Row>

        </Grid>
        </ScrollAnimation>
    )
}

const ContentOne=()=>{
    return (
        <ScrollAnimation animateIn="slideInUp" animateOut='slideOutup'>
            <Grid style={{backgroundColor: "#ff4f85", color: "white"}} stackable>

                <Grid.Column width={10}>

                    <Header style={{color: "white"}} size="huge">
                        One
                    </Header>
                    <Container className={styles.details}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce odio diam, fermentum ut consectetur id, dignissim vel erat. Aenean orci est, dignissim sed pellentesque fringilla, tincidunt et felis. Vestibulum rhoncus aliquet nulla a vehicula. Donec dignissim lobortis est, ac malesuada sapien pulvinar non. Donec a lacus accumsan, ornare leo vel, semper elit. Donec eu massa et nunc aliquam ultricies. Cras quis mauris arcu. Nullam id mauris ac augue vehicula posuere a id tellus. Nunc consectetur nunc eget lorem accumsan blandit. Ut aliquam interdum dui, eget vestibulum ante ultrices in. Etiam sit amet risus vel ipsum maximus aliquam vitae in urna. Sed id dignissim ex. Curabitur malesuada venenatis ante vitae rutrum. Suspendisse aliquet faucibus neque, et scelerisque felis. Nunc eget auctor quam. Sed mollis purus eu diam egestas, a iaculis mauris cursus.

                        Vivamus tellus turpis, mollis ut ornare id, consequat id sapien. Nunc congue condimentum nunc et hendrerit. Praesent tristique erat quis eros malesuada ullamcorper. Nunc viverra nibh non nunc auctor dapibus. Fusce volutpat ullamcorper orci et porta. Nam bibendum est at turpis consequat, nec commodo lectus porttitor. Proin metus purus, tincidunt eu ultricies ut, sollicitudin nec libero. Cras convallis tempus nunc vitae blandit. Nunc vehicula, nisi ac consequat pellentesque, lacus turpis ullamcorper enim, eget tempor est leo ac libero. Morbi dictum iaculis enim, ultrices vestibulum dui. Morbi cursus orci quis massa consectetur, et vulputate elit iaculis. Ut a diam lacinia, rutrum arcu non, rutrum arcu. Maecenas vestibulum tempor nulla, pellentesque porta dui accumsan in. Ut accumsan enim in nunc lobortis, in pellentesque erat tristique. Curabitur ut arcu at risus varius vestibulum.

                    </Container>

                    <Grid.Column width={6}>

                    </Grid.Column>
                </Grid.Column>
            </Grid>
        </ScrollAnimation>
    );
}

const ContentTwo=()=>{
    return(
        <ScrollAnimation animateIn="slideInUp" animateOut='fadeOut' >
        <Grid  style={{backgroundColor:"#0bdbf6",color:"white"}}  stackable>
            <Grid.Column width={6}>

            </Grid.Column>
            <Grid.Column width={10}>
                <Header style={{color:"white"}} size="large" >
                   Two
                </Header>
                <Container className={styles.details} >
                    Pellentesque pellentesque volutpat bibendum. Mauris dapibus est non nunc sodales, in congue eros congue. Suspendisse dapibus tempor nunc in gravida. Morbi eu mauris vehicula, congue nunc in, consequat erat. Cras consequat tempus sapien, eget gravida quam pellentesque ac. Pellentesque interdum varius euismod. Etiam vitae velit vitae lacus pharetra finibus. Donec efficitur erat quis mauris condimentum laoreet. Suspendisse non ornare elit. Mauris scelerisque semper scelerisque. Donec accumsan tortor ut mollis tristique.

                    Nulla facilisi. Quisque tortor mauris, mollis sit amet lorem nec, hendrerit pulvinar enim. Mauris magna mi, imperdiet a tortor quis, pretium lobortis felis. Vivamus quis sem lobortis, euismod velit nec, fermentum quam. Praesent volutpat malesuada odio, nec fringilla quam tincidunt ac. Mauris justo augue, mattis a justo eget, interdum molestie odio. Donec condimentum vel ex vel feugiat. Vestibulum mattis dui non odio sodales, eget porta sapien porta. Maecenas interdum quam vel purus euismod, id viverra nibh pellentesque. Praesent dignissim porta enim vel semper. Aliquam elementum ante quis turpis facilisis gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et est ac risus maximus vulputate volutpat quis felis. Praesent pulvinar, leo id dignissim lacinia, erat ligula gravida neque, id accumsan diam sem sed velit. Pellentesque rutrum leo id massa eleifend facilisis.


                </Container>
            </Grid.Column>
        </Grid>
        </ScrollAnimation>
    )
}

const ContentThree=()=>{
    return(
        <ScrollAnimation animateIn="slideInUp" animateOut='fadeOut' >
        <Grid  style={{backgroundColor:"#ff4f85",color:"white"}}  stackable>

            <Grid.Column width={10}>
                <Header style={{color:"white"}} size="large">
                   Three
                </Header>
                <Container className={styles.details} >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce odio diam, fermentum ut consectetur id, dignissim vel erat. Aenean orci est, dignissim sed pellentesque fringilla, tincidunt et felis. Vestibulum rhoncus aliquet nulla a vehicula. Donec dignissim lobortis est, ac malesuada sapien pulvinar non. Donec a lacus accumsan, ornare leo vel, semper elit. Donec eu massa et nunc aliquam ultricies. Cras quis mauris arcu. Nullam id mauris ac augue vehicula posuere a id tellus. Nunc consectetur nunc eget lorem accumsan blandit. Ut aliquam interdum dui, eget vestibulum ante ultrices in. Etiam sit amet risus vel ipsum maximus aliquam vitae in urna. Sed id dignissim ex. Curabitur malesuada venenatis ante vitae rutrum. Suspendisse aliquet faucibus neque, et scelerisque felis. Nunc eget auctor quam. Sed mollis purus eu diam egestas, a iaculis mauris cursus.

                    Vivamus tellus turpis, mollis ut ornare id, consequat id sapien. Nunc congue condimentum nunc et hendrerit. Praesent tristique erat quis eros malesuada ullamcorper. Nunc viverra nibh non nunc auctor dapibus. Fusce volutpat ullamcorper orci et porta. Nam bibendum est at turpis consequat, nec commodo lectus porttitor. Proin metus purus, tincidunt eu ultricies ut, sollicitudin nec libero. Cras convallis tempus nunc vitae blandit. Nunc vehicula, nisi ac consequat pellentesque, lacus turpis ullamcorper enim, eget tempor est leo ac libero. Morbi dictum iaculis enim, ultrices vestibulum dui. Morbi cursus orci quis massa consectetur, et vulputate elit iaculis. Ut a diam lacinia, rutrum arcu non, rutrum arcu. Maecenas vestibulum tempor nulla, pellentesque porta dui accumsan in. Ut accumsan enim in nunc lobortis, in pellentesque erat tristique. Curabitur ut arcu at risus varius vestibulum.

                    Praesent commodo porta nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin a sem nec libero vehicula ultrices et sit amet ipsum. Proin nec eros sodales lorem lobortis accumsan vitae a lacus. Sed ac tristique nisi. Maecenas a ultrices mi. Nunc gravida tincidunt eleifend. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In quam nunc, ultricies et nulla pharetra, facilisis ultricies lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut mi libero, venenatis eget porta nec, finibus nec est. Aliquam erat volutpat. In tempor porttitor dolor, in pretium ipsum varius vel. Nunc vulputate nulla id massa mollis, vulputate egestas dolor ultrices. Nulla turpis magna, suscipit ac mauris at, porta consequat mauris.
                    ------------------------------------------------------------

                </Container>
            </Grid.Column>
            <Grid.Column width={6}>

            </Grid.Column>
        </Grid>

        </ScrollAnimation>
    )
}

const MoreInfo=()=>{
    return(
        <Segment inverted vertical style={{ padding: '5em 0em' }}>
            <Container>
                <Grid divided inverted stackable>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Header inverted as='h4' content='About' />
                            <List link inverted>
                                <List.Item as='a'>Sitemap</List.Item>
                                <List.Item as='a'>Contact Us</List.Item>
                                <List.Item as='a'>Religious Ceremonies</List.Item>
                                <List.Item as='a'>Gazebo Plans</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Header inverted as='h4' content='Services' />
                            <List link inverted>
                                <List.Item as='a'>Banana Pre-Order</List.Item>
                                <List.Item as='a'>DNA FAQ</List.Item>
                                <List.Item as='a'>How To Access</List.Item>
                                <List.Item as='a'>Favorite X-Men</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={7}>
                            <Header as='h4' inverted>
                                Footer Header
                            </Header>
                            <p>
                                Extra space for a call to action inside the footer that could help re-engage users.
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    )
}