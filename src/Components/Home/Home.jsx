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

                         --------------------------------------
                         ----------------
                         --------------------------------
                         --------------------------------------
                         ------------------
                         --------------------------------------
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

                            --------------------------------------
                            ----------------
                            --------------------------------
                            --------------------------------------
                            ------------------
                            --------------------------------------
                        </Card.Content>
                    </Card>
                </Grid.Column>
                <Grid.Column>
                    <Card inverted>
                        <Card.Content  className={styles.gradientCard}>
                            <Card.Header  style={{backgroundColor:"#333",color:"white"}}>
                                Faster and Better
                                <Divider/>
                            </Card.Header>

                            --------------------------------------
                            ----------------
                            --------------------------------
                            --------------------------------------
                            ------------------
                            --------------------------------------
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
                       -------------------------------------------------------
                        ----------------------------------------
                        -------------------------------------------------------
                        ---------------------------------------------------------
                        ---------------------------------------------------------------
                        -----------------------------------------------------------------
                        -----------------------
                        --------------------------------------
                        -----------------------------------------------------------
                        -------------------------------------
                        ------------------------------------------------------------

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
                    About the Department
                </Header>
                <Container className={styles.details} >
                    -------------------------------------------------------
                    ----------------------------------------
                    -------------------------------------------------------
                    ---------------------------------------------------------
                    ---------------------------------------------------------------
                    -----------------------------------------------------------------
                    -----------------------
                    --------------------------------------
                    -----------------------------------------------------------
                    -------------------------------------
                    ------------------------------------------------------------


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
                    About the Department
                </Header>
                <Container className={styles.details} >
                    -------------------------------------------------------
                    ----------------------------------------
                    -------------------------------------------------------
                    ---------------------------------------------------------
                    ---------------------------------------------------------------
                    -----------------------------------------------------------------
                    -----------------------
                    --------------------------------------
                    -----------------------------------------------------------
                    -------------------------------------
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