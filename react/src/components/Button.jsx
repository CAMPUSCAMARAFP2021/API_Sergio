import { useState } from 'react';

const Button = ({name, onClick}) => {
    const [loading, setLoading] = useState(false);

    return <button variant="primary" class="w-100 btn btn-lg btn-primary" onClick={() => { setLoading(true); onClick()}}>{name}</button>
}  
   

export default Button;