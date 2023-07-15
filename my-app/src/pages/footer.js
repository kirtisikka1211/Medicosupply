import WhatsAppIcon from "../components/whatsapp";
import Link from "next/link";
const Footer = () => {
    return (
    <footer className="p-6 bg-black text-white  ">
	<div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-4 md:grid-cols-4 ">
		<div className="flex flex-col space-y-5 mx-auto ">
			<h2 className="font-medium">About Us</h2>
			<div className="flex flex-col space-y-4 text-sm text-white-400">
              
            <div className="font-open-sans flex items-center  leading-[1.75rem]">
              This organization is set up by people <br/> who want to come out of
              their comfort<br/> zone and utilize their resources for the<br/> betterment
              of the nation.
            </div>
			</div>
		</div>
		<div className="flex flex-col space-y-4 mx-auto">
			<h2 className="font-medium">Quick Links</h2>
			<div className="flex flex-col space-y-4 text-sm text-white-400">
				<Link  href="/About" passHref>About</Link>
                <div className="border-2 border-solid w-38 border-gray-700 inline-block mb-2"></div>
				<Link href="/contact" passHref>Contact</Link>
                <div className="border-2 border-solid w-38 border-gray-700 inline-block mb-2"></div>
				<Link  href="/donate" passHref>Donation</Link>
                <div className="border-2 border-solid w-38 border-gray-700 inline-block mb-2"></div>
				
			</div>
		</div>
		<div className="flex flex-col space-y-5 mx-auto">
			<h2 className="font-medium">Contact info</h2>
			<div className="flex flex-col space-y-4 text-sm text-white-400">
				<div >   PRAGATI MAIDAN (SUB OFFICE),</div>
          
				<div > CENTRAL DELHI, India (IN), Pin Code:- 110001</div>

				<div >91+ 9868XXXXX</div>
                <div > info@booktownfoundation.org</div>
				
			</div>
		</div>
		<div className="justify-self-end self-end sm:order-last bg-black">
			<WhatsAppIcon/>
		</div>
	
	</div>
	<div className="flex items-center justify-center px-6 pt-8 text-sm  ">
        <div className="flex flex-col space-y-2 text-sm text-white-400">
		
		<div className="text-white-400 text-center ">© Copyright 2023. All Rights Reserved
		<span className="text-darksalmon ml-2">KT-KS</span>
		</div>
        </div>
	</div>
</footer>
        
     
     

        
   
    
    );
}
export default Footer;