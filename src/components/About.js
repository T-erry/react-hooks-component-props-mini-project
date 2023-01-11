const About = ({about, image })=>{
    return(
        <aside>
        { image === ""? "https://via.placeholder.com/215": <img src={image} alt="blog logo"/>}
         <p>{about}</p>
         </aside>
        

    );
}
export default About;