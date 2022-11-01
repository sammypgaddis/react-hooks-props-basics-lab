const Links=(props) =>  { 
   return(
    <h3>
        <a href={props.links.github}>{props.links.github}</a>
        <a href={props.links.linkedin}>{props.links.linkedin}</a>
    </h3>
   )
}
export default Links