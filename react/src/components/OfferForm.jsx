import { useState } from "react";
import Button from './Button';


const OfferForm = ({createOffer}) => {
    const [offer, setOffer] = useState(
        {
            "name": "",
            "salary": "",
            "workday": "",
            "agreement": "",
        }
    );

    const setName = ({target}) => {
        const name = target.value;
        setOffer(lastValue => ({ ...lastValue,  name }))
    }
    const setSalary = ({target}) => {
        const salary = target.value;
        setOffer(lastValue => ({ ...lastValue, salary }))
    }
    const setWorkday = ({target}) => {
        const workday = target.value;
        setOffer(lastValue => ({ ...lastValue,  workday }))
    }

    const setAgreement = ({target}) => {
        const agreement = target.value;
        setOffer(lastValue => ({ ...lastValue,  agreement }))
    }


    return <>
    <br></br>
        <form>
        <label>Introduce el titulo de la oferta</label>
            <br></br>
            <input type="text" name="name" onChange={setName} value={offer.name}></input>
            <br></br>
            <label>Introduce el salario de la oferta</label>
            <br></br>
            <input type="text" name="salary" onChange={setSalary} value={offer.salary}></input>
            <br></br>
            <label>Introduce el tipo de turno</label>
            <br></br>
            <input type="text" name="workday" onChange={setWorkday} value={offer.workday}></input>
            <br></br>
            <label>Introduce los requisitos</label>
            <br></br>
            <input type="text" name="agreement" onChange={setAgreement} value={offer.agreement}></input>
            <br></br>
        </form>
        <br></br>
        <Button name="enviar" onClick={() => createOffer(offer)}></Button>
        <div>
            {JSON.stringify(offer)}
        </div>
        <br></br>
    </>;
}

export default OfferForm;