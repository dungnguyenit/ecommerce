import React from 'react';
import '../../../style/search.scss';

const Search = () => {
    return (
        <>
            <div className='search'>
                <div className='search-item'>
                    <div>
                        <img src={require('../../../image/Search.png')} alt="logo"
                            className="search-icon" />
                    </div>
                    <div>
                        <input className='search-ip' placeholder="living room" />
                    </div>

                </div>
                <div>
                    <select className="select" >
                        <option value="cuong">Best match</option>
                        <option value="minh">test1</option>
                        <option value="chipheo">test2</option>
                    </select>


                </div>
            </div>


        </>
    )
}

export default Search