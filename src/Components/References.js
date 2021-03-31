import React from 'react';

function References({data}) {

    if(data){
      var references = data.references.map(function(references){
        return <p>{references.text}</p>
            // <img src={?}></img>
      })
    }

    return (
      <section id="testimonials">
      <div className="text-container">
         <div className="row">

            <div className="header-col">
               <h1><span>References</span></h1>
            </div>

            <div className="flex-container">
                  <ul className="slides">
                      {references}
                  </ul>
               </div>
            </div>
         </div>
   </section>
    );
}

export default References;
