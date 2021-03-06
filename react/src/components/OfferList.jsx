import Offer from "./Offer"
import OfferForm from './OfferForm';

import { useState, useEffect } from 'react';
import { getOffers,   createOffers,    deleteOffers} from "../api/Offers";

const OfferList = ({jwt}) => {
    const [offers, setOffers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    

    const doCreateOffer = (offer) => {
        setIsLoading(true);
        createOffers(offer, jwt)
            .then((newOffer) => {
                 setOffers((prevState) => [...prevState, newOffer]);
                 setIsLoading(false);       
            }); 
    };
    

    const doDeleteOffer = (offer) => {
       setIsLoading(true);
       deleteOffers(offer,jwt)
       .then(loadData);
   };

    const loadData = () => {
        setIsLoading(true);
        getOffers(jwt).then((offers) => {    
            setIsLoading(false)
            setOffers(offers);
        }).catch(() => setIsLoading(false));
    }
    useEffect(loadData,[]); 
    
    return <>
        {isLoading ? 
            <p>espera...</p> : 
            offers.map(offer => 
                <Offer 
                    key={offer._id} 
                    offer={offer} 
                   onDelete={() => doDeleteOffer(offer)}
                />)}
                <br></br>
        <OfferForm createOffers={doCreateOffer}></OfferForm>
    </>
        
}
    

export default OfferList;