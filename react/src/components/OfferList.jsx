import Offer from "./Offer"
import OfferForm from './OfferForm';

import { useState, useEffect } from 'react';
import { getOffers,   createOffers,    deleteOffers} from "../api/offers";

const OfferList = () => {
    const [offers, setOffers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    

    const doCreateOffer = (offer) => {
        setIsLoading(true);
        createOffers(offer)
            .then((newOffer) => {
                 setOffers((prevState) => [...prevState, newOffer]);
                 setIsLoading(false);       
            }); 
    };
    

    const doDeleteOffer = (offer) => {
       setIsLoading(true);
       deleteOffers(offer)
       .then(loadData);
       setIsLoading(false)
   };

    const loadData = () => {
        setIsLoading(true);
        getOffers().then((offers) => {    
            setOffers(offers);
            setIsLoading(false)
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
        <OfferForm createOffer={doCreateOffer}></OfferForm>
    </>
        
}
    

export default OfferList;