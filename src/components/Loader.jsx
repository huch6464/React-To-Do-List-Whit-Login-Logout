import { Audio } from 'react-loader-spinner'


function Loader (){
    return(
        <div style={{margin: 'auto'}}>
    <Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="three-dots-loading"
  wrapperStyle
  wrapperClass
/>
        </div>
    )
}

export default Loader;


