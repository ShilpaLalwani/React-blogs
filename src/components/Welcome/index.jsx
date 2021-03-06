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
            <nav className="flexbox mb-50 mt-50">
              <a className="btn btn-white disabled">
                <i className="ti-arrow-left fs-9 mr-4" /> Newer</a>
              <a className="btn btn-white" href="#">Older
                <i className="ti-arrow-right fs-9 ml-4" />
              </a>
            </nav>  
          </div>
        </div>
      </main>  
     
    </div>
    
  
}

export default Welecome;