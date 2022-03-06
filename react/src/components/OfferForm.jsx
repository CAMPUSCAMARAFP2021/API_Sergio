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
        <form class="form-signin">
            <br></br>
            <label for="floatingInput">Titulo</label>
            <input class="form-control" type="text" name="title" onChange={setName} value={offer.name}></input>
            <br></br>
            <label for="floatingInput">Salario</label>
            <input class="form-control" type="text" name="author" onChange={setSalary} value={offer.salary}></input>
            <br></br>
            <label for="floatingInput">Contrato</label>
            <input class="form-control" type="text" name="author" onChange={setWorkday} value={offer.workday}></input>
        </form>
        <br></br>
        <Button variant="primary" name="enviar" onClick={() => createOffers(offer)}></Button>
    </>;
}
export default OfferForm;