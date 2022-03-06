import { useState } from "react";
import Button from './Button';

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
        <Button class="w-100 btn btn-lg btn-primary boton" name="Crear Oferta" onClick={() => createOffers(offer)}></Button>
    </>;
}
export default OfferForm;