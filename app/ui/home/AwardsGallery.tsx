"use client"
import Image from "next/image"
import { StaticImageData } from "next/image"
import { useEffect } from "react"
import GLightbox from 'glightbox';
interface AwardItem {
   image: {
      src: string;
   } & StaticImageData;
}

interface AwardsGalleryProps {
   awards: AwardItem[];
}
const AwardsGallery = ({ awards }: AwardsGalleryProps) => {
   useEffect(() => {
      const lightbox = GLightbox({
         selector: ".glightbox3",
         touchNavigation: true,
         loop: true,
      })
      return () => {
         lightbox.destroy();
      };
   }, []);

   return (
      <div>
         {awards?.map((item, i) =>
            <figure className="border border-gray-200 rounded" key={i}>
               <a href={`${item.image.src}`} className="glightbox3" data-gallery="gallery1" >
                  <Image src={item.image} alt="Focus On Growth Award" width={300} height={200} />
               </a>
            </figure>
         )}
      </div>
   )
}

export default AwardsGallery