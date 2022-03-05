import { useState } from "react";
import Button from './Button';
import "react-datepicker/dist/react-datepicker.css";

const OfferForm = ({createOffers}) => {
    const [offer, setOffer] = useState(
        {
            "name": "",
            "salary": "",
            "workday": "",
        }
    );

    const setName = ({target}) => {
        const name = target.value;
        setOffer( lastValue => ({...lastValue, name}))
    }

    const setSalary = ({target}) => {
        const salary = target.value;
        setOffer( lastValue => ({...lastValue, salary}))
    }

    const setWorkday = ({target}) => {
        const workday = target.value;
        setOffer( lastValue => ({...lastValue, workday}))
    }



    return <>
        <form>
            <input type="text" name="title" onChange={setName} value={offer.name}></input>
            <input type="text" name="author" onChange={setSalary} value={offer.salary}></input>
            <input type="text" name="author" onChange={setWorkday} value={offer.workday}></input>
        </form>
        <Button name="enviar" onClick={() => createOffers(offer)}></Button>
        <div> 
            {JSON.stringify(offer)}
        </div>
    </>;
}
export default OfferForm;