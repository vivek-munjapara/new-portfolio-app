"use client"
/* import dynamic from 'next/dynamic'; */
import EmailComponent from "./EmailComponent";
import {
   FaEnvelopeCircleCheck
} from "react-icons/fa6";
/* const EmailComponent = dynamic(() => import('./EmailComponent'), {
   ssr: false
}); */

const FooterEmail = () => {
   return (
      <EmailComponent email={<FaEnvelopeCircleCheck className="text-2xl cursor-pointer" />} />
   )
}

export default FooterEmail