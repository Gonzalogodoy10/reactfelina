import './Sizes.css';


const Sizes = ({sizes,setSize})=>{

return(
    <ul className='item-detalle'>
    {
    sizes.map((item) => {
                        return(
                            <div key={item} className='container-sizes'>
                            <input type='radio' name='size' value={item} className='input' onClick={()=> setSize(item)}/>
                            <label  className='label' >{item}</label>
                            </div>
                        )
                        })
    }
    </ul>
)
}

export default Sizes