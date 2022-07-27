import duck from '../../assets/DuckParts/rubberDuck.gif'




const DuckAnimation = () => {
  return ( 
    <>
      <div style={{backgroundColor: 'black', height:300, width:300, }}>
        <div> 
          <img src={duck} alt="duck" />
        </div>
      </div>    
    </>
   )
}
 
export default DuckAnimation;