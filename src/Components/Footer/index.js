import React  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = (props)=>{
return (<footer className="bg-red-700 fixed inset-x-0 bottom-0">
                <ul className="text-white flex flex-col md:flex-row md:justify-between md:px-20 lg:px-32 px-8 py-2">
                    <li className="flex py-2"><FontAwesomeIcon  icon="map-marker-alt" color="#fff" size="lg"/><p>{props.ubicacion}</p></li>
                    <li className="flex py-2"><FontAwesomeIcon icon= "envelope" color="#fff" size="lg" /><p>{props.email}</p></li>
                    <li className="flex py-2"><FontAwesomeIcon icon={["fab", "instagram"]} color="#fff" size="lg" /><p  className="focus:underline md:no-underline hover:underline"><a target="_blank" href="https://www.instagram.com/giulicataldi/">{props.instagram}</a>
</p></li>
                </ul>
        </footer>)
}


export default Footer;