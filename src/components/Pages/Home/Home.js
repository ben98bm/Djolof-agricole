import React from "react";
import HeroSection from "../../HeroSection";
import { homeObjOne, blocDescription1, blocDescription2, blocDescription3, blocDescription4} from "./Data";
import BlocTextSection from "../../BlocTextSection";
import CardService from "../../CardService";
import Footer from "../../Footer";
import FormContact from "../../FormContact";
import NavBar from "../../NavBar";
function Home() {
  return (
    <>
      <NavBar />
      <main
        className={
          "bg-gray-00 font-quicksand flex flex-col justify-center items-right "
        }
      >
        <HeroSection {...homeObjOne} />
        <section class="text-gray-600 body-font" id="section2">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col">
      <div class="h-1 bg-gray-200 rounded overflow-hidden">
        <div class="w-24 h-full bg-red-500"></div>
      </div>
      <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
        <h1 class="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Bienvenue chez Djolof Agricole</h1>
        <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0"></p>
      </div>
    </div>
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="images/legumes03.jpg">
          </img>
        </div>
        <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Avec Djolof Agricole, vos fruits et légumes cueillis le matin et livrés le lendemain !</h2>
        <p class="text-base leading-relaxed mt-2">En matière de goût, le chemin le plus court est toujours le meilleur… C’est pourquoi chez Djolof Agricole, la proximité nous tient à coeur ! Proximité des fruits, légumes et produits frais que nous sélectionnons pour vous mais aussi proximité entre vous.</p>
      </div>
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="images/a037847d-8a38-455d-abe7-f59d8fe3950f.JPG"></img>
        </div>
        <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Des Produits Frais</h2>
        <p class="text-base leading-relaxed mt-2">Consommateurs gourmands et exigeants, et nos producteurs locaux avec qui nous partageons les mêmes valeurs : transparence, qualité gustative et modes de production raisonnés et respectueux de l’environnement. Notre pari ? Vous faire (re)commander Potimarron les yeux fermés !</p>
      </div>
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="images/f12e6c58-a170-4261-bb71-bc623ca97c3e 2.JPG">
          </img>
        </div>
        <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Qualité</h2>
        <p class="text-base leading-relaxed mt-2">L'espérance de vie progressera sérieusement le jour où les légumes sentiront aussi bon que le bacon.</p>
      </div>
    </div>
  </div>
</section>
         <div class="bg-gradient-to-r from-green-800 via-green-400 to-green-200 ..." id="service">
        <h1 className="text-7xl pt-1 pl-10 shadow bg-gradient-to-r from-green-900 via-green-400 to-green-200 ... rounded-xl h-20 font-bold mt-16 text-red-600" >
          Concepts
        </h1>
        {/* <BlocTextSection {...blocDescription1} /> */}
        <h1 className="text-3xl pt-5 pl-12 pb-3 text-xl-box text-white font-bold border-b  border-indigo-200 ">Notre challenge</h1>
        <div class="box-border pt-5 pl-5 h-100 w-100 p-4 border- ...">
          <div class="bbg-gradient-to-r pt-1 pr-1 pl-1 pb-1 text-white from-green-800 via-green-400 to-green-200 ...">
          <ul>
                <li> - Rendre accessible au Sénégalais lambda tous les produits alimentaires du terroir, et s’il faut aller se ravitailler à Fongolimbi, Djolof Agricole s’y dévouera.</li>
                <li> - Aussi une consommation saine de 5 fruits et légumes par jour doit être possible dans les ménages.</li>
          </ul> 
          </div>
        </div>
        <div class="flex flex-wrap pt-5 justify-center">
  <div class="w-6/12 sm:w-4/12 px-1">
    <img src="images/shutterstock_471412526.jpg" />
  </div>
</div>
        {/* <BlocTextSection {...blocDescription2} /> */} 
        <h1 className="text-3xl pt-5 pl-12 pb-3 text-xl-box text-white font-bold border-b  border-indigo-200  ">Pourquoi choisir DJolof agricole?</h1>     
        <div class="box-border pt-5 pl-5 h-100 w-100 p-4 border- ...">
        <div class="bg-gradient-to-r pt-1 pr-1 pl-1 pb-1 text-white from-green-800 via-green-400 to-green-200 ...">
          <ul>
              <li>1-  Nous assurons des produits frais et livrés à domicile ou dans votre quartier.</li>
              <li>2- Grâce aux navettes de nos camionnettes aménagées, vous aurez chez vous votre marché de proximité.</li>
              <li>3- Des prix abordables, au prix du grand marché voire moins chers</li>
              <li>4 En vous abonnant au service Sama Ndugu, vous êtes livrés à domicile, et avec 5 à 10% de réduction.</li>
          </ul>
          </div>
          </div>
          <div class="flex flex-wrap pt-5 justify-center">
  <div class="w-6/12 sm:w-4/12 px-4">
    <img src="images/unnamed.png" />
  </div>
</div>
        
        
        {/* <BlocTextSection {...blocDescription3} /> */} 
        <h1 className="text-3xl pt-5 pl-12 pb-3 text-xl-box text-white font-bold border-b  border-indigo-200  ">Fonctionnement</h1>  
        <div class="box-border pt-5 pl-5 h-100 w-100 p-4 border- ...">  
        <div class="bg-gradient-to-r pt-1 pr-1 pl-1 pb-1 text-white from-green-800 via-green-400 to-green-200 ...">    
        <p>Une à 2 fois par semaine, Djolof Agricole, votre louma de proximité sillonne ses points de vente pour distribuer</p>  
        <p>à bord de ses camionnettes aménagées toutes sortes de légumes frais à des coûts compétitifs moins chers que le marché.</p>
        </div>
        </div>
        <div class="flex flex-wrap pt-5 justify-center">
  <div class="w-6/12 sm:w-4/12 px-4">
    <img src="images/r.jpg" />
  </div>
</div>
        {/* <BlocTextSection {...blocDescription3} /> */} 
         <h1 className="text-3xl pt-5 pl-12 pb-3 text-xl-box text-white font-bold border-b  border-indigo-200  ">Commandes spéciales</h1>   
         <div class="box-border pt-5 pl-5 h-100 w-100 p-4 border- ..."> 
         <div class="bg-gradient-to-r text-white from-green-800 via-green-400 to-green-200 ...">
        <p>Si notre cible principale demeure les ménages,  Djolof agricole se tient à la disposition de chacun pour des commandes spéciales: événements, traiteurs, restaurants, hôtels...</p>
        </div>
        </div>
        <div class="flex flex-wrap pt-5 justify-center">
  <div class="w-6/12 sm:w-4/12 px-4">
    <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shopping-bag-full-of-fresh-vegetables-and-fruits-royalty-free-image-1128687123-1564523576.jpg?crop=1.00xw:0.751xh;0,0.212xh&resize=1200:*" alt="..." class="shadow-lg rounded max-w-full h-auto align-middle border-none" />
  </div>
</div>
        <CardService />
        <FormContact />
          </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
