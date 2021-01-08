import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/history';
import HistoryContent from './HistoryContent/HistoryContent';
import Pagination from '../Pagination/Pagination';
import './History.css';
import Search from '../Search/Search';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';

const History = (props) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [pageNumbers, setPageNumbers] = useState([]);
    const [itemsPerPage] = useState(8);
    const [searchedData, setSearchedData] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        props.onGetHistory();
        return (() => {
            props.onEmptyHistory();
        })
    }, []);

    useEffect(() => {
        if (isArrayNotEmpty(props.history)) {
            const pageNumbers = [];
            for (let i = 1; i <= Math.ceil(props.history.length / itemsPerPage); i++) {
                pageNumbers.push(i);
            }
            setPageNumbers(pageNumbers);
        }
    }, [props.history]);

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
            searchedData = props.history.filter((item) => {
                return item.title.toLowerCase().search(value.toLowerCase()) !== -1;
            });
        }
        setSearchedData(searchedData.slice(0, itemsPerPage));
        setSearchValue(value);
    }, 500);

    const updateCurrentPage = (number) => {
        setCurrentPage(Number(number));
    };

    const isArrayNotEmpty = (arr) => {
        return arr.length > 0;
    };

    const isEmpty = (item) => {
        if (typeof item === 'number') {
            return false;
        }
        return item.trim() === '';
    };

    const isArrayEmpty = (arr) => {
        return arr.length === 0;
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    return (
        <>
            <Header />

            <div className="flex-item">
                <Menu />
                <Search placeholder={'Search By Title'} search={(value) => search(value)} />
            </div>

            <div className="history">
                {
                    !isEmpty(searchValue) ?
                        searchedData.slice(indexOfFirstItem, indexOfLastItem).map(item => {
                            return <HistoryContent details={item} key={item.id} />
                        })
                        :
                        props.history.slice(indexOfFirstItem, indexOfLastItem).map(item => {
                            return <HistoryContent details={item} key={item.id} />
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
        history: state.history.history,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGetHistory: () => dispatch(actionCreators.getHistory()),
        onEmptyHistory: () => dispatch(actionCreators.emptyHistory())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(History);