import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/address';
import AddressContent from './AddressContent/AddressContent';
import './Address.css';
import Pagination from '../Pagination/Pagination';
import Search from '../Search/Search';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';

const Address = (props) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [pageNumbers, setPageNumbers] = useState([]);
    const [itemsPerPage] = useState(12);
    const [searchedData, setSearchedData] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        props.onGetAddress();
        return (() => {
            props.onEmptyAddress();
        })
    }, []);

    useEffect(() => {
        if (isArrayNotEmpty(props.address)) {
            const pageNumbers = [];
            for (let i = 1; i <= Math.ceil(props.address.length / itemsPerPage); i++) {
                pageNumbers.push(i);
            }
            setPageNumbers(pageNumbers);
        }
    }, [props.address]);

    const isArrayNotEmpty = (arr) => {
        return arr.length > 0;
    };

    const debounce = (func, wait, immediate) => {
        var timeout;
    
        return function executedFunction() {
            var context = this;
            var args = arguments;
    
            var later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
    
            var callNow = immediate && !timeout;
    
            clearTimeout(timeout);
    
            timeout = setTimeout(later, wait);
    
            if (callNow) func.apply(context, args);
        };
    };
    
    const search = debounce((value) => {
        let searchedData = [];
        if (!isEmpty(value)) {
            searchedData = props.address.filter((item) => {
                return item.payload_id.toLowerCase().search(value.toLowerCase()) !== -1;
            });
        }
        setSearchedData(searchedData.slice(0, itemsPerPage));
        setSearchValue(value);
    }, 500);

    const isEmpty = (item) => {
        if (typeof item === 'number') {
            return false;
        }
        return item.trim() === '';
    };

    const isArrayEmpty = (arr) => {
        return arr.length === 0;
    };

    const updateCurrentPage = (number) => {
        setCurrentPage(Number(number));
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return (
        <>
        <Header />
        
            <div className="flex-item">
                <Menu />
                <Search placeholder={'Search By Id'} search={(value) => search(value)} />
            </div>
            <div className="address">
                {
                    !isEmpty(searchValue) ?
                        searchedData.slice(indexOfFirstItem, indexOfLastItem).map((item, index) => {
                            return <AddressContent details={item} key={index} />
                        })
                        :
                        props.address.slice(indexOfFirstItem, indexOfLastItem).map((item, index) => {
                            return <AddressContent details={item} key={index} />
                        })
                }
            </div>
            {
                !isEmpty(searchValue) && isArrayEmpty(searchedData) &&
                <div className="no-data">
                    <h3>No Data Found</h3>
                </div>
            }
            {
                isEmpty(searchValue) &&
                <Pagination
                    currentPage={currentPage}
                    pageNumbers={pageNumbers}
                    updateCurrentPage={(number) => updateCurrentPage(number)} />
            }
        </>
    );
};

const mapStateToProps = state => {
    return {
        address: state.address.address
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGetAddress: () => dispatch(actionCreators.getAddress()),
        onEmptyAddress: () => dispatch(actionCreators.emptyAddress())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Address);