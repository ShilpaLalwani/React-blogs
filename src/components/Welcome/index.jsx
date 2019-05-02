import React from 'react';
import Article from '../Article';
import Banner from '../Banner';

const Welecome = () => {
    return <div>
      <Banner title="Latest Blog Posts"
        subTitle="Read and get updated on how we progress."
        backgroundImage="url(assets/img/bg-gift.jpg)" />
      <main className="main-content bg-gray">
        <div className="row">
          <div className="col-12 col-lg-6 offset-lg-3">
            <Article />
            <hr/>
            <Article />
          </div>
        </div>
      </main>    
    </div>
    
  
}

export default Welecome;